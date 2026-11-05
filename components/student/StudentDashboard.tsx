'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, BarChart3, CreditCard, User, LogOut, Home,
  CheckCircle2, Sparkles, ShieldCheck, Copy, Check, ArrowRight,
  ExternalLink, Award, FileText
} from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { GlassCard } from '@/components/shared/GlassCard';
import { LockedContent } from '@/components/shared/LockedContent';
import { SkeuoButton } from '@/components/shared/SkeuoButton';
import { fireConfetti } from '@/lib/effects/confetti';
import { playSuccessChime } from '@/lib/audio/soundEffects';

interface Props {
  uid: string;
  user: Record<string, any> | null;
  purchases: Record<string, any> | null;
  progress: Record<string, any> | null;
  orders?: any[];
  paymentSuccess?: boolean;
}

export function StudentDashboard({
  uid,
  user,
  purchases,
  progress,
  orders = [],
  paymentSuccess = false,
}: Props) {
  const { signOut } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [showCelebration, setShowCelebration] = useState(paymentSuccess);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const hasMath = Boolean(purchases?.math);
  const hasScience = Boolean(purchases?.science);
  const hasBundle = Boolean(purchases?.bundle);
  const mathUnlocked = hasMath || hasBundle;
  const scienceUnlocked = hasScience || hasBundle;

  useEffect(() => {
    if (paymentSuccess) {
      playSuccessChime();
      fireConfetti();
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);

  const copyText = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopiedId(txt);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSignOut = async () => {
    await signOut();
    await fetch('/api/auth/session', { method: 'DELETE' });
    router.push('/');
  };

  const name = user?.name || user?.email?.split('@')[0] || 'Student';
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
    { id: 'payments', label: 'Payment History', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  // Consolidate payment history items
  const paymentRecords = orders.length > 0 ? orders : Object.entries(purchases || {}).map(([c, d]: any) => ({
    orderId: d.razorpayOrderId || `PURCHASE_${c.toUpperCase()}`,
    course: c,
    amount: d.amount || 0,
    status: 'captured',
    razorpayPaymentId: d.razorpayPaymentId,
    createdAt: d.purchasedAt,
  }));

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 shrink-0 border-r border-[var(--rule)] bg-[var(--sheet)] p-4 sticky top-14 h-[calc(100vh-3.5rem)]">
        <div className="mb-4 px-3 py-2 rounded-2xl bg-[var(--card)] border border-[var(--rule)]">
          <div className="text-xs text-[var(--muted)] font-medium">Signed in as</div>
          <div className="text-sm font-bold text-[var(--ink)] truncate">{name}</div>
          {hasBundle ? (
            <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> Combo Bundle Active
            </div>
          ) : mathUnlocked || scienceUnlocked ? (
            <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-black uppercase tracking-wider">
              <CheckCircle2 className="w-3 h-3" /> Course Unlocked
            </div>
          ) : (
            <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-[var(--muted)] text-[10px] font-bold">
              Free Tier
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1 flex-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === id
                  ? 'bg-[var(--ap-soft)] text-[var(--ap)] font-bold shadow-sm'
                  : 'text-[var(--muted)] hover:bg-[var(--paper)] hover:text-[var(--ink)]'
              }`}
            >
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </div>

        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-[var(--muted)] hover:bg-[var(--paper)] hover:text-[var(--bad)] transition-colors"
        >
          <LogOut className="w-4 h-4" /> Sign out
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 max-w-4xl">
        {/* Payment Success Celebration Alert */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-5 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-blue-500/20 border-2 border-emerald-500/40 text-emerald-900 dark:text-emerald-100 relative overflow-hidden shadow-xl"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black" style={{ fontFamily: 'var(--display)' }}>
                    Payment Verified &amp; Full Access Unlocked! 🎉
                  </h3>
                  <p className="text-xs sm:text-sm mt-1 text-emerald-800 dark:text-emerald-200">
                    Congratulations! Your Class 9 course is fully active with lifetime access.
                    Every concept lab, NCERT chapter, formula simulation, and walkthrough is ready.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Welcome banner */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-[var(--ink)]" style={{ fontFamily: 'var(--display)' }}>
                {greeting}, {name}! 👋
              </h1>
              <p className="text-[var(--muted)] text-xs sm:text-sm mt-1">
                {mathUnlocked && scienceUnlocked
                  ? 'Complete Class 9 Mastery is unlocked. Har concept, ek prayog!'
                  : mathUnlocked
                  ? 'Class 9 Mathematics is unlocked and ready. Keep learning!'
                  : scienceUnlocked
                  ? 'Class 9 Science is unlocked and ready. Keep learning!'
                  : 'Explore free interactive lessons or unlock full access below.'}
              </p>
            </div>

            {hasBundle && (
              <div className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold text-xs flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Class 9 Combo Active</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Mobile tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 md:hidden no-scrollbar">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === id ? 'bg-[var(--ap-soft)] text-[var(--ap)] font-bold' : 'text-[var(--muted)] bg-[var(--paper)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Mathematics Card */}
              <GlassCard className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg"
                        style={{ background: 'var(--ap-soft)', color: 'var(--ap)' }}
                      >
                        Σ
                      </div>
                      <div>
                        <div className="font-bold text-base text-[var(--ink)]">Mathematics</div>
                        <div className="text-xs text-[var(--muted)]">14 NCERT chapters · 84 lessons</div>
                      </div>
                    </div>

                    {mathUnlocked && (
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                        ✓ Unlocked
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[var(--muted)] mb-4">
                    Coordinate geometry labs, number systems, polynomials, surface areas, and proofs.
                  </p>
                </div>

                {mathUnlocked ? (
                  <div className="pt-2 border-t border-[var(--rule)] flex items-center justify-between">
                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Full Access
                    </span>
                    <Link href="/math">
                      <SkeuoButton variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                        Continue Learning
                      </SkeuoButton>
                    </Link>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-[var(--rule)] flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--ink)]">₹999 One-time</span>
                    <Link href="/pricing">
                      <SkeuoButton variant="ghost" size="sm">
                        Unlock Course
                      </SkeuoButton>
                    </Link>
                  </div>
                )}
              </GlassCard>

              {/* Science Card */}
              <GlassCard className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl"
                        style={{ background: 'var(--sci-soft)', color: 'var(--sci)' }}
                      >
                        ⚗
                      </div>
                      <div>
                        <div className="font-bold text-base text-[var(--ink)]">Science</div>
                        <div className="text-xs text-[var(--muted)]">13 NCERT chapters · Physics, Chem, Bio</div>
                      </div>
                    </div>

                    {scienceUnlocked && (
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                        ✓ Unlocked
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[var(--muted)] mb-4">
                    Real-time kinematics simulations, atom models, cell organelles, sound waves, and gravitation.
                  </p>
                </div>

                {scienceUnlocked ? (
                  <div className="pt-2 border-t border-[var(--rule)] flex items-center justify-between">
                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Full Access
                    </span>
                    <Link href="/science">
                      <SkeuoButton variant="science" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                        Continue Learning
                      </SkeuoButton>
                    </Link>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-[var(--rule)] flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--ink)]">₹999 One-time</span>
                    <Link href="/pricing">
                      <SkeuoButton variant="ghost" size="sm">
                        Unlock Course
                      </SkeuoButton>
                    </Link>
                  </div>
                )}
              </GlassCard>
            </div>

            {/* Special Class 9 Bible Card */}
            <div className="rounded-3xl p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white relative overflow-hidden shadow-lg">
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    <span>Master NCERT Revision Desk</span>
                  </div>
                  <h3 className="text-xl font-black" style={{ fontFamily: 'var(--display)' }}>
                    Class 9th Bible
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-lg">
                    Comprehensive chapter-by-chapter cheat sheets, formulas, key definitions, exemplar questions, and visual summary diagrams.
                  </p>
                </div>

                <Link href="/bible">
                  <SkeuoButton variant="primary" size="md" className="!bg-amber-500 !text-slate-950 font-bold">
                    Open Bible Desk &rarr;
                  </SkeuoButton>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* My Courses Tab */}
        {activeTab === 'courses' && (
          <div className="flex flex-col gap-4">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-[var(--ink)]">Mathematics (Class 9)</h3>
                  <p className="text-xs text-[var(--muted)]">14 Complete NCERT Chapters</p>
                </div>
                {mathUnlocked ? (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-xs border border-emerald-500/20">
                    ✓ Active Lifetime Access
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 font-bold text-xs">
                    Locked
                  </span>
                )}
              </div>

              {mathUnlocked ? (
                <div>
                  <p className="text-xs text-[var(--muted)] mb-4">
                    Explore all 14 interactive chapters from Number Systems to Circles and Surface Areas.
                  </p>
                  <Link href="/math">
                    <SkeuoButton variant="primary" size="md">
                      Browse All 14 Mathematics Chapters &rarr;
                    </SkeuoButton>
                  </Link>
                </div>
              ) : (
                <LockedContent courseName="Mathematics" price={999} />
              )}
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-[var(--ink)]">Science (Class 9)</h3>
                  <p className="text-xs text-[var(--muted)]">13 Chapters · Physics, Chemistry &amp; Biology</p>
                </div>
                {scienceUnlocked ? (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-xs border border-emerald-500/20">
                    ✓ Active Lifetime Access
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 font-bold text-xs">
                    Locked
                  </span>
                )}
              </div>

              {scienceUnlocked ? (
                <div>
                  <p className="text-xs text-[var(--muted)] mb-4">
                    Explore all 13 interactive science chapters with live experiment labs and concept simulations.
                  </p>
                  <Link href="/science">
                    <SkeuoButton variant="science" size="md">
                      Browse All 13 Science Chapters &rarr;
                    </SkeuoButton>
                  </Link>
                </div>
              ) : (
                <LockedContent courseName="Science" price={999} />
              )}
            </GlassCard>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <GlassCard className="p-6">
            <h3 className="font-bold text-lg mb-2">Learning Progress</h3>
            <p className="text-[var(--muted)] text-sm mb-6">
              Track your answered questions, lab experiments completed, and chapter mastery.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-[var(--sheet)] border border-[var(--rule)]">
                <div className="text-xs text-[var(--muted)] font-medium">Math Lessons</div>
                <div className="text-2xl font-black mt-1 text-[var(--ap)]">
                  {progress?.mathAnsweredCount || 0} / 84
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--sheet)] border border-[var(--rule)]">
                <div className="text-xs text-[var(--muted)] font-medium">Science Labs</div>
                <div className="text-2xl font-black mt-1 text-[var(--sci)]">
                  {progress?.scienceAnsweredCount || 0} / 13
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--sheet)] border border-[var(--rule)] col-span-2 sm:col-span-1">
                <div className="text-xs text-[var(--muted)] font-medium">Total Questions</div>
                <div className="text-2xl font-black mt-1 text-amber-500">
                  {progress?.totalSolved || 0} solved
                </div>
              </div>
            </div>

            <p className="text-xs text-[var(--muted)]">
              Your practice questions, hints, and simulation inputs are automatically saved as you learn.
            </p>
          </GlassCard>
        )}

        {/* Payments & Billing Tab */}
        {activeTab === 'payments' && (
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg text-[var(--ink)]">Payment &amp; Billing History</h3>
                <p className="text-xs text-[var(--muted)]">
                  Official payment records, transaction IDs, and receipt information.
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" /> Razorpay Verified
              </div>
            </div>

            {paymentRecords.length > 0 ? (
              <div className="space-y-4">
                {paymentRecords.map((record: any, idx: number) => {
                  const courseTitle =
                    record.course === 'bundle'
                      ? 'Class 9 Math + Science Combo Bundle'
                      : record.course === 'math'
                      ? 'Class 9 Mathematics Course'
                      : 'Class 9 Science Course';

                  const formattedDate = record.createdAt
                    ? new Date(record.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Verified';

                  const amountDisplay =
                    record.amount !== undefined
                      ? record.amount === 0
                        ? '₹0 (Free Scholarship Waiver)'
                        : `₹${Math.round(record.amount / 100).toLocaleString('en-IN')}`
                      : 'Paid';

                  return (
                    <div
                      key={record.orderId || idx}
                      className="rounded-2xl p-5 border border-[var(--rule)] bg-[var(--sheet)] shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-[var(--rule)]">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-base text-[var(--ink)]">{courseTitle}</h4>
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                              ✓ Paid &amp; Active
                            </span>
                          </div>
                          <div className="text-xs text-[var(--muted)] mt-0.5">{formattedDate}</div>
                        </div>

                        <div className="text-left sm:text-right">
                          <div className="text-lg font-black text-[var(--ink)]" style={{ fontFamily: 'var(--display)' }}>
                            {amountDisplay}
                          </div>
                          <div className="text-[11px] text-emerald-600 font-bold">Lifetime Validity</div>
                        </div>
                      </div>

                      {/* Transaction IDs */}
                      <div className="grid sm:grid-cols-2 gap-2 text-xs">
                        {record.orderId && (
                          <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--card)]">
                            <span className="text-[var(--muted)]">Order ID:</span>
                            <div className="flex items-center gap-1.5 font-mono font-bold text-[var(--ink)]">
                              <span>{record.orderId}</span>
                              <button
                                onClick={() => copyText(record.orderId)}
                                title="Copy Order ID"
                                className="p-1 hover:text-[var(--ap)]"
                              >
                                {copiedId === record.orderId ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          </div>
                        )}

                        {record.razorpayPaymentId && (
                          <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--card)]">
                            <span className="text-[var(--muted)]">Payment ID:</span>
                            <div className="flex items-center gap-1.5 font-mono font-bold text-[var(--ink)]">
                              <span>{record.razorpayPaymentId}</span>
                              <button
                                onClick={() => copyText(record.razorpayPaymentId)}
                                title="Copy Payment ID"
                                className="p-1 hover:text-[var(--ap)]"
                              >
                                {copiedId === record.razorpayPaymentId ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-10 rounded-2xl border border-dashed border-[var(--rule)]">
                <CreditCard className="w-10 h-10 text-[var(--muted)] mx-auto mb-2 opacity-50" />
                <p className="text-[var(--ink)] font-bold text-sm">No payment records found.</p>
                <p className="text-[var(--muted)] text-xs mt-1">Unlock course access via our pricing page.</p>
                <div className="mt-4">
                  <Link href="/pricing">
                    <SkeuoButton variant="primary" size="sm">
                      View Pricing Plans
                    </SkeuoButton>
                  </Link>
                </div>
              </div>
            )}
          </GlassCard>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <GlassCard className="p-6">
            <h3 className="font-bold text-lg mb-4 text-[var(--ink)]">Student Profile</h3>
            <div className="grid gap-3 text-sm max-w-lg">
              <div className="flex items-center justify-between py-2 border-b border-[var(--rule)]">
                <span className="text-[var(--muted)]">Full Name:</span>
                <span className="font-bold text-[var(--ink)]">{name}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--rule)]">
                <span className="text-[var(--muted)]">Email:</span>
                <span className="font-bold text-[var(--ink)]">{user?.email || 'Student Email'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--rule)]">
                <span className="text-[var(--muted)]">Academic Standard:</span>
                <span className="font-bold text-[var(--ink)]">Class 9th (CBSE / NCERT 2026)</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--rule)]">
                <span className="text-[var(--muted)]">Membership Status:</span>
                <span className="font-bold text-emerald-600">
                  {hasBundle
                    ? '✓ Paid Member (Class 9 Combo Bundle)'
                    : mathUnlocked
                    ? '✓ Paid Member (Mathematics)'
                    : scienceUnlocked
                    ? '✓ Paid Member (Science)'
                    : 'Free Tier Explorer'}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <SkeuoButton variant="ghost" size="sm" onClick={handleSignOut} icon={<LogOut className="w-4 h-4" />}>
                Sign Out
              </SkeuoButton>
            </div>
          </GlassCard>
        )}
      </main>
    </div>
  );
}
