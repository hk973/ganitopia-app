import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllChapters, getChapter } from "@/lib/content/math";

export function generateStaticParams() {
  return getAllChapters().map((c) => ({ chapter: String(c.n) }));
}

export async function generateMetadata({ params }: { params: Promise<{ chapter: string }> }): Promise<Metadata> {
  const { chapter } = await params;
  const ch = getChapter(Number(chapter));
  if (!ch) return { title: "Chapter Not Found" };
  return { title: ch.title + " - Class 9 Math | Ganitopia", description: ch.blurb };
}

export default async function ChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter } = await params;
  const ch = getChapter(Number(chapter));
  if (!ch) notFound();
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <nav className="text-sm text-[var(--muted)] mb-4">
        <Link href="/math" className="hover:text-[var(--ap)]">Mathematics</Link>
        <span className="mx-2">/</span><span className="text-[var(--ink)]">Chapter {ch.n}</span>
      </nav>
      <div className="mb-8">
        <div className="text-sm font-bold text-[var(--ap)] mb-1">Chapter {ch.n}</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--display)" }}>{ch.title}</h1>
        <p className="text-[var(--muted)]">{ch.blurb}</p>
      </div>
      <h2 className="text-lg font-bold mb-3">Lessons</h2>
      <div className="flex flex-col gap-3 mb-8">
        {ch.lessons.map((l) => (
          <Link key={l.id} href={`/math/${ch.n}/${l.id}`}>
            <div className="rounded-xl border border-[var(--rule)] bg-[var(--sheet)] p-4 hover:border-[var(--ap)] hover:shadow-md transition-all flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${l.kind === "ap" ? "bg-[var(--ap-soft)] text-[var(--ap)]" : l.kind === "gp" ? "bg-[var(--gp-soft)] text-[var(--gp)]" : "bg-[var(--paper)] text-[var(--muted)]"}`}>{l.id.replace("l", "")}</div>
              <div className="flex-1 min-w-0"><h3 className="font-bold text-sm text-[var(--ink)]">{l.title}</h3><p className="text-xs text-[var(--muted)]">{l.tag} - {l.ex}</p></div>
              <span className="text-[var(--muted)]">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
      {ch.exercises && (
        <Link href={`/math/${ch.n}/exercises`} className="block mb-4">
          <div className="rounded-xl border border-[var(--rule)] bg-[var(--sheet)] p-4 hover:border-[var(--ap)] transition-all">
            <h3 className="font-bold text-sm text-[var(--ink)]">Exercises with Solutions</h3>
            <p className="text-xs text-[var(--muted)] mt-1">{ch.exercises.sets.reduce((s, set) => s + set.qs.length, 0)} questions</p>
          </div>
        </Link>
      )}
      <Link href={`/math/${ch.n}/eoc`} className="block">
        <div className="rounded-xl border border-[var(--rule)] bg-[var(--sheet)] p-4 hover:border-[var(--ap)] transition-all">
          <h3 className="font-bold text-sm text-[var(--ink)]">End-of-Chapter Exercises</h3>
          <p className="text-xs text-[var(--muted)] mt-1">{ch.eoc.sections.reduce((s, sec) => s + sec.qs.length, 0)} mixed questions</p>
        </div>
      </Link>
    </main>
  );
}