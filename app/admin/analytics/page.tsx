export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySession } from '@/lib/firebase/session';
import { getAnalyticsData } from '@/lib/analytics/data';
import { AnalyticsDashboard } from '@/components/admin/AnalyticsDashboard';

export default async function AdminAnalyticsPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) redirect('/login?next=/admin/analytics');

  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.admin) redirect('/login?next=/admin/analytics');

  const data = await getAnalyticsData();
  return <AnalyticsDashboard initialData={data} />;
}
