'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Atom,
  Layers,
  Activity,
  Zap,
  Flame,
  Volume2,
  Globe,
  Sparkles,
} from 'lucide-react';
import { playFrequencyTone } from '@/lib/audio/soundEffects';

interface VisualizerProps {
  chapterNumber: number;
  chapterTitle: string;
  sectionId?: string;
}

export function ScienceVisualizer({ chapterNumber, chapterTitle, sectionId }: VisualizerProps) {
  const [activeSubLab, setActiveSubLab] = useState<string>('default');

  return (
    <div className="rounded-2xl border-2 border-[var(--sci)]/40 bg-[var(--sheet)] p-6 mb-8 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap border-b border-[var(--rule)] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-sm" style={{ background: 'var(--sci)' }}>
            🔬
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--sci)]">
              Interactive Science Lab · Concept Visualizer
            </div>
            <h3 className="text-lg font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--display)' }}>
              {getLabTitle(chapterNumber)}
            </h3>
          </div>
        </div>
        <div className="text-xs px-3 py-1 rounded-full bg-[var(--sci-soft)] text-[var(--sci)] font-bold">
          Chapter {chapterNumber} · NCERT Class 9
        </div>
      </div>

      {/* Render Dedicated Interactive Lab based on Chapter */}
      {chapterNumber === 1 && (
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-[var(--rule)] pb-3">
            <button
              onClick={() => setActiveSubLab('matter')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeSubLab !== 'inquiry' ? 'bg-[var(--sci)] text-white shadow-sm' : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)]'
              }`}
            >
              🔬 Matter &amp; Phase Changes Lab
            </button>
            <button
              onClick={() => setActiveSubLab('inquiry')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeSubLab === 'inquiry' ? 'bg-[var(--sci)] text-white shadow-sm' : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)]'
              }`}
            >
              🧪 Scientific Method Tester
            </button>
          </div>
          {activeSubLab === 'inquiry' ? <ScientificMethodSimulation /> : <MatterSimulation />}
        </div>
      )}
      {chapterNumber === 2 && <CellSimulation />}
      {chapterNumber === 3 && <TissuesSimulation />}
      {chapterNumber === 4 && <MotionSimulation />}
      {chapterNumber === 5 && <SolutionsSimulation />}
      {chapterNumber === 6 && <ForceSimulation />}
      {chapterNumber === 7 && (
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-[var(--rule)] pb-3">
            <button
              onClick={() => setActiveSubLab('energy')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                (activeSubLab === 'energy' || (activeSubLab === 'default' && sectionId !== 's4' && sectionId !== 's5'))
                  ? 'bg-[var(--sci)] text-white shadow-sm'
                  : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)]'
              }`}
            >
              ⚡ Work &amp; Energy Rollercoaster
            </button>
            <button
              onClick={() => setActiveSubLab('gravity')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                (activeSubLab === 'gravity' || (activeSubLab === 'default' && (sectionId === 's4' || sectionId === 's5')))
                  ? 'bg-[var(--sci)] text-white shadow-sm'
                  : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)]'
              }`}
            >
              🌍 Planetary Gravity Drop Tower
            </button>
          </div>
          {(activeSubLab === 'gravity' || (activeSubLab === 'default' && (sectionId === 's4' || sectionId === 's5'))) ? (
            <GravitationSimulation />
          ) : (
            <EnergySimulation />
          )}
        </div>
      )}
      {chapterNumber === 8 && <AtomicStructureSimulation />}
      {chapterNumber === 9 && <AtomsMoleculesSimulation />}
      {chapterNumber === 10 && <SoundSimulation />}
      {chapterNumber === 11 && <CellSimulation />}
      {chapterNumber === 12 && <FoodResourcesSimulation />}
      {chapterNumber === 13 && <FoodResourcesSimulation />}

      {/* Fallback for any other chapter */}
      {(chapterNumber < 1 || chapterNumber > 13) && <MatterSimulation />}
    </div>
  );
}

function getLabTitle(chapter: number): string {
  switch (chapter) {
    case 1: return 'Particulate Nature of Matter & Phase Change Lab';
    case 2: return 'Interactive Plant vs Animal Cell Anatomy & Osmosis Lab';
    case 3: return 'Plant & Animal Tissues Microscopic Explorer';
    case 4: return 'Motion, Speed, Acceleration & Live Graph Plotter';
    case 5: return 'Mixtures, Solutions, Colloids & The Tyndall Effect Lab';
    case 6: return "Newton's Laws of Motion & Force Dynamics Bench";
    case 7: return 'Conservation of Energy & Planetary Gravitation Lab';
    case 8: return 'Journey Inside the Atom & Bohr Electron Shells';
    case 9: return 'Laws of Chemical Combination & Mass Ratio Scale';
    case 10: return 'Sound Waves: Compressions, Rarefactions & Frequency Lab';
    case 11: return 'Cellular Division & Reproduction Simulator';
    case 12: return 'Biodiversity & Living Kingdoms Explorer';
    case 13: return 'Earth as a System: Matter, Energy & Life Cycles';
    default: return 'Interactive Science Concept Lab';
  }
}

// ==========================================
// 1. CHAPTER 2: MATTER IN OUR SURROUNDINGS
// ==========================================
function MatterSimulation() {
  const [state, setState] = useState<'solid' | 'liquid' | 'gas'>('solid');
  const [temperature, setTemperature] = useState(20);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sync state when temperature crosses melting/boiling
  const handleTempChange = (temp: number) => {
    setTemperature(temp);
    if (temp < 0) setState('solid');
    else if (temp >= 100) setState('gas');
    else setState('liquid');
  };

  const handleStateChange = (s: 'solid' | 'liquid' | 'gas') => {
    setState(s);
    if (s === 'solid') setTemperature(-10);
    else if (s === 'liquid') setTemperature(25);
    else setTemperature(110);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {(['solid', 'liquid', 'gas'] as const).map((s) => (
            <button
              key={s}
              onClick={() => handleStateChange(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                state === s
                  ? 'bg-[var(--sci)] text-white shadow-md'
                  : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg border border-[var(--rule)] hover:bg-[var(--paper)] text-[var(--muted)]"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => handleStateChange('solid')}
            className="p-2 rounded-lg border border-[var(--rule)] hover:bg-[var(--paper)] text-[var(--muted)]"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Particle Box Animation */}
      <div className="relative h-56 rounded-xl border-2 border-[var(--rule)] bg-[var(--paper)] overflow-hidden flex items-center justify-center">
        <div className="absolute top-2 left-3 text-xs font-mono text-[var(--muted)]">
          Container: {state.toUpperCase()} (T = {temperature}°C)
        </div>

        {/* Visualized particles */}
        <div className={`relative w-full h-full p-4 flex flex-wrap items-center justify-center ${
          state === 'solid' ? 'content-center gap-1.5 max-w-[220px]' : state === 'liquid' ? 'content-end gap-3 pb-4' : 'content-between gap-6'
        }`}>
          {Array.from({ length: state === 'solid' ? 36 : state === 'liquid' ? 24 : 12 }).map((_, i) => (
            <motion.div
              key={i}
              animate={
                isPlaying
                  ? state === 'solid'
                    ? {
                        x: [-(temperature + 20) * 0.05, (temperature + 20) * 0.05, 0],
                        y: [(temperature + 20) * 0.05, -(temperature + 20) * 0.05, 0],
                      }
                    : state === 'liquid'
                    ? {
                        x: [-(Math.random() * 8), Math.random() * 8, 0],
                        y: [Math.random() * 4, -(Math.random() * 4), 0],
                      }
                    : {
                        x: [-(Math.random() * 30), Math.random() * 30, -(Math.random() * 20)],
                        y: [-(Math.random() * 30), Math.random() * 30, -(Math.random() * 20)],
                      }
                  : {}
              }
              transition={{
                repeat: Infinity,
                duration: state === 'solid' ? 0.3 : state === 'liquid' ? 0.6 : 0.8,
                ease: 'easeInOut',
              }}
              className="w-4 h-4 rounded-full shadow-sm"
              style={{
                background:
                  state === 'solid'
                    ? 'radial-gradient(circle, #60a5fa, #2563eb)'
                    : state === 'liquid'
                    ? 'radial-gradient(circle, #38bdf8, #0284c7)'
                    : 'radial-gradient(circle, #f87171, #dc2626)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Temperature Slider & Live Properties */}
      <div className="grid sm:grid-cols-2 gap-4 items-center bg-[var(--paper)]/50 p-4 rounded-xl border border-[var(--rule)]">
        <div>
          <div className="flex justify-between text-xs font-bold mb-1">
            <span>Temperature: <b className="text-[var(--sci)]">{temperature}°C</b></span>
            <span className="text-[var(--muted)]">
              {temperature < 0 ? 'Ice (Solid)' : temperature >= 100 ? 'Steam (Gas)' : 'Water (Liquid)'}
            </span>
          </div>
          <input
            type="range"
            min="-20"
            max="140"
            value={temperature}
            onChange={(e) => handleTempChange(Number(e.target.value))}
            className="w-full accent-[var(--sci)] cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded-lg bg-[var(--sheet)] border border-[var(--rule)]">
            <div className="text-[var(--muted)] text-[10px]">Kinetic Energy</div>
            <div className="font-bold text-[var(--ink)] mt-0.5">
              {state === 'solid' ? 'Low' : state === 'liquid' ? 'Medium' : 'Very High'}
            </div>
          </div>
          <div className="p-2 rounded-lg bg-[var(--sheet)] border border-[var(--rule)]">
            <div className="text-[var(--muted)] text-[10px]">Particle Space</div>
            <div className="font-bold text-[var(--ink)] mt-0.5">
              {state === 'solid' ? 'Minimal' : state === 'liquid' ? 'Moderate' : 'Maximum'}
            </div>
          </div>
          <div className="p-2 rounded-lg bg-[var(--sheet)] border border-[var(--rule)]">
            <div className="text-[var(--muted)] text-[10px]">Intermolecular Force</div>
            <div className="font-bold text-[var(--ink)] mt-0.5">
              {state === 'solid' ? 'Strongest' : state === 'liquid' ? 'Medium' : 'Negligible'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. CHAPTER 5: STRUCTURE OF THE ATOM
// ==========================================
function AtomicStructureSimulation() {
  const elements = [
    { name: 'Hydrogen', symbol: 'H', z: 1, p: 1, n: 0, shells: [1], valency: 1 },
    { name: 'Helium', symbol: 'He', z: 2, p: 2, n: 2, shells: [2], valency: 0 },
    { name: 'Carbon', symbol: 'C', z: 6, p: 6, n: 6, shells: [2, 4], valency: 4 },
    { name: 'Nitrogen', symbol: 'N', z: 7, p: 7, n: 7, shells: [2, 5], valency: 3 },
    { name: 'Oxygen', symbol: 'O', z: 8, p: 8, n: 8, shells: [2, 6], valency: 2 },
    { name: 'Sodium', symbol: 'Na', z: 11, p: 11, n: 12, shells: [2, 8, 1], valency: 1 },
    { name: 'Chlorine', symbol: 'Cl', z: 17, p: 17, n: 18, shells: [2, 8, 7], valency: 1 },
  ];

  const [selectedEl, setSelectedEl] = useState(elements[5]); // Default Sodium (Na)

  return (
    <div className="flex flex-col gap-4">
      {/* Element Selector */}
      <div className="flex flex-wrap gap-2">
        {elements.map((el) => (
          <button
            key={el.symbol}
            onClick={() => setSelectedEl(el)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedEl.symbol === el.symbol
                ? 'bg-[var(--sci)] text-white shadow-md'
                : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)] hover:text-[var(--ink)]'
            }`}
          >
            {el.name} ({el.symbol})
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 items-center">
        {/* Animated Bohr Orbit SVG */}
        <div className="h-64 rounded-xl border border-[var(--rule)] bg-[var(--paper)] flex items-center justify-center relative overflow-hidden">
          <svg width="240" height="240" viewBox="-120 -120 240 240" className="max-w-full">
            {/* Nucleus */}
            <circle cx="0" cy="0" r="16" fill="var(--sci)" opacity="0.9" />
            <text x="0" y="4" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">
              {selectedEl.symbol}
            </text>

            {/* Concentric Shells (K, L, M) */}
            {selectedEl.shells.map((count, shellIdx) => {
              const radius = 35 + shellIdx * 28;
              const shellName = ['K', 'L', 'M'][shellIdx];
              return (
                <g key={shellIdx}>
                  {/* Orbit circle */}
                  <circle cx="0" cy="0" r={radius} fill="none" stroke="var(--rule)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x={radius - 4} y="-4" fill="var(--muted)" fontSize="8" fontWeight="bold">
                    {shellName}
                  </text>

                  {/* Continuously Orbiting Electrons Group */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + shellIdx * 3,
                      ease: 'linear',
                    }}
                  >
                    {Array.from({ length: count }).map((_, eIdx) => {
                      const angle = (2 * Math.PI * eIdx) / count;
                      const cx = radius * Math.cos(angle);
                      const cy = radius * Math.sin(angle);
                      return (
                        <circle
                          key={eIdx}
                          cx={cx}
                          cy={cy}
                          r="4.5"
                          fill="#38bdf8"
                          stroke="#0284c7"
                          strokeWidth="1.5"
                        />
                      );
                    })}
                  </motion.g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Atom Info & Electronic Configuration */}
        <div className="flex flex-col gap-2.5">
          <div className="p-3 rounded-xl bg-[var(--paper)] border border-[var(--rule)]">
            <h4 className="font-bold text-sm text-[var(--ink)]">{selectedEl.name} Atom ({selectedEl.symbol})</h4>
            <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
              <div>Atomic Number (Z): <b>{selectedEl.z}</b></div>
              <div>Mass Number (A): <b>{selectedEl.p + selectedEl.n}</b></div>
              <div>Protons (p⁺): <b>{selectedEl.p}</b></div>
              <div>Neutrons (n⁰): <b>{selectedEl.n}</b></div>
              <div>Electrons (e⁻): <b>{selectedEl.z}</b></div>
              <div>Valency: <b className="text-[var(--sci)]">{selectedEl.valency}</b></div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--sci-soft)] border border-[var(--sci)]/30 text-xs">
            <div className="font-bold text-[var(--sci)] mb-1">Bohr-Bury Electron Distribution:</div>
            <div className="flex items-center gap-2">
              {selectedEl.shells.map((count, idx) => (
                <span key={idx} className="px-2 py-1 rounded bg-[var(--sheet)] border border-[var(--rule)] font-mono font-bold">
                  {['K', 'L', 'M'][idx]}: {count}
                </span>
              ))}
            </div>
            <div className="mt-2 text-[var(--muted)]">
              Configuration: <b>{selectedEl.shells.join(', ')}</b> (Valence electrons = {selectedEl.shells[selectedEl.shells.length - 1]})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. CHAPTER 6: CELL - FUNDAMENTAL UNIT OF LIFE
// ==========================================
function CellSimulation() {
  const [cellType, setCellType] = useState<'plant' | 'animal'>('plant');
  const [activeOrganelle, setActiveOrganelle] = useState<string>('nucleus');

  const organelles: Record<string, { name: string; nickname: string; desc: string; plantOnly?: boolean }> = {
    nucleus: {
      name: 'Nucleus',
      nickname: 'Brain of the Cell',
      desc: 'Contains chromosomes composed of DNA and protein. Directs all metabolic activities and carries hereditary information.',
    },
    mitochondria: {
      name: 'Mitochondria',
      nickname: 'Powerhouse of the Cell',
      desc: 'Produces ATP (Adenosine Triphosphate) through cellular respiration. Has its own DNA and ribosomes!',
    },
    chloroplast: {
      name: 'Chloroplast',
      nickname: 'Kitchen of the Cell',
      desc: 'Contains chlorophyll for photosynthesis, converting solar energy into chemical food (glucose). Found in plant cells only.',
      plantOnly: true,
    },
    cellWall: {
      name: 'Cell Wall',
      nickname: 'Rigid Armor',
      desc: 'Made of complex cellulose. Provides structural support, protection, and allows plants to withstand hypotonic pressure.',
      plantOnly: true,
    },
    vacuole: {
      name: 'Central Vacuole',
      nickname: 'Storage & Turgidity Tank',
      desc: 'In plant cells, a large central vacuole occupies 50-90% volume, filled with cell sap maintaining full turgidity.',
    },
    golgi: {
      name: 'Golgi Apparatus',
      nickname: 'Post Office of the Cell',
      desc: 'Discovered by Camillo Golgi. Consists of cisternae involved in storage, modification, and packaging of biochemical products.',
    },
    er: {
      name: 'Endoplasmic Reticulum (ER)',
      nickname: 'Transport Pipeline',
      desc: 'RER (Rough ER) has ribosomes synthesizing proteins; SER (Smooth ER) synthesizes lipids and detoxifies poisons.',
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCellType('plant')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            cellType === 'plant' ? 'bg-[var(--sci)] text-white shadow-md' : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)]'
          }`}
        >
          🌿 Plant Cell
        </button>
        <button
          onClick={() => setCellType('animal')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            cellType === 'animal' ? 'bg-[var(--sci)] text-white shadow-md' : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)]'
          }`}
        >
          🐾 Animal Cell
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Interactive Cell Diagram */}
        <div className="h-64 rounded-xl border border-[var(--rule)] bg-[var(--paper)] relative flex items-center justify-center p-3">
          <svg viewBox="0 0 200 160" className="w-full h-full max-h-56">
            {/* Outer Wall (Plant only) */}
            {cellType === 'plant' && (
              <rect x="15" y="15" width="170" height="130" rx="18" fill="none" stroke="#16a34a" strokeWidth="5" />
            )}

            {/* Plasma Membrane */}
            <rect
              x={cellType === 'plant' ? '22' : '20'}
              y={cellType === 'plant' ? '22' : '20'}
              width={cellType === 'plant' ? '156' : '160'}
              height={cellType === 'plant' ? '116' : '120'}
              rx={cellType === 'plant' ? '14' : '45'}
              fill="#ecfdf5"
              stroke="#059669"
              strokeWidth="2"
            />

            {/* Plant Large Vacuole */}
            {cellType === 'plant' && (
              <path
                d="M 60 40 Q 130 35 150 70 Q 140 120 70 110 Z"
                fill={activeOrganelle === 'vacuole' ? '#93c5fd' : '#bfdbfe'}
                stroke="#3b82f6"
                strokeWidth="1.5"
                className="cursor-pointer transition-colors"
                onClick={() => setActiveOrganelle('vacuole')}
              />
            )}

            {/* Nucleus */}
            <circle
              cx={cellType === 'plant' ? '45' : '100'}
              cy={cellType === 'plant' ? '65' : '80'}
              r="22"
              fill={activeOrganelle === 'nucleus' ? '#f43f5e' : '#fb7185'}
              stroke="#e11d48"
              strokeWidth="2"
              className="cursor-pointer transition-colors"
              onClick={() => setActiveOrganelle('nucleus')}
            />
            <circle
              cx={cellType === 'plant' ? '45' : '100'}
              cy={cellType === 'plant' ? '65' : '80'}
              r="7"
              fill="#881337"
            />

            {/* Chloroplasts (Plant only) */}
            {cellType === 'plant' && (
              <>
                <ellipse cx="40" cy="115" rx="10" ry="6" fill="#22c55e" stroke="#15803d" className="cursor-pointer" onClick={() => setActiveOrganelle('chloroplast')} />
                <ellipse cx="145" cy="120" rx="10" ry="6" fill="#22c55e" stroke="#15803d" className="cursor-pointer" onClick={() => setActiveOrganelle('chloroplast')} />
              </>
            )}

            {/* Mitochondria */}
            <ellipse
              cx={cellType === 'plant' ? '145' : '55'}
              cy={cellType === 'plant' ? '45' : '50'}
              rx="12"
              ry="7"
              fill={activeOrganelle === 'mitochondria' ? '#ea580c' : '#f97316'}
              stroke="#c2410c"
              strokeWidth="1.5"
              className="cursor-pointer"
              onClick={() => setActiveOrganelle('mitochondria')}
            />

            {/* Golgi */}
            <path
              d="M 125 75 Q 135 85 125 95"
              fill="none"
              stroke={activeOrganelle === 'golgi' ? '#a855f7' : '#c084fc'}
              strokeWidth="3"
              strokeLinecap="round"
              className="cursor-pointer"
              onClick={() => setActiveOrganelle('golgi')}
            />
          </svg>
          <div className="absolute bottom-2 text-[10px] text-[var(--muted)]">Click any organelle in the cell</div>
        </div>

        {/* Organelle Inspector */}
        <div className="flex flex-col justify-between p-4 rounded-xl bg-[var(--paper)] border border-[var(--rule)]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--sci)]">
                {organelles[activeOrganelle]?.nickname}
              </span>
              {organelles[activeOrganelle]?.plantOnly && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold">
                  Plant Only
                </span>
              )}
            </div>
            <h4 className="text-lg font-bold text-[var(--ink)] mb-2">
              {organelles[activeOrganelle]?.name}
            </h4>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              {organelles[activeOrganelle]?.desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[var(--rule)]">
            {Object.keys(organelles).map((k) => (
              <button
                key={k}
                onClick={() => setActiveOrganelle(k)}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold capitalize transition-all ${
                  activeOrganelle === k
                    ? 'bg-[var(--sci)] text-white'
                    : 'bg-[var(--sheet)] border border-[var(--rule)] text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {organelles[k].name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. CHAPTER 8: MOTION (KINEMATICS & LIVE GRAPHS)
// ==========================================
function MotionSimulation() {
  const [u, setU] = useState(5); // initial velocity m/s
  const [a, setA] = useState(2); // acceleration m/s^2
  const [t, setT] = useState(0); // animated time seconds (0 to 10)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setT((prev) => {
          if (prev >= 10) {
            setIsRunning(false);
            return 10;
          }
          return +(prev + 0.1).toFixed(1);
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const v = Math.max(0, u + a * t);
  const s = Math.max(0, u * t + 0.5 * a * t * t);
  const maxPossibleDist = 150;
  const progressPct = Math.min(100, (s / maxPossibleDist) * 100);

  const reset = () => {
    setIsRunning(false);
    setT(0);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Animation Controls Bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap bg-[var(--sheet)] p-3 rounded-xl border border-[var(--rule)]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md flex items-center gap-1.5 transition-transform active:scale-95"
            style={{ background: 'var(--sci)' }}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isRunning ? 'Pause Animation' : '▶ Run Car Animation'}
          </button>
          <button
            onClick={reset}
            className="px-3 py-2 rounded-xl text-xs font-bold border border-[var(--rule)] text-[var(--muted)] hover:bg-[var(--rule)]/20 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset (t = 0s)
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="px-3 py-1 rounded-lg bg-[var(--sci-soft)] text-[var(--sci)] font-bold">
            ⏱ Clock t = {t.toFixed(1)} s
          </div>
          <div className="px-3 py-1 rounded-lg bg-[var(--paper)] border border-[var(--rule)] text-[var(--ink)] font-bold">
            🏎 Velocity v = {v.toFixed(1)} m/s
          </div>
        </div>
      </div>

      {/* Moving Track */}
      <div className="relative h-28 rounded-xl border border-[var(--rule)] bg-slate-900 flex flex-col justify-center px-6 overflow-hidden shadow-inner">
        {/* Distance Road Markings */}
        <div className="absolute top-2 left-4 text-[10px] font-mono text-slate-400">
          Live Motion Track: Distance Traveled s = <b className="text-emerald-400">{s.toFixed(1)} m</b>
        </div>

        {/* Road & Dashed lanes */}
        <div className="w-full h-10 bg-slate-800 rounded border border-slate-700 relative flex items-center overflow-hidden">
          <div className="w-full border-t border-dashed border-slate-600" />
          
          {/* Animated Car */}
          <motion.div
            style={{ left: `calc(${progressPct}% * 0.88)` }}
            transition={{ ease: 'linear', duration: 0.1 }}
            className="absolute -top-3 w-10 h-7 bg-[var(--sci)] rounded-lg text-center text-sm shadow-lg flex items-center justify-center border border-white/40 select-none"
          >
            <span className={isRunning ? 'animate-bounce' : ''}>🚗</span>
          </motion.div>
        </div>

        <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2 px-1">
          <span>0 m</span>
          <span>35 m</span>
          <span>75 m</span>
          <span>115 m</span>
          <span>150 m+</span>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid sm:grid-cols-3 gap-3 bg-[var(--paper)]/50 p-4 rounded-xl border border-[var(--rule)]">
        <div>
          <label className="text-xs font-bold block mb-1">
            Initial Velocity (u): <b className="text-[var(--sci)]">{u} m/s</b>
          </label>
          <input
            type="range"
            min="0"
            max="15"
            step="1"
            value={u}
            onChange={(e) => {
              setU(Number(e.target.value));
              reset();
            }}
            className="w-full accent-[var(--sci)] cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs font-bold block mb-1">
            Acceleration (a): <b className="text-[var(--sci)]">{a} m/s²</b>
          </label>
          <input
            type="range"
            min="-2"
            max="5"
            step="0.5"
            value={a}
            onChange={(e) => {
              setA(Number(e.target.value));
              reset();
            }}
            className="w-full accent-[var(--sci)] cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs font-bold block mb-1">
            Manual Scrub Time (t): <b className="text-[var(--sci)]">{t} s</b>
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={t}
            onChange={(e) => {
              setIsRunning(false);
              setT(Number(e.target.value));
            }}
            className="w-full accent-[var(--sci)] cursor-pointer"
          />
        </div>
      </div>

      {/* Real-time Formulas Box */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-3 rounded-xl bg-[var(--paper)] border border-[var(--rule)]">
          <div className="text-[10px] text-[var(--muted)] font-mono">v = u + at</div>
          <div className="font-bold text-sm text-[var(--ink)] mt-1">v = {v.toFixed(1)} m/s</div>
        </div>
        <div className="p-3 rounded-xl bg-[var(--sci-soft)] border border-[var(--sci)]/40">
          <div className="text-[10px] text-[var(--sci)] font-mono">s = ut + ½at²</div>
          <div className="font-bold text-sm text-[var(--sci)] mt-1">s = {s.toFixed(1)} m</div>
        </div>
        <div className="p-3 rounded-xl bg-[var(--paper)] border border-[var(--rule)]">
          <div className="text-[10px] text-[var(--muted)] font-mono">v² = u² + 2as</div>
          <div className="font-bold text-sm text-[var(--ink)] mt-1">v² = {Math.max(0, v * v).toFixed(0)} m²/s²</div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. CHAPTER 9: FORCE AND LAWS OF MOTION
// ==========================================
function ForceSimulation() {
  const [mass, setMass] = useState(5); // kg
  const [force, setForce] = useState(25); // N
  const acceleration = force / mass;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-32 rounded-xl border border-[var(--rule)] bg-[var(--paper)] flex items-center justify-center p-4">
        {/* Block with Force Vector Arrows */}
        <div className="relative flex items-center">
          <div className="w-20 h-20 rounded-xl bg-[var(--sci)] text-white font-bold flex flex-col items-center justify-center shadow-lg">
            <span>{mass} kg</span>
            <span className="text-[10px] opacity-80">m</span>
          </div>

          {/* Rightward Force Arrow */}
          {force !== 0 && (
            <motion.div
              animate={{ width: `${Math.abs(force) * 1.2}px` }}
              className="absolute left-24 h-2 bg-amber-500 flex items-center"
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-bold text-amber-600 whitespace-nowrap">
                F = {force} N
              </span>
              <span className="absolute right-0 translate-x-1/2 text-amber-500 font-bold">&rarr;</span>
            </motion.div>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 bg-[var(--paper)]/50 p-4 rounded-xl border border-[var(--rule)]">
        <div>
          <label className="text-xs font-bold block mb-1">
            Mass (m): <b className="text-[var(--sci)]">{mass} kg</b>
          </label>
          <input type="range" min="1" max="25" value={mass} onChange={(e) => setMass(Number(e.target.value))} className="w-full accent-[var(--sci)] cursor-pointer" />
        </div>
        <div>
          <label className="text-xs font-bold block mb-1">
            Applied Force (F): <b className="text-[var(--sci)]">{force} N</b>
          </label>
          <input type="range" min="0" max="100" value={force} onChange={(e) => setForce(Number(e.target.value))} className="w-full accent-[var(--sci)] cursor-pointer" />
        </div>
      </div>

      <div className="p-3 rounded-xl bg-[var(--sci-soft)] border border-[var(--sci)]/40 flex items-center justify-between">
        <span className="text-xs font-bold text-[var(--sci)]">Newton's Second Law (F = ma):</span>
        <span className="text-sm font-bold text-[var(--ink)]">
          Acceleration a = F / m = {force} / {mass} = <b className="text-[var(--sci)] text-base">{acceleration.toFixed(2)} m/s²</b>
        </span>
      </div>
    </div>
  );
}

// ==========================================
// 6. CHAPTER 10: GRAVITATION
// ==========================================
function GravitationSimulation() {
  const planets = [
    { name: 'Earth', g: 9.8, emoji: '🌍' },
    { name: 'Moon', g: 1.63, emoji: '🌕' },
    { name: 'Mars', g: 3.71, emoji: '🔴' },
    { name: 'Jupiter', g: 24.79, emoji: '🪐' },
  ];
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);
  const [height, setHeight] = useState(20); // meters
  const [isDropping, setIsDropping] = useState(false);

  const timeToFall = Math.sqrt((2 * height) / selectedPlanet.g);
  const finalVelocity = Math.sqrt(2 * selectedPlanet.g * height);

  const handleDrop = () => {
    setIsDropping(false);
    setTimeout(() => setIsDropping(true), 50);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {planets.map((p) => (
          <button
            key={p.name}
            onClick={() => { setSelectedPlanet(p); setIsDropping(false); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedPlanet.name === p.name
                ? 'bg-[var(--sci)] text-white shadow-md'
                : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)]'
            }`}
          >
            <span>{p.emoji}</span>
            <span>{p.name} (g = {p.g} m/s²)</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 items-center">
        {/* Drop Tower Animation */}
        <div className="h-56 rounded-xl border border-[var(--rule)] bg-[var(--paper)] relative flex flex-col justify-between p-4 overflow-hidden">
          <div className="text-xs font-mono text-[var(--muted)]">Height: {height} m on {selectedPlanet.name}</div>
          <div className="relative w-full flex-1 flex justify-center items-start pt-2">
            <motion.div
              animate={isDropping ? { y: 130 } : { y: 0 }}
              transition={isDropping ? { duration: Math.min(timeToFall, 3), ease: 'easeIn' } : { duration: 0 }}
              className="w-7 h-7 rounded-full bg-amber-500 shadow-md flex items-center justify-center text-xs font-bold text-white"
            >
              ⚽
            </motion.div>
          </div>
          <button
            onClick={handleDrop}
            className="self-center px-4 py-1.5 rounded-xl bg-[var(--sci)] text-white text-xs font-bold shadow hover:opacity-90"
          >
            Drop Ball!
          </button>
        </div>

        {/* Physics Calculation */}
        <div className="flex flex-col gap-2.5">
          <div className="p-4 rounded-xl bg-[var(--paper)] border border-[var(--rule)]">
            <label className="text-xs font-bold block mb-1">
              Drop Height (h): <b className="text-[var(--sci)]">{height} meters</b>
            </label>
            <input type="range" min="5" max="60" value={height} onChange={(e) => { setHeight(Number(e.target.value)); setIsDropping(false); }} className="w-full accent-[var(--sci)] cursor-pointer" />
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <div className="p-3 rounded-xl bg-[var(--sheet)] border border-[var(--rule)]">
              <div className="text-[var(--muted)] text-[10px]">Fall Time t = √(2h/g)</div>
              <div className="font-bold text-sm text-[var(--sci)] mt-1">{timeToFall.toFixed(2)} seconds</div>
            </div>
            <div className="p-3 rounded-xl bg-[var(--sheet)] border border-[var(--rule)]">
              <div className="text-[var(--muted)] text-[10px]">Impact Speed v = √(2gh)</div>
              <div className="font-bold text-sm text-[var(--ink)] mt-1">{finalVelocity.toFixed(1)} m/s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. CHAPTER 11: WORK AND ENERGY
// ==========================================
function EnergySimulation() {
  const [height, setHeight] = useState(10); // m
  const mass = 2; // kg
  const g = 9.8;
  const maxPE = mass * g * height;
  const [pos, setPos] = useState(0.5); // 0 = top, 1 = bottom

  const currentPE = maxPE * (1 - pos);
  const currentKE = maxPE * pos;
  const totalE = maxPE;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        {/* Animated Skate Ramp */}
        <div className="h-56 rounded-xl border border-[var(--rule)] bg-[var(--paper)] relative flex flex-col justify-between p-4 overflow-hidden">
          <div className="text-xs font-mono text-[var(--muted)]">Roller Coaster Energy Exchange</div>
          <svg viewBox="0 0 200 120" className="w-full h-32">
            <path d="M 10 10 Q 100 110 190 10" fill="none" stroke="var(--rule)" strokeWidth="4" />
            <motion.circle
              animate={{
                cx: [20, 100, 180, 100, 20],
                cy: [20, 100, 20, 100, 20],
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              r="8"
              fill="var(--sci)"
            />
          </svg>
          <div className="flex justify-between text-[10px] text-[var(--muted)]">
            <span>PE = Max, KE = 0</span>
            <span>KE = Max, PE = Min</span>
            <span>PE = Max, KE = 0</span>
          </div>
        </div>

        {/* Real-time Energy Meters */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-[var(--paper)] border border-[var(--rule)]">
          <div className="text-xs font-bold text-[var(--ink)] mb-1">Conservation of Mechanical Energy:</div>

          {/* PE Bar */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-emerald-600 font-bold">Potential Energy (PE = mgh)</span>
              <span className="font-mono">{(currentPE).toFixed(1)} J</span>
            </div>
            <div className="h-3 rounded-full bg-[var(--rule)] overflow-hidden">
              <div className="h-full bg-emerald-500 transition-all" style={{ width: `${(currentPE / totalE) * 100}%` }} />
            </div>
          </div>

          {/* KE Bar */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-blue-600 font-bold">Kinetic Energy (KE = ½mv²)</span>
              <span className="font-mono">{(currentKE).toFixed(1)} J</span>
            </div>
            <div className="h-3 rounded-full bg-[var(--rule)] overflow-hidden">
              <div className="h-full bg-blue-500 transition-all" style={{ width: `${(currentKE / totalE) * 100}%` }} />
            </div>
          </div>

          {/* Total Energy Bar */}
          <div className="pt-2 border-t border-[var(--rule)]">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-[var(--sci)]">Total Mechanical Energy (E)</span>
              <span className="font-mono text-base">{totalE.toFixed(1)} Joules</span>
            </div>
            <div className="text-[10px] text-[var(--muted)] mt-1 italic">
              "Energy can neither be created nor destroyed, only transformed."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 8. CHAPTER 12: SOUND WAVES
// ==========================================
function SoundSimulation() {
  const [freq, setFreq] = useState(250); // Hz
  const [amp, setAmp] = useState(22);
  const [isPlaying, setIsPlaying] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let animId: number;
    if (isPlaying) {
      const loop = () => {
        setPhase((p) => p + (freq * 0.0008));
        animId = requestAnimationFrame(loop);
      };
      animId = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, freq]);

  const wavelength = (343 / freq) * 100; // cm

  // Generate traveling sine curve
  const points = [];
  for (let x = 0; x <= 300; x += 5) {
    const y = 40 + amp * Math.sin((x * freq * 0.006) - phase);
    points.push(`${x},${y.toFixed(1)}`);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Wave Oscilloscope Visualizer */}
      <div className="h-56 rounded-xl border border-[var(--rule)] bg-slate-900 relative flex flex-col justify-between p-4 overflow-hidden shadow-inner text-white">
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
          <div>
            Sound Oscilloscope: Frequency = <b className="text-sky-400">{freq} Hz</b> | Amplitude = <b className="text-pink-400">{amp}</b> | Wavelength λ = <b className="text-emerald-400">{wavelength.toFixed(1)} cm</b>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-2.5 py-1 rounded-md bg-sky-600 text-white text-[10px] font-bold flex items-center gap-1"
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            {isPlaying ? 'Pause Wave' : 'Oscillate Wave'}
          </button>
        </div>

        {/* Traveling Transverse Representation */}
        <div className="relative w-full h-20 my-1">
          <svg viewBox="0 0 300 80" className="w-full h-full">
            <line x1="0" y1="40" x2="300" y2="40" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
            <polyline
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              points={points.join(' ')}
            />
          </svg>
        </div>

        {/* Longitudinal Air Particle Compression Bands */}
        <div className="space-y-1">
          <div className="text-[9px] font-mono text-slate-400 flex justify-between">
            <span>Longitudinal Particle Density:</span>
            <span className="text-emerald-400">Dense = Compression, Sparse = Rarefaction</span>
          </div>
          <div className="h-6 w-full bg-slate-800 rounded relative overflow-hidden flex items-center">
            {Array.from({ length: 45 }).map((_, i) => {
              const xBase = (i / 45) * 300;
              const displacement = Math.sin((xBase * freq * 0.006) - phase) * 8;
              return (
                <div
                  key={i}
                  style={{
                    left: `${((xBase + displacement) / 300) * 100}%`,
                  }}
                  className="absolute w-1 h-3.5 bg-sky-400/80 rounded-full"
                />
              );
            })}
          </div>
        </div>

        <div className="flex justify-between text-[10px] font-mono text-slate-400">
          <span>High Pressure (Compression)</span>
          <span>Low Pressure (Rarefaction)</span>
          <span>High Pressure</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 bg-[var(--paper)]/50 p-4 rounded-xl border border-[var(--rule)]">
        <div>
          <label className="text-xs font-bold block mb-1">
            Frequency / Pitch (ν): <b className="text-[var(--sci)]">{freq} Hz</b>
          </label>
          <input
            type="range"
            min="100"
            max="1200"
            value={freq}
            onChange={(e) => setFreq(Number(e.target.value))}
            className="w-full accent-[var(--sci)] cursor-pointer"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-[10px] text-[var(--muted)]">Pitch: {freq < 250 ? 'Deep Bass' : freq < 600 ? 'Mid Treble' : 'High Shrill'}</span>
            <button
              onClick={() => playFrequencyTone(freq, 600)}
              className="px-2.5 py-1 rounded-lg bg-[var(--sci)] text-white text-[11px] font-bold flex items-center gap-1 shadow-xs hover:opacity-90"
            >
              <Volume2 className="w-3 h-3" />
              <span>Hear Audio Pitch</span>
            </button>
          </div>
        </div>
        <div>
          <label className="text-xs font-bold block mb-1">
            Amplitude / Loudness (A): <b className="text-[var(--sci)]">{amp} units</b>
          </label>
          <input
            type="range"
            min="5"
            max="30"
            value={amp}
            onChange={(e) => setAmp(Number(e.target.value))}
            className="w-full accent-[var(--sci)] cursor-pointer"
          />
          <div className="text-[10px] text-[var(--muted)] mt-2">
            Energy ∝ A²: <b>{(amp * amp).toFixed(0)} relative acoustic power units</b>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 9. CHAPTER 3: SOLUTIONS & TYNDALL EFFECT
// ==========================================
function SolutionsSimulation() {
  const [laserOn, setLaserOn] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-[var(--muted)]">Tyndall Effect & Particle Scattering Lab</span>
        <button
          onClick={() => setLaserOn(!laserOn)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            laserOn ? 'bg-red-600 text-white shadow' : 'border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)]'
          }`}
        >
          <span>🔦</span>
          <span>Laser Beam: {laserOn ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Beaker 1: True Solution */}
        <div className="h-44 rounded-xl border border-[var(--rule)] bg-[var(--paper)] flex flex-col justify-between p-3 relative overflow-hidden">
          <div className="text-[11px] font-bold text-center">True Solution (Salt)</div>
          <div className="relative w-full h-24 bg-sky-100/40 rounded-lg border border-sky-300/40 flex items-center justify-center">
            {laserOn && <div className="w-full h-0.5 bg-red-500/20" title="Beam invisible (no scattering)" />}
            <span className="text-[10px] text-[var(--muted)]">Particles &lt; 1 nm</span>
          </div>
          <div className="text-[10px] text-center text-[var(--muted)]">No Light Scattering</div>
        </div>

        {/* Beaker 2: Colloid */}
        <div className="h-44 rounded-xl border-2 border-[var(--sci)]/40 bg-[var(--sci-soft)]/20 flex flex-col justify-between p-3 relative overflow-hidden">
          <div className="text-[11px] font-bold text-center text-[var(--sci)]">Colloid (Milk in Water)</div>
          <div className="relative w-full h-24 bg-amber-50/50 rounded-lg border border-amber-300/40 flex items-center justify-center">
            {laserOn && (
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-full h-2 bg-red-500 shadow-[0_0_8px_#ef4444]"
                title="Tyndall Effect visible!"
              />
            )}
            <span className="absolute bottom-1 text-[10px] text-amber-800 dark:text-amber-300 font-bold">Tyndall Effect!</span>
          </div>
          <div className="text-[10px] text-center font-bold text-[var(--sci)]">Light Path Visible</div>
        </div>

        {/* Beaker 3: Suspension */}
        <div className="h-44 rounded-xl border border-[var(--rule)] bg-[var(--paper)] flex flex-col justify-between p-3 relative overflow-hidden">
          <div className="text-[11px] font-bold text-center">Suspension (Chalk)</div>
          <div className="relative w-full h-24 bg-stone-100/40 rounded-lg border border-stone-300/40 flex items-center justify-center">
            {laserOn && <div className="w-full h-1.5 bg-red-500/60" />}
            <span className="text-[10px] text-[var(--muted)]">Particles &gt; 1000 nm</span>
          </div>
          <div className="text-[10px] text-center text-[var(--muted)]">Opaque / Settles Down</div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 10. CHAPTER 4: ATOMS & MOLECULES (CONSERVATION OF MASS)
// ==========================================
function AtomsMoleculesSimulation() {
  const [hCount, setHCount] = useState(2);
  const [oCount, setOCount] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 rounded-xl bg-[var(--paper)] border border-[var(--rule)] flex flex-col gap-3">
        <h4 className="font-bold text-sm text-[var(--ink)]">Law of Conservation of Mass: Formation of Water (H₂O)</h4>
        <div className="flex items-center justify-center gap-4 text-sm font-mono flex-wrap">
          <span className="px-3 py-1.5 rounded-lg bg-[var(--sheet)] border border-[var(--rule)]">
            2H₂ (4 u) + O₂ (32 u)
          </span>
          <span className="text-[var(--sci)] font-bold">&rarr;</span>
          <span className="px-3 py-1.5 rounded-lg bg-[var(--sci-soft)] border border-[var(--sci)] font-bold text-[var(--sci)]">
            2H₂O (36 u)
          </span>
        </div>
        <p className="text-xs text-[var(--muted)] text-center">
          Mass ratio of Hydrogen to Oxygen in Water = <b>1 : 8</b> (Law of Constant Proportions by Proust).
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 11. CHAPTER 7: TISSUES (NEURON & XYLEM)
// ==========================================
function TissuesSimulation() {
  const [pulse, setPulse] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 rounded-xl bg-[var(--paper)] border border-[var(--rule)] flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm text-[var(--ink)]">Nervous Tissue: The Neuron & Nerve Impulse</h4>
          <button
            onClick={() => { setPulse(false); setTimeout(() => setPulse(true), 50); }}
            className="px-3 py-1 rounded-xl bg-[var(--sci)] text-white text-xs font-bold shadow"
          >
            Send Impulse ⚡
          </button>
        </div>

        <svg viewBox="0 0 280 80" className="w-full h-20 bg-[var(--sheet)] rounded-lg border border-[var(--rule)]">
          {/* Cyton / Cell body */}
          <circle cx="40" cy="40" r="16" fill="#f43f5e" />
          <text x="40" y="43" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Soma</text>
          {/* Axon tube */}
          <line x1="56" y1="40" x2="220" y2="40" stroke="#fb7185" strokeWidth="8" strokeLinecap="round" />
          {/* Myelin sheaths */}
          <rect x="75" y="32" width="30" height="16" rx="4" fill="#fbbf24" opacity="0.8" />
          <rect x="120" y="32" width="30" height="16" rx="4" fill="#fbbf24" opacity="0.8" />
          <rect x="165" y="32" width="30" height="16" rx="4" fill="#fbbf24" opacity="0.8" />
          {/* Nerve endings */}
          <circle cx="235" cy="30" r="4" fill="#f43f5e" />
          <circle cx="235" cy="50" r="4" fill="#f43f5e" />

          {/* Electric pulse animation */}
          {pulse && (
            <motion.circle
              cx="40"
              cy="40"
              r="6"
              fill="#38bdf8"
              animate={{ cx: [40, 235] }}
              transition={{ duration: 1, ease: 'linear' }}
            />
          )}
        </svg>
        <div className="flex justify-between text-[10px] text-[var(--muted)]">
          <span>Dendrites & Cyton</span>
          <span>Axon (Myelin Sheath)</span>
          <span>Nerve Ending (Synapse)</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 12. CHAPTER 13: FOOD RESOURCES
// ==========================================
function FoodResourcesSimulation() {
  return (
    <div className="p-4 rounded-xl bg-[var(--paper)] border border-[var(--rule)] text-xs flex flex-col gap-3">
      <h4 className="font-bold text-sm text-[var(--ink)]">Essential Plant Nutrients Balance</h4>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-[var(--sheet)] border border-[var(--rule)]">
          <div className="font-bold text-[var(--sci)] mb-1">Macro-nutrients (Large amounts)</div>
          <p className="text-[var(--muted)]">Nitrogen (N), Phosphorus (P), Potassium (K), Calcium (Ca), Magnesium (Mg), Sulphur (S).</p>
        </div>
        <div className="p-3 rounded-lg bg-[var(--sheet)] border border-[var(--rule)]">
          <div className="font-bold text-amber-600 mb-1">Micro-nutrients (Trace amounts)</div>
          <p className="text-[var(--muted)]">Iron (Fe), Manganese (Mn), Boron (B), Zinc (Zn), Copper (Cu), Molybdenum (Mo), Chlorine (Cl).</p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 13. CHAPTER 1: SCIENTIFIC METHOD
// ==========================================
function ScientificMethodSimulation() {
  const steps = [
    { num: '1', title: 'Observation', desc: 'Noticing a phenomenon in the natural world.' },
    { num: '2', title: 'Question', desc: 'Asking why or how it happens.' },
    { num: '3', title: 'Hypothesis', desc: 'Formulating a testable scientific explanation.' },
    { num: '4', title: 'Experiment', desc: 'Controlled testing with independent variables.' },
    { num: '5', title: 'Conclusion', desc: 'Analyzing data to validate or reject hypothesis.' },
  ];

  return (
    <div className="grid sm:grid-cols-5 gap-2">
      {steps.map((st) => (
        <div key={st.num} className="p-3 rounded-xl border border-[var(--rule)] bg-[var(--paper)] text-center flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-[var(--sci)] text-white text-xs font-bold flex items-center justify-center mb-1.5">
            {st.num}
          </div>
          <div className="font-bold text-xs text-[var(--ink)]">{st.title}</div>
          <div className="text-[10px] text-[var(--muted)] mt-1">{st.desc}</div>
        </div>
      ))}
    </div>
  );
}
