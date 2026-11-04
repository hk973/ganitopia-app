export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';
import { PaymentsPanel } from '@/components/admin/PaymentsPanel';

export default async function AdminPaymentsPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) redirect('/admin-login');

  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.admin) redirect('/admin-login');

  let payments: any[] = [];
  if (isAdminConfigured()) {
    try {
      const snapshot = await getAdminDb().collection('payments').orderBy('createdAt', 'desc').limit(100).get();
      payments = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.warn('Failed to fetch payments from Firestore:', e);
    }
  }

  return <PaymentsPanel payments={payments} />;
}
