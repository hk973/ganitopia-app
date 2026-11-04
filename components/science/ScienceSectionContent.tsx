'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { ScienceChapter, ScienceSection } from '@/data/science/types';
import { ScienceVisualizer } from './ScienceVisualizer';
import { ScienceQuestionCard } from './ScienceQuestionCard';
import { ConceptFlashcards } from '@/components/interactive/ConceptFlashcards';
import { FormulaPlayground } from '@/components/interactive/FormulaPlayground';
import { StepByStepWalkthrough } from '@/components/interactive/StepByStepWalkthrough';
import { InteractiveScratchpad } from '@/components/interactive/InteractiveScratchpad';
import {
  Lightbulb,
  AlertTriangle,
  Calculator,
  Compass,
  Sparkles,
  CheckCircle2,
  BookOpen,
  FlaskConical,
} from 'lucide-react';

export function ScienceSectionContent({
  chapter,
  section,
}: {
  chapter: ScienceChapter;
  section: ScienceSection;
}) {
  return (
    <article className="rounded-2xl bg-[var(--sheet)] border border-[var(--rule)] p-6 md:p-8 shadow-md space-y-8">
      {/* Eyebrow */}
      <div>
        <div className="flex flex-wrap gap-2 items-center text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
          <span
            className="px-2.5 py-0.5 rounded-full text-white text-[10px]"
            style={{ background: 'var(--sci)' }}
          >
            NCERT Class 9
          </span>
          <span style={{ color: 'var(--sci)' }}>Chapter {chapter.n}</span>
          <span>· {chapter.title}</span>
        </div>

        <h1
          className="text-2xl md:text-4xl font-black mb-3 text-[var(--ink)] tracking-tight"
          style={{ fontFamily: 'var(--display)' }}
        >
          {section.title}
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-3xl">
          {section.content}
        </p>
      </div>

      {/* Real-World Hook Card (if available) */}
      {section.realWorldScenario && (
        <div className="rounded-2xl bg-gradient-to-r from-teal-500/10 via-sky-500/5 to-transparent border border-teal-500/30 p-5 shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{section.realWorldScenario.emoji || '🔬'}</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--sci)]">
              Real-World Science Connection
            </span>
          </div>
          <h4 className="text-base font-bold text-[var(--ink)]">
            {section.realWorldScenario.title}
          </h4>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {section.realWorldScenario.description || section.realWorldScenario.context}
          </p>
          {(section.realWorldScenario.connection || section.realWorldScenario.application) && (
            <div className="pt-1 text-xs font-semibold text-[var(--sci)]">
              💡 <b>Scientific Principle:</b> {section.realWorldScenario.connection || section.realWorldScenario.application}
            </div>
          )}
        </div>
      )}

      {/* Interactive Visualizer Lab */}
      <ScienceVisualizer
        chapterNumber={chapter.n}
        chapterTitle={chapter.title}
        sectionId={section.id}
      />

      {/* In-Depth Content Blocks (if available) */}
      {section.contentBlocks && section.contentBlocks.length > 0 && (
        <div className="space-y-4 prose max-w-none text-[var(--ink)]">
          {section.contentBlocks.map((block, bIdx) => (
            <p key={bIdx} className="text-sm md:text-base leading-relaxed text-[var(--ink)]">
              {block}
            </p>
          ))}
        </div>
      )}

      {/* Key Concepts (Interactive 3D Flashcards + Grid View) */}
      {section.keyConcepts.length > 0 && (
        <ConceptFlashcards concepts={section.keyConcepts} themeColor="var(--sci)" />
      )}

      {/* Formulas & Mathematical Relations */}
      {section.formulas.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
            <Calculator className="w-4 h-4 text-[var(--sci)]" />
            <span>Formulas &amp; Physical Relations</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {section.formulas.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border-2 border-[var(--sci)]/40 bg-[var(--sci-soft)]/50 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1 text-[var(--sci)]">
                    {f.label}
                  </div>
                  <div
                    className="text-lg md:text-xl font-bold font-mono text-[var(--ink)] my-1"
                    style={{ fontFamily: 'var(--math-font)' }}
                  >
                    {f.latex}
                  </div>
                </div>
                <div>
                  {f.unit && (
                    <div className="text-xs text-[var(--muted)] font-mono mt-1">
                      SI Unit: <b>{f.unit}</b>
                    </div>
                  )}
                  {f.explanation && (
                    <div className="text-xs text-[var(--muted)] mt-1">
                      {f.explanation}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive What-If Formula Playground */}
          <FormulaPlayground formulas={section.formulas} chapterNumber={chapter.n} />
        </div>
      )}

      {/* Worked Step-by-Step Numericals (Interactive Stepper) */}
      {section.workedExamples && section.workedExamples.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Interactive Worked Examples (Step-by-Step Guided Reveal)</span>
          </div>

          <div className="space-y-4">
            {section.workedExamples.map((ex, exIdx) => (
              <StepByStepWalkthrough key={exIdx} example={ex} index={exIdx} />
            ))}
          </div>
        </div>
      )}

      {/* NCERT Practical Classroom Activities */}
      {section.activities.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
            <FlaskConical className="w-4 h-4 text-amber-500" />
            <span>NCERT Classroom Activity &amp; Inferences</span>
          </div>

          <div className="space-y-3">
            {section.activities.map((act, i) => (
              <div
                key={i}
                className="rounded-xl border border-dashed border-[var(--sci)] p-4 bg-[var(--sheet)] space-y-2"
              >
                <div className="font-bold text-sm text-[var(--ink)]">
                  Activity {act.number}: {act.title}
                </div>
                {act.materials && act.materials.length > 0 && (
                  <div className="text-xs text-[var(--muted)]">
                    <b>Apparatus Required:</b> {act.materials.join(', ')}
                  </div>
                )}
                <ol className="list-decimal list-inside space-y-1 text-xs text-[var(--muted)] leading-relaxed">
                  {act.steps.map((s, j) => (
                    <li key={j}>{s}</li>
                  ))}
                </ol>
                {act.observation && (
                  <div className="text-xs text-[var(--ink)] mt-2 bg-[var(--paper)] p-2.5 rounded-lg border border-[var(--rule)]">
                    <b>Observation:</b> {act.observation}
                  </div>
                )}
                {act.conclusion && (
                  <div className="text-xs text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    <b>Scientific Inference:</b> {act.conclusion}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Did You Know? Trivia Box (if available) */}
      {section.didYouKnow && (
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 p-4 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Did You Know? · NCERT Science Trivia
            </div>
            <p className="text-xs text-[var(--ink)] leading-relaxed">
              {section.didYouKnow}
            </p>
          </div>
        </div>
      )}

      {/* Common Exam Pitfalls & Traps (if available) */}
      {section.examTips && section.examTips.length > 0 && (
        <div className="rounded-2xl bg-rose-500/5 border border-rose-500/20 p-4 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600">
            <AlertTriangle className="w-4 h-4" />
            <span>Common Exam Pitfalls &amp; Mistakes to Avoid</span>
          </div>
          <ul className="space-y-1 text-xs text-[var(--ink)]">
            {section.examTips.map((tip, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">⚠</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Interactive Practice Questions */}
      {section.questions.length > 0 && (
        <div className="pt-4 border-t border-[var(--rule)]">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-bold text-[var(--ink)]">
                Interactive Check for Understanding
              </h3>
              <p className="text-xs text-[var(--muted)]">
                Solve the questions below to test your conceptual mastery.
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--sci-soft)] text-[var(--sci)]">
              {section.questions.length} questions
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {section.questions.map((qst, i) => (
              <ScienceQuestionCard key={qst.id} question={qst} index={i + 1} />
            ))}
          </div>
        </div>
      )}

      {/* Floating Whiteboard & Calculator Drawer */}
      <InteractiveScratchpad />
    </article>
  );
}
