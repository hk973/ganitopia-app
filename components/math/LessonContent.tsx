'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { MathChapter, Lesson, Question } from '@/data/math/types';
import { QuestionCard } from './QuestionCard';
import { MathVisualizer } from './MathVisualizer';
import { InteractiveScratchpad } from '@/components/interactive/InteractiveScratchpad';

export function LessonContent({ chapter, lesson }: { chapter: MathChapter; lesson: Lesson }) {
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);

  const handleSolved = (id: string) => {
    setSolvedIds((prev) => new Set(prev).add(id));
  };

  const tagColor = lesson.kind === 'ap' ? 'var(--ap)' : lesson.kind === 'gp' ? 'var(--gp)' : 'var(--ink)';
  const solvedCount = lesson.practice.filter((q) => solvedIds.has(q.id)).length;

  return (
    <article className="rounded-2xl bg-[var(--sheet)] border border-[var(--rule)] p-6 md:p-8 shadow-md">
      {/* Eyebrow */}
      <div className="flex flex-wrap gap-2 items-center text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-4">
        <span>Chapter {chapter.n}</span>
        <span style={{ color: tagColor }}>· {lesson.tag}</span>
        <span>· {lesson.ex}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'var(--display)' }}>
        {lesson.title}
      </h1>
      <p className="text-lg text-[var(--muted)] mb-6 max-w-2xl leading-relaxed">{lesson.lede}</p>

      {/* Interactive Visualizer Lab */}
      <MathVisualizer
        chapterNumber={chapter.n}
        chapterTitle={chapter.title}
        lessonId={lesson.id}
        widgetKey={lesson.widgets?.[0]}
      />

      {/* Body */}
      <div
        className="prose max-w-2xl mb-6 text-[var(--ink)] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: lesson.body }}
      />

      {/* Rule box */}
      {lesson.rule && (
        <div
          className="rounded-xl p-4 mb-6 max-w-2xl border-2"
          style={{
            borderColor: lesson.rule.gp ? 'var(--gp)' : 'var(--ap)',
            background: lesson.rule.gp ? 'var(--gp-soft)' : 'var(--ap-soft)',
          }}
        >
          <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--display)' }}>
            {lesson.rule.lbl}
          </div>
          <div className="text-lg" style={{ fontFamily: 'var(--math-font)' }} dangerouslySetInnerHTML={{ __html: lesson.rule.f }} />
        </div>
      )}

      {/* Worked example */}
      {lesson.example && (
        <div className="border-l-4 border-[var(--ink)] pl-4 mb-6 max-w-2xl">
          <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-[var(--muted)]">Worked Example</h4>
          <p className="font-bold mb-2" dangerouslySetInnerHTML={{ __html: lesson.example.q }} />
          <ol className="list-decimal list-inside space-y-1 text-sm text-[var(--muted)]">
            {lesson.example.steps.map((step, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </ol>
        </div>
      )}

      {/* Practice questions */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Practice Questions</h3>
          <span className="text-sm text-[var(--muted)]">
            {solvedCount} of {lesson.practice.length} solved
          </span>
        </div>
        <div className="flex flex-col gap-4">
          {lesson.practice.map((q, i) => (
            <QuestionCard key={q.id} question={q} index={i + 1} onSolved={handleSolved} />
          ))}
        </div>
      </div>

      {/* Floating Whiteboard & Calculator Drawer */}
      <InteractiveScratchpad />
    </article>
  );
}
