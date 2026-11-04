export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { Class9Bible } from '@/components/bible/Class9Bible';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Class 9th Bible · Complete NCERT Math & Science Revision | Ganitopia',
  description:
    'The ultimate Class 9 Bible: every formula, law, theorem, derivation, valency table, cell chart, and exam trap for CBSE Class 9 Mathematics & Science.',
  openGraph: {
    title: 'Class 9th Bible · Complete NCERT Revision Hub',
    description:
      'All 8 Algebraic Identities, Equations of Motion, Newton Laws, Mole Concept, Cell Organelles, and Heron Formula in one master study desk.',
    type: 'website',
  },
};

export default function BiblePage() {
  return (
    <>
      <main className="min-h-screen bg-[var(--paper)]">
        <Class9Bible />
      </main>
      <Footer />
    </>
  );
}
