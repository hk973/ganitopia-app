'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PenTool,
  Calculator,
  Eraser,
  RotateCcw,
  Download,
  X,
  Minimize2,
  Maximize2,
  Sparkles,
} from 'lucide-react';
import { playPop } from '@/lib/audio/soundEffects';

export function InteractiveScratchpad() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'canvas' | 'calculator'>('canvas');

  // Canvas State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#2563eb');
  const [brushSize, setBrushSize] = useState(3);
  const [isEraser, setIsEraser] = useState(false);

  // Calculator State
  const [calcDisplay, setCalcDisplay] = useState('');
  const [calcResult, setCalcResult] = useState('');
  const [calcHistory, setCalcHistory] = useState<string[]>([]);

  // Initialize Canvas
  useEffect(() => {
    if (isOpen && activeTab === 'canvas' && canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [isOpen, activeTab]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.strokeStyle = isEraser ? '#ffffff' : penColor;
    ctx.lineWidth = isEraser ? brushSize * 4 : brushSize;
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    playPop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const downloadCanvas = () => {
    playPop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `ganitopia-scratchpad-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // Calculator Functions
  const handleCalcInput = (val: string) => {
    playPop();
    setCalcDisplay((prev) => prev + val);
  };

  const handleCalcClear = () => {
    playPop();
    setCalcDisplay('');
    setCalcResult('');
  };

  const handleCalcDelete = () => {
    playPop();
    setCalcDisplay((prev) => prev.slice(0, -1));
  };

  const handleCalcEquals = () => {
    playPop();
    try {
      // Clean safe expression calculation
      let sanitized = calcDisplay
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI')
        .replace(/\^/g, '**');

      // Safe evaluation using Function
      const res = Function(`"use strict"; return (${sanitized})`)();
      const rounded = Number(res.toFixed(6)).toString();
      setCalcResult(rounded);
      setCalcHistory((prev) => [`${calcDisplay} = ${rounded}`, ...prev.slice(0, 4)]);
    } catch {
      setCalcResult('Error');
    }
  };

  const handleSqrt = () => {
    playPop();
    try {
      const val = parseFloat(calcDisplay);
      if (!isNaN(val) && val >= 0) {
        const res = Math.sqrt(val).toFixed(4);
        setCalcResult(res);
        setCalcHistory((prev) => [`√(${calcDisplay}) = ${res}`, ...prev.slice(0, 4)]);
      }
    } catch {
      setCalcResult('Error');
    }
  };

  return (
    <>
      {/* Floating Action Button (Always Accessible at bottom-right) */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            playPop();
            setIsOpen(true);
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[var(--ink)] text-[var(--paper)] font-bold text-xs shadow-2xl border-2 border-[var(--rule)] hover:border-[var(--sci)] transition-all cursor-pointer group"
          style={{ backdropFilter: 'blur(12px)' }}
          title="Open Scratchpad & Calculator"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <PenTool className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
          <span>Scratchpad &amp; Calc</span>
        </motion.button>
      )}

      {/* Floating / Docked Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-[480px] h-[540px] rounded-3xl bg-[var(--sheet)] border-2 border-[var(--rule)] shadow-2xl flex flex-col overflow-hidden"
            style={{ backdropFilter: 'blur(16px)' }}
          >
            {/* Window Titlebar */}
            <div className="flex items-center justify-between p-3.5 border-b border-[var(--rule)] bg-[var(--paper)]/80 select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    playPop();
                    setActiveTab('canvas');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'canvas'
                      ? 'bg-[var(--sci)] text-white shadow-xs'
                      : 'text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Whiteboard</span>
                </button>
                <button
                  onClick={() => {
                    playPop();
                    setActiveTab('calculator');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'calculator'
                      ? 'bg-[var(--sci)] text-white shadow-xs'
                      : 'text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Calculator</span>
                </button>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    playPop();
                    setIsOpen(false);
                  }}
                  className="p-1.5 rounded-lg hover:bg-[var(--rule)]/50 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                  title="Minimize"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* TAB 1: WHITEBOARD DRAWING CANVAS */}
            {activeTab === 'canvas' && (
              <div className="flex-1 flex flex-col bg-[var(--sheet)] overflow-hidden">
                {/* Canvas Toolbar */}
                <div className="flex items-center justify-between p-2.5 border-b border-[var(--rule)] bg-[var(--paper)]/50 gap-2 flex-wrap text-xs">
                  {/* Color Palette */}
                  <div className="flex items-center gap-1.5">
                    {['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#1e293b'].map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          playPop();
                          setPenColor(c);
                          setIsEraser(false);
                        }}
                        className={`w-5 h-5 rounded-full transition-transform ${
                          !isEraser && penColor === c ? 'scale-125 ring-2 ring-[var(--sci)]' : 'hover:scale-110'
                        }`}
                        style={{ background: c }}
                        title="Pick color"
                      />
                    ))}
                  </div>

                  {/* Brush Size / Eraser / Actions */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        playPop();
                        setIsEraser(!isEraser);
                      }}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isEraser
                          ? 'bg-rose-500 text-white border-rose-600'
                          : 'border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)] hover:text-[var(--ink)]'
                      }`}
                      title={isEraser ? 'Pen Mode' : 'Eraser Mode'}
                    >
                      <Eraser className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={clearCanvas}
                      className="p-1.5 rounded-lg border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)] hover:text-[var(--ink)]"
                      title="Clear Whiteboard"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={downloadCanvas}
                      className="p-1.5 rounded-lg border border-[var(--rule)] bg-[var(--sheet)] text-[var(--muted)] hover:text-[var(--ink)]"
                      title="Download as PNG"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Drawing Surface */}
                <div className="flex-1 relative bg-white cursor-crosshair">
                  <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-full touch-none"
                  />
                  <div className="absolute bottom-2 left-3 text-[10px] text-slate-400 pointer-events-none select-none">
                    ✏️ Draw freehand math steps or rough calculations here
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SCIENTIFIC QUICK CALCULATOR */}
            {activeTab === 'calculator' && (
              <div className="flex-1 p-4 flex flex-col justify-between bg-[var(--sheet)] overflow-hidden space-y-3">
                {/* Display Screen */}
                <div className="p-3.5 rounded-2xl bg-[var(--paper)] border border-[var(--rule)] text-right space-y-1">
                  <div className="text-xs text-[var(--muted)] font-mono min-h-[16px] truncate">
                    {calcDisplay || '0'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-[var(--ink)] tracking-wider">
                    {calcResult || calcDisplay || '0'}
                  </div>
                </div>

                {/* Calculation History Pill */}
                {calcHistory.length > 0 && (
                  <div className="text-[10px] text-[var(--muted)] bg-[var(--paper)]/50 p-2 rounded-xl flex items-center justify-between">
                    <span className="font-bold">Recent:</span>
                    <span className="font-mono text-emerald-600 truncate">{calcHistory[0]}</span>
                  </div>
                )}

                {/* Keypad Grid */}
                <div className="grid grid-cols-4 gap-2 text-sm font-bold font-mono">
                  <button onClick={handleCalcClear} className="p-2.5 rounded-xl bg-rose-500/10 text-rose-600 hover:bg-rose-500/20">C</button>
                  <button onClick={handleCalcDelete} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">DEL</button>
                  <button onClick={handleSqrt} className="p-2.5 rounded-xl bg-[var(--sci-soft)] text-[var(--sci)] hover:opacity-80">√</button>
                  <button onClick={() => handleCalcInput('÷')} className="p-2.5 rounded-xl bg-[var(--sci-soft)] text-[var(--sci)] hover:opacity-80">÷</button>

                  <button onClick={() => handleCalcInput('7')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">7</button>
                  <button onClick={() => handleCalcInput('8')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">8</button>
                  <button onClick={() => handleCalcInput('9')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">9</button>
                  <button onClick={() => handleCalcInput('×')} className="p-2.5 rounded-xl bg-[var(--sci-soft)] text-[var(--sci)] hover:opacity-80">×</button>

                  <button onClick={() => handleCalcInput('4')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">4</button>
                  <button onClick={() => handleCalcInput('5')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">5</button>
                  <button onClick={() => handleCalcInput('6')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">6</button>
                  <button onClick={() => handleCalcInput('-')} className="p-2.5 rounded-xl bg-[var(--sci-soft)] text-[var(--sci)] hover:opacity-80">-</button>

                  <button onClick={() => handleCalcInput('1')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">1</button>
                  <button onClick={() => handleCalcInput('2')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">2</button>
                  <button onClick={() => handleCalcInput('3')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">3</button>
                  <button onClick={() => handleCalcInput('+')} className="p-2.5 rounded-xl bg-[var(--sci-soft)] text-[var(--sci)] hover:opacity-80">+</button>

                  <button onClick={() => handleCalcInput('0')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">0</button>
                  <button onClick={() => handleCalcInput('.')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">.</button>
                  <button onClick={() => handleCalcInput('π')} className="p-2.5 rounded-xl bg-[var(--paper)] hover:bg-[var(--rule)]/40">π</button>
                  <button onClick={handleCalcEquals} className="p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-md">=</button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
