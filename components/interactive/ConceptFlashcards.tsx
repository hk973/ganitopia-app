'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCw, CheckCircle2, ArrowRight, ArrowLeft, Shuffle, BookOpen, Layers } from 'lucide-react';
import type { KeyConcept } from '@/data/science/types';
import { playPop, playSuccessChime } from '@/lib/audio/soundEffects';

interface Props {
  concepts: KeyConcept[];
  themeColor?: string;
}

export function ConceptFlashcards({ concepts, themeColor = 'var(--sci)' }: Props) {
  const [mode, setMode] = useState<'grid' | 'flashcards'>('grid');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredSet, setMasteredSet] = useState<Set<number>>(new Set());

  if (!concepts || concepts.length === 0) return null;

  const currentConcept = concepts[currentIndex];
  const isMastered = masteredSet.has(currentIndex);
  const progressPercent = Math.round((masteredSet.size / concepts.length) * 100);

  const handleFlip = () => {
    playPop();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    playPop();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % concepts.length);
  };

  const handlePrev = () => {
    playPop();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + concepts.length) % concepts.length);
  };

  const handleToggleMastered = () => {
    const nextSet = new Set(masteredSet);
    if (nextSet.has(currentIndex)) {
      nextSet.delete(currentIndex);
    } else {
      nextSet.add(currentIndex);
      playSuccessChime();
    }
    setMasteredSet(nextSet);
  };

  const handleShuffle = () => {
    playPop();
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * concepts.length));
  };

  return (
    <div className="space-y-4">
      {/* Header with View Toggle Pill */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
          <BookOpen className="w-4 h-4" style={{ color: themeColor }} />
          <span>Key Definitions &amp; Concepts ({concepts.length})</span>
        </div>

        {/* View Mode Toggle */}
        <div className="inline-flex rounded-xl bg-[var(--paper)] p-1 border border-[var(--rule)] text-xs font-bold shadow-xs">
          <button
            onClick={() => {
              playPop();
              setMode('grid');
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
              mode === 'grid'
                ? 'bg-[var(--sheet)] text-[var(--ink)] shadow-xs'
                : 'text-[var(--muted)] hover:text-[var(--ink)]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Grid View</span>
          </button>
          <button
            onClick={() => {
              playPop();
              setMode('flashcards');
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
              mode === 'flashcards'
                ? 'bg-[var(--sci)] text-white shadow-xs'
                : 'text-[var(--muted)] hover:text-[var(--ink)]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>🎴 Flashcard Mode</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Static Grid View */}
      {mode === 'grid' && (
        <div className="grid sm:grid-cols-2 gap-3">
          {concepts.map((kc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-xl border border-[var(--rule)] p-4 bg-[var(--sheet)] shadow-xs hover:border-[var(--sci)]/50 transition-colors"
              style={{ background: 'var(--sci-soft)' }}
            >
              <div className="font-bold text-sm mb-1" style={{ color: themeColor }}>
                {kc.term}
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{kc.definition}</p>
              {kc.example && (
                <p className="text-xs text-[var(--ink)] mt-2 italic font-medium">e.g. {kc.example}</p>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Mode 2: Interactive 3D Flashcard Deck */}
      {mode === 'flashcards' && (
        <div className="rounded-2xl border-2 border-[var(--sci)]/30 bg-[var(--paper)]/60 p-6 space-y-5">
          {/* Deck Controls & Mastery Progress */}
          <div className="flex items-center justify-between gap-3 text-xs flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--ink)]">
                Card {currentIndex + 1} of {concepts.length}
              </span>
              <span className="text-[var(--muted)]">·</span>
              <span className="text-emerald-600 font-bold">
                {masteredSet.size} Mastered ({progressPercent}%)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShuffle}
                className="p-1.5 rounded-lg border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)] hover:text-[var(--ink)]"
                title="Shuffle Cards"
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleToggleMastered}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all ${
                  isMastered
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)] hover:text-emerald-600'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isMastered ? 'Mastered!' : 'Mark Mastered'}</span>
              </button>
            </div>
          </div>

          {/* Mastery Progress Bar */}
          <div className="w-full h-1.5 bg-[var(--rule)]/60 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* 3D Flip Card Container */}
          <div
            onClick={handleFlip}
            className="cursor-pointer select-none perspective-1000 min-h-[220px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {!isFlipped ? (
                // FRONT OF CARD
                <motion.div
                  key="front"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.24 }}
                  className="w-full min-h-[200px] rounded-2xl border-2 border-[var(--sci)]/40 bg-[var(--sheet)] p-6 shadow-md flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden group hover:border-[var(--sci)] transition-colors"
                >
                  <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] flex items-center gap-1">
                    <RotateCw className="w-3 h-3 text-[var(--sci)] group-hover:rotate-180 transition-transform duration-500" />
                    <span>Click to Flip</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--sci-soft)] text-[var(--sci)]">
                    NCERT Terminology
                  </span>

                  <h3
                    className="text-xl md:text-2xl font-black text-[var(--ink)] tracking-tight"
                    style={{ fontFamily: 'var(--display)' }}
                  >
                    {currentConcept.term}
                  </h3>

                  <p className="text-xs text-[var(--muted)]">
                    Tap anywhere on the card to reveal definition &amp; memory notes
                  </p>
                </motion.div>
              ) : (
                // BACK OF CARD
                <motion.div
                  key="back"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.24 }}
                  className="w-full min-h-[200px] rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-[var(--sheet)] to-[var(--sheet)] p-6 shadow-md flex flex-col justify-between space-y-4 relative"
                >
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
                    <span className="text-emerald-700 font-bold">{currentConcept.term}</span>
                    <span className="flex items-center gap-1 text-[var(--sci)]">
                      <RotateCw className="w-3 h-3" /> Flip Back
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[var(--ink)] leading-relaxed">
                      {currentConcept.definition}
                    </p>
                    {currentConcept.example && (
                      <div className="text-xs text-[var(--muted)] bg-[var(--paper)]/80 p-2.5 rounded-xl border border-[var(--rule)]">
                        <span className="font-bold text-[var(--ink)]">Example: </span>
                        <span>{currentConcept.example}</span>
                      </div>
                    )}
                  </div>

                  <div className="text-[11px] text-[var(--muted)] text-right italic">
                    Tap to flip back to term
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[var(--rule)] bg-[var(--sheet)] text-xs font-bold text-[var(--ink)] hover:border-[var(--sci)] transition-colors shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <div className="flex gap-1.5">
              {concepts.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    playPop();
                    setIsFlipped(false);
                    setCurrentIndex(dotIdx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    dotIdx === currentIndex
                      ? 'w-6 bg-[var(--sci)]'
                      : masteredSet.has(dotIdx)
                      ? 'bg-emerald-500'
                      : 'bg-[var(--rule)] hover:bg-[var(--muted)]'
                  }`}
                  title={`Go to Card ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--sci)] text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
