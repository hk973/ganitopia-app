export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';
import { getUserPurchases, getUserOrders } from '@/lib/settings/purchases';
import { StudentDashboard } from '@/components/student/StudentDashboard';

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<{ payment?: string; course?: string }>;
}) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (!sessionCookie) redirect('/login?next=/dashboard');

  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.uid) redirect('/login?next=/dashboard');

  const params = searchParams ? await searchParams : {};
  const paymentSuccess = params?.payment === 'success';

  // 1. Fetch purchases and orders from unified storage (Firestore + persistent JSON)
  const purchases = await getUserPurchases(decoded.uid);
  const orders = await getUserOrders(decoded.uid);

  // 2. Fetch user profile and progress
  let user: Record<string, any> | null = null;
  let progress: Record<string, any> | null = null;

  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      const [userDoc, progressDoc] = await Promise.all([
        db.collection('users').doc(decoded.uid).get(),
        db.collection('studentProgress').doc(decoded.uid).get(),
      ]);
      if (userDoc.exists) user = userDoc.data() ?? null;
      if (progressDoc.exists) progress = progressDoc.data() ?? null;
    } catch (e) {
      console.warn('Failed to load student Firestore doc:', e);
    }
  }

  // Fallback user metadata from session token
  if (!user) {
    const rawName = decoded.email ? decoded.email.split('@')[0] : 'Student';
    const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    user = {
      uid: decoded.uid,
      email: decoded.email || '',
      name: formattedName,
      class: '9',
      paymentStatus: purchases && Object.keys(purchases).length > 0 ? 'paid' : 'unpaid',
    };
  }

  return (
    <StudentDashboard
      uid={decoded.uid}
      user={user}
      purchases={purchases}
      progress={progress}
      orders={orders}
      paymentSuccess={paymentSuccess}
    />
  );
}
