'use client';

import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className, hover = false, onClick, ...motionProps }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl border backdrop-blur-md',
        'bg-white/80 dark:bg-white/5',
        'border-black/10 dark:border-white/10',
        'shadow-xl',
        onClick && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      whileTap={hover ? { scale: 0.97 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
