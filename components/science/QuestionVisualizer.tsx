'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  RotateCcw,
  Sparkles,
  Eye,
  Zap,
  Activity,
  Layers,
  Flame,
  Volume2,
  Atom,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import type { ScienceQuestion } from '@/data/science/types';

interface Props {
  question: ScienceQuestion;
  chapterN?: number;
}

export function QuestionVisualizer({ question: q, chapterN }: Props) {
  const [interactiveVal, setInteractiveVal] = useState(50);
  const [selectedMode, setSelectedMode] = useState<string>('default');

  const text = (q.q + ' ' + (q.hint || '') + ' ' + (q.answer || '')).toLowerCase();

  // Keyword-based concept classifier
  const isMotion =
    text.includes('motion') ||
    text.includes('speed') ||
    text.includes('velocity') ||
    text.includes('acceleration') ||
    text.includes('distance') ||
    text.includes('displacement') ||
    text.includes('circular motion');

  const isForce =
    text.includes('force') ||
    text.includes('newton') ||
    text.includes('inertia') ||
    text.includes('momentum') ||
    text.includes('friction') ||
    text.includes('recoil');

  const isSound =
    text.includes('sound') ||
    text.includes('wave') ||
    text.includes('frequency') ||
    text.includes('wavelength') ||
    text.includes('echo') ||
    text.includes('ultrasound') ||
    text.includes('amplitude') ||
    text.includes('sonar') ||
    text.includes('audible') ||
    text.includes('pitch');

  const isAtom =
    text.includes('atom') ||
    text.includes('electron') ||
    text.includes('proton') ||
    text.includes('neutron') ||
    text.includes('bohr') ||
    text.includes('valency') ||
    text.includes('isotope') ||
    text.includes('isobar') ||
    text.includes('rutherford') ||
    text.includes('thomson');

  const isMatter =
    text.includes('matter') ||
    text.includes('solid') ||
    text.includes('liquid') ||
    text.includes('gas') ||
    text.includes('evaporation') ||
    text.includes('diffusion') ||
    text.includes('sublimation') ||
    text.includes('latent heat') ||
    text.includes('kelvin') ||
    text.includes('celsius') ||
    text.includes('plasma') ||
    text.includes('condensation');

  const isCell =
    text.includes('cell') ||
    text.includes('organelle') ||
    text.includes('mitochondria') ||
    text.includes('nucleus') ||
    text.includes('osmosis') ||
    text.includes('plastid') ||
    text.includes('membrane') ||
    text.includes('ribosome') ||
    text.includes('golgi') ||
    text.includes('lysosome') ||
    text.includes('vacuole');

  const isTissue =
    text.includes('tissue') ||
    text.includes('xylem') ||
    text.includes('phloem') ||
    text.includes('parenchyma') ||
    text.includes('collenchyma') ||
    text.includes('sclerenchyma') ||
    text.includes('neuron') ||
    text.includes('muscle') ||
    text.includes('meristem') ||
    text.includes('blood') ||
    text.includes('tendon') ||
    text.includes('ligament');

  const isGravity =
    text.includes('gravit') ||
    text.includes('weight') ||
    text.includes('buoy') ||
    text.includes('archimedes') ||
    text.includes('float') ||
    text.includes('density') ||
    text.includes('free fall') ||
    text.includes('thrust') ||
    text.includes('pressure') ||
    text.includes('pascal');

  const isEnergy =
    text.includes('work') ||
    text.includes('energy') ||
    text.includes('joule') ||
    text.includes('power') ||
    text.includes('watt') ||
    text.includes('kinetic') ||
    text.includes('potential') ||
    text.includes('kilowatt');

  const isSolution =
    text.includes('mixture') ||
    text.includes('solution') ||
    text.includes('colloid') ||
    text.includes('suspension') ||
    text.includes('tyndall') ||
    text.includes('solubility') ||
    text.includes('pure') ||
    text.includes('distillation') ||
    text.includes('chromatography') ||
    text.includes('solute');

  const isMolecules =
    text.includes('molecule') ||
    text.includes('mole') ||
    text.includes('avogadro') ||
    text.includes('chemical combination') ||
    text.includes('ratio') ||
    text.includes('formula unit') ||
    text.includes('molecular mass') ||
    text.includes('law of conservation of mass');

  const isFood =
    text.includes('crop') ||
    text.includes('fertilizer') ||
    text.includes('manure') ||
    text.includes('fish') ||
    text.includes('bee') ||
    text.includes('poultry') ||
    text.includes('livestock') ||
    text.includes('harvest') ||
    text.includes('intercropping') ||
    text.includes('catla') ||
    text.includes('rohu');

  const isReproduction =
    text.includes('reproduction') ||
    text.includes('dna') ||
    text.includes('fission') ||
    text.includes('budding') ||
    text.includes('spore') ||
    text.includes('vegetative') ||
    text.includes('meiosis') ||
    text.includes('gamete') ||
    text.includes('fertilization') ||
    text.includes('chromosome') ||
    text.includes('regeneration');

  const isEnvironment =
    text.includes('atmosphere') ||
    text.includes('nitrogen cycle') ||
    text.includes('carbon cycle') ||
    text.includes('ozone') ||
    text.includes('greenhouse') ||
    text.includes('water cycle') ||
    text.includes('coastal') ||
    text.includes('breeze') ||
    text.includes('biogeochemical') ||
    text.includes('soil erosion') ||
    text.includes('pollution');

  const isDiversity =
    text.includes('kingdom') ||
    text.includes('monera') ||
    text.includes('protista') ||
    text.includes('fungi') ||
    text.includes('plantae') ||
    text.includes('animalia') ||
    text.includes('thallophyta') ||
    text.includes('bryophyta') ||
    text.includes('pteridophyta') ||
    text.includes('gymnosperm') ||
    text.includes('angiosperm') ||
    text.includes('arthropod') ||
    text.includes('annelid') ||
    text.includes('mollusc') ||
    text.includes('chordat') ||
    text.includes('taxonomy') ||
    text.includes('binomial');

  const isAssertion =
    text.includes('assertion') ||
    text.includes('reason') ||
    text.includes('statement 1') ||
    text.includes('both a and r');

  // 1. MOTION VISUALIZER
  if (isMotion) {
    const pos = (interactiveVal / 100) * 220;
    const velocity = (interactiveVal * 0.4).toFixed(1);
    const accel = (interactiveVal * 0.08).toFixed(2);
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-[var(--sci)] font-bold">
            <Eye className="w-3.5 h-3.5" /> Concept Visualizer: Motion &amp; Acceleration
          </span>
          <span className="font-mono text-[11px] text-[var(--ink)]">
            v = {velocity} m/s · a = {accel} m/s²
          </span>
        </div>

        <div className="relative h-16 w-full rounded-xl bg-[var(--sheet)] border border-[var(--rule)] overflow-hidden flex items-center px-4">
          <div className="absolute inset-x-0 bottom-2 border-b-2 border-dashed border-[var(--rule)]" />
          <motion.div
            animate={{ x: pos }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-8 h-8 rounded-xl bg-[var(--sci)] text-white text-base flex items-center justify-center shadow-md">
              🏎️
            </div>
            <div className="text-[9px] font-mono font-bold text-[var(--sci)] mt-0.5">
              s = {Math.round(interactiveVal)} m
            </div>
          </motion.div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Position (s):</span>
          <input
            type="range"
            min="0"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-[var(--sci)] cursor-pointer"
          />
          <span className="font-mono text-xs font-bold text-[var(--ink)] w-10 text-right">
            {interactiveVal} m
          </span>
        </div>
      </div>
    );
  }

  // 2. SOUND WAVES & FREQUENCY OSCILLOSCOPE
  if (isSound) {
    const freq = Math.round(200 + interactiveVal * 8);
    const wavelength = (344 / freq).toFixed(2);
    const wavePoints = Array.from({ length: 30 })
      .map((_, i) => {
        const angle = (i / 30) * Math.PI * (freq / 80);
        const y = Math.sin(angle) * 14;
        return `${i * 10 + 5},${25 + y}`;
      })
      .join(' ');

    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-blue-500 font-bold">
            <Volume2 className="w-3.5 h-3.5" /> Concept Visualizer: Sound Wave Oscilloscope
          </span>
          <span className="font-mono text-[11px] text-blue-500 font-bold">
            f = {freq} Hz · λ = {wavelength} m
          </span>
        </div>

        <div className="h-16 w-full rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden relative">
          <svg className="w-full h-full" viewBox="0 0 300 50">
            <line x1="0" y1="25" x2="300" y2="25" stroke="#334155" strokeDasharray="4,4" />
            <polyline fill="none" stroke="#38bdf8" strokeWidth="2.5" points={wavePoints} />
          </svg>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Frequency (f):</span>
          <input
            type="range"
            min="10"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-sky-500 cursor-pointer"
          />
          <span className="font-mono text-xs font-bold text-sky-500 w-16 text-right">
            {freq} Hz
          </span>
        </div>
      </div>
    );
  }

  // 3. ATOM & ELECTRON SHELLS (BOHR MODEL)
  if (isAtom) {
    const electronCount = Math.min(10, Math.max(1, Math.round(interactiveVal / 10)));
    const inKShell = Math.min(2, electronCount);
    const inLShell = Math.max(0, electronCount - 2);

    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-purple-600 font-bold">
            <Atom className="w-3.5 h-3.5" /> Concept Visualizer: Bohr Atomic Shells (2n²)
          </span>
          <span className="font-mono text-xs text-purple-600 font-bold">
            Electrons: {electronCount} (K:{inKShell}, L:{inLShell})
          </span>
        </div>

        <div className="h-28 w-full rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center relative overflow-hidden">
          {/* Nucleus */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 text-white text-[10px] font-bold flex items-center justify-center z-20 shadow-lg">
            +{electronCount}
          </div>

          {/* K Shell (n=1, max 2) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="absolute w-16 h-16 rounded-full border border-dashed border-purple-400/60 flex items-center justify-between"
          >
            {inKShell >= 1 && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm" />}
            {inKShell >= 2 && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm" />}
          </motion.div>

          {/* L Shell (n=2, max 8) */}
          {inLShell > 0 && (
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              className="absolute w-24 h-24 rounded-full border border-purple-500/40 flex items-center justify-around"
            >
              {Array.from({ length: inLShell }).map((_, idx) => (
                <span key={idx} className="w-2 h-2 rounded-full bg-purple-400 shadow-sm" />
              ))}
            </motion.div>
          )}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Atomic Number (Z):</span>
          <input
            type="range"
            min="10"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-purple-600 cursor-pointer"
          />
          <span className="font-mono text-xs font-bold text-purple-600 w-8 text-right">
            Z = {electronCount}
          </span>
        </div>
      </div>
    );
  }

  // 4. FORCES & NEWTON'S LAWS (FREE-BODY DYNAMICS)
  if (isForce) {
    const fNet = interactiveVal - 50;
    const accel = (fNet / 2).toFixed(1);
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-amber-600 font-bold">
            <Zap className="w-3.5 h-3.5" /> Concept Visualizer: Net Force &amp; Newton&apos;s Second Law (F = ma)
          </span>
          <span className="font-mono font-bold text-xs">
            {fNet === 0 ? 'Balanced (F = 0, a = 0)' : `Fnet = ${fNet} N (a = ${accel} m/s²)`}
          </span>
        </div>

        <div className="h-16 w-full rounded-xl bg-[var(--sheet)] border border-[var(--rule)] flex items-center justify-center relative overflow-hidden">
          <div className="flex items-center gap-4">
            {fNet < 0 && (
              <span className="text-rose-500 font-bold text-xs">
                ← {Math.abs(fNet)} N
              </span>
            )}
            <motion.div
              animate={{ x: fNet * 1.5 }}
              className="w-14 h-10 rounded-xl bg-amber-500 text-white font-bold text-xs flex items-center justify-center shadow-md"
            >
              m = 2 kg
            </motion.div>
            {fNet > 0 && (
              <span className="text-emerald-600 font-bold text-xs">
                {fNet} N →
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Adjust Force:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-amber-500 cursor-pointer"
          />
          <span className="font-mono text-xs font-bold text-amber-600 w-12 text-right">
            {fNet > 0 ? `+${fNet}` : fNet} N
          </span>
        </div>
      </div>
    );
  }

  // 5. STATES OF MATTER & THERMAL KINETIC PARTICLES
  if (isMatter) {
    const tempC = Math.round((interactiveVal / 100) * 200 - 50); // -50°C to 150°C
    const tempK = tempC + 273;
    const state = tempC < 0 ? 'Solid (Lattice)' : tempC < 100 ? 'Liquid (Flow)' : 'Gas (Rapid Free)';

    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-teal-600 font-bold">
            <Flame className="w-3.5 h-3.5" /> Concept Visualizer: Thermal Energy &amp; Particle Motion
          </span>
          <span className="font-mono text-xs text-teal-600 font-bold">
            {tempC}°C ({tempK} K) · {state}
          </span>
        </div>

        <div className="h-16 w-full rounded-xl bg-[var(--sheet)] border border-[var(--rule)] flex items-center justify-center gap-2 px-3 overflow-hidden">
          {Array.from({ length: 12 }).map((_, idx) => {
            const spread = tempC >= 100 ? 10 : tempC >= 0 ? 3 : 0;
            return (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -spread, spread, 0],
                  scale: tempC >= 100 ? [1, 1.25, 1] : 1,
                }}
                transition={{
                  repeat: Infinity,
                  duration: tempC >= 100 ? 0.35 : tempC >= 0 ? 1.0 : 2.5,
                  delay: (idx * 0.08) % 0.4,
                }}
                className={`w-3.5 h-3.5 rounded-full shadow-sm ${
                  tempC >= 100 ? 'bg-rose-500' : tempC >= 0 ? 'bg-teal-500' : 'bg-sky-400'
                }`}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Temperature:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-teal-600 cursor-pointer"
          />
          <span className="font-mono text-xs font-bold text-teal-600 w-16 text-right">
            {tempC}°C
          </span>
        </div>
      </div>
    );
  }

  // 6. CELL BIOLOGY & OSMOSIS TONICITY
  if (isCell) {
    const isHypo = interactiveVal < 33;
    const isIso = interactiveVal >= 33 && interactiveVal < 66;
    const tonicity = isHypo ? 'Hypotonic (Endosmosis → Swells)' : isIso ? 'Isotonic (Equilibrium)' : 'Hypertonic (Exosmosis → Plasmolysis)';

    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
            <Activity className="w-3.5 h-3.5" /> Concept Visualizer: Cell Anatomy &amp; Osmosis
          </span>
          <span className="text-xs font-bold text-emerald-600">{tonicity}</span>
        </div>

        <div className="h-20 w-full rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-around px-4 relative overflow-hidden">
          <motion.div
            animate={{ scale: isHypo ? 1.15 : isIso ? 1.0 : 0.85 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
              Nucleus
            </div>
          </motion.div>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center shadow-md">
              Mito
            </div>
            <div className="text-[10px] text-[var(--muted)] font-medium">ATP Powerhouse</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center shadow-md">
              Golgi
            </div>
            <div className="text-[10px] text-[var(--muted)] font-medium">Packaging</div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Solution Medium:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-emerald-600 cursor-pointer"
          />
        </div>
      </div>
    );
  }

  // 7. GRAVITATION, BUOYANCY & ARCHIMEDES' PRINCIPLE
  if (isGravity) {
    const isFloating = interactiveVal > 50;
    const densityVal = (0.5 + (interactiveVal / 100) * 1.5).toFixed(2);
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-blue-600 font-bold">
            <Eye className="w-3.5 h-3.5" /> Concept Visualizer: Archimedes Floatation &amp; Buoyant Upthrust
          </span>
          <span className={`text-xs font-bold ${isFloating ? 'text-emerald-600' : 'text-rose-600'}`}>
            {isFloating ? 'Floats (Density < 1.0 g/cm³)' : 'Sinks (Density > 1.0 g/cm³)'}
          </span>
        </div>

        <div className="h-20 w-full rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-end justify-center pb-2 relative overflow-hidden">
          <div className="absolute inset-x-0 top-6 border-t-2 border-dashed border-sky-400 text-[10px] text-sky-600 pl-2">
            Water Level (Displaced Fluid = Buoyant Force)
          </div>

          <motion.div
            animate={{ y: isFloating ? -24 : 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className={`w-16 h-10 rounded-xl flex items-center justify-center text-xs font-bold shadow-md z-10 ${
              isFloating ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-white'
            }`}
          >
            {isFloating ? 'Wood' : 'Iron'}
          </motion.div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Relative Density:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-sky-600 cursor-pointer"
          />
          <span className="font-mono text-xs font-bold text-sky-600 w-12 text-right">
            {densityVal}
          </span>
        </div>
      </div>
    );
  }

  // 8. WORK & ENERGY CONSERVATION
  if (isEnergy) {
    const pot = interactiveVal;
    const kin = 100 - interactiveVal;
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-amber-500 font-bold">
            <Zap className="w-3.5 h-3.5" /> Concept Visualizer: Conservation of Mechanical Energy
          </span>
          <span className="font-mono text-xs">Total E = {pot + kin} J (Constant)</span>
        </div>

        <div className="h-16 w-full rounded-xl bg-[var(--sheet)] border border-[var(--rule)] p-3 flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-amber-500 font-bold">Potential (Ep = mgh): {pot}%</span>
            <span className="text-emerald-500 font-bold">Kinetic (Ek = ½mv²): {kin}%</span>
          </div>
          <div className="h-3.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
            <div style={{ width: `${pot}%` }} className="bg-amber-500 transition-all duration-200" />
            <div style={{ width: `${kin}%` }} className="bg-emerald-500 transition-all duration-200" />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Height Position:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-amber-500 cursor-pointer"
          />
        </div>
      </div>
    );
  }

  // 9. SOLUTIONS, COLLOIDS & TYNDALL EFFECT
  if (isSolution) {
    const isColloid = interactiveVal > 33 && interactiveVal < 66;
    const solutionName =
      interactiveVal < 33
        ? 'True Solution (Salt in Water)'
        : isColloid
        ? 'Colloid (Milk / Fog - Tyndall Effect)'
        : 'Suspension (Chalk in Water)';

    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-cyan-600 font-bold">
            <Eye className="w-3.5 h-3.5" /> Concept Visualizer: Tyndall Effect &amp; Light Scattering
          </span>
          <span className="text-xs font-bold text-cyan-600">{solutionName}</span>
        </div>

        <div className="h-16 w-full rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between px-6 relative overflow-hidden">
          <div className="w-5 h-5 rounded-md bg-rose-500 text-[10px] text-white flex items-center justify-center font-bold shadow-md z-10">
            🔦
          </div>

          <div className="flex-1 mx-3 h-2 relative flex items-center">
            <div
              className={`w-full h-1 rounded transition-all duration-300 ${
                interactiveVal < 33
                  ? 'opacity-10 bg-rose-500'
                  : isColloid
                  ? 'opacity-90 bg-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.8)]'
                  : 'opacity-50 bg-rose-500'
              }`}
            />
            {isColloid && (
              <span className="absolute left-1/2 -top-4 -translate-x-1/2 text-[9px] font-bold text-rose-400">
                Tyndall Scattering Visible!
              </span>
            )}
            {interactiveVal < 33 && (
              <span className="absolute left-1/2 -top-4 -translate-x-1/2 text-[9px] text-slate-400">
                Invisible Beam (Particles &lt; 1 nm)
              </span>
            )}
          </div>

          <div className="w-12 h-12 rounded-lg border-2 border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center text-[10px] text-cyan-300">
            Beaker
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Mixture Type:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-cyan-600 cursor-pointer"
          />
        </div>
      </div>
    );
  }

  // 10. TISSUES VISUALIZER
  if (isTissue) {
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
            <Layers className="w-3.5 h-3.5" /> Concept Visualizer: Plant &amp; Animal Tissue Architecture
          </span>
          <span className="text-xs font-bold text-emerald-600">Specialized Living Cells</span>
        </div>

        <div className="h-16 w-full rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-around px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center">
              🌿
            </div>
            <div>
              <div className="text-[11px] font-bold text-[var(--ink)]">Xylem &amp; Phloem</div>
              <div className="text-[9px] text-[var(--muted)]">Water &amp; Food Conduction</div>
            </div>
          </div>

          <div className="h-8 w-px bg-[var(--rule)]" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
              🧠
            </div>
            <div>
              <div className="text-[11px] font-bold text-[var(--ink)]">Neuron &amp; Muscle</div>
              <div className="text-[9px] text-[var(--muted)]">Impulse &amp; Contraction</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 11. MOLECULES & MOLE CONCEPT
  if (isMolecules) {
    const moles = (interactiveVal / 50).toFixed(1);
    const particles = (parseFloat(moles) * 6.022).toFixed(2);
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-violet-600 font-bold">
            <Atom className="w-3.5 h-3.5" /> Concept Visualizer: Avogadro Constant &amp; Molar Ratio
          </span>
          <span className="font-mono text-xs text-violet-600 font-bold">{moles} Moles</span>
        </div>

        <div className="h-16 w-full rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-around px-4">
          <div className="text-center">
            <div className="text-xs font-bold text-[var(--ink)]">{moles} mol H₂O</div>
            <div className="text-[10px] text-[var(--muted)]">Mass = {(parseFloat(moles) * 18).toFixed(1)} g</div>
          </div>
          <span className="text-base font-bold text-violet-500">⇌</span>
          <div className="text-center">
            <div className="text-xs font-bold text-violet-600">{particles} × 10²³</div>
            <div className="text-[10px] text-[var(--muted)]">Molecules (N = n × NA)</div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Adjust Moles:</span>
          <input
            type="range"
            min="10"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-violet-600 cursor-pointer"
          />
        </div>
      </div>
    );
  }

  // 12. FOOD RESOURCES & AGRICULTURE
  if (isFood) {
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-lime-600 font-bold">
            <Layers className="w-3.5 h-3.5" /> Concept Visualizer: Composite Fish Pond Stratification
          </span>
          <span className="text-xs font-bold text-lime-600">Zero Competition</span>
        </div>

        <div className="h-16 w-full rounded-xl bg-sky-500/15 border border-sky-400/30 flex flex-col justify-between p-2">
          <div className="flex items-center justify-between text-[10px] text-sky-800 dark:text-sky-200">
            <span>🐟 Surface Feeder: <b>Catla</b></span>
            <span>Plankton Eater</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-blue-800 dark:text-blue-200">
            <span>🐟 Middle Column: <b>Rohu</b></span>
            <span>Mid-water Feed</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-teal-800 dark:text-teal-200">
            <span>🐟 Bottom Feeder: <b>Mrigal &amp; Common Carp</b></span>
            <span>Decaying Matter</span>
          </div>
        </div>
      </div>
    );
  }

  // 13. REPRODUCTION & GENETICS VISUALIZER
  if (isReproduction) {
    const fissionProgress = interactiveVal;
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-rose-500 font-bold">
            <Zap className="w-3.5 h-3.5" /> Concept Visualizer: Cell Division &amp; DNA Replication
          </span>
          <span className="text-xs font-bold text-rose-500">
            {fissionProgress < 30 ? 'Interphase DNA Copy' : fissionProgress < 75 ? 'Nuclear Elongation' : 'Cytokinesis (2 Clones)'}
          </span>
        </div>

        <div className="h-16 w-full rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-around px-4">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                scale: fissionProgress < 50 ? 1 + fissionProgress * 0.005 : 0.9,
                x: fissionProgress > 60 ? -fissionProgress * 0.25 : 0
              }}
              className="w-10 h-10 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center text-xs font-bold"
            >
              2n
            </motion.div>
            {fissionProgress >= 50 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 0.9, x: fissionProgress * 0.25 }}
                className="w-10 h-10 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center text-xs font-bold"
              >
                2n
              </motion.div>
            )}
          </div>
          <div className="text-right">
            <div className="text-[11px] font-bold text-[var(--ink)]">Asexual Fission / Mitosis</div>
            <div className="text-[9px] text-[var(--muted)]">Exact Genetic Clones (No Gametes)</div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Division Stage:</span>
          <input
            type="range"
            min="10"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-rose-500 cursor-pointer"
          />
        </div>
      </div>
    );
  }

  // 14. ENVIRONMENT & BIOGEOCHEMICAL CYCLES
  if (isEnvironment) {
    const isDay = interactiveVal > 50;
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-cyan-600 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Concept Visualizer: Atmosphere &amp; Coastal Breezes
          </span>
          <span className="text-xs font-bold text-cyan-600">
            {isDay ? '☀️ Daytime Sea Breeze (Ocean → Land)' : '🌙 Night Land Breeze (Land → Ocean)'}
          </span>
        </div>

        <div className="h-16 w-full rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-around px-4">
          <div className="text-center">
            <div className="text-xs font-bold text-amber-600 dark:text-amber-400">Land Mass</div>
            <div className="text-[10px] text-[var(--muted)]">{isDay ? 'Heats Fast (Low P)' : 'Cools Fast (High P)'}</div>
          </div>
          <div className="flex flex-col items-center">
            <motion.span
              animate={{ x: isDay ? [-10, 10] : [10, -10] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-base font-bold text-cyan-600"
            >
              {isDay ? '➔ Wind ➔' : '⬅ Wind ⬅'}
            </motion.span>
            <span className="text-[9px] text-[var(--muted)] font-mono">Pressure Gradient Flow</span>
          </div>
          <div className="text-center">
            <div className="text-xs font-bold text-blue-600 dark:text-blue-400">Water Body</div>
            <div className="text-[10px] text-[var(--muted)]">{isDay ? 'High Specific Heat (High P)' : 'Warm Retention (Low P)'}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-[11px] text-[var(--muted)]">Time Cycle:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={interactiveVal}
            onChange={(e) => setInteractiveVal(Number(e.target.value))}
            className="flex-1 accent-cyan-600 cursor-pointer"
          />
          <span className="text-[10px] font-semibold text-[var(--ink)]">{isDay ? 'Day' : 'Night'}</span>
        </div>
      </div>
    );
  }

  // 15. DIVERSITY IN LIVING ORGANISMS (FIVE KINGDOMS)
  if (isDiversity) {
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--rule)] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--muted)] font-semibold">
          <span className="flex items-center gap-1.5 text-teal-600 font-bold">
            <Layers className="w-3.5 h-3.5" /> Concept Visualizer: Whittaker 5-Kingdom Taxonomic Tree
          </span>
          <span className="text-xs font-bold text-teal-600">Evolutionary Hierarchy</span>
        </div>

        <div className="h-16 w-full rounded-xl bg-teal-500/10 border border-teal-500/20 grid grid-cols-5 gap-1 p-2 text-center">
          <div className="p-1 rounded bg-teal-700/15 border border-teal-500/30">
            <div className="text-[10px] font-bold text-[var(--ink)]">Monera</div>
            <div className="text-[8px] text-[var(--muted)]">Prokaryote</div>
          </div>
          <div className="p-1 rounded bg-teal-700/15 border border-teal-500/30">
            <div className="text-[10px] font-bold text-[var(--ink)]">Protista</div>
            <div className="text-[8px] text-[var(--muted)]">Unicellular</div>
          </div>
          <div className="p-1 rounded bg-teal-700/15 border border-teal-500/30">
            <div className="text-[10px] font-bold text-[var(--ink)]">Fungi</div>
            <div className="text-[8px] text-[var(--muted)]">Saprophyte</div>
          </div>
          <div className="p-1 rounded bg-teal-700/15 border border-teal-500/30">
            <div className="text-[10px] font-bold text-[var(--ink)]">Plantae</div>
            <div className="text-[8px] text-[var(--muted)]">Autotroph</div>
          </div>
          <div className="p-1 rounded bg-teal-700/15 border border-teal-500/30">
            <div className="text-[10px] font-bold text-[var(--ink)]">Animalia</div>
            <div className="text-[8px] text-[var(--muted)]">Heterotroph</div>
          </div>
        </div>
      </div>
    );
  }

  // 16. ASSERTION-REASONING LOGIC VALIDATOR
  if (isAssertion) {
    return (
      <div className="my-3 p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-2">
        <div className="flex items-center justify-between text-xs text-indigo-700 dark:text-indigo-300 font-bold">
          <span className="flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> CBSE Assertion-Reason Logic Engine
          </span>
          <span>Board Format</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 rounded-xl bg-[var(--sheet)] border border-[var(--rule)] flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Assertion (A): Factual Claim</span>
          </div>
          <div className="p-2 rounded-xl bg-[var(--sheet)] border border-[var(--rule)] flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-500" />
            <span>Reason (R): Scientific Explanation</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback General Science Visualizer
  return (
    <div className="my-2.5 p-3 rounded-xl bg-[var(--sheet)] border border-[var(--rule)] flex items-center justify-between text-xs">
      <div className="flex items-center gap-2 text-[var(--muted)]">
        <Sparkles className="w-3.5 h-3.5 text-[var(--sci)]" />
        <span className="font-semibold text-[var(--ink)]">NCERT Science Principle Model</span>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--sci-soft)] text-[var(--sci)]">
        Class 9 Interactive
      </span>
    </div>
  );
}
