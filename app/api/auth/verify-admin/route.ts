import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';
import { verifySession } from '@/lib/firebase/session';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { idToken, email, password } = body;

    const adminEmail = (process.env.ADMIN_EMAIL || 'sagarvjoshi@gmail.com').toLowerCase();
    const adminPassword = process.env.ADMIN_PASSWORD || '1236';

    // 1. Direct admin password check fallback
    if (email && password && email.toLowerCase() === adminEmail && password === adminPassword) {
      // Create admin session token payload
      const payload = {
        uid: 'admin_' + Date.now(),
        email: adminEmail,
        admin: true,
        exp: Math.floor(Date.now() / 1000) + 5 * 24 * 60 * 60, // 5 days
      };
      const headerB64 = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
      const payloadB64 = btoa(JSON.stringify(payload)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      const adminToken = `${headerB64}.${payloadB64}.direct_admin`;

      const response = NextResponse.json({ isAdmin: true, token: adminToken });
      response.cookies.set('session', adminToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 5 * 24 * 60 * 60,
        path: '/',
      });
      return response;
    }

    // 2. Token-based check
    if (idToken) {
      const decoded = await verifySession(idToken);
      const isEmailMatch = decoded?.email && decoded.email.toLowerCase() === adminEmail;
      const isAdmin = Boolean(decoded?.admin) || Boolean(isEmailMatch);

      if (!isAdmin) {
        return NextResponse.json({ isAdmin: false }, { status: 403 });
      }

      let requirePasswordChange = false;
      if (isAdminConfigured()) {
        try {
          const adminConfig = await getAdminDb().collection('adminConfig').doc('main').get();
          if (adminConfig.exists) {
            requirePasswordChange = Boolean(adminConfig.data()?.requirePasswordChange);
          }
        } catch (e) {
          console.warn('Failed to read adminConfig from Firestore:', e);
        }
      }

      return NextResponse.json({ isAdmin: true, requirePasswordChange });
    }

    return NextResponse.json({ isAdmin: false }, { status: 400 });
  } catch (error) {
    console.error('Admin verify error:', error);
    return NextResponse.json({ isAdmin: false }, { status: 401 });
  }
}
