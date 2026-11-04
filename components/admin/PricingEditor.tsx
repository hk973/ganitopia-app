'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import { GlassCard } from '@/components/shared/GlassCard';
import { SkeuoButton } from '@/components/shared/SkeuoButton';

interface Settings { mathPrice: number; sciencePrice: number; bundlePrice: number; discountPct: number; offerLabel: string; freeLessonsPerChapter: number; }

export function PricingEditor({ settings }: { settings: Settings }) {
  const [form, setForm] = useState({ mathPrice: settings.mathPrice / 100, sciencePrice: settings.sciencePrice / 100, bundlePrice: settings.bundlePrice / 100, discountPct: settings.discountPct, offerLabel: settings.offerLabel || '', freeLessonsPerChapter: settings.freeLessonsPerChapter ?? 0 });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const update = (k: string, v: any) => setForm((p) => ({ ...p, [k]: v }));

  const handleSave = async () => {
    setLoading(true); setError(''); setSaved(false);
    try {
      const res = await fetch('/api/admin/update-pricing', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mathPrice: Math.round(form.mathPrice * 100), sciencePrice: Math.round(form.sciencePrice * 100), bundlePrice: Math.round(form.bundlePrice * 100), discountPct: form.discountPct, offerLabel: form.offerLabel, freeLessonsPerChapter: form.freeLessonsPerChapter }),
        credentials: 'include',
      });
      if (!res.ok) { const d = await res.json(); setError(d.error || 'Failed'); return; }
      setSaved(true);
    } catch { setError('Network error'); } finally { setLoading(false); }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin" className="text-[var(--muted)] hover:text-[var(--ink)]"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--display)' }}>Pricing & Offers</h1>
      </div>
      <GlassCard className="p-6 flex flex-col gap-4">
        <div className="grid sm:grid-cols-3 gap-4">
          {[['mathPrice', 'Math Price (₹)'], ['sciencePrice', 'Science Price (₹)'], ['bundlePrice', 'Bundle Price (₹)']].map(([key, label]) => (
            <div key={key}><label className="text-sm font-bold block mb-1">{label}</label>
              <input type="number" min="0" value={(form as any)[key]} onChange={(e) => update(key, Number(e.target.value))} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-2 text-sm focus:border-[var(--ap)] outline-none" />
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div><label className="text-sm font-bold block mb-1">Discount %</label><input type="number" min="0" max="100" value={form.discountPct} onChange={(e) => update('discountPct', Number(e.target.value))} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-2 text-sm focus:border-[var(--ap)] outline-none" /></div>
          <div><label className="text-sm font-bold block mb-1">Free Lessons / Chapter</label><input type="number" min="0" max="10" value={form.freeLessonsPerChapter} onChange={(e) => update('freeLessonsPerChapter', Number(e.target.value))} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-2 text-sm focus:border-[var(--ap)] outline-none" /></div>
        </div>
        <div><label className="text-sm font-bold block mb-1">Offer Label (shown on pricing page)</label><input type="text" value={form.offerLabel} onChange={(e) => update('offerLabel', e.target.value)} placeholder="e.g. Limited Time: 20% off!" className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-2 text-sm focus:border-[var(--ap)] outline-none" /></div>
        {error && <div className="rounded-lg bg-[var(--bad-soft)] text-[var(--bad)] px-4 py-2 text-sm">{error}</div>}
        {saved && <div className="rounded-lg bg-[var(--ok-soft)] text-[var(--ok)] px-4 py-2 text-sm font-bold">Saved! Pricing page will update within 60 seconds.</div>}
        <SkeuoButton onClick={handleSave} loading={loading} icon={<Save className="w-4 h-4" />} variant="primary">Save Changes</SkeuoButton>
      </GlassCard>
    </div>
  );
}
