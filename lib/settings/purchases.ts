import fs from 'fs';
import path from 'path';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';

const PURCHASES_FILE = path.join(process.cwd(), 'data', 'purchases.json');

interface UserPurchases {
  [course: string]: {
    purchasedAt: string;
    razorpayPaymentId?: string;
    razorpayOrderId?: string;
    amount?: number;
  };
}

interface AllPurchases {
  [uid: string]: UserPurchases;
}

const ORDERS_FILE = path.join(process.cwd(), 'data', 'orders.json');

interface PendingOrder {
  orderId: string;
  uid: string;
  course: string;
  amount: number;
  status: string;
  createdAt: string;
  couponCode?: string;
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
  const purchaseEntry = {
    purchasedAt: new Date().toISOString(),
    ...details,
  };

  // 1. If admin is configured, update Firestore
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      await db.collection('purchases').doc(uid).set(
        {
          [course]: purchaseEntry,
        },
        { merge: true }
      );
    } catch (err) {
      console.warn('Firestore purchase save error, fallback to local:', err);
    }
  }

  // 2. Always persist locally for resilience
  const all = readLocalPurchases();
  all[uid] = {
    ...(all[uid] || {}),
    [course]: purchaseEntry,
  };
  writeLocalPurchases(all);
}

export async function hasCourseAccess(uid: string, course: 'math' | 'science'): Promise<boolean> {
  // 1. Try Firestore if configured
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      const doc = await db.collection('purchases').doc(uid).get();
      if (doc.exists) {
        const data = doc.data() as UserPurchases;
        if (data && (Boolean(data[course]) || Boolean(data['bundle']))) {
          return true;
        }
      }
    } catch (err) {
      console.warn('Firestore purchase check warning, falling back to local:', err);
    }
  }

  // 2. Check local fallback
  const all = readLocalPurchases();
  const userPurchases = all[uid];
  if (userPurchases) {
    return Boolean(userPurchases[course]) || Boolean(userPurchases['bundle']);
  }

  return false;
}
