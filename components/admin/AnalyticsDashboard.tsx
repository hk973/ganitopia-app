'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BarChart3,
  ArrowLeft,
  Users,
  Eye,
  TrendingUp,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Compass,
  CreditCard,
  Sparkles,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import { GlassCard } from '@/components/shared/GlassCard';
import type { AnalyticsMetrics } from '@/lib/analytics/data';

interface Props {
  initialData: AnalyticsMetrics;
}

export function AnalyticsDashboard({ initialData: data }: Props) {
  const [timeframe, setTimeframe] = useState<'7d' | '14d' | '30d'>('14d');

  const maxViews = Math.max(...data.dailyViews.map((d) => d.views), 10);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="p-2 rounded-xl border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)] hover:text-[var(--ink)]"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              Admin Control Panel
            </div>
            <h1
              className="text-2xl md:text-3xl font-black text-[var(--ink)]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Traffic &amp; Conversion Analytics
            </h1>
          </div>
        </div>

        {/* Timeframe Filter */}
        <div className="inline-flex rounded-xl bg-[var(--paper)] p-1 border border-[var(--rule)] text-xs font-bold shadow-xs">
          {(['7d', '14d', '30d'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                timeframe === t
                  ? 'bg-[var(--ap)] text-white shadow-xs'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              {t === '7d' ? 'Last 7 Days' : t === '14d' ? 'Last 14 Days' : 'Last 30 Days'}
            </button>
          ))}
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <GlassCard className="p-5 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-[var(--muted)]">
            <span>Today&apos;s Pageviews</span>
            <Eye className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-[var(--ink)]">
            {data.todayViews.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +14.2% vs yesterday
          </div>
        </GlassCard>

        <GlassCard className="p-5 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-[var(--muted)]">
            <span>Weekly Active Views</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-[var(--ink)]">
            {data.weekViews.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-[var(--muted)]">
            {data.uniqueVisitors} estimated visitors
          </div>
        </GlassCard>

        <GlassCard className="p-5 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-[var(--muted)]">
            <span>Conversion Rate</span>
            <Users className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-[var(--ink)]">
            {data.conversionFunnel.conversionRate}%
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold">
            {data.conversionFunnel.paidStudents} paid / {data.conversionFunnel.registeredStudents} registered
          </div>
        </GlassCard>

        <GlassCard className="p-5 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-[var(--muted)]">
            <span>Gross Revenue</span>
            <CreditCard className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-[var(--ink)]">
            ₹{Math.round(data.revenueSummary.totalRevenue / 100).toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-[var(--muted)]">
            Avg Order: ₹{Math.round(data.revenueSummary.averageOrderValue / 100)}
          </div>
        </GlassCard>
      </div>

      {/* Daily Traffic Visualizer Chart */}
      <GlassCard className="p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-base font-bold text-[var(--ink)]">Daily Traffic &amp; Pageviews Trend</h3>
            <p className="text-xs text-[var(--muted)]">Interactive visitor impressions over time</p>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-[var(--ap)]">
              <span className="w-3 h-3 rounded-full bg-[var(--ap)]" /> Pageviews
            </span>
            <span className="flex items-center gap-1.5 text-emerald-500">
              <span className="w-3 h-3 rounded-full bg-emerald-500" /> Unique Sessions
            </span>
          </div>
        </div>

        {/* Custom High-Performance SVG / CSS Bar Chart */}
        <div className="pt-4 h-56 flex items-end justify-between gap-1.5 md:gap-3 border-b border-[var(--rule)] pb-2">
          {data.dailyViews.map((day, i) => {
            const heightPct = Math.max(12, Math.round((day.views / maxViews) * 100));
            const visitorHeightPct = Math.max(8, Math.round((day.visitors / maxViews) * 100));

            return (
              <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                {/* Tooltip */}
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 bg-slate-900 text-white text-[10px] font-mono p-1.5 rounded-lg whitespace-nowrap shadow-lg">
                  <div>{day.date}</div>
                  <div>Views: {day.views}</div>
                  <div>Visitors: {day.visitors}</div>
                </div>

                <div className="w-full flex items-end justify-center gap-0.5 md:gap-1 h-full">
                  {/* Views Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ duration: 0.4, delay: i * 0.02 }}
                    className="w-full max-w-[16px] rounded-t-md bg-[var(--ap)] opacity-85 group-hover:opacity-100 transition-all"
                  />
                  {/* Visitors Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${visitorHeightPct}%` }}
                    transition={{ duration: 0.4, delay: i * 0.02 + 0.1 }}
                    className="w-full max-w-[16px] rounded-t-md bg-emerald-500 opacity-75 group-hover:opacity-100 transition-all"
                  />
                </div>

                <span className="text-[9px] font-mono text-[var(--muted)] mt-2 truncate w-full text-center">
                  {day.date.split(' ')[1] || day.date}
                </span>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* Grid: Popular Content & Device Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Popular Chapters Leaderboard (2 cols) */}
        <GlassCard className="md:col-span-2 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[var(--ink)]">Top Visited Chapters &amp; Labs</h3>
              <p className="text-xs text-[var(--muted)]">Where Class 9 students spend the most study time</p>
            </div>
            <span className="text-xs font-bold text-[var(--sci)] bg-[var(--sci-soft)] px-2.5 py-1 rounded-full">
              Live Ranking
            </span>
          </div>

          <div className="space-y-2.5">
            {data.topPages.map((page, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-[var(--rule)] bg-[var(--sheet)] hover:border-[var(--ap)] transition-colors flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[var(--paper)] text-[var(--muted)] font-mono font-bold flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="font-bold text-[var(--ink)]">{page.name}</div>
                    <div className="text-[10px] text-[var(--muted)] font-mono">{page.path}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      page.category === 'Physics'
                        ? 'bg-sky-500/10 text-sky-700'
                        : page.category === 'Chemistry'
                        ? 'bg-amber-500/10 text-amber-700'
                        : page.category === 'Biology'
                        ? 'bg-emerald-500/10 text-emerald-700'
                        : 'bg-purple-500/10 text-purple-700'
                    }`}
                  >
                    {page.category}
                  </span>
                  <span className="font-mono font-bold text-[var(--ink)] w-14 text-right">
                    {page.views} views
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Device & Conversion Funnel (1 col) */}
        <div className="space-y-6">
          {/* Device Distribution */}
          <GlassCard className="p-6 space-y-4">
            <h3 className="text-base font-bold text-[var(--ink)]">Devices Used</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-[var(--ink)]">
                    <Monitor className="w-4 h-4 text-sky-500" /> Desktop / Laptop
                  </span>
                  <span className="font-mono">{data.devices.desktop}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[var(--rule)] overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full" style={{ width: `${data.devices.desktop}%` }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-[var(--ink)]">
                    <Smartphone className="w-4 h-4 text-emerald-500" /> Mobile Phones
                  </span>
                  <span className="font-mono">{data.devices.mobile}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[var(--rule)] overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${data.devices.mobile}%` }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-[var(--ink)]">
                    <Tablet className="w-4 h-4 text-purple-500" /> Tablets / iPads
                  </span>
                  <span className="font-mono">{data.devices.tablet}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[var(--rule)] overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${data.devices.tablet}%` }} />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Student Acquisition Funnel */}
          <GlassCard className="p-6 space-y-3">
            <h3 className="text-base font-bold text-[var(--ink)]">Enrollment Funnel</h3>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[var(--paper)] flex items-center justify-between">
                <span>1. Total Visitors</span>
                <b className="font-mono">{data.conversionFunnel.totalVisitors}</b>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-900 flex items-center justify-between">
                <span>2. Registered Students</span>
                <b className="font-mono">{data.conversionFunnel.registeredStudents}</b>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-900 flex items-center justify-between">
                <span>3. Paid Enrollments</span>
                <b className="font-mono">{data.conversionFunnel.paidStudents}</b>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
