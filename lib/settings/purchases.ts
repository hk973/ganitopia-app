import fs from 'fs';
import path from 'path';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';

const PURCHASES_FILE = path.join(process.cwd(), 'data', 'purchases.json');

export interface CoursePurchaseEntry {
  purchasedAt: string;
  razorpayPaymentId?: string;
  razorpayOrderId?: string;
  amount?: number;
  viaBundle?: boolean;
}

export interface UserPurchases {
  [course: string]: CoursePurchaseEntry;
}

interface AllPurchases {
  [uid: string]: UserPurchases;
}

const ORDERS_FILE = path.join(process.cwd(), 'data', 'orders.json');

export interface PendingOrder {
  orderId: string;
  uid: string;
  course: string;
  amount: number;
  status: string;
  createdAt: string;
  couponCode?: string;
  razorpayPaymentId?: string;
  verifiedAt?: string;
}

function readOrders(): Record<string, PendingOrder> {
  try {
    if (fs.existsSync(ORDERS_FILE)) {
      return JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf-8'));
    }
  } catch (err) {
    console.warn('Could not read orders file:', err);
  }
  return {};
}

function writeOrders(orders: Record<string, PendingOrder>): void {
  try {
    const dir = path.dirname(ORDERS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not write orders file:', err);
  }
}

export function savePendingOrder(order: PendingOrder): void {
  const orders = readOrders();
  orders[order.orderId] = order;
  writeOrders(orders);
}

export function getPendingOrder(orderId: string): PendingOrder | null {
  const orders = readOrders();
  return orders[orderId] || null;
}

export function updateOrderStatus(
  orderId: string,
  status: string,
  details?: Partial<PendingOrder>
): void {
  const orders = readOrders();
  if (orders[orderId]) {
    orders[orderId].status = status;
    if (details) {
      Object.assign(orders[orderId], details);
    }
    writeOrders(orders);
  } else if (details?.uid && details?.course) {
    orders[orderId] = {
      orderId,
      uid: details.uid,
      course: details.course,
      amount: details.amount || 0,
      status,
      createdAt: new Date().toISOString(),
      ...details,
    };
    writeOrders(orders);
  }
}

function readLocalPurchases(): AllPurchases {
  try {
    if (fs.existsSync(PURCHASES_FILE)) {
      const data = fs.readFileSync(PURCHASES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn('Could not read local purchases file:', err);
  }
  return {};
}

function writeLocalPurchases(data: AllPurchases): void {
  try {
    const dir = path.dirname(PURCHASES_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(PURCHASES_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not write local purchases file:', err);
  }
}

export async function recordPurchase(
  uid: string,
  course: string,
  details: {
    razorpayPaymentId?: string;
    razorpayOrderId?: string;
    amount?: number;
  }
): Promise<void> {
  const now = new Date().toISOString();
  const purchaseEntry: CoursePurchaseEntry = {
    purchasedAt: now,
    ...details,
  };

  const toSave: Record<string, CoursePurchaseEntry> = {
    [course]: purchaseEntry,
  };

  // If user bought bundle, automatically grant both math & science directly as well
  if (course === 'bundle') {
    toSave.math = {
      purchasedAt: now,
      ...details,
      viaBundle: true,
    };
    toSave.science = {
      purchasedAt: now,
      ...details,
      viaBundle: true,
    };
  }

  // 1. If admin is configured, update Firestore
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      await db.collection('purchases').doc(uid).set(toSave, { merge: true });
    } catch (err) {
      console.warn('Firestore purchase save error, fallback to local:', err);
    }
  }

  // 2. Always persist locally for resilience
  const all = readLocalPurchases();
  all[uid] = {
    ...(all[uid] || {}),
    ...toSave,
  };
  writeLocalPurchases(all);
}

export async function getUserPurchases(uid: string): Promise<UserPurchases> {
  const result: UserPurchases = {};

  // 1. Read from local persistent file first
  const localAll = readLocalPurchases();
  if (localAll[uid]) {
    Object.assign(result, localAll[uid]);
  }

  // 2. Read from Firestore if configured & merge
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      const doc = await db.collection('purchases').doc(uid).get();
      if (doc.exists) {
        const data = doc.data() as UserPurchases;
        if (data) {
          Object.assign(result, data);
        }
      }
    } catch (err) {
      console.warn('Firestore getUserPurchases error, using local data:', err);
    }
  }

  // If bundle is purchased, ensure math and science are explicitly marked as unlocked
  if (result.bundle) {
    if (!result.math) {
      result.math = {
        purchasedAt: result.bundle.purchasedAt,
        razorpayPaymentId: result.bundle.razorpayPaymentId,
        razorpayOrderId: result.bundle.razorpayOrderId,
        amount: result.bundle.amount,
        viaBundle: true,
      };
    }
    if (!result.science) {
      result.science = {
        purchasedAt: result.bundle.purchasedAt,
        razorpayPaymentId: result.bundle.razorpayPaymentId,
        razorpayOrderId: result.bundle.razorpayOrderId,
        amount: result.bundle.amount,
        viaBundle: true,
      };
    }
  }

  return result;
}

export async function getUserOrders(uid: string): Promise<PendingOrder[]> {
  const ordersList: PendingOrder[] = [];
  const seenIds = new Set<string>();

  // 1. Check local orders.json
  const localOrders = readOrders();
  for (const [orderId, order] of Object.entries(localOrders)) {
    if (order.uid === uid) {
      seenIds.add(orderId);
      ordersList.push(order);
    }
  }

  // 2. Check local purchases.json (in case order was recorded as purchase)
  const localPurchases = readLocalPurchases();
  const userPurchases = localPurchases[uid];
  if (userPurchases) {
    for (const [course, entry] of Object.entries(userPurchases)) {
      if (entry.viaBundle) continue; // Don't duplicate individual subjects if bought as bundle
      const orderId = entry.razorpayOrderId || `ORD_${course.toUpperCase()}_${new Date(entry.purchasedAt).getTime()}`;
      if (!seenIds.has(orderId)) {
        seenIds.add(orderId);
        ordersList.push({
          orderId,
          uid,
          course,
          amount: entry.amount || 0,
          status: 'captured',
          razorpayPaymentId: entry.razorpayPaymentId,
          createdAt: entry.purchasedAt,
          verifiedAt: entry.purchasedAt,
        });
      }
    }
  }

  // 3. Check Firestore payments collection if configured
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      const snapshot = await db.collection('payments').where('uid', '==', uid).get();
      for (const doc of snapshot.docs) {
        if (!seenIds.has(doc.id)) {
          seenIds.add(doc.id);
          ordersList.push(doc.data() as PendingOrder);
        }
      }
    } catch (err) {
      console.warn('Firestore getUserOrders error:', err);
    }
  }

  // Sort newest first
  return ordersList.sort(
    (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
  );
}

export async function hasCourseAccess(uid: string, course: 'math' | 'science'): Promise<boolean> {
  const purchases = await getUserPurchases(uid);
  return Boolean(purchases[course]) || Boolean(purchases['bundle']);
}
