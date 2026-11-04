import type { MathChapter } from "../types";

const ch8: MathChapter = {
  n: 8, key: "ch8",
  title: "Predicting What Comes Next: Exploring Sequences and Progressions",
  short: "Sequences and Progressions",
  pageTitle: "Sequences Lab",
  blurb: "Arithmetic and geometric progressions, nth term, sum formulas, recursion, and real-world patterns.",
  heroTitle: "Sequences: <em>the next number</em>",
  heroText: "Find the pattern, predict the next term — and discover formulas that sum thousands of terms in seconds.",
  tagsHTML: '<span class="tag"><i>a</i>, <i>a</i>+<i>d</i>, <i>a</i>+2<i>d</i>…</span>',
  tags: { seq: "AP", ap: "nth term", gp: "GP", both: "Sum" },
  lessons: [
    {
      id: "l1", kind: "seq", tag: "AP", title: "Arithmetic progressions",
      ex: "Section 8.1", short: "Constant difference between terms",
      lede: "In an arithmetic progression (AP) each term differs from the previous by the same fixed amount — the common difference d.",
      body: `<p>A sequence a, a+d, a+2d, a+3d,… is an <b>arithmetic progression</b>. The first term is <i>a</i> and the <b>common difference</b> is <i>d</i> (which can be positive, negative or zero).</p>
<p>To check if a sequence is an AP, subtract consecutive terms: if the difference is always the same, it's an AP.</p>`,
      rule: { lbl: "AP", f: "a, a+d, a+2d, …  (common difference = d)" },
      widgets: ["apseq"],
      example: { q: "Is 3, 7, 11, 15, 19 an AP? Find d.", steps: ["Differences: 7-3=4, 11-7=4, 15-11=4, 19-15=4. All equal.", "Yes, it is an AP with d = 4."] },
      practice: [
        { id: "c8l1q1", type: "num", q: "Find the common difference of the AP: 5, 8, 11, 14, …", answer: 3, hint: "Subtract consecutive terms.", steps: ["8 - 5 = 3."] },
        { id: "c8l1q2", type: "mcq", q: "Which is an AP?", options: ["1, 4, 9, 16", "2, 6, 18, 54", "10, 7, 4, 1", "1, 2, 4, 8"], answer: 2, hint: "Check if consecutive differences are equal.", steps: ["10-7=3, 7-4=3, 4-1=3. Constant difference -3. AP: 10,7,4,1."] },
        { id: "c8l1q3", type: "num", q: "The 1st term of an AP is 3 and d = -2. What is the 5th term?", answer: -5, hint: "T₅ = a + 4d.", steps: ["3 + 4(-2) = 3 - 8 = -5."] },
        { id: "c8l1q4", type: "num", q: "How many terms are in the AP: 4, 9, 14, …, 104?", answer: 21, hint: "Tₙ = a + (n-1)d = 104.", steps: ["4 + (n-1)5 = 104 → (n-1) = 20 → n = 21."] },
      ],
    },
    {
      id: "l2", kind: "ap", tag: "nth term", title: "The nth term of an AP",
      ex: "Section 8.2", short: "Tₙ = a + (n-1)d",
      lede: "A simple formula gives the value of any term of an AP without listing all the terms before it.",
      body: `<p>The <i>n</i>th term of an AP is <b>Tₙ = a + (n - 1)d</b>. Here <i>a</i> is the first term and <i>d</i> is the common difference.</p>
<p>You can find a missing term or find which position a given value occupies by using this formula.</p>`,
      rule: { lbl: "nth term", f: "Tₙ = a + (n - 1)d" },
      widgets: ["nthterm"],
      example: { q: "Find the 20th term of the AP: 7, 11, 15, 19, …", steps: ["a = 7, d = 4.", "T₂₀ = 7 + 19 × 4 = 7 + 76 = 83."] },
      practice: [
        { id: "c8l2q1", type: "num", q: "Find the 15th term of AP: 2, 5, 8, …", answer: 44, hint: "T₁₅ = 2 + 14×3.", steps: ["2 + 42 = 44."] },
        { id: "c8l2q2", type: "num", q: "Which term of AP 3, 8, 13, … is 78?", answer: 16, hint: "3 + (n-1)5 = 78.", steps: ["(n-1) = 15 → n = 16."] },
        { id: "c8l2q3", type: "num", q: "The 5th term of an AP is 23 and the 10th is 43. Find d.", answer: 4, hint: "T₁₀ - T₅ = 5d.", steps: ["5d = 43 - 23 = 20 → d = 4."] },
        { id: "c8l2q4", type: "num", q: "The 3rd term is 7 and 7th term is 15. Find the 1st term.", answer: 3, hint: "Use d and T₃ = a + 2d.", steps: ["4d = 8 → d = 2. a = 7 - 2×2 = 3."] },
      ],
    },
    {
      id: "l3", kind: "gp", tag: "Sum AP", title: "Sum of an arithmetic progression",
      ex: "Section 8.3", short: "Sₙ = n/2 × (2a + (n-1)d)",
      lede: "Gauss discovered at age 10 how to sum an AP by pairing terms from each end — giving a formula that works for any AP.",
      body: `<p>Sₙ = <i>n</i>/2 × (2<i>a</i> + (<i>n</i>-1)<i>d</i>). Also written as Sₙ = <i>n</i>/2 × (first term + last term).</p>
<p>Gauss paired 1+100, 2+99, 3+98, … each pair giving 101, and there are 50 pairs: S = 50 × 101 = 5050.</p>`,
      rule: { lbl: "Sum of AP", f: "Sₙ = n/2 × (2a + (n-1)d) = n(a + l)/2" },
      widgets: ["apsum"],
      example: { q: "Find the sum of the first 20 terms of AP: 1, 3, 5, 7, …", steps: ["a = 1, d = 2, n = 20.", "S₂₀ = 20/2 × (2 + 19×2) = 10 × 40 = 400."] },
      practice: [
        { id: "c8l3q1", type: "num", q: "Sum of first 10 terms of AP: 5, 10, 15, 20, …", answer: 275, hint: "a = 5, d = 5, n = 10.", steps: ["S₁₀ = 10/2 × (10 + 9×5) = 5 × 55 = 275."] },
        { id: "c8l3q2", type: "num", q: "Find S₁₀₀ for the AP 1, 2, 3, …, 100.", answer: 5050, hint: "Gauss formula.", steps: ["100/2 × (1 + 100) = 50 × 101 = 5050."] },
        { id: "c8l3q3", type: "num", q: "Sum of AP: 7, 10, 13, … for 12 terms.", answer: 282, hint: "a = 7, d = 3, n = 12.", steps: ["S = 12/2 × (14 + 11×3) = 6 × 47 = 282."] },
        { id: "c8l3q4", type: "num", q: "How many terms of AP 9, 17, 25, … give a sum of 636?", answer: 12, hint: "636 = n/2 × (18 + (n-1)8).", steps: ["636 = n/2 × (8n + 10). 1272 = 8n² + 10n. 8n² + 10n - 1272 = 0. 4n² + 5n - 636 = 0. n = (-5 + √(25 + 10176))/8 = (-5 + 101)/8 = 12."] },
      ],
    },
    {
      id: "l4", kind: "ap", tag: "GP", title: "Geometric progressions",
      ex: "Section 8.4", short: "Constant ratio between terms",
      lede: "In a geometric progression (GP) each term is multiplied by the same fixed ratio r to get the next term.",
      body: `<p>A sequence a, ar, ar², ar³,… is a <b>geometric progression</b>. The <b>common ratio</b> is <i>r</i>.</p>
<p>To check: divide consecutive terms. If the ratio is always the same, it's a GP. r can be a fraction (for decreasing sequences) or negative.</p>`,
      rule: { lbl: "GP", f: "a, ar, ar², … (common ratio r)" },
      widgets: ["gpseq"],
      example: { q: "Is 2, 6, 18, 54 a GP? Find r.", steps: ["6/2 = 3, 18/6 = 3, 54/18 = 3. Yes, GP with r = 3."] },
      practice: [
        { id: "c8l4q1", type: "num", q: "Find the common ratio of GP: 4, 12, 36, 108.", answer: 3, hint: "Divide consecutive terms.", steps: ["12/4 = 3."] },
        { id: "c8l4q2", type: "num", q: "Find the 5th term of GP: 3, 6, 12, 24.", answer: 48, hint: "T₅ = 3 × 2⁴.", steps: ["3 × 16 = 48."] },
        { id: "c8l4q3", type: "mcq", q: "Which sequence is a GP?", options: ["1, 2, 3, 4", "1, 3, 9, 27", "5, 10, 15, 20", "2, 4, 6, 8"], answer: 1, hint: "Check for constant ratio.", steps: ["3/1 = 9/3 = 27/9 = 3. GP with r = 3."] },
        { id: "c8l4q4", type: "num", q: "The 2nd term of a GP is 6 and 4th term is 54. Find r.", answer: 3, hint: "T₄/T₂ = r².", steps: ["r² = 54/6 = 9 → r = 3."] },
      ],
    },
    {
      id: "l5", kind: "gp", tag: "GP nth term", title: "nth term and sum of GP",
      ex: "Section 8.5", short: "Tₙ = arⁿ⁻¹ and Sₙ = a(rⁿ-1)/(r-1)",
      lede: "A compact formula gives any term of a GP, and another formula sums the first n terms.",
      body: `<p>The nth term of a GP: <b>Tₙ = arⁿ⁻¹</b>. The sum of n terms: <b>Sₙ = a(rⁿ - 1)/(r - 1)</b> when r ≠ 1.</p>
<p>For r = 1, all terms are equal and Sₙ = na.</p>`,
      rule: { lbl: "GP nth term and sum", f: "Tₙ = arⁿ⁻¹ · Sₙ = a(rⁿ-1)/(r-1)" },
      widgets: ["gpsum"],
      example: { q: "Find the sum of first 5 terms of GP: 2, 6, 18, 54, …", steps: ["a = 2, r = 3.", "S₅ = 2(3⁵ - 1)/(3 - 1) = 2 × 242/2 = 242."] },
      practice: [
        { id: "c8l5q1", type: "num", q: "Find the 6th term of GP: 1, 2, 4, 8, …", answer: 32, hint: "T₆ = 1 × 2⁵.", steps: ["32."] },
        { id: "c8l5q2", type: "num", q: "Sum of first 4 terms of GP: 1, 3, 9, 27.", answer: 40, hint: "1(3⁴-1)/(3-1).", steps: ["80/2 = 40."] },
        { id: "c8l5q3", type: "num", q: "A ball bounces to 3/4 of its previous height each time. Starting at 64 cm, what height on the 4th bounce? (in cm)", answer: 27, hint: "64 × (3/4)⁴.", steps: ["64 × 81/256 = 27 cm. Actually T₄ = 64 × (3/4)³ = 64 × 27/64 = 27 cm."] },
        { id: "c8l5q4", type: "num", q: "Sum of GP: 3 + 6 + 12 + … (8 terms).", answer: 765, hint: "a = 3, r = 2, n = 8.", steps: ["3(2⁸ - 1)/(2 - 1) = 3 × 255 = 765."] },
      ],
    },
    {
      id: "l6", kind: "both", tag: "Applications", title: "Sequences in real life",
      ex: "End of chapter", short: "Interest, growth, tiling and patterns",
      lede: "Arithmetic progressions model uniform growth; geometric progressions model exponential growth and compound interest.",
      body: `<p>Simple interest creates an AP (equal amounts added). Compound interest creates a GP (multiplied by a fixed factor each year).</p>
<p>Population growth, bacterial doubling, paper folding, and savings plans all follow AP or GP patterns.</p>`,
      rule: { lbl: "Compound interest (GP)", f: "A = P × rⁿ where r = 1 + rate/100" },
      widgets: ["seqapp"],
      example: { q: "₹1000 is invested at 10% compound interest per year. What is the amount after 3 years?", steps: ["A = 1000 × (1.1)³ = 1000 × 1.331 = ₹1331."] },
      practice: [
        { id: "c8l6q1", type: "num", q: "A person saves ₹200 in month 1 and increases by ₹50 each month. Total saved in 12 months.", answer: 5700, hint: "AP: a=200, d=50, n=12.", steps: ["S₁₂ = 12/2 × (400 + 11×50) = 6 × 950 = 5700."] },
        { id: "c8l6q2", type: "num", q: "Bacteria double every hour. Starting with 100, how many after 5 hours?", answer: 3200, hint: "GP: a=100, r=2, T₆.", steps: ["100 × 2⁵ = 3200."] },
        { id: "c8l6q3", type: "num", q: "A contractor saves ₹1 on day 1, ₹2 on day 2, ₹4 on day 3, … for 10 days. Total saved (₹)?", answer: 1023, hint: "GP: a=1, r=2, n=10.", steps: ["S₁₀ = (2¹⁰ - 1) = 1023."] },
        { id: "c8l6q4", type: "num", q: "Sum of all even numbers from 2 to 200.", answer: 10100, hint: "AP: a=2, d=2, l=200, n=100.", steps: ["S = 100/2 × (2 + 200) = 50 × 202 = 10100."] },
      ],
    },
  ],
  eoc: {
    sections: [
      { title: "Quick check", note: "One formula each.", qs: [
        { id: "c8e1", type: "num", tag: "AP", q: "The 7th term of AP: 1, 4, 7, … is:", answer: 19, hint: "T₇ = 1 + 6×3.", steps: ["19."] },
        { id: "c8e2", type: "num", tag: "Sum", q: "Sum of AP: 2, 4, 6, …, 20.", answer: 110, hint: "n=10, a=2, l=20.", steps: ["10/2 × 22 = 110."] },
        { id: "c8e3", type: "num", tag: "GP", q: "5th term of GP: 2, 6, 18, …", answer: 162, hint: "T₅ = 2 × 3⁴.", steps: ["162."] },
        { id: "c8e4", type: "num", tag: "GP Sum", q: "Sum of GP: 1 + 2 + 4 + 8 + 16.", answer: 31, hint: "(2⁵-1)/(2-1).", steps: ["31."] },
      ]},
      { title: "Apply", note: "Real-world progressions.", qs: [
        { id: "c8e5", type: "num", tag: "AP", q: "How many multiples of 7 are there between 1 and 200?", answer: 28, hint: "First: 7, last: 196. n = (196-7)/7 + 1.", steps: ["(196-7)/7 + 1 = 27 + 1 = 28."] },
        { id: "c8e6", type: "num", tag: "AP", q: "The sum of three consecutive terms of an AP is 27 and their product is 504. Find the middle term.", answer: 9, hint: "Let terms be a-d, a, a+d. Sum = 3a = 27.", steps: ["a = 9. Middle term = 9."] },
      ]},
    ],
  },
  exercises: {
    sets: [
      { title: "Exercise 8.1", note: "AP basics", qs: [
        { id: "c8x1a", type: "num", q: "Find T₁₂ for AP: 8, 3, -2, …", answer: -47, hint: "d = -5.", steps: ["8 + 11×(-5) = -47."] },
        { id: "c8x1b", type: "num", q: "Find the AP with a = -5 and d = 3. What is T₁₀?", answer: 22, hint: "T₁₀ = -5 + 9×3.", steps: ["22."] },
      ]},
      { title: "Exercise 8.2", note: "Sum of AP", qs: [
        { id: "c8x2a", type: "num", q: "Find S₁₅ for AP: 4, 7, 10, …", answer: 375, hint: "S = 15/2 × (8 + 14×3).", steps: ["15/2 × 50 = 375."] },
        { id: "c8x2b", type: "num", q: "Find S₂₀ for AP where a = 3, d = 2.", answer: 440, hint: "S₂₀ = 20/2 × (6 + 19×2).", steps: ["10 × 44 = 440."] },
      ]},
    ],
  },
  warmups: {
    l1: { q: "In 2, 5, 8, 11 — what is d?", options: [2, 3, 4], answer: 3, why: "5 - 2 = 3." },
    l2: { q: "T₁ = 1, d = 3. What is T₅?", options: [11, 13, 15], answer: 13, why: "1 + 4×3 = 13." },
    l3: { q: "Sum of 1+2+3+…+10?", options: [45, 50, 55], answer: 55, why: "10×11/2 = 55." },
    l4: { q: "In 2, 6, 18, 54 — what is r?", options: [2, 3, 4], answer: 3, why: "6/2 = 3." },
    l5: { q: "T₁ = 1, r = 2. What is T₈?", options: [64, 128, 256], answer: 128, why: "2⁷ = 128." },
    l6: { q: "₹100 doubles every year. After 3 years it is:", options: [200, 400, 800], answer: 800, why: "100 × 2³ = 800." },
  },
  badges: [
    { id: "ap-master", icon: "➕", name: "AP master", lessons: ["l1", "l2", "l3"] },
    { id: "gp-master", icon: "✖️", name: "GP master", lessons: ["l4", "l5"] },
    { id: "sequence-pro", icon: "📊", name: "Sequence pro", lessons: ["l6"] },
  ],
  sprint: { name: "Sequences Sprint", goal: 12, blurb: "60s — AP, GP, nth terms, sums.", lede: "AP nth terms, GP formulas, sums. How many in a minute?", missTitle: "Questions to review:" },
  labGoal: 4,
};

export default ch8;
