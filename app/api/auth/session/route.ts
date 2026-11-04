import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, isAdminConfigured } from '@/lib/firebase/admin';

export async function POST(request: NextRequest) {
  try {
    const { idToken } = await request.json();
    if (!idToken) {
      return NextResponse.json({ error: 'No token provided' }, { status: 400 });
    }

    const expiresIn = 5 * 24 * 60 * 60 * 1000; // 5 days in ms
    let sessionCookie = idToken;

    if (isAdminConfigured()) {
      try {
        sessionCookie = await getAdminAuth().createSessionCookie(idToken, { expiresIn });
      } catch (adminError) {
        console.warn('Firebase Admin createSessionCookie skipped:', (adminError as any)?.message);
      }
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
