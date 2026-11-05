import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllScienceChapters, getScienceChapter, getScienceSection } from "@/lib/content/science";
import { ScienceSectionContent } from "@/components/science/ScienceSectionContent";

export function generateStaticParams() {
  return getAllScienceChapters().flatMap((c) => c.sections.map((s) => ({ chapter: String(c.n), section: s.id })));
}

export async function generateMetadata({ params }: { params: Promise<{ chapter: string; section: string }> }): Promise<Metadata> {
  const { chapter, section } = await params;
  const s = getScienceSection(Number(chapter), section);
  if (!s) return { title: "Section Not Found" };
  const cleanDescription = s.content
    .replace(/[#*`$]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 155);
  return { title: s.title + " - Class 9 Science | Ganitopia", description: cleanDescription };
}

export default async function ScienceSectionPage({ params }: { params: Promise<{ chapter: string; section: string }> }) {
  const { chapter, section } = await params;
  const ch = getScienceChapter(Number(chapter));
  const s = getScienceSection(Number(chapter), section);
  if (!ch || !s) notFound();
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <nav className="text-sm text-[var(--muted)] mb-4">
        <Link href="/science" className="hover:text-[var(--sci)]">Science</Link>
        <span className="mx-2">/</span>
        <Link href={`/science/${ch.n}`} className="hover:text-[var(--sci)]">Chapter {ch.n}</Link>
        <span className="mx-2">/</span><span className="text-[var(--ink)]">{s.title}</span>
      </nav>
      <ScienceSectionContent chapter={ch} section={s} />
    </main>
  );
}