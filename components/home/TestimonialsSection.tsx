'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Aarav Sharma',
      school: 'Delhi Public School, R.K. Puram',
      score: 'Scored 98/100 in Science',
      quote:
        'Physics used to be confusing with all the equations of motion and sign conventions. Playing with the kinematics car and live graphs made everything click in 10 minutes!',
      avatarBg: '#38bdf8',
      initials: 'AS',
    },
    {
      name: 'Ananya Mukherjee',
      school: 'Kendriya Vidyalaya, IIT Powai',
      score: 'Scored 99/100 in Math',
      quote:
        'The Class 9 Bible is genuinely a cheat code for exams. The 8 identities, circles central angle theorems, and common pitfalls saved me from making silly calculation errors.',
      avatarBg: '#f59e0b',
      initials: 'AM',
    },
    {
      name: 'Rohan Deshmukh',
      school: 'DAV Public School, Pune',
      score: 'From 65% to 92%',
      quote:
        'Interactive simulations for Bohr atomic shells and plant vs animal cell osmosis helped me visualize concepts that textbooks simply could not explain with static diagrams.',
      avatarBg: '#10b981',
      initials: 'RD',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Student &amp; Teacher Stories
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--ink)] tracking-tight"
          style={{ fontFamily: 'var(--display)' }}
        >
          Loved by Class 9th Toppers
        </h2>
        <p className="text-[var(--muted)] max-w-xl mx-auto text-base">
          See how Ganitopia transforms student confidence and exam marks across India.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-3xl bg-[var(--sheet)] border-2 border-[var(--rule)] p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[var(--ink)] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="pt-6 mt-6 border-t border-[var(--rule)] flex items-center gap-3">
              <div
                style={{ background: t.avatarBg }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs shadow"
              >
                {t.initials}
              </div>
              <div>
                <h4 className="font-bold text-sm text-[var(--ink)]">{t.name}</h4>
                <p className="text-[11px] text-[var(--muted)]">{t.school}</p>
                <div className="inline-block mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600">
                  {t.score}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
