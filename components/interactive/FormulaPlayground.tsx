'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Volume2, Sparkles, RefreshCw, Zap, Calculator } from 'lucide-react';
import type { Formula } from '@/data/science/types';
import { playFrequencyTone, playPop } from '@/lib/audio/soundEffects';

interface Props {
  formulas: Formula[];
  chapterNumber?: number;
}

export function FormulaPlayground({ formulas, chapterNumber }: Props) {
  // Determine playground preset based on chapterNumber or formulas
  const isMotionOrForce = chapterNumber === 4 || chapterNumber === 6 || formulas.some((f) => f.latex.includes('F = ma') || f.latex.includes('v ='));
  const isWorkEnergy = chapterNumber === 7 || formulas.some((f) => f.latex.includes('E_k') || f.latex.includes('mgh') || f.latex.includes('W ='));
  const isSound = chapterNumber === 10 || formulas.some((f) => f.latex.includes('\\nu') || f.latex.includes('f \\times \\lambda'));
  const isMole = chapterNumber === 9 || formulas.some((f) => f.latex.includes('n =') || f.latex.includes('N_A'));
  const isTemperature = chapterNumber === 1 || formulas.some((f) => f.latex.includes('273'));

  // Preset 1: Force & Acceleration
  const [mass, setMass] = useState(5);
  const [accel, setAccel] = useState(4);

  // Preset 2: Work & Kinetic Energy
  const [keMass, setKeMass] = useState(10);
  const [velocity, setVelocity] = useState(6);
  const [height, setHeight] = useState(5);

  // Preset 3: Sound Wave
  const [soundFreq, setSoundFreq] = useState(440); // 440 Hz standard A4
  const [wavelength, setWavelength] = useState(0.77);

  // Preset 4: Mole Concept
  const [substance, setSubstance] = useState<'water' | 'co2' | 'glucose' | 'nacl'>('water');
  const [sampleGrams, setSampleGrams] = useState(36);

  // Preset 5: Temperature
  const [celsius, setCelsius] = useState(25);

  const molarMasses = {
    water: { name: 'Water (H₂O)', M: 18 },
    co2: { name: 'Carbon Dioxide (CO₂)', M: 44 },
    glucose: { name: 'Glucose (C₆H₁₂O₆)', M: 180 },
    nacl: { name: 'Table Salt (NaCl)', M: 58.5 },
  };

  return (
    <div className="rounded-2xl border-2 border-[var(--sci)]/40 bg-[var(--paper)]/70 p-5 md:p-6 space-y-4 shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--rule)] pb-3 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[var(--sci)] text-white flex items-center justify-center shadow-xs">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--sci)]">
              Interactive What-If Sandbox
            </span>
            <h4 className="text-sm font-bold text-[var(--ink)]">
              Live Formula Playground &amp; Variable Explorer
            </h4>
          </div>
        </div>
        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[var(--sci-soft)] text-[var(--sci)] font-bold">
          Hands-on Exploration
        </span>
      </div>

      {/* Dynamic Interactive Sandboxes */}

      {/* 1. SOUND WAVE PLAYGROUND WITH AUDIO SYNTHESIZER */}
      {isSound && (
        <div className="space-y-4">
          <div className="text-xs text-[var(--muted)]">
            Adjust sound wave <b>Frequency (ν)</b> and <b>Wavelength (λ)</b> to calculate wave speed <code className="font-mono text-[var(--sci)]">v = ν × λ</code>, and click to hear the audio pitch!
          </div>

          <div className="grid sm:grid-cols-2 gap-4 bg-[var(--sheet)] p-4 rounded-xl border border-[var(--rule)]">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span>Frequency (ν):</span>
                <span className="text-[var(--sci)] font-mono">{soundFreq} Hz</span>
              </div>
              <input
                type="range"
                min="60"
                max="2000"
                step="10"
                value={soundFreq}
                onChange={(e) => setSoundFreq(Number(e.target.value))}
                className="w-full accent-[var(--sci)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted)]">
                <span>60 Hz (Bass)</span>
                <span>440 Hz (Concert A)</span>
                <span>2000 Hz (Shrill)</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span>Wavelength (λ):</span>
                <span className="text-[var(--sci)] font-mono">{wavelength} m</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.05"
                value={wavelength}
                onChange={(e) => setWavelength(Number(e.target.value))}
                className="w-full accent-[var(--sci)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted)]">
                <span>0.1 m</span>
                <span>1.5 m</span>
                <span>3.0 m</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--sci-soft)] border border-[var(--sci)]/30 flex-wrap gap-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--sci)]">Calculated Wave Speed</div>
              <div className="text-lg font-bold font-mono text-[var(--ink)]">
                v = {soundFreq} × {wavelength} = <span className="text-[var(--sci)]">{(soundFreq * wavelength).toFixed(1)} m/s</span>
              </div>
            </div>

            <button
              onClick={() => playFrequencyTone(soundFreq, 700)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--sci)] text-white text-xs font-bold shadow-md hover:opacity-90 active:scale-95 transition-all"
            >
              <Volume2 className="w-4 h-4" />
              <span>🔊 Hear Pitch at {soundFreq} Hz</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. FORCE & NEWTON'S SECOND LAW */}
      {isMotionOrForce && !isSound && (
        <div className="space-y-4">
          <div className="text-xs text-[var(--muted)]">
            Explore <b>Newton&apos;s Second Law (<code className="font-mono text-[var(--sci)]">F = m · a</code>)</b>. Tweak mass and acceleration to see the required net force in Newtons.
          </div>

          <div className="grid sm:grid-cols-2 gap-4 bg-[var(--sheet)] p-4 rounded-xl border border-[var(--rule)]">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span>Object Mass (m):</span>
                <span className="text-[var(--sci)] font-mono">{mass} kg</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={mass}
                onChange={(e) => setMass(Number(e.target.value))}
                className="w-full accent-[var(--sci)] cursor-pointer"
              />
              <div className="text-[10px] text-[var(--muted)]">
                {mass < 5 ? 'Light ball / backpack' : mass < 20 ? 'Bicycle / trunk' : 'Heavy motorcycle / crate'}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span>Acceleration (a):</span>
                <span className="text-[var(--sci)] font-mono">{accel} m/s²</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="20"
                step="0.5"
                value={accel}
                onChange={(e) => setAccel(Number(e.target.value))}
                className="w-full accent-[var(--sci)] cursor-pointer"
              />
              <div className="text-[10px] text-[var(--muted)]">
                {accel < 3 ? 'Gentle stroll rate' : accel < 10 ? 'Rapid car takeoff' : 'Extreme rocket boost!'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-teal-500/10 via-sky-500/10 to-transparent border border-teal-500/30 flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--sci)]">Required Force</div>
              <div className="text-xl font-bold font-mono text-[var(--ink)]">
                F = {mass} kg × {accel} m/s² = <span className="text-[var(--sci)]">{mass * accel} Newtons (N)</span>
              </div>
            </div>
            <div className="text-xs text-[var(--muted)]">
              Weight equivalent: ≈ <b>{((mass * accel) / 9.8).toFixed(1)} kg-wt</b>
            </div>
          </div>
        </div>
      )}

      {/* 3. WORK, KINETIC & POTENTIAL ENERGY */}
      {isWorkEnergy && (
        <div className="space-y-4">
          <div className="text-xs text-[var(--muted)]">
            Explore <b>Kinetic Energy (<code className="font-mono text-[var(--sci)]">KE = ½mv²</code>)</b> and <b>Potential Energy (<code className="font-mono text-[var(--sci)]">PE = mgh</code>)</b>.
          </div>

          <div className="grid sm:grid-cols-3 gap-3 bg-[var(--sheet)] p-4 rounded-xl border border-[var(--rule)]">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span>Mass (m):</span>
                <span className="text-[var(--sci)] font-mono">{keMass} kg</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={keMass}
                onChange={(e) => setKeMass(Number(e.target.value))}
                className="w-full accent-[var(--sci)] cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span>Velocity (v):</span>
                <span className="text-[var(--sci)] font-mono">{velocity} m/s</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={velocity}
                onChange={(e) => setVelocity(Number(e.target.value))}
                className="w-full accent-[var(--sci)] cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span>Height (h):</span>
                <span className="text-[var(--sci)] font-mono">{height} m</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-[var(--sci)] cursor-pointer"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/30">
              <div className="text-[10px] font-bold uppercase text-sky-700">Kinetic Energy (½mv²)</div>
              <div className="text-lg font-bold font-mono text-[var(--ink)]">
                {(0.5 * keMass * velocity * velocity).toFixed(1)} Joules (J)
              </div>
              <div className="text-[10px] text-[var(--muted)] mt-1">
                Notice: Doubling velocity quadruples kinetic energy!
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="text-[10px] font-bold uppercase text-amber-700">Potential Energy (mgh, g=9.8)</div>
              <div className="text-lg font-bold font-mono text-[var(--ink)]">
                {(keMass * 9.8 * height).toFixed(1)} Joules (J)
              </div>
              <div className="text-[10px] text-[var(--muted)] mt-1">
                Stored gravitational potential energy at height {height} m.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MOLE CONCEPT & AVOGADRO'S NUMBER */}
      {isMole && (
        <div className="space-y-4">
          <div className="text-xs text-[var(--muted)]">
            Explore <b>Mole Concept (<code className="font-mono text-[var(--sci)]">n = m / M</code>)</b> and particle count (<code className="font-mono text-[var(--sci)]">N = n × 6.022 × 10²³</code>).
          </div>

          <div className="grid sm:grid-cols-2 gap-3 bg-[var(--sheet)] p-4 rounded-xl border border-[var(--rule)]">
            <div>
              <label className="text-xs font-bold block mb-1.5">Select Chemical Substance:</label>
              <select
                value={substance}
                onChange={(e) => setSubstance(e.target.value as any)}
                className="w-full text-xs font-bold rounded-lg border border-[var(--rule)] p-2 bg-[var(--sheet)] text-[var(--ink)]"
              >
                {Object.entries(molarMasses).map(([key, data]) => (
                  <option key={key} value={key}>
                    {data.name} (M = {data.M} g/mol)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span>Sample Mass (m):</span>
                <span className="text-[var(--sci)] font-mono">{sampleGrams} grams</span>
              </div>
              <input
                type="range"
                min="1"
                max="360"
                value={sampleGrams}
                onChange={(e) => setSampleGrams(Number(e.target.value))}
                className="w-full accent-[var(--sci)] cursor-pointer"
              />
            </div>
          </div>

          {(() => {
            const currentM = molarMasses[substance].M;
            const moles = sampleGrams / currentM;
            const molecules = moles * 6.022;
            return (
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <div className="text-[10px] font-bold uppercase text-purple-700">Calculated Moles (n = m/M)</div>
                  <div className="text-lg font-bold font-mono text-[var(--ink)]">
                    {sampleGrams} / {currentM} = <span className="text-purple-700">{moles.toFixed(3)} moles</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/30">
                  <div className="text-[10px] font-bold uppercase text-teal-700">Total Molecules (N = n × N_A)</div>
                  <div className="text-lg font-bold font-mono text-[var(--ink)]">
                    ≈ <span className="text-teal-700">{molecules.toFixed(3)} × 10²³</span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 5. TEMPERATURE KELVIN SCALE */}
      {isTemperature && !isSound && !isWorkEnergy && !isMotionOrForce && !isMole && (
        <div className="space-y-4">
          <div className="text-xs text-[var(--muted)]">
            Explore <b>Celsius to Kelvin Conversion (<code className="font-mono text-[var(--sci)]">K = °C + 273</code>)</b> and observe water phase state!
          </div>

          <div className="bg-[var(--sheet)] p-4 rounded-xl border border-[var(--rule)] space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>Temperature in Celsius:</span>
              <span className="text-[var(--sci)] font-mono text-base">{celsius}°C</span>
            </div>
            <input
              type="range"
              min="-273"
              max="350"
              value={celsius}
              onChange={(e) => setCelsius(Number(e.target.value))}
              className="w-full accent-[var(--sci)] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[var(--muted)]">
              <span>-273°C (Absolute Zero)</span>
              <span>0°C (Ice Melts)</span>
              <span>100°C (Water Boils)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--sci-soft)] border border-[var(--sci)]/30 flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--sci)]">Kelvin Scale Equivalent</div>
              <div className="text-xl font-bold font-mono text-[var(--ink)]">
                T = {celsius} + 273 = <span className="text-[var(--sci)]">{celsius + 273} K</span>
              </div>
            </div>
            <div className="text-xs font-bold text-[var(--ink)] px-3 py-1 rounded-lg bg-[var(--sheet)] border border-[var(--rule)]">
              Phase of Water: {celsius < 0 ? '❄️ Solid Ice' : celsius >= 100 ? '💨 Gas (Steam)' : '💧 Liquid Water'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
