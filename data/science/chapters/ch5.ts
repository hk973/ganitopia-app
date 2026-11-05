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
* Pure Substance: A substance that consists of a single type of particle possessing fixed physical and chemical properties throughout (e.g., pure iron, pure copper, sodium chloride, glucose). It cannot be broken down into simpler constituents by any physical separation technique.
* Mixture: Formed by simply combining two or more pure substances in any variable proportion without chemical bonding. The components retain their distinct individual properties (e.g., seawater, brass alloy, air).

### Homogeneous vs. Heterogeneous Mixtures
* Homogeneous Mixture: Possesses completely uniform composition and properties throughout. There are no visible boundaries of separation between components (e.g., salt dissolved in water, sugar in water, clean air, bronze alloy).
* Heterogeneous Mixture: Contains physically distinct parts and non-uniform composition. Visible boundaries exist (e.g., sand in water, oil and vinegar, concrete, gunpowder).

### Characteristics of a True Solution
A solution is a homogeneous mixture of two or more substances:
1. Solvent: The medium that dissolves the other component, usually present in the larger quantity (e.g., water in brine).
2. Solute: The substance that dissolves in the solvent, usually present in lesser quantity (e.g., salt in brine).
3. Particle Size: Extremely tiny — less than 1 nanometer (1 nm = 10⁻⁹ m) in diameter.
4. Light Scattering: Solute particles are so small they do not scatter a beam of light. A laser beam directed through a clear salt solution leaves no visible illuminated path.
5. Stability: True solutions are completely stable; solute particles never settle down over time.
6. Filtration: Solute particles pass through filter paper pores easily; they cannot be separated by physical filtration.

### Solubility, Saturated & Unsaturated Solutions
* Saturated Solution: A solution in which no more solute can be dissolved at a given temperature.
* Unsaturated Solution: A solution where more solute can still be dissolved at that temperature.
* Solubility: The maximum amount of solute (in grams) that can dissolve in 100 g of a solvent at a specified temperature. Solubility generally increases with rising temperature for solid solutes in liquids.

### Concentration of Solutions (Formulas & Mass Percentages)
The concentration of a solution is the amount of solute present in a given amount of solution:

1. Mass by Mass Percentage of a Solution:
Mass % = (Mass of Solute / Mass of Solution) × 100
Where Mass of Solution = Mass of Solute + Mass of Solvent

2. Mass by Volume Percentage:
Mass by Volume % = (Mass of Solute (g) / Volume of Solution (mL)) × 100

3. Volume by Volume Percentage:
Volume by Volume % = (Volume of Solute / Volume of Solution) × 100`,
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
        {
          id: "sc5q1",
          type: "num",
          q: "To make a saturated solution, 36 g of sodium chloride is dissolved in 100 g of water at 293 K. Find its concentration in mass percentage (to 1 decimal place).",
          numAnswer: 26.5,
          tolerance: 0.2,
          hint: "Total solution mass = 36 + 100 = 136 g. Mass % = (36 / 136) * 100.",
          answer: "Mass % = (36 / (36 + 100)) × 100 = (36 / 136) × 100 = 26.47% ≈ 26.5%."
        },
        {
          id: "sc5q2",
          type: "mcq",
          q: "In tincture of iodine, the solute and solvent are respectively:",
          options: ["Alcohol and iodine", "Iodine and alcohol", "Iodine and water", "Water and iodine"],
          correctOption: 1,
          hint: "Iodine crystals (solid) are dissolved in alcohol (liquid).",
          answer: "In tincture of iodine, solid iodine crystals act as the solute and liquid ethanol/alcohol acts as the dissolving solvent."
        },
        {
          id: "sc5q3",
          type: "mcq",
          q: "Which of the following is an example of a homogeneous mixture?",
          options: ["Chalk powder in water", "Soda water", "Muddy pond water", "Smoke in air"],
          correctOption: 1,
          hint: "Carbon dioxide gas dissolved uniformly in liquid water without phase boundaries.",
          answer: "Soda water is a homogeneous true solution of carbon dioxide gas dissolved uniformly throughout liquid water."
        },
        {
          id: "sc5q4",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Brass is considered a homogeneous mixture (an alloy) rather than a chemical compound.\nReason (R): Brass can vary in its composition (30% Zn, 70% Cu) and the constituent metals retain their individual chemical properties.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "Compounds have fixed atomic ratios; mixtures have variable composition.",
          answer: "Both Assertion and Reason are true. Alloys are homogeneous solid solutions because they exhibit variable ratios of components without fixed stoichiometric bonds, and the metals retain their individual properties."
        },
        {
          id: "sc5q5",
          type: "short",
          q: "A solution contains 50 g of sugar dissolved in 200 g of water. Calculate its concentration in mass by mass percentage.",
          answer: "Mass of solute = 50 g; Mass of solvent = 200 g; Total mass of solution = 50 + 200 = 250 g. Concentration = (50 / 250) × 100 = 20% (w/w).",
          hint: "Total solution mass is solute plus solvent."
        },
        {
          id: "sc5q6",
          type: "mcq",
          q: "What happens when a saturated sugar solution at 60°C is allowed to cool down undisturbed to room temperature (25°C)?",
          options: [
            "It turns into a gas.",
            "Excess sugar crystals precipitate out of the solution.",
            "Water begins to evaporate rapidly.",
            "The solution becomes unsaturated."
          ],
          correctOption: 1,
          hint: "Solubility decreases as temperature drops.",
          answer: "Because the solubility of sugar decreases at lower temperatures, the excess sugar that dissolved at 60°C can no longer remain in solution at 25°C and crystallizes out."
        },
        {
          id: "sc5q7",
          type: "short",
          q: "Why does a true solution not scatter a beam of light passing through it?",
          answer: "Because the solute particles in a true solution are extremely small (less than 1 nanometer or 10⁻⁹ m), which is far smaller than the wavelength of visible light (~400 to 700 nm), making optical scattering impossible.",
          hint: "Relate particle diameter to visible light wavelength."
        }
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
1. True Solution:
   * Particle Size: Less than 1 nm (< 10⁻⁹ m).
   * Type: Homogeneous.
   * Stability: Completely stable (no settling).
   * Tyndall Effect: Does NOT show Tyndall effect.
   * Filtration: Passes through filter paper and semipermeable membranes.
   * Examples: Salt in water, sugar solution, copper sulphate in water.

2. Colloid:
   * Particle Size: Intermediate between 1 nm and 100 nm (10⁻⁹ m to 10⁻⁷ m).
   * Type: Heterogeneous (appears homogeneous to the unaided eye).
   * Stability: Stable (particles remain dispersed and do not settle under gravity).
   * Tyndall Effect: Shows distinct optical light scattering (Tyndall effect).
   * Filtration: Passes through normal filter paper, but can be separated by ultra-centrifugation.
   * Examples: Milk, blood, fog, ink, smoke, gelatin.

3. Suspension:
   * Particle Size: Greater than 100 nm (> 10⁻⁷ m).
   * Type: Heterogeneous.
   * Stability: Unstable (suspended particles settle down under gravity upon standing).
   * Tyndall Effect: Scatters light while particles are suspended; stops scattering once settled.
   * Filtration: Can be easily separated using ordinary filter paper.
   * Examples: Chalk powder in water, muddy pond water, sand in water.

### The Tyndall Effect Explained
When a fine beam of light passes through a colloidal solution, the colloidal particles are large enough to scatter the light rays in all directions.
* This optical scattering illuminates the path of light, rendering the beam clearly visible.
* Named after British physicist John Tyndall.
* True solutions do not show the Tyndall effect because their particles are too tiny (< 1 nm) to scatter visible light waves.

### Components of a Colloid:
1. Dispersed Phase: The solute-like component or particles dispersed in the medium.
2. Dispersion Medium: The continuous medium in which the dispersed phase particles are suspended.

### Classification of Colloids (NCERT Master Reference):
* Aerosol: Liquid or solid dispersed in gas (e.g., fog, clouds, mist, automobile exhaust, smoke).
* Foam: Gas dispersed in liquid (e.g., shaving cream, soap lather).
* Emulsion: Liquid dispersed in liquid (e.g., milk, face cream).
* Sol: Solid dispersed in liquid (e.g., milk of magnesia, mud, paint).
* Solid Foam: Gas dispersed in solid (e.g., foam rubber, sponge, pumice stone).
* Gel: Liquid dispersed in solid (e.g., jelly, cheese, butter).
* Solid Sol: Solid dispersed in solid (e.g., colored gemstones, milky glass).`,
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
        {
          id: "sc5q8",
          type: "mcq",
          q: "Which of the following mixtures will show a visible Tyndall effect when a laser beam is shone through it?",
          options: ["Sodium chloride solution", "Dilute milk", "Copper sulphate solution", "Sugar syrup"],
          correctOption: 1,
          hint: "Colloidal suspensions scatter light rays.",
          answer: "Milk is a colloid (emulsion) containing microscopic fat and protein particles that scatter visible light rays, illuminating the beam's path."
        },
        {
          id: "sc5q9",
          type: "mcq",
          q: "Smoke rising from a chimney is an example of which colloidal classification?",
          options: ["Aerosol (solid in gas)", "Foam", "Sol", "Gel"],
          correctOption: 0,
          hint: "Fine solid carbon particles dispersed in atmospheric air gas.",
          answer: "Smoke consists of solid carbon soot particles (dispersed phase) suspended in air gas (dispersion medium), making it a solid aerosol."
        },
        {
          id: "sc5q10",
          type: "short",
          q: "Why can colloidal particles pass through ordinary filter paper even though they are heterogeneous?",
          answer: "Because colloidal particle diameters (1 nm to 100 nm) are smaller than the pore size of ordinary filter paper (typically around 1000 nm to 5000 nm), allowing them to pass through unhindered.",
          hint: "Compare colloidal particle size with filter paper pore diameters."
        },
        {
          id: "sc5q11",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Milk appears completely homogeneous to the naked eye but is classified scientifically as a heterogeneous colloid.\nReason (R): Under a microscope, fat globules and milk proteins remain dispersed as distinct non-uniform particles in water.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "A colloid has separate dispersed phases.",
          answer: "Both Assertion and Reason are true. The optical illusion of uniformity disappears under microscopy, revealing dispersed liquid fat droplets in an aqueous medium."
        },
        {
          id: "sc5q12",
          type: "mcq",
          q: "What is the dispersed phase and dispersion medium in butter?",
          options: [
            "Liquid dispersed in solid (Gel)",
            "Solid dispersed in liquid (Sol)",
            "Gas dispersed in liquid (Foam)",
            "Liquid dispersed in liquid (Emulsion)"
          ],
          correctOption: 0,
          hint: "Butter is solid at low temperatures and holds trapped water droplets.",
          answer: "Butter is a gel, where liquid water droplets (dispersed phase) are trapped inside a solid matrix of milk fat (dispersion medium)."
        },
        {
          id: "sc5q13",
          type: "short",
          q: "State the particle size range for true solutions, colloids, and suspensions in nanometers.",
          answer: "True Solution: < 1 nm; Colloid: 1 nm to 100 nm; Suspension: > 100 nm.",
          hint: "1 nanometer = 10⁻⁹ meters."
        },
        {
          id: "sc5q14",
          type: "mcq",
          q: "The continuous random zigzag motion of colloidal particles suspended in a liquid medium is known as:",
          options: ["Tyndall scattering", "Brownian motion", "Centrifugation", "Electrophoresis"],
          correctOption: 1,
          hint: "Discovered by Robert Brown from impacts with solvent molecules.",
          answer: "Brownian motion is the rapid, erratic zigzag movement of colloidal particles caused by unequal collisions with solvent molecules, which prevents them from settling under gravity."
        }
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
* Used for: Recovering colored dye from ink, or salt from seawater.
* Principle: The volatile liquid solvent evaporates upon heating, leaving behind the solid non-volatile solute residue in a watch glass or evaporating dish.

### 2. Centrifugation: Density Separation Under High-Speed Spin
* Principle: When a suspension or emulsion is spun rapidly inside a centrifuge rotor, denser particles are forced to the bottom while lighter liquid remains at the top.
* Applications:
  1. Diagnostic laboratories for blood and urine tests (separating red blood cells from clear plasma).
  2. Dairies to separate butter/cream from milk.
  3. Washing machines to squeeze water out of wet clothes during spin cycle.

### 3. Separating Funnel: Immiscible Liquids
* Principle: Immiscible liquids separate into distinct layers based on differences in their densities (e.g., kerosene oil and water).
* The heavier liquid (water, density 1.0 g/cm³) forms the lower layer and is drained off through the stopcock first; the lighter oil (0.8 g/cm³) remains behind.

### 4. Sublimation: Volatile Sublimable Solids
* Principle: Separating a mixture containing a sublimable component (which converts directly from solid to vapor without melting) from a non-sublimable impurity (e.g., salt).
* Examples of sublimable substances: Ammonium chloride (NH₄Cl), Camphor, Naphthalene balls, Anthracene, and Iodine.

### 5. Chromatography: Differential Solubility in a Moving Solvent
* Principle: Components of a mixture dissolve in the same solvent, but travel at different rates up a porous stationary medium (filter paper) according to their relative solubility.
* Applications: Separating dye pigments in natural colors, separating plant chlorophyll pigments, and detecting narcotics/drugs in blood samples.

### 6. Distillation & Fractional Distillation: Miscible Liquids
* Simple Distillation: Used to separate two miscible liquids that boil without decomposing and have a sufficient difference in boiling points (> 25 K or > 25°C). E.g., separating acetone (boiling point 56°C) and water (100°C).
* Fractional Distillation: Used when the difference in boiling points is less than 25 K (< 25°C).
  * Employs a fractionating column packed with glass beads to provide a large surface area for repeated cycles of vapor condensation and re-evaporation.
  * Applications: Separating different fractions of petroleum (petrol, diesel, kerosene), and separating atmospheric air gases (N₂ at -196°C, Ar at -186°C, O₂ at -183°C).

### 7. Crystallization: Obtaining Pure Solid from Impure Sample
* Principle: Purifying solids by cooling a hot, concentrated saturated solution until pure geometric crystals form.
* Why Crystallization is Superior to Evaporation:
  1. Some solids (like sugar) decompose or get charred when heated to dryness.
  2. Soluble impurities remain dissolved in the mother liquor in crystallization, yielding 100% pure crystals, whereas evaporation traps impurities in the residue!
* Applications: Purifying commercial alum (phitkari) and copper sulphate (CuSO₄).`,
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
        {
          id: "sc5q15",
          type: "mcq",
          q: "To separate a mixture of acetone (B.P. 56°C) and water (B.P. 100°C), which method is most suitable?",
          options: ["Separating funnel", "Simple distillation", "Fractional distillation", "Sublimation"],
          correctOption: 1,
          hint: "The boiling point difference is 100 - 56 = 44°C, which is significantly greater than 25°C.",
          answer: "Because acetone and water are miscible and their boiling points differ by 44°C (more than the 25°C threshold), simple distillation cleanly separates them."
        },
        {
          id: "sc5q16",
          type: "mcq",
          q: "Which pair of substances can be separated by a separating funnel?",
          options: ["Kerosene and water", "Ethanol and water", "Salt and water", "Acetone and water"],
          correctOption: 0,
          hint: "Requires two immiscible liquids of differing densities.",
          answer: "Kerosene oil and water are immiscible liquids that form two distinct layers due to density differences and can be separated cleanly using a separating funnel."
        },
        {
          id: "sc5q17",
          type: "short",
          q: "Which scientific separation technique is used in diagnostic pathology laboratories to separate red blood cells from blood plasma?",
          answer: "Centrifugation",
          hint: "Involves spinning tubes at high revolutions per minute."
        },
        {
          id: "sc5q18",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Crystallization is preferred over simple evaporation to dryness for purifying copper sulphate.\nReason (R): Evaporation can decompose or char some substances and leaves soluble impurities mixed with the dried crystals.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "Crystallization leaves impurities dissolved in the mother liquor.",
          answer: "Both Assertion and Reason are true. Crystallization yields pure geometric crystals while leaving soluble contaminants in the remaining mother liquor."
        },
        {
          id: "sc5q19",
          type: "mcq",
          q: "A mixture of common salt and ammonium chloride can be separated by:",
          options: ["Sublimation", "Filtration", "Simple distillation", "Centrifugation"],
          correctOption: 0,
          hint: "Ammonium chloride transitions directly from solid to vapor on heating.",
          answer: "Ammonium chloride sublimates upon heating into white fumes that deposit on the cool inner walls of an inverted funnel, leaving non-sublimable common salt in the dish."
        },
        {
          id: "sc5q20",
          type: "short",
          q: "Why are glass beads packed inside a fractional distillation column?",
          answer: "The glass beads provide a vastly increased surface area for the rising vapors to repeatedly condense and re-evaporate, ensuring sharper separation of liquids with close boiling points.",
          hint: "Provides surface area for condensation cycles."
        },
        {
          id: "sc5q21",
          type: "mcq",
          q: "In paper chromatography of ink, the colored component that travels the fastest up the paper is the one that is:",
          options: [
            "Most soluble in the moving solvent",
            "Least soluble in the moving solvent",
            "Heaviest in molecular weight",
            "Darkest in visible color"
          ],
          correctOption: 0,
          hint: "Higher solubility allows faster migration with the capillary solvent front.",
          answer: "The dye component that is more soluble in water rises faster and reaches a higher position on the paper strip."
        }
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
    {
      id: "sc5e1",
      type: "num",
      q: "Calculate the mass of potassium chloride required to prepare a 20% (by mass) solution in 160 g of water.",
      numAnswer: 40,
      tolerance: 0.5,
      hint: "Let mass of solute be m. 20 = (m / (m + 160)) * 100 -> 0.2(m + 160) = m -> 32 = 0.8m -> m = 40 g.",
      answer: "Mass of solute required = 40 grams. Total solution mass = 40 + 160 = 200 g. Concentration = (40 / 200) × 100 = 20%."
    },
    {
      id: "sc5e2",
      type: "short",
      q: "Why is water (H₂O) classified as a compound rather than a mixture?",
      answer: "1. Hydrogen and oxygen combine in a fixed mass ratio of 1:8. 2. The properties of water (liquid, puts out fires) are entirely different from hydrogen (flammable gas) and oxygen (supports combustion). 3. It cannot be separated by physical methods.",
      hint: "Consider fixed mass ratio and unique properties."
    },
    {
      id: "sc5e3",
      type: "mcq",
      q: "Which of the following represents a chemical change?",
      options: ["Melting of ice", "Rusting of iron", "Dissolving salt in water", "Boiling of water"],
      correctOption: 1,
      hint: "Forms a completely new chemical compound (hydrated iron oxide).",
      answer: "Rusting of iron is a chemical change because iron reacts with oxygen and moisture to form an entirely new chemical substance: hydrated iron(III) oxide."
    },
    {
      id: "sc5e4",
      type: "short",
      q: "How would you separate a mixture containing sulfur powder and iron filings?",
      answer: "Roll a bar magnet through the mixture. The magnetic iron filings will cling to the magnet poles, leaving behind non-magnetic yellow sulfur powder. Alternatively, dissolve sulfur in carbon disulfide (CS₂) solvent and filter out the insoluble iron.",
      hint: "Use magnetic separation."
    },
    {
      id: "sc5e5",
      type: "mcq",
      q: "Which gas boils out first during the fractional distillation of liquid air?",
      options: ["Nitrogen (B.P. -196°C)", "Argon (B.P. -186°C)", "Oxygen (B.P. -183°C)", "Carbon dioxide"],
      correctOption: 0,
      hint: "Lowest boiling point vaporizes first.",
      answer: "Nitrogen has the lowest boiling point at -196°C (77 K), so it vaporizes first and collects at the top of the distillation column."
    },
    {
      id: "sc5e6",
      type: "short",
      q: "Explain why blood is classified as a colloid rather than a true solution.",
      answer: "Blood consists of cellular elements (RBCs, WBCs, platelets) and large protein molecules (albumin, fibrinogen, globulin) suspended in liquid plasma. These particles are in the colloidal size range (1 nm to 100 nm) and scatter light (Tyndall effect).",
      hint: "Consider particle size and cellular/protein components."
    },
    {
      id: "sc5e7",
      type: "mcq",
      q: "Which of the following is NOT a pure substance?",
      options: ["Pure ice (H₂O)", "Pure iron (Fe)", "Seawater", "Hydrochloric acid (pure HCl)"],
      correctOption: 2,
      hint: "Seawater contains water, dissolved sodium chloride, magnesium salts, and minerals in variable proportions.",
      answer: "Seawater is a homogeneous mixture containing water and multiple dissolved salts in variable proportions, hence it is not a pure substance."
    }
  ]
};

export default ch5;