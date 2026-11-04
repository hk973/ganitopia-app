import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/firebase/session';
import { getAnalyticsData } from '@/lib/analytics/data';

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.admin) {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const data = await getAnalyticsData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching admin analytics:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
