import type { ScienceChapter } from "../types";

const ch9: ScienceChapter = {
  n: 9,
  key: "sc9",
  title: "Atoms and Molecules (Atomic Foundations)",
  short: "Atoms & Molecules",
  blurb: "Master Lavoisier & Proust's laws of chemical combination, Dalton's atomic postulates, the 1/12th Carbon-12 mass unit, criss-cross chemical formula writing, and precision mole concept numericals.",
  colorScheme: "chemistry",
  sections: [
    {
      id: "s1",
      title: "Laws of Chemical Combination & Dalton's Atomic Postulates",
      realWorldScenario: {
        title: "The Sealed Flask Combustion & Space Shuttle Fuel",
        context: "Whether water is scooped from the holy Ganges river, collected from melting Antarctic glaciers, synthesized in a NASA spacecraft fuel cell, or mined as frost on the Moon, its chemical composition is rigidly identical: exactly 1 gram of hydrogen for every 8 grams of oxygen.",
        application: "Why does nature combine elements in such unyielding, mathematically exact ratios? In 1789, Antoine Lavoisier weighed sealed reaction vessels before and after violent reactions to establish the Law of Conservation of Mass. Joseph Proust established the Law of Definite Proportions. John Dalton tied both laws together with his historic Atomic Theory, establishing the bedrock of modern stoichiometry."
      },
      content: `Around 500 BC, Indian philosopher **Maharishi Kanad** postulated that if we go on dividing matter (*Padartha*), we shall get smaller and smaller particles until we reach the smallest particle beyond which no further division is possible, which he named **Parmanu**. Greek philosophers Democritus and Leucippus independently arrived at the same idea, calling these indivisible particles **atoms** (Greek: *atomos*, meaning indivisible).

### 1. Law of Conservation of Mass (Antoine Lavoisier)
> **Statement:** Mass can neither be created nor destroyed in a chemical reaction.
$$\\text{Total Mass of Reactants} = \\text{Total Mass of Products}$$
* In any chemical change, atoms are merely rearranged, bonded, or separated; not a single atom is created or destroyed.

### 2. Law of Constant / Definite Proportions (Joseph Proust)
> **Statement:** In a chemical substance, the elements are always present in definite proportions by mass, regardless of source or method of preparation.
* **Water ($\\text{H}_2\\text{O}$):** The mass ratio of Hydrogen to Oxygen is always $1 : 8$. If $9\\text{ g}$ of water is decomposed by electrolysis, exactly $1\\text{ g}$ of hydrogen gas and $8\\text{ g}$ of oxygen gas are produced.
* **Ammonia ($\\text{NH}_3$):** Nitrogen and hydrogen are always present in the mass ratio $14 : 3$.

### 3. Dalton's Atomic Theory (1808)
Dalton provided the theoretical explanation for both laws through his postulates:
1. All matter (elements, compounds, or mixtures) is composed of very tiny particles called **atoms**.
2. Atoms are **indivisible particles**, which cannot be created or destroyed in a chemical reaction (*explains the Law of Conservation of Mass*).
3. Atoms of a given element are **identical in mass and chemical properties**.
4. Atoms of different elements have **different masses and different chemical properties**.
5. Atoms combine in the ratio of **small whole numbers** to form chemical compounds (*explains the Law of Constant Proportions*).
6. The relative number and kinds of atoms are constant in a given compound.

### 4. Atomic Mass Unit (u or amu)
Because individual atoms are impossibly tiny (a hydrogen atom has a mass of only $1.67 \\times 10^{-24}\\text{ g}$), measuring in grams is impractical.
* In 1961, **Carbon-12 ($^{12}\\text{C}$)** was universally accepted as the standard reference isotope.
* **Definition of 1 atomic mass unit (1 u):** One atomic mass unit is defined as a mass exactly equal to **one-twelfth ($\\frac{1}{12}^\\text{th}$)** the mass of one atom of Carbon-12.
* Examples: $\\text{H} = 1\\text{ u}$, $\\text{C} = 12\\text{ u}$, $\\text{N} = 14\\text{ u}$, $\\text{O} = 16\\text{ u}$, $\\text{Na} = 23\\text{ u}$, $\\text{S} = 32\\text{ u}$, $\\text{Cl} = 35.5\\text{ u}$, $\\text{Ca} = 40\\text{ u}$.`,
      keyConcepts: [
        { term: "Law of Conservation of Mass", definition: "Mass is neither created nor destroyed in a chemical reaction: Total Reactant Mass = Total Product Mass." },
        { term: "Law of Constant Proportions", definition: "In any chemical compound, elements are always combined in a fixed, definite proportion by mass." },
        { term: "Dalton's Atomic Theory", definition: "A foundational theory stating all matter consists of indivisible atoms that combine in simple whole-number ratios." },
        { term: "Atomic Mass Unit (u)", definition: "Mass exactly equal to 1/12th the mass of an unbound neutral Carbon-12 atom (1 u ≈ 1.66 × 10⁻²⁷ kg)." },
      ],
      formulas: [
        { label: "Conservation of Mass", latex: "\\sum m_{\\text{reactants}} = \\sum m_{\\text{products}}" },
        { label: "Water Mass Ratio", latex: "\\frac{m_H}{m_O} = \\frac{2 \\times 1}{16} = \\frac{1}{8}" },
        { label: "1 u Definition", latex: "1\\,\\text{u} = \\frac{1}{12} \\times \\text{Mass of one } ^{12}\\text{C atom} \\approx 1.6605 \\times 10^{-24}\\,\\text{g}" },
      ],
      workedExamples: [
        {
          title: "NCERT Activity 3.1: Verifying Conservation of Mass",
          problem: "In a reaction, 5.3 g of sodium carbonate reacted with 6.0 g of ethanoic acid. The products were 2.2 g of carbon dioxide, 0.9 g water, and 8.2 g of sodium ethanoate. Show that these observations are in agreement with the Law of Conservation of Mass.",
          formula: "\\text{Mass of Reactants} = \\text{Mass of Products}",
          steps: [
            "Reactants: Sodium carbonate + Ethanoic acid.",
            "Total mass of reactants = 5.3 g + 6.0 g = 11.3 g.",
            "Products: Carbon dioxide + Water + Sodium ethanoate.",
            "Total mass of products = 2.2 g + 0.9 g + 8.2 g = 11.3 g.",
            "Comparison: Total Reactant Mass (11.3 g) = Total Product Mass (11.3 g)."
          ],
          answer: "Since total mass before reaction equals total mass after reaction (11.3 g = 11.3 g), the data strictly obeys the Law of Conservation of Mass."
        },
        {
          title: "NCERT Example 3.1: Law of Constant Proportions",
          problem: "Hydrogen and oxygen combine in the ratio of 1:8 by mass to form water. What mass of oxygen gas would be required to react completely with 3 g of hydrogen gas?",
          formula: "\\frac{m_H}{m_O} = \\frac{1}{8} \\implies m_O = 8 \\times m_H",
          steps: [
            "By the Law of Constant Proportions, 1 g of Hydrogen requires 8 g of Oxygen.",
            "For 3 g of Hydrogen: mass of oxygen required = 3 * 8 = 24 g.",
            "Total water produced = 3 g + 24 g = 27 g."
          ],
          answer: "24 grams of oxygen gas is required to react completely with 3 g of hydrogen."
        }
      ],
      activities: [
        {
          number: "3.1",
          title: "Proving Conservation of Mass in a Sealed Conical Flask",
          materials: ["Conical flask", "Small ignition test tube", "Rubber cork", "Electronic balance", "Barium chloride solution (BaCl₂)", "Sodium sulphate solution (Na₂SO₄)"],
          steps: [
            "Pour 10 mL of sodium sulphate solution into the conical flask.",
            "Fill the small ignition tube with barium chloride solution and carefully suspend it inside the flask with thread without letting the liquids mix. Seal with the cork.",
            "Weigh the entire assembly accurately on the electronic balance and record mass M₁.",
            "Tilt and swirl the flask so the two clear solutions mix thoroughly. A dense white precipitate of barium sulphate (BaSO₄) forms.",
            "Weigh the flask again and record mass M₂."
          ],
          observation: "M₁ = M₂ down to 0.01 grams. The scale reading remains completely unchanged despite a vigorous chemical precipitate reaction.",
          conclusion: "Mass is strictly conserved during chemical transformations."
        }
      ],
      didYouKnow: "A single drop of liquid water (0.05 mL) contains approximately 1.67 sextillion (1,670,000,000,000,000,000,000) water molecules! If every person on Earth counted one molecule per second, it would take our entire global population over 6,000 years to count them all!",
      examTips: [
        "Which postulate of Dalton explains the Law of Conservation of Mass? Postulate 2: 'Atoms are indivisible particles, which cannot be created or destroyed in a chemical reaction.'",
        "Which postulate explains the Law of Constant Proportions? Postulate 5: 'Atoms combine in the ratio of small whole numbers to form compounds.'"
      ],
      questions: [
        { id: "sc9q1", type: "num", q: "When 12 g of carbon is burnt in 32 g of oxygen, 44 g of carbon dioxide is formed. How many grams of CO₂ will be formed when 12 g of carbon is burnt in 50 g of oxygen?", numAnswer: 44, hint: "Law of Definite Proportions: 12 g C can only react with 32 g O2; excess 18 g oxygen remains unreacted." },
        { id: "sc9q2", type: "mcq", q: "The standard atomic mass unit is based on which isotope?", options: ["Carbon-14", "Hydrogen-1", "Oxygen-16", "Carbon-12"], correctOption: 3, hint: "Adopted in 1961." },
        { id: "sc9q3", type: "short", q: "State the Law of Definite Proportions.", answer: "In a chemical substance, the elements are always present in definite proportions by mass.", hint: "Proust's law." }
      ]
    },
    {
      id: "s2",
      title: "Molecules, Polyatomic Ions & Criss-Cross Formula Writing",
      realWorldScenario: {
        title: "The Slaked Lime Chemistry of Ancient Monuments",
        context: "The whitewashed walls of historic forts and houses gleam brilliantly in the sun. Painters mix quicklime with water, releasing boiling hissing heat to make slaked lime. After painting, over 2-3 days, the walls turn glossy white like marble.",
        application: "This is pure ionic chemistry! Quicklime is Calcium Oxide (CaO). Adding water creates Slaked Lime, Calcium Hydroxide [Ca(OH)₂]. As it dries on the wall, it reacts with atmospheric carbon dioxide (CO₂) to produce an ultra-thin protective crust of shiny Calcium Carbonate (CaCO₃) — the identical chemical compound that makes limestone and marble! Writing correct chemical formulas reveals the exact architecture of matter."
      },
      content: `### Atoms vs. Molecules vs. Ions
* **Atom:** The smallest particle of an element that retains its chemical properties. Except for noble gases (He, Ne, Ar), individual atoms cannot exist independently.
* **Molecule:** An electrically neutral group of two or more atoms chemically bonded together by covalent forces. It is the smallest particle of an element or compound capable of independent existence.
  * **Molecules of Elements (Atomicity):** The number of atoms constituting a molecule is its **atomicity**.
    * Monoatomic: $\\text{He, Ne, Ar, Kr}$
    * Diatomic: $\\text{H}_2, \\text{O}_2, \\text{N}_2, \\text{Cl}_2, \\text{HCl}$
    * Triatomic: $\\text{O}_3$ (Ozone)
    * Tetra-atomic: $\\text{P}_4$ (Phosphorus)
    * Polyatomic: $\\text{S}_8$ (Sulfur ring)
* **Ion:** A charged atom or group of atoms:
  * **Cation:** Positively charged ion formed by loss of electrons (e.g., $\\text{Na}^+, \\text{Ca}^{2+}, \\text{Al}^{3+}$).
  * **Anion:** Negatively charged ion formed by gain of electrons (e.g., $\\text{Cl}^-, \\text{O}^{2-}, \\text{N}^{3-}$).
  * **Polyatomic Ion:** A cluster of chemically bonded atoms carrying an overall net charge (e.g., Ammonium $\\text{NH}_4^+$, Hydroxide $\\text{OH}^-$, Nitrate $\\text{NO}_3^-$, Carbonate $\\text{CO}_3^{2-}$, Sulphate $\\text{SO}_4^{2-}$, Phosphate $\\text{PO}_4^{3-}$).

### The Criss-Cross Method for Writing Chemical Formulas
To write the chemical formula of a binary compound:
1. Write the symbols of constituent elements or polyatomic radicals side-by-side (cation/metal first, anion/non-metal second).
2. Write their respective valencies or charges directly beneath each symbol.
3. **Criss-cross** the valencies to form subscripts. Simplify common factors.
4. When a polyatomic ion has a subscript of 2 or more, enclose the entire radical inside parentheses (brackets)!

#### High-Yield Formula Examples:
* **Water:** $\\text{H}^1 \\quad \\text{O}^2 \\implies \\mathbf{\\text{H}_2\\text{O}}$
* **Hydrogen Chloride:** $\\text{H}^1 \\quad \\text{Cl}^1 \\implies \\mathbf{\\text{HCl}}$
* **Magnesium Chloride:** $\\text{Mg}^2 \\quad \\text{Cl}^1 \\implies \\mathbf{\\text{MgCl}_2}$
* **Aluminum Oxide:** $\\text{Al}^3 \\quad \\text{O}^2 \\implies \\mathbf{\\text{Al}_2\\text{O}_3}$
* **Calcium Oxide:** $\\text{Ca}^2 \\quad \\text{O}^2 \\implies \\text{Ca}_2\\text{O}_2 \\implies \\mathbf{\\text{CaO}}$ (simplify $2:2 \\to 1:1$)
* **Sodium Carbonate:** $\\text{Na}^1 \\quad (\\text{CO}_3)^2 \\implies \\mathbf{\\text{Na}_2\\text{CO}_3}$
* **Calcium Hydroxide:** $\\text{Ca}^2 \\quad (\\text{OH})^1 \\implies \\mathbf{\\text{Ca(OH)}_2}$ *(Crucial: Parentheses required around OH!)*
* **Ammonium Sulphate:** $(\\text{NH}_4)^1 \\quad (\\text{SO}_4)^2 \\implies \\mathbf{(\\text{NH}_4)_2\\text{SO}_4}$

### Molecular Mass & Formula Unit Mass
* **Molecular Mass:** The sum of the atomic masses of all the atoms present in a single molecule of a substance.
  * Molecular mass of $\\text{H}_2\\text{O} = (2 \\times 1) + (1 \\times 16) = 18\\text{ u}$.
  * Molecular mass of $\\text{HNO}_3 = (1 \\times 1) + (1 \\times 14) + (3 \\times 16) = 1 + 14 + 48 = 63\\text{ u}$.
* **Formula Unit Mass:** Calculated identically to molecular mass, but used specifically for ionic substances composed of three-dimensional crystal lattices of ions rather than discrete molecules.
  * Formula unit mass of $\\text{NaCl} = 23 + 35.5 = 58.5\\text{ u}$.
  * Formula unit mass of $\\text{CaCl}_2 = 40 + (2 \\times 35.5) = 40 + 71 = 111\\text{ u}$.`,
      keyConcepts: [
        { term: "Atomicity", definition: "The total number of atoms constituting a single molecule of an element (e.g. O₂ has atomicity 2; S₈ has atomicity 8)." },
        { term: "Polyatomic Ion", definition: "A group of covalently bonded atoms that carries an overall net positive or negative electric charge (e.g., SO₄²⁻, NH₄⁺)." },
        { term: "Criss-Cross Method", definition: "A systematic algorithm where valency numbers are crossed over as subscripts to write electrically neutral chemical formulas." },
        { term: "Molecular Mass", definition: "The sum of the atomic masses of all constituent atoms in a molecule, expressed in atomic mass units (u)." },
        { term: "Formula Unit Mass", definition: "The mass of one empirical unit of an ionic crystal lattice, numerically identical to molecular mass." },
      ],
      formulas: [
        { label: "Molecular Mass Formula", latex: "M = \\sum (n_i \\times A_i)", unit: "u", explanation: "Sum of atom count times atomic mass" },
      ],
      workedExamples: [
        {
          title: "Writing Chemical Formula of Aluminum Sulphate",
          problem: "Write the chemical formula for Aluminum Sulphate using the criss-cross method and calculate its molecular mass. (Atomic masses: Al = 27 u, S = 32 u, O = 16 u)",
          formula: "\\text{Al}^{3+} \\text{ and } (\\text{SO}_4)^{2-}",
          steps: [
            "Step 1: Write symbols and valencies: Al carries valency 3; (SO₄) polyatomic radical carries valency 2.",
            "Step 2: Criss-cross valencies: 2 goes to Al subscript, 3 goes to (SO₄) subscript.",
            "Step 3: Enclose SO₄ in brackets: Al₂(SO₄)₃.",
            "Step 4: Calculate molecular mass:",
            "Mass = (2 * Al) + (3 * S) + (12 * O)",
            "= (2 * 27) + (3 * 32) + (12 * 16)",
            "= 54 + 96 + 192 = 342 u."
          ],
          answer: "Formula: Al₂(SO₄)₃; Molecular mass: 342 u."
        },
        {
          title: "Formula Unit Mass of Sodium Carbonate",
          problem: "Calculate the formula unit mass of anhydrous sodium carbonate, Na₂CO₃. (Given: Na = 23 u, C = 12 u, O = 16 u)",
          formula: "M = (2 \\times \\text{Na}) + (1 \\times \\text{C}) + (3 \\times \\text{O})",
          steps: [
            "Mass of 2 Na atoms = 2 * 23 = 46 u.",
            "Mass of 1 C atom = 1 * 12 = 12 u.",
            "Mass of 3 O atoms = 3 * 16 = 48 u.",
            "Total formula mass = 46 + 12 + 48 = 106 u."
          ],
          answer: "Formula unit mass of Na₂CO₃ = 106 u."
        }
      ],
      activities: [
        {
          number: "3.2",
          title: "Building 3D Ball-and-Stick Molecular Models",
          materials: ["Plasticine / colored clay balls", "Wooden toothpicks"],
          steps: [
            "Use red clay for Oxygen, white clay for Hydrogen, black clay for Carbon.",
            "Construct H₂O: insert two toothpicks into one red sphere at ~104.5° angle and attach white spheres.",
            "Construct CO₂: connect two red spheres to opposite sides of a black carbon sphere in a straight 180° line."
          ],
          observation: "Water is bent/V-shaped, while carbon dioxide is strictly linear.",
          conclusion: "Molecules possess defined, stable spatial geometries governed by chemical bonds."
        }
      ],
      didYouKnow: "DNA is the longest molecule in the human body. A single unfolded molecule of DNA from human chromosome 1 contains approximately 5 billion atoms and stretches over 5 centimeters long, yet coils into a nucleus only 6 micrometers wide!",
      examTips: [
        "Brackets Warning: Writing CaOH₂ instead of Ca(OH)₂ is a fatal error! CaOH₂ means 1 Calcium, 1 Oxygen, and 2 Hydrogens. Ca(OH)₂ correctly signifies 1 Calcium and 2 Hydroxide groups (2 Oxygens and 2 Hydrogens). Always enclose polyatomic ions in brackets when subscript > 1.",
        "Remember: Metals always come FIRST in chemical formulas (NaCl, not ClNa; CuO, not OCu)."
      ],
      questions: [
        { id: "sc9q4", type: "mcq", q: "What is the correct chemical formula for Magnesium Phosphate (Mg²⁺ and PO₄³⁻)?", options: ["MgPO₄", "Mg₂(PO₄)₃", "Mg₃(PO₄)₂", "Mg₃PO₄"], correctOption: 2, hint: "Criss-cross: 3 goes to Mg, 2 goes to PO4." },
        { id: "sc9q5", type: "num", q: "Calculate the molecular mass of glucose (C₆H₁₂O₆) in atomic mass units (u). (C=12, H=1, O=16)", numAnswer: 180, hint: "6*12 + 12*1 + 6*16 = 72 + 12 + 96." },
        { id: "sc9q6", type: "short", q: "What is the atomicity of ozone (O₃) and sulfur (S₈) respectively?", answer: "Ozone is triatomic (3); sulfur is polyatomic / octa-atomic (8).", hint: "Count the atoms in each molecule." }
      ]
    },
    {
      id: "s3",
      title: "The Master Mole Concept & Molar Mass Calculations",
      realWorldScenario: {
        title: "Counting Atoms by the Kilogram: The Chemist's Dozen",
        context: "Imagine walking into a bakery and asking for '12 eggs' — the baker instantly knows you want a dozen. But if an industrial chemist wants to make 10,000 tablets of paracetamol, how can she possibly count individual carbon and hydrogen atoms?",
        application: "Chemist's don't count atoms; they weigh them! The MOLE is the chemist's 'dozen' on a cosmic scale. Just as 1 dozen always equals 12 items and 1 gross equals 144 items, 1 mole always contains exactly 6.022 × 10²³ particles (Avogadro's Number). The beauty of the mole is that 1 mole of any substance has a mass in grams exactly equal to its atomic or molecular mass in 'u'!"
      },
      content: `### What is a Mole?
Because atoms and molecules have microscopically small masses, counting them individually is impossible. The scientific community adopted the **Mole** (symbol: $\\text{mol}$) as the fundamental SI unit for the amount of substance.
* One mole of any species (atoms, molecules, ions, or electrons) contains exactly:
$$\\mathbf{N_A = 6.02214076 \\times 10^{23}\\text{ particles}}$$
* This universal fundamental constant is named the **Avogadro Constant** or **Avogadro's Number ($N_A$)**, in honor of Italian scientist Amedeo Avogadro.

### The Magic Bridge: Molar Mass
The mass of 1 mole of a substance expressed in **grams** is called its **Molar Mass ($M$)**.
* **The Magic Rule:** The numerical value of the molar mass in grams ($g$) is **identical** to the atomic/molecular/formula mass in atomic mass units ($u$)!
  * 1 atom of Carbon has mass $= 12\\text{ u}$.
  * 1 mole of Carbon atoms ($6.022 \\times 10^{23}\\text{ atoms}$) has mass $= \\mathbf{12\\text{ grams}}$.
  * 1 molecule of Water has mass $= 18\\text{ u}$.
  * 1 mole of Water molecules ($6.022 \\times 10^{23}\\text{ molecules}$) has mass $= \\mathbf{18\\text{ grams}}$.
  * 1 molecule of Glucose has mass $= 180\\text{ u}$.
  * 1 mole of Glucose ($6.022 \\times 10^{23}\\text{ molecules}$) has mass $= \\mathbf{180\\text{ grams}}$.

### The 4 Master Mole Formulas (CBSE Problem-Solving Hub):
Let:
* $n$ = Number of moles
* $m$ = Given mass of substance in grams (g)
* $M$ = Molar mass of substance (g/mol)
* $N$ = Number of particles (atoms, molecules, or ions)
* $N_A$ = Avogadro's number ($6.022 \\times 10^{23}$)

1. **Moles from Given Mass:**
$$n = \\frac{m}{M}$$
2. **Mass from Number of Moles:**
$$m = n \\times M$$
3. **Number of Particles from Moles:**
$$N = n \\times N_A$$
4. **Master Combined Formula (Mass to Particles):**
$$n = \\frac{m}{M} = \\frac{N}{N_A} \\implies \\mathbf{N = \\frac{m}{M} \\times N_A}$$`,
      keyConcepts: [
        { term: "Mole (mol)", definition: "The SI unit of amount of substance, containing exactly 6.022 × 10²³ elementary entities." },
        { term: "Avogadro Constant (N_A)", definition: "6.022 × 10²³ particles per mole. The exact number of atoms in 12 grams of Carbon-12." },
        { term: "Molar Mass (M)", definition: "The mass of 1 mole of a substance in grams (g/mol), numerically equal to molecular mass in u." },
        { term: "Gram Atomic Mass", definition: "The atomic mass of an element expressed in grams (mass of 1 mole of atoms)." },
        { term: "Gram Molecular Mass", definition: "The molecular mass of a substance expressed in grams (mass of 1 mole of molecules)." },
      ],
      formulas: [
        { label: "Number of Moles", latex: "n = \\frac{m}{M} = \\frac{N}{N_A}", unit: "mol" },
        { label: "Particle Count", latex: "N = \\frac{m}{M} \\times N_A", explanation: "Calculates total atoms/molecules from mass" },
        { label: "Mass of Single Atom", latex: "m_{\\text{atom}} = \\frac{M}{N_A}", unit: "g", explanation: "Mass of one individual atom in grams" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 3.3: Calculating Moles from Mass",
          problem: "Calculate the number of moles for the following: (i) 52 g of Helium (finding mole from mass), (ii) 12.044 × 10²³ number of Helium atoms (finding mole from number of particles). (Atomic mass of He = 4 u)",
          formula: "(i) \\; n = \\frac{m}{M}, \\quad (ii) \\; n = \\frac{N}{N_A}",
          steps: [
            "For (i): Given mass m = 52 g. Molar mass of He M = 4 g/mol.",
            "n = m / M = 52 / 4 = 13 moles.",
            "For (ii): Given number of particles N = 12.044 * 10²³.",
            "Avogadro constant NA = 6.022 * 10²³.",
            "n = N / NA = (12.044 * 10²³) / (6.022 * 10²³) = 2 moles."
          ],
          answer: "(i) 13 moles of He. (ii) 2 moles of He."
        },
        {
          title: "NCERT Example 3.5: Calculating Number of Particles from Mass",
          problem: "Calculate the number of molecules of glucose (C₆H₁₂O₆) present in 36 g of glucose. (Molar mass of C₆H₁₂O₆ = 180 g/mol)",
          formula: "N = \\frac{m}{M} \\times N_A",
          steps: [
            "Given: mass m = 36 g, molar mass M = 180 g/mol.",
            "Number of moles n = m / M = 36 / 180 = 0.2 mol.",
            "Number of molecules N = n * NA = 0.2 * (6.022 * 10²³)",
            "= 1.2044 * 10²³ molecules."
          ],
          answer: "Number of glucose molecules = 1.2044 × 10²³ molecules."
        },
        {
          title: "Mass of a Single Atom in Grams",
          problem: "Calculate the actual mass of one single atom of silver in grams. (Molar mass of Ag = 108 g/mol)",
          formula: "m_{\\text{single atom}} = \\frac{M}{N_A}",
          steps: [
            "1 mole of Ag atoms has mass = 108 g.",
            "1 mole contains 6.022 * 10²³ atoms.",
            "Mass of 1 atom = 108 / (6.022 * 10²³) g",
            "≈ 1.793 * 10⁻²² grams."
          ],
          answer: "Mass of one silver atom = 1.793 × 10⁻²² g."
        }
      ],
      activities: [
        {
          number: "3.4",
          title: "Visualizing 1 Mole of Common Household Substances",
          materials: ["Laboratory electronic balance", "Water", "Table salt (NaCl)", "Sugar (C₁₂H₂₂O₁₁)", "Graphite pencils"],
          steps: [
            "Weigh exactly 18.0 g of water into a graduated cylinder. This liquid volume (18 mL) contains 1 mole (6.022 × 10²³ molecules).",
            "Weigh exactly 58.5 g of table salt into a watch glass. This contains 1 mole of NaCl formula units.",
            "Weigh 12.0 g of charcoal/graphite (pure Carbon). This small handful contains 1 mole of carbon atoms."
          ],
          observation: "Even though all three samples look physically different in volume and weight, every single sample contains the exact same number of particles: 6.022 × 10²³!",
          conclusion: "A mole represents a fixed count of fundamental particles, bridged to measurable macroscopic mass."
        }
      ],
      didYouKnow: "If you had 1 mole of dollar bills ($6.022 × 10²³) and spent 1 billion dollars every second, it would take you over 19 million years to spend all your money!",
      examTips: [
        "Atoms vs Molecules Trap: Always check if the question asks for 'moles of ATOMS' or 'moles of MOLECULES'. For oxygen gas (O₂), 32 g is 1 mole of O₂ molecules, but 2 moles of oxygen atoms! Misreading this is the single most common mistake in Class 9 chemistry exams.",
        "Always memorize: Avogadro's number is 6.022 × 10²³."
      ],
      questions: [
        { id: "sc9q7", type: "num", q: "How many moles are present in 88 g of Carbon Dioxide (CO₂)? (Molar mass = 44 g/mol)", numAnswer: 2, hint: "n = m / M = 88 / 44." },
        { id: "sc9q8", type: "num", q: "What is the mass (in grams) of 0.5 moles of water (H₂O)?", numAnswer: 9, hint: "m = n * M = 0.5 * 18." },
        { id: "sc9q9", type: "num", q: "How many moles of atoms are contained in 64 g of oxygen gas (O₂)?", numAnswer: 4, hint: "64 g O2 = 2 moles of O2 molecules = 4 moles of O atoms." }
      ]
    }
  ],
  keyPoints: [
    "Law of Conservation of Mass: Total mass of reactants equals total mass of products in any reaction.",
    "Law of Constant Proportions: Elements combine in fixed, definite mass ratios (H₂O is always 1:8).",
    "Dalton's atomic theory explained chemical combination by postulating indivisible atoms.",
    "1 atomic mass unit (1 u) = 1/12th mass of a single Carbon-12 atom.",
    "Criss-cross method: Valencies cross over to become subscripts; polyatomic radicals use parentheses when subscript > 1.",
    "1 mole = 6.022 × 10²³ particles (Avogadro Constant N_A).",
    "Molar mass in grams equals molecular/atomic mass in u.",
    "Master formulas: n = m / M = N / N_A."
  ],
  ncertExercises: [
    { id: "sc9e1", type: "num", q: "Convert 12 g of oxygen gas (O₂) into moles (to 2 decimal places).", numAnswer: 0.375, tolerance: 0.02, hint: "Molar mass of O₂ is 32 g/mol. n = 12 / 32 = 0.375 mol." },
    { id: "sc9e2", type: "short", q: "Write down the names of compounds represented by the following formulae: (a) Al₂(SO₄)₃, (b) CaCl₂, (c) KNO₃.", answer: "(a) Aluminium sulphate, (b) Calcium chloride, (c) Potassium nitrate." },
    { id: "sc9e3", type: "long", q: "Calculate the number of aluminum ions present in 0.051 g of aluminum oxide (Al₂O₃). (Atomic mass of Al = 27 u)" }
  ]
};

export default ch9;
