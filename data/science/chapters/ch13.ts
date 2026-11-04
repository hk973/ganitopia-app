import type { ScienceChapter } from "../types";

const ch13: ScienceChapter = {
  n: 13,
  key: "sc13",
  title: "Natural Resources & Earth's Biogeochemical Cycles",
  short: "Earth as a System",
  blurb: "Understand Earth's 4 interacting spheres, coastal land/sea breeze mechanics, the nitrogen & carbon cycles, greenhouse global warming, and stratospheric ozone shield dynamics.",
  colorScheme: "biology",
  sections: [
    {
      id: "s1",
      title: "Earth's Four Spheres, The Atmosphere & Coastal Breezes",
      realWorldScenario: {
        title: "The Moon's Brutal -190°C Nights vs. Earth's Cozy Blanket",
        context: "The Moon and Earth are the exact same distance from the Sun. Yet on the Moon, daytime temperatures soar to boiling +110°C, and night plunges instantly to a deadly -190°C (a savage 300°C swing!). On Earth, the average global temperature stays remarkably stable around +15°C.",
        application: "Why doesn't Earth freeze solid every night? Because our planet is cocooned by the ATMOSPHERE — a blanket of gases that is a poor conductor of heat. During the day, air prevents scorching solar extremes from directly frying the surface; at night, it traps radiant heat from escaping into space. Without our atmosphere, all liquid oceans would freeze into solid ice and complex life would cease to exist."
      },
      content: `Earth is a magnificent dynamic system composed of four interconnected spheres:
1. **Atmosphere (Air):** The gaseous envelope extending hundreds of kilometers above the surface (78% Nitrogen, 21% Oxygen, 0.9% Argon, 0.04% Carbon dioxide, and trace water vapor).
2. **Hydrosphere (Water):** All liquid, frozen, and subterranean water on Earth covering over 71% of the surface (oceans, ice caps, rivers, aquifers).
3. **Lithosphere (Land):** The solid, rigid outer crust and upper mantle consisting of rocks, minerals, and fertile soil.
4. **Biosphere (Life Zone):** The global ecological system integrating all living organisms interacting with the abiotic atmosphere, hydrosphere, and lithosphere.

---

### Atmospheric Heat Dynamics: How Coastal Winds & Rains Form
Air movements (winds) and weather patterns are driven by **uneven solar heating** of Earth's surface and the vast difference in specific heat capacities between land and water.

#### The Mechanics of Sea Breeze (Daytime):
1. During the day, land heats up much faster than the sea (soil has lower specific heat capacity than water).
2. The air above the hot land warms rapidly, expands, becomes less dense, and **rises upward**, creating a low-pressure zone over the land.
3. Cooler, high-pressure air over the sea rushes in toward the coast to replace the rising warm air.
4. This daytime airflow from sea to land is the **Sea Breeze**!

#### The Mechanics of Land Breeze (Nighttime):
1. At night, land cools down much faster than the sea.
2. The sea water remains relatively warm, keeping the air above it warm and rising (low pressure over water).
3. Cooler, denser air over the land flows out toward the ocean.
4. This nighttime airflow from land to sea is the **Land Breeze**!

---

### Air Pollution & Acid Rain
* **Suspended Particulate Matter (SPM):** Burning fossil fuels (coal, diesel, petrol) releases unburnt carbon particles (soot) and carcinogenic polycyclic aromatic hydrocarbons. In winter, this condenses with water droplets to produce hazardous **Smog** (smoke + fog), slashing visibility and causing respiratory asthma.
* **Acid Rain:** Combustion of sulfur- and nitrogen-rich fossil fuels releases sulfur dioxide ($\\text{SO}_2$) and nitrogen oxides ($\\text{NO}_x$). In clouds, they react with water vapor:
  $$\\text{SO}_2 + \\text{H}_2\\text{O} + \\frac{1}{2}\\text{O}_2 \\to \\text{H}_2\\text{SO}_4 \\quad (\\text{Sulfuric Acid})$$
  $$\\text{NO}_2 + \\text{H}_2\\text{O} \\to \\text{HNO}_3 \\quad (\\text{Nitric Acid})$$
* Acid rain corrodes limestone monuments (Marble Cancer on the Taj Mahal), acidifies freshwater lakes, and leaches toxic aluminum from soils into drinking water.`,
      keyConcepts: [
        { term: "Atmosphere", definition: "The blanket of protective gases surrounding Earth that acts as a thermal buffer to stabilize planetary temperatures." },
        { term: "Sea Breeze", definition: "Daytime coastal breeze blowing from cool sea toward warm land driven by rising warm air over land." },
        { term: "Land Breeze", definition: "Nighttime coastal breeze blowing from cool land toward warm sea." },
        { term: "Acid Rain", definition: "Precipitation containing dissolved sulfuric and nitric acids resulting from industrial sulfur and nitrogen dioxide emissions." },
        { term: "Smog", definition: "A toxic atmospheric mixture of smoke pollutants and fog, causing severe respiratory disease and poor visibility." },
      ],
      formulas: [],
      workedExamples: [
        {
          title: "Physics of Coastal Breeze Circulation",
          problem: "Explain why coastal cities like Mumbai and Chennai experience moderate, pleasant climates year-round with narrow temperature ranges compared to Delhi.",
          steps: [
            "Step 1: Water has an exceptionally high specific heat capacity (4184 J/kg·K), meaning it absorbs and releases colossal quantities of thermal energy with minimal temperature change.",
            "Step 2: Land heats and cools rapidly. In coastal regions, the daily alternating cycle of daytime Sea Breeze and nighttime Land Breeze continuously moderates ambient air temperatures.",
            "Step 3: In inland landlocked cities like Delhi, there is no large water body to provide thermal buffering, resulting in extreme continentality (scorching 45°C summers and chilly 4°C winters)."
          ],
          answer: "High heat capacity of ocean water combined with diurnal sea and land breezes moderates coastal temperatures."
        }
      ],
      activities: [
        {
          number: "14.1",
          title: "Demonstrating Convection Currents with Smoke & Candle",
          materials: ["Glass beaker or wide bottle", "Small birthday candle", "Incense stick (agarbatti)", "Matches"],
          steps: [
            "Fix the candle at the bottom of the beaker and light it.",
            "Light an incense stick and hold its smoking tip near the top rim of the beaker.",
            "Observe the direction in which the smoke curls."
          ],
          observation: "When held directly above the candle, smoke shoots straight up. When held to the side, smoke is drawn down and inward toward the candle base before rising.",
          conclusion: "Warm air heated by the candle expands and ascends, creating a low-pressure suction that draws in surrounding cool air (convection current)."
        }
      ],
      didYouKnow: "Earth's atmosphere weighs approximately 5.5 quadrillion metric tons (5.5 × 10¹⁵ tonnes), yet pressing down on every square centimeter of your shoulders right now is 1.03 kilograms of air pressure — balanced perfectly by internal fluid blood pressure!",
      examTips: [
        "Sea Breeze vs Land Breeze Direction: Sea Breeze blows FROM SEA to land (Daytime). Land Breeze blows FROM LAND to sea (Nighttime). The name tells you WHERE THE WIND ORIGINATES.",
        "Role of atmosphere in climate: Prevents sudden daytime temperature surges and prevents nighttime heat radiation from escaping."
      ],
      questions: [
        { id: "sc13q1", type: "mcq", q: "During daytime in coastal areas, the direction of wind is:", options: ["From land to sea", "From sea to land", "From high altitude down", "Randomly changing"], correctOption: 1, hint: "Sea Breeze blows inward." },
        { id: "sc13q2", type: "mcq", q: "Acid rain is caused by atmospheric emissions of:", options: ["Carbon monoxide and methane", "Oxides of sulfur and nitrogen", "Chlorofluorocarbons", "Ozone and hydrogen"], correctOption: 1, hint: "Produces H2SO4 and HNO3." },
        { id: "sc13q3", type: "short", q: "Why is the atmosphere called the 'thermal blanket' of Earth?", answer: "Because air is a poor conductor of heat: it prevents extreme daytime solar overheating and prevents radiant terrestrial heat from escaping into space at night.", hint: "Think about heat conduction." }
      ]
    },
    {
      id: "s2",
      title: "Biogeochemical Cycles: Nitrogen, Carbon & Water",
      realWorldScenario: {
        title: "The Nitrogen Paradox: Surrounded by Air, Starving for Fertilizer",
        context: "Earth's atmosphere is an ocean of Nitrogen: 78% of every breath you take is pure nitrogen. Yet if you plant a wheat crop without fertilizer or nitrogen-fixing microbes, the crops will turn sickly yellow and die of nitrogen starvation!",
        application: "Why can't plants inhale nitrogen directly from air? Atmospheric nitrogen exists as two atoms held by an unyielding covalent triple bond (N≡N), which plants and animals are biochemically powerless to break! Only specialized diazotroph bacteria (like Rhizobium in pea root nodules) possess the nitrogenase enzyme capable of 'fixing' inert nitrogen into usable nitrates. Biogeochemical cycles drive all biological productivity on planet Earth."
      },
      content: `A **Biogeochemical Cycle** is the continuous cyclic pathway through which essential chemical elements (water, carbon, nitrogen, oxygen) circulate between the abiotic environment (air, water, soil) and living organisms.

---

### The Master Nitrogen Cycle (Step-by-Step):
Nitrogen is an essential constituent of amino acids, proteins, DNA, RNA, vitamins, and chlorophyll.

1. **Nitrogen Fixation (Converting $N_2$ into Soluble Compounds):**
   * **Biological Fixation:** Symbiotic bacteria (***Rhizobium***) residing inside the specialized root nodules of leguminous plants (peas, beans, pulses, clover) convert atmospheric $\\text{N}_2$ into soluble ammonia and ammonium ions. Free-living soil bacteria (***Azotobacter***) and cyanobacteria (*Anabaena*, *Nostoc*) also fix nitrogen.
   * **Physical / Atmospheric Fixation:** During intense lightning strikes, high temperatures and pressures break $\\text{N}\\equiv\\text{N}$ bonds, combining nitrogen with oxygen to produce nitrogen oxides ($\\text{NO}_x$). Rain dissolves these into nitrous and nitric acids, which react with soil minerals to form **nitrates ($\\text{NO}_3^-$)**.
2. **Nitrification:**
   Soil nitrifying bacteria (*Nitrosomonas*) convert ammonia into nitrites ($\\text{NO}_2^-$), and *Nitrobacter* oxidizes nitrites into **nitrates ($\\text{NO}_3^-$)**.
3. **Nitrogen Assimilation:**
   Plant roots absorb nitrates and ammonium from the soil to synthesize plant proteins and nucleic acids. Herbivores consume plants, converting them into animal proteins.
4. **Ammonification:**
   When plants and animals excrete urea/uric acid or die, decomposers (putrefying bacteria and fungi) break down organic nitrogenous wastes back into **ammonia ($\\text{NH}_3$)**.
5. **Denitrification (Closing the Planetary Loop):**
   Specialized anaerobic denitrifying bacteria (e.g., ***Pseudomonas***, *Thiobacillus*) convert soil nitrates back into gaseous molecular **$\\text{N}_2$**, returning it to the atmosphere!

---

### The Planetary Carbon Cycle
Carbon is the elemental backbone of all organic molecules (carbohydrates, fats, proteins, nucleic acids).
* **Fixation:** Photosynthetic green plants, algae, and cyanobacteria absorb atmospheric $\\text{CO}_2$ and convert it into glucose via solar energy:
  $$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{light} \\to \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$
* **Return Pathways to Atmosphere:**
  1. **Cellular Respiration:** Plants, animals, and microbes break down glucose, exhaling $\\text{CO}_2$ back into air.
  2. **Decomposition:** Fungal and bacterial decay of dead organic carcasses releases $\\text{CO}_2$.
  3. **Combustion:** Burning firewood, coal, petroleum, and natural gas oxidizes fossilized carbon into vast amounts of $\\text{CO}_2$.
* **Long-Term Geological Sinks:**
  * Marine organisms incorporate dissolved carbonates into calcium carbonate ($\\text{CaCO}_3$) seashells, which over millions of years compress into vast **limestone rock strata**.
  * Ancient buried swamps and forests fossilized into coal and petroleum oil reservoirs.`,
      keyConcepts: [
        { term: "Biogeochemical Cycle", definition: "The circular movement of matter between the biological community and abiotic physical reservoirs." },
        { term: "Nitrogen Fixation", definition: "The biological or physical conversion of inert atmospheric N₂ gas into biologically usable ammonia and nitrates." },
        { term: "Rhizobium", definition: "Symbiotic nitrogen-fixing bacterium inhabiting root nodules of leguminous plants." },
        { term: "Nitrification", definition: "The biological oxidation of ammonia into nitrites and nitrates by soil bacteria (Nitrosomonas, Nitrobacter)." },
        { term: "Denitrification", definition: "The bacterial reduction of soil nitrates back into gaseous N₂ by anaerobic bacteria like Pseudomonas." },
        { term: "Carbon Sink", definition: "A natural reservoir (such as oceans, forests, or limestone rocks) that accumulates and stores carbon-containing chemical compounds." },
      ],
      formulas: [],
      workedExamples: [
        {
          title: "Tracing a Nitrogen Atom through the Biosphere",
          problem: "Describe the sequential biological pathway of a nitrogen atom from an atmospheric N₂ molecule to a muscle protein in a human body and back to the air.",
          steps: [
            "Step 1 (Fixation): Atmospheric N₂ gas is converted into ammonium by Rhizobium bacteria inside the root nodules of a chickpea plant.",
            "Step 2 (Nitrification & Assimilation): Soil bacteria convert ammonium to nitrates. Chickpea roots absorb nitrates and synthesize amino acids, storing plant protein in chickpea seeds.",
            "Step 3 (Ingestion): A human eats the chickpeas. Digestive enzymes break down the plant protein into amino acids, which are absorbed and synthesized into human muscle actin/myosin protein.",
            "Step 4 (Excretion/Death & Ammonification): The human excretes urea, or upon death, decomposers convert muscle tissue back into soil ammonia.",
            "Step 5 (Denitrification): Denitrifying bacteria (Pseudomonas) in waterlogged soil reduce nitrates back into N₂ gas, returning the nitrogen atom to the atmosphere."
          ],
          answer: "N₂ -> Rhizobium -> Chickpea protein -> Human muscle -> Soil ammonia -> Nitrate -> Pseudomonas -> Atmospheric N₂."
        }
      ],
      activities: [
        {
          number: "14.3",
          title: "Examining Root Nodules of Leguminous Plants",
          materials: ["Uprooted pea or gram (chana) plant with intact roots", "Water", "Magnifying glass", "Blade"],
          steps: [
            "Carefully wash the root system in water to remove adhering soil particles.",
            "Look for small rounded or branched swellings (root nodules) along the lateral roots.",
            "Slice a healthy pink nodule horizontally with a clean blade."
          ],
          observation: "The interior of the nodule is distinctly pinkish-red due to leghemoglobin (an oxygen scavenger protein maintaining anaerobic conditions for nitrogenase).",
          conclusion: "Legume root nodules house symbiotic Rhizobium bacteria that fix atmospheric nitrogen for plant nutrition."
        }
      ],
      didYouKnow: "In the 1910s, German chemists Fritz Haber and Carl Bosch invented the industrial Haber-Bosch process to fix atmospheric nitrogen into ammonia fertilizer under high pressure (200 atm) and iron catalyst. Today, over 50% of all the nitrogen atoms in your human body originated in a synthetic fertilizer chemical factory!",
      examTips: [
        "Nitrogen Cycle Bacteria Checklist: Nitrogen-Fixing -> Rhizobium / Azotobacter; Nitrifying -> Nitrosomonas / Nitrobacter; Denitrifying -> Pseudomonas. Memorize these specific genus names for full marks.",
        "Remember that leguminous plants enrich soil with nitrogen naturally, making crop rotation with pulses an ancient organic farming method."
      ],
      questions: [
        { id: "sc13q4", type: "mcq", q: "Which bacterium converts soil nitrates back into atmospheric nitrogen gas (denitrification)?", options: ["Rhizobium", "Nitrosomonas", "Pseudomonas", "Lactobacillus"], correctOption: 2, hint: "Anaerobic denitrifier." },
        { id: "sc13q5", type: "mcq", q: "Rhizobium bacteria live symbiotically in the root nodules of:", options: ["Cereal plants (wheat, rice)", "Leguminous plants (peas, pulses)", "Gymnosperm trees (pines)", "Citrus trees"], correctOption: 1, hint: "Pod-bearing crops." },
        { id: "sc13q6", type: "short", q: "Name the two natural processes by which atmospheric nitrogen is fixed.", answer: "Biological nitrogen fixation (by bacteria like Rhizobium) and physical fixation by lightning.", hint: "Microbes and electrical discharge." }
      ]
    },
    {
      id: "s3",
      title: "Global Environmental Crises: Greenhouse Effect & The Stratospheric Ozone Hole",
      realWorldScenario: {
        title: "The Antarctic Ozone Hole & The Triumph of the Montreal Protocol",
        context: "In May 1985, British Antarctic Survey scientists discovered something terrifying above Halley Bay: more than 50% of the protective stratospheric ozone shield had vanished into a gaping chemical wound the size of North America! Skin cancer rates threatened to skyrocket globally.",
        application: "The culprit was CFCs (Chlorofluorocarbons) from refrigerators and aerosol spray cans. Released into the air, a single chlorine radical can catalytically destroy over 100,000 ozone molecules! In 1987, world governments signed the historic Montreal Protocol, banning CFCs. Today, the ozone hole is healing — proving that global science-backed diplomacy can rescue planetary life-support systems."
      },
      content: `Human industrial activities have disrupted Earth's delicate geochemical equilibria, creating two urgent global planetary crises:

---

### 1. The Greenhouse Effect & Global Warming
* **The Greenhouse Analogy:** A glass greenhouse allows incoming short-wavelength solar radiation (visible light) to pass through its glass panes easily, warming the interior soil and plants. The warm interior radiates long-wavelength infrared (heat) radiation back outward, but the glass panes **reflect and trap infrared radiation inside**, keeping the greenhouse tropical warm even during sub-zero winters.
* **Earth's Greenhouse Mechanism:**
  1. Solar radiation strikes the Earth's surface and warms it.
  2. Earth re-radiates thermal energy back toward space as **infrared radiation**.
  3. Certain atmospheric trace gases — primarily **Carbon Dioxide ($\\text{CO}_2$), Methane ($\\text{CH}_4$), Nitrous Oxide ($\\text{N}_2\\text{O}$), and Water Vapor** — absorb and re-emit this outgoing infrared radiation in all directions, trapping heat in the lower troposphere.
* **The Enhanced Greenhouse Effect & Consequences:**
  * Massive combustion of fossil fuels and unchecked deforestation have increased atmospheric $\\text{CO}_2$ concentration from $280\\text{ ppm}$ (pre-industrial) to over $420\\text{ ppm}$ today!
  * **Consequences of Global Warming:**
    1. Accelerated melting of polar ice caps and Himalayan glaciers, raising global sea levels and threatening to submerge coastal megacities (Mumbai, New York, Venice, Dhaka).
    2. Intensified catastrophic weather extremes: unprecedented heatwaves, super-cyclones, flash droughts, and wild forest fires.
    3. Bleaching and death of coral reefs due to ocean acidification and warming seawater.

---

### 2. The Stratospheric Ozone Layer ($\\text{O}_3$)
* **Ozone:** A triatomic molecule formed by three oxygen atoms ($\\text{O}_3$). In the lower troposphere near ground level, ozone is a toxic, poisonous pollutant causing lung damage. However, in the **Stratosphere (16 to 30 km altitude)**, it forms a vital protective shield!
* **Formation of Stratospheric Ozone:**
  High-energy solar ultraviolet (UV) radiation splits diatomic oxygen molecules into free nascent oxygen atoms:
  $$\\text{O}_2 \\xrightarrow{\\text{UV rays}} \\text{O} + \\text{O}$$
  These highly reactive nascent oxygen atoms combine with molecular oxygen to form ozone:
  $$\\text{O} + \\text{O}_2 \\to \\mathbf{\\text{O}_3}$$
* **Protective Function:** The stratospheric ozone layer absorbs lethal, mutagenic **Ultraviolet-B (UV-B) radiation** emitted by the Sun. UV-B radiation mutates DNA, causing malignant melanoma skin cancers, corneal cataract blindness, immune suppression in humans, and kills phytoplankton in marine food webs.

---

### Ozone Depletion & The Montreal Protocol
* In the late 20th century, synthetic chemicals known as **Chlorofluorocarbons (CFCs)** (such as Freon-11 and Freon-12) were widely manufactured as non-toxic, stable refrigerants, air-conditioner propellants, and aerosol foaming agents.
* Because CFCs are chemically inert, they do not decompose in the lower atmosphere. They drift slowly up into the stratosphere intact.
* In the stratosphere, intense UV radiation breaks CFC molecules, releasing free **Chlorine free radicals ($\\text{Cl}^\\bullet$)**.
* A single chlorine radical acts as a catalyst, decomposing thousands of ozone molecules into ordinary oxygen:
  $$\\text{Cl}^\\bullet + \\text{O}_3 \\to \\text{ClO}^\\bullet + \\text{O}_2$$
  $$\\text{ClO}^\\bullet + \\text{O} \\to \\text{Cl}^\\bullet + \\text{O}_2$$
* **The Ozone Hole:** Detected over Antarctica every spring season due to unique polar stratospheric ice clouds accelerating the catalytic chlorine destruction.
* **The Montreal Protocol (1987):** An international treaty signed under the United Nations Environment Programme (UNEP) that froze and phased out CFC production worldwide, replacing them with ozone-safe hydrofluorocarbons (HFCs).`,
      keyConcepts: [
        { term: "Greenhouse Effect", definition: "The natural phenomenon wherein atmospheric greenhouse gases trap outgoing infrared heat radiation, warming Earth's surface." },
        { term: "Greenhouse Gases (GHGs)", definition: "Atmospheric gases that absorb and emit infrared radiation: CO₂, CH₄, N₂O, and water vapor." },
        { term: "Ozone Layer (O₃)", definition: "A stratospheric gaseous belt that absorbs lethal solar ultraviolet (UV-B) radiation, protecting life on Earth." },
        { term: "Chlorofluorocarbons (CFCs)", definition: "Synthetic organic compounds containing carbon, chlorine, and fluorine used as refrigerants that catalytically destroy stratospheric ozone." },
        { term: "Montreal Protocol", definition: "A landmark 1987 international treaty mandating the global phase-out of ozone-depleting substances." },
      ],
      formulas: [
        { label: "Ozone Photochemical Formation", latex: "\\text{O}_2 \\xrightarrow{\\text{UV}} \\text{O} + \\text{O}, \\quad \\text{O} + \\text{O}_2 \\to \\text{O}_3" },
        { label: "Chlorine Catalytic Ozone Breakdown", latex: "\\text{Cl}^\\bullet + \\text{O}_3 \\to \\text{ClO}^\\bullet + \\text{O}_2" },
      ],
      workedExamples: [
        {
          title: "Distinguishing Global Warming from Ozone Depletion",
          problem: "Many students mistakenly think that global warming is caused by the ozone hole letting more heat in from the Sun. Clearly differentiate between the Greenhouse Effect and Ozone Depletion.",
          steps: [
            "Difference 1 (Location): The Enhanced Greenhouse Effect occurs in the lower atmosphere (Troposphere); Ozone Depletion occurs in the upper atmosphere (Stratosphere).",
            "Difference 2 (Primary Gas Culprits): Greenhouse effect is caused by Carbon Dioxide (CO₂), Methane (CH₄), and Nitrous oxide (N₂O); Ozone depletion is caused by Chlorofluorocarbons (CFCs) and halons.",
            "Difference 3 (Mechanism): Greenhouse gases trap outgoing INFRARED (heat) radiation, raising planetary surface temperature; Ozone depletion allows lethal ULTRAVIOLET (UV) radiation to reach Earth, causing mutations and cancers.",
            "Difference 4: The ozone hole does NOT directly cause global warming! They are distinct environmental phenomena."
          ],
          answer: "Greenhouse effect = CO₂ trapping Infrared (heat) in Troposphere; Ozone depletion = CFCs destroying O₃ layer allowing UV radiation in Stratosphere."
        }
      ],
      activities: [
        {
          number: "14.4",
          title: "Demonstrating the Greenhouse Effect with Two Jars",
          materials: ["Two identical glass jars with lids", "Two laboratory thermometers", "Plastic wrap", "Sunlight / heating lamp"],
          steps: [
            "Place a thermometer in Jar A and seal the lid tightly.",
            "Place a thermometer in Jar B, leave the lid off, but wrap tightly with clear plastic wrap.",
            "Place both jars in bright outdoor sunlight for 2 hours.",
            "Record the internal temperatures."
          ],
          observation: "The enclosed jar with transparent wrapping reaches temperatures 5°C to 10°C higher than ambient air.",
          conclusion: "Glass and transparent plastic trap infrared radiation inside, mimicking planetary greenhouse warming."
        }
      ],
      didYouKnow: "If all the stratospheric ozone spread across the 20-kilometer-thick layer of our stratosphere were compressed down to pure gas at sea-level pressure (1 atm, 0°C), the entire protective ozone shield would be a fragile layer only 3 millimeters (0.12 inches) thick — about the thickness of two pennies stacked together!",
      examTips: [
        "Tropospheric Ozone vs Stratospheric Ozone: In the Troposphere, Ozone is a TOXIC pollutant and respiratory irritant; in the Stratosphere, Ozone is a BENEFICIAL protective shield absorbing UV radiation.",
        "Remember the chemical formula of ozone is O₃, formed by UV splitting O₂ into nascent oxygen: O + O₂ -> O₃."
      ],
      questions: [
        { id: "sc13q7", type: "mcq", q: "The stratospheric ozone shield absorbs which type of harmful solar radiation?", options: ["Infrared radiation", "Ultraviolet (UV-B) radiation", "Visible blue light", "Cosmic microwave rays"], correctOption: 1, hint: "Mutagenic UV rays." },
        { id: "sc13q8", type: "mcq", q: "Which of the following compounds is the primary driver of stratospheric ozone destruction?", options: ["Carbon dioxide", "Chlorofluorocarbons (CFCs)", "Methane", "Sulfur dioxide"], correctOption: 1, hint: "Refrigerant gases releasing chlorine radicals." },
        { id: "sc13q9", type: "short", q: "Name the international agreement signed in 1987 to freeze and phase out the production of CFCs.", answer: "The Montreal Protocol", hint: "Canadian city." }
      ]
    }
  ],
  keyPoints: [
    "Earth's 4 spheres: Atmosphere (air), Hydrosphere (water), Lithosphere (rock/soil), and Biosphere (life).",
    "Atmosphere stabilizes Earth's climate; sea breezes blow sea-to-land during day, land breezes blow land-to-sea at night.",
    "Acid rain caused by SO₂ and NO₂ emissions from fossil fuels forming sulfuric and nitric acids.",
    "Nitrogen cycle: Nitrogen fixation (Rhizobium, lightning) -> Nitrification (Nitrosomonas, Nitrobacter) -> Assimilation -> Ammonification -> Denitrification (Pseudomonas).",
    "Carbon cycle balances atmospheric CO₂ via photosynthesis (uptake) and respiration/combustion (release).",
    "Greenhouse effect: CO₂, CH₄, and water vapor trap outgoing infrared heat, maintaining habitable temperatures; excess CO₂ causes global warming.",
    "Stratospheric ozone (O₃) absorbs lethal solar UV radiation; depleted by chlorine from synthetic CFCs; regulated by the Montreal Protocol."
  ],
  ncertExercises: [
    { id: "sc13e1", type: "short", q: "Why is water so necessary for all living organisms?", answer: "All cellular biochemical reactions take place in aqueous medium, substances are transported within the body in dissolved form, and water maintains body temperature homeostasis." },
    { id: "sc13e2", type: "short", q: "What is the greenhouse effect?", answer: "The natural atmospheric trapping of outgoing infrared radiation by gases like carbon dioxide and methane, warming the planet's surface." },
    { id: "sc13e3", type: "long", q: "Explain the nitrogen cycle in nature with the help of a labeled schematic flow diagram." }
  ]
};

export default ch13;
