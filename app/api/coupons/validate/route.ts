import { NextRequest, NextResponse } from 'next/server';
import { getPricingSettings } from '@/lib/settings/pricing';
import { validateCoupon } from '@/lib/settings/coupons';

export async function POST(request: NextRequest) {
  try {
    const { code, course } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json({ valid: false, error: 'Coupon code is required' }, { status: 400 });
    }

    if (!course || !['math', 'science', 'bundle'].includes(course)) {
      return NextResponse.json({ valid: false, error: 'Valid course is required' }, { status: 400 });
    }

    const settings = await getPricingSettings();
    const coursePricePaise =
      course === 'bundle'
        ? settings.bundlePrice
        : course === 'math'
        ? settings.mathPrice
        : settings.sciencePrice;

    const result = await validateCoupon(code, course as 'math' | 'science' | 'bundle', coursePricePaise);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error validating coupon:', error);
    return NextResponse.json(
      { valid: false, error: 'Failed to validate coupon' },
      { status: 500 }
    );
  }
}
