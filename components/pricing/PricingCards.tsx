'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, ShieldCheck, Tag, X, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/shared/GlassCard';
import { RazorpayCheckout } from '@/components/payment/RazorpayCheckout';
import { SkeuoButton } from '@/components/shared/SkeuoButton';

export interface PricingData {
  mathPrice: number;
  sciencePrice: number;
  bundlePrice: number;
  discountPct: number;
  offerLabel?: string;
  freeLessonsPerChapter?: number;
}

interface AppliedCouponInfo {
  code: string;
  type: 'percentage' | 'flat' | 'free';
  value: number;
  applicableCourse: 'all' | 'math' | 'science' | 'bundle';
  message?: string;
  minOrderAmount?: number;
}

function fmt(paise: number) {
  return `₹${Math.round(paise / 100)}`;
}

const mathFeatures = [
  '14 complete NCERT chapters',
  'All 84 in-depth lessons',
  '14 interactive geometry & graph labs',
  '500+ solved practice questions',
  'Sprint games & quick calculations',
  'Full worked step-by-step solutions',
];

const scienceFeatures = [
  '13 complete NCERT 2026 chapters',
  'Physics, Chemistry & Biology modules',
  '13 real-time animated simulation labs',
  'Sound oscilloscope & Kinematics cars',
  'NCERT exemplar & activity observations',
  'Valency tables & chemical equation guides',
];

const bundleFeatures = [
  'Complete Class 9 Mathematics (14 Ch)',
  'Complete Class 9 Science (13 Ch)',
  'All 27 Interactive Simulation Labs',
  'Full access to the Class 9th Bible',
  'All 1000+ practice questions & hints',
  'Save ₹299 instantly vs buying separately',
  'Single one-time payment · Lifetime access',
];

const SUGGESTED_COUPONS = ['WELCOME10', 'SAVE200', 'SCIENCE50', 'FREE100'];

export function PricingCards({ pricing }: { pricing: PricingData }) {
  const [couponInput, setCouponInput] = useState('');
  const [validating, setValidating] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCouponInfo | null>(null);

  const handleApplyCoupon = async (codeToApply?: string) => {
    const code = (codeToApply || couponInput).trim().toUpperCase();
    if (!code) {
      setCouponError('Please enter a coupon code.');
      return;
    }

    setCouponError('');
    setValidating(true);

    try {
      // Validate against bundle price as reference
      const res = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, course: 'bundle' }),
      });

      const data = await res.json();
      if (!res.ok || !data.valid) {
        // If not valid for bundle, test if it's course-specific (math or science)
        const mathRes = await fetch('/api/coupons/validate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, course: 'science' }),
        });
        const mathData = await mathRes.json();

        if (mathData.valid && mathData.coupon) {
          setAppliedCoupon({
            code: mathData.coupon.code,
            type: mathData.coupon.type,
            value: mathData.coupon.value,
            applicableCourse: mathData.coupon.applicableCourse,
            message: mathData.message,
            minOrderAmount: mathData.coupon.minOrderAmount,
          });
          setCouponInput(mathData.coupon.code);
          return;
        }

        setCouponError(data.error || 'Invalid or expired coupon code.');
        return;
      }

      setAppliedCoupon({
        code: data.coupon.code,
        type: data.coupon.type,
        value: data.coupon.value,
        applicableCourse: data.coupon.applicableCourse,
        message: data.message,
        minOrderAmount: data.coupon.minOrderAmount,
      });
      setCouponInput(data.coupon.code);
    } catch {
      setCouponError('Network error while validating coupon.');
    } finally {
      setValidating(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput('');
    setCouponError('');
  };

  const calculatePlanPrice = (planId: 'math' | 'science' | 'bundle', basePrice: number) => {
    if (!appliedCoupon) {
      return { finalPrice: basePrice, discountAmount: 0, isFree: false, applies: false };
    }

    // Check course applicability
    if (appliedCoupon.applicableCourse !== 'all' && appliedCoupon.applicableCourse !== planId) {
      return { finalPrice: basePrice, discountAmount: 0, isFree: false, applies: false };
    }

    // Check minimum order amount
    if (appliedCoupon.minOrderAmount && (basePrice / 100) < appliedCoupon.minOrderAmount) {
      return { finalPrice: basePrice, discountAmount: 0, isFree: false, applies: false };
    }

    if (appliedCoupon.type === 'free' || (appliedCoupon.type === 'percentage' && appliedCoupon.value >= 100)) {
      return { finalPrice: 0, discountAmount: basePrice, isFree: true, applies: true };
    }

    let discountPaise = 0;
    if (appliedCoupon.type === 'percentage') {
      discountPaise = Math.round((basePrice * appliedCoupon.value) / 100);
    } else if (appliedCoupon.type === 'flat') {
      discountPaise = Math.min(basePrice, Math.round(appliedCoupon.value * 100));
    }

    const finalPrice = Math.max(0, basePrice - discountPaise);
    return {
      finalPrice,
      discountAmount: discountPaise,
      isFree: finalPrice === 0,
      applies: true,
    };
  };

  const plans = [
    {
      id: 'math' as const,
      label: 'Mathematics',
      tagline: 'Geometry, Algebra, Numbers & Coordinate Labs',
      price: pricing.mathPrice,
      color: 'var(--ap)',
      softColor: 'var(--ap-soft)',
      features: mathFeatures,
      highlight: false,
    },
    {
      id: 'bundle' as const,
      label: 'Math + Science Combo',
      tagline: 'Complete Class 9 Mastery (All 27 Chapters)',
      price: pricing.bundlePrice,
      originalPrice: pricing.mathPrice + pricing.sciencePrice,
      color: '#d97706',
      softColor: '#fef3c7',
      features: bundleFeatures,
      highlight: true,
      badge: '★ MOST POPULAR · SAVE ₹299',
    },
    {
      id: 'science' as const,
      label: 'Science (Phy, Chem, Bio)',
      tagline: 'Kinematics, Atomic Structure, Cells & Sound',
      price: pricing.sciencePrice,
      color: 'var(--sci)',
      softColor: 'var(--sci-soft)',
      features: scienceFeatures,
      highlight: false,
    },
  ];

  return (
    <div className="space-y-10">
      {/* Coupon Application Promo Bar */}
      <div className="max-w-2xl mx-auto rounded-3xl bg-[var(--sheet)] border-2 border-[var(--rule)] p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-5 h-5 text-purple-600" />
          <h3 className="font-bold text-sm text-[var(--ink)]" style={{ fontFamily: 'var(--display)' }}>
            Have a Promo Code or Scholarship Coupon?
          </h3>
        </div>

        {!appliedCoupon ? (
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                value={couponInput}
                onChange={(e) => {
                  setCouponInput(e.target.value.toUpperCase().replace(/[^A-Z0-9_-]/g, ''));
                  setCouponError('');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleApplyCoupon();
                }}
                placeholder="Enter coupon code (e.g. WELCOME10, FREE100)"
                className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--rule)] bg-[var(--card)] text-sm font-mono font-bold tracking-wider text-[var(--ink)] focus:border-purple-500 outline-none uppercase placeholder:font-normal placeholder:tracking-normal"
              />
              <SkeuoButton
                onClick={() => handleApplyCoupon()}
                loading={validating}
                variant="primary"
                size="md"
                className="!bg-purple-600 hover:!bg-purple-700"
              >
                Apply
              </SkeuoButton>
            </div>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-[var(--rule)]">
              <span className="text-[11px] text-[var(--muted)] font-medium">Try code:</span>
              {SUGGESTED_COUPONS.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => handleApplyCoupon(code)}
                  className="px-2.5 py-1 rounded-lg bg-[var(--card)] hover:bg-purple-500/10 hover:border-purple-400 border border-[var(--rule)] text-[11px] font-mono font-bold text-[var(--ink)] transition-colors"
                >
                  {code}
                </button>
              ))}
            </div>

            {couponError && (
              <div className="mt-3 p-3 rounded-xl bg-[var(--bad-soft)] text-[var(--bad)] text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{couponError}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-sm text-emerald-800 dark:text-emerald-300 tracking-wider">
                    {appliedCoupon.code}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                    {appliedCoupon.type === 'free'
                      ? '100% Free Waiver'
                      : appliedCoupon.type === 'flat'
                      ? `₹${appliedCoupon.value} Off`
                      : `${appliedCoupon.value}% Off`}
                  </span>
                </div>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 font-medium mt-0.5">
                  {appliedCoupon.message || 'Coupon successfully applied to your order!'}
                </p>
              </div>
            </div>

            <button
              onClick={handleRemoveCoupon}
              className="px-3 py-1.5 rounded-xl border border-emerald-600/30 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-500/20 text-xs font-bold flex items-center gap-1 transition-colors"
            >
              <X className="w-3.5 h-3.5" /> Remove
            </button>
          </div>
        )}
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, i) => {
          const { finalPrice, discountAmount, isFree, applies } = calculatePlanPrice(plan.id, plan.price);

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col ${plan.highlight ? 'md:-mt-4' : ''}`}
            >
              <div
                className={`rounded-3xl p-8 flex flex-col justify-between h-full bg-[var(--sheet)] border-2 transition-all shadow-md hover:shadow-2xl relative overflow-hidden ${
                  plan.highlight
                    ? 'border-amber-500 shadow-amber-500/10 ring-2 ring-amber-400/30'
                    : isFree
                    ? 'border-purple-500 shadow-purple-500/10 ring-2 ring-purple-400/30'
                    : 'border-[var(--rule)]'
                }`}
              >
                {/* Highlight Ribbon */}
                {plan.highlight && !isFree && (
                  <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] py-1.5 text-center uppercase tracking-widest shadow-sm">
                    {plan.badge}
                  </div>
                )}

                {/* Free Waiver Banner */}
                {isFree && (
                  <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-[11px] py-1.5 text-center uppercase tracking-widest shadow-sm flex items-center justify-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> 100% Free Scholarship Active
                  </div>
                )}

                <div className={plan.highlight || isFree ? 'pt-4' : ''}>
                  {/* Title and Tagline */}
                  <div className="mb-4">
                    <h3
                      className="text-2xl font-black text-[var(--ink)]"
                      style={{ fontFamily: 'var(--display)' }}
                    >
                      {plan.label}
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-[var(--rule)]">
                    <div className="flex items-baseline gap-2">
                      {isFree ? (
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-4xl md:text-5xl font-black text-purple-600"
                            style={{ fontFamily: 'var(--display)' }}
                          >
                            ₹0 FREE
                          </span>
                          <span className="text-lg text-[var(--muted)] line-through">
                            {fmt(plan.price)}
                          </span>
                        </div>
                      ) : applies && discountAmount > 0 ? (
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-4xl md:text-5xl font-black text-emerald-600"
                            style={{ fontFamily: 'var(--display)' }}
                          >
                            {fmt(finalPrice)}
                          </span>
                          <span className="text-lg text-[var(--muted)] line-through">
                            {fmt(plan.price)}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-4xl md:text-5xl font-black text-[var(--ink)]"
                            style={{ fontFamily: 'var(--display)' }}
                          >
                            {fmt(plan.price)}
                          </span>
                          {plan.originalPrice && (
                            <span className="text-lg text-[var(--muted)] line-through">
                              {fmt(plan.originalPrice)}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Savings pill if coupon applies */}
                    {applies && discountAmount > 0 && !isFree && (
                      <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold border border-emerald-500/20">
                        🎉 You save {fmt(discountAmount)} with {appliedCoupon?.code}!
                      </div>
                    )}

                    {appliedCoupon && !applies && (
                      <div className="text-[11px] text-[var(--muted)] mt-2 italic">
                        (Coupon applies to {appliedCoupon.applicableCourse === 'bundle' ? 'Combo Bundle' : appliedCoupon.applicableCourse})
                      </div>
                    )}

                    <div className="text-xs text-[var(--muted)] mt-1.5">
                      {isFree ? '100% Free Full Lifetime Access' : 'One-time payment · No subscriptions'}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                      Everything Included:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-[var(--ink)] font-medium">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <RazorpayCheckout
                    course={plan.id}
                    label={plan.highlight ? 'Get Complete Combo Bundle &rarr;' : `Unlock ${plan.label} &rarr;`}
                    color={plan.highlight ? '#d97706' : plan.color}
                    appliedCoupon={applies && appliedCoupon ? appliedCoupon.code : undefined}
                    isFree={isFree}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="rounded-2xl bg-[var(--sheet)] border border-[var(--rule)] p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-sm text-[var(--ink)]">100% Safe &amp; Verified Checkout</div>
            <div className="text-xs text-[var(--muted)]">Secured by Razorpay with UPI, Cards, NetBanking, and Wallets.</div>
          </div>
        </div>
        <div className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-full">
          Instant Course Activation
        </div>
      </div>
    </div>
  );
}
