import type { MathChapter } from "../types";

const ch3: MathChapter = {
  n: 3,
  key: "ch3",
  title: "The World of Numbers",
  short: "The World of Numbers",
  pageTitle: "Numbers Lab",
  blurb:
    "Integers, rational numbers and density, irrationals like √2, decimal expansions, real numbers and π.",
  heroTitle: "Numbers: <em>beyond counting</em>",
  heroText:
    "Explore the number line from whole numbers out to the irrationals — and discover that √2 cannot be written as a fraction.",
  tagsHTML: '<span class="tag">ℚ · ℝ · √2</span>',
  tags: { seq: "Integers", ap: "Rationals", gp: "Irrationals", both: "Reals" },
  lessons: [
    {
      id: "l1",
      kind: "seq",
      tag: "Integers",
      title: "Integers and the number line",
      ex: "Section 3.1",
      short: "Positive, negative, and zero on the line",
      lede: "The integers extend the counting numbers with zero and negatives — giving a number for every step left or right of zero.",
      body: `<p>The <b>integers</b> are …, -3, -2, -1, 0, 1, 2, 3, … They sit equally spaced on the <b>number line</b>. Positive integers are to the right of 0 and negative integers to the left.</p>
<p>Rules for signs: a negative × a negative = positive; negative × positive = negative. The absolute value |n| is the distance of n from 0.</p>`,
      rule: { lbl: "Absolute value", f: "|n| = n if n ≥ 0, -n if n < 0" },
      widgets: ["numline"],
      example: { q: "Arrange -5, 2, -1, 0, 3 in increasing order.", steps: ["On the number line: -5 < -1 < 0 < 2 < 3."] },
      practice: [
        { id: "c3l1q1", type: "mcq", q: "Which is largest: -10, -1, 0, -100?", options: ["-10", "-1", "0", "-100"], answer: 2, hint: "Larger means further right on the number line.", steps: ["0 is to the right of all the negative numbers."] },
        { id: "c3l1q2", type: "num", q: "Find |-17|.", answer: 17, hint: "Distance from 0.", steps: ["|-17| = 17."] },
        { id: "c3l1q3", type: "num", q: "What integer is 5 units to the left of 3 on the number line?", answer: -2, hint: "3 - 5 = ?", steps: ["3 - 5 = -2."] },
        { id: "c3l1q4", type: "num", q: "What is (-4) × (-7)?", answer: 28, hint: "Negative × negative = positive.", steps: ["(-4)(-7) = 28."] },
      ],
    },
    {
      id: "l2",
      kind: "ap",
      tag: "Rationals",
      title: "Rational numbers",
      ex: "Section 3.2",
      short: "Fractions, decimals and density",
      lede: "A rational number is any number that can be written as p/q where p and q are integers and q ≠ 0.",
      body: `<p>Every integer is rational (write it as n/1). Every terminating decimal and every repeating decimal is rational. Between any two rationals there is always another rational — the rationals are <b>dense</b> on the number line.</p>
<p>To add fractions: find a common denominator. To compare: use cross-multiplication. Every rational number has a decimal expansion that either terminates or eventually repeats.</p>`,
      rule: { lbl: "Rational", f: "p/q where p, q ∈ ℤ, q ≠ 0" },
      widgets: ["fractions"],
      example: { q: "Show that 0.333… = 1/3.", steps: ["Let x = 0.333…", "10x = 3.333…", "10x - x = 3 → 9x = 3 → x = 1/3."] },
      practice: [
        { id: "c3l2q1", type: "mcq", q: "Which is rational?", options: ["√3", "π", "-7/4", "√5"], answer: 2, hint: "Is it expressible as p/q?", steps: ["-7/4 is already p/q form: rational."] },
        { id: "c3l2q2", type: "num", q: "Convert 0.4 to a fraction in lowest terms. Enter the denominator.", answer: 5, hint: "0.4 = 4/10.", steps: ["4/10 = 2/5. Denominator = 5."] },
        { id: "c3l2q3", type: "mcq", q: "Between 1/3 and 1/2, which rational lies?", options: ["1/4", "2/5", "3/4", "1/6"], answer: 1, hint: "Convert to decimals.", steps: ["1/3 ≈ 0.333, 1/2 = 0.5. 2/5 = 0.4 lies between them."] },
        { id: "c3l2q4", type: "num", q: "Which rational lies exactly halfway between 1/4 and 3/4?", answer: 0.5, tol: 0.001, hint: "Average: (1/4 + 3/4)/2.", steps: ["(1/4 + 3/4)/2 = (4/4)/2 = 1/2 = 0.5."] },
      ],
    },
    {
      id: "l3",
      kind: "gp",
      tag: "Irrationals",
      title: "Irrational numbers",
      ex: "Section 3.3",
      short: "Numbers that cannot be written as fractions",
      lede: "Some numbers — like √2 and π — cannot be written as p/q. Their decimals go on forever without repeating.",
      body: `<p>A number is <b>irrational</b> if it is NOT rational: it cannot be written as p/q for any integers p, q.</p>
<p>The <b>Proof that √2 is irrational</b>: Suppose √2 = p/q in lowest terms. Then 2q² = p², so p² is even, so p is even — write p = 2m. Then 2q² = 4m², so q² = 2m², so q is even. But then p/q is not in lowest terms — contradiction. So √2 cannot be written as p/q.</p>
<p>Other common irrationals: √3, √5, π, e. Between any two irrationals there is a rational and vice versa.</p>`,
      rule: { lbl: "Irrational", f: "Cannot write as p/q; decimal is non-terminating, non-repeating" },
      widgets: ["sqrt2"],
      example: { q: "Is √9 rational or irrational?", steps: ["√9 = 3, which is an integer, so it is rational."] },
      practice: [
        { id: "c3l3q1", type: "mcq", q: "Which is irrational?", options: ["√4", "√9", "√16", "√7"], answer: 3, hint: "Is the number under the root a perfect square?", steps: ["4, 9, 16 are perfect squares (2², 3², 4²). √7 is not a perfect square, so √7 is irrational."] },
        { id: "c3l3q2", type: "mcq", q: "The decimal expansion of an irrational number:", options: ["Terminates", "Repeats a block", "Is non-terminating and non-repeating", "Is always positive"], answer: 2, hint: "This is the defining property.", steps: ["Non-terminating, non-repeating — this is what makes a number irrational."] },
        { id: "c3l3q3", type: "num", q: "Is (√3)² rational or irrational? Enter 1 for rational, 0 for irrational.", answer: 1, hint: "(√3)² = 3.", steps: ["(√3)² = 3, which is a rational number. Answer: 1."] },
        { id: "c3l3q4", type: "mcq", q: "Which product is rational?", options: ["√2 × √3", "√2 × √2", "√3 × √5", "π × π"], answer: 1, hint: "√a × √a = a.", steps: ["√2 × √2 = 2 (rational)."] },
      ],
    },
    {
      id: "l4",
      kind: "ap",
      tag: "Decimals",
      title: "Decimal expansions",
      ex: "Section 3.4",
      short: "Terminating, recurring and non-terminating",
      lede: "Every real number has a decimal expansion. Rational numbers terminate or recur; irrationals go on forever without a pattern.",
      body: `<p>A <b>terminating decimal</b> has a finite number of digits after the decimal point: 3/4 = 0.75. A <b>recurring decimal</b> repeats a block forever: 1/3 = 0.333…</p>
<p>To convert a recurring decimal to a fraction: let x = the decimal, multiply by 10ⁿ (where n is the length of the repeating block), subtract the original equation to eliminate the repeating part.</p>`,
      rule: { lbl: "Convert 0.ā̄ to fraction", f: "let x = decimal; multiply; subtract; solve" },
      widgets: ["decimal"],
      example: { q: "Convert 0.272727… to a fraction.", steps: ["x = 0.272727…", "100x = 27.272727…", "100x - x = 27 → 99x = 27 → x = 27/99 = 3/11."] },
      practice: [
        { id: "c3l4q1", type: "mcq", q: "Which fraction gives a terminating decimal?", options: ["1/3", "1/6", "1/8", "1/9"], answer: 2, hint: "The denominator in lowest terms should have only 2s and 5s as factors.", steps: ["8 = 2³ — only factor 2. So 1/8 = 0.125, which terminates."] },
        { id: "c3l4q2", type: "num", q: "Convert 0.5̄ (= 0.555…) to a fraction. Enter the denominator.", answer: 9, hint: "Let x = 0.555…, then 10x - x = 5.", steps: ["9x = 5 → x = 5/9. Denominator = 9."] },
        { id: "c3l4q3", type: "num", q: "Convert 0.1̄2̄ (= 0.121212…) to a fraction. Enter the numerator.", answer: 4, hint: "100x - x = 12.", steps: ["99x = 12 → x = 12/99 = 4/33. Numerator = 4."] },
        { id: "c3l4q4", type: "mcq", q: "The decimal expansion of 22/7 is:", options: ["Terminating (it stops)", "Recurring (it repeats)", "Non-terminating non-recurring (irrational)", "Exactly equal to π"], answer: 1, hint: "22/7 is a rational number.", steps: ["22/7 is rational, so its decimal expansion is recurring (not terminating)."] },
      ],
    },
    {
      id: "l5",
      kind: "gp",
      tag: "Real numbers",
      title: "Real numbers and the number line",
      ex: "Section 3.5",
      short: "ℝ = ℚ ∪ irrationals",
      lede: "The real numbers fill the entire number line — every point corresponds to exactly one real number.",
      body: `<p>The set of <b>real numbers</b> ℝ contains all rationals and all irrationals. Together they fill the number line completely — there are no gaps.</p>
<p>Operations on real numbers follow the usual rules: commutative, associative, distributive. Roots of positive numbers are positive: √a > 0 for a > 0.</p>
<p>Simplifying surds: √(ab) = √a · √b and √(a/b) = √a/√b (for a, b ≥ 0, b ≠ 0). Rationalising the denominator: multiply top and bottom by the surd.</p>`,
      rule: { lbl: "Surd rules", f: "√(ab) = √a · √b · (rationalise: × √b/√b)" },
      widgets: ["reals"],
      example: { q: "Simplify 3/√3.", steps: ["Multiply by √3/√3: (3√3)/(√3·√3) = 3√3/3 = √3."] },
      practice: [
        { id: "c3l5q1", type: "num", q: "Simplify √75. Give your answer as a·√b where b is square-free. Enter a.", answer: 5, hint: "75 = 25 × 3.", steps: ["√75 = √(25 × 3) = 5√3. a = 5."] },
        { id: "c3l5q2", type: "num", q: "Rationalise 1/√5. Your answer is √5/5. Enter the denominator.", answer: 5, hint: "Multiply numerator and denominator by √5.", steps: ["(1 × √5)/(√5 × √5) = √5/5."] },
        { id: "c3l5q3", type: "num", q: "Evaluate (√3 + 1)(√3 - 1).", answer: 2, hint: "Difference of squares: (a + b)(a - b) = a² - b².", steps: ["(√3)² - 1² = 3 - 1 = 2."] },
        { id: "c3l5q4", type: "mcq", q: "Is 2 + √3 rational or irrational?", options: ["Rational", "Irrational", "Depends on √3", "Neither"], answer: 1, hint: "Rational + irrational = ?", steps: ["2 is rational and √3 is irrational. Their sum is irrational."] },
      ],
    },
    {
      id: "l6",
      kind: "both",
      tag: "Pi",
      title: "Pi and the nature of numbers",
      ex: "End of chapter",
      short: "π is irrational; approximating reals",
      lede: "Pi (π ≈ 3.14159…) is irrational — its decimal expansion never terminates or repeats. It appears naturally in circles.",
      body: `<p>The ratio of any circle's circumference to its diameter is always the same — this constant is <b>π</b>. Archimedes showed π is between 3 10/71 and 3 1/7.</p>
<p>We use 22/7 as an approximation (accurate to 2 decimal places) or 3.14 for rough work. Modern computers have computed π to trillions of digits — no pattern has ever been found.</p>
<p>The Pythagoreans discovered that √2 is irrational. Irrationals like π and √2 are just as real as 3/4 or -5 — they sit on the number line too.</p>`,
      rule: { lbl: "Approximation of π", f: "3.14159… ≈ 22/7 (2 d.p. accurate)" },
      widgets: ["pi"],
      example: { q: "A circle has diameter 14 cm. Find its circumference using π ≈ 22/7.", steps: ["C = πd = 22/7 × 14 = 44 cm."] },
      practice: [
        { id: "c3l6q1", type: "mcq", q: "π is:", options: ["A rational number since 22/7 ≈ π", "Irrational — its decimal never repeats", "Equal to 22/7 exactly", "A whole number"], answer: 1, hint: "22/7 is only an approximation.", steps: ["22/7 is rational and only approximates π. π itself is irrational."] },
        { id: "c3l6q2", type: "num", q: "A circular pond has diameter 7 m. What is its circumference, in m? Use π ≈ 22/7.", answer: 22, hint: "C = πd.", steps: ["C = 22/7 × 7 = 22 m."] },
        { id: "c3l6q3", type: "num", q: "How many digits after the decimal does the decimal expansion of π (as currently known) terminate? Enter 0 if it never terminates.", answer: 0, hint: "π is irrational.", steps: ["π never terminates — it is irrational."] },
        { id: "c3l6q4", type: "mcq", q: "Which statement is true?", options: ["√4 is irrational", "π < 3", "Between any two reals there is another real", "22/7 = π exactly"], answer: 2, hint: "Think about the density of the reals.", steps: ["√4 = 2 (rational). π > 3. 22/7 ≠ π. The reals are dense: always another real between any two."] },
      ],
    },
  ],
  eoc: {
    sections: [
      {
        title: "Quick check",
        note: "Classify and compute.",
        qs: [
          { id: "c3e1", type: "mcq", tag: "Classify", q: "Which number is irrational?", options: ["7/4", "√49", "√11", "0.6̄"], answer: 2, hint: "Is it a perfect square?", steps: ["11 is not a perfect square, so √11 is irrational."] },
          { id: "c3e2", type: "num", tag: "Absolute value", q: "Find |-23|.", answer: 23, hint: "Distance from 0.", steps: ["|-23| = 23."] },
          { id: "c3e3", type: "num", tag: "Recurring", q: "Convert 0.7̄ (= 0.777…) to a fraction. Enter the denominator.", answer: 9, hint: "9x = 7.", steps: ["x = 7/9. Denominator = 9."] },
          { id: "c3e4", type: "num", tag: "Simplify", q: "Simplify √48 as a·√b (b square-free). Enter a.", answer: 4, hint: "48 = 16 × 3.", steps: ["√48 = 4√3. a = 4."] },
        ],
      },
      {
        title: "Apply",
        note: "Multi-step number problems.",
        qs: [
          { id: "c3e5", type: "num", tag: "Rationalise", q: "Simplify 6/√6. Enter the simplified form's coefficient.", answer: 1, hint: "6/√6 = √6.", steps: ["6/√6 = 6√6/6 = √6. Coefficient = 1."] },
          { id: "c3e6", type: "mcq", tag: "Classify", q: "Which of these is rational?", options: ["π + 1", "√2 + √3", "√4 + √9", "√2 × √3"], answer: 2, hint: "Evaluate each one.", steps: ["√4 = 2 and √9 = 3, so √4 + √9 = 5 (rational)."] },
        ],
      },
      {
        title: "Think deeper",
        note: "Proofs and puzzles.",
        qs: [
          { id: "c3e7", type: "order", tag: "Proof", q: "Show that √3 is irrational. Tap the proof steps in order.", items: ["Assume √3 = p/q in lowest terms.", "Then 3q² = p², so p² is divisible by 3, so p is divisible by 3.", "Write p = 3m. Then 3q² = 9m², so q² = 3m², so q is divisible by 3.", "But p/q in lowest terms cannot have both p and q divisible by 3 — contradiction.", "Therefore √3 is irrational."], hint: "Follow the same structure as the proof for √2.", steps: ["The proof mirrors the √2 proof with 3 replacing 2."] },
        ],
      },
    ],
  },
  warmups: {
    l1: { q: "What is -3 + 7?", options: [4, -4, 10], answer: 4, why: "Move 7 units right from -3: reach 4." },
    l2: { q: "Is 0.5 rational?", options: ["Yes", "No", "Only sometimes"], answer: "Yes", why: "0.5 = 1/2 = p/q form." },
    l3: { q: "Is √4 irrational?", options: ["Yes", "No"], answer: "No", why: "√4 = 2, which is an integer — rational." },
    l4: { q: "Does 1/7 terminate or recur?", options: ["Terminate", "Recur", "Neither"], answer: "Recur", why: "7 has factors other than 2 and 5, so 1/7 recurs." },
    l5: { q: "Simplify √12.", options: ["2√3", "3√2", "4√3"], answer: "2√3", why: "12 = 4 × 3, so √12 = 2√3." },
    l6: { q: "Which is a better approximation for π: 3.14 or 22/7?", options: ["3.14", "22/7", "Same"], answer: "22/7", why: "22/7 ≈ 3.14286, closer to π ≈ 3.14159 than 3.14." },
  },
  badges: [
    { id: "number-classifier", icon: "🔢", name: "Number classifier", lessons: ["l1", "l2", "l3"] },
    { id: "decimal-converter", icon: "♾️", name: "Decimal converter", lessons: ["l4"] },
    { id: "surd-master", icon: "√", name: "Surd master", lessons: ["l5", "l6"] },
  ],
  sprint: { name: "Numbers Sprint", goal: 12, blurb: "60s — classify numbers, simplify surds, convert decimals.", lede: "Rational vs irrational, simplifying surds, decimal conversions.", missTitle: "Questions to review:" },
  labGoal: 4,
};

export default ch3;
