'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/useAuth';
import { getIdToken } from 'firebase/auth';
import { SkeuoButton } from '@/components/shared/SkeuoButton';
import { fireConfetti } from '@/lib/effects/confetti';
import { playSuccessChime } from '@/lib/audio/soundEffects';
import { Sparkles } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

function loadScript(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(true);
      return;
    }
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
  appliedCoupon?: string;
  isFree?: boolean;
}

export function RazorpayCheckout({ course, label, color, appliedCoupon, isFree }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const router = useRouter();

  const handleFreeClaim = async () => {
    if (!user) {
      router.push(`/login?next=/pricing`);
      return;
    }

    if (!appliedCoupon) {
      setError('Coupon code missing for free claim.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/coupons/claim-free', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: appliedCoupon,
          course,
        }),
        credentials: 'include',
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'Failed to claim free course access.');
        setLoading(false);
        return;
      }

      // Play success chime & launch confetti
      playSuccessChime();
      fireConfetti();

      // Short delay for visual joy
      setTimeout(() => {
        router.push(data.redirectUrl || '/dashboard?payment=success');
      }, 700);
    } catch (err) {
      console.error('Free claim error:', err);
      setError('Network error while claiming free access.');
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (isFree) {
      return handleFreeClaim();
    }

    if (!user) {
      router.push('/login?next=/pricing');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const loaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!loaded) {
        setError('Razorpay SDK failed to load. Please check your internet connection.');
        setLoading(false);
        return;
      }

      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          course,
          couponCode: appliedCoupon || undefined,
        }),
        credentials: 'include',
      });

      if (!res.ok) {
        const data = await res.json();
        if (data.isFree) {
          // If the coupon unexpectedly made it free, switch to free claim
          return handleFreeClaim();
        }
        setError(data.error || 'Failed to create payment order');
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
              body: JSON.stringify({
                ...response,
                couponCode: appliedCoupon || undefined,
              }),
              credentials: 'include',
            });
            const result = await verifyRes.json();
            if (result.success) {
              playSuccessChime();
              fireConfetti();
              router.push('/dashboard?payment=success');
            } else {
              setError('Payment verification failed. Please contact support.');
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
      setError('Payment initiation failed. Please try again.');
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
        className={`w-full justify-center ${
          isFree
            ? '!bg-gradient-to-r !from-purple-600 !to-indigo-600 !text-white font-black shadow-lg shadow-purple-500/30'
            : ''
        }`}
        style={!isFree && color ? ({ background: color } as any) : undefined}
      >
        {isFree ? (
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-300" />
            {user ? 'Claim 100% Free Access Now' : 'Login to Claim Free Access'}
          </span>
        ) : user ? (
          label
        ) : (
          'Login to Purchase'
        )}
      </SkeuoButton>
      {error && <p className="text-xs text-[var(--bad)] text-center font-bold">{error}</p>}
    </div>
  );
}
