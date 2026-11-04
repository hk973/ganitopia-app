import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb, FieldValue } from '@/lib/firebase/admin';

export async function POST(request: NextRequest) {
  try {
    const { path, sessionId, device, referrer } = await request.json();

    if (!path || !sessionId) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const safePathKey = path.replace(/\//g, '_').replace(/[^a-zA-Z0-9_-]/g, '') || 'home';
    const safeDevice = device === 'mobile' ? 'mobile' : 'desktop';

    const db = getAdminDb();
    const ref = db.collection('visitorAnalytics').doc(today);

    await ref.set(
      {
        totalViews: FieldValue.increment(1),
        [`pages.${safePathKey}`]: FieldValue.increment(1),
        [`devices.${safeDevice}`]: FieldValue.increment(1),
        // Track unique sessions by storing sessionId in a subcollection
        lastUpdated: new Date().toISOString(),
      },
      { merge: true }
    );

    // Track unique visitors in subcollection
    await ref.collection('sessions').doc(sessionId.slice(0, 36)).set(
      { lastSeen: new Date().toISOString(), device: safeDevice },
      { merge: true }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Fail silently — analytics should not break the app
    return NextResponse.json({ ok: false });
  }
}
