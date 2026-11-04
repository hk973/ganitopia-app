'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Search,
  Sparkles,
  Calculator,
  Atom,
  Dna,
  Zap,
  Printer,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  ArrowRight,
  Filter,
  Copy,
  Check,
} from 'lucide-react';
import { InteractiveScratchpad } from '@/components/interactive/InteractiveScratchpad';

type SubjectCategory = 'all' | 'math' | 'physics' | 'chemistry' | 'biology' | 'traps';

interface BibleItem {
  id: string;
  category: 'math' | 'physics' | 'chemistry' | 'biology';
  chapterNumber: number;
  chapterTitle: string;
  title: string;
  summary: string;
  formulas?: { label: string; formula: string; explanation?: string }[];
  keyRules: string[];
  examTraps: string[];
  interactiveLabUrl?: string;
  badge?: string;
}

const BIBLE_DATA: BibleItem[] = [
  // ================= MATHEMATICS =================
  {
    id: 'math-identities',
    category: 'math',
    chapterNumber: 4,
    chapterTitle: 'Algebraic Identities',
    title: 'The 8 Fundamental NCERT Algebraic Identities',
    summary:
      'Every algebraic factorization and expansion problem in Class 9 relies directly on these 8 identities.',
    formulas: [
      { label: 'Identity I', formula: '(x + y)² = x² + 2xy + y²' },
      { label: 'Identity II', formula: '(x - y)² = x² - 2xy + y²' },
      { label: 'Identity III', formula: 'x² - y² = (x - y)(x + y)' },
      { label: 'Identity IV', formula: '(x + a)(x + b) = x² + (a + b)x + ab' },
      { label: 'Identity V', formula: '(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx' },
      { label: 'Identity VI', formula: '(x + y)³ = x³ + y³ + 3xy(x + y)' },
      { label: 'Identity VII', formula: '(x - y)³ = x³ - y³ - 3xy(x - y)' },
      {
        label: 'Identity VIII',
        formula: 'x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)',
        explanation: 'If x + y + z = 0, then x³ + y³ + z³ = 3xyz (Super high-yield exam theorem!)',
      },
    ],
    keyRules: [
      'Always look for common factors first before applying identities.',
      'When x + y + z = 0, use x³ + y³ + z³ = 3xyz directly without cubing individual terms.',
    ],
    examTraps: [
      'DO NOT write (x - y)² as x² - y². (x - y)² has a middle term -2xy!',
      'Watch signs in (x - y)³: middle terms are -3x²y + 3xy².',
    ],
    interactiveLabUrl: '/math/4/l1',
    badge: '100% Exam Guaranteed',
  },
  {
    id: 'math-heron',
    category: 'math',
    chapterNumber: 6,
    chapterTitle: "Heron's Formula",
    title: "Heron's Formula & Triangle Area Master Formula",
    summary:
      'Calculate the area of any general scalene, isosceles, or equilateral triangle when all 3 side lengths are known.',
    formulas: [
      { label: 'Semi-perimeter (s)', formula: 's = (a + b + c) / 2' },
      { label: "Heron's Area", formula: 'Area = √[s(s - a)(s - b)(s - c)]' },
      { label: 'Equilateral Triangle Area', formula: 'Area = (√3 / 4) × a²' },
    ],
    keyRules: [
      'Always compute the semi-perimeter s first.',
      'Check triangle inequality before calculating: sum of any two sides must exceed the third side (a + b > c).',
    ],
    examTraps: [
      'Common mistake: Dividing by 3 instead of 2 for semi-perimeter s. Remember s = (a+b+c)/2!',
      'Always include the square unit (e.g., cm², m²) in your final answer.',
    ],
    interactiveLabUrl: '/math/6/l1',
    badge: 'Direct 3-Mark Question',
  },
  {
    id: 'math-coordinates',
    category: 'math',
    chapterNumber: 1,
    chapterTitle: 'Coordinate Geometry',
    title: 'Cartesian Coordinate Plane, Quadrants & Distance',
    summary:
      'Locating points on a 2D plane with ordered pairs (x, y), signs in quadrants, and distance measurements.',
    formulas: [
      { label: 'Point Notation', formula: 'P(x, y) = (Abscissa, Ordinate)' },
      { label: 'Distance Formula', formula: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]' },
      { label: 'Midpoint Formula', formula: 'M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)' },
    ],
    keyRules: [
      'Quadrant I: (+, +) | Quadrant II: (-, +) | Quadrant III: (-, -) | Quadrant IV: (+, -)',
      'Any point on the X-axis has y = 0: (x, 0).',
      'Any point on the Y-axis has x = 0: (0, y).',
      'Origin has coordinates (0, 0).',
    ],
    examTraps: [
      'Abscissa is ALWAYS the x-coordinate, and Ordinate is ALWAYS the y-coordinate. Never swap them!',
      'Distance is always a non-negative scalar value.',
    ],
    interactiveLabUrl: '/math/1/l1',
  },
  {
    id: 'math-mensuration',
    category: 'math',
    chapterNumber: 14,
    chapterTitle: 'Surface Areas and Volumes',
    title: 'Complete 3D Solid Geometry Formula Bible',
    summary:
      'Curved surface area (CSA), total surface area (TSA), and volume formulas for all Class 9 solids.',
    formulas: [
      { label: 'Cuboid Volume', formula: 'V = l × b × h | TSA = 2(lb + bh + hl) | CSA = 2h(l + b)' },
      { label: 'Cube', formula: 'V = a³ | TSA = 6a² | CSA = 4a²' },
      { label: 'Right Circular Cylinder', formula: 'V = πr²h | CSA = 2πrh | TSA = 2πr(r + h)' },
      { label: 'Right Circular Cone', formula: 'V = (1/3)πr²h | CSA = πrl | Slant height l = √(r² + h²)' },
      { label: 'Sphere', formula: 'V = (4/3)πr³ | Surface Area = 4πr²' },
      { label: 'Hemisphere', formula: 'V = (2/3)πr³ | CSA = 2πr² | TSA = 3πr²' },
    ],
    keyRules: [
      '1 m³ = 1000 Litres | 1 Litre = 1000 cm³.',
      'For cones: Always distinguish between vertical height (h) and slant height (l).',
    ],
    examTraps: [
      'Hemisphere TSA is 3πr², NOT 2πr² (the circular flat base adds πr²)!',
      'Ensure all dimensions are in identical units (convert meters to cm or vice versa before multiplying).',
    ],
    interactiveLabUrl: '/math/14/l1',
    badge: 'High Scoring 5-Mark Question',
  },
  {
    id: 'math-circles',
    category: 'math',
    chapterNumber: 5,
    chapterTitle: 'Circles',
    title: 'Core NCERT Circle Theorems & Cyclic Properties',
    summary:
      'The essential circle theorems tested in CBSE geometric proofs and numerical calculations.',
    formulas: [
      { label: 'Central vs Inscribed Angle', formula: '∠AOB = 2 × ∠APB' },
      { label: 'Angle in a Semicircle', formula: '∠APB = 90° (Always a right angle)' },
      { label: 'Cyclic Quadrilateral Opposite Angles', formula: '∠A + ∠C = 180° and ∠B + ∠D = 180°' },
    ],
    keyRules: [
      'The perpendicular from the centre of a circle to a chord bisects the chord.',
      'Equal chords are equidistant from the centre.',
      'Angles subtended by the same arc in the same segment of a circle are equal.',
    ],
    examTraps: [
      'Do not confuse chord distance from centre with radius. Form a right triangle with radius as hypotenuse: r² = d² + (chord/2)².',
    ],
    interactiveLabUrl: '/math/5/l1',
  },

  // ================= PHYSICS =================
  {
    id: 'phy-motion',
    category: 'physics',
    chapterNumber: 4,
    chapterTitle: 'Describing Motion',
    title: 'The 3 Equations of Motion & Kinematics Bible',
    summary:
      'Formulas describing uniformly accelerated rectilinear motion, velocity, and distance-time relations.',
    formulas: [
      { label: 'First Equation (Velocity-Time)', formula: 'v = u + at' },
      { label: 'Second Equation (Position-Time)', formula: 's = ut + ½at²' },
      { label: 'Third Equation (Position-Velocity)', formula: 'v² = u² + 2as' },
      { label: 'Average Speed / Velocity', formula: 'Avg Speed = Total Dist / Total Time | v_avg = (u + v) / 2' },
      { label: 'Uniform Circular Motion Speed', formula: 'v = 2πr / t' },
    ],
    keyRules: [
      'When an object starts from rest: Initial velocity u = 0.',
      'When an object comes to a stop: Final velocity v = 0.',
      'Unit conversion: km/h to m/s → multiply by 5/18 (e.g., 72 km/h = 72 × 5/18 = 20 m/s).',
    ],
    examTraps: [
      'Distance is scalar (always positive); Displacement is vector (can be positive, zero, or negative).',
      'If motion is under deceleration / brakes applied, acceleration a is NEGATIVE.',
    ],
    interactiveLabUrl: '/science/4/s1',
    badge: 'Physics Must-Know',
  },
  {
    id: 'phy-force',
    category: 'physics',
    chapterNumber: 6,
    chapterTitle: 'How Forces Affect Motion',
    title: "Newton's Laws of Motion & Momentum Conservation",
    summary:
      "Inertia, Newton's three fundamental laws of motion, momentum, and recoil velocity calculations.",
    formulas: [
      { label: 'Momentum', formula: 'p = mv (Unit: kg·m/s)' },
      { label: "Newton's 2nd Law", formula: 'F = ma = m(v - u) / t (Unit: Newton, N)' },
      { label: 'Law of Conservation of Momentum', formula: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂' },
      { label: 'Recoil Velocity of Gun', formula: 'v_gun = -(m_bullet × v_bullet) / m_gun' },
    ],
    keyRules: [
      "Newton's 1st Law (Inertia): An object remains in its state of rest or uniform motion unless acted upon by an external unbalanced force.",
      "Newton's 3rd Law: To every action there is always an equal and opposite reaction acting on different bodies.",
      'Inertia depends directly on mass: heavier body = greater inertia.',
    ],
    examTraps: [
      'Action and reaction forces DO NOT cancel each other out because they act on TWO DIFFERENT bodies!',
      'Negative sign in recoil velocity indicates opposite direction of recoil.',
    ],
    interactiveLabUrl: '/science/6/s1',
  },
  {
    id: 'phy-gravitation',
    category: 'physics',
    chapterNumber: 10,
    chapterTitle: 'Gravitation & Floatation',
    title: 'Universal Gravitation, Free Fall & Archimedes Principle',
    summary:
      'Universal gravitational constant, acceleration due to gravity g, mass vs weight, and buoyancy.',
    formulas: [
      { label: 'Universal Law of Gravitation', formula: 'F = G × (M × m) / r² (G = 6.67 × 10⁻¹¹ N·m²/kg²)' },
      { label: 'Acceleration Due to Gravity', formula: 'g = GM / R² ≈ 9.8 m/s² on Earth' },
      { label: 'Weight', formula: 'W = mg (Unit: Newton, N)' },
      { label: 'Weight on the Moon', formula: 'W_moon = (1/6) × W_earth' },
      { label: 'Pressure & Relative Density', formula: 'P = Thrust / Area | Rel. Density = Density of substance / Density of water' },
    ],
    keyRules: [
      'Mass (m) is constant everywhere in the universe (scalar, kg).',
      'Weight (W) varies depending on local g (vector, N). At Earth centre, g = 0 → weight = 0.',
      'Archimedes Principle: Buoyant force = weight of fluid displaced by submerged object.',
    ],
    examTraps: [
      'Do not confuse G (Universal constant, same everywhere) with g (local acceleration, changes with planet/altitude).',
      'For upward throw: at highest point v = 0 and g is taken as -9.8 m/s².',
    ],
    interactiveLabUrl: '/science/10/s1',
  },
  {
    id: 'phy-work-energy',
    category: 'physics',
    chapterNumber: 7,
    chapterTitle: 'Work, Energy, and Simple Machines',
    title: 'Work, Kinetic & Potential Energy, Conservation Law',
    summary:
      'Work done by forces, mechanical energy exchange, commercial unit of energy (kWh), and power.',
    formulas: [
      { label: 'Work Done', formula: 'W = F × s (Unit: Joule, J = N·m)' },
      { label: 'Kinetic Energy', formula: 'KE = ½mv²' },
      { label: 'Gravitational Potential Energy', formula: 'PE = mgh' },
      { label: 'Power', formula: 'P = Work / Time = W / t (Unit: Watt, W = J/s)' },
      { label: 'Commercial Unit of Energy', formula: '1 kWh = 1 unit = 3.6 × 10⁶ Joules' },
    ],
    keyRules: [
      'Work is done ONLY if force produces a displacement: W = 0 if displacement is zero or perpendicular to force (e.g. porter carrying load on head on flat road does zero scientific work against gravity).',
      'Law of Conservation of Energy: Total mechanical energy (PE + KE) remains constant.',
    ],
    examTraps: [
      'A person pushing a rigid wall does ZERO work in physics because displacement is 0.',
    ],
    interactiveLabUrl: '/science/7/s1',
  },
  {
    id: 'phy-sound',
    category: 'physics',
    chapterNumber: 10,
    chapterTitle: 'Sound Waves',
    title: 'Sound Characteristics, Echo, Speed & Ultrasound',
    summary:
      'Longitudinal sound waves, frequency, wavelength, amplitude, echo distance, and SONAR.',
    formulas: [
      { label: 'Wave Relationship', formula: 'v = ν × λ (Speed = Frequency × Wavelength)' },
      { label: 'Time Period & Frequency', formula: 'T = 1 / ν | ν = 1 / T (Unit: Hertz, Hz)' },
      { label: 'Echo Distance Formula', formula: '2d = v × t → d = (v × t) / 2' },
    ],
    keyRules: [
      'Sound requires a material medium to propagate (cannot travel in vacuum).',
      'Human audible range: 20 Hz to 20,000 Hz (Infrasound < 20 Hz; Ultrasound > 20,000 Hz).',
      'For a distinct echo: Minimum distance from obstacle in air at 22°C is 17.2 meters (t ≥ 0.1 s).',
    ],
    examTraps: [
      'Remember in Echo & SONAR problems, sound travels to the obstacle AND returns: Total distance is 2d, not d!',
    ],
    interactiveLabUrl: '/science/10/s1',
  },

  // ================= CHEMISTRY =================
  {
    id: 'chem-mole',
    category: 'chemistry',
    chapterNumber: 9,
    chapterTitle: 'Atomic Foundations of Matter',
    title: 'The Mole Concept, Molar Mass & Chemical Formulas',
    summary:
      'Avogadro number, converting between grams, moles, and number of atoms/molecules.',
    formulas: [
      { label: 'Number of Moles (from mass)', formula: 'n = Given Mass (m) / Molar Mass (M)' },
      { label: 'Number of Moles (from particles)', formula: 'n = Given Particles (N) / Avogadro Number (N₀)' },
      { label: 'Master Mole Equality', formula: 'm / M = N / N₀ (N₀ = 6.022 × 10²³ particles/mol)' },
      { label: 'Percentage Composition', formula: '% of element = (Mass of element in 1 mol / Molar mass) × 100' },
    ],
    keyRules: [
      '1 mole of any substance = 6.022 × 10²³ particles = Molar mass in grams.',
      'Law of Conservation of Mass (Lavoisier): Mass cannot be created or destroyed in a chemical reaction.',
      'Law of Definite Proportions (Proust): In a chemical compound, elements are always present in definite proportions by mass (e.g. H₂O is always 1:8 by mass).',
    ],
    examTraps: [
      'Careful with diatomic gases! 1 mole of Oxygen molecules (O₂) = 32 g, while 1 mole of Oxygen atoms (O) = 16 g.',
    ],
    interactiveLabUrl: '/science/9/s1',
    badge: 'Numericals Heavy Topic',
  },
  {
    id: 'chem-valency',
    category: 'chemistry',
    chapterNumber: 8,
    chapterTitle: 'Journey Inside the Atom',
    title: 'Atomic Structure, Valencies Table & Chemical Formula Writing',
    summary:
      'Criss-cross method for writing chemical formulas, common polyatomic ions, and Bohr-Bury electron rules.',
    formulas: [
      { label: 'Maximum Electrons in Shell n', formula: 'Max e⁻ = 2n² (K=2, L=8, M=18, N=32)' },
      { label: 'Mass Number', formula: 'A = Protons (p) + Neutrons (n)' },
      { label: 'Atomic Number', formula: 'Z = Number of Protons = Number of Electrons (in neutral atom)' },
    ],
    keyRules: [
      'Octet Rule: The outermost shell cannot accommodate more than 8 electrons.',
      'Criss-Cross Rule: Swap the valencies of the two combining elements/ions to form the formula (e.g., Al³⁺ and O²⁻ → Al₂O₃).',
      'Common Polyatomic Ion Valencies: Hydroxide (OH⁻): 1, Nitrate (NO₃⁻): 1, Carbonate (CO₃²⁻): 2, Sulphate (SO₄²⁻): 2, Phosphate (PO₄³⁻): 3, Ammonium (NH₄⁺): 1.',
    ],
    examTraps: [
      'When writing formulas with polyatomic ions with subscript > 1, ALWAYS use brackets: e.g. Ca(OH)₂, NOT CaOH₂!',
      'Valency of noble gases (He, Ne, Ar) is 0 because their outermost shell is complete.',
    ],
    interactiveLabUrl: '/science/8/s1',
  },
  {
    id: 'chem-matter',
    category: 'chemistry',
    chapterNumber: 5,
    chapterTitle: 'Exploring Mixtures and their Separation',
    title: 'Solutions, Colloids, Suspensions & Tyndall Effect',
    summary:
      'Comparison table of true solutions, colloids, suspensions, and separation principles.',
    keyRules: [
      'True Solution: Homogeneous, particle size < 1 nm, does NOT scatter light, passes through filter paper.',
      'Colloid: Heterogeneous appearance-wise homogeneous, particle size 1 nm - 1000 nm, SCATTERS light (Tyndall Effect), stable (e.g. Milk, Fog, Smoke).',
      'Suspension: Heterogeneous, particle size > 1000 nm, scatters light until particles settle down, unstable (e.g. Chalk in water).',
      'Mass by Mass Percentage = (Mass of Solute / Mass of Solution) × 100.',
    ],
    examTraps: [
      'Remember Solution = Solute + Solvent! If 40 g salt is dissolved in 320 g water, mass of solution is 360 g, NOT 320 g!',
    ],
    interactiveLabUrl: '/science/5/s1',
  },

  // ================= BIOLOGY =================
  {
    id: 'bio-cell',
    category: 'biology',
    chapterNumber: 2,
    chapterTitle: 'Cell: The Building Block of Life',
    title: 'The Fundamental Unit of Life: Organelles & Osmosis Bible',
    summary:
      'Organelle functions, cell nicknames, and animal vs plant cell distinction table.',
    keyRules: [
      'Robert Hooke discovered cells in 1665 (cork). Leeuwenhoek discovered free-living cells (1674). Robert Brown discovered the Nucleus (1831).',
      'Mitochondria: Powerhouse of the cell (produces ATP); contains its own DNA & ribosomes.',
      'Plastids (Chloroplasts): Kitchen of the cell; site of photosynthesis; contains own DNA & ribosomes.',
      'Lysosomes: Suicide bags of the cell; contain powerful digestive enzymes.',
      'Ribosomes: Sites of protein synthesis.',
      'Endoplasmic Reticulum: RER has ribosomes (synthesizes proteins); SER synthesizes lipids and detoxifies poisons.',
      'Plant Cell Only: Cell wall (cellulose), Chloroplasts, and Large central vacuole.',
      'Hypotonic solution: Cell gains water (swells/endosmosis); Hypertonic: Cell loses water (shrinks/exosmosis); Isotonic: No net movement.',
    ],
    examTraps: [
      'Only two cell organelles have their own DNA and ribosomes: Mitochondria and Plastids!',
      'Animal cells lack a cell wall; plant cells have both a cell wall and plasma membrane.',
    ],
    interactiveLabUrl: '/science/2/s1',
    badge: 'Biology Foundation',
  },
  {
    id: 'bio-tissues',
    category: 'biology',
    chapterNumber: 3,
    chapterTitle: 'Tissues in Action',
    title: 'Plant & Animal Tissues Master Classification Chart',
    summary:
      'Meristematic vs Permanent plant tissues, Xylem vs Phloem, and 4 animal tissue types.',
    keyRules: [
      'Plant Meristematic Tissues: Apical (growth at tips of root/shoot), Lateral / Cambium (increases girth/thickness), Intercalary (at nodes/internodes).',
      'Plant Simple Permanent: Parenchyma (storage/photosynthesis), Collenchyma (flexibility/mechanical support), Sclerenchyma (dead cells, rigidity, lignin in coconut husk).',
      'Complex Permanent Tissues: Xylem conducts water & minerals unidirectionally (Tracheids, Vessels, Xylem parenchyma [only living], Xylem fibres); Phloem conducts food bidirectionally (Sieve tubes, Companion cells, Phloem parenchyma, Phloem fibres [only dead]).',
      'Animal Connective Tissues: Blood (fluid matrix plasma), Bone (calcium/phosphorus matrix), Ligament (connects bone to bone), Tendon (connects muscle to bone), Cartilage (smooths joint surfaces), Areolar (fills space inside organs), Adipose (stores fat/insulator).',
    ],
    examTraps: [
      'Tendon connects Muscle to Bone; Ligament connects Bone to Bone. Don\'t flip these two!',
      'In Xylem, only Xylem Parenchyma is living. In Phloem, only Phloem Fibres are dead!',
    ],
    interactiveLabUrl: '/science/3/s1',
  },
];

export function Class9Bible() {
  const [activeCategory, setActiveCategory] = useState<SubjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return BIBLE_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === 'all'
          ? true
          : activeCategory === 'traps'
          ? item.examTraps.length > 0
          : item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchChapter = item.chapterTitle.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q);
      const matchFormula = item.formulas?.some(
        (f) => f.label.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q)
      );
      const matchRules = item.keyRules.some((r) => r.toLowerCase().includes(q));

      return matchTitle || matchChapter || matchSummary || matchFormula || matchRules;
    });
  }, [activeCategory, searchQuery]);

  const copyFormula = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-500/30 p-8 md:p-12 text-white shadow-2xl">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-sky-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Complete NCERT Revision Desk
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: 'var(--display)' }}
          >
            The Class 9th <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-indigo-300">Bible</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Every core formula, law, theorem, derivation, valency table, cell organelle chart, and common exam trap for CBSE Class 9 Mathematics & Science — in one crystal-clear reference.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold flex items-center gap-2 transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" /> Print / Save Cheat Sheet
            </button>
            <Link
              href="/pricing"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg flex items-center gap-2 transition-all active:scale-95"
              style={{ background: 'var(--ap)' }}
            >
              Unlock Full Course with Labs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Category Pills */}
        <div className="flex gap-1.5 flex-wrap">
          {[
            { key: 'all', label: 'All Topics', icon: BookOpen },
            { key: 'math', label: 'Math Formulas', icon: Calculator },
            { key: 'physics', label: 'Physics Laws', icon: Zap },
            { key: 'chemistry', label: 'Chemistry & Moles', icon: Atom },
            { key: 'biology', label: 'Biology Charts', icon: Dna },
            { key: 'traps', label: '⚠️ Exam Pitfalls', icon: AlertTriangle },
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as SubjectCategory)}
                className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-[var(--ink)] text-[var(--sheet)] shadow-md scale-105'
                    : 'bg-[var(--sheet)] border border-[var(--rule)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-[var(--muted)] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search formulas, laws, theorems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[var(--sheet)] border border-[var(--rule)] text-sm focus:outline-none focus:border-[var(--ap)]"
          />
        </div>
      </div>

      {/* Bible Cards Stream */}
      <div className="space-y-6">
        {filteredItems.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="rounded-2xl bg-[var(--sheet)] border border-[var(--rule)] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Top Eyebrow */}
            <div className="flex items-center justify-between gap-2 flex-wrap mb-3 border-b border-[var(--rule)] pb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                <span
                  className="px-2.5 py-0.5 rounded-full text-white text-[10px]"
                  style={{
                    background:
                      item.category === 'math'
                        ? 'var(--ap)'
                        : item.category === 'physics'
                        ? '#3b82f6'
                        : item.category === 'chemistry'
                        ? '#10b981'
                        : '#8b5cf6',
                  }}
                >
                  {item.category.toUpperCase()}
                </span>
                <span>
                  Chapter {item.chapterNumber} · {item.chapterTitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    ★ {item.badge}
                  </span>
                )}
                {item.interactiveLabUrl && (
                  <Link
                    href={item.interactiveLabUrl}
                    className="text-xs font-bold text-[var(--ap)] hover:underline flex items-center gap-1"
                  >
                    Open Live Simulation <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Title & Summary */}
            <h2
              className="text-xl md:text-2xl font-bold text-[var(--ink)] mb-2"
              style={{ fontFamily: 'var(--display)' }}
            >
              {item.title}
            </h2>
            <p className="text-sm text-[var(--muted)] mb-5 max-w-3xl leading-relaxed">
              {item.summary}
            </p>

            {/* Formulas Box */}
            {item.formulas && item.formulas.length > 0 && (
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-3 flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-[var(--ap)]" />
                  <span>Key Formulas & Equations</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {item.formulas.map((f, fIdx) => (
                    <div
                      key={fIdx}
                      className="group rounded-xl border border-[var(--rule)] bg-[var(--paper)]/60 p-3.5 flex flex-col justify-between hover:border-[var(--ap)]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-[var(--muted)] mb-1">
                        <span>{f.label}</span>
                        <button
                          onClick={() => copyFormula(f.formula, `${item.id}-${fIdx}`)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-[var(--ap)]"
                          title="Copy formula"
                        >
                          {copiedId === `${item.id}-${fIdx}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                      <div className="text-sm md:text-base font-bold font-mono text-[var(--ink)] my-1">
                        {f.formula}
                      </div>
                      {f.explanation && (
                        <p className="text-xs text-[var(--muted)] mt-1 italic">
                          💡 {f.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Rules & Exam Traps Dual Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Core Principles */}
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Golden Exam Rules</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--ink)] leading-relaxed">
                  {item.keyRules.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Pitfalls / Traps */}
              <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Common Exam Traps to Avoid</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--ink)] leading-relaxed">
                  {item.examTraps.map((trap, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">⚠</span>
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[var(--sheet)] rounded-2xl border border-[var(--rule)]">
            <BookOpen className="w-12 h-12 mx-auto text-[var(--muted)] mb-3 opacity-40" />
            <h3 className="text-lg font-bold text-[var(--ink)] mb-1">No matching topics found</h3>
            <p className="text-xs text-[var(--muted)]">
              Try searching for &ldquo;Heron&rdquo;, &ldquo;Identity&rdquo;, &ldquo;Mole&rdquo;, &ldquo;Newton&rdquo;, or &ldquo;Cell&rdquo;.
            </p>
          </div>
        )}
      </div>

      {/* Floating Whiteboard Canvas & Quick Scientific Calculator */}
      <InteractiveScratchpad />
    </div>
  );
}
