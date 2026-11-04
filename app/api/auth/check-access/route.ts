import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/firebase/session';
import { hasCourseAccess } from '@/lib/settings/purchases';

/**
 * GET /api/auth/check-access?course=math|science
 *
 * Called internally by proxy/middleware to verify whether the authenticated user
 * has purchased access to a specific course.
 *
 * Returns: { access: boolean }
 */
export async function GET(request: NextRequest) {
  try {
    const courseParam = request.nextUrl.searchParams.get('course');
    if (courseParam !== 'math' && courseParam !== 'science') {
      return NextResponse.json({ access: false }, { status: 400 });
    }
    const course: 'math' | 'science' = courseParam;

    const sessionCookie = request.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json({ access: false });
    }

    const decoded = await verifySession(sessionCookie);
    if (!decoded || !decoded.uid) {
      return NextResponse.json({ access: false });
    }

    // Admins always have access to preview and test all courses
    if (decoded.admin) {
      return NextResponse.json({ access: true });
    }

    const hasAccess = await hasCourseAccess(decoded.uid, course);
    return NextResponse.json({ access: hasAccess });
  } catch {
    return NextResponse.json({ access: false });
  }
}
