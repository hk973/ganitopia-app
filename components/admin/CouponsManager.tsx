'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Plus, Tag, Trash2, Edit2, Copy, Check,
  Percent, Sparkles, IndianRupee, Calendar, Clock,
  CheckCircle2, XCircle, Search, Filter, AlertCircle, X
} from 'lucide-react';
import { GlassCard } from '@/components/shared/GlassCard';
import { SkeuoButton } from '@/components/shared/SkeuoButton';
import { Coupon } from '@/lib/settings/coupons';

interface Props {
  initialCoupons: Coupon[];
}

interface CouponFormData {
  code: string;
  description: string;
  type: 'percentage' | 'flat' | 'free';
  value: number;
  applicableCourse: 'all' | 'math' | 'science' | 'bundle';
  maxUses: string;
  minOrderAmount: string;
  expiresAt: string;
  active: boolean;
}

const emptyForm: CouponFormData = {
  code: '',
  description: '',
  type: 'percentage',
  value: 20,
  applicableCourse: 'all',
  maxUses: '',
  minOrderAmount: '',
  expiresAt: '',
  active: true,
};

export function CouponsManager({ initialCoupons }: Props) {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'percentage' | 'flat' | 'free'>('all');
  const [filterCourse, setFilterCourse] = useState<'all' | 'math' | 'science' | 'bundle'>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<CouponFormData>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Delete State
  const [deletingCode, setDeletingCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleOpenCreate = () => {
    setFormData(emptyForm);
    setIsEditing(false);
    setFormError('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (coupon: Coupon) => {
    setFormData({
      code: coupon.code,
      description: coupon.description,
      type: coupon.type,
      value: coupon.value,
      applicableCourse: coupon.applicableCourse,
      maxUses: coupon.maxUses ? String(coupon.maxUses) : '',
      minOrderAmount: coupon.minOrderAmount ? String(coupon.minOrderAmount) : '',
      expiresAt: coupon.expiresAt ? coupon.expiresAt.split('T')[0] : '',
      active: coupon.active,
    });
    setIsEditing(true);
    setFormError('');
    setIsModalOpen(true);
  };

  const handleToggleStatus = async (code: string) => {
    // Optimistic update
    setCoupons((prev) =>
      prev.map((c) => (c.code === code ? { ...c, active: !c.active } : c))
    );

    try {
      const res = await fetch('/api/admin/coupons/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
        credentials: 'include',
      });
      if (!res.ok) {
        // revert on failure
        setCoupons((prev) =>
          prev.map((c) => (c.code === code ? { ...c, active: !c.active } : c))
        );
      }
    } catch {
      setCoupons((prev) =>
        prev.map((c) => (c.code === code ? { ...c, active: !c.active } : c))
      );
    }
  };

  const handleDelete = async (code: string) => {
    setDeletingCode(code);
    try {
      const res = await fetch(`/api/admin/coupons?code=${encodeURIComponent(code)}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (res.ok) {
        setCoupons((prev) => prev.filter((c) => c.code !== code));
        setSuccessMessage(`Coupon "${code}" deleted successfully.`);
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDeletingCode(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setSubmitting(true);

    if (!formData.code.trim()) {
      setFormError('Coupon code is required.');
      setSubmitting(false);
      return;
    }

    if (formData.type !== 'free' && (!formData.value || formData.value <= 0)) {
      setFormError('Discount value must be greater than 0.');
      setSubmitting(false);
      return;
    }

    try {
      const payload = {
        code: formData.code.trim().toUpperCase(),
        description: formData.description.trim() || undefined,
        type: formData.type,
        value: formData.type === 'free' ? 100 : Number(formData.value),
        applicableCourse: formData.applicableCourse,
        maxUses: formData.maxUses ? Number(formData.maxUses) : null,
        minOrderAmount: formData.minOrderAmount ? Number(formData.minOrderAmount) : undefined,
        expiresAt: formData.expiresAt ? new Date(formData.expiresAt).toISOString() : null,
        active: formData.active,
      };

      const res = await fetch('/api/admin/coupons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include',
      });

      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error || 'Failed to save coupon.');
        setSubmitting(false);
        return;
      }

      // Update state
      setCoupons((prev) => {
        const idx = prev.findIndex((c) => c.code === data.coupon.code);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = data.coupon;
          return next;
        }
        return [data.coupon, ...prev];
      });

      setIsModalOpen(false);
      setSuccessMessage(`Coupon "${data.coupon.code}" saved successfully!`);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch {
      setFormError('Network error while saving coupon.');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredCoupons = coupons.filter((c) => {
    const matchesSearch =
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'all' || c.type === filterType;
    const matchesCourse = filterCourse === 'all' || c.applicableCourse === filterCourse;
    return matchesSearch && matchesType && matchesCourse;
  });

  const totalCoupons = coupons.length;
  const activeCoupons = coupons.filter((c) => c.active).length;
  const totalUses = coupons.reduce((sum, c) => sum + (c.usedCount || 0), 0);
  const freeWaivers = coupons.filter((c) => c.type === 'free').length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="w-10 h-10 rounded-xl bg-[var(--sheet)] border border-[var(--rule)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ap)] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--ink)]" style={{ fontFamily: 'var(--display)' }}>
              Coupon &amp; Discount Engine
            </h1>
            <p className="text-xs sm:text-sm text-[var(--muted)] mt-0.5">
              Create and manage promotional discount codes and 100% free scholarship waivers.
            </p>
          </div>
        </div>

        <SkeuoButton
          onClick={handleOpenCreate}
          variant="primary"
          icon={<Plus className="w-4 h-4" />}
          className="self-start sm:self-auto"
        >
          Create New Coupon
        </SkeuoButton>
      </div>

      {/* Global Success Notification */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold text-sm flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <GlassCard className="p-4">
          <div className="flex items-center justify-between text-xs text-[var(--muted)] font-medium mb-1">
            <span>Total Coupons</span>
            <Tag className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-black text-[var(--ink)]" style={{ fontFamily: 'var(--display)' }}>
            {totalCoupons}
          </div>
          <div className="text-[11px] text-[var(--muted)] mt-1">Configured in system</div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-between text-xs text-[var(--muted)] font-medium mb-1">
            <span>Active Coupons</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-black text-emerald-600" style={{ fontFamily: 'var(--display)' }}>
            {activeCoupons}
          </div>
          <div className="text-[11px] text-[var(--muted)] mt-1">Available for students</div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-between text-xs text-[var(--muted)] font-medium mb-1">
            <span>Total Uses</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-amber-600" style={{ fontFamily: 'var(--display)' }}>
            {totalUses}
          </div>
          <div className="text-[11px] text-[var(--muted)] mt-1">Redemptions recorded</div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-between text-xs text-[var(--muted)] font-medium mb-1">
            <span>Free Waivers</span>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-black text-purple-600" style={{ fontFamily: 'var(--display)' }}>
            {freeWaivers}
          </div>
          <div className="text-[11px] text-[var(--muted)] mt-1">100% scholarship tiers</div>
        </GlassCard>
      </div>

      {/* Filters and Search Bar */}
      <div className="rounded-2xl bg-[var(--sheet)] border border-[var(--rule)] p-4 mb-6 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search coupon code or description..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm text-[var(--ink)] focus:border-[var(--ap)] outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Filter Type */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
            className="px-3 py-2 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-xs text-[var(--ink)] font-medium outline-none focus:border-[var(--ap)]"
          >
            <option value="all">All Discount Types</option>
            <option value="percentage">Percentage (%)</option>
            <option value="flat">Flat Rupee (₹)</option>
            <option value="free">100% Free Waiver</option>
          </select>

          {/* Filter Course */}
          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value as any)}
            className="px-3 py-2 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-xs text-[var(--ink)] font-medium outline-none focus:border-[var(--ap)]"
          >
            <option value="all">All Courses</option>
            <option value="math">Math Only</option>
            <option value="science">Science Only</option>
            <option value="bundle">Bundle Only</option>
          </select>
        </div>
      </div>

      {/* Coupons List / Table */}
      {filteredCoupons.length === 0 ? (
        <div className="rounded-2xl bg-[var(--sheet)] border border-dashed border-[var(--rule)] p-12 text-center">
          <Tag className="w-12 h-12 text-[var(--muted)] mx-auto mb-3 opacity-40" />
          <h3 className="text-lg font-bold text-[var(--ink)]">No coupons match your filter</h3>
          <p className="text-xs text-[var(--muted)] mt-1">Try modifying your search or create a new coupon code.</p>
          <div className="mt-4">
            <SkeuoButton onClick={handleOpenCreate} variant="secondary" size="sm">
              Create Coupon
            </SkeuoButton>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredCoupons.map((coupon) => {
            const isFree = coupon.type === 'free';
            const isFlat = coupon.type === 'flat';
            const isPercentage = coupon.type === 'percentage';
            const isExpired = coupon.expiresAt && new Date(coupon.expiresAt) < new Date();
            const isLimitReached = coupon.maxUses && coupon.usedCount >= coupon.maxUses;

            return (
              <motion.div
                key={coupon.code}
                layout
                className={`rounded-2xl p-5 border-2 transition-all bg-[var(--sheet)] shadow-sm ${
                  !coupon.active || isExpired || isLimitReached
                    ? 'border-gray-200 dark:border-gray-800 opacity-75'
                    : 'border-[var(--rule)] hover:border-[var(--ap)] hover:shadow-md'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left: Code, Badge & Details */}
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-bold ${
                        isFree
                          ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20'
                          : isFlat
                          ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                          : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                      }`}
                    >
                      {isFree ? (
                        <Sparkles className="w-6 h-6" />
                      ) : isFlat ? (
                        <IndianRupee className="w-6 h-6" />
                      ) : (
                        <Percent className="w-6 h-6" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="font-mono font-black text-lg text-[var(--ink)] tracking-wider px-2 py-0.5 rounded-lg bg-[var(--card)] border border-[var(--rule)] select-all"
                        >
                          {coupon.code}
                        </span>

                        <button
                          onClick={() => copyToClipboard(coupon.code)}
                          title="Copy Code"
                          className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--card)] transition-colors"
                        >
                          {copiedCode === coupon.code ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>

                        {/* Type Badge */}
                        <span
                          className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            isFree
                              ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                              : isFlat
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                          }`}
                        >
                          {isFree ? '100% Free Waiver' : isFlat ? `Flat ₹${coupon.value} Off` : `${coupon.value}% Off`}
                        </span>

                        {/* Course Scope Badge */}
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[var(--card)] border border-[var(--rule)] text-[var(--muted)]">
                          {coupon.applicableCourse === 'all'
                            ? 'All Courses'
                            : coupon.applicableCourse === 'math'
                            ? 'Math Only'
                            : coupon.applicableCourse === 'science'
                            ? 'Science Only'
                            : 'Bundle Only'}
                        </span>

                        {/* Inactive / Expired indicator */}
                        {!coupon.active && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            Inactive
                          </span>
                        )}
                        {isExpired && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                            Expired
                          </span>
                        )}
                        {isLimitReached && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                            Limit Reached
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[var(--ink)] font-medium mt-1.5">{coupon.description}</p>

                      {/* Constraints & Expiry Details */}
                      <div className="flex flex-wrap items-center gap-4 text-[11px] text-[var(--muted)] mt-2">
                        {coupon.minOrderAmount && (
                          <span>Min order: ₹{coupon.minOrderAmount}</span>
                        )}
                        {coupon.expiresAt ? (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Expires: {new Date(coupon.expiresAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        ) : (
                          <span>No expiration</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Usage stats, Toggle & Actions */}
                  <div className="flex flex-wrap items-center justify-between lg:justify-end gap-6 pt-3 lg:pt-0 border-t lg:border-t-0 border-[var(--rule)]">
                    {/* Usage Progress */}
                    <div className="min-w-[130px]">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-[var(--muted)] font-medium">Used</span>
                        <span className="font-bold text-[var(--ink)]">
                          {coupon.usedCount} {coupon.maxUses ? `/ ${coupon.maxUses}` : 'times'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-emerald-500 h-1.5 rounded-full transition-all"
                          style={{
                            width: coupon.maxUses
                              ? `${Math.min(100, (coupon.usedCount / coupon.maxUses) * 100)}%`
                              : '100%',
                          }}
                        />
                      </div>
                    </div>

                    {/* Active Switch */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleStatus(coupon.code)}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                          coupon.active ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-700'
                        }`}
                        title={coupon.active ? 'Click to deactivate' : 'Click to activate'}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            coupon.active ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleOpenEdit(coupon)}
                        title="Edit Coupon"
                        className="p-2 rounded-xl text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--card)] transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(coupon.code)}
                        disabled={deletingCode === coupon.code}
                        title="Delete Coupon"
                        className="p-2 rounded-xl text-rose-500 hover:text-rose-600 hover:bg-rose-500/10 transition-colors disabled:opacity-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Create / Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[var(--sheet)] border border-[var(--rule)] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--card)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-[var(--ink)]" style={{ fontFamily: 'var(--display)' }}>
                  {isEditing ? `Edit Coupon: ${formData.code}` : 'Create New Coupon'}
                </h2>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Configure discount parameters, applicable course scope, and limits.
                </p>
              </div>

              {formError && (
                <div className="mb-4 p-3 rounded-xl bg-[var(--bad-soft)] text-[var(--bad)] text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Coupon Code */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                    Coupon Code *
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isEditing}
                    value={formData.code}
                    onChange={(e) =>
                      setFormData({ ...formData, code: e.target.value.toUpperCase().replace(/[^A-Z0-9_-]/g, '') })
                    }
                    placeholder="e.g. FESTIVE2026, SCIENCE50"
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm font-mono font-bold tracking-wider text-[var(--ink)] focus:border-[var(--ap)] outline-none uppercase disabled:opacity-60"
                  />
                  <p className="text-[11px] text-[var(--muted)] mt-1">
                    Uppercase letters, numbers, dashes, and underscores only.
                  </p>
                </div>

                {/* Description */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                    Description *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="e.g. 50% Early Bird Scholarship for Class 9"
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm text-[var(--ink)] focus:border-[var(--ap)] outline-none"
                  />
                </div>

                {/* Coupon Type (Radio Selector) */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                    Discount Type *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, type: 'percentage' })}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        formData.type === 'percentage'
                          ? 'border-[var(--ap)] bg-[var(--ap-soft)] text-[var(--ap)] font-bold'
                          : 'border-[var(--rule)] bg-[var(--card)] text-[var(--muted)] hover:border-gray-400'
                      }`}
                    >
                      <Percent className="w-4 h-4 mx-auto mb-1" />
                      <div className="text-xs font-bold">Percentage (%)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, type: 'flat' })}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        formData.type === 'flat'
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 font-bold'
                          : 'border-[var(--rule)] bg-[var(--card)] text-[var(--muted)] hover:border-gray-400'
                      }`}
                    >
                      <IndianRupee className="w-4 h-4 mx-auto mb-1" />
                      <div className="text-xs font-bold">Flat ₹ Off</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, type: 'free', value: 100 })}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        formData.type === 'free'
                          ? 'border-purple-500 bg-purple-500/10 text-purple-600 font-bold'
                          : 'border-[var(--rule)] bg-[var(--card)] text-[var(--muted)] hover:border-gray-400'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 mx-auto mb-1" />
                      <div className="text-xs font-bold">100% Free</div>
                    </button>
                  </div>
                </div>

                {/* Discount Value (if not free) */}
                {formData.type !== 'free' && (
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                      {formData.type === 'percentage' ? 'Percentage Discount (%)' : 'Flat Discount Amount (₹)'} *
                    </label>
                    <input
                      type="number"
                      min="1"
                      max={formData.type === 'percentage' ? 99 : 5000}
                      required
                      value={formData.value}
                      onChange={(e) => setFormData({ ...formData, value: Number(e.target.value) })}
                      placeholder={formData.type === 'percentage' ? 'e.g. 25' : 'e.g. 200'}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm text-[var(--ink)] focus:border-[var(--ap)] outline-none"
                    />
                  </div>
                )}

                {/* Applicable Course */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                    Applicable Course *
                  </label>
                  <select
                    value={formData.applicableCourse}
                    onChange={(e) => setFormData({ ...formData, applicableCourse: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm text-[var(--ink)] font-medium focus:border-[var(--ap)] outline-none"
                  >
                    <option value="all">All Courses (Math, Science &amp; Bundle)</option>
                    <option value="math">Mathematics Only</option>
                    <option value="science">Science Only</option>
                    <option value="bundle">Math + Science Combo Bundle Only</option>
                  </select>
                </div>

                {/* Limits Row: Max Uses & Min Order */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                      Max Uses (Limit)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.maxUses}
                      onChange={(e) => setFormData({ ...formData, maxUses: e.target.value })}
                      placeholder="Unlimited if empty"
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm text-[var(--ink)] focus:border-[var(--ap)] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                      Min Order Value (₹)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.minOrderAmount}
                      onChange={(e) => setFormData({ ...formData, minOrderAmount: e.target.value })}
                      placeholder="Optional"
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm text-[var(--ink)] focus:border-[var(--ap)] outline-none"
                    />
                  </div>
                </div>

                {/* Expiry Date */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                    Expiration Date
                  </label>
                  <input
                    type="date"
                    value={formData.expiresAt}
                    onChange={(e) => setFormData({ ...formData, expiresAt: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm text-[var(--ink)] focus:border-[var(--ap)] outline-none"
                  />
                  <p className="text-[11px] text-[var(--muted)] mt-1">Leave blank for no expiration date.</p>
                </div>

                {/* Active Checkbox */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="couponActiveCheckbox"
                    checked={formData.active}
                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="couponActiveCheckbox" className="text-sm font-bold text-[var(--ink)] cursor-pointer">
                    Enable coupon immediately upon saving
                  </label>
                </div>

                {/* Modal Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--rule)]">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-bold text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    Cancel
                  </button>
                  <SkeuoButton
                    type="submit"
                    variant="primary"
                    loading={submitting}
                  >
                    {isEditing ? 'Update Coupon' : 'Create Coupon'}
                  </SkeuoButton>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
