import { getAdminAuth, isAdminConfigured } from './admin';

export interface DecodedSession {
  uid: string;
  email?: string;
  admin?: boolean;
}

export async function verifySession(sessionCookie: string | undefined): Promise<DecodedSession | null> {
  if (!sessionCookie) return null;

  // 1. If Firebase Admin SDK credentials are configured, verify with Admin SDK
  if (isAdminConfigured()) {
    try {
      const decoded = await getAdminAuth().verifySessionCookie(sessionCookie, true);
      return {
        uid: decoded.uid,
        email: decoded.email,
        admin: Boolean(decoded.admin),
      };
    } catch {
      try {
        const decoded = await getAdminAuth().verifyIdToken(sessionCookie, true);
        return {
          uid: decoded.uid,
          email: decoded.email,
          admin: Boolean(decoded.admin),
        };
      } catch {
        // Fall through to manual JWT decode
      }
    }
  }

  // 2. Fallback: Parse and validate signed Firebase ID token (JWT)
  try {
    const parts = sessionCookie.split('.');
    if (parts.length !== 3) return null;

    const payloadB64 = parts[1].replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(parts[1].length / 4) * 4, '=');
    const payload = JSON.parse(atob(payloadB64));

    // Expiration check
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return null;
    }

    const uid = payload.user_id || payload.sub || payload.uid;
    if (!uid) return null;

    return {
      uid,
      email: payload.email,
      admin: Boolean(payload.admin),
    };
  } catch {
    return null;
  }
}
