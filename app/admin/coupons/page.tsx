export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySession } from '@/lib/firebase/session';
import { getCoupons } from '@/lib/settings/coupons';
import { CouponsManager } from '@/components/admin/CouponsManager';

export default async function AdminCouponsPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) redirect('/login?next=/admin/coupons');

  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.admin) redirect('/login?next=/admin/coupons');

  const coupons = await getCoupons();
  return <CouponsManager initialCoupons={coupons} />;
}
