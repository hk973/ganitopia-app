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
      return new NextResponse('Name,Email,Mobile,Registered,Status,Payment Status,School\n', {
        headers: { 'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename="students.csv"' },
      });
    }

    const snapshot = await getAdminDb().collection('users').get();
    const rows = ['Name,Email,Mobile,Registered,Status,Payment Status,School'];

    snapshot.docs.forEach((d) => {
      const data = d.data();
      const reg = data.registeredAt?.toDate?.()?.toISOString?.() ?? data.registeredAt ?? '';
      rows.push(`"${data.name || ''}","${data.email || ''}","${data.mobile || ''}","${reg}","${data.status || ''}","${data.paymentStatus || ''}","${data.school || ''}"`);
    });

    return new NextResponse(rows.join('\n'), {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="students.csv"',
      },
    });
  } catch (error) {
    return new NextResponse('Error', { status: 500 });
  }
}
