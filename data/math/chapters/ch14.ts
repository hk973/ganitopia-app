import type { MathChapter } from "../types";

const ch14: MathChapter = {
  n: 14, key: "ch14", title: "Math of Space: Surface Area and Volume", short: "Surface Area and Volume",
  pageTitle: "Solids Lab",
  blurb: "Cuboids and cubes, painted cubes, cylinders, cones, spheres and hemispheres, scaling, melting and recasting, and estimating real quantities.",
  heroTitle: "Solids: <em>fill and wrap space</em>",
  heroText: "Fill a box layer by layer, unroll a cylinder, pour three cones into one cylinder and help a thirsty crow with Archimedes' ideas.",
  tagsHTML: '<span class="tag">V, S</span>',
  tags: { seq: "Cuboids", ap: "Cylinders", gp: "Cones and spheres", both: "Scaling" },
  lessons: [
    { id: "l1", kind: "seq", tag: "Cuboid", title: "Cuboids and cubes", ex: "Section 14.1",
      short: "V = lbh, TSA = 2(lb+bh+hl)",
      lede: "A cuboid has six rectangular faces. Its volume is the product of its three edges; its surface area is the sum of all face areas.",
      body: `<p><b>Volume</b> of cuboid: V = l × b × h. <b>Total surface area</b>: TSA = 2(lb + bh + hl). <b>Cube</b> (all edges equal to a): V = a³, TSA = 6a².</p>`,
      rule: { lbl: "Cuboid", f: "V = lbh · TSA = 2(lb + bh + hl)" },
      widgets: ["cuboid"],
      example: { q: "Find the volume and TSA of a cuboid 5 × 3 × 2.", steps: ["V = 5×3×2 = 30.", "TSA = 2(15 + 6 + 10) = 2(31) = 62."] },
      practice: [
        { id: "c14l1q1", type: "num", q: "Volume of a cuboid 10 × 4 × 3.", answer: 120, hint: "V = lbh.", steps: ["10×4×3 = 120."] },
        { id: "c14l1q2", type: "num", q: "TSA of a cube with edge 6 cm.", answer: 216, hint: "6a².", steps: ["6 × 36 = 216 cm²."] },
        { id: "c14l1q3", type: "num", q: "Volume of a cube with edge 5 cm.", answer: 125, hint: "a³.", steps: ["5³ = 125 cm³."] },
        { id: "c14l1q4", type: "num", q: "TSA of a cuboid 8 × 6 × 4.", answer: 208, hint: "2(lb + bh + hl).", steps: ["2(48 + 24 + 32) = 2(104) = 208 cm²."] },
      ],
    },
    { id: "l2", kind: "ap", tag: "Painted", title: "Painted cubes", ex: "Section 14.2",
      short: "Cut an n×n×n painted cube into unit cubes",
      lede: "When you cut a painted cube into unit cubes, you can count how many small cubes have 0, 1, 2, or 3 painted faces.",
      body: `<p>For an n × n × n cube cut into unit cubes: <b>3 faces painted</b>: 8 (corners). <b>2 faces</b>: 12(n - 2) (edges). <b>1 face</b>: 6(n - 2)² (face centres). <b>0 faces</b>: (n - 2)³ (interior).</p>`,
      rule: { lbl: "Painted cube", f: "3: 8 · 2: 12(n-2) · 1: 6(n-2)² · 0: (n-2)³" },
      widgets: ["painted"],
      example: { q: "A 4×4×4 painted cube is cut into unit cubes. How many have exactly 2 painted faces?", steps: ["12(4 - 2) = 12 × 2 = 24."] },
      practice: [
        { id: "c14l2q1", type: "num", q: "3×3×3 painted cube, cut into unit cubes. How many have 0 painted faces?", answer: 1, hint: "(n-2)³.", steps: ["(3-2)³ = 1."] },
        { id: "c14l2q2", type: "num", q: "5×5×5 painted cube. How many unit cubes have exactly 1 painted face?", answer: 54, hint: "6(n-2)².", steps: ["6 × 3² = 54."] },
        { id: "c14l2q3", type: "num", q: "How many unit cubes have exactly 3 painted faces (any n)?", answer: 8, hint: "Corners only.", steps: ["Always 8 — the corners."] },
        { id: "c14l2q4", type: "num", q: "A 6×6×6 painted cube. How many have 2 painted faces?", answer: 48, hint: "12(n-2).", steps: ["12 × 4 = 48."] },
      ],
    },
    { id: "l3", kind: "ap", tag: "Cylinder", title: "Cylinders", ex: "Section 14.3",
      short: "V = πr²h, CSA = 2πrh, TSA = 2πr(r+h)",
      lede: "A cylinder has circular bases. Its volume is the base area times height; its curved surface unrolls into a rectangle.",
      body: `<p><b>Volume</b>: V = πr²h. <b>Curved surface area</b>: CSA = 2πrh (the label unrolls to a rectangle of width 2πr and height h). <b>Total surface area</b>: TSA = 2πr(r + h) (CSA + 2 circular bases).</p>`,
      rule: { lbl: "Cylinder", f: "V = πr²h · CSA = 2πrh · TSA = 2πr(r+h)" },
      widgets: ["cylinder"],
      example: { q: "A cylinder has radius 7 cm and height 10 cm. Find V and CSA. (π = 22/7)", steps: ["V = 22/7 × 49 × 10 = 1540 cm³.", "CSA = 2 × 22/7 × 7 × 10 = 440 cm²."] },
      practice: [
        { id: "c14l3q1", type: "num", q: "V of cylinder r = 14 cm, h = 5 cm. (π = 22/7)", answer: 3080, hint: "πr²h.", steps: ["22/7 × 196 × 5 = 3080 cm³."] },
        { id: "c14l3q2", type: "num", q: "CSA of cylinder r = 3.5 cm, h = 12 cm. (π = 22/7)", answer: 264, hint: "2πrh.", steps: ["2 × 22/7 × 3.5 × 12 = 264 cm²."] },
        { id: "c14l3q3", type: "num", q: "Radius tripled, height same. Volume increases by factor?", answer: 9, hint: "r is squared.", steps: ["π(3r)²h = 9πr²h. Factor = 9."] },
        { id: "c14l3q4", type: "num", q: "TSA of cylinder r = 7, h = 10. (π = 22/7)", answer: 748, hint: "2πr(r+h).", steps: ["2 × 22/7 × 7 × 17 = 44 × 17 = 748 cm²."] },
      ],
    },
    { id: "l4", kind: "gp", tag: "Cone", title: "Cones", ex: "Section 14.4",
      short: "V = ⅓πr²h, CSA = πrl where l = √(r²+h²)",
      lede: "A cone has a circular base and tapers to a point. Its volume is one-third of the cylinder with the same base and height.",
      body: `<p><b>Volume</b>: V = ⅓πr²h. <b>Slant height</b>: l = √(r² + h²). <b>Curved surface area</b>: CSA = πrl. <b>Total surface area</b>: TSA = πr(l + r).</p>`,
      rule: { lbl: "Cone", f: "V = ⅓πr²h · CSA = πrl · l = √(r²+h²)" },
      widgets: ["cone"],
      example: { q: "A cone has r = 7, h = 24. Find l, V, and CSA. (π = 22/7)", steps: ["l = √(49 + 576) = √625 = 25.", "V = ⅓ × 22/7 × 49 × 24 = 1232 cm³.", "CSA = 22/7 × 7 × 25 = 550 cm²."] },
      practice: [
        { id: "c14l4q1", type: "num", q: "Slant height of cone r = 3, h = 4.", answer: 5, hint: "l = √(9+16).", steps: ["√25 = 5."] },
        { id: "c14l4q2", type: "num", q: "V of cone r = 7, h = 24. (π = 22/7)", answer: 1232, hint: "⅓πr²h.", steps: ["⅓ × 22/7 × 49 × 24 = 1232."] },
        { id: "c14l4q3", type: "num", q: "CSA of cone r = 7, l = 25. (π = 22/7)", answer: 550, hint: "πrl.", steps: ["22/7 × 7 × 25 = 550."] },
        { id: "c14l4q4", type: "num", q: "A cone and cylinder have the same base and height. Volume ratio (cone:cylinder)?", answer: 0.333, tol: 0.01, hint: "⅓πr²h : πr²h.", steps: ["1:3 = 0.333."] },
      ],
    },
    { id: "l5", kind: "gp", tag: "Sphere", title: "Spheres and hemispheres", ex: "Section 14.5",
      short: "V = ⁴⁄₃πr³, S = 4πr²",
      lede: "A sphere is perfectly round. Archimedes discovered its volume is two-thirds of the enclosing cylinder.",
      body: `<p><b>Sphere</b>: V = ⁴⁄₃πr³, SA = 4πr². <b>Hemisphere</b>: V = ⅔πr³, CSA = 2πr², TSA = 3πr² (includes the flat circular face).</p>`,
      rule: { lbl: "Sphere", f: "V = ⁴⁄₃πr³ · S = 4πr²" },
      widgets: ["sphere"],
      example: { q: "Find V and SA of a sphere r = 7. (π = 22/7)", steps: ["V = ⁴⁄₃ × 22/7 × 343 = ⁴⁄₃ × 1078 = 1437.33 cm³. Actually: 4/3 × 22/7 × 343 = 4 × 22 × 49/3 = 4312/3 ≈ 1437.3.", "SA = 4 × 22/7 × 49 = 616 cm²."] },
      practice: [
        { id: "c14l5q1", type: "num", q: "V of sphere r = 6. (π = 22/7)", answer: 905.14, tol: 0.1, hint: "⁴⁄₃πr³.", steps: ["⁴⁄₃ × 22/7 × 216 = 4 × 22 × 72/7 = 6336/7 ≈ 905.14 cm³."] },
        { id: "c14l5q2", type: "num", q: "V of sphere r = 21 cm.", answer: 38808, hint: "⁴⁄₃πr³.", steps: ["⁴⁄₃ × 22/7 × 9261 = 38808 cm³."] },
        { id: "c14l5q3", type: "num", q: "TSA of hemisphere r = 7 cm.", answer: 462, hint: "3πr².", steps: ["3 × 22/7 × 49 = 462 cm²."] },
        { id: "c14l5q4", type: "num", q: "Radius tripled. SA increases by factor?", answer: 9, hint: "Area scales with r².", steps: ["4π(3r)² = 9 × 4πr². Factor = 9."] },
      ],
    },
    { id: "l6", kind: "both", tag: "Scaling", title: "Scaling, recasting and estimating", ex: "End of chapter",
      short: "k, k², k³ and conservation of volume",
      lede: "Scale every length by k: areas scale by k² and volumes by k³. Melting and recasting keeps the volume the same.",
      body: `<p><b>Scaling</b>: lengths × k, areas × k², volumes × k³. <b>Recasting</b>: total volume before = total volume after (no material lost). <b>Estimating</b>: choose sensible round measurements and compute with formulas.</p>`,
      rule: { lbl: "Scale factor", f: "lengths × k · areas × k² · volumes × k³" },
      widgets: ["scaling"],
      example: { q: "A sphere r = 6 is melted and recast into a cylinder r = 4. Find h.", steps: ["⁴⁄₃π × 216 = π × 16 × h.", "288 = 16h → h = 18 cm."] },
      practice: [
        { id: "c14l6q1", type: "num", q: "A cube of edge 22 is melted into rods of r = 1, l = 7. How many rods? (π = 22/7)", answer: 484, hint: "V_cube ÷ V_rod.", steps: ["10648 ÷ 22 = 484 rods."] },
        { id: "c14l6q2", type: "num", q: "Sphere r = 6 melted into cylinder r = 4. Find h.", answer: 18, hint: "Set volumes equal.", steps: ["288π = 16πh → h = 18."] },
        { id: "c14l6q3", type: "num", q: "Every length multiplied by 3. Volume by factor?", answer: 27, hint: "k³.", steps: ["3³ = 27."] },
        { id: "c14l6q4", type: "num", q: "How many r = 1 balls from a sphere of r = 4?", answer: 64, hint: "Compare r³.", steps: ["(4/1)³ = 64."] },
      ],
    },
  ],
  eoc: {
    sections: [
      { title: "Quick check", note: "One formula each. π = 22/7.", qs: [
        { id: "c14e1", type: "num", tag: "Cube", q: "A cube has TSA 150 cm². Find its volume.", answer: 125, hint: "6a² = 150.", steps: ["a² = 25, a = 5. V = 125 cm³."] },
        { id: "c14e2", type: "num", tag: "Cone", q: "A cone r = 3, h = 4. CSA? (π = 3.14)", answer: 47.1, tol: 0.1, hint: "l = 5, CSA = πrl.", steps: ["3.14 × 3 × 5 = 47.1 cm²."] },
        { id: "c14e3", type: "num", tag: "Hemisphere", q: "Hemispherical bowl r = 10.5. Capacity (cm³)?", answer: 2425.5, tol: 0.1, hint: "⅔πr³.", steps: ["⅔ × 22/7 × 1157.625 = 2425.5 cm³."] },
        { id: "c14e4", type: "mcq", tag: "Compare", q: "Cylinder, cone, hemisphere all r = 7, h = 7. Which has the greatest volume?", options: ["Cylinder", "Hemisphere", "Cone", "Equal"], answer: 0, hint: "Ratio 3:2:1 with h = r.", steps: ["Cylinder πr³, hemisphere ⅔πr³, cone ⅓πr³. Cylinder largest."] },
      ]},
      { title: "Apply", note: "Real objects.", qs: [
        { id: "c14e5", type: "num", tag: "Tent", q: "Conical tent r = 7, h = 24. Canvas needed (m²)?", answer: 550, hint: "CSA = πrl, l = 25.", steps: ["22/7 × 7 × 25 = 550 m²."] },
        { id: "c14e6", type: "num", tag: "Dome", q: "Hemispherical dome r = 14 painted at ₹5/m². Cost?", answer: 6160, hint: "2πr² × 5.", steps: ["2 × 22/7 × 196 = 1232. 1232 × 5 = ₹6160."] },
        { id: "c14e7", type: "num", tag: "Milk", q: "1600 students each get a glass r = 3.5, filled to 10 cm. Total litres?", answer: 616, hint: "V × 1600 ÷ 1000.", steps: ["385 × 1600 = 616000 cm³ = 616 litres."] },
        { id: "c14e8", type: "num", tag: "String", q: "A string around a ball is made 1 m longer. How high does it lift? (π = 3.14, cm, 2 dp)", answer: 15.92, tol: 0.01, hint: "2πd = 100.", steps: ["d = 100/2π ≈ 15.92 cm."] },
      ]},
      { title: "Think deeper", note: "Derivations and puzzles.", qs: [
        { id: "c14e9", type: "num", tag: "Percent", q: "Sphere radius halved. Volume decreases by what %?", answer: 87.5, hint: "(½)³ = ⅛ remains.", steps: ["⅞ = 87.5%."] },
        { id: "c14e10", type: "num", tag: "Thirsty crow", q: "Cylindrical glass r = 3, h = 14, water 10 cm deep. Marbles r = 1.5. How many to fill to top?", answer: 8, hint: "Rise needed = 4 cm.", steps: ["Water to rise: π × 9 × 4 = 36π. Marble: ⁴⁄₃π × 3.375 = 4.5π. 36π/4.5π = 8."] },
        { id: "c14e11", type: "num", tag: "Growing cubes", q: "A 5×5×5 cube is built from unit cubes. How many more for a 6×6×6?", answer: 91, hint: "6³ - 5³.", steps: ["216 - 125 = 91."] },
      ]},
    ],
  },
  exercises: {
    sets: [
      { title: "Exercise 14.1", note: "Cuboids and cubes", qs: [
        { id: "c14x1a", type: "num", q: "A cube has volume 512. Find its TSA.", answer: 384, hint: "a³ = 512 → a = 8.", steps: ["TSA = 6 × 64 = 384 cm²."] },
        { id: "c14x1b", type: "num", q: "Volume of cuboid 15 × 10 × 8.", answer: 1200, hint: "l × b × h.", steps: ["1200 cm³."] },
        { id: "c14x1c", type: "num", q: "How many cubes of edge 3 fit in 12 × 9 × 6?", answer: 24, hint: "Along each edge.", steps: ["4 × 3 × 2 = 24."] },
        { id: "c14x1d", type: "num", q: "A 6×6×6 painted cube, cut into unit cubes. How many have exactly 1 painted face?", answer: 96, hint: "6(n-2)².", steps: ["6 × 4² = 96."] },
        { id: "c14x1e", type: "num", q: "A cube cut into 27 equal small cubes. Total SA of small cubes ÷ original SA?", answer: 3, hint: "Each small cube edge = a/3.", steps: ["27 × 6(a/3)² = 18a². Ratio = 18a²/6a² = 3."] },
        { id: "c14x1f", type: "num", q: "Three faces of a cuboid have areas 6, 10, 15. Find its volume.", answer: 30, hint: "(lb)(bh)(hl) = (lbh)².", steps: ["6×10×15 = 900. V = √900 = 30 cm³."] },
      ]},
      { title: "Exercise 14.2", note: "Cylinders (π = 22/7)", qs: [
        { id: "c14x2a", type: "num", q: "CSA of cylinder r = 3.5, h = 12.", answer: 264, hint: "2πrh.", steps: ["2 × 22/7 × 3.5 × 12 = 264 cm²."] },
        { id: "c14x2b", type: "num", q: "V of cylinder r = 14, h = 5.", answer: 3080, hint: "πr²h.", steps: ["22/7 × 196 × 5 = 3080 cm³."] },
        { id: "c14x2c", type: "num", q: "Radius tripled, height same. V increases by factor?", answer: 9, hint: "r².", steps: ["9."] },
      ]},
      { title: "Exercise 14.3", note: "Cones (π = 22/7)", qs: [
        { id: "c14x3a", type: "num", q: "V of cone r = 6, h = 7.", answer: 264, hint: "⅓πr²h.", steps: ["⅓ × 22/7 × 36 × 7 = 264 cm³."] },
        { id: "c14x3b", type: "num", q: "Slant height of cone r = 5, h = 12.", answer: 13, hint: "l = √(25+144).", steps: ["√169 = 13."] },
      ]},
      { title: "Exercise 14.4", note: "Spheres and scaling (π = 22/7)", qs: [
        { id: "c14x4a", type: "num", q: "V of sphere r = 10.5.", answer: 4851, hint: "⁴⁄₃πr³.", steps: ["⁴⁄₃ × 22/7 × 1157.625 = 4851 cm³."] },
        { id: "c14x4b", type: "num", q: "A metal sphere r = 6 melted into cylinder r = 4. Find h.", answer: 18, hint: "⁴⁄₃π(216) = π(16)h.", steps: ["288/16 = 18 cm."] },
        { id: "c14x4c", type: "num", q: "Radius doubled. SA increases by factor?", answer: 4, hint: "r².", steps: ["(2)² = 4."] },
        { id: "c14x4d", type: "num", q: "Every length × 3. Volume × ?", answer: 27, hint: "k³.", steps: ["27."] },
        { id: "c14x4e", type: "num", q: "A 5×5×5 cube from unit cubes. How many more for 6×6×6?", answer: 91, hint: "6³ - 5³.", steps: ["216 - 125 = 91."] },
        { id: "c14x4f", type: "num", q: "How many r = 1 balls from a sphere of r = 4?", answer: 64, hint: "(4/1)³.", steps: ["64."] },
      ]},
    ],
  },
  warmups: {
    l1: { q: "Volume of a 3×2×2 box?", options: [7, 12, 14], answer: 12, why: "3×2×2 = 12 unit cubes." },
    l2: { q: "A 3×3×3 painted cube, cut into unit cubes. How many are corners (3 painted faces)?", options: [4, 8, 12], answer: 8, why: "Every cube has 8 corners." },
    l3: { q: "Peel the label off a can. What shape?", options: ["Rectangle", "Circle", "Triangle"], answer: "Rectangle", why: "Width = 2πr, height = h." },
    l4: { q: "Ice-cream cone vs cylindrical cup, same base and height. Which holds more?", options: ["Cup", "Cone", "Same"], answer: "Cup", why: "Cup = 3× cone volume." },
    l5: { q: "An orange fits inside a can. Does it fill more or less than half?", options: ["More than half", "Less than half"], answer: "More than half", why: "It fills ⅔ of the can." },
    l6: { q: "Model car at half size. How much less paint?", options: ["Half", "A quarter", "An eighth"], answer: "A quarter", why: "Areas scale by (½)² = ¼." },
  },
  badges: [
    { id: "box-builder", icon: "▣", name: "Box builder", lessons: ["l1", "l2"] },
    { id: "round-expert", icon: "◉", name: "Round-solid expert", lessons: ["l3", "l4", "l5"] },
    { id: "scale-master", icon: "k³", name: "Scale master", lessons: ["l6"] },
  ],
  sprint: { name: "Solids Sprint", goal: 12, blurb: "60s — cubes, boxes, cones, painted cubes, scaling.", lede: "Cube volumes, surface areas, painted cubes, slant heights, scale factors. How many in a minute?", missTitle: "Questions to look at again:" },
  recap: `<table class="recap-t"><thead><tr><th>Solid</th><th class="ap">Surface area</th><th class="gp">Volume</th></tr></thead><tbody>
<tr><th>Cuboid</th><td>2(lb + bh + hl)</td><td>lbh</td></tr>
<tr><th>Cube</th><td>6a²</td><td>a³</td></tr>
<tr><th>Cylinder</th><td>CSA 2πrh · TSA 2πr(r + h)</td><td>πr²h</td></tr>
<tr><th>Cone</th><td>CSA πrl · TSA πr(l + r), l = √(r² + h²)</td><td>⅓πr²h</td></tr>
<tr><th>Sphere</th><td>4πr²</td><td>⁴⁄₃πr³</td></tr>
<tr><th>Hemisphere</th><td>CSA 2πr² · TSA 3πr²</td><td>⅔πr³</td></tr>
<tr><th>Painted n-cube</th><td>3: 8 · 2: 12(n-2) · 1: 6(n-2)²</td><td>none: (n-2)³</td></tr>
<tr><th>Scale factor k</th><td>areas × k²</td><td>volumes × k³</td></tr>
</tbody></table>`,
  recapNote: "Every formula in one table (π = 22/7 unless stated)",
  labGoal: 6,
};

export default ch14;
