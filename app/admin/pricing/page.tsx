export const dynamic = 'force-dynamic';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySession } from '@/lib/firebase/session';
import { getPricingSettings } from '@/lib/settings/pricing';
import { PricingEditor } from '@/components/admin/PricingEditor';

export default async function AdminPricingPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) redirect('/admin-login');

  const decoded = await verifySession(sessionCookie);
  if (!decoded || !decoded.admin) redirect('/admin-login');

  const settings = await getPricingSettings();
  return <PricingEditor settings={settings as any} />;
}
