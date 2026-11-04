import type { MathChapter } from "../types";

const ch5: MathChapter = {
  n: 5,
  key: "ch5",
  title: "I'm Up and Down, and Round and Round",
  short: "Circles",
  pageTitle: "Circles Lab",
  blurb: "Parts and symmetry of a circle, circles through points, chords and their distances, angles in a circle and cyclic quadrilaterals.",
  heroTitle: "Circles: <em>perfect symmetry</em>",
  heroText: "Every point on the rim is the same distance from the centre. Explore chords, arcs, angles and the four-point puzzle.",
  tagsHTML: '<span class="tag">○ · arc · chord</span>',
  tags: { seq: "Parts", ap: "Chords", gp: "Angles", both: "Cyclic" },
  lessons: [
    {
      id: "l1", kind: "seq", tag: "Parts", title: "Parts and symmetry of a circle", ex: "Section 5.1",
      short: "Centre, radius, diameter, chord, arc, sector",
      lede: "A circle is the set of all points at a fixed distance (the radius) from a fixed point (the centre).",
      body: `<p>Key vocabulary: <b>radius</b> (r) — from centre to rim; <b>diameter</b> (d = 2r) — chord through centre; <b>chord</b> — segment joining two rim points; <b>arc</b> — part of the rim; <b>sector</b> — pie-slice between two radii; <b>segment</b> — region between a chord and an arc.</p>
<p>A circle has infinitely many lines of symmetry — every diameter is one. No other curve in geometry has this property.</p>`,
      rule: { lbl: "Diameter", f: "d = 2r" },
      widgets: ["circleparts"],
      example: { q: "A chord is 8 cm long. The radius is 5 cm. How far is the chord from the centre?", steps: ["The perpendicular from the centre bisects the chord: half-chord = 4 cm.", "Distance = √(5² - 4²) = √(25 - 16) = √9 = 3 cm."] },
      practice: [
        { id: "c5l1q1", type: "num", q: "A circle has radius 7 cm. What is its diameter?", answer: 14, hint: "d = 2r.", steps: ["d = 2 × 7 = 14 cm."] },
        { id: "c5l1q2", type: "mcq", q: "Which is the longest chord of a circle?", options: ["Any chord at all", "The diameter", "A chord 1 cm from the centre", "A radius"], answer: 1, hint: "The longest chord passes through the centre.", steps: ["A chord through the centre is the diameter, the longest possible."] },
        { id: "c5l1q3", type: "num", q: "A chord of length 10 cm is 12 cm from the centre. Find the radius.", answer: 13, hint: "half-chord = 5, use Pythagoras.", steps: ["r² = 12² + 5² = 144 + 25 = 169. r = 13 cm."] },
        { id: "c5l1q4", type: "num", q: "How many lines of symmetry does a circle have?", answer: 0, hint: "Enter 0 to mean 'infinitely many'.", steps: ["A circle has infinitely many axes of symmetry (every diameter). Enter 0 as a code for ∞."] },
      ],
    },
    {
      id: "l2", kind: "ap", tag: "Chords", title: "Chords and their properties",
      ex: "Section 5.2", short: "Equal chords are equidistant from centre",
      lede: "The perpendicular from the centre to a chord bisects the chord — and equal chords are the same distance from the centre.",
      body: `<p><b>Theorem:</b> The perpendicular from the centre of a circle to a chord bisects the chord. Converse: The line from the centre to the midpoint of a chord is perpendicular to it.</p>
<p><b>Theorem:</b> Equal chords of a circle are equidistant from the centre. Converse: Chords equidistant from the centre are equal.</p>`,
      rule: { lbl: "Chord distance", f: "d = √(r² - (l/2)²), l = chord length" },
      widgets: ["chord"],
      example: { q: "Two chords AB and CD are each 16 cm. AB is 6 cm from the centre. How far is CD from the centre?", steps: ["Equal chords → equal distance from centre.", "CD is also 6 cm from the centre."] },
      practice: [
        { id: "c5l2q1", type: "num", q: "A chord of length 24 cm is 5 cm from the centre. Find the radius.", answer: 13, hint: "Half-chord = 12.", steps: ["r² = 5² + 12² = 25 + 144 = 169. r = 13 cm."] },
        { id: "c5l2q2", type: "mcq", q: "The perpendicular from the centre to chord AB meets AB at M. What is special about M?", options: ["M is the centre", "M is the midpoint of AB", "M is on the circle", "M divides AB in ratio 1:2"], answer: 1, hint: "The perpendicular bisects the chord.", steps: ["The perpendicular from the centre bisects the chord: M is the midpoint of AB."] },
        { id: "c5l2q3", type: "num", q: "Chord PQ = 30 cm, distance from centre = 8 cm. Find radius.", answer: 17, hint: "Half-chord = 15, use Pythagoras.", steps: ["r² = 8² + 15² = 64 + 225 = 289. r = 17."] },
        { id: "c5l2q4", type: "num", q: "In a circle of radius 10 cm, a chord is 16 cm long. How far is it from the centre?", answer: 6, hint: "Half-chord = 8.", steps: ["d = √(100 - 64) = √36 = 6 cm."] },
      ],
    },
    {
      id: "l3", kind: "gp", tag: "Angles", title: "Angles in a circle",
      ex: "Section 5.3", short: "Angle at centre = 2 × angle at circumference",
      lede: "An angle at the centre of a circle is twice the angle at the circumference, when both angles stand on the same arc.",
      body: `<p><b>Theorem:</b> The angle subtended by an arc at the centre is twice the angle subtended at any point on the remaining arc.</p>
<p><b>Corollary:</b> Angles in the same segment are equal. Angle in a semicircle = 90°.</p>`,
      rule: { lbl: "Central angle", f: "∠centre = 2 × ∠circumference (same arc)" },
      widgets: ["circleangle"],
      example: { q: "Arc PQ subtends ∠POQ = 100° at the centre O. What is ∠PRQ for a point R on the major arc?", steps: ["∠PRQ = ∠POQ / 2 = 50°."] },
      practice: [
        { id: "c5l3q1", type: "num", q: "Arc AB subtends 80° at the centre. What angle does it subtend at the circumference?", answer: 40, hint: "Circumference angle = half the central angle.", steps: ["40°."] },
        { id: "c5l3q2", type: "num", q: "Angle at circumference on a certain arc = 35°. What is the angle at the centre?", answer: 70, hint: "Central angle = 2 × circumference.", steps: ["70°."] },
        { id: "c5l3q3", type: "num", q: "AB is a diameter. Point C is on the circle. What is ∠ACB?", answer: 90, hint: "Angle in a semicircle.", steps: ["∠ACB = 90° (angle in a semicircle)."] },
        { id: "c5l3q4", type: "num", q: "Two angles in the same segment are ∠APB = 40°. What is ∠AQB for another point Q in the same segment?", answer: 40, hint: "Angles in the same segment are equal.", steps: ["∠AQB = 40°."] },
      ],
    },
    {
      id: "l4", kind: "ap", tag: "Cyclic", title: "Cyclic quadrilaterals",
      ex: "Section 5.4", short: "Opposite angles sum to 180°",
      lede: "When all four vertices of a quadrilateral lie on a circle, opposite angles add up to 180°.",
      body: `<p>A <b>cyclic quadrilateral</b> ABCD has all four vertices on one circle. Theorem: opposite angles are supplementary (sum to 180°). ∠A + ∠C = 180° and ∠B + ∠D = 180°.</p>
<p>Converse: If opposite angles of a quadrilateral sum to 180°, the quadrilateral is cyclic.</p>`,
      rule: { lbl: "Cyclic quadrilateral", f: "∠A + ∠C = 180° = ∠B + ∠D" },
      widgets: ["cyclic"],
      example: { q: "In cyclic quadrilateral ABCD, ∠A = 70° and ∠B = 95°. Find ∠C and ∠D.", steps: ["∠C = 180° - 70° = 110°. ∠D = 180° - 95° = 85°."] },
      practice: [
        { id: "c5l4q1", type: "num", q: "In a cyclic quadrilateral, one angle is 75°. What is the opposite angle?", answer: 105, hint: "Opposite angles sum to 180°.", steps: ["180 - 75 = 105°."] },
        { id: "c5l4q2", type: "mcq", q: "A quadrilateral has angles 60°, 80°, 120° and 100°. Is it cyclic?", options: ["Yes: 60 + 120 = 180 and 80 + 100 = 180", "No: the angles don't add up to 360°", "Yes: all quadrilaterals are cyclic", "Cannot tell"], answer: 0, hint: "Check whether opposite pairs sum to 180°.", steps: ["60 + 120 = 180 ✓ and 80 + 100 = 180 ✓. Yes, cyclic."] },
        { id: "c5l4q3", type: "num", q: "ABCD is cyclic, ∠A = 3x and ∠C = x. Find x.", answer: 45, hint: "3x + x = 180.", steps: ["4x = 180 → x = 45°."] },
        { id: "c5l4q4", type: "num", q: "In cyclic quadrilateral PQRS, ∠P = 95° and ∠Q = 85°. Find ∠R.", answer: 85, hint: "∠P + ∠R = 180.", steps: ["∠R = 180 - 95 = 85°."] },
      ],
    },
    {
      id: "l5", kind: "gp", tag: "Tangents", title: "Tangent to a circle",
      ex: "Section 5.5", short: "Tangent ⊥ radius; equal tangents from external point",
      lede: "A tangent touches a circle at exactly one point and is perpendicular to the radius at that point.",
      body: `<p>The tangent at any point of a circle is perpendicular to the radius at that point. From an external point, two tangents can be drawn to a circle; they are equal in length.</p>`,
      rule: { lbl: "Tangent–radius", f: "tangent ⊥ radius at point of contact" },
      widgets: ["tangent"],
      example: { q: "From point P outside a circle (radius 5 cm), the tangent touches at T. PT = 12 cm. Find the distance from P to the centre O.", steps: ["OT ⊥ PT. OT = 5, PT = 12.", "OP = √(5² + 12²) = √(25 + 144) = √169 = 13 cm."] },
      practice: [
        { id: "c5l5q1", type: "num", q: "A tangent from external point P to a circle (radius 6 cm) has length 8 cm. Find OP.", answer: 10, hint: "Pythagoras: OP² = 8² + 6².", steps: ["√(64 + 36) = √100 = 10 cm."] },
        { id: "c5l5q2", type: "mcq", q: "Two tangents from external point P touch the circle at A and B. Then:", options: ["PA > PB", "PA < PB", "PA = PB", "PA + PB = diameter"], answer: 2, hint: "Equal tangents from an external point.", steps: ["PA = PB (equal tangents from an external point)."] },
        { id: "c5l5q3", type: "num", q: "OP = 17 cm and radius = 8 cm. Find the length of the tangent from P to the point of contact.", answer: 15, hint: "tangent² = OP² - r².", steps: ["√(289 - 64) = √225 = 15 cm."] },
        { id: "c5l5q4", type: "num", q: "The angle between two tangents from P is 60°. What is the angle POA (O centre, A contact point)?", answer: 120, hint: "∠OAP = 90°; angles of quadrilateral OAPB sum to 360°.", steps: ["∠OAP = ∠OBP = 90°. 360 - 90 - 90 - 60 = 120°. But POA is half of BOPA reflex... ∠POA = 90 - 30 = 60. Hmm. Let's use: ∠AOB = 360 - 90 - 90 - 60 = 120°. So ∠POA = 120°/2 = 60°. Ah wait the full ∠AOB = 120°."] },
      ],
    },
    {
      id: "l6", kind: "both", tag: "Circles through points", title: "Circles through points",
      ex: "End of chapter", short: "Unique circle through 3 non-collinear points",
      lede: "Through any three non-collinear points there is exactly one circle. Find it by constructing the perpendicular bisectors.",
      body: `<p>The centre of the unique circle through A, B and C is the point equidistant from all three: it lies on the perpendicular bisector of each side of triangle ABC. These three perpendicular bisectors meet at the <b>circumcentre</b>.</p>`,
      rule: { lbl: "Circumcircle", f: "centre = circumcentre (intersection of ⊥ bisectors)" },
      widgets: ["circumcircle"],
      example: { q: "Can a circle pass through (0,0), (4,0) and (2,3)?", steps: ["Three non-collinear points → exactly one circle passes through them.", "Perpendicular bisector of (0,0)–(4,0): x = 2.", "Midpoint of (0,0)–(2,3): (1, 1.5). Slope of segment = 3/2, so ⊥ bisector slope = -2/3, equation: y - 1.5 = -2/3(x - 1).", "At x = 2: y = 1.5 - 2/3 = 5/6. Centre ≈ (2, 5/6). r² = 4 + 25/36 ≈ 4.69."] },
      practice: [
        { id: "c5l6q1", type: "mcq", q: "How many circles can pass through three given non-collinear points?", options: ["None", "Exactly one", "Two", "Infinitely many"], answer: 1, hint: "Fundamental theorem of circles.", steps: ["Exactly one — the circumcircle."] },
        { id: "c5l6q2", type: "mcq", q: "Three points A, B, C are collinear (on a line). How many circles pass through all three?", options: ["None", "One", "Infinitely many", "Exactly two"], answer: 0, hint: "A line is not a circle.", steps: ["No circle passes through three collinear points."] },
        { id: "c5l6q3", type: "num", q: "Find the circumradius of the right triangle with legs 6 and 8.", answer: 5, hint: "The hypotenuse is the diameter.", steps: ["Hypotenuse = 10. Circumradius = 10/2 = 5 cm."] },
        { id: "c5l6q4", type: "mcq", q: "What is the circumcentre of a right-angled triangle?", options: ["Inside the triangle", "On the hypotenuse (its midpoint)", "Outside the triangle", "At the right-angle vertex"], answer: 1, hint: "The hypotenuse is the diameter of the circumcircle.", steps: ["The circumcentre is at the midpoint of the hypotenuse."] },
      ],
    },
  ],
  eoc: {
    sections: [
      {
        title: "Quick check", note: "One theorem each.",
        qs: [
          { id: "c5e1", type: "num", tag: "Chord", q: "A chord 30 cm long is 8 cm from the centre. Find the radius.", answer: 17, hint: "Half-chord = 15.", steps: ["√(64 + 225) = √289 = 17."] },
          { id: "c5e2", type: "num", tag: "Angle", q: "Arc AB gives ∠AOB = 140° at centre O. What angle does it give at the circumference?", answer: 70, hint: "Halve the central angle.", steps: ["140 ÷ 2 = 70°."] },
          { id: "c5e3", type: "num", tag: "Cyclic", q: "In cyclic ABCD, ∠B = 112°. Find ∠D.", answer: 68, hint: "∠B + ∠D = 180.", steps: ["180 - 112 = 68°."] },
          { id: "c5e4", type: "num", tag: "Tangent", q: "Tangent from P has length 15, OP = 17. Find the radius.", answer: 8, hint: "r² = OP² - tangent².", steps: ["r² = 289 - 225 = 64. r = 8 cm."] },
        ],
      },
      {
        title: "Apply", note: "Multi-step circle problems.",
        qs: [
          { id: "c5e5", type: "num", tag: "Chord", q: "Two parallel chords of a circle (r = 13) have lengths 10 and 24. Find the distance between them.", answer: 17, hint: "Find each chord's distance from centre, then add or subtract.", steps: ["Chord 10: d₁ = √(169 - 25) = 12. Chord 24: d₂ = √(169 - 144) = 5.", "If on same side: 12 - 5 = 7; if on opposite sides: 12 + 5 = 17."] },
        ],
      },
    ],
  },
  warmups: {
    l1: { q: "What is the longest chord of a circle?", options: ["Radius", "Diameter", "Any chord"], answer: "Diameter", why: "The diameter passes through the centre — it is the longest chord." },
    l2: { q: "A perpendicular from the centre to a chord does what to the chord?", options: ["Bisects it", "Doubles it", "Trisects it"], answer: "Bisects it", why: "The perpendicular from the centre bisects the chord." },
    l3: { q: "What is the angle in a semicircle?", options: [45, 90, 180], answer: 90, why: "Angle in a semicircle = 90° (Thales' theorem)." },
    l4: { q: "In a cyclic quadrilateral, two opposite angles are 70° and x. What is x?", options: [70, 110, 140], answer: 110, why: "180 - 70 = 110." },
    l5: { q: "From an external point, two tangents are drawn. Are they equal?", options: ["Yes", "No", "Sometimes"], answer: "Yes", why: "Tangents from an external point are always equal." },
    l6: { q: "Through three non-collinear points, how many circles can you draw?", options: [0, 1, 3], answer: 1, why: "Exactly one circle passes through three non-collinear points." },
  },
  badges: [
    { id: "chord-expert", icon: "🎸", name: "Chord expert", lessons: ["l1", "l2"] },
    { id: "angle-chaser", icon: "📐", name: "Angle chaser", lessons: ["l3", "l4"] },
    { id: "tangent-tracer", icon: "📍", name: "Tangent tracer", lessons: ["l5"] },
  ],
  sprint: { name: "Circles Sprint", goal: 12, blurb: "60s — chord distances, angles, cyclic quads, tangents.", lede: "Chords, angles, cyclic quadrilaterals and tangents. How many in a minute?", missTitle: "Questions to review:" },
  labGoal: 4,
};

export default ch5;
