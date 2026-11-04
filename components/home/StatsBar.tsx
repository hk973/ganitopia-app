'use client';

import { motion } from 'framer-motion';
import { Calculator, Atom, HelpCircle, BookOpen } from 'lucide-react';

export function StatsBar({
  mathCount,
  scienceCount,
}: {
  mathCount: number;
  scienceCount: number;
}) {
  const stats = [
    {
      value: `${mathCount + scienceCount}`,
      label: 'NCERT Chapters',
      detail: `${mathCount} Math + ${scienceCount} Science`,
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      value: '27',
      label: 'Interactive Labs',
      detail: 'Real-time animation simulators',
      icon: Atom,
      color: 'from-teal-500 to-emerald-600',
    },
    {
      value: '500+',
      label: 'Exam Questions',
      detail: 'MCQs & numericals with hints',
      icon: HelpCircle,
      color: 'from-amber-500 to-orange-600',
    },
    {
      value: '100%',
      label: 'Class 9th Bible',
      detail: 'Master formulas & pitfalls',
      icon: Calculator,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="rounded-3xl bg-[var(--sheet)] border-2 border-[var(--rule)] p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center sm:text-left space-y-1"
              >
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}
                  style={{ fontFamily: 'var(--display)' }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-bold text-[var(--ink)] flex items-center justify-center sm:justify-start gap-1.5">
                  <Icon className="w-4 h-4 text-[var(--muted)]" />
                  <span>{s.label}</span>
                </div>
                <div className="text-xs text-[var(--muted)]">{s.detail}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
