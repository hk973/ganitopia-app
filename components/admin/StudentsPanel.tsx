'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { GlassCard } from '@/components/shared/GlassCard';
import { SkeuoButton } from '@/components/shared/SkeuoButton';

interface Student {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  registeredAt?: string;
  status: string;
  paymentStatus: string;
  school?: string;
}

export function StudentsPanel({ students }: { students: Student[] }) {
  const [query, setQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const filtered = students.filter((s) => {
    const q = query.toLowerCase();
    const matchesQuery = !q || s.name?.toLowerCase().includes(q) || s.email?.toLowerCase().includes(q);
    const matchesStatus = filterStatus === 'all' || s.status === filterStatus;
    return matchesQuery && matchesStatus;
  });

  const toggleStatus = async (uid: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    setActionLoading(uid);
    try {
      await fetch('/api/admin/set-student-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, status: newStatus }),
        credentials: 'include',
      });
      window.location.reload();
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin" className="text-[var(--muted)] hover:text-[var(--ink)]"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--display)' }}>Students</h1>
        <span className="text-sm text-[var(--muted)] ml-auto">{students.length} total</span>
      </div>

      <GlassCard className="p-4 mb-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or email..." className="w-full pl-9 pr-4 py-2 rounded-lg border border-[var(--rule)] bg-[var(--sheet)] text-sm focus:border-[var(--ap)] outline-none" />
          </div>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-3 py-2 rounded-lg border border-[var(--rule)] bg-[var(--sheet)] text-sm focus:border-[var(--ap)] outline-none">
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <a href="/api/admin/export-students" className="px-4 py-2 rounded-lg border border-[var(--rule)] text-sm font-semibold hover:border-[var(--ap)] transition-colors">Export CSV</a>
        </div>
      </GlassCard>

      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--rule)] bg-[var(--paper)]">
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-[var(--muted)]">Name</th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-[var(--muted)]">Email</th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-[var(--muted)]">Registered</th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-[var(--muted)]">Status</th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-[var(--muted)]">Payment</th>
                <th className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wider text-[var(--muted)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id} className="border-b border-[var(--rule)] hover:bg-[var(--paper)] transition-colors">
                  <td className="px-4 py-3 font-semibold">{s.name || '—'}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{s.email}</td>
                  <td className="px-4 py-3 text-[var(--muted)] text-xs">{s.registeredAt ? new Date(s.registeredAt).toLocaleDateString('en-IN') : '—'}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${s.status === 'active' ? 'bg-[var(--ok-soft)] text-[var(--ok)]' : 'bg-[var(--bad-soft)] text-[var(--bad)]'}`}>
                      {s.status || 'active'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${s.paymentStatus === 'paid' ? 'bg-[var(--ok-soft)] text-[var(--ok)]' : 'bg-[var(--paper)] text-[var(--muted)]'}`}>
                      {s.paymentStatus || 'unpaid'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleStatus(s.id, s.status)}
                      disabled={actionLoading === s.id}
                      className={`text-xs font-semibold px-2 py-1 rounded border transition-colors ${s.status === 'active' ? 'border-[var(--bad)] text-[var(--bad)] hover:bg-[var(--bad-soft)]' : 'border-[var(--ok)] text-[var(--ok)] hover:bg-[var(--ok-soft)]'}`}>
                      {actionLoading === s.id ? '...' : s.status === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-[var(--muted)]">No students found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
