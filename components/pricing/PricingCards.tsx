'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { GlassCard } from '@/components/shared/GlassCard';
import { RazorpayCheckout } from '@/components/payment/RazorpayCheckout';

export interface PricingData {
  mathPrice: number;
  sciencePrice: number;
  bundlePrice: number;
  discountPct: number;
  offerLabel?: string;
  freeLessonsPerChapter?: number;
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

export function PricingCards({ pricing }: { pricing: PricingData }) {
  const plans = [
    {
      id: 'math',
      label: 'Mathematics',
      tagline: 'Geometry, Algebra, Numbers & Coordinate Labs',
      price: pricing.mathPrice,
      color: 'var(--ap)',
      softColor: 'var(--ap-soft)',
      features: mathFeatures,
      highlight: false,
    },
    {
      id: 'bundle',
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
      id: 'science',
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
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, i) => (
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
                  : 'border-[var(--rule)]'
              }`}
            >
              {/* Highlight Ribbon */}
              {plan.highlight && (
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] py-1.5 text-center uppercase tracking-widest shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div className={plan.highlight ? 'pt-4' : ''}>
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
                  <div className="text-xs text-[var(--muted)] mt-1">One-time payment · No subscriptions</div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Everything Included:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-[var(--ink)] font-medium">
                        <Check
                          className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500"
                        />
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
                />
              </div>
            </div>
          </motion.div>
        ))}
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
