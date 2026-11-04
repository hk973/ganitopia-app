'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Eye, Sparkles, RotateCcw, ListFilter } from 'lucide-react';
import type { WorkedExample } from '@/data/science/types';
import { playPop, playSuccessChime } from '@/lib/audio/soundEffects';

interface Props {
  example: WorkedExample;
  index: number;
}

export function StepByStepWalkthrough({ example: ex, index }: Props) {
  const steps = ex.solutionSteps || ex.steps || [];
  const [revealedCount, setRevealedCount] = useState<number>(1);
  const [isFullView, setIsFullView] = useState<boolean>(false);

  const formula = ex.formulaUsed || ex.formula;
  const answer = ex.finalAnswer || ex.answer;
  const isFullyRevealed = isFullView || revealedCount >= steps.length;

  const handleRevealNext = () => {
    playPop();
    const nextCount = revealedCount + 1;
    setRevealedCount(nextCount);
    if (nextCount >= steps.length) {
      playSuccessChime();
    }
  };

  const handleReset = () => {
    playPop();
    setRevealedCount(1);
    setIsFullView(false);
  };

  return (
    <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-5 md:p-6 space-y-4 shadow-sm">
      {/* Top Bar with Title & View Mode Toggle */}
      <div className="flex items-center justify-between gap-3 flex-wrap border-b border-emerald-500/20 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
            {index + 1}
          </span>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
            {ex.title || `Worked Numerical Example #${index + 1}`}
          </span>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => {
              playPop();
              setIsFullView(!isFullView);
            }}
            className="flex items-center gap-1 px-3 py-1 rounded-lg border border-emerald-500/40 bg-[var(--sheet)] text-emerald-800 hover:bg-emerald-50 font-bold transition-all"
          >
            {isFullView ? <ListFilter className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{isFullView ? 'Switch to Step-by-Step' : 'Show All Steps'}</span>
          </button>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="text-sm md:text-base font-bold text-[var(--ink)] leading-relaxed">
        {ex.problem}
      </div>

      {/* Given Data Box (if present) */}
      {ex.given && ex.given.length > 0 && (
        <div className="text-xs bg-[var(--sheet)] border border-emerald-500/30 rounded-xl p-3 flex items-center gap-2 flex-wrap">
          <span className="font-bold text-emerald-700">Given Data:</span>
          <span className="font-mono text-[var(--ink)] bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/20">
            {ex.given.join(' · ')}
          </span>
        </div>
      )}

      {/* Formula Applied */}
      {formula && (
        <div className="text-xs bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-3 flex items-center justify-between flex-wrap gap-2">
          <span className="font-bold text-[var(--muted)]">Formula Applied:</span>
          <code className="font-mono text-sm font-bold text-[var(--sci)] bg-[var(--sci-soft)] px-2.5 py-1 rounded-lg">
            {formula}
          </code>
        </div>
      )}

      {/* Steps List */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-xs font-bold text-[var(--muted)]">
          <span>Derivation &amp; Calculation Steps</span>
          {!isFullView && (
            <span>
              Step {revealedCount} of {steps.length}
            </span>
          )}
        </div>

        <div className="space-y-2">
          {steps.map((step, sIdx) => {
            const isVisible = isFullView || sIdx < revealedCount;
            if (!isVisible) return null;

            return (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                  sIdx === revealedCount - 1 && !isFullView
                    ? 'border-emerald-500 bg-[var(--sheet)] text-[var(--ink)] font-medium shadow-xs'
                    : 'border-emerald-500/20 bg-[var(--sheet)]/70 text-[var(--muted)]'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                  {sIdx + 1}
                </span>
                <span className="font-mono text-[11px] md:text-xs pt-0.5">{step}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Step Stepper Actions */}
      {!isFullView && (
        <div className="pt-2 flex items-center justify-between gap-3 flex-wrap">
          {!isFullyRevealed ? (
            <button
              onClick={handleRevealNext}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md hover:bg-emerald-700 transition-colors"
            >
              <span>Reveal Next Step ({revealedCount + 1}/{steps.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>All steps revealed! Review the final result below.</span>
            </div>
          )}

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/30 text-xs text-[var(--muted)] hover:text-[var(--ink)]"
            title="Start Over"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      )}

      {/* Final Result Banner */}
      {answer && isFullyRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 border-2 border-emerald-500 text-xs font-bold text-emerald-900 flex items-center justify-between gap-4 flex-wrap shadow-md"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-emerald-700">Final Answer</div>
              <div className="text-sm md:text-base font-black font-mono text-[var(--ink)]">
                {answer}
              </div>
            </div>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-600 text-white font-bold tracking-wider uppercase">
            Verified NCERT Solution
          </span>
        </motion.div>
      )}
    </div>
  );
}
