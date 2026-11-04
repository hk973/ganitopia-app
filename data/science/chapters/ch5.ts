import type { ScienceChapter } from "../types";

const ch5: ScienceChapter = {
  n: 5,
  key: "sc5",
  title: "Is Matter Around Us Pure? (Mixtures & Separation)",
  short: "Mixtures & Separation",
  blurb: "Explore pure substances vs. mixtures, true solutions, concentration percentage formulas, colloids, the Tyndall effect, and precision chemical separation techniques.",
  colorScheme: "chemistry",
  sections: [
    {
      id: "s1",
      title: "Pure Substances, Solutions & Concentration Formulas",
      realWorldScenario: {
        title: "The Grocery Store 'Pure Ghee' Myth",
        context: "When a grocery package claims '100% Pure Ghee' or 'Pure Milk', to a common consumer it means unadulterated with chemicals. But to a chemist, milk is definitely NOT a pure substance!",
        application: "In chemistry, a 'pure substance' consists of only a single type of constituent particle (an element like pure Gold 24K, or a compound like pure distilled water H₂O). Milk is actually a complex mixture of water, proteins, fats, lactose sugar, and mineral salts. Distinguishing between pure compounds and solutions is essential in pharmacology, forensics, and industrial manufacturing."
      },
      content: `### Pure Substance vs. Mixture
* **Pure Substance:** A substance that consists of a single type of particle possessing fixed physical and chemical properties throughout (e.g., pure iron, sodium chloride, glucose). Cannot be broken down into simpler constituents by any physical separation technique.
* **Mixture:** Formed by simply combining two or more pure substances in any variable proportion without chemical bonding. The components retain their distinct individual properties (e.g., seawater, brass alloy, air).

### Homogeneous vs. Heterogeneous Mixtures
* **Homogeneous Mixture:** Possesses completely uniform composition and properties throughout. There are no visible boundaries of separation between components (e.g., salt dissolved in water, clean air, bronze).
* **Heterogeneous Mixture:** Contains physically distinct parts and non-uniform composition. Visible boundaries exist (e.g., sand in water, oil and vinegar, concrete, gunpowder).

### Characteristics of a True Solution
A solution is a homogeneous mixture of two or more substances:
1. **Solvent:** The medium that dissolves the other component, usually present in the larger quantity (e.g., water in brine).
2. **Solute:** The substance that dissolves in the solvent, usually present in lesser quantity (e.g., salt in brine).
3. **Particle Size:** Extremely tiny — less than **1 nanometer ($1\\text{ nm} = 10^{-9}\\text{ m}$)** in diameter.
4. **Light Scattering:** Solute particles are so small they do **not** scatter a beam of light. A laser beam directed through a clear salt solution leaves no visible illuminated path.
5. **Stability:** True solutions are completely stable; solute particles never settle down over time.
6. **Filtration:** Solute particles pass through filter paper pores easily; they cannot be separated by physical filtration.

### Solubility, Saturated & Unsaturated Solutions
* **Saturated Solution:** A solution in which no more solute can be dissolved at a given temperature.
* **Unsaturated Solution:** A solution where more solute can still be dissolved at that temperature.
* **Solubility:** The maximum amount of solute (in grams) that can dissolve in $100\\text{ g}$ of a solvent at a specified temperature. Solubility generally **increases with rising temperature** for solid solutes in liquids.

### Concentration of Solutions (Formulas & Mass Percentages)
The concentration of a solution is the amount of solute present in a given amount of solution:

1. **Mass by Mass Percentage of a Solution:**
$$\\text{Mass } \\% = \\frac{\\text{Mass of Solute}}{\\text{Mass of Solution}} \\times 100$$
$$\\text{Where } \\text{Mass of Solution} = \\text{Mass of Solute} + \\text{Mass of Solvent}$$

2. **Mass by Volume Percentage:**
$$\\text{Mass by Volume } \\% = \\frac{\\text{Mass of Solute (g)}}{\\text{Volume of Solution (mL)}} \\times 100$$

3. **Volume by Volume Percentage:**
$$\\text{Volume by Volume } \\% = \\frac{\\text{Volume of Solute}}{\\text{Volume of Solution}} \\times 100$$`,
      keyConcepts: [
        { term: "Pure Substance", definition: "A substance consisting of only one type of particle with invariant physical and chemical properties." },
        { term: "True Solution", definition: "A homogeneous mixture with solute particles smaller than 1 nm that never settle and do not scatter light." },
        { term: "Solute & Solvent", definition: "Solute is the dissolved component (minor); solvent is the dissolving medium (major)." },
        { term: "Saturated Solution", definition: "A solution containing the maximum possible dissolved solute at a specified temperature." },
        { term: "Solubility", definition: "The mass of solute in grams that saturates 100 g of solvent at a specific temperature." },
        { term: "Mass Percentage", definition: "The grams of solute per 100 g of total solution: (Mass of solute / Mass of solution) × 100." },
      ],
      formulas: [
        { label: "Mass by Mass %", latex: "\\text{Concentration} = \\frac{\\text{Mass of Solute}}{\\text{Mass of Solution}} \\times 100", unit: "%" },
        { label: "Total Mass of Solution", latex: "\\text{Mass}_{\\text{soln}} = \\text{Mass}_{\\text{solute}} + \\text{Mass}_{\\text{solvent}}", unit: "g" },
        { label: "Mass by Volume %", latex: "\\text{Mass/Vol } \\% = \\frac{\\text{Mass of Solute (g)}}{\\text{Volume of Solution (mL)}} \\times 100", unit: "%" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 2.1: Mass by Mass Percentage Calculation",
          problem: "A solution contains 40 g of common salt in 320 g of water. Calculate the concentration in terms of mass by mass percentage of the solution.",
          formula: "\\text{Mass \\%} = \\frac{\\text{Mass of Solute}}{\\text{Mass of Solute} + \\text{Mass of Solvent}} \\times 100",
          steps: [
            "Given: Mass of solute (salt) = 40 g.",
            "Mass of solvent (water) = 320 g.",
            "Total mass of solution = Mass of solute + Mass of solvent = 40 g + 320 g = 360 g.",
            "Mass % = (40 / 360) * 100 = (1 / 9) * 100 ≈ 11.11%."
          ],
          answer: "Concentration of the salt solution = 11.11% (w/w)."
        },
        {
          title: "Finding Mass of Solute from Percentage",
          problem: "How much glucose is required to prepare 250 g of a 5% (by mass) glucose solution for medical intravenous injection?",
          formula: "\\text{Mass of Solute} = \\frac{\\text{Percentage} \\times \\text{Mass of Solution}}{100}",
          steps: [
            "Given: Mass % = 5%, Total mass of solution = 250 g.",
            "5 = (Mass of glucose / 250) * 100.",
            "Mass of glucose = (5 * 250) / 100 = 1250 / 100 = 12.5 g.",
            "Mass of water required = 250 g - 12.5 g = 237.5 g."
          ],
          answer: "12.5 grams of pure glucose dissolved in 237.5 g of sterile water."
        }
      ],
      activities: [
        {
          number: "2.3",
          title: "Testing Saturated Solutions & Effect of Temperature",
          materials: ["Glass beaker", "50 mL water", "Common salt", "Glass stirring rod", "Bunsen burner & tripod"],
          steps: [
            "Add a spatula of salt to 50 mL room temperature water and stir until fully dissolved.",
            "Continue adding salt spatula by spatula until no more salt dissolves and excess crystals rest at the bottom (saturation reached).",
            "Gently heat the beaker over the burner while stirring."
          ],
          observation: "Upon heating, the undissolved salt crystals completely dissolve into solution. When allowed to cool undisturbed, tiny salt crystals re-crystallize out.",
          conclusion: "Solubility of solid solutes in liquids increases with temperature. A saturated solution becomes unsaturated when heated."
        }
      ],
      didYouKnow: "Brass is a solid homogeneous solution (an alloy) of 30% zinc and 70% copper. Because alloys cannot be separated by physical filtration, they are classified as solutions, yet retain the individual properties of their constituent metals!",
      examTips: [
        "Mass of Solution Trap: Never divide mass of solute by mass of SOLVENT! Always add them together first: Mass of Solution = Mass of Solute + Mass of Solvent. Dividing 40 by 320 gives 12.5%, which is WRONG; dividing 40 by 360 gives the correct 11.1%.",
        "Tincture of Iodine: Iodine is the solute (solid) and alcohol is the solvent (liquid)."
      ],
      questions: [
        { id: "sc5q1", type: "num", q: "To make a saturated solution, 36 g of sodium chloride is dissolved in 100 g of water at 293 K. Find its concentration in mass percentage (to 1 decimal place).", numAnswer: 26.5, tolerance: 0.2, hint: "Total solution mass = 36 + 100 = 136 g. % = (36 / 136) * 100." },
        { id: "sc5q2", type: "mcq", q: "In tincture of iodine, the solute and solvent are respectively:", options: ["Alcohol and iodine", "Iodine and alcohol", "Iodine and water", "Water and iodine"], correctOption: 1, hint: "Iodine crystals are dissolved in alcohol." },
        { id: "sc5q3", type: "mcq", q: "Which of the following is a homogeneous mixture?", options: ["Chalk powder in water", "Soda water", "Muddy pond water", "Smoke"], correctOption: 1, hint: "Dissolved CO2 gas in water forms a single uniform phase." }
      ]
    },
    {
      id: "s2",
      title: "Suspensions, Colloids & The Tyndall Effect",
      realWorldScenario: {
        title: "Sunbeams in a Dense Forest & Headlights in the Fog",
        context: "When driving on a chilly winter morning, car headlights illuminate a blinding, glowing cone of fog. Similarly, walking inside a dense canopy forest early morning, distinct sunbeams pierce through the misty tree branches.",
        application: "You are witnessing the Tyndall Effect! Air contains millions of microscopic suspended liquid water droplets and smoke particles whose diameters approximate the wavelength of visible light. These colloidal droplets scatter light in all directions, illuminating the beam's geometric path in 3D space."
      },
      content: `### Comparing the Three Classes of Mixtures:
| Property | True Solution | Colloid | Suspension |
| :--- | :--- | :--- | :--- |
| **Type** | Homogeneous | Heterogeneous (looks homogeneous) | Heterogeneous |
| **Particle Size** | $< 1\\text{ nm}$ ($< 10^{-9}\\text{ m}$) | $1\\text{ nm}$ to $100\\text{ nm}$ | $> 100\\text{ nm}$ ($> 10^{-7}\\text{ m}$) |
| **Visibility** | Invisible under microscope | Visible only under electron microscope | Visible to naked eye |
| **Filterability** | Passes through filter paper | Passes through filter paper | Separated by filter paper |
| **Stability** | Completely stable (no settling) | Stable (does not settle under gravity) | Unstable (particles settle down) |
| **Tyndall Effect** | Does **not** show | **Shows** distinct Tyndall effect | Shows when dispersed, lost after settling |
| **Examples** | Salt in water, sugar in water | Milk, fog, ink, blood, gelatin | Chalk in water, muddy water, sand |

### The Tyndall Effect Explained
When a fine beam of light passes through a colloidal solution, the colloidal particles are large enough to scatter the light rays in all directions.
* This optical scattering illuminates the path of light, rendering the beam clearly visible.
* Named after British physicist **John Tyndall**.
* True solutions do not show the Tyndall effect because their particles are too tiny ($< 1\\text{ nm}$) to scatter visible light waves.

### Components of a Colloid:
1. **Dispersed Phase:** The solute-like component or particles dispersed in the medium.
2. **Dispersion Medium:** The continuous medium in which the dispersed phase particles are suspended.

### Classification of Colloids (NCERT Master Reference Table):
* **Aerosol:** Liquid or solid in gas $\\to$ Fog, clouds, mist, automobile exhaust, smoke.
* **Foam:** Gas in liquid $\\to$ Shaving cream, soap lather.
* **Emulsion:** Liquid in liquid $\\to$ Milk, face cream.
* **Sol:** Solid in liquid $\\to$ Milk of magnesia, mud, watercolor paint.
* **Solid Foam:** Gas in solid $\\to$ Foam rubber, sponge, pumice stone.
* **Gel:** Liquid in solid $\\to$ Jelly, cheese, butter.
* **Solid Sol:** Solid in solid $\\to$ Colored gemstones, milky glass.`,
      keyConcepts: [
        { term: "Colloid", definition: "A heterogeneous system with particle size between 1 nm and 100 nm that remains stable and scatters light." },
        { term: "Suspension", definition: "A heterogeneous mixture with particles > 100 nm that settle under gravity and can be separated by filter paper." },
        { term: "Tyndall Effect", definition: "The optical scattering of light by colloidal or fine suspended particles, making the path of the beam visible." },
        { term: "Dispersed Phase", definition: "The discontinuous substance distributed in colloidal particle size throughout the dispersion medium." },
        { term: "Dispersion Medium", definition: "The continuous bulk phase in which colloidal particles are suspended." },
        { term: "Emulsion", definition: "A colloid consisting of liquid droplets dispersed in a liquid continuous medium (e.g., milk)." },
      ],
      formulas: [
        { label: "Particle Size Hierarchy", latex: "d_{\\text{solution}} < 1\\,\\text{nm} < d_{\\text{colloid}} < 100\\,\\text{nm} < d_{\\text{suspension}}" },
      ],
      workedExamples: [
        {
          title: "Classifying Mixtures & Tyndall Effect",
          problem: "You are given three unmarked beakers: A (Copper sulphate dissolved in water), B (Full-cream milk diluted with water), and C (Fine wheat flour stirred in water). Explain how a laser pointer and filter paper can decisively identify each.",
          steps: [
            "Step 1 (Laser Test): Shine the laser horizontally through each beaker in a dark room.",
            "- In Beaker A: Path of laser beam is completely dark and invisible -> Beaker A is a True Solution.",
            "- In Beaker B: The entire beam lights up as a glowing luminous track -> Beaker B is a Colloid.",
            "- In Beaker C: Beam is scattered while cloudy, but settles if left alone -> Beaker C is a Suspension.",
            "Step 2 (Filtration Test): Pour contents of each through dry filter paper in a funnel.",
            "- Beaker A and B leave zero residue on filter paper.",
            "- Beaker C leaves white flour residue on filter paper, and clear water collects as filtrate.",
            "Conclusion: A = Copper sulphate solution, B = Milk (colloid), C = Flour suspension."
          ],
          answer: "Laser distinguishes solution (no beam) from colloid/suspension; filtration separates suspension from colloid."
        }
      ],
      activities: [
        {
          number: "2.2",
          title: "Observing the Tyndall Effect with Milk vs Salt Solution",
          materials: ["Two glass tumblers", "Table salt", "A few drops of milk", "Water", "Torch or laser pointer"],
          steps: [
            "Fill tumbler 1 with water and dissolve 2 spoons of salt (true solution).",
            "Fill tumbler 2 with water and add 5 drops of milk (colloid).",
            "In a darkened room, direct the torch beam through tumbler 1, then tumbler 2. Look from the side at 90°."
          ],
          observation: "In tumbler 1, the light path is dark and undetectable. In tumbler 2, the beam of light glows brilliantly through the milky water.",
          conclusion: "Colloidal milk particles scatter light, confirming the Tyndall effect."
        }
      ],
      didYouKnow: "The magnificent blue color of the daytime sky and the fiery red glow of sunset are colossal planetary examples of the Tyndall effect, caused by atmospheric nitrogen and oxygen molecules scattering short blue wavelengths during the day and allowing long red wavelengths to pass through at sunset!",
      examTips: [
        "Crucial CBSE Classification: Milk is a HETEROGENEOUS mixture (colloid/emulsion), even though it appears milky white and uniform to the naked eye. Under a microscope, fat globules floating in water are clearly visible.",
        "Remember that a colloid CANNOT be separated by ordinary filter paper — only by centrifugation."
      ],
      questions: [
        { id: "sc5q4", type: "mcq", q: "Which of the following will show the Tyndall effect?", options: ["Salt solution", "Milk", "Copper sulphate solution", "Sugar solution"], correctOption: 1, hint: "Which one is a colloid?" },
        { id: "sc5q5", type: "mcq", q: "Smoke is an example of which type of colloid?", options: ["Aerosol (solid in gas)", "Foam", "Sol", "Gel"], correctOption: 0, hint: "Solid carbon soot particles suspended in air." },
        { id: "sc5q6", type: "short", q: "Why does a true solution not show the Tyndall effect?", answer: "Because the solute particles are extremely tiny (less than 1 nm in diameter) and cannot scatter visible light rays.", hint: "Relate particle diameter to light wavelength." }
      ]
    },
    {
      id: "s3",
      title: "Physical Separation Techniques: Chromatography, Distillation & Crystallization",
      realWorldScenario: {
        title: "Forensic Crime Lab & The Black Ink Mystery",
        context: "A forged signature on a multi-million-rupee will was written with a black ballpoint pen. The suspect owns three black pens from different manufacturers. How do forensic detectives prove which pen wrote the signature?",
        application: "Using Paper Chromatography! Black ink is not a single color; it is a mixture of distinct synthetic organic dyes. A spot of the ink is placed on chromatography paper dipped in water. As water climbs the paper via capillary action, dyes with higher water solubility travel faster, while dyes with stronger paper affinity lag behind. Each brand leaves a distinct color fingerprint pattern (Rf values), pinpointing the exact pen used."
      },
      content: `The components of a heterogeneous or homogeneous mixture can be separated into pure substances using differences in physical properties:

### 1. Evaporation: Separating Non-Volatile Solute from Volatile Solvent
* **Used for:** Recovering colored dye from ink, or salt from seawater.
* **Principle:** The volatile liquid solvent evaporates upon heating, leaving behind the solid non-volatile solute residue in a watch glass or evaporating dish.

### 2. Centrifugation: Density Separation Under High-Speed Spin
* **Principle:** When a suspension or emulsion is spun rapidly inside a centrifuge rotor, denser particles are forced to the bottom while lighter liquid remains at the top.
* **Applications:**
  1. Diagnostic laboratories for blood and urine tests (separating red blood cells from clear plasma).
  2. Dairies to separate butter/cream from milk.
  3. Washing machines to squeeze water out of wet clothes during spin cycle.

### 3. Separating Funnel: Immiscible Liquids
* **Principle:** Immiscible liquids separate into distinct layers based on differences in their densities (e.g., kerosene oil and water).
* The heavier liquid (water, density $1.0\\text{ g/cm}^3$) forms the lower layer and is drained off through the stopcock first; the lighter oil ($0.8\\text{ g/cm}^3$) remains behind.

### 4. Sublimation: Volatile Sublimable Solids
* **Principle:** Separating a mixture containing a sublimable component (which converts directly from solid to vapor without melting) from a non-sublimable impurity (e.g., salt).
* **Examples of sublimable substances:** Ammonium chloride ($\\text{NH}_4\\text{Cl}$), Camphor, Naphthalene balls, Anthracene, and Iodine.

### 5. Chromatography: Differential Solubility in a Moving Solvent
* **Principle:** Components of a mixture dissolve in the same solvent, but travel at different rates up a porous stationary medium (filter paper) according to their relative solubility.
* **Applications:** Separating dye pigments in natural colors, separating plant chlorophyll pigments, and detecting narcotics/drugs in blood samples.

### 6. Distillation & Fractional Distillation: Miscible Liquids
* **Simple Distillation:** Used to separate two miscible liquids that boil without decomposing and have a **sufficient difference in boiling points ($> 25\\text{ K}$ or $> 25^\\circ\\text{C}$)**. E.g., separating acetone (boiling point $56^\\circ\\text{C}$) and water ($100^\\circ\\text{C}$).
* **Fractional Distillation:** Used when the difference in boiling points is **less than $25\\text{ K}$ ($< 25^\\circ\\text{C}$)**.
  * Employs a **fractionating column** packed with glass beads to provide a large surface area for repeated cycles of vapor condensation and re-evaporation.
  * **Applications:** Separating different fractions of petroleum (petrol, diesel, kerosene), and separating atmospheric air gases ($\\text{N}_2$ at $-196^\\circ\\text{C}$, $\\text{Ar}$ at $-186^\\circ\\text{C}$, $\\text{O}_2$ at $-183^\\circ\\text{C}$).

### 7. Crystallization: Obtaining Pure Solid from Impure Sample
* **Principle:** Purifying solids by cooling a hot, concentrated saturated solution until pure geometric crystals form.
* **Why Crystallization is Superior to Evaporation:**
  1. Some solids (like sugar) decompose or get charred when heated to dryness.
  2. Soluble impurities remain dissolved in the mother liquor in crystallization, yielding 100% pure crystals, whereas evaporation traps impurities in the residue!
* **Applications:** Purifying commercial alum (phitkari) and copper sulphate ($\\text{CuSO}_4$).`,
      keyConcepts: [
        { term: "Centrifugation", definition: "A separation technique using high centrifugal force to separate dense particles from lighter liquids." },
        { term: "Sublimation", definition: "The transition of a substance directly from solid to vapor phase without passing through the liquid phase." },
        { term: "Chromatography", definition: "Separation of solute components based on differential rates of migration across a stationary phase by a mobile solvent." },
        { term: "Simple Distillation", definition: "Separation of miscible liquids with boiling point differences greater than 25 K." },
        { term: "Fractional Distillation", definition: "Separation of miscible liquids with boiling point differences under 25 K using a beaded fractionating column." },
        { term: "Crystallization", definition: "Separation and purification of pure solid crystals from an impure solution by controlled cooling." },
      ],
      formulas: [
        { label: "Boiling Point Threshold", latex: "\\Delta T_b > 25\\,\\text{K} \\implies \\text{Simple Distillation}; \\quad \\Delta T_b < 25\\,\\text{K} \\implies \\text{Fractional Distillation}" },
      ],
      workedExamples: [
        {
          title: "Separation of Air into Component Gases",
          problem: "Air contains 78.1% Nitrogen (B.P. -196°C), 0.9% Argon (B.P. -186°C), and 20.9% Oxygen (B.P. -183°C). Explain how pure Oxygen gas is separated from atmospheric air.",
          steps: [
            "Step 1: Compression and Cooling: Air is compressed to high pressure (e.g. 200 atm) and cooled by refrigeration to remove CO2 (solidifies as dry ice) and water vapor (freezes as ice).",
            "Step 2: Liquefaction: Cold compressed air is allowed to expand rapidly through a jet nozzle (Joule-Thomson effect) to obtain liquid air.",
            "Step 3: Fractional Distillation Column: Liquid air is slowly warmed up in a tall fractional distillation column.",
            "Step 4: Separation by Boiling Point:",
            "- Nitrogen has the lowest boiling point (-196°C) and boils off first at the top of the column.",
            "- Argon boils next at -186°C and is collected from the middle section.",
            "- Oxygen has the highest boiling point (-183°C) and remains liquid longest, collected from the bottom of the column."
          ],
          answer: "Separated via fractional distillation of liquid air based on boiling points: N₂ (-196°C) -> Ar (-186°C) -> O₂ (-183°C)."
        }
      ],
      activities: [
        {
          number: "2.7",
          title: "Paper Chromatography of Black Ink",
          materials: ["Whatman filter paper strip (20 cm x 3 cm)", "Water-soluble black sketch pen", "Glass beaker", "Pencil & ruler", "Water"],
          steps: [
            "Draw a horizontal pencil line 3 cm above the bottom edge of the paper strip.",
            "Place a tiny concentrated drop of black ink on the line and let it dry.",
            "Lower the strip into the beaker containing 1 cm water so the ink spot remains just above the water level.",
            "Cover the beaker and let water rise by capillary action for 15 minutes."
          ],
          observation: "As water moves up, the single black dot separates into distinct colored bands of yellow, red, and blue migrating at different heights.",
          conclusion: "Black ink is a mixture of multiple dyes that have different solubilities in water and different affinities for paper."
        }
      ],
      didYouKnow: "Crude petroleum oil pumped out of the ground is an oily dark sludge of hundreds of hydrocarbons. A single 50-meter-tall fractional distillation refinery tower splits it into LPG, gasoline/petrol, jet aviation fuel, diesel, lubricating oil, paraffin wax, and asphalt road tar!",
      examTips: [
        "Why is crystallization better than simple evaporation? (Guaranteed 2-mark question): (1) Evaporation can char or decompose sensitive compounds like sugar; (2) In evaporation, soluble impurities remain trapped in the dried solid, whereas in crystallization, impurities remain dissolved in the mother liquor.",
        "Fractional distillation is mandated whenever boiling point difference ΔT < 25 K."
      ],
      questions: [
        { id: "sc5q7", type: "mcq", q: "To separate a mixture of acetone (B.P. 56°C) and water (B.P. 100°C), the best method is:", options: ["Separating funnel", "Simple distillation", "Fractional distillation", "Sublimation"], correctOption: 1, hint: "Boiling point difference = 100 - 56 = 44°C (> 25°C)." },
        { id: "sc5q8", type: "mcq", q: "Which of the following mixtures can be separated by a separating funnel?", options: ["Kerosene and water", "Alcohol and water", "Salt and water", "Acetone and water"], correctOption: 0, hint: "Requires two immiscible liquids that form distinct layers." },
        { id: "sc5q9", type: "short", q: "Name the technique used to separate butter from curd/milk.", answer: "Centrifugation", hint: "High-speed spinning separation." }
      ]
    }
  ],
  keyPoints: [
    "Pure substances have fixed composition and properties; mixtures combine substances physically in variable proportions.",
    "True solutions are homogeneous, particle size < 1 nm, stable, do not scatter light.",
    "Mass % = (Mass of Solute / Total Mass of Solution) × 100.",
    "Colloids (1 nm - 100 nm) are heterogeneous, stable, and scatter light (Tyndall Effect).",
    "Suspensions (> 100 nm) are unstable, settle under gravity, and can be filtered.",
    "Separation methods: Centrifugation (density), Separating Funnel (immiscible liquids), Sublimation (camphor/NH4Cl), Chromatography (differential solubility).",
    "Simple distillation for ΔTb > 25 K; Fractional distillation with beaded column for ΔTb < 25 K (air, petroleum).",
    "Crystallization yields pure solids without charring or trapping soluble impurities."
  ],
  ncertExercises: [
    { id: "sc5e1", type: "num", q: "Calculate the mass of potassium chloride required to prepare a 20% (by mass) solution in 160 g of water.", numAnswer: 40, tolerance: 0.5, hint: "20 = (m / (m + 160)) * 100 -> 0.2(m + 160) = m -> 32 = 0.8m -> m = 40 g." },
    { id: "sc5e2", type: "short", q: "Why is water called a compound rather than a mixture?", answer: "Water (H2O) has hydrogen and oxygen chemically combined in a fixed 1:8 mass ratio, has entirely new properties from its constituent gases, and cannot be separated physically." },
    { id: "sc5e3", type: "long", q: "Explain fractional distillation of liquid air with a labeled schematic flow diagram." }
  ]
};

export default ch5;
