import type { MathChapter } from "../types";

const ch1: MathChapter = {
  n: 1,
  key: "ch1",
  title: "Orienting Yourself: The Use of Coordinates",
  short: "Coordinates",
  pageTitle: "Coordinates Lab",
  blurb:
    "Plotting points, quadrants, mirror images, distance, midpoints and testing shapes with coordinates.",
  heroTitle: "Every point has <em>an address</em>",
  heroText:
    "Two numbers pin down any place on a flat surface. Hunt for points, fold the plane, measure with Pythagoras and find the halfway point.",
  tagsHTML: '<span class="tag">(<i>x</i>, <i>y</i>)</span>',
  tags: { seq: "Position", ap: "Plane", gp: "Plane", both: "Shapes" },
  lessons: [
    {
      id: "l1",
      kind: "seq",
      tag: "Position",
      title: "Locating a point",
      ex: "Exercise 1.1",
      short: "Two numbers fix a position",
      lede:
        "To say exactly where something is on a flat surface, you need two numbers, each measured from a fixed line.",
      body: `<p>Think of a room drawn on squared paper. Pick one corner as the starting point <b>O</b>. Run one line along the bottom wall and one up the side wall. Now any spot in the room can be named by two numbers: how far <b>across</b> from O, and how far <b>up</b>.</p>
  <p>We write these as an ordered pair <span class="m">(<i>x</i>, <i>y</i>)</span>. The first number is always the distance across and the second is the distance up. So (3, 5) and (5, 3) are different places.</p>
  <p>Two points on the same horizontal line share the same <i>y</i>, so the distance between them is just the difference of their <i>x</i> values. The same works for a vertical line with the <i>y</i> values.</p>`,
      rule: { lbl: "Ordered pair", f: "(<i>x</i>, <i>y</i>) = (across, up) from O" },
      widgets: ["hunt"],
      example: {
        q: "On a floor plan, a door runs along the bottom wall from (8, 0) to (11.5, 0). How far is the door from the left wall, and how wide is it?",
        steps: [
          "Both ends have <i>y</i> = 0, so the door lies on the bottom wall (the <i>x</i>-axis).",
          "The left wall is the <i>y</i>-axis, where <i>x</i> = 0. The nearer end has <i>x</i> = 8, so the door starts 8 units from the left wall.",
          "Width = 11.5 - 8 = 3.5 units.",
        ],
      },
      practice: [
        {
          id: "c1l1q1",
          type: "multi",
          q: "A rectangular table has three corners at (2, 3), (6, 3) and (6, 5). Find the fourth corner.",
          fields: [
            { label: "<i>x</i> =", answer: 2 },
            { label: "<i>y</i> =", answer: 5 },
          ],
          hint: "Opposite sides of a rectangle are parallel to the walls. Which corner is missing?",
          steps: [
            "(2, 3) and (6, 3) share <i>y</i> = 3: that is the bottom side.",
            "(6, 3) and (6, 5) share <i>x</i> = 6: that is the right side.",
            "The missing corner is above (2, 3) and level with (6, 5): (2, 5).",
          ],
        },
        {
          id: "c1l1q2",
          type: "num",
          q: "How far apart are the points (3, 4) and (3, 10)?",
          answer: 6,
          hint: "They have the same <i>x</i>. Look at the <i>y</i> values.",
          steps: [
            "Both points have <i>x</i> = 3, so they lie on the same vertical line.",
            "Distance = 10 - 4 = 6 units.",
          ],
        },
        {
          id: "c1l1q3",
          type: "mcq",
          q: "Is (4, 7) the same point as (7, 4)?",
          options: [
            "Yes, they use the same two numbers",
            "No: (4, 7) is 4 across and 7 up, while (7, 4) is 7 across and 4 up",
            "Only when the grid is a square",
            "Yes, the order of the numbers does not matter",
          ],
          answer: 1,
          hint: "Which number tells you how far across?",
          steps: [
            "In an ordered pair the first number is the distance across and the second is the distance up.",
            "(4, 7) and (7, 4) swap these, so they are different points (unless both numbers are equal).",
          ],
        },
        {
          id: "c1l1q4",
          type: "num",
          q: "A wall runs along the <i>x</i>-axis from (0, 0) to (12, 0). A window 4 units wide is placed exactly in the middle of this wall. What is the <i>x</i>-coordinate of its left end?",
          answer: 4,
          hint: "Find the middle of the wall first.",
          steps: [
            "The middle of the wall is at <i>x</i> = 12 ÷ 2 = 6.",
            "Half the window is 4 ÷ 2 = 2 units.",
            "Left end: 6 - 2 = 4. (The right end is at 8.)",
          ],
        },
      ],
    },
    {
      id: "l2",
      kind: "ap",
      tag: "Quadrants",
      title: "The Cartesian plane",
      ex: "Section 1.2",
      short: "Axes, origin and four quadrants",
      lede:
        "Extend both lines past O in both directions and the whole flat plane gets an address, including negative distances.",
      body: `<p>The horizontal number line is the <b><i>x</i>-axis</b> and the vertical one is the <b><i>y</i>-axis</b>. They cross at the <b>origin</b> O(0, 0). Left of O, <i>x</i> is negative. Below O, <i>y</i> is negative.</p>
  <p>The axes split the plane into four <b>quadrants</b>, numbered I to IV going anticlockwise from the top right. The signs of the two coordinates tell you the quadrant straight away.</p>
  <p>A point with one coordinate equal to 0 sits on an axis and belongs to no quadrant. This system is called the Cartesian plane, after René Descartes, who wrote about it in 1637.</p>`,
      rule: {
        lbl: "Signs",
        f: "I (+, +) · II (-, +) · III (-, -) · IV (+, -)",
      },
      widgets: ["quadrant"],
      example: {
        q: "Where do (-3, 5), (4, -2) and (0, -6) lie?",
        steps: [
          "(-3, 5): <i>x</i> negative, <i>y</i> positive, so Quadrant II.",
          "(4, -2): <i>x</i> positive, <i>y</i> negative, so Quadrant IV.",
          "(0, -6): <i>x</i> = 0, so it lies on the <i>y</i>-axis (below O), not in any quadrant.",
        ],
      },
      practice: [
        {
          id: "c1l2q1",
          type: "mcq",
          q: "In which quadrant does (-7, -2) lie?",
          options: [
            "Quadrant I",
            "Quadrant II",
            "Quadrant III",
            "Quadrant IV",
          ],
          answer: 2,
          hint: "Both coordinates are negative.",
          steps: [
            "<i>x</i> = -7 is negative (left of O).",
            "<i>y</i> = -2 is negative (below O).",
            "Left and below: Quadrant III.",
          ],
        },
        {
          id: "c1l2q2",
          type: "mcq",
          q: "A point has a positive <i>x</i>-coordinate and a negative <i>y</i>-coordinate. Where is it?",
          options: [
            "Quadrant I",
            "Quadrant II",
            "Quadrant III",
            "Quadrant IV",
          ],
          answer: 3,
          hint: "Right of O and below O.",
          steps: [
            "Positive <i>x</i>: right of the <i>y</i>-axis.",
            "Negative <i>y</i>: below the <i>x</i>-axis.",
            "Right and below: Quadrant IV.",
          ],
        },
        {
          id: "c1l2q3",
          type: "mcq",
          q: "Where does the point (0, 5) lie?",
          options: [
            "On the <i>x</i>-axis",
            "On the <i>y</i>-axis",
            "In Quadrant I",
            "In Quadrant II",
          ],
          answer: 1,
          hint: "Which coordinate is zero?",
          steps: [
            "<i>x</i> = 0 means the point is 0 units across from O.",
            "All such points lie on the <i>y</i>-axis. (5, 0) would be on the <i>x</i>-axis.",
          ],
        },
        {
          id: "c1l2q4",
          type: "mcq",
          q: "Point W is (-5, 2). Point H is somewhere on the vertical line through W. Where could H be?",
          options: [
            "Quadrant I or IV",
            "Quadrant II or III, or on the <i>x</i>-axis",
            "Only in Quadrant II",
            "Anywhere in the plane",
          ],
          answer: 1,
          hint: "Every point on that vertical line has <i>x</i> = -5.",
          steps: [
            "On the vertical line through W, every point has <i>x</i> = -5.",
            "So H is left of the <i>y</i>-axis. Its <i>y</i> can be positive (Quadrant II), negative (Quadrant III) or zero (on the <i>x</i>-axis at (-5, 0)).",
          ],
        },
      ],
    },
    {
      id: "l3",
      kind: "gp",
      tag: "Reflections",
      title: "Points on the axes and mirror images",
      ex: "Section 1.3",
      short: "Reflect in an axis by changing one sign",
      lede:
        "Fold the plane along an axis and every point lands on its mirror image. One coordinate stays and the other changes sign.",
      body: `<p>Every point on the <i>x</i>-axis has <i>y</i> = 0, like (4, 0). Every point on the <i>y</i>-axis has <i>x</i> = 0, like (0, -3).</p>
  <p>Reflecting in the <b><i>x</i>-axis</b> keeps how far across a point is, but flips up and down: (<i>x</i>, <i>y</i>) becomes (<i>x</i>, -<i>y</i>). Reflecting in the <b><i>y</i>-axis</b> flips left and right: (<i>x</i>, <i>y</i>) becomes (-<i>x</i>, <i>y</i>).</p>
  <p>Doing both reflections, one after the other, gives (-<i>x</i>, -<i>y</i>). That is the same as reflecting through the origin.</p>`,
      rule: {
        lbl: "Mirror images",
        f: "in <i>x</i>-axis: (<i>x</i>, -<i>y</i>) · in <i>y</i>-axis: (-<i>x</i>, <i>y</i>) · in O: (-<i>x</i>, -<i>y</i>)",
        gp: true,
      },
      widgets: ["mirror"],
      example: {
        q: "Reflect A(3, -5) in the <i>x</i>-axis, then reflect the result in the <i>y</i>-axis. Where does A end up?",
        steps: [
          "Reflecting in the <i>x</i>-axis changes the sign of <i>y</i>: (3, -5) → (3, 5).",
          "Reflecting in the <i>y</i>-axis changes the sign of <i>x</i>: (3, 5) → (-3, 5).",
          "Both signs changed, so this equals reflecting A through the origin.",
        ],
      },
      practice: [
        {
          id: "c1l3q1",
          type: "multi",
          q: "Find the mirror image of (-4, 6) in the <i>x</i>-axis.",
          fields: [
            { label: "<i>x</i> =", answer: -4 },
            { label: "<i>y</i> =", answer: -6 },
          ],
          hint: "Only the <i>y</i>-coordinate changes sign.",
          steps: [
            "In the <i>x</i>-axis, (<i>x</i>, <i>y</i>) → (<i>x</i>, -<i>y</i>).",
            "(-4, 6) → (-4, -6).",
          ],
        },
        {
          id: "c1l3q2",
          type: "multi",
          q: "Find the mirror image of (5, -2) in the <i>y</i>-axis.",
          fields: [
            { label: "<i>x</i> =", answer: -5 },
            { label: "<i>y</i> =", answer: -2 },
          ],
          hint: "Only the <i>x</i>-coordinate changes sign.",
          steps: [
            "In the <i>y</i>-axis, (<i>x</i>, <i>y</i>) → (-<i>x</i>, <i>y</i>).",
            "(5, -2) → (-5, -2).",
          ],
        },
        {
          id: "c1l3q3",
          type: "mcq",
          q: "How are P(2, 9) and Q(2, -9) related?",
          options: [
            "Mirror images in the <i>x</i>-axis",
            "Mirror images in the <i>y</i>-axis",
            "Mirror images through the origin",
            "They are not mirror images",
          ],
          answer: 0,
          hint: "Which coordinate is the same?",
          steps: [
            "Same <i>x</i>, opposite <i>y</i>.",
            "That is exactly what reflecting in the <i>x</i>-axis does.",
          ],
        },
        {
          id: "c1l3q4",
          type: "num",
          q: "The point (<i>k</i> - 3, 8) lies on the <i>y</i>-axis. Find <i>k</i>.",
          answer: 3,
          hint: "What is the <i>x</i>-coordinate of every point on the <i>y</i>-axis?",
          steps: [
            "On the <i>y</i>-axis, <i>x</i> = 0.",
            "<i>k</i> - 3 = 0, so <i>k</i> = 3.",
          ],
        },
      ],
    },
    {
      id: "l4",
      kind: "ap",
      tag: "Distance",
      title: "Distance between two points",
      ex: "Section 1.4",
      short: "Baudhāyana–Pythagoras on the grid",
      lede:
        "Any two points are the ends of the slanted side of a right triangle whose other sides run along the grid.",
      body: `<p>If two points share a <i>y</i> value, the distance between them is the difference of the <i>x</i> values. If they share an <i>x</i> value, use the difference of the <i>y</i> values.</p>
  <p>Otherwise, draw a horizontal line from one point and a vertical line from the other. They meet at a right angle. The two short sides have lengths |<i>x</i><sub>2</sub> - <i>x</i><sub>1</sub>| and |<i>y</i><sub>2</sub> - <i>y</i><sub>1</sub>|, and the Baudhāyana–Pythagoras theorem gives the slanted side.</p>
  <p>The distance of P(<i>x</i>, <i>y</i>) from the origin is a special case: √(<i>x</i>² + <i>y</i>²).</p>`,
      rule: {
        lbl: "Distance formula",
        f: "PQ = √[(<i>x</i><sub>2</sub> - <i>x</i><sub>1</sub>)² + (<i>y</i><sub>2</sub> - <i>y</i><sub>1</sub>)²]",
      },
      widgets: ["distance"],
      example: {
        q: "Find the distance between A(-2, 1) and B(4, 9).",
        steps: [
          "Across: 4 - (-2) = 6. Up: 9 - 1 = 8.",
          "AB² = 6² + 8² = 36 + 64 = 100.",
          "AB = √100 = 10 units.",
        ],
      },
      practice: [
        {
          id: "c1l4q1",
          type: "num",
          q: "Find the distance between (1, 2) and (4, 6).",
          answer: 5,
          hint: "Across 3, up 4.",
          steps: ["Δ<i>x</i> = 3, Δ<i>y</i> = 4.", "Distance = √(9 + 16) = √25 = 5."],
        },
        {
          id: "c1l4q2",
          type: "num",
          q: "How far is the point (-5, 12) from the origin?",
          answer: 13,
          hint: "Use √(<i>x</i>² + <i>y</i>²).",
          steps: ["√((-5)² + 12²) = √(25 + 144) = √169 = 13."],
        },
        {
          id: "c1l4q3",
          type: "num",
          q: "Find the distance between (-3, 7) and (5, 7).",
          answer: 8,
          hint: "Same <i>y</i>. No formula needed.",
          steps: ["Both points have <i>y</i> = 7.", "Distance = 5 - (-3) = 8."],
        },
        {
          id: "c1l4q4",
          type: "num",
          q: "A triangle has vertices A(1, 1), B(7, 1) and C(7, 9). Find the length of AC.",
          answer: 10,
          hint: "AB is horizontal and BC is vertical, so the angle at B is a right angle.",
          steps: [
            "AB = 7 - 1 = 6 and BC = 9 - 1 = 8.",
            "AC = √(6² + 8²) = √100 = 10.",
          ],
        },
      ],
    },
    {
      id: "l5",
      kind: "gp",
      tag: "Midpoint",
      title: "The midpoint of a segment",
      ex: "Section 1.5",
      short: "Average the x values and the y values",
      lede:
        "The point exactly halfway between two points is found by averaging: half way across and half way up.",
      body: `<p>Halfway between 2 and 10 on a number line is (2 + 10)/2 = 6. On the plane we do this twice: once for the <i>x</i> values and once for the <i>y</i> values.</p>
  <p>The midpoint is useful for the centre of a room or table, the centre of a circle when you know the ends of a diameter, and for finding a missing end of a segment.</p>`,
      rule: {
        lbl: "Midpoint",
        f: "M = ( (<i>x</i><sub>1</sub> + <i>x</i><sub>2</sub>)/2 , (<i>y</i><sub>1</sub> + <i>y</i><sub>2</sub>)/2 )",
        gp: true,
      },
      widgets: ["midpoint"],
      example: {
        q: "M(2, 3) is the midpoint of AB, and A is (-1, 5). Find B.",
        steps: [
          "Let B = (<i>p</i>, <i>q</i>). Then (-1 + <i>p</i>)/2 = 2 and (5 + <i>q</i>)/2 = 3.",
          "-1 + <i>p</i> = 4, so <i>p</i> = 5. 5 + <i>q</i> = 6, so <i>q</i> = 1.",
          "B = (5, 1). Check: the average of (-1, 5) and (5, 1) is (2, 3).",
        ],
      },
      practice: [
        {
          id: "c1l5q1",
          type: "multi",
          q: "Find the midpoint of (2, 7) and (8, -1).",
          fields: [
            { label: "<i>x</i> =", answer: 5 },
            { label: "<i>y</i> =", answer: 3 },
          ],
          hint: "Average each coordinate.",
          steps: ["<i>x</i>: (2 + 8)/2 = 5.", "<i>y</i>: (7 + (-1))/2 = 3.", "M = (5, 3)."],
        },
        {
          id: "c1l5q2",
          type: "multi",
          q: "Find the midpoint of (-6, -2) and (0, 4).",
          fields: [
            { label: "<i>x</i> =", answer: -3 },
            { label: "<i>y</i> =", answer: 1 },
          ],
          hint: "Average each coordinate.",
          steps: ["<i>x</i>: (-6 + 0)/2 = -3.", "<i>y</i>: (-2 + 4)/2 = 1."],
        },
        {
          id: "c1l5q3",
          type: "multi",
          q: "M(3, -2) is the midpoint of AB, and A is (1, 4). Find B.",
          fields: [
            { label: "<i>x</i> =", answer: 5 },
            { label: "<i>y</i> =", answer: -8 },
          ],
          hint: "Double the midpoint, then subtract A.",
          steps: [
            "<i>x</i>: 2 × 3 - 1 = 5.",
            "<i>y</i>: 2 × (-2) - 4 = -8.",
            "B = (5, -8).",
          ],
        },
        {
          id: "c1l5q4",
          type: "multi",
          q: "A rectangular hall has opposite corners at (0, 0) and (14, 10). A lamp hangs exactly above the centre of the floor. Where is the centre?",
          fields: [
            { label: "<i>x</i> =", answer: 7 },
            { label: "<i>y</i> =", answer: 5 },
          ],
          hint: "The centre of a rectangle is the midpoint of a diagonal.",
          steps: [
            "The diagonals of a rectangle bisect each other.",
            "Centre = midpoint of (0, 0) and (14, 10) = (7, 5).",
          ],
        },
      ],
    },
    {
      id: "l6",
      kind: "both",
      tag: "Shapes",
      title: "Collinear points and shapes",
      ex: "End of chapter",
      short: "Test lines, triangles and rectangles",
      lede:
        "With distances and coordinates you can test whether points lie on one line and what kind of triangle or quadrilateral they make.",
      body: `<p>Three points are <b>collinear</b> if they lie on one straight line. Find all three distances: if the two shorter ones add up exactly to the longest, the middle point lies on the segment between the others. Another test: the rise ÷ run between A and B equals the rise ÷ run between B and C.</p>
  <p>For a triangle, compare side lengths. Two equal sides make it <b>isosceles</b>. If the squares of the two shorter sides add up to the square of the longest, it has a <b>right angle</b> (Baudhāyana–Pythagoras in reverse).</p>
  <p>Work with squared distances where you can. They are whole numbers, so comparisons are exact.</p>`,
      rule: {
        lbl: "Collinear test",
        f: "AB + BC = AC &nbsp;or&nbsp; (rise ÷ run)<sub>AB</sub> = (rise ÷ run)<sub>BC</sub>",
      },
      widgets: ["collinear"],
      example: {
        q: "Are A(1, 2), B(4, 6) and C(10, 14) collinear?",
        steps: [
          "AB = √(3² + 4²) = 5. BC = √(6² + 8²) = 10. AC = √(9² + 12²) = 15.",
          "AB + BC = 5 + 10 = 15 = AC.",
          "So B lies on segment AC, and the three points are collinear. (The slopes agree too: 4/3 and 8/6.)",
        ],
      },
      practice: [
        {
          id: "c1l6q1",
          type: "mcq",
          q: "Are (0, 0), (3, 4) and (6, 9) collinear?",
          options: [
            "Yes: the distances 5 and 5 add up to 10",
            "No: the rise ÷ run is 4/3 for the first step and 5/3 for the second",
            "Yes: all three are in Quadrant I",
            "Cannot be decided without a graph",
          ],
          answer: 1,
          hint: "Compare rise ÷ run between consecutive points.",
          steps: [
            "(0, 0) to (3, 4): rise 4, run 3, so 4/3.",
            "(3, 4) to (6, 9): rise 5, run 3, so 5/3.",
            "The slopes differ, so the points do not lie on one line.",
          ],
        },
        {
          id: "c1l6q2",
          type: "num",
          q: "The points (1, 3), (4, 9) and (<i>k</i>, 15) are collinear. Find <i>k</i>.",
          answer: 7,
          hint: "From (1, 3) to (4, 9) the line rises 2 for every 1 across.",
          steps: [
            "Slope from (1, 3) to (4, 9): (9 - 3)/(4 - 1) = 2.",
            "From (4, 9) to (<i>k</i>, 15) the rise is 6, so the run must be 3.",
            "<i>k</i> = 4 + 3 = 7.",
          ],
        },
        {
          id: "c1l6q3",
          type: "mcq",
          q: "What kind of triangle has vertices A(0, 0), B(4, 0) and C(0, 3)?",
          options: [
            "Equilateral",
            "Right-angled and isosceles",
            "Right-angled with three different sides",
            "Obtuse-angled",
          ],
          answer: 2,
          hint: "AB lies on the <i>x</i>-axis and AC on the <i>y</i>-axis.",
          steps: [
            "AB = 4 and AC = 3, at a right angle at A.",
            "BC = √(16 + 9) = 5.",
            "Sides 3, 4, 5: right-angled and scalene.",
          ],
        },
        {
          id: "c1l6q4",
          type: "mcq",
          q: "What kind of triangle is P(1, 1), Q(5, 1), R(3, 5)?",
          options: ["Isosceles", "Equilateral", "Right-angled", "The points are collinear"],
          answer: 0,
          hint: "Find PR² and QR².",
          steps: [
            "PQ = 4.",
            "PR² = 2² + 4² = 20 and QR² = 2² + 4² = 20.",
            "PR = QR, so the triangle is isosceles. (16 + 20 ≠ 20, so it has no right angle.)",
          ],
        },
        {
          id: "c1l6q5",
          type: "multi",
          q: "A square ABCD has A(1, 1), B(5, 1) and C(5, 5). Find D.",
          fields: [
            { label: "<i>x</i> =", answer: 1 },
            { label: "<i>y</i> =", answer: 5 },
          ],
          hint: "D is above A and level with C.",
          steps: [
            "AB is horizontal (length 4) and BC is vertical (length 4).",
            "D must be 4 units above A: D = (1, 5).",
          ],
        },
      ],
    },
  ],
  eoc: {
    sections: [
      {
        title: "Quick check",
        note: "One idea each.",
        qs: [
          {
            id: "c1e1",
            lesson: "l2",
            type: "mcq",
            tag: "Quadrants",
            q: "Which point lies in Quadrant II?",
            options: ["(3, -1)", "(-2, 5)", "(-4, -4)", "(0, 6)"],
            answer: 1,
            hint: "Quadrant II is left of the <i>y</i>-axis and above the <i>x</i>-axis.",
            steps: [
              "Quadrant II needs <i>x</i> < 0 and <i>y</i> > 0.",
              "Only (-2, 5) fits. (0, 6) is on the <i>y</i>-axis.",
            ],
          },
          {
            id: "c1e2",
            lesson: "l3",
            type: "multi",
            tag: "Reflections",
            q: "Find the mirror image of (-7, 3) in the <i>y</i>-axis.",
            fields: [
              { label: "<i>x</i> =", answer: 7 },
              { label: "<i>y</i> =", answer: 3 },
            ],
            hint: "Change the sign of <i>x</i>.",
            steps: ["(<i>x</i>, <i>y</i>) → (-<i>x</i>, <i>y</i>), so (-7, 3) → (7, 3)."],
          },
          {
            id: "c1e3",
            lesson: "l4",
            type: "num",
            tag: "Distance",
            q: "Find the distance between (-1, -2) and (5, 6).",
            answer: 10,
            hint: "Across 6, up 8.",
            steps: ["Δ<i>x</i> = 6, Δ<i>y</i> = 8.", "√(36 + 64) = √100 = 10."],
          },
          {
            id: "c1e4",
            lesson: "l5",
            type: "multi",
            tag: "Midpoint",
            q: "Find the midpoint of (-3, 8) and (9, -4).",
            fields: [
              { label: "<i>x</i> =", answer: 3 },
              { label: "<i>y</i> =", answer: 2 },
            ],
            hint: "Average each coordinate.",
            steps: ["(-3 + 9)/2 = 3 and (8 + (-4))/2 = 2.", "M = (3, 2)."],
          },
        ],
      },
      {
        title: "Apply",
        note: "Two-step questions.",
        qs: [
          {
            id: "c1e5",
            lesson: "l4",
            type: "num",
            tag: "Distance",
            q: "Find the perimeter of the triangle with vertices (0, 0), (8, 0) and (8, 6).",
            answer: 24,
            hint: "Two sides run along the grid. Use the distance formula for the third.",
            steps: [
              "Sides along the grid: 8 and 6.",
              "Slanted side: √(8² + 6²) = 10.",
              "Perimeter = 8 + 6 + 10 = 24 units.",
            ],
          },
          {
            id: "c1e6",
            lesson: "l1",
            type: "multi",
            tag: "Position",
            q: "ABCD is a rectangle with A(-2, -1), B(4, -1) and C(4, 3). Find D.",
            fields: [
              { label: "<i>x</i> =", answer: -2 },
              { label: "<i>y</i> =", answer: 3 },
            ],
            hint: "D is above A and level with C.",
            steps: [
              "AB is horizontal and BC is vertical.",
              "D has the <i>x</i> of A and the <i>y</i> of C: (-2, 3).",
            ],
          },
          {
            id: "c1e7",
            lesson: "l4",
            type: "num",
            tag: "Distance",
            q: "The point (<i>a</i>, 4) lies in Quadrant I and is 5 units from (1, 0). Find <i>a</i>.",
            answer: 4,
            hint: "(<i>a</i> - 1)² + 4² = 25.",
            steps: [
              "(<i>a</i> - 1)² + 16 = 25, so (<i>a</i> - 1)² = 9.",
              "<i>a</i> - 1 = 3 or -3, so <i>a</i> = 4 or -2.",
              "Quadrant I needs <i>a</i> > 0, so <i>a</i> = 4.",
            ],
          },
          {
            id: "c1e8",
            lesson: "l4",
            type: "num",
            tag: "Distance",
            q: "A(2, 3) and B(10, 9) are the ends of a diameter of a circle. Find the radius.",
            answer: 5,
            hint: "The radius is half the diameter.",
            steps: ["AB = √(8² + 6²) = 10.", "Radius = 10 ÷ 2 = 5 units."],
          },
          {
            id: "c1e9",
            lesson: "l6",
            type: "mcq",
            tag: "Shapes",
            q: "Which set of three points is collinear?",
            options: [
              "(1, 1), (3, 5), (5, 9)",
              "(0, 0), (2, 3), (4, 5)",
              "(1, 2), (2, 4), (3, 5)",
              "(-1, 0), (0, 2), (2, 5)",
            ],
            answer: 0,
            hint: "Check whether rise ÷ run stays the same.",
            steps: [
              "A: rise ÷ run is 4/2 = 2 and then 4/2 = 2. Same, so collinear.",
              "B: 3/2 then 2/2. C: 2 then 1. D: 2 then 3/2. These are not collinear.",
            ],
          },
        ],
      },
      {
        title: "Think deeper",
        note: "Reasoning and proofs. One has an explorer.",
        qs: [
          {
            id: "c1e10",
            lesson: "l6",
            type: "mcq",
            tag: "Shapes",
            q: "What kind of triangle has vertices (1, 1), (4, 5) and (8, 2)?",
            options: [
              "Equilateral",
              "Right-angled and isosceles",
              "Scalene and acute-angled",
              "The points are collinear",
            ],
            answer: 1,
            hint: "Work out all three squared distances.",
            steps: [
              "AB² = 3² + 4² = 25, BC² = 4² + 3² = 25, AC² = 7² + 1² = 50.",
              "AB = BC = 5, so it is isosceles.",
              "25 + 25 = 50 = AC², so the angle at B is a right angle.",
            ],
          },
          {
            id: "c1e11",
            lesson: "l4",
            type: "num",
            tag: "Distance",
            tool: "equi",
            q: "Find the point on the <i>x</i>-axis that is the same distance from A(2, 5) and B(-2, 9). Enter its <i>x</i>-coordinate.",
            answer: -7,
            hint: "Let the point be (<i>x</i>, 0). Set PA² = PB².",
            steps: [
              "(<i>x</i> - 2)² + 25 = (<i>x</i> + 2)² + 81.",
              "<i>x</i>² - 4<i>x</i> + 29 = <i>x</i>² + 4<i>x</i> + 85, so -8<i>x</i> = 56.",
              "<i>x</i> = -7. Check: PA² = 81 + 25 = 106 and PB² = 25 + 81 = 106.",
            ],
          },
          {
            id: "c1e12",
            lesson: "l5",
            type: "multi",
            tag: "Midpoint",
            q: "ABCD is a parallelogram with A(1, 2), B(6, 3) and C(8, 7). The diagonals of a parallelogram bisect each other. Find D.",
            fields: [
              { label: "<i>x</i> =", answer: 3 },
              { label: "<i>y</i> =", answer: 6 },
            ],
            hint: "The midpoint of AC equals the midpoint of BD.",
            steps: [
              "Midpoint of AC = ((1 + 8)/2, (2 + 7)/2) = (4.5, 4.5).",
              "This is also the midpoint of BD, so D = (2 × 4.5 - 6, 2 × 4.5 - 3).",
              "D = (3, 6).",
            ],
          },
          {
            id: "c1e13",
            lesson: "l6",
            type: "order",
            tag: "Proof",
            q: "Show that A(0, 0), B(3, 4) and C(6, 8) are collinear. Tap the steps in the right order.",
            items: [
              "AB = √(3² + 4²) = 5.",
              "BC = √(3² + 4²) = 5.",
              "AC = √(6² + 8²) = 10.",
              "AB + BC = 5 + 5 = 10 = AC.",
              "So B lies on segment AC, and A, B, C are collinear.",
            ],
            shuffle: [3, 1, 4, 0, 2],
            hint: "Find the three distances first, in any order. Then compare.",
            steps: [
              "Find AB = 5, BC = 5 and AC = 10 (any order).",
              "AB + BC = AC.",
              "So B is on segment AC: the points are collinear.",
            ],
          },
        ],
      },
    ],
  },
  exercises: {
    sets: [
      {
        title: "Exercise 1.1",
        note: "Ordered pairs and distances on the grid",
        qs: [
          {
            id: "c1x1a",
            type: "multi",
            q: "A sofa has four legs at (1, 2), (7, 2), (7, 5) and (<i>p</i>, <i>q</i>). Find <i>p</i> and <i>q</i>.",
            fields: [
              { label: "<i>p</i> =", answer: 1 },
              { label: "<i>q</i> =", answer: 5 },
            ],
            hint: "Three corners of a rectangle.",
            steps: [
              "The rectangle spans x = 1 to 7 and y = 2 to 5.",
              "The missing corner is (1, 5).",
            ],
          },
          {
            id: "c1x1b",
            type: "num",
            q: "A corridor runs from (2, 3) to (2, 11). How long is it?",
            answer: 8,
            hint: "Same <i>x</i> value.",
            steps: ["Length = 11 - 3 = 8 units."],
          },
          {
            id: "c1x1c",
            type: "mcq",
            q: "A gardener marks out a flower bed with corners at (0, 0), (5, 0), (5, 4) and (0, 4). What is its area?",
            options: ["9 sq units", "18 sq units", "20 sq units", "25 sq units"],
            answer: 2,
            hint: "Length × width.",
            steps: ["Length = 5, width = 4.", "Area = 5 × 4 = 20 sq units."],
          },
        ],
      },
      {
        title: "Exercise 1.2",
        note: "Plotting points, furniture and negative coordinates",
        qs: [
          {
            id: "c1x2a",
            type: "multi",
            q: "A rectangular table has three feet at (-1, 2), (4, 2) and (4, 5). Find the fourth foot.",
            fields: [
              { label: "x", answer: -1 },
              { label: "y", answer: 5 },
            ],
            hint: "Opposite sides of a rectangle are parallel to the axes here.",
            steps: ["The table spans x = -1 to 4 and y = 2 to 5.", "The missing foot is (-1, 5)."],
          },
          {
            id: "c1x2b",
            type: "num",
            q: "A bathroom has corners (-6, 0), (0, 0), (0, 5) and (-6, 5). Find its floor area, in square units.",
            answer: 30,
            hint: "Length along x is from -6 to 0.",
            steps: ["Length = 0 - (-6) = 6, width = 5 - 0 = 5.", "Area = 30 square units."],
          },
          {
            id: "c1x2c",
            type: "num",
            q: "A door is hinged at (0, 2). The nearest corner of a wardrobe is at (-2.4, 3.8). How far is that corner from the hinge?",
            answer: 3,
            hint: "Use the distance formula.",
            steps: [
              "Δx = -2.4 - 0 = -2.4, Δy = 3.8 - 2 = 1.8.",
              "Distance = √(5.76 + 3.24) = √9 = 3.",
            ],
          },
        ],
      },
      {
        title: "Exercise 1.3",
        note: "Distance, midpoint and shapes",
        qs: [
          {
            id: "c1x3a",
            type: "num",
            q: "Find the distance between P(-3, 4) and Q(5, -2).",
            answer: 10,
            hint: "Δx = 8, Δy = 6.",
            steps: ["√(8² + 6²) = √(64 + 36) = √100 = 10."],
          },
          {
            id: "c1x3b",
            type: "multi",
            q: "Find the midpoint of A(-4, 1) and B(8, 9).",
            fields: [
              { label: "<i>x</i> =", answer: 2 },
              { label: "<i>y</i> =", answer: 5 },
            ],
            hint: "Average each coordinate.",
            steps: ["x: (-4 + 8)/2 = 2.", "y: (1 + 9)/2 = 5."],
          },
          {
            id: "c1x3c",
            type: "mcq",
            q: "What type of triangle has vertices at A(2, 1), B(8, 1) and C(5, 6)?",
            options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
            answer: 1,
            hint: "Find AC and BC.",
            steps: [
              "AC² = 3² + 5² = 34, BC² = 3² + 5² = 34.",
              "AC = BC, so the triangle is isosceles.",
            ],
          },
        ],
      },
    ],
  },
  warmups: {
    l1: {
      q: "From a corner, you walk 3 steps along the bottom wall and then 5 steps up. Which pair describes where you are?",
      options: ["(3, 5)", "(5, 3)", "(8, 0)"],
      answer: "(3, 5)",
      why: "Across comes first, then up: (3, 5).",
    },
    l2: {
      q: "Which point is below the <i>x</i>-axis and to the left of the <i>y</i>-axis?",
      options: ["(4, -2)", "(-4, -2)", "(-4, 2)"],
      answer: "(-4, -2)",
      why: "Left means <i>x</i> < 0, below means <i>y</i> < 0.",
    },
    l3: {
      q: "A mirror lies along the <i>x</i>-axis. Where is the image of (2, 5)?",
      options: ["(-2, 5)", "(2, -5)", "(5, 2)"],
      answer: "(2, -5)",
      why: "The image is just as far below the mirror as the point is above it.",
    },
    l4: {
      q: "A ladder touches a wall 4 m up, and its foot is 3 m from the wall. How long is the ladder?",
      options: [5, 6, 7],
      answer: 5,
      why: "3² + 4² = 25 = 5². The grid distance formula is this same idea.",
    },
    l5: {
      q: "Which number is exactly halfway between 4 and 18?",
      options: [9, 11, 14],
      answer: 11,
      why: "(4 + 18) ÷ 2 = 11. The midpoint formula averages like this twice.",
    },
    l6: {
      q: "Do (1, 1), (2, 2) and (3, 3) lie on one straight line?",
      options: ["Yes", "No", "Cannot tell"],
      answer: "Yes",
      why: "Each step goes 1 across and 1 up, so the direction never changes.",
    },
  },
  badges: [
    { id: "navigator", icon: "🗺️", name: "Navigator", lessons: ["l1", "l2"] },
    { id: "reflector", icon: "🪞", name: "Reflector", lessons: ["l3"] },
    { id: "measurer", icon: "📏", name: "Measurer", lessons: ["l4", "l5"] },
    { id: "shape-tester", icon: "🔺", name: "Shape tester", lessons: ["l6"] },
  ],
  sprint: {
    name: "Coordinates Sprint",
    goal: 12,
    blurb: "60-second game. Quadrants, distances, midpoints and reflections.",
    lede: "Quadrant signs, distance formula, midpoints and reflections. How many in a minute?",
    missTitle: "Questions to look at again:",
  },
  recap: `<table class="recap-t"><thead><tr><th>Idea</th><th class="ap">Formula / rule</th></tr></thead><tbody>
<tr><th>Ordered pair</th><td>(<i>x</i>, <i>y</i>) = (across, up)</td></tr>
<tr><th>Quadrant signs</th><td>I (+,+) · II (-,+) · III (-,-) · IV (+,-)</td></tr>
<tr><th>Reflection in <i>x</i>-axis</th><td>(<i>x</i>, <i>y</i>) → (<i>x</i>, -<i>y</i>)</td></tr>
<tr><th>Reflection in <i>y</i>-axis</th><td>(<i>x</i>, <i>y</i>) → (-<i>x</i>, <i>y</i>)</td></tr>
<tr><th>Distance</th><td>√[(Δ<i>x</i>)² + (Δ<i>y</i>)²]</td></tr>
<tr><th>Midpoint</th><td>((x₁+x₂)/2, (y₁+y₂)/2)</td></tr>
</tbody></table>`,
  recapNote: "All key formulas for Chapter 1.",
  labGoal: 4,
};

export default ch1;
