'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';

interface SearchEntry {
  id: string;
  subject: 'math' | 'science';
  chapterN: number;
  chapterTitle: string;
  lessonId: string;
  lessonTitle: string;
  excerpt: string;
  url: string;
  keywords: string[];
}

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [index, setIndex] = useState<SearchEntry[]>([]);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      if (!index.length) {
        fetch('/search-index.json')
          .then((r) => r.json())
          .then(setIndex)
          .catch(() => {});
      }
    } else {
      setQuery('');
      setResults([]);
      setSelected(0);
    }
  }, [isOpen, index.length]);

  useEffect(() => {
    if (!query.trim() || !index.length) {
      setResults([]);
      return;
    }
    const fuse = new Fuse(index, {
      keys: ['lessonTitle', 'chapterTitle', 'excerpt', 'keywords'],
      threshold: 0.35,
      includeScore: true,
    });
    setResults(fuse.search(query).slice(0, 12).map((r) => r.item));
    setSelected(0);
  }, [query, index]);

  const navigate = useCallback(
    (url: string) => {
      router.push(url);
      onClose();
    },
    [router, onClose]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowDown') {
        setSelected((s) => Math.min(s + 1, results.length - 1));
        e.preventDefault();
      }
      if (e.key === 'ArrowUp') {
        setSelected((s) => Math.max(s - 1, 0));
        e.preventDefault();
      }
      if (e.key === 'Enter' && results[selected]) {
        navigate(results[selected].url);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, results, selected, navigate, onClose]);

  const mathResults = results.filter((r) => r.subject === 'math');
  const sciResults = results.filter((r) => r.subject === 'science');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-xl bg-[var(--sheet)] border border-[var(--rule)] rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--rule)]">
              <Search className="w-5 h-5 text-[var(--muted)] flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search chapters, topics, concepts..."
                className="flex-1 bg-transparent outline-none text-[var(--ink)] placeholder:text-[var(--muted)] text-base"
              />
              <button onClick={onClose} className="p-1 rounded-lg hover:bg-[var(--paper)] text-[var(--muted)]">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {!query && (
                <div className="p-4 text-center space-y-3">
                  <p className="text-[var(--muted)] text-xs">
                    Type to search across all Math and Science chapters, or jump to:
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      router.push('/bible');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-500/20 transition-all"
                  >
                    📖 The Class 9th Bible (All Formulas, Laws &amp; Pitfalls)
                  </button>
                </div>
              )}
              {query && results.length === 0 && (
                <p className="px-3 py-8 text-center text-[var(--muted)] text-sm">
                  No results for &ldquo;{query}&rdquo;
                </p>
              )}
              {mathResults.length > 0 && (
                <div className="mb-2">
                  <p className="px-3 py-1 text-xs font-bold text-[var(--ap)] uppercase tracking-widest">
                    Mathematics
                  </p>
                  {mathResults.map((r) => {
                    const globalIdx = results.indexOf(r);
                    return (
                      <button
                        key={r.id}
                        onClick={() => navigate(r.url)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl flex flex-col gap-0.5 transition-colors ${
                          globalIdx === selected ? 'bg-[var(--ap-soft)]' : 'hover:bg-[var(--paper)]'
                        }`}
                      >
                        <span className="font-semibold text-sm text-[var(--ink)]">{r.lessonTitle}</span>
                        <span className="text-xs text-[var(--muted)]">
                          {r.chapterTitle} · Chapter {r.chapterN}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
              {sciResults.length > 0 && (
                <div>
                  <p className="px-3 py-1 text-xs font-bold text-[var(--sci)] uppercase tracking-widest">
                    Science
                  </p>
                  {sciResults.map((r) => {
                    const globalIdx = results.indexOf(r);
                    return (
                      <button
                        key={r.id}
                        onClick={() => navigate(r.url)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl flex flex-col gap-0.5 transition-colors ${
                          globalIdx === selected ? 'bg-[var(--sci-soft)]' : 'hover:bg-[var(--paper)]'
                        }`}
                      >
                        <span className="font-semibold text-sm text-[var(--ink)]">{r.lessonTitle}</span>
                        <span className="text-xs text-[var(--muted)]">
                          {r.chapterTitle} · Chapter {r.chapterN}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="px-4 py-2 border-t border-[var(--rule)] flex gap-4 text-xs text-[var(--muted)]">
              <span>&uarr;&darr; navigate</span>
              <span>&#8629; open</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
