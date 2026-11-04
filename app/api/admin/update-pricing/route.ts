import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/firebase/session';
import { savePricingSettings } from '@/lib/settings/pricing';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.admin) return NextResponse.json({ error: 'Admin only' }, { status: 403 });

    const data = await request.json();
    const {
      mathPrice, sciencePrice, bundlePrice,
      discountPct, offerLabel, offerExpiry,
      freeLessonsPerChapter, mode
    } = data;

    // Validate prices are positive integers
    if (mathPrice < 0 || sciencePrice < 0 || bundlePrice < 0) {
      return NextResponse.json({ error: 'Prices must be positive' }, { status: 400 });
    }

    await savePricingSettings({
      mathPrice: Number(mathPrice),
      sciencePrice: Number(sciencePrice),
      bundlePrice: Number(bundlePrice),
      discountPct: Number(discountPct) || 0,
      offerLabel: offerLabel || '',
      offerExpiry: offerExpiry || null,
      freeLessonsPerChapter: isNaN(Number(freeLessonsPerChapter)) ? 0 : Number(freeLessonsPerChapter),
      mode: mode === 'live' ? 'live' : 'test',
    });

    // Trigger ISR revalidation for pricing page
    revalidatePath('/pricing');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update pricing error:', error);
    return NextResponse.json({ error: 'Failed to update pricing' }, { status: 500 });
  }
}
