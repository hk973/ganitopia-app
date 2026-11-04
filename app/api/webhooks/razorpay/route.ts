import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { getAdminDb } from '@/lib/firebase/admin';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      return new NextResponse('Missing signature', { status: 400 });
    }

    // Verify webhook signature
    const expectedSig = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest('hex');

    if (expectedSig !== signature) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const event = JSON.parse(body);
    const db = getAdminDb();

    if (event.event === 'payment.captured') {
      const payment = event.payload?.payment?.entity;
      if (!payment) return new NextResponse('OK');

      const orderId = payment.order_id;
      const paymentId = payment.id;

      // Idempotent: only process if not already captured
      const paymentDoc = await db.collection('payments').doc(orderId).get();
      if (paymentDoc.exists && paymentDoc.data()?.status !== 'captured') {
        const { uid, course } = paymentDoc.data()!;
        const batch = db.batch();
        batch.update(db.collection('payments').doc(orderId), {
          status: 'captured',
          razorpayPaymentId: paymentId,
          verifiedAt: new Date().toISOString(),
          source: 'webhook',
        });
        batch.update(db.collection('users').doc(uid), { paymentStatus: 'paid' });
        batch.set(
          db.collection('purchases').doc(uid),
          { [course]: { purchasedAt: new Date().toISOString(), razorpayPaymentId: paymentId, razorpayOrderId: orderId } },
          { merge: true }
        );
        await batch.commit();
      }
    } else if (event.event === 'payment.failed') {
      const payment = event.payload?.payment?.entity;
      if (payment?.order_id) {
        await db.collection('payments').doc(payment.order_id).update({
          status: 'failed',
          failedAt: new Date().toISOString(),
        }).catch(() => {});
      }
    }

    return new NextResponse('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    return new NextResponse('Error', { status: 500 });
  }
}
