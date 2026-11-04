export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';
import { StudentsPanel } from '@/components/admin/StudentsPanel';

export default async function AdminStudentsPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) redirect('/admin-login');

  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.admin) redirect('/admin-login');

  let students: any[] = [];
  if (isAdminConfigured()) {
    try {
      const snapshot = await getAdminDb().collection('users').orderBy('registeredAt', 'desc').limit(50).get();
      students = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.warn('Failed to fetch students from Firestore:', e);
    }
  }

  return <StudentsPanel students={students} />;
}
