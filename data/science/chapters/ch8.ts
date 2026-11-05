import type { ScienceChapter } from "../types";

const ch8: ScienceChapter = {
  n: 8,
  key: "sc8",
  title: "Structure of the Atom",
  short: "Inside the Atom",
  blurb: "Explore Thomson's plum pudding, Rutherford's alpha scattering experiment, Bohr's energy quantization, the 2n² Bohr-Bury scheme, valency, and radioactive isotopes.",
  colorScheme: "chemistry",
  animationType: "bohr-model",
  sections: [
    {
      id: "s1",
      title: "Subatomic Particles: Canal Rays, Electrons & Neutrons",
      realWorldScenario: {
        title: "The Static Comb & Dalton's Shattered Indivisible Sphere",
        context: "Rub a plastic comb against dry hair on a winter day and hold it near tiny scraps of dry paper. The paper pieces defy gravity and leap upward to stick to the comb! If John Dalton's 1808 theory that 'atoms are hard, indivisible, indivisible spheres' was true, where does this electric charge come from?",
        application: "Static electricity proved that matter is composed of charged particles smaller than the atom itself! By rubbing two neutral objects together, subatomic electrons are transferred from one surface to another. This pivotal discovery shattered Dalton's model and opened the door to modern atomic physics and electronics."
      },
      content: `Until the late 19th century, John Dalton's postulate that atoms are indivisible and indestructible fundamental building blocks was universally accepted. However, gas discharge tube experiments revealed that atoms are composed of subatomic constituent particles:

### 1. Discovery of the Electron (J.J. Thomson, 1897)
* J.J. Thomson passed high voltage (thousands of volts) through gases at extremely low pressure inside cathode ray discharge tubes.
* He observed invisible streams of negatively charged particles emitted from the cathode, termed **cathode rays**.
* **Properties of Electron ($e^-$):**
  * **Relative Charge:** $-1$ ($ -1.602 \\times 10^{-19}\\text{ Coulombs}$).
  * **Relative Mass:** $\\approx \\frac{1}{2000}$ (precisely $\\frac{1}{1840}$) of the mass of a hydrogen atom ($9.11 \\times 10^{-31}\\text{ kg}$). For all practical chemical calculations, electron mass is considered negligible.

### 2. Discovery of the Proton (E. Goldstein, 1886)
* Eugen Goldstein used a perforated cathode in a discharge tube and observed faint luminous rays traveling in the opposite direction from cathode rays, passing through the holes in the cathode.
* Termed **Canal Rays** (or anode rays), which consisted of positively charged gaseous ions.
* When hydrogen gas was used, the lightest positively charged particle was identified as the **Proton ($p^+$)**.
* **Properties of Proton:**
  * **Relative Charge:** $+1$ ($ +1.602 \\times 10^{-19}\\text{ Coulombs}$).
  * **Relative Mass:** Taken as $1\\text{ u}$ ($1.673 \\times 10^{-27}\\text{ kg}$, nearly 1840 times heavier than an electron).

### 3. Discovery of the Neutron (James Chadwick, 1932)
* In 1932, British physicist James Chadwick bombarded a thin sheet of beryllium with high-speed alpha particles.
* He discovered highly penetrating radiation consisting of neutral particles having mass almost identical to a proton.
* Termed **Neutron ($n^0$)**:
  * **Charge:** Zero (electrically neutral).
  * **Mass:** $1.675 \\times 10^{-27}\\text{ kg} \\approx 1\\text{ u}$.
* Neutrons reside inside the nucleus of all elements **except ordinary hydrogen (protium)**, which possesses only 1 proton and 0 neutrons!`,
      keyConcepts: [
        { term: "Electron (e⁻)", definition: "Negatively charged subatomic particle (charge -1, negligible mass 1/1840 u) discovered by J.J. Thomson." },
        { term: "Proton (p⁺)", definition: "Positively charged subatomic particle (charge +1, mass 1 u) discovered by E. Goldstein via canal rays." },
        { term: "Neutron (n⁰)", definition: "Neutral subatomic particle (charge 0, mass 1 u) located in the nucleus, discovered by James Chadwick." },
        { term: "Canal Rays", definition: "Streams of positively charged gaseous ions traveling from anode toward perforated cathode in a gas discharge tube." },
      ],
      formulas: [
        { label: "Subatomic Mass Ratio", latex: "m_p \\approx 1840 \\times m_e, \\quad m_n \\approx m_p" },
        { label: "Fundamental Electric Charge", latex: "e = 1.602 \\times 10^{-19}\\,\\text{C}" },
      ],
      workedExamples: [
        {
          title: "Subatomic Particle Inventory of an Atom",
          problem: "An atom of an element contains 17 protons, 18 neutrons, and 17 electrons. (a) What is its net electric charge? (b) What is its approximate mass in atomic mass units (u)?",
          steps: [
            "Protons carry positive charge: 17 * (+1) = +17.",
            "Electrons carry negative charge: 17 * (-1) = -17.",
            "Neutrons carry zero charge: 18 * 0 = 0.",
            "Net charge = (+17) + (-17) + 0 = 0 (Atom is electrically neutral).",
            "Mass calculation: mass = mass of protons + mass of neutrons (electron mass is negligible).",
            "Approximate mass = 17 u + 18 u = 35 u."
          ],
          answer: "(a) Net charge = 0 (electrically neutral). (b) Mass = 35 u (This is Chlorine-35)."
        }
      ],
      activities: [
        {
          number: "4.1",
          title: "Static Charge Attraction with Comb and Glass Rod",
          materials: ["Plastic comb", "Glass rod", "Silk cloth", "Inflated balloon", "Dry bits of paper"],
          steps: [
            "Rub the comb through dry hair and bring it near small paper bits.",
            "Rub an inflated balloon against a woollen sweater and press it against a wall.",
            "Rub a glass rod with silk cloth and bring it near an uncharged suspended pith ball."
          ],
          observation: "The comb attracts paper bits; the balloon sticks to the wall; the glass rod deflects the pith ball.",
          conclusion: "Frictional rubbing transfers charged subatomic particles between surfaces, proving atoms are divisible."
        }
      ],
      didYouKnow: "If an atom were enlarged to the size of a giant football stadium, the nucleus containing 99.95% of its total mass would be the size of a tiny cricket ball resting at the center spot, and electrons would be like gnats buzzing around the outermost bleachers!",
      examTips: [
        "Common CBSE 1-mark question: 'Name the only atom that does not contain any neutrons.' Answer: Ordinary Hydrogen (Protium, ¹₁H).",
        "Always remember: Canal rays are POSITIVELY charged ions, while Cathode rays are NEGATIVELY charged electrons."
      ],
      questions: [
        { id: "sc8q1", type: "mcq", q: "Canal rays discovered by E. Goldstein in 1886 were:", options: ["Negatively charged electron beams", "Positively charged gaseous ion streams", "Neutral electromagnetic waves", "Streams of pure neutrons"], correctOption: 1, hint: "Traveled toward the negative cathode." },
        { id: "sc8q1_b", type: "mcq", q: "Assertion (A): An atom as a whole is electrically neutral despite containing millions of electric charges.\nReason (R): In any neutral atom, the total number of positively charged protons in the nucleus exactly equals the total number of negatively charged electrons in the shells.", options: ["Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true"], correctOption: 0, hint: "+Z balances -Z to give zero net charge." },
        { id: "sc8q1_c", type: "mcq", q: "Which is the only atom in the entire periodic table whose nucleus contains NO neutrons?", options: ["Ordinary Hydrogen (Protium, ¹₁H)", "Helium (⁴₂He)", "Carbon (¹²₆C)", "Oxygen (¹⁶₈O)"], correctOption: 0, hint: "Has 1 proton and 0 neutrons (mass number A = 1)." },
        { id: "sc8q2", type: "short", q: "Who discovered the neutron and in which year?", answer: "James Chadwick in 1932 by bombarding a thin sheet of beryllium with alpha particles.", hint: "British physicist, 1932." },
        { id: "sc8q3", type: "mcq", q: "The mass of an electron is approximately what fraction of a hydrogen atom's mass?", options: ["1/2", "1/100", "1/1840", "1/10000"], correctOption: 2, hint: "Roughly 1 over 2000 (precisely 1/1840)." },
        { id: "sc8q1_d", type: "short", q: "State the relative charge and mass of an electron, a proton, and a neutron.", answer: "Electron: Charge = -1, Mass ≈ 1/1840 u (negligible). Proton: Charge = +1, Mass = 1 u. Neutron: Charge = 0 (neutral), Mass = 1 u.", hint: "Recall subatomic particle table." }
      ]
    },
    {
      id: "s2",
      title: "Atomic Models: Thomson, Rutherford's Gold Foil & Bohr's Quantization",
      realWorldScenario: {
        title: "Shooting a 15-inch Artillery Shell at Tissue Paper",
        context: "In 1911, Ernest Rutherford directed his assistants Hans Geiger and Ernest Marsden to fire blazing alpha particles at gold foil. When Rutherford analyzed the results, he famously exclaimed: 'It was quite the most incredible event that has ever happened to me in my life. It was almost as incredible as if you fired a 15-inch artillery shell at a piece of tissue paper and it came back and hit you!'",
        application: "Under Thomson's Plum Pudding model, positive charge was thought to be spread out like butter across the atom, meaning alpha bullets should easily sail straight through. The violent 180° rebound proved that the entire mass and positive charge of the atom was compressed into a super-dense microscopic bullet: the Nucleus!"
      },
      content: `### 1. Thomson's Model of the Atom (Plum Pudding / Watermelon)
* Proposed in 1898 by J.J. Thomson.
* An atom is envisioned as a solid sphere of positive charge in which negatively charged electrons are embedded like seeds in a watermelon, or dry raisins/plums in a Christmas pudding.
* **Key postulate:** The negative and positive charges are equal in magnitude; therefore, the atom as a whole is electrically neutral.
* **Failure:** Thomson's model could not explain the results of Rutherford's alpha-particle scattering experiment.

### 2. Rutherford's Alpha-Particle Scattering Experiment
Rutherford bombarded high-energy alpha particles ($\\alpha = ^4_2\\text{He}^{2+}$, doubly charged helium ions of mass $4\\text{ u}$) onto an ultra-thin gold foil (about 1000 atoms thick, $\\approx 100\\text{ nm}$). A circular fluorescent zinc sulfide screen detected deflected particles via tiny flashes of light (scintillations).

#### Observations:
1. **Most alpha particles ($> 99.9\\%$)** passed straight through the gold foil completely undeflected.
2. **A small fraction** of alpha particles were deflected through small and moderate angles.
3. **Astoundingly, about 1 in every 12,000 particles** rebounded straight back along its path ($> 90^\\circ$ to $180^\\circ$ deflection).

#### Rutherford's Inferences:
1. Most of the internal space within an atom is completely empty (explaining why most particles passed straight through).
2. The positive charge of the atom occupies very little space (explaining why few particles were repelled).
3. All the positive charge and virtually the entire mass of the atom are concentrated in an extraordinarily small, dense core at the center, termed the **Nucleus**.
4. Nuclear radius is approximately $10^{-15}\\text{ m}$, whereas atomic radius is $10^{-10}\\text{ m}$ (a factor of $10^5$ times larger!).

#### Drawback of Rutherford's Planetary Model:
According to classical Maxwellian electrodynamics, any charged particle (like an electron) revolving in a curved circular orbit accelerates. An accelerating charge must continuously radiate electromagnetic energy. Losing energy, the electron's orbit would rapidly shrink, spiraling into the nucleus in less than $10^{-8}$ seconds! Thus, Rutherford's atom would instantly collapse, which contradicts the known stability of matter.

### 3. Neils Bohr's Model of the Atom (1913)
To overcome Rutherford's instability crisis, Danish physicist Neils Bohr proposed:
1. Only certain special non-radiating orbits, known as **discrete orbits (energy levels)**, are permitted for electrons inside the atom.
2. While revolving in these discrete orbits, electrons do **not radiate energy**.
3. These orbits or shells are represented by letters **$K, L, M, N...$** or principal quantum numbers **$n = 1, 2, 3, 4...$** (starting from innermost).
4. An electron radiates or absorbs energy only when it jumps from one discrete orbit to another: $\\Delta E = E_2 - E_1 = h\\nu$.`,
      keyConcepts: [
        { term: "Thomson's Model", definition: "A uniform sphere of positive charge studded with negative electrons like seeds in a watermelon." },
        { term: "Alpha Particle (α)", definition: "Doubly ionized helium nucleus (⁴₂He²⁺) carrying +2 charge and 4 u mass." },
        { term: "Rutherford's Scattering Experiment", definition: "Bombardment of thin gold foil by alpha particles that revealed the existence of a dense, positively charged nucleus." },
        { term: "Nucleus", definition: "The central core of an atom containing all positive charge (protons) and almost all atomic mass." },
        { term: "Bohr's Discrete Orbits", definition: "Fixed stationary circular energy shells in which electrons revolve without radiating electromagnetic energy." },
      ],
      formulas: [
        { label: "Nuclear to Atomic Radius Ratio", latex: "\\frac{R_{\\text{nucleus}}}{R_{\\text{atom}}} \\approx \\frac{10^{-15}\\,\\text{m}}{10^{-10}\\,\\text{m}} = 10^{-5}" },
      ],
      workedExamples: [
        {
          title: "Interpreting Rutherford's Foil Scattering Data",
          problem: "If 1 in 12,000 alpha particles suffered deflection greater than 90° upon hitting gold foil, what does this tell us about the volume fraction occupied by the nucleus relative to the atom?",
          steps: [
            "Step 1: The fraction of particles hitting the dense positive core is f = 1 / 12,000 ≈ 8.3 * 10⁻⁵.",
            "Step 2: Since cross-sectional area is proportional to r², this indicates the nuclear cross-section is over 10,000 times smaller than the atomic cross-section.",
            "Step 3: Nuclear radius r ≈ 10⁻¹⁵ m, Atomic radius R ≈ 10⁻¹⁰ m.",
            "Step 4: Ratio of volumes V_nucleus / V_atom = (r / R)³ = (10⁻⁵)³ = 10⁻¹⁵.",
            "Conclusion: The nucleus occupies less than one-quadrillionth (10⁻¹⁵) of the total volume of an atom! Matter is 99.9999999999999% empty space."
          ],
          answer: "The nucleus occupies only 10⁻¹⁵ of the total atomic volume, proving atoms are overwhelmingly empty space."
        }
      ],
      activities: [
        {
          number: "4.2",
          title: "Analogy of Rutherford's Scattering with Blindfolded Ball Throwing",
          materials: ["Wall", "Wire fence", "Tennis balls", "Blindfold"],
          steps: [
            "Stand 5 meters away from a solid brick wall blindfolded and throw 20 tennis balls. Count the sound of impacts.",
            "Now stand 5 meters away from a chain-link wire fence blindfolded and throw 20 tennis balls. Count how many strike the wire vs pass through."
          ],
          observation: "Almost every ball strikes the solid wall. On the wire fence, nearly all balls pass through without touching the wire, and only 1 or 2 strike the thin wire frame and ricochet.",
          conclusion: "The wire fence represents the Rutherford atom: almost all space is open, with matter concentrated only in thin wire junctions (nuclei)."
        }
      ],
      didYouKnow: "If all the empty space inside the atoms of every single human being on Earth (8 billion people) were squeezed out until all nuclei touched, the entire human race would fit inside the volume of a single sugar cube!",
      examTips: [
        "Gold Foil Choice: Why did Rutherford select gold foil? Because gold is the most malleable metal known; he needed the thinnest foil possible (only ~1000 atoms thick).",
        "Limitation of Rutherford: Revolving electrons accelerate, must radiate energy, and collapse into the nucleus. Memorize this exact phrasing for 3-mark board questions."
      ],
      questions: [
        { id: "sc8q4", type: "mcq", q: "Why did most alpha particles pass straight through the gold foil in Rutherford's experiment without any deflection?", options: ["Gold atoms are extremely dense", "Most of the space inside the atom is completely empty", "Alpha particles are uncharged", "Electrons attract alpha particles"], correctOption: 1, hint: "Think about the fraction of undeflected particles (>99.9%)." },
        { id: "sc8q4_b", type: "mcq", q: "Assertion (A): Rutherford's alpha particle scattering experiment established that the nucleus is positively charged and extremely tiny compared to the atom.\nReason (R): Nearly 1 in 12,000 alpha particles rebounded almost straight backward by 180°, proving that the entire positive charge and mass is concentrated in a tiny central core.", options: ["Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true"], correctOption: 0, hint: "The 180° rebound was like an artillery shell bouncing off tissue paper." },
        { id: "sc8q4_c", type: "mcq", q: "Which model of the atom was proposed by J.J. Thomson comparing electrons to embedded seeds in fruit?", options: ["The Nuclear Model", "The Watermelon (Plum Pudding) Model", "The Quantum Mechanical Model", "The Planetary Model"], correctOption: 1, hint: "Electrons embedded in a spherical positive mass." },
        { id: "sc8q5", type: "short", q: "State the major theoretical drawback of Rutherford's nuclear model of the atom.", answer: "According to classical electromagnetic theory, an accelerating charged electron orbiting the nucleus should continuously radiate electromagnetic energy, losing speed and spiraling into the nucleus in less than 10⁻⁸ seconds. Thus, Rutherford's model could not explain atomic stability.", hint: "Recall orbital instability and continuous radiation." },
        { id: "sc8q6", type: "mcq", q: "According to Neils Bohr's model, electrons revolving in discrete energy orbits (K, L, M, N):", options: ["Continuously emit light", "Do not radiate energy while in these stationary orbits", "Slowly spiral into nucleus", "Change their electrical charge"], correctOption: 1, hint: "Stationary non-radiating discrete energy states." },
        { id: "sc8q4_d", type: "short", q: "Why did Ernest Rutherford select a gold foil for his alpha scattering experiment?", answer: "Rutherford required the thinnest possible metallic layer (only ~1000 atoms thick) so alpha particles would not be blocked by multiple layers. Gold is the most malleable metal known to science, allowing hammering into ultra-thin foil.", hint: "Gold has highest malleability." }
      ]
    },
    {
      id: "s3",
      title: "Bohr-Bury Scheme, Valency, Isotopes & Isobars",
      realWorldScenario: {
        title: "The Mystery of Chlorine's 35.5 u Mass & Cancer Radiotherapy",
        context: "Open any periodic table: Hydrogen is 1 u, Carbon is 12 u, Oxygen is 16 u. But Chlorine is oddly 35.5 u! Can half a neutron exist in nature? Meanwhile, in hospital oncology wards, Cobalt-60 is used to destroy cancerous tumors without surgery.",
        application: "No atom contains half a neutron! Naturally occurring chlorine is a mixture of two isotopes: 75% Chlorine-35 and 25% Chlorine-37. Its fractional atomic mass (35.5 u) is a weighted average based on isotopic abundance! Isotopes of elements possess identical chemical properties but unique nuclear properties, making them indispensable in medicine (Cobalt-60 cancer treatment, Iodine-131 goiter therapy) and energy (Uranium-235 nuclear reactors)."
      },
      content: `### The Bohr-Bury Scheme for Electron Distribution
The arrangement of electrons in various shells of an atom follows strict rules:
1. **Rule 1 (Maximum Capacity $2n^2$):**
   The maximum number of electrons that can be accommodated in a shell is given by the formula $2n^2$, where $n$ is the shell number:
   * $K$-shell ($n=1$): $2(1)^2 = 2\\text{ electrons}$
   * $L$-shell ($n=2$): $2(2)^2 = 8\\text{ electrons}$
   * $M$-shell ($n=3$): $2(3)^2 = 18\\text{ electrons}$
   * $N$-shell ($n=4$): $2(4)^2 = 32\\text{ electrons}$
2. **Rule 2 (Octet Rule for Outermost Shell):**
   The maximum number of electrons that can be accommodated in the outermost valence shell is **8**, regardless of the shell's theoretical capacity.
3. **Rule 3 (Stepwise Filling):**
   Electrons are not accommodated in a given shell unless the inner shells are completely filled (shells are filled in a stepwise capacity).

### Valency & Valence Electrons
* **Valence Electrons:** The electrons present in the outermost shell of an atom.
* **Valency:** The combining capacity of an atom of an element to achieve a stable octet (8 electrons in valence shell, or 2 for helium):
  * **For elements with 1, 2, 3, or 4 valence electrons:** $\\text{Valency} = \\text{Number of valence electrons}$.
    * Sodium ($_{11}\\text{Na}: 2, 8, 1$) $\\implies$ loses $1 e^- \\implies \\text{Valency} = 1$.
    * Magnesium ($_{12}\\text{Mg}: 2, 8, 2$) $\\implies$ loses $2 e^- \\implies \\text{Valency} = 2$.
    * Aluminum ($_{13}\\text{Al}: 2, 8, 3$) $\\implies$ loses $3 e^- \\implies \\text{Valency} = 3$.
  * **For elements with 5, 6, 7, or 8 valence electrons:** $\\text{Valency} = 8 - (\\text{Number of valence electrons})$.
    * Nitrogen ($_{7}\\text{N}: 2, 5$) $\\implies 8 - 5 = 3$.
    * Oxygen ($_{8}\\text{O}: 2, 6$) $\\implies 8 - 6 = 2$.
    * Chlorine ($_{17}\\text{Cl}: 2, 8, 7$) $\\implies 8 - 7 = 1$.
    * Argon ($_{18}\\text{Ar}: 2, 8, 8$) $\\implies 8 - 8 = 0$ (Inert noble gas).

### Atomic Number ($Z$) and Mass Number ($A$)
* **Atomic Number ($Z$):** Total number of protons present in the nucleus of an atom. Defines the identity of the chemical element ($Z = p$).
* **Mass Number ($A$):** Total sum of protons and neutrons (together called **nucleons**) in the nucleus:
$$A = Z + N \\implies N = A - Z$$
* **Standard Nuclear Notation:** $^{A}_{Z}\\text{X}$ (e.g., $^{12}_{6}\\text{C}$, $^{23}_{11}\\text{Na}$).

### Isotopes & Isobars
* **Isotopes:** Atoms of the **same element** having the same atomic number ($Z$) but different mass numbers ($A$) due to different numbers of neutrons.
  * Hydrogen isotopes: Protium ($^1_1\\text{H}$), Deuterium ($^2_1\\text{H}$ or $\\text{D}$), Tritium ($^3_1\\text{H}$ or $\\text{T}$).
  * Carbon isotopes: $^{12}_6\\text{C}$ and $^{14}_6\\text{C}$.
  * Chlorine isotopes: $^{35}_{17}\\text{Cl}$ and $^{37}_{17}\\text{Cl}$.
  * **Chemical Properties:** Identical (because they have the same electron configuration).
  * **Physical Properties:** Slightly different (density, boiling point, mass).
* **Average Atomic Mass of Chlorine:**
  $$\\text{Avg Mass} = \\left(35 \\times \\frac{75}{100}\\right) + \\left(37 \\times \\frac{25}{100}\\right) = \\frac{105}{4} + \\frac{37}{4} = \\frac{142}{4} = \\mathbf{35.5\\text{ u}}$$
* **Applications of Isotopes:**
  1. An isotope of **Uranium ($^{235}\\text{U}$)** is used as fuel in nuclear fission reactors.
  2. An isotope of **Cobalt ($^{60}\\text{Co}$)** is used in radiation therapy for cancer treatment.
  3. An isotope of **Iodine ($^{131}\\text{I}$)** is used in the diagnosis and treatment of thyroid goiter.
  4. Carbon-14 ($^{14}\\text{C}$) is used in radiocarbon dating of ancient fossils.
* **Isobars:** Atoms of **different elements** having different atomic numbers ($Z$) but the **same mass number ($A$)**.
  * Example: Argon ($^{40}_{18}\\text{Ar}$) and Calcium ($^{40}_{20}\\text{Ca}$). Both have mass number 40, but Argon has 18 protons and Calcium has 20 protons.`,
      keyConcepts: [
        { term: "Bohr-Bury Rules", definition: "Shell capacity 2n², outermost shell maximum 8 electrons, stepwise inner-to-outer shell filling." },
        { term: "Valency", definition: "Combining capacity of an atom to achieve a stable octet (valence electrons if ≤ 4, or 8 - valence electrons if > 4)." },
        { term: "Atomic Number (Z)", definition: "Total number of protons in an atom's nucleus; defines the element." },
        { term: "Mass Number (A)", definition: "Total number of nucleons (protons + neutrons) in the nucleus: A = Z + N." },
        { term: "Isotopes", definition: "Atoms of the same element with identical Z but different A (e.g. ³⁵Cl and ³⁷Cl)." },
        { term: "Isobars", definition: "Atoms of different chemical elements having the same mass number A but different atomic numbers Z (e.g. ⁴⁰₁₈Ar and ⁴⁰₂₀Ca)." },
      ],
      formulas: [
        { label: "Bohr-Bury Max Shell Capacity", latex: "2n^2 \\quad (n=1,2,3,4 \\implies 2, 8, 18, 32)" },
        { label: "Mass Number", latex: "A = Z + N \\implies N = A - Z", explanation: "N = number of neutrons" },
        { label: "Average Atomic Mass", latex: "\\bar{A} = \\sum (A_i \\times \\%_i)", unit: "u", explanation: "Weighted isotopic average" },
      ],
      workedExamples: [
        {
          title: "Calculation of Average Atomic Mass of Chlorine",
          problem: "Chlorine occurs in nature in two isotopic forms with masses 35 u and 37 u in the ratio of 3:1 (75% and 25%). Calculate the average atomic mass of chlorine atom.",
          formula: "\\bar{A} = \\left(A_1 \\times \\frac{\\%_1}{100}\\right) + \\left(A_2 \\times \\frac{\\%_2}{100}\\right)",
          steps: [
            "Given: Isotope 1: A₁ = 35 u, abundance = 75%.",
            "Isotope 2: A₂ = 37 u, abundance = 25%.",
            "Calculation: Avg Mass = (35 * 75/100) + (37 * 25/100)",
            "= (35 * 3/4) + (37 * 1/4) = (105 / 4) + (37 / 4)",
            "= 142 / 4 = 35.5 u."
          ],
          answer: "Average atomic mass of Chlorine = 35.5 u."
        },
        {
          title: "Finding Protons, Neutrons, Electrons & Valency",
          problem: "An atom has atomic number Z = 15 and mass number A = 31. (a) Determine number of protons, neutrons, and electrons. (b) Write its electronic configuration and find its valency.",
          formula: "p = Z, \\quad e = Z, \\quad N = A - Z, \\quad \\text{Valency} = 8 - \\text{valence } e^-",
          steps: [
            "Part (a):",
            "- Number of protons p = Z = 15.",
            "- Number of electrons e = Z = 15.",
            "- Number of neutrons N = A - Z = 31 - 15 = 16.",
            "Part (b):",
            "- Electronic configuration for 15 electrons: K = 2, L = 8, M = 5 (2, 8, 5).",
            "- Outermost valence shell has 5 electrons (> 4).",
            "- Valency = 8 - 5 = 3."
          ],
          answer: "(a) 15 protons, 16 neutrons, 15 electrons. (b) Configuration 2, 8, 5; Valency = 3 (Phosphorus)."
        }
      ],
      activities: [
        {
          number: "4.3",
          title: "Modeling Electronic Configurations of First 18 Elements",
          materials: ["Chart paper", "Colored circular sticker dots (red for protons, blue for neutrons, yellow for electrons)"],
          steps: [
            "Draw concentric circles for K, L, and M shells.",
            "For Sodium (Z=11, A=23): place 11 red dots and 12 blue dots in the central nucleus.",
            "Distribute 11 yellow dots: 2 in K shell, 8 in L shell, and 1 in M shell."
          ],
          observation: "The single electron in the outermost M shell is loosely bound, explaining why sodium readily loses 1 electron to form Na⁺.",
          conclusion: "Chemical properties and valency are governed by the number of outermost valence electrons."
        }
      ],
      didYouKnow: "Carbon-14 has a radioactive half-life of 5,730 years. By measuring the ratio of Carbon-14 to stable Carbon-12 in Egyptian mummy wraps or wooden dinosaur excavation tools, archeologists can date artifacts up to 50,000 years old with stunning accuracy!",
      examTips: [
        "Isotopes vs Isobars Mnemonic: IsoTOPES has 'P' for same Protons (same Z). IsoBARS has 'A' for same mass number A.",
        "Valency of inert gases (He, Ne, Ar) is ALWAYS 0 because their valence shell is completely saturated."
      ],
      questions: [
        { id: "sc8q7", type: "num", q: "What is the maximum number of electrons that can be accommodated in the M shell (n = 3)?", numAnswer: 18, hint: "Formula 2n² = 2 * (3)² = 18." },
        { id: "sc8q7_b", type: "mcq", q: "Assertion (A): Isotopes of an element like ³⁵Cl and ³⁷Cl have identical chemical properties but slightly different physical properties.\nReason (R): Chemical reactivity is governed solely by the number of valence electrons, which is identical for all isotopes of a given element.", options: ["Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true"], correctOption: 0, hint: "Same electronic configuration means identical chemical reactions." },
        { id: "sc8q7_c", type: "num", q: "An atom has atomic number Z = 11 and mass number A = 23 (Sodium). How many neutrons are in its nucleus?", numAnswer: 12, hint: "N = A - Z = 23 - 11 = 12." },
        { id: "sc8q8", type: "mcq", q: "Which radioisotope is used in modern oncology radiation therapy for cancer treatment?", options: ["Uranium-235", "Cobalt-60", "Iodine-131", "Carbon-14"], correctOption: 1, hint: "Emits powerful gamma rays." },
        { id: "sc8q7_d", type: "mcq", q: "Which of the following pairs is a classic example of Isobars (different atomic numbers, same mass number)?", options: ["¹²₆C and ¹⁴₆C", "³⁵₁₇Cl and ³⁷₁₇Cl", "⁴⁰₁₈Ar and ⁴⁰₂₀Ca", "¹₁H and ²₁H"], correctOption: 2, hint: "Both have mass number 40 but different protons." },
        { id: "sc8q7_e", type: "mcq", q: "Which radioactive isotope is widely utilized as fuel in nuclear power reactors?", options: ["Cobalt-60", "Uranium-235", "Carbon-14", "Iodine-131"], correctOption: 1, hint: "Undergoes controlled nuclear fission." },
        { id: "sc8q9", type: "num", q: "What is the valency of an element with atomic number 16 (Sulfur: 2, 8, 6)?", numAnswer: 2, hint: "Valency = 8 - 6 = 2." },
        { id: "sc8q7_f", type: "short", q: "Write the electronic configuration and valency of an element with atomic number Z = 12 (Magnesium).", answer: "Electronic configuration of Magnesium (Z=12): K = 2, L = 8, M = 2 (2, 8, 2). It loses its 2 valence electrons to attain a stable octet, so its valency is 2.", hint: "Configuration 2, 8, 2; valency = 2." }
      ]
    }
  ],
  keyPoints: [
    "Subatomic particles: Electron (-1 charge, 1/1840 u mass), Proton (+1 charge, 1 u mass), Neutron (0 charge, 1 u mass).",
    "Thomson's plum pudding model: positive sphere embedded with negative electrons.",
    "Rutherford's gold foil experiment discovered the dense, positively charged nucleus and proved atoms are mostly empty space.",
    "Bohr's model: Electrons revolve in non-radiating discrete energy shells (K, L, M, N).",
    "Bohr-Bury rules: Max 2n² per shell; outermost max 8 electrons; stepwise filling.",
    "Valency is combining capacity (valence e⁻ if ≤ 4; 8 - valence e⁻ if > 4).",
    "Atomic number Z = protons; Mass number A = protons + neutrons.",
    "Isotopes: Same Z, different A (e.g. ³⁵Cl and ³⁷Cl). Isobars: Different Z, same A (e.g. ⁴⁰Ar and ⁴⁰Ca).",
    "Medical/industrial isotopes: Uranium-235 (fuel), Cobalt-60 (cancer), Iodine-131 (goiter)."
  ],
  ncertExercises: [
    { id: "sc8e1", type: "short", q: "If Z = 3, what would be the valency of the element? Also name the element.", answer: "Z = 3 has configuration 2, 1. It loses 1 electron to achieve stability, so its valency is 1. The element is Lithium (Li)." },
    { id: "sc8e2", type: "num", q: "Number of neutrons in an atom of Bromine with A = 80 and Z = 35?", numAnswer: 45, hint: "N = A - Z = 80 - 35." },
    { id: "sc8e3", type: "long", q: "State the postulates of Neils Bohr's model of an atom and draw a sketch showing energy levels n = 1, 2, 3, 4." }
  ]
};

export default ch8;
