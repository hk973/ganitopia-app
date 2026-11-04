'use client';

import Link from 'next/link';
import type { MathChapter } from '@/data/math/types';
import type { ScienceChapter } from '@/data/science/types';

export function QuickAccess({
  mathChapters,
  scienceChapters,
}: {
  mathChapters: MathChapter[];
  scienceChapters: ScienceChapter[];
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      {/* Class 9 Bible Feature Spotlight */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-slate-900 border-2 border-indigo-500/40 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            ★ Ultimate Study Desk
          </div>
          <h3 className="text-2xl sm:text-3xl font-black" style={{ fontFamily: 'var(--display)' }}>
            The Class 9th Bible
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            All 8 Algebraic Identities, Equations of Motion, Mole Concept Formulas, Valency Table, Cell Organelle Nicknames, and Common Exam Pitfalls in one master reference desk.
          </p>
        </div>
        <Link
          href="/bible"
          className="flex-shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-lg hover:brightness-105 transition-all flex items-center gap-2"
        >
          <span>Open Class 9 Bible</span> &rarr;
        </Link>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--display)' }}>
          Quick Chapter Access
        </h3>
        <p className="text-sm font-bold text-[var(--ap)] mb-2">Mathematics</p>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {mathChapters.map((ch) => (
            <Link
              key={ch.n}
              href={`/math/${ch.n}`}
              className="flex-shrink-0 px-4 py-2 rounded-xl bg-[var(--ap-soft)] text-[var(--ap)] text-sm font-semibold hover:brightness-95 transition-all border border-[var(--ap)]/20"
            >
              Ch {ch.n}: {ch.short}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-[var(--sci)] mb-2">Science</p>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {scienceChapters.map((ch) => (
            <Link
              key={ch.n}
              href={`/science/${ch.n}`}
              className="flex-shrink-0 px-4 py-2 rounded-xl bg-[var(--sci-soft)] text-[var(--sci)] text-sm font-semibold hover:brightness-95 transition-all border border-[var(--sci)]/20"
            >
              Ch {ch.n}: {ch.short}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
