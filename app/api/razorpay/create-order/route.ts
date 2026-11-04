import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';
import { getPricingSettings } from '@/lib/settings/pricing';
import { savePendingOrder } from '@/lib/settings/purchases';
import { validateCoupon } from '@/lib/settings/coupons';

export async function POST(request: NextRequest) {
  try {
    // 1. Verify session cookie
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.uid) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }
    const uid = decoded.uid;

    const { course, couponCode } = await request.json();

    if (!['math', 'science', 'bundle'].includes(course)) {
      return NextResponse.json({ error: 'Invalid course selection.' }, { status: 400 });
    }

    // 2. Read live prices from persistent settings
    const settings = await getPricingSettings();
    let amount =
      course === 'bundle'
        ? settings.bundlePrice
        : course === 'math'
        ? settings.mathPrice
        : settings.sciencePrice;

    let appliedCoupon: string | null = null;

    // 3. Apply coupon if provided
    if (couponCode && typeof couponCode === 'string' && couponCode.trim()) {
      const cleanCode = couponCode.trim().toUpperCase();
      const validation = await validateCoupon(cleanCode, course, amount);

      if (!validation.valid) {
        return NextResponse.json({ error: validation.error || 'Invalid coupon code.' }, { status: 400 });
      }

      if (validation.isFree) {
        return NextResponse.json(
          {
            error: 'This coupon grants 100% free access! Claim it without payment.',
            isFree: true,
          },
          { status: 400 }
        );
      }

      amount = validation.discountedPrice;
      appliedCoupon = cleanCode;
    }

    // Razorpay requires at least 100 paise (₹1)
    if (amount < 100) {
      return NextResponse.json({ error: 'Order amount too low for payment gateway.' }, { status: 400 });
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
      couponCode: appliedCoupon || undefined,
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
          couponCode: appliedCoupon || null,
          createdAt: new Date().toISOString(),
        });
      } catch (e) {
        console.warn('Failed to save pending payment to Firestore:', e);
      }
    }

    // 6. Return only the safe info — NEVER return key_secret
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: razorpayKeyId,
    });
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json({ error: 'Failed to create payment order.' }, { status: 500 });
  }
}
