'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '@/components/shared/GlassCard';

interface Payment { id: string; uid: string; amount: number; course: string; status: string; razorpayPaymentId?: string; createdAt: string; }

const STATUS_COLORS: Record<string, string> = {
  captured: 'bg-[var(--ok-soft)] text-[var(--ok)]',
  pending: 'bg-[var(--gp-soft)] text-[var(--gp)]',
  failed: 'bg-[var(--bad-soft)] text-[var(--bad)]',
};

export function PaymentsPanel({ payments }: { payments: Payment[] }) {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? payments : payments.filter((p) => p.status === filter);
  const totalRevenue = payments.filter((p) => p.status === 'captured').reduce((s, p) => s + (p.amount || 0), 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin" className="text-[var(--muted)] hover:text-[var(--ink)]"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--display)' }}>Payments</h1>
        <span className="text-sm text-[var(--muted)] ml-auto">Total Revenue: <b>₹{Math.round(totalRevenue / 100).toLocaleString('en-IN')}</b></span>
      </div>
      <GlassCard className="p-4 mb-4 flex gap-3 items-center flex-wrap">
        <div className="flex gap-2">
          {['all', 'captured', 'pending', 'failed'].map((s) => (
            <button key={s} onClick={() => setFilter(s)} className={`px-3 py-1 rounded-lg text-sm font-semibold capitalize transition-colors ${filter === s ? 'bg-[var(--ap)] text-white' : 'bg-[var(--paper)] text-[var(--muted)]'}`}>{s}</button>
          ))}
        </div>
        <a href="/api/admin/export-payments" className="ml-auto text-xs text-[var(--ap)] hover:underline">Export CSV</a>
      </GlassCard>
      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--rule)] bg-[var(--paper)]">
                {['Order ID', 'UID', 'Course', 'Amount', 'Status', 'Date'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-[var(--muted)]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-[var(--rule)] hover:bg-[var(--paper)]">
                  <td className="px-4 py-3 font-mono text-xs">{p.id.slice(0, 16)}…</td>
                  <td className="px-4 py-3 font-mono text-xs text-[var(--muted)]">{p.uid?.slice(0, 8)}…</td>
                  <td className="px-4 py-3 capitalize">{p.course}</td>
                  <td className="px-4 py-3 font-semibold">₹{Math.round((p.amount || 0) / 100)}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-bold ${STATUS_COLORS[p.status] || 'bg-[var(--paper)] text-[var(--muted)]'}`}>{p.status}</span></td>
                  <td className="px-4 py-3 text-xs text-[var(--muted)]">{p.createdAt ? new Date(p.createdAt).toLocaleDateString('en-IN') : '—'}</td>
                </tr>
              ))}
              {filtered.length === 0 && (<tr><td colSpan={6} className="px-4 py-8 text-center text-[var(--muted)]">No payments found</td></tr>)}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
