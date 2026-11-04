import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';

export async function POST(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.admin) return NextResponse.json({ error: 'Admin only' }, { status: 403 });

    const { uid, status } = await request.json();
    if (!uid || !['active', 'inactive'].includes(status)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    if (isAdminConfigured()) {
      await getAdminDb().collection('users').doc(uid).update({ status });
      if (status === 'inactive') {
        try {
          await getAdminAuth().revokeRefreshTokens(uid);
        } catch {}
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Set status error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
