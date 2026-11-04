import fs from 'fs';
import path from 'path';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';

export interface Coupon {
  code: string;
  description: string;
  type: 'percentage' | 'flat' | 'free';
  value: number; // Percentage (e.g. 20 for 20%) or Flat Rupee amount (e.g. 200 for ₹200) or 0 for free
  applicableCourse: 'all' | 'math' | 'science' | 'bundle';
  maxUses: number | null; // null or 0 for unlimited
  usedCount: number;
  minOrderAmount?: number; // Minimum order value in Rupees
  expiresAt: string | null; // ISO Date string or null
  active: boolean;
  createdAt: string;
  updatedAt?: string;
}

const COUPONS_FILE = path.join(process.cwd(), 'data', 'coupons.json');

// Default initial coupons so the platform has active templates out-of-the-box
export const DEFAULT_COUPONS: Coupon[] = [
  {
    code: 'WELCOME10',
    description: 'Welcome New Student 10% Discount',
    type: 'percentage',
    value: 10,
    applicableCourse: 'all',
    maxUses: 500,
    usedCount: 24,
    expiresAt: null,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    code: 'SAVE200',
    description: 'Flat ₹200 Off on Any Course or Bundle',
    type: 'flat',
    value: 200,
    applicableCourse: 'all',
    maxUses: 100,
    usedCount: 18,
    minOrderAmount: 900,
    expiresAt: null,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    code: 'SCIENCE50',
    description: '50% Off Flash Discount on Class 9 Science',
    type: 'percentage',
    value: 50,
    applicableCourse: 'science',
    maxUses: 50,
    usedCount: 7,
    expiresAt: null,
    active: true,
    createdAt: new Date().toISOString(),
  },
  {
    code: 'FREE100',
    description: '100% Free Full Scholarship Waiver',
    type: 'free',
    value: 100,
    applicableCourse: 'all',
    maxUses: 20,
    usedCount: 2,
    expiresAt: null,
    active: true,
    createdAt: new Date().toISOString(),
  },
];

export async function getCoupons(): Promise<Coupon[]> {
  // 1. Try reading from Firestore
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      const snapshot = await db.collection('coupons').get();
      if (!snapshot.empty) {
        return snapshot.docs.map((doc) => doc.data() as Coupon);
      }
    } catch (e) {
      console.warn('Could not read coupons from Firestore, falling back to local file:', e);
    }
  }

  // 2. Read from local persistent file
  try {
    if (fs.existsSync(COUPONS_FILE)) {
      const raw = fs.readFileSync(COUPONS_FILE, 'utf8');
      const list = JSON.parse(raw);
      if (Array.isArray(list) && list.length > 0) {
        return list;
      }
    }
  } catch (e) {
    console.warn('Could not read coupons.json:', e);
  }

  // 3. Fallback to default coupons and persist them
  try {
    const dir = path.dirname(COUPONS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(COUPONS_FILE, JSON.stringify(DEFAULT_COUPONS, null, 2), 'utf8');
  } catch {}

  return DEFAULT_COUPONS;
}

export async function saveCoupon(couponData: Partial<Coupon> & { code: string }): Promise<Coupon> {
  const cleanCode = couponData.code.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '');
  const existingList = await getCoupons();
  const existing = existingList.find((c) => c.code === cleanCode);

  const updated: Coupon = {
    code: cleanCode,
    description: couponData.description?.trim() || `${cleanCode} Coupon`,
    type: couponData.type || 'percentage',
    value: Math.max(0, Number(couponData.value || 0)),
    applicableCourse: couponData.applicableCourse || 'all',
    maxUses: couponData.maxUses ? Number(couponData.maxUses) : null,
    usedCount: existing?.usedCount ?? 0,
    minOrderAmount: couponData.minOrderAmount ? Number(couponData.minOrderAmount) : undefined,
    expiresAt: couponData.expiresAt || null,
    active: couponData.active !== undefined ? Boolean(couponData.active) : true,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const nextList = existing
    ? existingList.map((c) => (c.code === cleanCode ? updated : c))
    : [...existingList, updated];

  // Save to local file
  try {
    const dir = path.dirname(COUPONS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(COUPONS_FILE, JSON.stringify(nextList, null, 2), 'utf8');
  } catch (e) {
    console.error('Failed to write coupons.json:', e);
  }

  // Save to Firestore
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      await db.collection('coupons').doc(cleanCode).set(updated, { merge: true });
    } catch (e) {
      console.warn('Failed to sync coupon to Firestore:', e);
    }
  }

  return updated;
}

export async function deleteCoupon(code: string): Promise<boolean> {
  const cleanCode = code.trim().toUpperCase();
  const existingList = await getCoupons();
  const nextList = existingList.filter((c) => c.code !== cleanCode);

  try {
    fs.writeFileSync(COUPONS_FILE, JSON.stringify(nextList, null, 2), 'utf8');
  } catch (e) {
    console.error('Failed to update coupons.json on delete:', e);
  }

  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      await db.collection('coupons').doc(cleanCode).delete();
    } catch (e) {
      console.warn('Failed to delete coupon from Firestore:', e);
    }
  }

  return true;
}

export async function toggleCouponStatus(code: string): Promise<Coupon | null> {
  const cleanCode = code.trim().toUpperCase();
  const existingList = await getCoupons();
  const target = existingList.find((c) => c.code === cleanCode);
  if (!target) return null;

  return await saveCoupon({ ...target, active: !target.active });
}

export interface CouponValidationResult {
  valid: boolean;
  error?: string;
  coupon?: Coupon;
  originalPrice: number; // in paise
  discountedPrice: number; // in paise
  discountAmount: number; // in paise
  isFree: boolean;
  message?: string;
}

export async function validateCoupon(
  code: string,
  course: 'math' | 'science' | 'bundle',
  coursePricePaise: number
): Promise<CouponValidationResult> {
  const cleanCode = code.trim().toUpperCase();
  const coupons = await getCoupons();
  const coupon = coupons.find((c) => c.code === cleanCode);

  if (!coupon) {
    return {
      valid: false,
      error: `Coupon "${cleanCode}" does not exist.`,
      originalPrice: coursePricePaise,
      discountedPrice: coursePricePaise,
      discountAmount: 0,
      isFree: false,
    };
  }

  if (!coupon.active) {
    return {
      valid: false,
      error: `Coupon "${cleanCode}" is currently inactive.`,
      originalPrice: coursePricePaise,
      discountedPrice: coursePricePaise,
      discountAmount: 0,
      isFree: false,
    };
  }

  if (coupon.expiresAt && new Date(coupon.expiresAt) < new Date()) {
    return {
      valid: false,
      error: `Coupon "${cleanCode}" has expired on ${new Date(coupon.expiresAt).toLocaleDateString('en-IN')}.`,
      originalPrice: coursePricePaise,
      discountedPrice: coursePricePaise,
      discountAmount: 0,
      isFree: false,
    };
  }

  if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) {
    return {
      valid: false,
      error: `Coupon "${cleanCode}" has reached its maximum redemption limit.`,
      originalPrice: coursePricePaise,
      discountedPrice: coursePricePaise,
      discountAmount: 0,
      isFree: false,
    };
  }

  if (coupon.applicableCourse !== 'all' && coupon.applicableCourse !== course) {
    return {
      valid: false,
      error: `Coupon "${cleanCode}" is only applicable to the ${coupon.applicableCourse.toUpperCase()} course.`,
      originalPrice: coursePricePaise,
      discountedPrice: coursePricePaise,
      discountAmount: 0,
      isFree: false,
    };
  }

  const coursePriceRupees = coursePricePaise / 100;
  if (coupon.minOrderAmount && coursePriceRupees < coupon.minOrderAmount) {
    return {
      valid: false,
      error: `Minimum order value for coupon "${cleanCode}" is ₹${coupon.minOrderAmount}.`,
      originalPrice: coursePricePaise,
      discountedPrice: coursePricePaise,
      discountAmount: 0,
      isFree: false,
    };
  }

  // Calculate discount
  let discountPaise = 0;
  if (coupon.type === 'free' || coupon.value >= 100 && coupon.type === 'percentage') {
    discountPaise = coursePricePaise;
  } else if (coupon.type === 'percentage') {
    discountPaise = Math.round((coursePricePaise * coupon.value) / 100);
  } else if (coupon.type === 'flat') {
    discountPaise = Math.min(coursePricePaise, Math.round(coupon.value * 100));
  }

  const discountedPrice = Math.max(0, coursePricePaise - discountPaise);
  const isFree = discountedPrice === 0;

  let message = `🎉 Coupon applied: You saved ₹${Math.round(discountPaise / 100)}!`;
  if (isFree) {
    message = `🎉 100% Free Scholarship Waiver Applied! Enroll without payment.`;
  }

  return {
    valid: true,
    coupon,
    originalPrice: coursePricePaise,
    discountedPrice,
    discountAmount: discountPaise,
    isFree,
    message,
  };
}

export async function incrementCouponUsage(code: string): Promise<void> {
  const cleanCode = code.trim().toUpperCase();
  const existingList = await getCoupons();
  const target = existingList.find((c) => c.code === cleanCode);
  if (!target) return;

  target.usedCount = (target.usedCount || 0) + 1;
  target.updatedAt = new Date().toISOString();

  try {
    fs.writeFileSync(COUPONS_FILE, JSON.stringify(existingList, null, 2), 'utf8');
  } catch {}

  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      await db.collection('coupons').doc(cleanCode).update({
        usedCount: (target.usedCount || 0),
        updatedAt: new Date().toISOString(),
      });
    } catch {}
  }
}
