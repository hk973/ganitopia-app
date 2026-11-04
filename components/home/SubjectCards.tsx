'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calculator,
  Atom,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  BookOpen,
} from 'lucide-react';

export function SubjectCards({
  mathCount,
  scienceCount,
}: {
  mathCount: number;
  scienceCount: number;
}) {
  const mathTopics = [
    'Coordinate Geometry',
    'Polynomials & 8 Identities',
    'Number Systems & Irrationals',
    'Circle Theorems & Chords',
    "Heron's Formula & Areas",
    'Linear Equations (2 Variables)',
    '3D Surface Area & Volumes',
    'Probability & AP/GP',
  ];

  const scienceTopics = [
    'Motion & 3 Kinematics Equations',
    "Newton's Laws & Momentum",
    'Gravitation & Buoyancy',
    'Work, Energy & Power',
    'Sound Waves & Acoustics',
    'Cell Structure & Organelles',
    'Plant & Animal Tissues',
    'Bohr Model & The Mole Concept',
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--ap-soft)] text-[var(--ap)] text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" /> Structured Learning Path
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--ink)] tracking-tight"
          style={{ fontFamily: 'var(--display)' }}
        >
          Two Master Subjects. Zero Guesswork.
        </h2>
        <p className="text-[var(--muted)] max-w-xl mx-auto text-base">
          Interactive chapter-by-chapter curriculum aligned with the official CBSE Class 9 syllabus.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* ================= MATHEMATICS CARD ================= */}
        <Link href="/math" className="group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="h-full rounded-3xl bg-[var(--sheet)] border-2 border-[var(--rule)] group-hover:border-[var(--ap)] p-8 shadow-sm group-hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top background accent tint */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--ap-soft)] text-[var(--ap)] border border-[var(--ap)]/30 flex items-center justify-center text-3xl font-black shadow-sm group-hover:scale-105 transition-transform">
                  &Sigma;
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--ap-soft)] text-[var(--ap)]">
                    {mathCount} Chapters · 500+ Qs
                  </span>
                </div>
              </div>

              <h3
                className="text-2xl font-black text-[var(--ink)] mb-2 group-hover:text-[var(--ap)] transition-colors"
                style={{ fontFamily: 'var(--display)' }}
              >
                Class 9th Mathematics
              </h3>
              <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
                Build rock-solid mathematical intuition with dynamic Cartesian coordinate grids, polynomial root finders, and area proof models.
              </p>

              {/* Curriculum Pills */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
                  Core Modules Covered:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {mathTopics.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--paper)] text-[var(--ink)] border border-[var(--rule)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-6 border-t border-[var(--rule)] flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--muted)] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Full Solutions Included
              </span>
              <span className="font-extrabold text-sm text-[var(--ap)] flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                <span>Start Mathematics</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        </Link>

        {/* ================= SCIENCE CARD ================= */}
        <Link href="/science" className="group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="h-full rounded-3xl bg-[var(--sheet)] border-2 border-[var(--rule)] group-hover:border-[var(--sci)] p-8 shadow-sm group-hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top background accent tint */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-teal-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-teal-500/10 transition-colors" />

            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--sci-soft)] text-[var(--sci)] border border-[var(--sci)]/30 flex items-center justify-center text-3xl font-black shadow-sm group-hover:scale-105 transition-transform">
                  &#9883;
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--sci-soft)] text-[var(--sci)]">
                    {scienceCount} Chapters · NCERT 2026
                  </span>
                </div>
              </div>

              <h3
                className="text-2xl font-black text-[var(--ink)] mb-2 group-hover:text-[var(--sci)] transition-colors"
                style={{ fontFamily: 'var(--display)' }}
              >
                Class 9th Science (Phy, Chem, Bio)
              </h3>
              <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
                Step inside interactive science labs: watch kinematics cars accelerate, sound waves propagate longitudinally, and electrons orbit Bohr shells.
              </p>

              {/* Curriculum Pills */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
                  Core Modules Covered:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {scienceTopics.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--paper)] text-[var(--ink)] border border-[var(--rule)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-6 border-t border-[var(--rule)] flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--muted)] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> NCERT Exemplar &amp; Labs
              </span>
              <span className="font-extrabold text-sm text-[var(--sci)] flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                <span>Explore Science</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
