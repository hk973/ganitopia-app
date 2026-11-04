'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Atom,
  Calculator,
  Compass,
  CheckCircle2,
  Star,
  Zap,
} from 'lucide-react';

export function HeroSection() {
  const [freq, setFreq] = useState(240);
  const [isPlaying, setIsPlaying] = useState(true);
  const [phase, setPhase] = useState(0);

  // Mini-lab sound wave continuous animation
  useEffect(() => {
    let animId: number;
    if (isPlaying) {
      const loop = () => {
        setPhase((p) => p + freq * 0.0006);
        animId = requestAnimationFrame(loop);
      };
      animId = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, freq]);

  const points = [];
  for (let x = 0; x <= 260; x += 6) {
    const y = 35 + 16 * Math.sin(x * freq * 0.006 - phase);
    points.push(`${x},${y.toFixed(1)}`);
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-[#0d1527] to-slate-950 text-white pt-12 pb-20">
      {/* Ambient Radial Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-indigo-500/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-teal-500/15 blur-3xl pointer-events-none rounded-full" />

      {/* Subtle Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-bold tracking-wide shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>NCERT Class 9th · Mathematics &amp; Science 2026</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12]"
              style={{ fontFamily: 'var(--display)' }}
            >
              Stop Memorizing.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300">
                Start Visualizing.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Master Class 9 Mathematics and Science through real-time interactive physics simulators, animated geometry benches, and the all-in-one revision Bible. <span className="text-white font-semibold italic">Har concept, ek prayog.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start flex-wrap pt-2"
            >
              <Link
                href="/bible"
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>📖 Open Class 9 Bible</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/math"
                className="px-6 py-3.5 rounded-xl bg-blue-600/80 hover:bg-blue-600 border border-blue-400/40 text-white font-bold text-sm shadow-lg shadow-blue-500/15 backdrop-blur-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Calculator className="w-4 h-4 text-sky-300" />
                <span>Explore Math &rarr;</span>
              </Link>

              <Link
                href="/science"
                className="px-6 py-3.5 rounded-xl bg-teal-600/80 hover:bg-teal-600 border border-teal-400/40 text-white font-bold text-sm shadow-lg shadow-teal-500/15 backdrop-blur-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Atom className="w-4 h-4 text-teal-200" />
                <span>Explore Science &rarr;</span>
              </Link>
            </motion.div>

            {/* Social Proof / Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400"
            >
              <div className="flex -space-x-2 overflow-hidden">
                {['#38bdf8', '#34d399', '#f59e0b', '#a855f7'].map((c, i) => (
                  <div
                    key={i}
                    style={{ background: c }}
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 text-slate-900 font-bold text-[10px] flex items-center justify-center shadow"
                  >
                    {['A', 'R', 'P', 'S'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white font-bold text-xs ml-1">4.9/5</span>
                </div>
                <div className="text-[11px] text-slate-400">Trusted by Class 9th students across CBSE</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive Concept Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-xl space-y-4 ring-1 ring-white/10">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 font-bold text-xs">
                    ⚡
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                      Live Concept Lab Preview
                    </div>
                    <div className="text-sm font-bold text-white">Wave Oscilloscope &amp; Frequency</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-teal-400" /> : <Play className="w-3.5 h-3.5 text-teal-400" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
              </div>

              {/* Animated Wave Display */}
              <div className="h-28 bg-slate-950/80 rounded-2xl border border-slate-800 p-3 relative flex flex-col justify-between overflow-hidden shadow-inner">
                <div className="flex justify-between text-[10px] font-mono text-slate-400 z-10">
                  <span>Frequency: <b className="text-teal-300">{freq} Hz</b></span>
                  <span>Wavelength: <b className="text-sky-300">{((343 / freq) * 100).toFixed(0)} cm</b></span>
                </div>

                <div className="relative w-full h-16">
                  <svg viewBox="0 0 260 70" className="w-full h-full">
                    <line x1="0" y1="35" x2="260" y2="35" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    <polyline
                      fill="none"
                      stroke="#2dd4bf"
                      strokeWidth="2.5"
                      points={points.join(' ')}
                    />
                  </svg>
                </div>

                <div className="flex justify-between text-[9px] font-mono text-slate-500">
                  <span>Compression</span>
                  <span>Rarefaction</span>
                  <span>Compression</span>
                </div>
              </div>

              {/* Frequency slider */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="font-medium">Adjust Pitch / Frequency (ν):</span>
                  <span className="font-mono font-bold text-teal-300">{freq} Hz</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="450"
                  value={freq}
                  onChange={(e) => setFreq(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer"
                />
              </div>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                  <div className="font-bold text-sky-300 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> 14 Math Labs
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cartesian, Heron, Circles, 3D</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                  <div className="font-bold text-teal-300 flex items-center gap-1">
                    <Atom className="w-3.5 h-3.5" /> 13 Science Labs
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Motion, Bohr Atom, Cells, Force</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
