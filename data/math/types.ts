export type QuestionType = "mcq" | "num" | "multi" | "order";
export type LessonKind = "seq" | "ap" | "gp" | "both";

export interface MCQQuestion {
  id: string;
  type: "mcq";
  q: string;
  options: string[];
  answer: number;
  hint?: string;
  steps?: string[];
  tag?: string;
  lesson?: string;
  tool?: string;
}

export interface NumQuestion {
  id: string;
  type: "num";
  q: string;
  answer: number;
  tol?: number;
  hint?: string;
  steps?: string[];
  tag?: string;
  lesson?: string;
  tool?: string;
}

export interface MultiQuestion {
  id: string;
  type: "multi";
  q: string;
  fields: { label: string; answer: number }[];
  hint?: string;
  steps?: string[];
  tag?: string;
  lesson?: string;
}

export interface OrderQuestion {
  id: string;
  type: "order";
  q: string;
  items: string[];
  hint?: string;
  steps?: string[];
  tag?: string;
  lesson?: string;
  shuffle?: number[];
}

export type Question =
  | MCQQuestion
  | NumQuestion
  | MultiQuestion
  | OrderQuestion;

export interface Lesson {
  id: string;
  kind: LessonKind;
  tag: string;
  title: string;
  ex: string;
  short: string;
  lede: string;
  body: string;
  rule?: { lbl: string; f: string; gp?: boolean };
  example?: { q: string; steps: string[] };
  practice: Question[];
  widgets?: string[];
  pro?: boolean;
}

export interface EOCSection {
  title: string;
  note: string;
  qs: Question[];
}

export interface ExerciseSet {
  title: string;
  note: string;
  qs: Question[];
}

export interface Badge {
  id: string;
  icon: string;
  name: string;
  lessons: string[];
}

export interface SprintConfig {
  name: string;
  goal: number;
  blurb: string;
  lede: string;
  missTitle: string;
}

export interface Warmup {
  q: string;
  options: (string | number)[];
  answer: string | number;
  why: string;
}

export interface MathChapter {
  n: number;
  key: string;
  title: string;
  short: string;
  pageTitle: string;
  blurb: string;
  heroTitle: string;
  heroText: string;
  tagsHTML: string;
  tags: Record<string, string>;
  lessons: Lesson[];
  eoc: { sections: EOCSection[] };
  exercises?: { sets: ExerciseSet[] };
  warmups?: Record<string, Warmup>;
  badges?: Badge[];
  sprint?: SprintConfig;
  recap?: string;
  recapNote?: string;
  labGoal?: number;
}
