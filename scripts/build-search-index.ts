/**
 * Search Index Builder
 * Runs automatically as part of next build via postbuild script.
 * Generates public/search-index.json for client-side Fuse.js search.
 */

import * as fs from 'fs';
import * as path from 'path';
import { getAllChapters } from '../lib/content/math';
import { getAllScienceChapters } from '../lib/content/science';

interface SearchEntry {
  id: string;
  subject: 'math' | 'science';
  chapterN: number;
  chapterTitle: string;
  lessonId: string;
  lessonTitle: string;
  excerpt: string;
  url: string;
  keywords: string[];
}

const entries: SearchEntry[] = [];

// Math entries
const mathChapters = getAllChapters();
mathChapters.forEach((ch) => {
  ch.lessons.forEach((l) => {
    entries.push({
      id: `math-${ch.n}-${l.id}`,
      subject: 'math',
      chapterN: ch.n,
      chapterTitle: ch.title,
      lessonId: l.id,
      lessonTitle: l.title,
      excerpt: l.lede.slice(0, 150),
      url: `/math/${ch.n}/${l.id}`,
      keywords: [l.tag, l.short, ch.short, ch.key].filter(Boolean),
    });
  });

  // Chapter-level entry
  entries.push({
    id: `math-${ch.n}`,
    subject: 'math',
    chapterN: ch.n,
    chapterTitle: ch.title,
    lessonId: 'chapter',
    lessonTitle: ch.title,
    excerpt: ch.blurb,
    url: `/math/${ch.n}`,
    keywords: [ch.short, ch.key, `chapter ${ch.n}`],
  });
});

// Science entries
const scienceChapters = getAllScienceChapters();
scienceChapters.forEach((ch) => {
  ch.sections.forEach((s) => {
    entries.push({
      id: `science-${ch.n}-${s.id}`,
      subject: 'science',
      chapterN: ch.n,
      chapterTitle: ch.title,
      lessonId: s.id,
      lessonTitle: s.title,
      excerpt: s.content.slice(0, 150),
      url: `/science/${ch.n}/${s.id}`,
      keywords: s.keyConcepts.map((k) => k.term).slice(0, 5),
    });
  });

  // Chapter-level entry
  entries.push({
    id: `science-${ch.n}`,
    subject: 'science',
    chapterN: ch.n,
    chapterTitle: ch.title,
    lessonId: 'chapter',
    lessonTitle: ch.title,
    excerpt: ch.blurb,
    url: `/science/${ch.n}`,
    keywords: [ch.short, ch.key, `chapter ${ch.n}`],
  });
});

const publicDir = path.join(process.cwd(), 'public');
fs.mkdirSync(publicDir, { recursive: true });
const outputPath = path.join(publicDir, 'search-index.json');
fs.writeFileSync(outputPath, JSON.stringify(entries));

console.log(`✅ Search index: ${entries.length} entries → public/search-index.json`);
console.log(`   Math: ${mathChapters.length} chapters × lessons`);
console.log(`   Science: ${scienceChapters.length} chapters × sections`);
