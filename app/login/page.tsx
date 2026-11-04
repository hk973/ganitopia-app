'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase/client';
import { SkeuoButton } from '@/components/shared/SkeuoButton';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Check if the user is logging in with admin credentials
      try {
        const adminRes = await fetch('/api/auth/verify-admin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim(), password }),
        });

        if (adminRes.ok) {
          const adminData = await adminRes.json();
          if (adminData.isAdmin) {
            const nextUrl = searchParams.get('next') || '/admin';
            router.push(nextUrl);
            router.refresh();
            return;
          }
        }
      } catch (adminErr) {
        // Fall through to standard student authentication
      }

      // 2. Standard student sign-in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const token = await userCredential.user.getIdToken();

      // Check if user is an admin by Firebase custom claim / email
      const verifyRes = await fetch('/api/auth/verify-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: token, email: email.trim(), password }),
      });
      const verifyData = await verifyRes.json();

      await fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: token }),
      });

      if (verifyData.isAdmin) {
        const nextUrl = searchParams.get('next') || '/admin';
        router.push(nextUrl);
      } else {
        const nextUrl = searchParams.get('next') || '/dashboard';
        router.push(nextUrl);
      }
      router.refresh();
    } catch (err: any) {
      console.error('Login error:', err);
      const messages: Record<string, string> = {
        'auth/invalid-credential': 'Invalid email or password',
        'auth/user-not-found': 'No account found with this email',
        'auth/wrong-password': 'Incorrect password',
        'auth/too-many-requests': 'Too many attempts. Try again later.',
        'auth/invalid-email': 'Invalid email address',
        'auth/operation-not-allowed': 'Email/Password sign-in is not enabled in Firebase Console',
        'auth/network-request-failed': 'Network error. Please check your internet connection.',
      };
      setError(messages[err.code] || err.message || 'Login failed. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!email) { setError('Enter your email first'); return; }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch { setError('Could not send reset email'); }
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl bg-[var(--sheet)] border border-[var(--rule)] shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--display)' }}>Welcome back</h1>
        <p className="text-sm text-[var(--muted)] mb-6">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-bold mb-1 block">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 text-sm focus:border-[var(--ap)] outline-none" />
          </div>
          <div>
            <label className="text-sm font-bold mb-1 block">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Your password" className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 pr-10 text-sm focus:border-[var(--ap)] outline-none" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="accent-[var(--ap)]" /> Remember me</label>
            <button type="button" onClick={handleReset} className="text-[var(--ap)] hover:underline">Forgot password?</button>
          </div>
          {error && <div className="rounded-lg bg-[var(--bad-soft)] text-[var(--bad)] px-4 py-2 text-sm font-medium">{error}</div>}
          {resetSent && <div className="rounded-lg bg-[var(--ok-soft)] text-[var(--ok)] px-4 py-2 text-sm font-medium">Password reset email sent! Check your inbox.</div>}
          <SkeuoButton type="submit" variant="primary" size="lg" loading={loading} className="w-full justify-center">Sign In</SkeuoButton>
        </form>

        <div className="mt-6 text-center text-sm text-[var(--muted)]">
          New to Ganitopia? <Link href="/register" className="text-[var(--ap)] font-bold hover:underline">Create account</Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <Suspense fallback={<div className="p-8 text-center text-[var(--muted)]">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
