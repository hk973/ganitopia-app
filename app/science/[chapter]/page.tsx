import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllScienceChapters, getScienceChapter } from "@/lib/content/science";

export function generateStaticParams() {
  return getAllScienceChapters().map((c) => ({ chapter: String(c.n) }));
}

export async function generateMetadata({ params }: { params: Promise<{ chapter: string }> }): Promise<Metadata> {
  const { chapter } = await params;
  const ch = getScienceChapter(Number(chapter));
  if (!ch) return { title: "Chapter Not Found" };
  return { title: ch.title + " - Class 9 Science | Ganitopia", description: ch.blurb };
}

export default async function ScienceChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter } = await params;
  const ch = getScienceChapter(Number(chapter));
  if (!ch) notFound();
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <nav className="text-sm text-[var(--muted)] mb-4">
        <Link href="/science" className="hover:text-[var(--sci)]">Science</Link>
        <span className="mx-2">/</span><span className="text-[var(--ink)]">Chapter {ch.n}</span>
      </nav>
      <div className="mb-8">
        <div className="text-sm font-bold text-[var(--sci)] mb-1">Chapter {ch.n}</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--display)" }}>{ch.title}</h1>
        <p className="text-[var(--muted)]">{ch.blurb}</p>
      </div>
      <h2 className="text-lg font-bold mb-3">Sections</h2>
      <div className="flex flex-col gap-3">
        {ch.sections.map((s) => (
          <Link key={s.id} href={`/science/${ch.n}/${s.id}`}>
            <div className="rounded-xl border border-[var(--rule)] bg-[var(--sheet)] p-4 hover:border-[var(--sci)] hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: "var(--sci-soft)", color: "var(--sci)" }}>{s.id.replace("s", "")}</div>
              <div className="flex-1 min-w-0"><h3 className="font-bold text-sm text-[var(--ink)]">{s.title}</h3><p className="text-xs text-[var(--muted)]">{s.keyConcepts.length} key concepts - {s.questions.length} questions</p></div>
              <span className="text-[var(--muted)]">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}