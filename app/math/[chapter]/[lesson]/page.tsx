import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllChapters, getChapter, getLesson } from "@/lib/content/math";
import { LessonContent } from "@/components/math/LessonContent";

export function generateStaticParams() {
  return getAllChapters().flatMap((c) => c.lessons.map((l) => ({ chapter: String(c.n), lesson: l.id })));
}

export async function generateMetadata({ params }: { params: Promise<{ chapter: string; lesson: string }> }): Promise<Metadata> {
  const { chapter, lesson } = await params;
  const l = getLesson(Number(chapter), lesson);
  if (!l) return { title: "Lesson Not Found" };
  return { title: l.title + " - Class 9 Math | Ganitopia", description: l.lede };
}

export default async function LessonPage({ params }: { params: Promise<{ chapter: string; lesson: string }> }) {
  const { chapter, lesson } = await params;
  const ch = getChapter(Number(chapter));
  const l = getLesson(Number(chapter), lesson);
  if (!ch || !l) notFound();
  const lessonIndex = ch.lessons.findIndex((x) => x.id === lesson);
  const prev = lessonIndex > 0 ? ch.lessons[lessonIndex - 1] : null;
  const next = lessonIndex < ch.lessons.length - 1 ? ch.lessons[lessonIndex + 1] : null;
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <nav className="text-sm text-[var(--muted)] mb-4">
        <Link href="/math" className="hover:text-[var(--ap)]">Mathematics</Link>
        <span className="mx-2">/</span>
        <Link href={`/math/${ch.n}`} className="hover:text-[var(--ap)]">Chapter {ch.n}</Link>
        <span className="mx-2">/</span><span className="text-[var(--ink)]">{l.title}</span>
      </nav>
      <LessonContent chapter={ch} lesson={l} />
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-[var(--rule)]">
        {prev ? (
          <Link href={`/math/${ch.n}/${prev.id}`}>
            <div className="rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 hover:border-[var(--ap)] transition-all">
              <div className="text-xs text-[var(--muted)]">&larr; Previous</div>
              <div className="font-bold text-sm text-[var(--ink)]">{prev.title}</div>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/math/${ch.n}/${next.id}`}>
            <div className="rounded-xl border border-[var(--rule)] bg-[var(--sheet)] px-4 py-3 hover:border-[var(--ap)] transition-all text-right">
              <div className="text-xs text-[var(--muted)]">Next &rarr;</div>
              <div className="font-bold text-sm text-[var(--ink)]">{next.title}</div>
            </div>
          </Link>
        ) : <div />}
      </div>
    </main>
  );
}