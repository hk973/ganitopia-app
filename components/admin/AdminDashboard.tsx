'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Users, BarChart3, CreditCard, Settings,
  BookOpen, Tag, Receipt, LogOut, TrendingUp, AlertCircle, Ticket
} from 'lucide-react';
import { GlassCard } from '@/components/shared/GlassCard';
import { useRouter } from 'next/navigation';

interface KPIs {
  totalStudents: number;
  activeStudents: number;
  paidStudents: number;
  unpaidStudents: number;
  successfulPayments: number;
  totalRevenue: number;
  pendingPayments: number;
  failedTransactions: number;
}

interface Props {
  kpis: KPIs;
  adminName: string;
}

function KPICard({ label, value, color, icon }: { label: string; value: string | number; color: string; icon: React.ReactNode }) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}20`, color }}>
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold" style={{ fontFamily: 'var(--display)' }}>{value}</div>
      <div className="text-sm text-[var(--muted)] mt-1">{label}</div>
    </GlassCard>
  );
}

export function AdminDashboard({ kpis, adminName }: Props) {
  const [activeSection, setActiveSection] = useState('overview');
  const router = useRouter();

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'students', label: 'Students', icon: Users, href: '/admin/students' },
    { id: 'payments', label: 'Payments', icon: CreditCard, href: '/admin/payments' },
    { id: 'pricing', label: 'Pricing & Offers', icon: Tag, href: '/admin/pricing' },
    { id: 'coupons', label: 'Coupons & Discounts', icon: Ticket, href: '/admin/coupons' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
    { id: 'exports', label: 'Reports', icon: Receipt },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleSignOut = async () => {
    await fetch('/api/auth/session', { method: 'DELETE' });
    router.push('/admin-login');
  };

  const kpiCards = [
    { label: 'Total Students', value: kpis.totalStudents, color: '#2456C9', icon: <Users className="w-5 h-5" /> },
    { label: 'Active Students', value: kpis.activeStudents, color: '#14794B', icon: <Users className="w-5 h-5" /> },
    { label: 'Paid Students', value: kpis.paidStudents, color: '#0D9488', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Unpaid Students', value: kpis.unpaidStudents, color: '#C16200', icon: <Users className="w-5 h-5" /> },
    { label: 'Successful Payments', value: kpis.successfulPayments, color: '#14794B', icon: <CreditCard className="w-5 h-5" /> },
    { label: 'Total Revenue', value: `₹${Math.round(kpis.totalRevenue / 100).toLocaleString('en-IN')}`, color: '#14223A', icon: <Receipt className="w-5 h-5" /> },
    { label: 'Pending Payments', value: kpis.pendingPayments, color: '#C16200', icon: <CreditCard className="w-5 h-5" /> },
    { label: 'Failed Transactions', value: kpis.failedTransactions, color: '#B3342C', icon: <AlertCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Dark sidebar */}
      <aside className="hidden md:flex flex-col w-60 shrink-0 bg-slate-900 p-4 sticky top-0 h-screen overflow-y-auto">
        <div className="mb-6 px-2">
          <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--display)' }}>
            Ganit<span style={{ color: '#86A9FF' }}>o</span><span style={{ color: '#F5AE4E' }}>pia</span>
          </div>
          <div className="text-slate-400 text-xs mt-1">Admin Panel</div>
        </div>

        <div className="flex flex-col gap-1 flex-1">
          {navItems.map(({ id, label, icon: Icon, href }) => (
            href ? (
              <Link key={id} href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
                <Icon className="w-4 h-4" /> {label}
              </Link>
            ) : (
              <button key={id} onClick={() => setActiveSection(id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${activeSection === id ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
                <Icon className="w-4 h-4" /> {label}
              </button>
            )
          ))}
        </div>

        <div className="border-t border-slate-700 pt-3 mt-3">
          <div className="text-xs text-slate-400 px-2 mb-2">{adminName}</div>
          <button onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors w-full">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 bg-[var(--paper)]">
        <div className="mb-6">
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--display)' }}>Dashboard Overview</h1>
          <p className="text-[var(--muted)] text-sm mt-1">Welcome back, {adminName}. Here&apos;s what&apos;s happening today.</p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpiCards.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <KPICard {...card} />
            </motion.div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/admin/students">
            <GlassCard hover className="p-4">
              <Users className="w-6 h-6 mb-2" style={{ color: 'var(--ap)' }} />
              <div className="font-bold text-sm">Manage Students</div>
              <div className="text-xs text-[var(--muted)]">View, search, activate/deactivate</div>
            </GlassCard>
          </Link>
          <Link href="/admin/payments">
            <GlassCard hover className="p-4">
              <CreditCard className="w-6 h-6 mb-2" style={{ color: 'var(--ok)' }} />
              <div className="font-bold text-sm">Payment Records</div>
              <div className="text-xs text-[var(--muted)]">View all transactions</div>
            </GlassCard>
          </Link>
          <Link href="/admin/pricing">
            <GlassCard hover className="p-4">
              <Tag className="w-6 h-6 mb-2" style={{ color: 'var(--gp)' }} />
              <div className="font-bold text-sm">Edit Pricing</div>
              <div className="text-xs text-[var(--muted)]">Update course prices and offers</div>
            </GlassCard>
          </Link>
          <Link href="/admin/coupons">
            <GlassCard hover className="p-4">
              <Ticket className="w-6 h-6 mb-2 text-purple-500" />
              <div className="font-bold text-sm">Coupons &amp; Discounts</div>
              <div className="text-xs text-[var(--muted)]">Create %, Flat ₹ &amp; Free waivers</div>
            </GlassCard>
          </Link>
        </div>

        {/* Export buttons */}
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/api/admin/export-students" className="text-sm text-[var(--ap)] underline">Export Students CSV</a>
          <a href="/api/admin/export-payments" className="text-sm text-[var(--ap)] underline">Export Payments CSV</a>
        </div>
      </main>
    </div>
  );
}
