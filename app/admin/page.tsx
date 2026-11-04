export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';
import { AdminDashboard } from '@/components/admin/AdminDashboard';

async function getKPIs() {
  if (!isAdminConfigured()) {
    return { totalStudents: 0, activeStudents: 0, paidStudents: 0, unpaidStudents: 0, successfulPayments: 0, totalRevenue: 0, pendingPayments: 0, failedTransactions: 0 };
  }
  try {
    const db = getAdminDb();
    const [usersSnap, paymentsSnap] = await Promise.all([
      db.collection('users').get(),
      db.collection('payments').get(),
    ]);

    const users = usersSnap.docs.map((d) => d.data());
    const payments = paymentsSnap.docs.map((d) => d.data());

    const totalStudents = users.length;
    const activeStudents = users.filter((u) => u.status === 'active').length;
    const paidStudents = users.filter((u) => u.paymentStatus === 'paid').length;
    const unpaidStudents = totalStudents - paidStudents;
    const successfulPayments = payments.filter((p) => p.status === 'captured').length;
    const totalRevenue = payments
      .filter((p) => p.status === 'captured')
      .reduce((sum, p) => sum + (p.amount || 0), 0);
    const pendingPayments = payments.filter((p) => p.status === 'pending').length;
    const failedTransactions = payments.filter((p) => p.status === 'failed').length;

    return { totalStudents, activeStudents, paidStudents, unpaidStudents, successfulPayments, totalRevenue, pendingPayments, failedTransactions };
  } catch {
    return { totalStudents: 0, activeStudents: 0, paidStudents: 0, unpaidStudents: 0, successfulPayments: 0, totalRevenue: 0, pendingPayments: 0, failedTransactions: 0 };
  }
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) redirect('/admin-login');

  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.admin) redirect('/admin-login');
  const kpis = await getKPIs();
  return <AdminDashboard kpis={kpis} adminName={decoded.email || 'Admin'} />;
}
