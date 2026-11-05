'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import {
  onAuthStateChanged,
  signOut as firebaseSignOut,
  type User,
} from 'firebase/auth';
import { auth } from '@/lib/firebase/client';
import { AuthContext } from './useAuth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const syncedUid = useRef<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setLoading(false);
      if (u) {
        try {
          const token = await u.getIdTokenResult();
          setIsAdmin(Boolean(token.claims.admin));

          // Ensure session cookie is fresh and valid on the server
          if (syncedUid.current !== u.uid) {
            syncedUid.current = u.uid;
            const idToken = await u.getIdToken();
            await fetch('/api/auth/session', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ idToken }),
              credentials: 'include',
            });
          }
        } catch {
          setIsAdmin(false);
        }
      } else {
        syncedUid.current = null;
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const signOut = useCallback(async () => {
    syncedUid.current = null;
    try {
      await fetch('/api/auth/session', { method: 'DELETE' });
    } catch {}
    await firebaseSignOut(auth);
    setUser(null);
    setIsAdmin(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
