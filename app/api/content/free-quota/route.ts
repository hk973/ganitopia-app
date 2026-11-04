import { NextResponse } from 'next/server';
import { getPricingSettings } from '@/lib/settings/pricing';

/**
 * GET /api/content/free-quota
 * Returns the number of free sections/lessons per chapter.
 * Cached at CDN level for 60 seconds.
 * Called internally by middleware/proxy.
 */
export async function GET() {
  try {
    const settings = await getPricingSettings();
    const freeSectionsPerChapter = Number(settings.freeLessonsPerChapter) || 0;
    return NextResponse.json(
      { freeSectionsPerChapter },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
      }
    );
  } catch {
    return NextResponse.json({ freeSectionsPerChapter: 0 });
  }
}
