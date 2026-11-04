'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  { text: 'Mathematics is not about numbers, but about understanding.', author: 'Unknown' },
  { text: 'The important thing is to never stop questioning.', author: 'Albert Einstein' },
  { text: 'Science is organized knowledge. Wisdom is organized life.', author: 'Immanuel Kant' },
  { text: 'Pure mathematics is the poetry of logical ideas.', author: 'Albert Einstein' },
  { text: 'The only way to learn mathematics is to do mathematics.', author: 'Paul Halmos' },
  { text: 'Somewhere, something incredible is waiting to be known.', author: 'Carl Sagan' },
];

export function MotivationalQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const quote = quotes[index];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <blockquote className="text-xl md:text-2xl font-medium text-[var(--ink)] italic mb-2">
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          <cite className="text-sm text-[var(--muted)]">&mdash; {quote.author}</cite>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
