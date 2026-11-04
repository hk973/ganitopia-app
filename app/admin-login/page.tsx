'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login?next=/admin');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--paper)]">
      <div className="text-center space-y-2">
        <div className="w-8 h-8 border-2 border-[var(--ap)] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-[var(--muted)]">Redirecting to unified login...</p>
      </div>
    </div>
  );
}
