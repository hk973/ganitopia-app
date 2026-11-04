'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Sparkles,
  Zap,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Compass,
  ArrowRight,
  Target,
  Award,
} from 'lucide-react';

export function FeaturesBento() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Why Students Love Ganitopia
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--ink)] tracking-tight"
          style={{ fontFamily: 'var(--display)' }}
        >
          Built Different. Built for Top Scores.
        </h2>
        <p className="text-[var(--muted)] max-w-xl mx-auto text-base">
          Everything designed to replace confusing rote learning with crystal-clear experimental clarity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Large Bento Card 1: Interactive Labs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 p-8 text-white border border-indigo-500/30 relative overflow-hidden flex flex-col justify-between shadow-xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-md relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 font-bold">
              🔬
            </div>
            <h3
              className="text-2xl sm:text-3xl font-black tracking-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              Every Concept Has an Interactive Lab
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Don&apos;t just read that sound is a longitudinal wave or that acceleration changes velocity. Touch the frequency slider, watch the air compress, and see equations solve themselves in real-time.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-indigo-300 font-semibold">
              27 Dedicated NCERT Interactive Visualizers
            </span>
            <Link
              href="/science/4/s1"
              className="text-xs font-bold text-white hover:text-indigo-300 flex items-center gap-1 group"
            >
              <span>Try Kinematics Simulator</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Bento Card 2: The Class 9th Bible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl bg-gradient-to-br from-amber-500/15 via-[var(--sheet)] to-[var(--sheet)] border-2 border-amber-500/30 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 border border-amber-500/40 flex items-center justify-center text-xl font-bold">
              📖
            </div>
            <h3
              className="text-2xl font-black text-[var(--ink)] tracking-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              The Class 9th Bible
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              The master exam desk: all 8 algebraic identities, equations of motion, mole formulas, valency charts, and common pitfalls in one place.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--rule)]">
            <Link
              href="/bible"
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Open Free Revision Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Bento Card 3: Interactive Practice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl bg-[var(--sheet)] border-2 border-[var(--rule)] p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center text-xl font-bold">
              🎯
            </div>
            <h3
              className="text-2xl font-black text-[var(--ink)] tracking-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              Instant Feedback &amp; Step Hints
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Solve numericals and MCQs with immediate validation, step-by-step mathematical reasoning, and streak tracking.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--rule)]">
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> 500+ Practice Problems
            </span>
          </div>
        </motion.div>

        {/* Bento Card 4: 100% NCERT Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 rounded-3xl bg-[var(--sheet)] border-2 border-[var(--rule)] p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center text-xl font-bold">
              🏆
            </div>
            <h3
              className="text-2xl sm:text-3xl font-black text-[var(--ink)] tracking-tight"
              style={{ fontFamily: 'var(--display)' }}
            >
              Strictly Aligned with CBSE &amp; NCERT 2026
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xl">
              Zero out-of-syllabus distraction. Every chapter follows the exact NCERT sequence, terminology, exemplar problems, and classroom activities required to score 95%+ in school and board exams.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[var(--muted)]">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" /> CBSE Syllabus Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" /> NCERT Exemplar Solved
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-500" /> Case-Study &amp; Assertion-Reason Questions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
