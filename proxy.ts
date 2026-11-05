import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ---------- paywall helpers ----------

function getLessonIndex(lessonId: string): number {
  if (/^l\d+$/i.test(lessonId)) {
    const num = parseInt(lessonId.slice(1), 10);
    return isNaN(num) ? 999 : num - 1;
  }
  return 999;
}

function getSectionIndex(sectionId: string): number {
  if (/^s\d+$/i.test(sectionId)) {
    const num = parseInt(sectionId.slice(1), 10);
    return isNaN(num) ? 999 : num - 1;
  }
  return 999;
}

async function fetchFreeSections(req: NextRequest): Promise<number> {
  // We store the value in Firestore paymentSettings/main.
  // Proxy runs on Node.js runtime and calls internal API route with caching.
  try {
    const url = new URL('/api/content/free-quota', req.url);
    const res = await fetch(url.toString(), {
      headers: { 'x-internal': '1' },
      next: { revalidate: 60 },
    } as RequestInit & { next?: { revalidate: number } });
    if (res.ok) {
      const data = await res.json();
      const val = Number(data.freeSectionsPerChapter);
      return isNaN(val) ? 0 : val;
    }
  } catch {
    // fallback
  }
  return 0;
}

async function checkAccess(req: NextRequest, course: 'math' | 'science'): Promise<boolean> {
  const sessionCookie = req.cookies.get('session')?.value;
  if (!sessionCookie) return false;

  // 1. Check if token is for admin (admins have full access)
  try {
    const parts = sessionCookie.split('.');
    if (parts.length === 3) {
      const payloadB64 = parts[1].replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(parts[1].length / 4) * 4, '=');
      const payload = JSON.parse(atob(payloadB64));
      if (payload.admin) return true;
    }
  } catch (err) {
    // Fall through to API check
  }

  // 2. Fallback to internal API route
  try {
    const url = new URL(`/api/auth/check-access?course=${course}`, req.url);
    const res = await fetch(url.toString(), {
      headers: {
        cookie: req.headers.get('cookie') ?? '',
        'x-internal': '1',
      },
    });
    if (res.ok) {
      const data = await res.json();
      return Boolean(data.access);
    }
  } catch {
    // network error → deny access
  }
  return false;
}

export async function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.value;
  const pathname = request.nextUrl.pathname;

  // Redirect legacy /admin-login to unified /login
  if (pathname === '/admin-login') {
    return NextResponse.redirect(new URL('/login?next=/admin', request.url));
  }

  const isAdminRoute = pathname.startsWith('/admin');
  const isDashboardRoute = pathname.startsWith('/dashboard');

  // Handle Admin & Dashboard routes
  if (isAdminRoute || isDashboardRoute) {
    const loginRedirectUrl = new URL('/login', request.url);
    loginRedirectUrl.searchParams.set('next', pathname);

    if (!sessionCookie) {
      return NextResponse.redirect(loginRedirectUrl);
    }

    try {
      const parts = sessionCookie.split('.');
      if (parts.length !== 3) throw new Error('Invalid token');
      const payloadB64 = parts[1].replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(parts[1].length / 4) * 4, '=');
      const payload = JSON.parse(atob(payloadB64));

      if (payload.exp * 1000 < Date.now()) {
        const response = NextResponse.redirect(loginRedirectUrl);
        response.cookies.delete('session');
        return response;
      }

      if (isAdminRoute && !payload.admin) {
        return NextResponse.redirect(loginRedirectUrl);
      }
    } catch {
      return NextResponse.redirect(loginRedirectUrl);
    }

    return NextResponse.next();
  }

  // Handle Paywall routes (/math, /science)
  if (pathname.startsWith('/math/') || pathname.startsWith('/science/')) {
    const parts = pathname.split('/').filter(Boolean);
    const subject = parts[0] as 'math' | 'science';

    const freeQuota = await fetchFreeSections(request);

    // If accessing chapter outline (/math/1 or /science/1):
    // When freeQuota > 0, allow seeing the chapter outline.
    // When freeQuota === 0 (no free lessons), entering chapter requires access!
    if (parts.length === 2) {
      if (freeQuota > 0) {
        return NextResponse.next();
      }

      if (!sessionCookie) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('next', pathname);
        return NextResponse.redirect(loginUrl);
      }

      const hasAccess = await checkAccess(request, subject);
      if (!hasAccess) {
        const pricingUrl = new URL('/pricing', request.url);
        pricingUrl.searchParams.set('locked', '1');
        pricingUrl.searchParams.set('course', subject);
        return NextResponse.redirect(pricingUrl);
      }

      return NextResponse.next();
    }

    // Specific lesson or section (parts.length >= 3)
    const itemKey = parts[2] ?? '';
    const indexInChapter =
      subject === 'science'
        ? getSectionIndex(itemKey)
        : getLessonIndex(itemKey);

    // Within free quota — let through without any auth
    if (indexInChapter < freeQuota) {
      return NextResponse.next();
    }

    // Beyond free quota — need a session
    if (!sessionCookie) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Has session — check purchase
    const hasAccess = await checkAccess(request, subject);
    if (!hasAccess) {
      const pricingUrl = new URL('/pricing', request.url);
      pricingUrl.searchParams.set('locked', '1');
      pricingUrl.searchParams.set('course', subject);
      return NextResponse.redirect(pricingUrl);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/math/:path+',
    '/science/:path+',
  ],
};
