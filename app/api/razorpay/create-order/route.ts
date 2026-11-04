import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';
import { getPricingSettings } from '@/lib/settings/pricing';
import { savePendingOrder } from '@/lib/settings/purchases';

function isValidCoupon(couponData: Record<string, any>): boolean {
  if (!couponData.active) return false;
  if (couponData.expiresAt && new Date(couponData.expiresAt) < new Date()) return false;
  if (couponData.usedCount >= (couponData.maxUses ?? Infinity)) return false;
  return true;
}

function applyDiscount(amount: number, discountPct: number): number {
  return Math.round(amount * (1 - discountPct / 100));
}

export async function POST(request: NextRequest) {
  try {
    // 1. Verify session cookie
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.uid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const uid = decoded.uid;

    const { course, couponCode } = await request.json();

    if (!['math', 'science', 'bundle'].includes(course)) {
      return NextResponse.json({ error: 'Invalid course' }, { status: 400 });
    }

    // 2. Read live prices from persistent settings
    const settings = await getPricingSettings();
    let amount = course === 'bundle'
      ? settings.bundlePrice
      : course === 'math'
      ? settings.mathPrice
      : settings.sciencePrice;

    // 3. Apply coupon if provided
    if (couponCode && isAdminConfigured()) {
      try {
        const db = getAdminDb();
        const couponDoc = await db.collection('coupons').doc(couponCode.toUpperCase()).get();
        if (couponDoc.exists && isValidCoupon(couponDoc.data()!)) {
          amount = applyDiscount(amount, couponDoc.data()!.discountPct);
        }
      } catch (e) {
        console.warn('Coupon verification warning:', e);
      }
    }

    // 4. Create Razorpay order
    const razorpayKeyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const razorpay = new Razorpay({
      key_id: razorpayKeyId!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `rcpt_${uid.slice(0, 8)}_${Date.now()}`,
    });

    // 5. Store pending payment record
    savePendingOrder({
      orderId: order.id,
      uid,
      amount,
      course,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });

    if (isAdminConfigured()) {
      try {
        const db = getAdminDb();
        await db.collection('payments').doc(order.id).set({
          uid,
          amount,
          course,
          status: 'pending',
          razorpayOrderId: order.id,
          couponCode: couponCode || null,
          createdAt: new Date().toISOString(),
        });
      } catch (e) {
        console.warn('Failed to save pending payment to Firestore:', e);
      }
    }

    // 6. Return only the safe info — NEVER return key_secret
    return NextResponse.json({
      orderId: order.id,
      amount,
      currency: 'INR',
      keyId: razorpayKeyId,
    });
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
