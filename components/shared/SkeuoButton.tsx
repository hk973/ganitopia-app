'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'science';

interface SkeuoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

export function SkeuoButton({
  children,
  variant = 'primary',
  size = 'md',
  loading,
  icon,
  className,
  ...props
}: SkeuoButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<Variant, string> = {
    primary:
      'bg-[var(--ap)] text-white shadow-[0_2px_0_rgba(0,0,0,0.15)] hover:brightness-110 focus-visible:ring-[var(--ap)]',
    secondary:
      'bg-[var(--gp)] text-white shadow-[0_2px_0_rgba(0,0,0,0.15)] hover:brightness-110 focus-visible:ring-[var(--gp)]',
    science:
      'bg-[var(--sci)] text-white shadow-[0_2px_0_rgba(0,0,0,0.15)] hover:brightness-110 focus-visible:ring-[var(--sci)]',
    ghost:
      'bg-transparent border border-[var(--rule)] text-[var(--ink)] hover:border-[var(--ap)] hover:text-[var(--ap)]',
    danger:
      'bg-[var(--bad)] text-white shadow-[0_2px_0_rgba(0,0,0,0.15)] hover:brightness-110',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-6 py-3',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...(props as any)}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon
      )}
      {children}
    </motion.button>
  );
}
