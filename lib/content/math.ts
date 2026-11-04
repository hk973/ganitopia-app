import { ALL_MATH_CHAPTERS } from '@/data/math';
import type { MathChapter, Lesson } from '@/data/math/types';

export function getAllChapters(): MathChapter[] {
  return ALL_MATH_CHAPTERS;
}

export function getChapter(n: number): MathChapter | undefined {
  return ALL_MATH_CHAPTERS.find((c) => c.n === n);
}

export function getLesson(chapterN: number, lessonId: string): Lesson | undefined {
  return getChapter(chapterN)?.lessons.find((l) => l.id === lessonId);
}

export function getChapterSlugs() {
  return ALL_MATH_CHAPTERS.map((c) => ({ chapter: String(c.n) }));
}

export function getLessonSlugs() {
  return ALL_MATH_CHAPTERS.flatMap((c) =>
    c.lessons.map((l) => ({ chapter: String(c.n), lesson: l.id }))
  );
}

export function getChapterProgress(chapterKey: string, solvedIds: Set<string>): number {
  const chapter = ALL_MATH_CHAPTERS.find((c) => c.key === chapterKey);
  if (!chapter) return 0;
  const allQIds = chapter.lessons.flatMap((l) => l.practice.map((q) => q.id));
  if (allQIds.length === 0) return 0;
  const solved = allQIds.filter((id) => solvedIds.has(id)).length;
  return Math.round((solved / allQIds.length) * 100);
}

export function getTotalQuestionCount(): number {
  return ALL_MATH_CHAPTERS.reduce((sum, ch) => {
    const lessonQs = ch.lessons.reduce((s, l) => s + l.practice.length, 0);
    const eocQs = ch.eoc.sections.reduce((s, sec) => s + sec.qs.length, 0);
    const exQs = ch.exercises?.sets.reduce((s, set) => s + set.qs.length, 0) ?? 0;
    return sum + lessonQs + eocQs + exQs;
  }, 0);
}
