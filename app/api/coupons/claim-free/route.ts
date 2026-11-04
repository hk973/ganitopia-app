import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/firebase/session';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { getPricingSettings } from '@/lib/settings/pricing';
import { validateCoupon, incrementCouponUsage } from '@/lib/settings/coupons';
import { recordPurchase } from '@/lib/settings/purchases';

export async function POST(request: NextRequest) {
  try {
    // 1. Authenticate user
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json({ success: false, error: 'Please log in to claim free course access.' }, { status: 401 });
    }

    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.uid) {
      return NextResponse.json({ success: false, error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    const uid = decoded.uid;
    const { code, course } = await request.json();

    if (!code || !course || !['math', 'science', 'bundle'].includes(course)) {
      return NextResponse.json({ success: false, error: 'Invalid coupon or course selection.' }, { status: 400 });
    }

    // 2. Validate that the coupon gives 100% free access
    const settings = await getPricingSettings();
    const coursePricePaise =
      course === 'bundle'
        ? settings.bundlePrice
        : course === 'math'
        ? settings.mathPrice
        : settings.sciencePrice;

    const validation = await validateCoupon(code, course as 'math' | 'science' | 'bundle', coursePricePaise);

    if (!validation.valid) {
      return NextResponse.json({ success: false, error: validation.error || 'Invalid coupon.' }, { status: 400 });
    }

    if (!validation.isFree) {
      return NextResponse.json(
        {
          success: false,
          error: 'This coupon provides a discount, not a 100% free waiver. Please checkout via Razorpay.',
        },
        { status: 400 }
      );
    }

    const freePaymentId = `FREE_${code.trim().toUpperCase()}_${Date.now()}`;
    const freeOrderId = `ORDER_FREE_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    // 3. Record purchase to give immediate course access
    await recordPurchase(uid, course, {
      razorpayPaymentId: freePaymentId,
      razorpayOrderId: freeOrderId,
      amount: 0,
    });

    // 4. Update Firestore user doc and payments collection if configured
    if (isAdminConfigured()) {
      try {
        const db = getAdminDb();
        await db.collection('payments').doc(freeOrderId).set({
          uid,
          amount: 0,
          course,
          status: 'captured',
          razorpayPaymentId: freePaymentId,
          razorpayOrderId: freeOrderId,
          couponCode: code.trim().toUpperCase(),
          paymentType: 'coupon_waiver',
          createdAt: new Date().toISOString(),
          verifiedAt: new Date().toISOString(),
        });

        await db.collection('users').doc(uid).set(
          {
            paymentStatus: 'paid',
            lastFreeClaim: new Date().toISOString(),
          },
          { merge: true }
        );
      } catch (dbErr) {
        console.warn('Firestore update on free coupon claim warning:', dbErr);
      }
    }

    // 5. Increment coupon usage counter
    await incrementCouponUsage(code);

    return NextResponse.json({
      success: true,
      course,
      redirectUrl: '/dashboard?payment=success',
      message: '🎉 Free course access unlocked successfully!',
    });
  } catch (error) {
    console.error('Error claiming free coupon:', error);
    return NextResponse.json({ success: false, error: 'Failed to process coupon claim.' }, { status: 500 });
  }
}
