'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, BarChart3, CreditCard, User, LogOut, Home } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { GlassCard } from '@/components/shared/GlassCard';
import { LockedContent } from '@/components/shared/LockedContent';
import { SkeuoButton } from '@/components/shared/SkeuoButton';

interface Props {
  uid: string;
  user: Record<string, any> | null;
  purchases: Record<string, any> | null;
  progress: Record<string, any> | null;
}

export function StudentDashboard({ uid, user, purchases, progress }: Props) {
  const { signOut } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const hasMath = Boolean(purchases?.math);
  const hasScience = Boolean(purchases?.science);
  const hasBundle = Boolean(purchases?.bundle);
  const mathUnlocked = hasMath || hasBundle;
  const scienceUnlocked = hasScience || hasBundle;

  const handleSignOut = async () => {
    await signOut();
    await fetch('/api/auth/session', { method: 'DELETE' });
    router.push('/');
  };

  const name = user?.name || 'Student';
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  })();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-[var(--rule)] bg-[var(--sheet)] p-4 sticky top-14 h-[calc(100vh-3.5rem)]">
        <div className="flex flex-col gap-1 flex-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${activeTab === id ? 'bg-[var(--ap-soft)] text-[var(--ap)]' : 'text-[var(--muted)] hover:bg-[var(--paper)] hover:text-[var(--ink)]'}`}>
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </div>
        <button onClick={handleSignOut} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-[var(--muted)] hover:bg-[var(--paper)] hover:text-[var(--bad)] transition-colors">
          <LogOut className="w-4 h-4" /> Sign out
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 max-w-4xl">
        {/* Welcome banner */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--display)' }}>{greeting}, {name}! 👋</h1>
          <p className="text-[var(--muted)] text-sm mt-1">
            {mathUnlocked || scienceUnlocked
              ? 'Your courses are ready. Keep learning!'
              : 'Explore free lessons or unlock full access below.'}
          </p>
        </motion.div>

        {/* Mobile tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 md:hidden no-scrollbar">
          {tabs.map(({ id, label }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === id ? 'bg-[var(--ap-soft)] text-[var(--ap)]' : 'text-[var(--muted)] bg-[var(--paper)]'}`}>
              {label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="grid sm:grid-cols-2 gap-4">
            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold" style={{ background: 'var(--ap-soft)', color: 'var(--ap)' }}>Σ</div>
                <div><div className="font-bold">Mathematics</div><div className="text-xs text-[var(--muted)]">14 chapters</div></div>
              </div>
              {mathUnlocked ? (
                <div>
                  <div className="text-xs text-[var(--ok)] font-bold mb-2">✓ Unlocked</div>
                  <Link href="/math"><SkeuoButton variant="primary" size="sm">Continue Learning</SkeuoButton></Link>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-[var(--muted)] mb-2">Full 14 Chapters</div>
                  <Link href="/pricing"><SkeuoButton variant="ghost" size="sm">Unlock — ₹999</SkeuoButton></Link>
                </div>
              )}
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl" style={{ background: 'var(--sci-soft)', color: 'var(--sci)' }}>⚗</div>
                <div><div className="font-bold">Science</div><div className="text-xs text-[var(--muted)]">13 chapters</div></div>
              </div>
              {scienceUnlocked ? (
                <div>
                  <div className="text-xs text-[var(--ok)] font-bold mb-2">✓ Unlocked</div>
                  <Link href="/science"><SkeuoButton variant="science" size="sm">Continue Learning</SkeuoButton></Link>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-[var(--muted)] mb-2">Full 13 Chapters</div>
                  <Link href="/pricing"><SkeuoButton variant="ghost" size="sm">Unlock — ₹999</SkeuoButton></Link>
                </div>
              )}
            </GlassCard>
          </div>
        )}

        {/* Courses */}
        {activeTab === 'courses' && (
          <div className="flex flex-col gap-4">
            <GlassCard className="p-5">
              <h3 className="font-bold mb-3">Mathematics</h3>
              {mathUnlocked ? <Link href="/math" className="text-sm text-[var(--ap)] hover:underline">Browse all 14 chapters &rarr;</Link> : <LockedContent courseName="Mathematics" price={999} />}
            </GlassCard>
            <GlassCard className="p-5">
              <h3 className="font-bold mb-3">Science</h3>
              {scienceUnlocked ? <Link href="/science" className="text-sm text-[var(--sci)] hover:underline">Browse all 13 chapters &rarr;</Link> : <LockedContent courseName="Science" price={999} />}
            </GlassCard>
          </div>
        )}

        {/* Progress */}
        {activeTab === 'progress' && (
          <GlassCard className="p-6">
            <h3 className="font-bold mb-4">Learning Progress</h3>
            <p className="text-[var(--muted)] text-sm">Complete lessons to see your progress here. Your answers are automatically saved.</p>
          </GlassCard>
        )}

        {/* Payments */}
        {activeTab === 'payments' && (
          <GlassCard className="p-6">
            <h3 className="font-bold mb-4">Payment History</h3>
            {purchases && Object.keys(purchases).length > 0 ? (
              <div className="flex flex-col gap-2">
                {Object.entries(purchases).map(([course, data]: any) => (
                  <div key={course} className="flex items-center justify-between py-2 border-b border-[var(--rule)]">
                    <div><div className="font-semibold capitalize">{course} Course</div><div className="text-xs text-[var(--muted)]">{new Date(data.purchasedAt).toLocaleDateString('en-IN')}</div></div>
                    <span className="text-xs font-bold text-[var(--ok)] px-2 py-1 rounded-full bg-[var(--ok-soft)]">Paid</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[var(--muted)] text-sm">No purchases yet. <Link href="/pricing" className="text-[var(--ap)] hover:underline">View pricing</Link></p>
            )}
          </GlassCard>
        )}

        {/* Profile */}
        {activeTab === 'profile' && (
          <GlassCard className="p-6">
            <h3 className="font-bold mb-4">Profile</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div><span className="text-[var(--muted)]">Name: </span><span className="font-semibold">{user?.name}</span></div>
              <div><span className="text-[var(--muted)]">Email: </span><span className="font-semibold">{user?.email}</span></div>
              <div><span className="text-[var(--muted)]">Class: </span><span className="font-semibold">{user?.class || '9'}</span></div>
              {user?.school && <div><span className="text-[var(--muted)]">School: </span><span className="font-semibold">{user.school}</span></div>}
            </div>
            <div className="mt-4">
              <SkeuoButton variant="ghost" size="sm" onClick={handleSignOut} icon={<LogOut className="w-4 h-4" />}>Sign Out</SkeuoButton>
            </div>
          </GlassCard>
        )}
      </main>
    </div>
  );
}
