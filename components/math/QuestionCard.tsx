'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb, ChevronDown } from 'lucide-react';
import type { Question } from '@/data/math/types';
import { checkNumericAnswer } from '@/lib/utils';
import { playSuccessChime, playWrongBoop, playPop } from '@/lib/audio/soundEffects';
import { fireConfetti } from '@/lib/effects/confetti';

interface Props {
  question: Question;
  index: number;
  onSolved: (id: string) => void;
}

export function QuestionCard({ question: q, index, onSolved }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [numInput, setNumInput] = useState('');
  const [multiInputs, setMultiInputs] = useState<string[]>([]);

  const handleSubmit = () => {
    let isCorrect = false;
    if (q.type === 'mcq') {
      isCorrect = selected === q.answer;
    } else if (q.type === 'num') {
      const val = parseFloat(numInput);
      isCorrect = !isNaN(val) && checkNumericAnswer(val, q.answer, q.tol);
    } else if (q.type === 'multi') {
      isCorrect = q.fields.every((f, i) => {
        const val = parseFloat(multiInputs[i] || '');
        return !isNaN(val) && checkNumericAnswer(val, f.answer, 0.01);
      });
    }
    setCorrect(isCorrect);
    setSubmitted(true);
    if (isCorrect) {
      playSuccessChime();
      fireConfetti();
      onSolved(q.id);
    } else {
      playWrongBoop();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border p-4 transition-colors ${
        correct ? 'border-[var(--ok)] bg-[var(--ok-soft)]' : 'border-[var(--rule)] bg-[var(--sheet)]'
      }`}
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-xs font-bold text-[var(--muted)]">Q{index}</span>
        {q.tag && <span className="text-xs px-2 py-0.5 rounded border border-[var(--rule)] text-[var(--muted)] uppercase tracking-wider">{q.tag}</span>}
        {submitted && (
          <span className={`text-xs font-bold ml-auto ${correct ? 'text-[var(--ok)]' : 'text-[var(--bad)]'}`}>
            {correct ? 'Correct!' : 'Try again'}
          </span>
        )}
      </div>

      <p className="mb-3 font-medium" dangerouslySetInnerHTML={{ __html: q.q }} />

      {/* MCQ */}
      {q.type === 'mcq' && (
        <div className="grid sm:grid-cols-2 gap-2 mb-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => !submitted && setSelected(i)}
              disabled={submitted}
              className={`text-left text-sm rounded-lg border p-3 transition-all ${
                submitted && i === q.answer
                  ? 'border-[var(--ok)] bg-[var(--ok-soft)]'
                  : submitted && i === selected
                  ? 'border-[var(--bad)] bg-[var(--bad-soft)]'
                  : selected === i
                  ? 'border-[var(--ap)] bg-[var(--ap-soft)]'
                  : 'border-[var(--rule)] hover:border-[var(--ap)]'
              }`}
              dangerouslySetInnerHTML={{ __html: opt }}
            />
          ))}
        </div>
      )}

      {/* Numeric */}
      {q.type === 'num' && (
        <div className="flex gap-2 items-center mb-3">
          <input
            type="number"
            value={numInput}
            onChange={(e) => setNumInput(e.target.value)}
            disabled={submitted}
            placeholder="Enter answer"
            className="w-40 rounded-lg border border-[var(--rule)] bg-[var(--sheet)] px-3 py-2 text-sm focus:border-[var(--ap)] outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
          {!submitted && (
            <button onClick={handleSubmit} className="px-4 py-2 rounded-lg bg-[var(--ap)] text-white text-sm font-bold hover:brightness-110">
              Check
            </button>
          )}
        </div>
      )}

      {/* Multi-field */}
      {q.type === 'multi' && (
        <div className="flex flex-wrap gap-3 items-center mb-3">
          {q.fields.map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-sm" style={{ fontFamily: 'var(--math-font)' }} dangerouslySetInnerHTML={{ __html: f.label }} />
              <input
                type="number"
                value={multiInputs[i] || ''}
                onChange={(e) => setMultiInputs((prev) => { const next = [...prev]; next[i] = e.target.value; return next; })}
                disabled={submitted}
                className="w-24 rounded-lg border border-[var(--rule)] bg-[var(--sheet)] px-3 py-2 text-sm focus:border-[var(--ap)] outline-none"
              />
            </div>
          ))}
          {!submitted && (
            <button onClick={handleSubmit} className="px-4 py-2 rounded-lg bg-[var(--ap)] text-white text-sm font-bold hover:brightness-110">
              Check
            </button>
          )}
        </div>
      )}

      {/* Order */}
      {q.type === 'order' && <OrderQuestion q={q} onSolved={onSolved} />}

      {/* Feedback */}
      {submitted && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`rounded-lg p-3 text-sm font-bold mb-2 ${correct ? 'bg-[var(--ok-soft)] text-[var(--ok)]' : 'bg-[var(--bad-soft)] text-[var(--bad)]'}`}>
          {correct ? 'Correct! Well done.' : 'Not quite. Try again or see the hint.'}
        </motion.div>
      )}

      {/* Hint */}
      {q.hint && !submitted && (
        <button onClick={() => setShowHint(!showHint)} className="flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--ap)] mb-2">
          <Lightbulb className="w-3 h-3" /> {showHint ? 'Hide hint' : 'Show hint'}
        </button>
      )}
      {showHint && q.hint && (
        <div className="rounded-lg bg-[var(--paper)] p-3 text-sm mb-2" dangerouslySetInnerHTML={{ __html: q.hint }} />
      )}

      {/* Solution */}
      {q.steps && (
        <button onClick={() => setShowSolution(!showSolution)} className="flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--ap)]">
          <ChevronDown className={`w-3 h-3 transition-transform ${showSolution ? 'rotate-180' : ''}`} />
          {showSolution ? 'Hide solution' : 'Show solution'}
        </button>
      )}
      <AnimatePresence>
        {showSolution && q.steps && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="border-t border-dashed border-[var(--rule)] pt-3 mt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-2">Solution</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-[var(--muted)]">
                {q.steps.map((step, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function OrderQuestion({ q, onSolved }: { q: Extract<Question, { type: 'order' }>; onSolved: (id: string) => void }) {
  const [order, setOrder] = useState<number[]>(q.shuffle || [...Array(q.items.length).keys()]);
  const [submitted, setSubmitted] = useState(false);
  const correct = order.every((idx, i) => idx === i);

  const move = (from: number, to: number) => {
    if (submitted) return;
    setOrder((prev) => {
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  };

  return (
    <div className="mb-3">
      <p className="text-xs text-[var(--muted)] mb-2">Arrange in the correct order. Use the buttons to move items.</p>
      <div className="flex flex-col gap-1">
        {order.map((idx, pos) => (
          <div key={idx} className={`flex items-center gap-2 rounded-lg border p-3 ${submitted && pos === idx ? 'border-[var(--ok)] bg-[var(--ok-soft)]' : submitted ? 'border-[var(--bad)] bg-[var(--bad-soft)]' : 'border-[var(--rule)]'}`}>
            <span className="text-xs font-bold text-[var(--muted)]">{pos + 1}.</span>
            <span className="flex-1 text-sm" dangerouslySetInnerHTML={{ __html: q.items[idx] }} />
            <div className="flex gap-1">
              <button onClick={() => move(pos, pos - 1)} disabled={pos === 0 || submitted} className="text-xs px-2 py-1 rounded border border-[var(--rule)] disabled:opacity-30">&uarr;</button>
              <button onClick={() => move(pos, pos + 1)} disabled={pos === order.length - 1 || submitted} className="text-xs px-2 py-1 rounded border border-[var(--rule)] disabled:opacity-30">&darr;</button>
            </div>
          </div>
        ))}
      </div>
      {!submitted && (
        <button onClick={() => { setSubmitted(true); if (correct) onSolved(q.id); }} className="mt-2 px-4 py-2 rounded-lg bg-[var(--ap)] text-white text-sm font-bold hover:brightness-110">
          Check order
        </button>
      )}
      {submitted && (
        <div className={`mt-2 rounded-lg p-3 text-sm font-bold ${correct ? 'bg-[var(--ok-soft)] text-[var(--ok)]' : 'bg-[var(--bad-soft)] text-[var(--bad)]'}`}>
          {correct ? 'Correct order!' : 'Not quite. See the solution.'}
        </div>
      )}
    </div>
  );
}
