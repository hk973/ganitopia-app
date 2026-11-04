'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { SearchModal } from '@/components/shared/SearchModal';
import { useAuth } from '@/lib/hooks/useAuth';
import { toggleMute, getMuteState } from '@/lib/audio/soundEffects';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [muted, setMuted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user, isAdmin } = useAuth();

  useEffect(() => {
    setMuted(getMuteState());
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const navLinks = [
    { href: '/math', label: 'Mathematics' },
    { href: '/science', label: 'Science' },
    { href: '/bible', label: 'Class 9 Bible 📖' },
    { href: '/pricing', label: 'Pricing' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--sheet)]/90 backdrop-blur-md border-b border-[var(--rule)] shadow-sm'
            : 'bg-[var(--sheet)] border-b border-[var(--rule)]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
          <Link href="/" className="flex items-baseline gap-2 font-bold text-xl tracking-tight shrink-0">
            <span style={{ fontFamily: 'var(--display)', fontWeight: 850 }}>
              Ganit<span style={{ color: 'var(--ap)' }}>o</span>
              <span style={{ color: 'var(--gp)' }}>pia</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith(href)
                    ? 'bg-[var(--ap-soft)] text-[var(--ap)]'
                    : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--paper)]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--rule)] text-sm text-[var(--muted)] hover:border-[var(--ap)] hover:text-[var(--ap)] transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className="hidden lg:inline text-xs bg-[var(--paper)] px-1.5 py-0.5 rounded border border-[var(--rule)]">
                CtrlK
              </kbd>
            </button>

            <button
              onClick={() => {
                const nextMute = toggleMute();
                setMuted(nextMute);
              }}
              className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--paper)] transition-colors"
              aria-label={muted ? 'Unmute audio' : 'Mute audio'}
              title={muted ? 'Audio Muted (Click to enable sounds)' : 'Audio Enabled (Click to mute)'}
            >
              {muted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--paper)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {user ? (
              <Link
                href={isAdmin ? '/admin' : '/dashboard'}
                className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg bg-[var(--ap)] text-white text-sm font-bold hover:brightness-110 transition-all"
              >
                {isAdmin ? 'Admin' : 'Dashboard'}
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg bg-[var(--ap)] text-white text-sm font-bold hover:brightness-110 transition-all"
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)]"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[var(--rule)] bg-[var(--sheet)]"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-semibold text-[var(--ink)] hover:bg-[var(--paper)]"
                  >
                    {label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setSearchOpen(true);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-[var(--ink)] hover:bg-[var(--paper)] text-left"
                >
                  <Search className="w-4 h-4" /> Search
                </button>
                <Link
                  href={user ? (isAdmin ? '/admin' : '/dashboard') : '/login'}
                  onClick={() => setOpen(false)}
                  className="mt-2 px-3 py-2.5 rounded-xl bg-[var(--ap)] text-white text-sm font-bold text-center"
                >
                  {user ? (isAdmin ? 'Admin Dashboard' : 'My Dashboard') : 'Login'}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
