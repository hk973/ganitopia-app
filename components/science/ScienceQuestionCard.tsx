'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb, ChevronDown, Sparkles } from 'lucide-react';
import type { ScienceQuestion } from '@/data/science/types';
import { playSuccessChime, playWrongBoop, playPop } from '@/lib/audio/soundEffects';
import { fireConfetti } from '@/lib/effects/confetti';

interface Props {
  question: ScienceQuestion;
  index: number;
  onSolved?: (id: string) => void;
}

export function ScienceQuestionCard({ question: q, index, onSolved }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [userText, setUserText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const handleSubmit = () => {
    let isCorrect = false;
    if (q.type === 'mcq') {
      isCorrect = selected === q.correctOption;
    } else if (q.type === 'num' && q.numAnswer !== undefined) {
      const val = parseFloat(userText.trim());
      const tol = q.tolerance ?? 0.05;
      isCorrect = !isNaN(val) && Math.abs(val - q.numAnswer) <= Math.abs(q.numAnswer * tol);
    } else if (q.answer) {
      const cleanedInput = userText.trim().toLowerCase();
      const cleanedAns = q.answer.trim().toLowerCase();
      isCorrect = cleanedInput.length > 2 && (cleanedAns.includes(cleanedInput) || cleanedInput.includes(cleanedAns.slice(0, 15)));
    }
    setCorrect(isCorrect);
    setSubmitted(true);
    if (isCorrect) {
      playSuccessChime();
      fireConfetti();
      if (onSolved) onSolved(q.id);
    } else {
      playWrongBoop();
    }
  };

  const handleReset = () => {
    playPop();
    setSelected(null);
    setUserText('');
    setSubmitted(false);
    setCorrect(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border p-5 transition-colors ${
        submitted
          ? correct
            ? 'border-[var(--ok)] bg-[var(--ok-soft)]/40'
            : 'border-[var(--bad)] bg-[var(--bad-soft)]/30'
          : 'border-[var(--rule)] bg-[var(--sheet)]'
      }`}
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-xs font-bold text-[var(--muted)]">Q{index}</span>
        <span className="text-xs px-2 py-0.5 rounded border border-[var(--rule)] text-[var(--sci)] bg-[var(--sci-soft)] uppercase font-semibold tracking-wider">
          {q.type.toUpperCase()}
        </span>
        {submitted && (
          <span className={`text-xs font-bold ml-auto flex items-center gap-1 ${correct ? 'text-[var(--ok)]' : 'text-[var(--bad)]'}`}>
            {correct ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Correct!
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" /> Review Solution
              </>
            )}
          </span>
        )}
      </div>

      <p className="mb-4 font-medium text-sm text-[var(--ink)]">{q.q}</p>

      {/* MCQ options */}
      {q.type === 'mcq' && q.options && (
        <div className="grid sm:grid-cols-2 gap-2 mb-4">
          {q.options.map((opt, i) => {
            let style = 'border-[var(--rule)] hover:border-[var(--sci)] bg-[var(--sheet)]';
            if (submitted) {
              if (i === q.correctOption) {
                style = 'border-[var(--ok)] bg-[var(--ok-soft)] text-[var(--ok)] font-bold';
              } else if (i === selected) {
                style = 'border-[var(--bad)] bg-[var(--bad-soft)] text-[var(--bad)]';
              }
            } else if (selected === i) {
              style = 'border-[var(--sci)] bg-[var(--sci-soft)] text-[var(--sci)] font-bold shadow-sm';
            }
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  if (!submitted) setSelected(i);
                }}
                disabled={submitted}
                className={`text-left text-sm rounded-xl border p-3 transition-all flex items-start gap-2.5 ${style}`}
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Short/numeric answer input */}
      {q.type !== 'mcq' && (
        <div className="mb-4">
          <input
            type={q.type === 'num' ? 'number' : 'text'}
            placeholder={q.type === 'num' ? 'Enter numerical value...' : 'Type your answer...'}
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            disabled={submitted}
            className="w-full max-w-md rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-2.5 text-sm focus:border-[var(--sci)] outline-none"
          />
        </div>
      )}

      {/* Action buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        {!submitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={q.type === 'mcq' ? selected === null : !userText.trim()}
            className="rounded-xl px-4 py-2 text-xs font-bold text-white transition-all disabled:opacity-50"
            style={{ background: 'var(--sci)' }}
          >
            Check Answer
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl px-4 py-2 text-xs font-bold border border-[var(--rule)] hover:bg-[var(--paper)] transition-all"
          >
            Try Again
          </button>
        )}

        {q.hint && (
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="rounded-xl px-3 py-2 text-xs font-bold border border-[var(--rule)] text-[var(--muted)] hover:text-[var(--sci)] flex items-center gap-1 transition-all"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            {showHint ? 'Hide Hint' : 'Hint'}
          </button>
        )}

        {(q.answer || (q.type === 'mcq' && q.options)) && (
          <button
            type="button"
            onClick={() => setShowSolution(!showSolution)}
            className="rounded-xl px-3 py-2 text-xs font-bold border border-[var(--rule)] text-[var(--muted)] hover:text-[var(--ink)] flex items-center gap-1 ml-auto transition-all"
          >
            <span>{showSolution ? 'Hide Solution' : 'Solution'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showSolution ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      {/* Hint box */}
      <AnimatePresence>
        {showHint && q.hint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 rounded-xl bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-800 dark:text-amber-200"
          >
            <span className="font-bold">Hint: </span>
            {q.hint}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solution box */}
      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 rounded-xl bg-[var(--paper)] border border-[var(--rule)] p-3 text-xs"
          >
            <span className="font-bold text-[var(--sci)]">Correct Explanation: </span>
            {q.type === 'mcq' && q.options && q.correctOption !== undefined ? (
              <span className="text-[var(--ink)]">
                Option {String.fromCharCode(65 + q.correctOption)}: {q.options[q.correctOption]}. {q.answer && `(${q.answer})`}
              </span>
            ) : (
              <span className="text-[var(--ink)]">{q.answer}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
