import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/firebase/session';
import { toggleCouponStatus } from '@/lib/settings/coupons';

export async function POST(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { code } = await request.json();
    if (!code) {
      return NextResponse.json({ error: 'Coupon code is required' }, { status: 400 });
    }

    const updated = await toggleCouponStatus(code);
    if (!updated) {
      return NextResponse.json({ error: 'Coupon not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, coupon: updated });
  } catch (error) {
    console.error('Error toggling coupon:', error);
    return NextResponse.json({ error: 'Failed to toggle coupon' }, { status: 500 });
  }
}
