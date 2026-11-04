import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';
import { getPendingOrder, recordPurchase } from '@/lib/settings/purchases';

export async function POST(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.uid) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    const uid = decoded.uid;

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = await request.json();

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json({ success: false, error: 'Missing payment data' }, { status: 400 });
    }

    // 1. Verify HMAC-SHA256 signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false, error: 'Invalid signature' }, { status: 400 });
    }

    // 2. Resolve order & course details
    let course = 'bundle';
    let amount = 0;

    const localOrder = getPendingOrder(razorpay_order_id);
    if (localOrder) {
      course = localOrder.course;
      amount = localOrder.amount;
    }

    if (isAdminConfigured()) {
      try {
        const db = getAdminDb();
        const paymentDoc = await db.collection('payments').doc(razorpay_order_id).get();
        if (paymentDoc.exists) {
          const paymentData = paymentDoc.data()!;
          if (paymentData.status === 'captured') {
            return NextResponse.json({ success: true, alreadyProcessed: true });
          }
          if (paymentData.uid && paymentData.uid !== uid) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 403 });
          }
          if (paymentData.course) course = paymentData.course;
          if (paymentData.amount) amount = paymentData.amount;

          // Update payment record in Firestore
          await db.collection('payments').doc(razorpay_order_id).update({
            status: 'captured',
            razorpayPaymentId: razorpay_payment_id,
            verifiedAt: new Date().toISOString(),
          });

          // Update user status
          await db.collection('users').doc(uid).set({ paymentStatus: 'paid' }, { merge: true });
        }
      } catch (dbErr) {
        console.warn('Firestore payment update warning:', dbErr);
      }
    }

    // 3. Grant course access
    await recordPurchase(uid, course, {
      razorpayPaymentId: razorpay_payment_id,
      razorpayOrderId: razorpay_order_id,
      amount,
    });

    return NextResponse.json({ success: true, course });
  } catch (error) {
    console.error('Verify payment error:', error);
    return NextResponse.json({ success: false, error: 'Verification failed' }, { status: 500 });
  }
}
