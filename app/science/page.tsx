import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllScienceChapters } from '@/lib/content/science';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/shared/JsonLd';

export const metadata: Metadata = {
  title: 'Science — Class 9 | Ganitopia',
  description: 'Explore all chapters of Class 9 Science with interactive content, key concepts, formulas, and NCERT exercises.',
};

export default function SciencePage() {
  const chapters = getAllScienceChapters();

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Course', name: 'Class 9 Science', description: '13 chapters covering the NCERT 2026 Class 9 Science syllabus.', provider: { '@type': 'Organization', name: 'Ganitopia' } }} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--display)', color: 'var(--sci)' }}>Science</h1>
          <p className="text-[var(--muted)]">{chapters.length} chapters · NCERT 2026 syllabus with key concepts, formulas, and exercises</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((ch) => (
            <Link key={ch.n} href={`/science/${ch.n}`}>
              <div className="rounded-2xl border border-[var(--rule)] bg-[var(--sheet)] p-5 hover:border-[var(--sci)] hover:shadow-lg transition-all h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: 'var(--sci-soft)', color: 'var(--sci)' }}>{ch.n}</div>
                  <div className="flex-1 min-w-0"><h3 className="font-bold text-sm text-[var(--ink)] leading-tight">{ch.title}</h3></div>
                </div>
                <p className="text-xs text-[var(--muted)] line-clamp-2">{ch.blurb}</p>
                <div className="mt-3 text-xs font-semibold" style={{ color: 'var(--sci)' }}>{ch.sections.length} sections &rarr;</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
