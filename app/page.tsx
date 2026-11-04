export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { SubjectCards } from '@/components/home/SubjectCards';
import { StatsBar } from '@/components/home/StatsBar';
import { FeaturesBento } from '@/components/home/FeaturesBento';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { QuickAccess } from '@/components/home/QuickAccess';
import { MotivationalQuote } from '@/components/home/MotivationalQuote';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/shared/JsonLd';
import { getAllChapters } from '@/lib/content/math';
import { getAllScienceChapters } from '@/lib/content/science';

export const metadata: Metadata = {
  title: 'Ganitopia · Class 9th CBSE Math & Science — Stop Memorizing. Start Visualizing.',
  description:
    'The premier interactive Class 9 Mathematics & Science platform. 27 NCERT chapters, 27 animated concept labs, 500+ questions with hints, and the Class 9th Bible.',
  openGraph: {
    title: 'Ganitopia · Class 9 Math & Science',
    description: 'Interactive learning platform for Class 9 students. Har concept, ek prayog.',
    type: 'website',
  },
};

export default function HomePage() {
  const mathChapters = getAllChapters();
  const scienceChapters = getAllScienceChapters();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ganitopia',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ganitopia.pages.dev',
    description:
      'Interactive Class 9 Mathematics and Science learning platform with live simulation labs and the Class 9th Bible.',
  };

  return (
    <>
      <JsonLd data={websiteSchema} />
      <main className="min-h-screen bg-[var(--paper)]">
        <HeroSection />
        <StatsBar
          mathCount={mathChapters.length}
          scienceCount={scienceChapters.length}
        />
        <SubjectCards
          mathCount={mathChapters.length}
          scienceCount={scienceChapters.length}
        />
        <FeaturesBento />
        <QuickAccess
          mathChapters={mathChapters}
          scienceChapters={scienceChapters}
        />
        <TestimonialsSection />
        <MotivationalQuote />
      </main>
      <Footer />
    </>
  );
}
