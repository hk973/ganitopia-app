'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { getIdToken } from 'firebase/auth';
import { auth } from '@/lib/firebase/client';
import { SkeuoButton } from '@/components/shared/SkeuoButton';

declare global {
  interface Window {
    Razorpay: any;
  }
}

function loadScript(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(true); return; }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

interface Props {
  course: string;
  label: string;
  color?: string;
}

export function RazorpayCheckout({ course, label, color }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const router = useRouter();

  const handlePayment = async () => {
    if (!user) { router.push('/login'); return; }
    setError('');
    setLoading(true);

    try {
      const loaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!loaded) { setError('Razorpay SDK failed to load'); setLoading(false); return; }

      const idToken = await getIdToken(user);
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course }),
        credentials: 'include',
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Failed to create order');
        setLoading(false);
        return;
      }

      const { orderId, amount, currency, keyId } = await res.json();

      const options = {
        key: keyId,
        amount,
        currency,
        order_id: orderId,
        name: 'Ganitopia',
        description: `Class 9 ${course.charAt(0).toUpperCase() + course.slice(1)} Course`,
        prefill: {
          email: user.email || '',
          name: user.displayName || '',
        },
        theme: { color: color || '#2456C9' },
        modal: {
          ondismiss: () => setLoading(false),
        },
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response),
              credentials: 'include',
            });
            const result = await verifyRes.json();
            if (result.success) {
              router.push('/dashboard?payment=success');
            } else {
              setError('Payment verification failed. Contact support.');
            }
          } finally {
            setLoading(false);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment error:', err);
      setError('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <SkeuoButton
        onClick={handlePayment}
        loading={loading}
        variant="primary"
        size="lg"
        className="w-full justify-center"
        style={{ background: color || undefined } as any}
      >
        {user ? label : 'Login to Purchase'}
      </SkeuoButton>
      {error && <p className="text-xs text-[var(--bad)] text-center">{error}</p>}
    </div>
  );
}
