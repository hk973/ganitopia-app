import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/firebase/session';
import { getCoupons, saveCoupon, deleteCoupon, Coupon } from '@/lib/settings/coupons';

async function checkAdmin(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.value;
  if (!sessionCookie) return null;
  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.admin) return null;
  return decoded;
}

export async function GET(request: NextRequest) {
  try {
    const admin = await checkAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const coupons = await getCoupons();
    return NextResponse.json({ success: true, coupons });
  } catch (error) {
    console.error('Error fetching coupons:', error);
    return NextResponse.json({ error: 'Failed to fetch coupons' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await checkAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      code,
      description,
      type,
      value,
      applicableCourse,
      maxUses,
      minOrderAmount,
      expiresAt,
      active,
    } = body;

    if (!code || typeof code !== 'string' || !code.trim()) {
      return NextResponse.json({ error: 'Coupon code is required' }, { status: 400 });
    }

    if (!['percentage', 'flat', 'free'].includes(type)) {
      return NextResponse.json({ error: 'Invalid coupon type' }, { status: 400 });
    }

    const saved = await saveCoupon({
      code: code.trim().toUpperCase(),
      description: description || undefined,
      type,
      value: type === 'free' ? 100 : Number(value || 0),
      applicableCourse: applicableCourse || 'all',
      maxUses: maxUses ? Number(maxUses) : null,
      minOrderAmount: minOrderAmount ? Number(minOrderAmount) : undefined,
      expiresAt: expiresAt || null,
      active: active !== undefined ? Boolean(active) : true,
    });

    return NextResponse.json({ success: true, coupon: saved });
  } catch (error) {
    console.error('Error saving coupon:', error);
    return NextResponse.json({ error: 'Failed to save coupon' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const admin = await checkAdmin(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    let code = searchParams.get('code');

    if (!code) {
      try {
        const body = await request.json();
        code = body.code;
      } catch {}
    }

    if (!code) {
      return NextResponse.json({ error: 'Coupon code is required' }, { status: 400 });
    }

    await deleteCoupon(code);
    return NextResponse.json({ success: true, message: `Coupon ${code} deleted` });
  } catch (error) {
    console.error('Error deleting coupon:', error);
    return NextResponse.json({ error: 'Failed to delete coupon' }, { status: 500 });
  }
}
