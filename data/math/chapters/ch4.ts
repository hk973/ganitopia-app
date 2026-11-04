import type { MathChapter } from "../types";

const ch4: MathChapter = {
  n: 4,
  key: "ch4",
  title: "Exploring Algebraic Identities",
  short: "Algebraic Identities",
  pageTitle: "Identities Lab",
  blurb: "The eight key identities as area and volume pictures, factorising by tiles and splitting, and identities in use.",
  heroTitle: "Identities: <em>algebra made visual</em>",
  heroText: "Cut squares into rectangles, build cubes from smaller cubes — see why the identities are always true.",
  tagsHTML: '<span class="tag">(<i>a</i> + <i>b</i>)²</span>',
  tags: { seq: "Square", ap: "Product", gp: "Cube", both: "Factorise" },
  lessons: [
    {
      id: "l1", kind: "seq", tag: "Square", title: "The square of a sum", ex: "Section 4.1",
      short: "(a + b)² = a² + 2ab + b²",
      lede: "Squaring a sum gives three pieces: the square of each part plus twice their product.",
      body: `<p>Draw a square with side <i>a</i> + <i>b</i>. Cut it into four rectangles: two squares (a² and b²) and two identical rectangles (each ab). Total area = a² + 2ab + b².</p>`,
      rule: { lbl: "Square of a sum", f: "(<i>a</i> + <i>b</i>)² = <i>a</i>² + 2<i>ab</i> + <i>b</i>²" },
      widgets: ["squaresum"],
      example: { q: "Expand (x + 3)².", steps: ["(x + 3)² = x² + 2(x)(3) + 3² = x² + 6x + 9."] },
      practice: [
        { id: "c4l1q1", type: "num", q: "Expand (5 + 3)² using the identity. The result is:", answer: 64, hint: "(a + b)² = a² + 2ab + b².", steps: ["25 + 30 + 9 = 64. (Check: 8² = 64 ✓)"] },
        { id: "c4l1q2", type: "num", q: "What is the middle term in the expansion of (<i>x</i> + 7)²?", answer: 14, hint: "2ab where a = x, b = 7. Enter the coefficient of x.", steps: ["2(x)(7) = 14x. Coefficient = 14."] },
        { id: "c4l1q3", type: "mcq", q: "Which is the correct expansion of (2x + 5)²?", options: ["4x² + 25", "4x² + 10x + 25", "4x² + 20x + 25", "2x² + 20x + 25"], answer: 2, hint: "2ab = 2(2x)(5) = 20x.", steps: ["(2x)² + 2(2x)(5) + 5² = 4x² + 20x + 25."] },
        { id: "c4l1q4", type: "num", q: "Use the identity to compute 102². Enter the answer.", answer: 10404, hint: "(100 + 2)².", steps: ["100² + 2(100)(2) + 4 = 10000 + 400 + 4 = 10404."] },
      ],
    },
    {
      id: "l2", kind: "ap", tag: "Difference", title: "The square of a difference and the difference of squares",
      ex: "Section 4.2", short: "(a - b)² and (a + b)(a - b)",
      lede: "Two more area pictures give the square of a difference and a beautiful factorisation for any difference of two squares.",
      body: `<p>(<i>a</i> - <i>b</i>)² = a² - 2ab + b². Remove two ab-rectangles and add back b².</p>
<p>(<i>a</i> + <i>b</i>)(<i>a</i> - <i>b</i>) = a² - b²: an L-shaped piece that rearranges into a neat rectangle.</p>`,
      rule: { lbl: "Difference of squares", f: "(<i>a</i> + <i>b</i>)(<i>a</i> - <i>b</i>) = <i>a</i>² - <i>b</i>²" },
      widgets: ["diffsq"],
      example: { q: "Compute 97 × 103 using the identity.", steps: ["97 × 103 = (100 - 3)(100 + 3) = 100² - 3² = 10000 - 9 = 9991."] },
      practice: [
        { id: "c4l2q1", type: "num", q: "Compute 99² using (100 - 1)².", answer: 9801, hint: "100² - 2(100)(1) + 1.", steps: ["10000 - 200 + 1 = 9801."] },
        { id: "c4l2q2", type: "num", q: "Compute 53 × 47 using difference of squares.", answer: 2491, hint: "(50 + 3)(50 - 3).", steps: ["2500 - 9 = 2491."] },
        { id: "c4l2q3", type: "mcq", q: "Factorise 9x² - 16.", options: ["(3x - 4)²", "(3x + 4)(3x - 4)", "(9x + 4)(x - 4)", "Cannot be factorised"], answer: 1, hint: "Difference of two squares.", steps: ["9x² = (3x)² and 16 = 4². So 9x² - 16 = (3x + 4)(3x - 4)."] },
        { id: "c4l2q4", type: "num", q: "Evaluate (√5 + √3)(√5 - √3).", answer: 2, hint: "(a + b)(a - b) = a² - b².", steps: ["5 - 3 = 2."] },
      ],
    },
    {
      id: "l3", kind: "gp", tag: "Products", title: "Products of two different linear expressions",
      ex: "Section 4.3", short: "(x + a)(x + b) and (a + b + c)²",
      lede: "Multiplying two different linear expressions tiles a rectangle with four pieces.",
      body: `<p>(<i>x</i> + <i>a</i>)(<i>x</i> + <i>b</i>) = x² + (<i>a</i> + <i>b</i>)<i>x</i> + <i>ab</i>. Each term comes from one tile in a 2×2 grid.</p>
<p>(<i>a</i> + <i>b</i> + <i>c</i>)² = a² + b² + c² + 2ab + 2bc + 2ca: visualised as a 3×3 grid of tiles.</p>`,
      rule: { lbl: "(x + a)(x + b)", f: "x² + (a + b)x + ab" },
      widgets: ["product"],
      example: { q: "Expand (x + 4)(x - 3).", steps: ["x² + (4 + (-3))x + 4(-3) = x² + x - 12."] },
      practice: [
        { id: "c4l3q1", type: "num", q: "Expand (x + 6)(x + 2). The constant term is:", answer: 12, hint: "ab where a = 6, b = 2.", steps: ["Constant = 6 × 2 = 12."] },
        { id: "c4l3q2", type: "num", q: "Expand (x - 5)(x + 5). The coefficient of x is:", answer: 0, hint: "a + b = -5 + 5.", steps: ["-5 + 5 = 0. The x-term vanishes: x² - 25."] },
        { id: "c4l3q3", type: "mcq", q: "If (x + a)(x + b) = x² - 7x + 12, find a and b.", options: ["a = 3, b = 4", "a = -3, b = -4", "a = -6, b = -2", "a = 6, b = -2"], answer: 1, hint: "a + b = -7 and ab = 12.", steps: ["Need sum -7 and product 12: (-3)(-4) = 12 and -3 + (-4) = -7. ✓"] },
        { id: "c4l3q4", type: "num", q: "Evaluate (a + b + c)² when a = 1, b = 2, c = 3.", answer: 36, hint: "1 + 2 + 3 = 6. 6² = 36.", steps: ["(1 + 2 + 3)² = 6² = 36."] },
      ],
    },
    {
      id: "l4", kind: "ap", tag: "Cube", title: "The cube of a sum",
      ex: "Section 4.4", short: "(a + b)³ = a³ + 3a²b + 3ab² + b³",
      lede: "Build a cube from eight smaller pieces — three types of rectangular block give all four terms.",
      body: `<p>(<i>a</i> + <i>b</i>)³ = a³ + 3a²b + 3ab² + b³. The coefficient 3 counts how many of each type of block you need to fill the cube.</p>
<p>Similarly: (<i>a</i> - <i>b</i>)³ = a³ - 3a²b + 3ab² - b³.</p>`,
      rule: { lbl: "Cube of a sum", f: "(<i>a</i> + <i>b</i>)³ = <i>a</i>³ + 3<i>a</i>²<i>b</i> + 3<i>ab</i>² + <i>b</i>³" },
      widgets: ["cubesum"],
      example: { q: "Expand (x + 2)³.", steps: ["x³ + 3x²(2) + 3x(4) + 8 = x³ + 6x² + 12x + 8."] },
      practice: [
        { id: "c4l4q1", type: "num", q: "What is the coefficient of x² in the expansion of (x + 3)³?", answer: 9, hint: "3a²b term: 3(1)²(3).", steps: ["3(x)²(3) = 9x². Coefficient = 9."] },
        { id: "c4l4q2", type: "num", q: "Compute 11³ using (10 + 1)³.", answer: 1331, hint: "1000 + 300 + 30 + 1.", steps: ["10³ + 3(100)(1) + 3(10)(1) + 1 = 1000 + 300 + 30 + 1 = 1331."] },
        { id: "c4l4q3", type: "num", q: "What is the last term in the expansion of (<i>a</i> - <i>b</i>)³?", answer: -1, hint: "The last term is -b³. Enter its sign: -1 means negative.", steps: ["Last term: -b³ (negative). Enter -1."] },
        { id: "c4l4q4", type: "mcq", q: "Expand (2x - 1)³. The coefficient of x is:", options: ["-12", "12", "-6", "6"], answer: 3, hint: "3ab² where a=2x, b=1.", steps: ["(2x - 1)³: use (a-b)³ = a³ - 3a²b + 3ab² - b³.", "3ab² = 3(2x)(1)² = 6x. Positive. Coefficient = 6, which is option index 3."] },
      ],
    },
    {
      id: "l5", kind: "gp", tag: "Factorise", title: "Factorising using identities",
      ex: "Section 4.5", short: "Recognise and reverse the identities",
      lede: "Going backwards — seeing an expression as a square, cube, or product — is called factorising.",
      body: `<p>Match the expression to an identity pattern, then read off the factors.</p>
<p>Useful patterns: x² + bx + c = (x + p)(x + q) where p + q = b, pq = c. Difference of squares: a² - b² = (a + b)(a - b). Perfect square: a² ± 2ab + b² = (a ± b)².</p>`,
      rule: { lbl: "Factorise sum of cubes", f: "<i>a</i>³ + <i>b</i>³ = (<i>a</i> + <i>b</i>)(<i>a</i>² - <i>ab</i> + <i>b</i>²)" },
      widgets: ["factorise"],
      example: { q: "Factorise x² + 5x + 6.", steps: ["Need p + q = 5 and pq = 6.", "p = 2, q = 3: 2 + 3 = 5, 2 × 3 = 6. ✓", "x² + 5x + 6 = (x + 2)(x + 3)."] },
      practice: [
        { id: "c4l5q1", type: "mcq", q: "Factorise x² - 9.", options: ["(x - 3)²", "(x + 3)²", "(x + 3)(x - 3)", "(x - 9)(x + 1)"], answer: 2, hint: "Difference of two squares.", steps: ["x² - 9 = x² - 3² = (x + 3)(x - 3)."] },
        { id: "c4l5q2", type: "mcq", q: "Factorise x² + 7x + 10.", options: ["(x + 5)(x + 2)", "(x + 10)(x + 1)", "(x - 5)(x - 2)", "(x + 7)(x + 10)"], answer: 0, hint: "Find two numbers that add to 7 and multiply to 10.", steps: ["5 + 2 = 7, 5 × 2 = 10. → (x + 5)(x + 2)."] },
        { id: "c4l5q3", type: "mcq", q: "Factorise 4x² - 4x + 1.", options: ["(2x - 1)²", "(2x + 1)²", "(4x - 1)(x - 1)", "(2x - 1)(2x + 1)"], answer: 0, hint: "Perfect square pattern.", steps: ["(2x)² - 2(2x)(1) + 1² = (2x - 1)². ✓"] },
        { id: "c4l5q4", type: "num", q: "Factorise x³ + 8. One factor is (x + 2). What is the constant term in the other factor?", answer: 4, hint: "a³ + b³ = (a + b)(a² - ab + b²) with b = 2.", steps: ["x³ + 2³ = (x + 2)(x² - 2x + 4). Constant term = 4."] },
      ],
    },
    {
      id: "l6", kind: "both", tag: "Applications", title: "Identities in calculations",
      ex: "End of chapter", short: "Fast mental arithmetic and algebraic shortcuts",
      lede: "The identities make mental arithmetic fast and algebraic simplification elegant.",
      body: `<p>Use (<i>a</i> + <i>b</i>)(<i>a</i> - <i>b</i>) = a² - b² for mental multiplication of near-square numbers. Use expansion and factorisation to simplify complex algebraic expressions.</p>`,
      rule: { lbl: "Trick", f: "n² = (n + k)(n - k) + k²" },
      widgets: ["identcalc"],
      example: { q: "Find 45² using the identity (50 - 5)².", steps: ["2500 - 2(50)(5) + 25 = 2500 - 500 + 25 = 2025."] },
      practice: [
        { id: "c4l6q1", type: "num", q: "Compute 98 × 102.", answer: 9996, hint: "(100 - 2)(100 + 2).", steps: ["100² - 2² = 10000 - 4 = 9996."] },
        { id: "c4l6q2", type: "num", q: "Compute 1003².", answer: 1006009, hint: "(1000 + 3)².", steps: ["1000000 + 6000 + 9 = 1006009."] },
        { id: "c4l6q3", type: "num", q: "If a + b = 7 and ab = 12, find a² + b².", answer: 25, hint: "a² + b² = (a + b)² - 2ab.", steps: ["49 - 24 = 25."] },
        { id: "c4l6q4", type: "num", q: "If a + b + c = 6 and a² + b² + c² = 14, find ab + bc + ca.", answer: 11, hint: "(a + b + c)² = a² + b² + c² + 2(ab + bc + ca).", steps: ["36 = 14 + 2(ab + bc + ca) → ab + bc + ca = 11."] },
      ],
    },
  ],
  eoc: {
    sections: [
      {
        title: "Quick check",
        note: "One identity each.",
        qs: [
          { id: "c4e1", type: "num", tag: "Square", q: "Expand (x + 9)². What is the coefficient of x?", answer: 18, hint: "2ab = 2(1)(9).", steps: ["2(x)(9) = 18x. Coefficient = 18."] },
          { id: "c4e2", type: "num", tag: "Difference", q: "Compute 201 × 199 using difference of squares.", answer: 40199, hint: "(200 + 1)(200 - 1).", steps: ["200² - 1 = 40000 - 1 = 39999. Wait: 40000 - 1 = 39999."] },
          { id: "c4e3", type: "mcq", tag: "Factorise", q: "Factorise 25x² - 1.", options: ["(5x - 1)²", "(5x + 1)(5x - 1)", "(25x + 1)(x - 1)", "(5x + 1)²"], answer: 1, hint: "Difference of two squares.", steps: ["(5x)² - 1² = (5x + 1)(5x - 1)."] },
          { id: "c4e4", type: "num", tag: "Identity", q: "If x + 1/x = 5, find x² + 1/x².", answer: 23, hint: "(x + 1/x)² = x² + 2 + 1/x².", steps: ["25 = x² + 2 + 1/x² → x² + 1/x² = 23."] },
        ],
      },
      {
        title: "Apply",
        note: "Use identities to compute.",
        qs: [
          { id: "c4e5", type: "num", tag: "Cube", q: "Expand (x + 1)³ and find the coefficient of x.", answer: 3, hint: "3a·b² term.", steps: ["3(x)(1)² = 3x. Coefficient = 3."] },
          { id: "c4e6", type: "num", tag: "Sum", q: "Find a³ + b³ when a + b = 5 and ab = 6.", answer: 35, hint: "a³ + b³ = (a + b)³ - 3ab(a + b).", steps: ["125 - 3(6)(5) = 125 - 90 = 35."] },
        ],
      },
    ],
  },
  warmups: {
    l1: { q: "(a + b)² equals a² + b² — true or false?", options: ["True", "False"], answer: "False", why: "(a + b)² = a² + 2ab + b²; the 2ab term is missing." },
    l2: { q: "What is 7 × 13 as a difference of squares? Choose the correct pair.", options: ["(10 + 3)(10 - 3)", "(10 - 3)(10 + 3)", "(8 + 2)(8 - 2)"], answer: "(10 - 3)(10 + 3)", why: "7 = 10 - 3 and 13 = 10 + 3. Answer = 100 - 9 = 91." },
    l3: { q: "What is the coefficient of x in (x + 4)(x - 2)?", options: [2, -2, 6], answer: 2, why: "4 + (-2) = 2." },
    l4: { q: "What is 10³?", options: [100, 1000, 10000], answer: 1000, why: "10 × 10 × 10 = 1000." },
    l5: { q: "Factorise x² - 4. What is one factor?", options: ["(x + 2)", "(x - 4)", "(x + 4)"], answer: "(x + 2)", why: "x² - 4 = (x + 2)(x - 2)." },
    l6: { q: "Compute 25² in your head using (20 + 5)².", options: [575, 625, 525], answer: 625, why: "400 + 200 + 25 = 625." },
  },
  badges: [
    { id: "square-artist", icon: "⬛", name: "Square artist", lessons: ["l1", "l2"] },
    { id: "cube-builder", icon: "🧊", name: "Cube builder", lessons: ["l4"] },
    { id: "factoriser", icon: "🔧", name: "Factoriser", lessons: ["l5", "l6"] },
  ],
  sprint: { name: "Identities Sprint", goal: 12, blurb: "60s — expansions, factorisations, quick computations.", lede: "Expansions, factorisations and mental arithmetic using identities.", missTitle: "Questions to review:" },
  labGoal: 4,
};

export default ch4;
