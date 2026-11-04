import { ALL_SCIENCE_CHAPTERS } from '@/data/science';
import type { ScienceChapter, ScienceSection } from '@/data/science/types';

export function getAllScienceChapters(): ScienceChapter[] {
  return ALL_SCIENCE_CHAPTERS;
}

export function getScienceChapter(n: number): ScienceChapter | undefined {
  return ALL_SCIENCE_CHAPTERS.find((c) => c.n === n);
}

export function getScienceSection(chapterN: number, sectionId: string): ScienceSection | undefined {
  return getScienceChapter(chapterN)?.sections.find((s) => s.id === sectionId);
}

export function getScienceChapterSlugs() {
  return ALL_SCIENCE_CHAPTERS.map((c) => ({ chapter: String(c.n) }));
}

export function getScienceSectionSlugs() {
  return ALL_SCIENCE_CHAPTERS.flatMap((c) =>
    c.sections.map((s) => ({ chapter: String(c.n), section: s.id }))
  );
}

export function getTotalScienceQuestionCount(): number {
  return ALL_SCIENCE_CHAPTERS.reduce((sum, ch) => {
    const sectionQs = ch.sections.reduce((s, sec) => s + sec.questions.length, 0);
    const exQs = ch.ncertExercises.length;
    return sum + sectionQs + exQs;
  }, 0);
}
