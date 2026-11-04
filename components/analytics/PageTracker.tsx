'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const sessionId =
      sessionStorage.getItem('ganitopia-sid') || crypto.randomUUID();
    sessionStorage.setItem('ganitopia-sid', sessionId);

    const device = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? 'mobile'
      : 'desktop';

    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: pathname,
        sessionId,
        device,
        referrer: document.referrer || '',
      }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
