export interface KeyConcept {
  term: string;
  definition: string;
  example?: string;
}

export interface Formula {
  label: string;
  latex: string;
  explanation?: string;
  unit?: string;
}

export interface Activity {
  number: string;
  title: string;
  materials?: string[];
  steps: string[];
  observation?: string;
  conclusion?: string;
}

export interface ScienceQuestion {
  id: string;
  type: 'short' | 'long' | 'mcq' | 'num';
  q: string;
  answer?: string;
  options?: string[];
  correctOption?: number;
  hint?: string;
  numAnswer?: number;
  tolerance?: number;
}

/** A real-world scenario card shown at the top of a section */
export interface RealWorldScenario {
  emoji?: string;
  title: string;
  description?: string;
  context?: string;
  /** The science concept this scenario illustrates */
  connection?: string;
  application?: string;
}

export interface WorkedExample {
  title?: string;
  problem: string;
  given?: string[];
  formulaUsed?: string;
  formula?: string;
  solutionSteps?: string[];
  steps?: string[];
  finalAnswer?: string;
  answer?: string;
}

export interface ScienceSection {
  id: string;
  title: string;
  content: string;
  /** Optional real-world scenario shown as an animated intro card */
  realWorldScenario?: RealWorldScenario;
  /** Hint to the renderer about what SVG animation to show */
  animationHint?: 'particles' | 'cell' | 'waves' | 'atoms' | 'dna' | 'force' | 'light' | 'plant' | 'water-cycle' | 'diffusion' | 'osmosis' | 'pendulum' | 'none';
  /** A list of rich paragraph blocks (extends content for longer sections) */
  contentBlocks?: string[];
  keyConcepts: KeyConcept[];
  formulas: Formula[];
  activities: Activity[];
  questions: ScienceQuestion[];
  workedExamples?: WorkedExample[];
  didYouKnow?: string;
  examTips?: string[];
}

export interface ScienceChapter {
  n: number;
  key: string;
  title: string;
  short: string;
  blurb: string;
  colorScheme: 'chemistry' | 'biology' | 'physics';
  animationType?: string;
  sections: ScienceSection[];
  keyPoints: string[];
  ncertExercises: ScienceQuestion[];
  diagrams?: string[];
}
