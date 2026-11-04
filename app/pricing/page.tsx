export const revalidate = 60; // ISR — refresh every 60 seconds

import type { Metadata } from 'next';
import { getPricingSettings } from '@/lib/settings/pricing';
import { PricingCards } from '@/components/pricing/PricingCards';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Pricing — Class 9 Math & Science | Ganitopia',
  description: 'Unlock full access to Class 9 Mathematics and Science with Ganitopia. Affordable one-time course packages.',
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams?: Promise<{ locked?: string; course?: string }>;
}) {
  const pricing = await getPricingSettings();
  const params = searchParams ? await searchParams : {};
  const isLocked = params?.locked === '1';
  const lockedCourse = params?.course;

  return (
    <>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          {isLocked && (
            <div className="inline-block mb-4 px-4 py-2 rounded-xl bg-[var(--bad-soft)] text-[var(--bad)] text-sm font-bold border border-[var(--bad)]/20">
              🔒 Purchase required to access {lockedCourse ? (lockedCourse.charAt(0).toUpperCase() + lockedCourse.slice(1)) : 'course'} lessons. Select a plan below.
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'var(--display)' }}>
            Simple, Honest Pricing
          </h1>
          <p className="text-[var(--muted)] max-w-lg mx-auto">
            {pricing.freeLessonsPerChapter && pricing.freeLessonsPerChapter > 0
              ? `First ${pricing.freeLessonsPerChapter} lessons per chapter are free. Unlock everything with a one-time course purchase.`
              : 'Unlock full access to Class 9 Mathematics and Science with a one-time course purchase.'}
          </p>
          {pricing.offerLabel && (
            <div className="inline-block mt-3 px-4 py-1 rounded-full bg-[var(--gp-soft)] text-[var(--gp)] text-sm font-bold">
              🎉 {pricing.offerLabel}
            </div>
          )}
        </div>
        <PricingCards pricing={pricing} />
      </main>
      <Footer />
    </>
  );
}
