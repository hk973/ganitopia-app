import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, isAdminConfigured } from '@/lib/firebase/admin';

export async function POST(request: NextRequest) {
  try {
    const { idToken } = await request.json();
    if (!idToken) {
      return NextResponse.json({ error: 'No token provided' }, { status: 400 });
    }

    const expiresIn = 5 * 24 * 60 * 60 * 1000; // 5 days in ms
    let sessionCookie: string = idToken;

    if (isAdminConfigured()) {
      try {
        const adminCookie = await getAdminAuth().createSessionCookie(idToken, { expiresIn });
        if (adminCookie) sessionCookie = adminCookie;
      } catch (adminError) {
        console.warn('Firebase Admin createSessionCookie skipped:', (adminError as any)?.message);
      }
    }

    // Fallback: If Admin SDK is not configured or failed, parse client ID token and mint a 5-day session
    if (sessionCookie === idToken) {
      try {
        const parts = idToken.split('.');
        if (parts.length === 3) {
          const payloadB64 = parts[1].replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(parts[1].length / 4) * 4, '=');
          const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString('utf8'));
          const uid = payload.user_id || payload.sub || payload.uid;
          if (uid) {
            const sessionPayload = {
              uid,
              email: payload.email,
              admin: Boolean(payload.admin),
              name: payload.name || (payload.email ? payload.email.split('@')[0] : 'Student'),
              exp: Math.floor(Date.now() / 1000) + Math.floor(expiresIn / 1000), // 5 days
            };
            const headerB64 = Buffer.from(JSON.stringify({ alg: 'none', typ: 'JWT' })).toString('base64');
            const bodyB64 = Buffer.from(JSON.stringify(sessionPayload)).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
            sessionCookie = `${headerB64}.${bodyB64}.session_token`;
          }
        }
      } catch (decodeErr) {
        console.warn('Fallback session decoding error:', decodeErr);
      }
    }

    if (!sessionCookie) {
      sessionCookie = idToken;
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set('session', sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: expiresIn / 1000,
      path: '/',
    });
    return response;
  } catch (error) {
    console.error('Session creation error:', error);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('session');
  return response;
}
