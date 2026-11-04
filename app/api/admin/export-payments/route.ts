import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) return new NextResponse('Unauthorized', { status: 401 });
    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.admin) return new NextResponse('Forbidden', { status: 403 });

    if (!isAdminConfigured()) {
      return new NextResponse('Order ID,Payment ID,UID,Amount (INR),Course,Status,Date\n', {
        headers: { 'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename="payments.csv"' },
      });
    }

    const snapshot = await getAdminDb().collection('payments').orderBy('createdAt', 'desc').get();
    const rows = ['Order ID,Payment ID,UID,Amount (paise),Course,Status,Created At,Verified At'];

    snapshot.docs.forEach((d) => {
      const data = d.data();
      rows.push(`"${d.id}","${data.razorpayPaymentId || ''}","${data.uid || ''}","${data.amount || ''}","${data.course || ''}","${data.status || ''}","${data.createdAt || ''}","${data.verifiedAt || ''}"`);
    });

    return new NextResponse(rows.join('\n'), {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="payments.csv"',
      },
    });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}
