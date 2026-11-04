'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '@/lib/firebase/client';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { SkeuoButton } from '@/components/shared/SkeuoButton';

function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', password: '', confirm: '', school: '' });
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirm) { setError('Passwords do not match'); return; }
    if (form.password.length < 8) { setError('Password must be at least 8 characters'); return; }
    if (!accepted) { setError('Please accept the terms and conditions'); return; }
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(cred.user, { displayName: form.name });
      try {
        await setDoc(doc(db, 'users', cred.user.uid), {
          name: form.name, email: form.email, mobile: form.mobile, class: '9', school: form.school,
          role: 'student', registeredAt: serverTimestamp(), status: 'active', paymentStatus: 'unpaid', lastLogin: serverTimestamp(),
        });
      } catch (dbErr) {
        console.warn('Firestore user profile save skipped/deferred:', dbErr);
      }
      const token = await cred.user.getIdToken();
      await fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: token }),
      });
      const nextUrl = searchParams.get('next') || '/dashboard';
      router.push(nextUrl);
    } catch (err: any) {
      console.error('Registration error:', err);
      const messages: Record<string, string> = {
        'auth/email-already-in-use': 'An account with this email already exists',
        'auth/weak-password': 'Password is too weak (min 8 characters)',
        'auth/invalid-email': 'Invalid email address',
        'auth/operation-not-allowed': 'Email/Password sign-in is not enabled in Firebase Console',
        'auth/network-request-failed': 'Network error. Please check your internet connection.',
      };
      setError(messages[err.code] || err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl bg-[var(--sheet)] border border-[var(--rule)] shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--display)' }}>Create your account</h1>
        <p className="text-sm text-[var(--muted)] mb-6">Join Ganitopia and start learning today</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input required placeholder="Full name" value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 text-sm focus:border-[var(--ap)] outline-none" />
          <input required type="email" placeholder="Email address" value={form.email} onChange={(e) => update('email', e.target.value)} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 text-sm focus:border-[var(--ap)] outline-none" />
          <input required type="tel" pattern="[0-9]{10}" placeholder="Mobile number (10 digits)" value={form.mobile} onChange={(e) => update('mobile', e.target.value)} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 text-sm focus:border-[var(--ap)] outline-none" />
          <input required type="password" minLength={8} placeholder="Password (min 8 characters)" value={form.password} onChange={(e) => update('password', e.target.value)} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 text-sm focus:border-[var(--ap)] outline-none" />
          <input required type="password" placeholder="Confirm password" value={form.confirm} onChange={(e) => update('confirm', e.target.value)} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 text-sm focus:border-[var(--ap)] outline-none" />
          <input placeholder="School name (optional)" value={form.school} onChange={(e) => update('school', e.target.value)} className="w-full rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 text-sm focus:border-[var(--ap)] outline-none" />
          <div className="text-sm text-[var(--muted)]">Class: <b>Class 9</b> (default)</div>
          <label className="flex items-start gap-2 cursor-pointer text-sm text-[var(--muted)]"><input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="accent-[var(--ap)] mt-1" /> I accept the terms and conditions</label>
          {error && <div className="rounded-lg bg-[var(--bad-soft)] text-[var(--bad)] px-4 py-2 text-sm font-medium">{error}</div>}
          <SkeuoButton type="submit" variant="primary" size="lg" loading={loading} className="w-full justify-center">Register</SkeuoButton>
        </form>
        <div className="mt-6 text-center text-sm text-[var(--muted)]">Already have an account? <Link href="/login" className="text-[var(--ap)] font-bold hover:underline">Sign in</Link></div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <Suspense fallback={<div className="p-8 text-center text-[var(--muted)]">Loading...</div>}>
        <RegisterForm />
      </Suspense>
    </div>
  );
}
