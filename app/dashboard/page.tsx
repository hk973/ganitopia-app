export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';
import { StudentDashboard } from '@/components/student/StudentDashboard';

async function getStudentData(uid: string) {
  const db = getAdminDb();
  const [userDoc, purchaseDoc, progressDoc] = await Promise.all([
    db.collection('users').doc(uid).get(),
    db.collection('purchases').doc(uid).get(),
    db.collection('studentProgress').doc(uid).get(),
  ]);
  return {
    user: userDoc.data() ?? null,
    purchases: purchaseDoc.data() ?? null,
    progress: progressDoc.data() ?? null,
  };
}

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (!sessionCookie) redirect('/login');

  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.uid) redirect('/login');

  let user = null;
  let purchases = null;
  let progress = null;

  if (isAdminConfigured()) {
    try {
      const data = await getStudentData(decoded.uid);
      user = data.user;
      purchases = data.purchases;
      progress = data.progress;
    } catch (e) {
      console.warn('Failed to load student data from Firestore:', e);
    }
  }

  return <StudentDashboard uid={decoded.uid} user={user} purchases={purchases} progress={progress} />;
}
