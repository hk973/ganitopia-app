'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Grid,
  Maximize2,
  Compass,
  PieChart,
  BarChart3,
  Box,
  Layers,
  Sparkles,
  Calculator,
  Shuffle,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

interface MathVisualizerProps {
  chapterNumber: number;
  chapterTitle: string;
  lessonId?: string;
  widgetKey?: string;
}

export function MathVisualizer({
  chapterNumber,
  chapterTitle,
  lessonId,
  widgetKey,
}: MathVisualizerProps) {
  return (
    <div className="rounded-2xl border-2 border-[var(--ap)]/30 bg-[var(--sheet)] p-6 mb-8 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap border-b border-[var(--rule)] pb-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-sm"
            style={{ background: 'var(--ap)' }}
          >
            📐
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--ap)]">
              Interactive Math Visualizer · Conceptual Lab
            </div>
            <h3
              className="text-lg font-bold text-[var(--ink)]"
              style={{ fontFamily: 'var(--display)' }}
            >
              {getLabTitle(chapterNumber)}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {widgetKey && (
            <span className="text-xs px-2.5 py-0.5 rounded-md bg-[var(--ap-soft)] text-[var(--ap)] font-mono font-bold">
              widget: {widgetKey}
            </span>
          )}
          <span className="text-xs px-3 py-1 rounded-full bg-[var(--sheet)] border border-[var(--rule)] text-[var(--muted)] font-bold">
            Chapter {chapterNumber} · NCERT Class 9
          </span>
        </div>
      </div>

      {/* Render Dedicated Interactive Lab based on Chapter */}
      {chapterNumber === 1 && <CoordinatesLab widgetKey={widgetKey} />}
      {chapterNumber === 2 && <PolynomialsLab />}
      {chapterNumber === 3 && <NumberSystemsLab />}
      {chapterNumber === 4 && <AlgebraicIdentitiesLab />}
      {chapterNumber === 5 && <CirclesLab />}
      {chapterNumber === 6 && <TrianglesAreasLab />}
      {chapterNumber === 7 && <ProbabilityLab />}
      {chapterNumber === 8 && <ProgressionsLab />}
      {chapterNumber === 9 && <ReasoningProofsLab />}
      {chapterNumber === 10 && <StatisticsLab />}
      {chapterNumber === 11 && <NumberTheoryLab />}
      {chapterNumber === 12 && <QuadrilateralsLab />}
      {chapterNumber === 13 && <LinearEquationsLab />}
      {chapterNumber === 14 && <Mensuration3DLab />}
      {(chapterNumber < 1 || chapterNumber > 14) && <CoordinatesLab />}
    </div>
  );
}

function getLabTitle(chapter: number): string {
  switch (chapter) {
    case 1:
      return 'Cartesian Coordinate Plane & Geometric Distance Explorer';
    case 2:
      return 'Polynomial Roots, Graph Curves & Zeros Finder';
    case 3:
      return 'Real Number Line & Irrational Spiral of Theodorus';
    case 4:
      return 'Geometric Area Proofs for Algebraic Identities';
    case 5:
      return 'Circle Anatomy, Chords, Inscribed Angles & Tangents';
    case 6:
      return "Heron's Formula & Triangle Area Geometric Bench";
    case 7:
      return 'Dynamic Probability Spinner & Law of Large Numbers Simulator';
    case 8:
      return 'Arithmetic & Geometric Progressions Term/Sum Visualizer';
    case 9:
      return 'Mathematical Logic, Implications & Counterexample Tester';
    case 10:
      return 'Central Tendency Fulcrum: Mean, Median & Frequency Histogram';
    case 11:
      return "Euclid's Division Lemma & GCD Step Visualizer";
    case 12:
      return 'Quadrilateral Angles, Parallelograms & Midpoint Theorems';
    case 13:
      return 'Two-Variable Linear Equations Slope & Intercept Plotter';
    case 14:
      return 'Surface Areas & Volumes 3D Spatial Net Visualizer';
    default:
      return 'Interactive Mathematics Concept Lab';
  }
}

// ==========================================
// 1. COORDINATE GEOMETRY (CHAPTER 1)
// ==========================================
function CoordinatesLab({ widgetKey }: { widgetKey?: string }) {
  const [point1, setPoint1] = useState<{ x: number; y: number }>({ x: 3, y: 4 });
  const [point2, setPoint2] = useState<{ x: number; y: number }>({ x: -2, y: 1 });
  const [mode, setMode] = useState<'single' | 'distance' | 'mirror' | 'midpoint'>('distance');

  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  const distance = Math.sqrt(dx * dx + dy * dy).toFixed(2);
  const midpoint = {
    x: ((point1.x + point2.x) / 2).toFixed(1),
    y: ((point1.y + point2.y) / 2).toFixed(1),
  };

  const getQuadrant = (x: number, y: number) => {
    if (x > 0 && y > 0) return 'Quadrant I (+, +)';
    if (x < 0 && y > 0) return 'Quadrant II (−, +)';
    if (x < 0 && y < 0) return 'Quadrant III (−, −)';
    if (x > 0 && y < 0) return 'Quadrant IV (+, −)';
    if (x === 0 && y === 0) return 'Origin (0, 0)';
    if (x === 0) return 'Y-axis';
    return 'X-axis';
  };

  const scale = 24; // pixels per unit
  const cx = 150; // origin center x
  const cy = 150; // origin center y

  return (
    <div className="space-y-4">
      {/* Mode selectors */}
      <div className="flex gap-2 flex-wrap">
        {[
          { key: 'distance', label: 'Distance & Pythagoras' },
          { key: 'single', label: 'Plot & Quadrants' },
          { key: 'mirror', label: 'Mirror Reflection' },
          { key: 'midpoint', label: 'Midpoint Formula' },
        ].map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mode === m.key
                ? 'bg-[var(--ap)] text-white shadow-sm'
                : 'bg-[var(--ap-soft)] text-[var(--ap)] hover:bg-[var(--ap)]/20'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Interactive Grid Canvas */}
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-700 select-none">
            {/* Grid lines */}
            <svg className="w-full h-full">
              {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((u) => (
                <g key={u}>
                  <line
                    x1={cx + u * scale}
                    y1={0}
                    x2={cx + u * scale}
                    y2={300}
                    stroke={u === 0 ? '#94a3b8' : '#334155'}
                    strokeWidth={u === 0 ? 2 : 1}
                  />
                  <line
                    x1={0}
                    y1={cy - u * scale}
                    x2={300}
                    y2={cy - u * scale}
                    stroke={u === 0 ? '#94a3b8' : '#334155'}
                    strokeWidth={u === 0 ? 2 : 1}
                  />
                  {u !== 0 && (
                    <>
                      <text
                        x={cx + u * scale - 4}
                        y={cy + 14}
                        fill="#64748b"
                        fontSize="9"
                        textAnchor="middle"
                      >
                        {u}
                      </text>
                      <text
                        x={cx - 10}
                        y={cy - u * scale + 3}
                        fill="#64748b"
                        fontSize="9"
                        textAnchor="middle"
                      >
                        {u}
                      </text>
                    </>
                  )}
                </g>
              ))}

              {/* Distance triangle */}
              {(mode === 'distance' || mode === 'midpoint') && (
                <>
                  {/* Right triangle legs */}
                  <line
                    x1={cx + point2.x * scale}
                    y1={cy - point2.y * scale}
                    x2={cx + point1.x * scale}
                    y2={cy - point2.y * scale}
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                  <line
                    x1={cx + point1.x * scale}
                    y1={cy - point2.y * scale}
                    x2={cx + point1.x * scale}
                    y2={cy - point1.y * scale}
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                  {/* Hypotenuse */}
                  <line
                    x1={cx + point1.x * scale}
                    y1={cy - point1.y * scale}
                    x2={cx + point2.x * scale}
                    y2={cy - point2.y * scale}
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                  />
                </>
              )}

              {/* Mirror Reflection lines */}
              {mode === 'mirror' && (
                <>
                  <line
                    x1={cx + point1.x * scale}
                    y1={cy - point1.y * scale}
                    x2={cx + point1.x * scale}
                    y2={cy + point1.y * scale}
                    stroke="#ec4899"
                    strokeDasharray="3 3"
                  />
                  {/* Reflected point across X */}
                  <circle
                    cx={cx + point1.x * scale}
                    cy={cy + point1.y * scale}
                    r="5"
                    fill="#ec4899"
                  />
                  <text
                    x={cx + point1.x * scale + 8}
                    y={cy + point1.y * scale + 4}
                    fill="#ec4899"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    X-Reflect ({point1.x}, {-point1.y})
                  </text>
                </>
              )}

              {/* Point 1 */}
              <circle
                cx={cx + point1.x * scale}
                cy={cy - point1.y * scale}
                r="6"
                fill="#38bdf8"
                stroke="#fff"
                strokeWidth="1.5"
              />
              <text
                x={cx + point1.x * scale + 8}
                y={cy - point1.y * scale - 6}
                fill="#38bdf8"
                fontSize="11"
                fontWeight="bold"
              >
                P₁({point1.x}, {point1.y})
              </text>

              {/* Point 2 */}
              {mode !== 'single' && mode !== 'mirror' && (
                <>
                  <circle
                    cx={cx + point2.x * scale}
                    cy={cy - point2.y * scale}
                    r="6"
                    fill="#34d399"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <text
                    x={cx + point2.x * scale + 8}
                    y={cy - point2.y * scale - 6}
                    fill="#34d399"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    P₂({point2.x}, {point2.y})
                  </text>
                </>
              )}

              {/* Midpoint marker */}
              {mode === 'midpoint' && (
                <circle
                  cx={cx + Number(midpoint.x) * scale}
                  cy={cy - Number(midpoint.y) * scale}
                  r="5"
                  fill="#f59e0b"
                />
              )}
            </svg>
          </div>
        </div>

        {/* Controls and Mathematical Breakdown */}
        <div className="space-y-4">
          <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
              Coordinates Adjuster
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Point P₁ X-Coordinate:</span>
                  <span className="font-mono text-[var(--ap)] font-bold">{point1.x}</span>
                </div>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="1"
                  value={point1.x}
                  onChange={(e) => setPoint1({ ...point1, x: Number(e.target.value) })}
                  className="w-full accent-[var(--ap)]"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Point P₁ Y-Coordinate:</span>
                  <span className="font-mono text-[var(--ap)] font-bold">{point1.y}</span>
                </div>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="1"
                  value={point1.y}
                  onChange={(e) => setPoint1({ ...point1, y: Number(e.target.value) })}
                  className="w-full accent-[var(--ap)]"
                />
              </div>

              {(mode === 'distance' || mode === 'midpoint') && (
                <>
                  <div className="pt-2 border-t border-[var(--rule)]">
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Point P₂ (X, Y):</span>
                      <span className="font-mono text-emerald-600 font-bold">
                        ({point2.x}, {point2.y})
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="range"
                        min="-5"
                        max="5"
                        step="1"
                        value={point2.x}
                        onChange={(e) => setPoint2({ ...point2, x: Number(e.target.value) })}
                        className="w-full accent-emerald-500"
                      />
                      <input
                        type="range"
                        min="-5"
                        max="5"
                        step="1"
                        value={point2.y}
                        onChange={(e) => setPoint2({ ...point2, y: Number(e.target.value) })}
                        className="w-full accent-emerald-500"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Real-time Math Output Card */}
          <div className="bg-[var(--ap-soft)] border border-[var(--ap)]/30 rounded-xl p-4">
            <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
              Active Calculation
            </div>
            {mode === 'distance' && (
              <div>
                <div className="text-sm font-semibold mb-1">
                  Distance = √[(x₂ − x₁)² + (y₂ − y₁)²]
                </div>
                <div className="text-xs text-[var(--muted)] font-mono">
                  = √[({point1.x} − ({point2.x}))² + ({point1.y} − ({point2.y}))²]
                </div>
                <div className="text-xs text-[var(--muted)] font-mono">
                  = √[{dx * dx} + {dy * dy}] = √{dx * dx + dy * dy}
                </div>
                <div className="text-base font-bold text-[var(--ap)] mt-1">
                  Distance = {distance} units
                </div>
              </div>
            )}
            {mode === 'midpoint' && (
              <div>
                <div className="text-sm font-semibold mb-1">
                  Midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2)
                </div>
                <div className="text-base font-bold text-amber-600 mt-1">
                  M = ({midpoint.x}, {midpoint.y})
                </div>
              </div>
            )}
            {mode === 'single' && (
              <div>
                <div className="text-sm font-semibold mb-1">Point Location:</div>
                <div className="text-base font-bold text-[var(--ap)]">
                  {getQuadrant(point1.x, point1.y)}
                </div>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Abscissa (x) = {point1.x}, Ordinate (y) = {point1.y}
                </p>
              </div>
            )}
            {mode === 'mirror' && (
              <div>
                <div className="text-sm font-semibold mb-1">Mirror Symmetries:</div>
                <div className="text-xs text-[var(--muted)] space-y-1">
                  <div>
                    Reflection over X-axis: <b>({point1.x}, {-point1.y})</b>
                  </div>
                  <div>
                    Reflection over Y-axis: <b>({-point1.x}, {point1.y})</b>
                  </div>
                  <div>
                    Reflection in Origin: <b>({-point1.x}, {-point1.y})</b>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. POLYNOMIALS (CHAPTER 2)
// ==========================================
function PolynomialsLab() {
  const [degree, setDegree] = useState<'linear' | 'quadratic'>('quadratic');
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);

  // Evaluate f(x)
  const evalPoly = (x: number) => {
    if (degree === 'linear') return b * x + c;
    return a * x * x + b * x + c;
  };

  // Find zeros
  let zerosText = '';
  if (degree === 'linear') {
    if (b !== 0) {
      zerosText = `Zero at x = ${(-c / b).toFixed(2)}`;
    } else {
      zerosText = c === 0 ? 'Infinite zeros' : 'No zeros (horizontal line)';
    }
  } else {
    const disc = b * b - 4 * a * c;
    if (disc > 0) {
      const z1 = ((-b + Math.sqrt(disc)) / (2 * a)).toFixed(2);
      const z2 = ((-b - Math.sqrt(disc)) / (2 * a)).toFixed(2);
      zerosText = `Two distinct real zeros: x₁ = ${z1}, x₂ = ${z2}`;
    } else if (disc === 0) {
      const z = (-b / (2 * a)).toFixed(2);
      zerosText = `One repeated real zero: x = ${z}`;
    } else {
      zerosText = 'No real zeros (Discriminant D < 0)';
    }
  }

  // Generate SVG path for curve
  const points = [];
  for (let px = -5; px <= 5; px += 0.2) {
    const py = evalPoly(px);
    const svgX = 150 + px * 25;
    const svgY = 150 - py * 10;
    points.push(`${svgX},${svgY}`);
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setDegree('linear')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            degree === 'linear' ? 'bg-[var(--ap)] text-white' : 'bg-[var(--ap-soft)] text-[var(--ap)]'
          }`}
        >
          Linear: P(x) = mx + c
        </button>
        <button
          onClick={() => setDegree('quadratic')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            degree === 'quadratic'
              ? 'bg-[var(--ap)] text-white'
              : 'bg-[var(--ap-soft)] text-[var(--ap)]'
          }`}
        >
          Quadratic: P(x) = ax² + bx + c
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Graph representation */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative">
            <svg className="w-full h-full">
              {/* Axes */}
              <line x1={150} y1={0} x2={150} y2={300} stroke="#64748b" strokeWidth={1.5} />
              <line x1={0} y1={150} x2={300} y2={150} stroke="#64748b" strokeWidth={1.5} />
              {/* Polynomial Curve */}
              <polyline
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                points={points.join(' ')}
              />
              <circle cx={150} cy={150} r="3" fill="#cbd5e1" />
            </svg>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4 space-y-3">
            {degree === 'quadratic' && (
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Coefficient a (curvature):</span>
                  <span className="font-mono text-[var(--ap)] font-bold">{a}</span>
                </div>
                <input
                  type="range"
                  min="-3"
                  max="3"
                  step="0.5"
                  value={a}
                  onChange={(e) => setA(Number(e.target.value) || 0.5)}
                  className="w-full accent-[var(--ap)]"
                />
              </div>
            )}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>{degree === 'quadratic' ? 'Coefficient b:' : 'Slope m:'}</span>
                <span className="font-mono text-[var(--ap)] font-bold">{b}</span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Constant c (y-intercept):</span>
                <span className="font-mono text-[var(--ap)] font-bold">{c}</span>
              </div>
              <input
                type="range"
                min="-6"
                max="6"
                step="0.5"
                value={c}
                onChange={(e) => setC(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
          </div>

          <div className="bg-[var(--ap-soft)] border border-[var(--ap)]/30 rounded-xl p-4">
            <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
              Polynomial Analysis
            </div>
            <div className="text-lg font-bold font-mono text-[var(--ink)] mb-1">
              P(x) = {degree === 'quadratic' ? `${a}x² + ` : ''}
              {b}x + {c}
            </div>
            <div className="text-sm font-semibold text-emerald-600">{zerosText}</div>
            <p className="text-xs text-[var(--muted)] mt-2">
              The real zeros of a polynomial correspond directly to the x-intercepts where the graph
              crosses the horizontal line y = 0.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. NUMBER SYSTEMS & REAL NUMBERS (CH 3)
// ==========================================
function NumberSystemsLab() {
  const [val, setVal] = useState<number>(1.414);
  const [selectedPreset, setSelectedPreset] = useState<'sqrt2' | 'pi' | 'fraction' | 'neg'>('sqrt2');

  const presets = [
    { key: 'sqrt2', label: '√2 (≈ 1.414...)', value: 1.414, type: 'Irrational (Non-terminating, Non-repeating)' },
    { key: 'fraction', label: '3/4 (0.75)', value: 0.75, type: 'Rational (Terminating)' },
    { key: 'pi', label: 'π (≈ 3.141...)', value: 3.141, type: 'Irrational (Transcendental)' },
    { key: 'neg', label: '−2.5', value: -2.5, type: 'Negative Rational' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {presets.map((p) => (
          <button
            key={p.key}
            onClick={() => {
              setSelectedPreset(p.key as any);
              setVal(p.value);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedPreset === p.key
                ? 'bg-[var(--ap)] text-white'
                : 'bg-[var(--ap-soft)] text-[var(--ap)]'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 text-white space-y-4">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Continuous Real Number Line (ℝ)
        </div>

        {/* Number line SVG */}
        <div className="relative w-full h-24 select-none">
          <svg className="w-full h-full" viewBox="0 0 500 100">
            {/* Horizontal axis */}
            <line x1="20" y1="50" x2="480" y2="50" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="490,50 478,45 478,55" fill="#94a3b8" />
            <polygon points="10,50 22,45 22,55" fill="#94a3b8" />

            {/* Integer tick marks: -4 to +4 */}
            {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((num) => {
              const xPos = 250 + num * 55;
              return (
                <g key={num}>
                  <line x1={xPos} y1="42" x2={xPos} y2="58" stroke="#cbd5e1" strokeWidth="1.5" />
                  <text x={xPos} y="75" fill="#94a3b8" fontSize="12" textAnchor="middle" fontWeight="bold">
                    {num}
                  </text>
                </g>
              );
            })}

            {/* Active Value Indicator */}
            {(() => {
              const curX = Math.max(25, Math.min(475, 250 + val * 55));
              return (
                <g>
                  <circle cx={curX} cy="50" r="7" fill="#f43f5e" stroke="#fff" strokeWidth="2" />
                  <line x1={curX} y1="15" x2={curX} y2="40" stroke="#f43f5e" strokeWidth="2" />
                  <rect x={curX - 35} y="2" width="70" height="20" rx="4" fill="#f43f5e" />
                  <text x={curX} y="16" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">
                    x = {val}
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Interactive Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-slate-300">
            <span>Drag slider to pinpoint any point on the real continuum:</span>
            <span className="font-mono font-bold text-rose-400">{val}</span>
          </div>
          <input
            type="range"
            min="-4"
            max="4"
            step="0.05"
            value={val}
            onChange={(e) => {
              setVal(Number(e.target.value));
              setSelectedPreset('sqrt2' as any);
            }}
            className="w-full accent-rose-500"
          />
        </div>
      </div>

      <div className="bg-[var(--ap-soft)] border border-[var(--ap)]/30 rounded-xl p-4">
        <h4 className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
          Dedekind Completeness & Density of Real Numbers
        </h4>
        <p className="text-xs text-[var(--muted)] leading-relaxed">
          Between any two rational numbers, there exist infinitely many rationals and irrationals.
          Every single point on this geometric line represents exactly one unique real number, and
          every real number corresponds to exactly one point.
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 4. ALGEBRAIC IDENTITIES (CHAPTER 4)
// ==========================================
function AlgebraicIdentitiesLab() {
  const [a, setA] = useState(4);
  const [b, setB] = useState(2);
  const [identity, setIdentity] = useState<'plus' | 'diffsq'>('plus');

  const total = a + b;
  const areaA2 = a * a;
  const areaB2 = b * b;
  const areaAB = a * b;
  const totalArea = (a + b) ** 2;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setIdentity('plus')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            identity === 'plus' ? 'bg-[var(--ap)] text-white' : 'bg-[var(--ap-soft)] text-[var(--ap)]'
          }`}
        >
          (a + b)² = a² + 2ab + b²
        </button>
        <button
          onClick={() => setIdentity('diffsq')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            identity === 'diffsq'
              ? 'bg-[var(--ap)] text-white'
              : 'bg-[var(--ap-soft)] text-[var(--ap)]'
          }`}
        >
          a² − b² = (a − b)(a + b)
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Visual geometric area representation */}
        <div className="flex justify-center p-4 bg-slate-900 rounded-xl border border-slate-700">
          <div className="relative w-[240px] h-[240px] border-2 border-white/40">
            {/* Top-left: a * a */}
            <div
              style={{
                width: `${(a / total) * 100}%`,
                height: `${(a / total) * 100}%`,
              }}
              className="absolute top-0 left-0 bg-blue-500/80 border border-white/50 flex flex-col items-center justify-center text-white text-xs font-bold"
            >
              <span>a²</span>
              <span className="text-[10px] opacity-80">{areaA2}</span>
            </div>

            {/* Top-right: a * b */}
            <div
              style={{
                width: `${(b / total) * 100}%`,
                height: `${(a / total) * 100}%`,
              }}
              className="absolute top-0 right-0 bg-emerald-500/80 border border-white/50 flex flex-col items-center justify-center text-white text-xs font-bold"
            >
              <span>ab</span>
              <span className="text-[10px] opacity-80">{areaAB}</span>
            </div>

            {/* Bottom-left: a * b */}
            <div
              style={{
                width: `${(a / total) * 100}%`,
                height: `${(b / total) * 100}%`,
              }}
              className="absolute bottom-0 left-0 bg-emerald-500/80 border border-white/50 flex flex-col items-center justify-center text-white text-xs font-bold"
            >
              <span>ab</span>
              <span className="text-[10px] opacity-80">{areaAB}</span>
            </div>

            {/* Bottom-right: b * b */}
            <div
              style={{
                width: `${(b / total) * 100}%`,
                height: `${(b / total) * 100}%`,
              }}
              className="absolute bottom-0 right-0 bg-amber-500/80 border border-white/50 flex flex-col items-center justify-center text-white text-xs font-bold"
            >
              <span>b²</span>
              <span className="text-[10px] opacity-80">{areaB2}</span>
            </div>
          </div>
        </div>

        {/* Sliders & Step breakdown */}
        <div className="space-y-4">
          <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Side length a:</span>
                <span className="font-mono text-blue-600 font-bold">{a} units</span>
              </div>
              <input
                type="range"
                min="2"
                max="6"
                step="1"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Side length b:</span>
                <span className="font-mono text-amber-600 font-bold">{b} units</span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          <div className="bg-[var(--ap-soft)] border border-[var(--ap)]/30 rounded-xl p-4">
            <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
              Geometric Proof Breakdown
            </div>
            <div className="text-sm font-bold text-[var(--ink)] mb-2">
              ({a} + {b})² = {total}² = {totalArea} sq units
            </div>
            <div className="space-y-1 text-xs text-[var(--muted)] font-mono">
              <div className="text-blue-600">Blue square (a²) = {areaA2}</div>
              <div className="text-emerald-600">Two green rectangles (2ab) = 2 × {areaAB} = {2 * areaAB}</div>
              <div className="text-amber-600">Orange square (b²) = {areaB2}</div>
              <div className="pt-1 font-bold text-[var(--ink)] border-t border-[var(--rule)]">
                Sum = {areaA2} + {2 * areaAB} + {areaB2} = {totalArea} ✓
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. CIRCLES (CHAPTER 5)
// ==========================================
function CirclesLab() {
  const [radius, setRadius] = useState(80);
  const [chordAngle, setChordAngle] = useState(70);
  const [pAngleOffset, setPAngleOffset] = useState(90); // 90 = top (cy - radius)
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRotating) {
      interval = setInterval(() => {
        setPAngleOffset((prev) => {
          // Sweep between 45 and 135 degrees along upper circumference
          const next = prev + 1.5;
          return next > 140 ? 40 : next;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  // Angle subtended at centre = 2 * angle subtended at circumference
  const centralAngle = chordAngle;
  const inscribedAngle = (chordAngle / 2).toFixed(1);

  const cx = 150;
  const cy = 150;

  // Chord endpoints on bottom half of circle
  const rad1 = ((180 - chordAngle) / 2) * (Math.PI / 180);
  const rad2 = ((180 + chordAngle) / 2) * (Math.PI / 180);

  const p1 = { x: cx + radius * Math.cos(rad1), y: cy + radius * Math.sin(rad1) };
  const p2 = { x: cx + radius * Math.cos(rad2), y: cy + radius * Math.sin(rad2) };
  
  // Dynamic point P along upper circumference
  const pRad = pAngleOffset * (Math.PI / 180);
  const topP = { x: cx - radius * Math.cos(pRad), y: cy - radius * Math.sin(pRad) };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Circle SVG */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative">
            <svg className="w-full h-full">
              {/* Main circle */}
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
              />

              {/* Angle subtended at circumference */}
              <line x1={topP.x} y1={topP.y} x2={p1.x} y2={p1.y} stroke="#a78bfa" strokeWidth="2" />
              <line x1={topP.x} y1={topP.y} x2={p2.x} y2={p2.y} stroke="#a78bfa" strokeWidth="2" />

              {/* Angle subtended at centre */}
              <line x1={cx} y1={cy} x2={p1.x} y2={p1.y} stroke="#38bdf8" strokeWidth="2" />
              <line x1={cx} y1={cy} x2={p2.x} y2={p2.y} stroke="#38bdf8" strokeWidth="2" />

              {/* Chord */}
              <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#f43f5e" strokeWidth="3" />

              {/* Center point */}
              <circle cx={cx} cy={cy} r="4" fill="#38bdf8" />
              <text x={cx + 8} y={cy - 5} fill="#38bdf8" fontSize="11" fontWeight="bold">
                O (Centre)
              </text>

              {/* Circumference vertex */}
              <circle cx={topP.x} cy={topP.y} r="5" fill="#a78bfa" stroke="#fff" strokeWidth="1.5" />
              <text x={topP.x - 5} y={topP.y - 8} fill="#a78bfa" fontSize="11" fontWeight="bold">
                P ({inscribedAngle}°)
              </text>
            </svg>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Subtended Central Angle (2θ):</span>
                <span className="font-mono text-[var(--ap)] font-bold">{centralAngle}°</span>
              </div>
              <input
                type="range"
                min="30"
                max="140"
                step="2"
                value={chordAngle}
                onChange={(e) => setChordAngle(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>

            {/* Animation Toggle */}
            <div className="pt-2 border-t border-[var(--rule)]">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="w-full py-2 rounded-lg text-xs font-bold text-white shadow-sm flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                style={{ background: isRotating ? '#8b5cf6' : 'var(--ap)' }}
              >
                {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isRotating ? 'Pause Point P Motion' : '▶ Animate Point P along Circumference'}
              </button>
            </div>
          </div>

          <div className="bg-[var(--ap-soft)] border border-[var(--ap)]/30 rounded-xl p-4">
            <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
              NCERT Circle Theorem 10.8
            </div>
            <div className="text-sm font-semibold text-[var(--ink)] mb-1">
              Central Angle = 2 × Inscribed Angle
            </div>
            <div className="text-xs text-[var(--muted)] space-y-1">
              <div>
                Angle at Centre ∠AOB = <b>{centralAngle}°</b>
              </div>
              <div>
                Angle at Circumference ∠APB = <b>{inscribedAngle}°</b>
              </div>
            </div>
            <p className="text-xs text-emerald-600 font-bold mt-2">
              Notice: Even as point P moves smoothly along the rim, the inscribed angle stays constant!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 6. TRIANGLES & HERON'S FORMULA (CH 6)
// ==========================================
function TrianglesAreasLab() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(6);
  const [c, setC] = useState(7);

  const isValidTriangle = a + b > c && a + c > b && b + c > a;
  const s = (a + b + c) / 2;
  const area = isValidTriangle
    ? Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2)
    : '0 (Invalid sides)';

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Interactive Triangle Drawing */}
        <div className="flex justify-center p-6 bg-slate-900 rounded-xl border border-slate-700">
          <div className="relative w-[240px] h-[200px] flex items-center justify-center">
            {isValidTriangle ? (
              <svg className="w-full h-full" viewBox="0 0 240 200">
                <polygon
                  points="40,160 200,160 110,40"
                  fill="rgba(56, 189, 248, 0.2)"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                />
                <text x="120" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Side a = {a}
                </text>
                <text x="60" y="95" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  b = {b}
                </text>
                <text x="165" y="95" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  c = {c}
                </text>
              </svg>
            ) : (
              <div className="text-rose-400 text-xs font-bold text-center">
                Triangle Inequality Violated!<br />Sum of any 2 sides must exceed the 3rd side.
              </div>
            )}
          </div>
        </div>

        {/* Sliders & Heron's Formula */}
        <div className="space-y-4">
          <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Side a:</span>
                <span className="font-mono text-[var(--ap)] font-bold">{a} cm</span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                step="1"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Side b:</span>
                <span className="font-mono text-[var(--ap)] font-bold">{b} cm</span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                step="1"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Side c:</span>
                <span className="font-mono text-[var(--ap)] font-bold">{c} cm</span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                step="1"
                value={c}
                onChange={(e) => setC(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
          </div>

          <div className="bg-[var(--ap-soft)] border border-[var(--ap)]/30 rounded-xl p-4">
            <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
              Heron&apos;s Step-by-Step Calculation
            </div>
            <div className="text-xs text-[var(--muted)] space-y-1 font-mono">
              <div>Semi-perimeter s = ({a} + {b} + {c}) / 2 = <b>{s} cm</b></div>
              <div>(s − a) = {s - a}, (s − b) = {s - b}, (s − c) = {s - c}</div>
              <div className="pt-1 text-sm font-bold text-[var(--ap)] border-t border-[var(--rule)]">
                Area = √[{s} × {s - a} × {s - b} × {s - c}] = {area} cm²
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. PROBABILITY (CHAPTER 7)
// ==========================================
function ProbabilityLab() {
  const [totalRolls, setTotalRolls] = useState(0);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0, 0]); // dice 1-6
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastWinner, setLastWinner] = useState<number | null>(null);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const winningIndex = Math.floor(Math.random() * 6); // 0 to 5
    // Each sector is 60 degrees.
    const targetAngle = 360 * 4 + (5 - winningIndex) * 60 + 30;

    setRotation((prev) => prev + targetAngle);

    setTimeout(() => {
      setIsSpinning(false);
      setLastWinner(winningIndex + 1);
      setCounts((prev) => {
        const next = [...prev];
        next[winningIndex]++;
        return next;
      });
      setTotalRolls((prev) => prev + 1);
    }, 1600);
  };

  const rollBatch = (times: number) => {
    const nextCounts = [...counts];
    for (let i = 0; i < times; i++) {
      const rolled = Math.floor(Math.random() * 6);
      nextCounts[rolled]++;
    }
    setCounts(nextCounts);
    setTotalRolls((prev) => prev + times);
  };

  const reset = () => {
    setTotalRolls(0);
    setCounts([0, 0, 0, 0, 0, 0]);
    setLastWinner(null);
  };

  const sectorColors = ['#f43f5e', '#f59e0b', '#10b981', '#06b6d4', '#3b82f6', '#8b5cf6'];

  return (
    <div className="space-y-4">
      {/* Animated Spinner & Controls */}
      <div className="grid sm:grid-cols-2 gap-6 items-center bg-slate-900 rounded-xl p-6 border border-slate-700 text-white">
        {/* Animated Rotating Wheel */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-44 h-44 flex items-center justify-center select-none">
            {/* Top Fixed Needle Pointer */}
            <div className="absolute -top-3 z-20 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-amber-400 drop-shadow-md" />

            {/* Rotating Wheel Group */}
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ duration: 1.6, ease: [0.15, 0.9, 0.3, 1] }}
              className="w-full h-full rounded-full overflow-hidden shadow-2xl relative border-4 border-slate-700"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {sectorColors.map((col, idx) => {
                  const startAngle = (idx * 60) * (Math.PI / 180);
                  const endAngle = ((idx + 1) * 60) * (Math.PI / 180);
                  const x1 = 50 + 50 * Math.cos(startAngle);
                  const y1 = 50 + 50 * Math.sin(startAngle);
                  const x2 = 50 + 50 * Math.cos(endAngle);
                  const y2 = 50 + 50 * Math.sin(endAngle);
                  const midAngle = ((idx + 0.5) * 60) * (Math.PI / 180);
                  const textX = 50 + 32 * Math.cos(midAngle);
                  const textY = 50 + 32 * Math.sin(midAngle) + 3;

                  return (
                    <g key={idx}>
                      <path
                        d={`M 50 50 L ${x1.toFixed(1)} ${y1.toFixed(1)} A 50 50 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`}
                        fill={col}
                      />
                      <text
                        x={textX}
                        y={textY}
                        fill="#fff"
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {idx + 1}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </motion.div>

            {/* Central hub */}
            <div className="absolute w-8 h-8 rounded-full bg-slate-900 border-2 border-white/60 flex items-center justify-center text-[10px] font-bold z-10">
              🎲
            </div>
          </div>

          {lastWinner && (
            <div className="mt-3 text-xs font-bold text-amber-300">
              Landed on: <b className="text-base text-white">Sector {lastWinner}</b>!
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className="w-full py-3 rounded-xl font-bold text-sm text-white shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
            style={{ background: 'var(--ap)' }}
          >
            <Shuffle className="w-4 h-4" />
            {isSpinning ? 'Wheel Spinning...' : '▶ Spin Animated Wheel!'}
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => rollBatch(50)}
              className="py-2 px-3 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
            >
              Simulate 50 Rolls
            </button>
            <button
              onClick={() => rollBatch(500)}
              className="py-2 px-3 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
            >
              Simulate 500 Rolls
            </button>
          </div>

          <button
            onClick={reset}
            className="w-full py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white flex items-center justify-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Counts
          </button>
        </div>
      </div>

      {/* Real-time Frequency Convergence Graph */}
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 text-white space-y-4">
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span>Theoretical Probability: <b>P(E) = 1/6 ≈ 16.67%</b></span>
          <span>Total Trials: <b className="text-sky-400">{totalRolls}</b></span>
        </div>

        {/* Real-time frequency bars */}
        <div className="grid grid-cols-6 gap-2 text-center pt-2">
          {counts.map((cnt, i) => {
            const pct = totalRolls > 0 ? ((cnt / totalRolls) * 100).toFixed(1) : '0.0';
            return (
              <div key={i} className="space-y-2">
                <div className="h-28 bg-slate-800 rounded-lg flex flex-col justify-end p-1 relative overflow-hidden">
                  <motion.div
                    animate={{ height: `${totalRolls > 0 ? (cnt / totalRolls) * 100 * 2.2 : 0}%` }}
                    transition={{ duration: 0.3 }}
                    style={{ background: sectorColors[i] }}
                    className="w-full rounded"
                  />
                  <span className="text-[10px] font-mono text-slate-300 absolute top-1 left-0 right-0">
                    {pct}%
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-300">Sector {i + 1}</div>
                <div className="text-[10px] text-slate-400">{cnt} hits</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[var(--ap-soft)] border border-[var(--ap)]/30 rounded-xl p-4">
        <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
          Empirical vs Theoretical Probability
        </div>
        <p className="text-xs text-[var(--muted)]">
          As the total number of experimental trials increases into hundreds, the empirical frequency
          of each outcome converges precisely to its theoretical probability (16.67%).
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 8. PROGRESSIONS - AP & GP (CHAPTER 8)
// ==========================================
function ProgressionsLab() {
  const [progType, setProgType] = useState<'ap' | 'gp'>('ap');
  const [a, setA] = useState(2);
  const [d, setD] = useState(3);
  const [n, setN] = useState(6);

  // Generate terms
  const terms: number[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const val = progType === 'ap' ? a + i * d : a * Math.pow(d, i);
    terms.push(val);
    sum += val;
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => {
            setProgType('ap');
            setD(3);
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            progType === 'ap' ? 'bg-[var(--ap)] text-white' : 'bg-[var(--ap-soft)] text-[var(--ap)]'
          }`}
        >
          Arithmetic Progression (AP)
        </button>
        <button
          onClick={() => {
            setProgType('gp');
            setD(2);
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            progType === 'gp' ? 'bg-[var(--gp)] text-white' : 'bg-[var(--gp-soft)] text-[var(--gp)]'
          }`}
        >
          Geometric Progression (GP)
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Terms Bar Chart */}
        <div className="flex justify-center p-4 bg-slate-900 rounded-xl border border-slate-700">
          <div className="h-48 w-full flex items-end gap-2 justify-center px-4">
            {terms.map((t, i) => {
              const maxVal = Math.max(...terms, 1);
              const heightPct = Math.min(100, Math.max(10, (t / maxVal) * 100));
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-mono text-slate-300 font-bold">{t}</span>
                  <div
                    style={{ height: `${heightPct}%` }}
                    className={`w-full rounded-t transition-all ${
                      progType === 'ap' ? 'bg-sky-500' : 'bg-emerald-500'
                    }`}
                  />
                  <span className="text-[10px] text-slate-400">T{i + 1}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>First Term (a):</span>
                <span className="font-mono text-[var(--ap)] font-bold">{a}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>{progType === 'ap' ? 'Common Difference (d):' : 'Common Ratio (r):'}</span>
                <span className="font-mono text-[var(--ap)] font-bold">{d}</span>
              </div>
              <input
                type="range"
                min={progType === 'ap' ? -5 : 2}
                max={progType === 'ap' ? 10 : 3}
                step="1"
                value={d}
                onChange={(e) => setD(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
          </div>

          <div className="bg-[var(--ap-soft)] border border-[var(--ap)]/30 rounded-xl p-4">
            <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
              Sequence Formulas
            </div>
            <div className="text-xs text-[var(--muted)] space-y-1">
              <div>
                Nth Term Formula: <b>{progType === 'ap' ? 'aₙ = a + (n−1)d' : 'aₙ = a × rⁿ⁻¹'}</b>
              </div>
              <div>
                Sum of {n} terms: <b>Sₙ = {sum}</b>
              </div>
              <div className="font-mono text-sky-600 font-bold mt-1">
                Series: {terms.join(', ')}...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 9. REASONING & PROOFS (CHAPTER 9)
// ==========================================
function ReasoningProofsLab() {
  const [statementP, setStatementP] = useState(true); // "It rains"
  const [statementQ, setStatementQ] = useState(true); // "The ground gets wet"

  // Implication P -> Q
  const implication = !statementP || statementQ;

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-700 text-white space-y-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Conditional Implication & Truth Tester: P ⇒ Q
        </h4>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
            <div className="text-xs text-slate-400 mb-1">Hypothesis P:</div>
            <div className="font-bold text-sm mb-2">&ldquo;Number is divisible by 4&rdquo;</div>
            <button
              onClick={() => setStatementP(!statementP)}
              className={`px-3 py-1 rounded text-xs font-bold ${
                statementP ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              {statementP ? 'P is TRUE' : 'P is FALSE'}
            </button>
          </div>

          <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
            <div className="text-xs text-slate-400 mb-1">Conclusion Q:</div>
            <div className="font-bold text-sm mb-2">&ldquo;Number is divisible by 2&rdquo;</div>
            <button
              onClick={() => setStatementQ(!statementQ)}
              className={`px-3 py-1 rounded text-xs font-bold ${
                statementQ ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              {statementQ ? 'Q is TRUE' : 'Q is FALSE'}
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400">Statement: P ⇒ Q (If P then Q)</div>
            <div className="text-base font-bold text-sky-400">
              {implication ? 'VALID MATHEMATICAL PROOF (True)' : 'COUNTEREXAMPLE FOUND (False)'}
            </div>
          </div>
          <span className="text-2xl">{implication ? '✅' : '❌'}</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 10. STATISTICS (CHAPTER 10)
// ==========================================
function StatisticsLab() {
  const [dataPoints, setDataPoints] = useState<number[]>([12, 15, 15, 18, 22, 25, 28]);

  const mean = (dataPoints.reduce((a, b) => a + b, 0) / dataPoints.length).toFixed(1);
  const sorted = [...dataPoints].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 === 0 ? ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(1) : sorted[mid];

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Data Points Display */}
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-700 text-white space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Dataset Frequency Distribution
          </div>
          <div className="flex flex-wrap gap-2">
            {dataPoints.map((pt, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-sky-500/20 border border-sky-500/40 text-sky-300 font-mono text-sm font-bold"
              >
                {pt}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              const rand = Math.floor(Math.random() * 20) + 10;
              setDataPoints([...dataPoints, rand]);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-600 text-white hover:bg-sky-500"
          >
            + Add Random Data Point
          </button>
        </div>

        {/* Central Tendency Metrics */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-[var(--ap-soft)] border border-[var(--ap)]/30">
              <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
                Mean (Arithmetic Average)
              </div>
              <div className="text-2xl font-bold font-mono text-[var(--ink)]">{mean}</div>
              <div className="text-[10px] text-[var(--muted)]">x̄ = Σx / N</div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                Median (Middle Value)
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-800">{median}</div>
              <div className="text-[10px] text-emerald-600">50th percentile rank</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 11. NUMBER THEORY & EUCLID (CHAPTER 11)
// ==========================================
function NumberTheoryLab() {
  const [a, setA] = useState(56);
  const [b, setB] = useState(12);

  const q = Math.floor(a / b);
  const r = a % b;

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4 space-y-3">
          <h4 className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">
            Numbers a and b
          </h4>
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span>Dividend (a):</span>
              <span className="font-mono text-[var(--ap)] font-bold">{a}</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="1"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full accent-[var(--ap)]"
            />
          </div>
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span>Divisor (b):</span>
              <span className="font-mono text-[var(--ap)] font-bold">{b}</span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              step="1"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full accent-[var(--ap)]"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[var(--ap-soft)] border border-[var(--ap)]/30">
          <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
            Euclid&apos;s Division Lemma
          </div>
          <div className="text-lg font-bold font-mono text-[var(--ink)] mb-2">
            a = bq + r &nbsp;(0 ≤ r &lt; b)
          </div>
          <div className="text-sm text-[var(--muted)] space-y-1">
            <div>
              <b>{a}</b> = <b>{b}</b> × <b>{q}</b> + <b>{r}</b>
            </div>
            <div>Quotient (q) = {q}</div>
            <div>Remainder (r) = {r}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 12. QUADRILATERALS (CHAPTER 12)
// ==========================================
function QuadrilateralsLab() {
  const [shape, setShape] = useState<'parallelogram' | 'rhombus' | 'trapezium'>('parallelogram');

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['parallelogram', 'rhombus', 'trapezium'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setShape(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
              shape === s ? 'bg-[var(--ap)] text-white' : 'bg-[var(--ap-soft)] text-[var(--ap)]'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 flex justify-center">
        <svg width="260" height="150" viewBox="0 0 260 150">
          {shape === 'parallelogram' && (
            <polygon points="50,120 200,120 230,40 80,40" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2.5" />
          )}
          {shape === 'rhombus' && (
            <polygon points="130,20 210,75 130,130 50,75" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" strokeWidth="2.5" />
          )}
          {shape === 'trapezium' && (
            <polygon points="40,120 220,120 180,40 80,40" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="2.5" />
          )}
        </svg>
      </div>

      <div className="p-4 rounded-xl bg-[var(--ap-soft)] border border-[var(--ap)]/30">
        <h4 className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
          Quadrilateral Angle Sum Theorem
        </h4>
        <p className="text-xs text-[var(--muted)]">
          The sum of all four interior angles of any quadrilateral equals <b>360°</b>. In a parallelogram, opposite sides and angles are equal, and diagonals bisect each other.
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 13. LINEAR EQUATIONS IN 2 VARIABLES (CH 13)
// ==========================================
function LinearEquationsLab() {
  const [m, setM] = useState(1);
  const [c, setC] = useState(2);

  // y = mx + c
  // x1 = -4 -> y1 = -4m + c
  // x2 = 4 -> y2 = 4m + c
  const p1 = { x: 150 - 4 * 25, y: 150 - (-4 * m + c) * 20 };
  const p2 = { x: 150 + 4 * 25, y: 150 - (4 * m + c) * 20 };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative">
            <svg className="w-full h-full">
              <line x1={150} y1={0} x2={150} y2={300} stroke="#64748b" strokeWidth={1.5} />
              <line x1={0} y1={150} x2={300} y2={150} stroke="#64748b" strokeWidth={1.5} />
              <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#38bdf8" strokeWidth="3" />
              <circle cx={150} cy={150 - c * 20} r="5" fill="#f43f5e" />
              <text x={160} y={150 - c * 20 + 4} fill="#f43f5e" fontSize="10" fontWeight="bold">
                (0, {c})
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Slope (m = rise/run):</span>
                <span className="font-mono text-[var(--ap)] font-bold">{m}</span>
              </div>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={m}
                onChange={(e) => setM(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Y-Intercept (c):</span>
                <span className="font-mono text-[var(--ap)] font-bold">{c}</span>
              </div>
              <input
                type="range"
                min="-4"
                max="4"
                step="1"
                value={c}
                onChange={(e) => setC(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--ap-soft)] border border-[var(--ap)]/30">
            <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
              Linear Equation in Two Variables
            </div>
            <div className="text-lg font-bold font-mono text-[var(--ink)] mb-1">
              y = {m}x {c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`}
            </div>
            <p className="text-xs text-[var(--muted)]">
              Every linear equation in two variables represents a straight line. Every point (x, y) satisfying the equation lies on this line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 14. MENSURATION 3D (CHAPTER 14)
// ==========================================
function Mensuration3DLab() {
  const [shape, setShape] = useState<'cuboid' | 'cylinder' | 'sphere'>('cuboid');
  const [r, setR] = useState(5);
  const [h, setH] = useState(8);

  const cuboidVol = r * r * h;
  const cylinderVol = (Math.PI * r * r * h).toFixed(1);
  const sphereVol = ((4 / 3) * Math.PI * r ** 3).toFixed(1);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['cuboid', 'cylinder', 'sphere'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setShape(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
              shape === s ? 'bg-[var(--ap)] text-white' : 'bg-[var(--ap-soft)] text-[var(--ap)]'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center p-6 bg-slate-900 rounded-xl border border-slate-700">
          <div className="w-[200px] h-[160px] flex items-center justify-center">
            <svg width="180" height="150" viewBox="0 0 180 150">
              {shape === 'cuboid' && (
                <g stroke="#38bdf8" strokeWidth="2" fill="rgba(56, 189, 248, 0.2)">
                  <rect x="30" y="40" width="80" height="70" />
                  <polygon points="30,40 60,15 140,15 110,40" />
                  <polygon points="110,40 140,15 140,85 110,110" />
                </g>
              )}
              {shape === 'cylinder' && (
                <g stroke="#34d399" strokeWidth="2" fill="rgba(52, 211, 153, 0.2)">
                  <ellipse cx="90" cy="30" rx="50" ry="15" />
                  <ellipse cx="90" cy="110" rx="50" ry="15" />
                  <line x1="40" y1="30" x2="40" y2="110" />
                  <line x1="140" y1="30" x2="140" y2="110" />
                </g>
              )}
              {shape === 'sphere' && (
                <g stroke="#f59e0b" strokeWidth="2" fill="rgba(245, 158, 11, 0.2)">
                  <circle cx="90" cy="75" r="55" />
                  <ellipse cx="90" cy="75" rx="55" ry="18" strokeDasharray="3 3" />
                </g>
              )}
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--sheet)] border border-[var(--rule)] rounded-xl p-4 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>{shape === 'cuboid' ? 'Base Width (w):' : 'Radius (r):'}</span>
                <span className="font-mono text-[var(--ap)] font-bold">{r} cm</span>
              </div>
              <input
                type="range"
                min="2"
                max="10"
                step="1"
                value={r}
                onChange={(e) => setR(Number(e.target.value))}
                className="w-full accent-[var(--ap)]"
              />
            </div>
            {shape !== 'sphere' && (
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Height (h):</span>
                  <span className="font-mono text-[var(--ap)] font-bold">{h} cm</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="1"
                  value={h}
                  onChange={(e) => setH(Number(e.target.value))}
                  className="w-full accent-[var(--ap)]"
                />
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-[var(--ap-soft)] border border-[var(--ap)]/30">
            <div className="text-xs font-bold text-[var(--ap)] uppercase tracking-wider mb-1">
              Calculated 3D Volume
            </div>
            <div className="text-xl font-bold font-mono text-[var(--ink)]">
              {shape === 'cuboid' && `V = l × w × h = ${cuboidVol} cm³`}
              {shape === 'cylinder' && `V = πr²h = ${cylinderVol} cm³`}
              {shape === 'sphere' && `V = 4/3 πr³ = ${sphereVol} cm³`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
