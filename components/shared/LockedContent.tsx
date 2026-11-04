'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { SkeuoButton } from './SkeuoButton';

interface LockedContentProps {
  courseName: string;
  price?: number;
}

export function LockedContent({ courseName, price }: LockedContentProps) {
  return (
    <div className="relative rounded-2xl border-2 border-dashed border-[var(--rule)] p-8 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--paper)]/80 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-[var(--ap-soft)] flex items-center justify-center"
        >
          <Lock className="w-8 h-8 text-[var(--ap)]" />
        </motion.div>
        <div>
          <h3 className="font-bold text-lg text-[var(--ink)]">Premium Content</h3>
          <p className="text-[var(--muted)] text-sm mt-1">
            Unlock the full {courseName} course to access this content.
          </p>
          {price && <p className="text-[var(--gp)] font-bold text-xl mt-2">&#8377;{price}</p>}
        </div>
        <Link href="/pricing">
          <SkeuoButton variant="primary" size="lg">Unlock Now</SkeuoButton>
        </Link>
      </div>
    </div>
  );
}
