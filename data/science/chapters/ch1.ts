import type { ScienceChapter } from "../types";

const ch1: ScienceChapter = {
  n: 1,
  key: "sc1",
  title: "Matter in Our Surroundings & Scientific Inquiry",
  short: "Matter & Science",
  blurb: "Explore the scientific method, the particulate nature of matter, Brownian motion, states of matter, latent heat of fusion and vaporization, and cooling by evaporation.",
  colorScheme: "chemistry",
  animationType: "particles",
  sections: [
    {
      id: "s1",
      title: "The Nature of Science & Particulate Nature of Matter",
      realWorldScenario: {
        title: "The Scent of Incense Sticks & The Vanishing Sugar Cube",
        context: "Light an incense stick (agarbatti) in one far corner of a closed room. Within 30 seconds, even if you are sitting at the opposite corner 10 meters away, the rich fragrance reaches your nostrils. Drop a spoonful of sugar into a full glass of water, and after stirring, the water level does NOT rise at all!",
        application: "How does the fragrance travel across the room without any breeze? And where did the sugar go if the water volume didn't increase? Matter is not continuous like a solid block of wood; it is made of trillions of microscopic, constantly moving particles. The sugar particles slip neatly into the empty intermolecular spaces between water particles, and incense vapor particles diffuse spontaneously into air particles via thermal kinetic energy."
      },
      content: `### What is Science?
Science is not a dusty collection of static facts to be memorized; it is a systematic, evidence-based method of inquiring about the universe through **observation, hypothesis formulation, controlled experimentation, and verifiable deduction**.

### Physical Nature of Matter
Anything that occupies space (possesses **volume**) and has **mass** is defined as **matter**.
* Ancient Indian philosophers classified matter into five basic elements (*Panch Tatva*): Air, Earth, Fire, Sky, and Water (*Vayu, Prithvi, Agni, Akash, Jal*).
* Modern physical science classifies matter based on its **physical state** (solid, liquid, gas) and **chemical composition** (elements, compounds, mixtures).

### The Four Foundational Characteristics of Particles of Matter:
1. **Particles of matter are extraordinarily small:**
   * A single tiny crystal of potassium permanganate ($\\text{KMnO}_4$) can impart a distinct violet-pink color to over $1000\\text{ liters}$ of water! This proves that a single microscopic crystal contains millions of tiny particles that keep dividing into smaller and smaller units.
2. **Particles of matter have spaces between them (Intermolecular Spaces):**
   * When sugar, salt, or dettol dissolves in water, the particles get evenly distributed in the spaces between particles of water. The total liquid volume does not increase significantly because solute particles occupy the pre-existing voids.
3. **Particles of matter are continuously moving (Kinetic Theory):**
   * Particles possess **kinetic energy**.
   * As temperature rises, particles gain kinetic energy and move faster.
   * **Diffusion:** The spontaneous intermixing of particles of two different substances on their own. The rate of diffusion increases rapidly with increasing temperature because higher thermal kinetic energy accelerates molecular velocity.
4. **Particles of matter attract each other (Intermolecular Forces):**
   * Particles are held together by cohesive forces of attraction.
   * This force is strongest in solids (e.g., an iron nail requires high hammer force to break), intermediate in liquids, and negligibly weak in gases (our hand moves effortlessly through air).`,
      keyConcepts: [
        { term: "Matter", definition: "Anything that possesses mass and occupies physical space (volume)." },
        { term: "Diffusion", definition: "The spontaneous intermixing of particles of two different substances driven by concentration gradients and kinetic energy." },
        { term: "Brownian Motion", definition: "The erratic, zig-zag random motion of microscopic particles suspended in a fluid caused by collisions with fluid molecules." },
        { term: "Intermolecular Space", definition: "The microscopic void or space between adjacent molecules/particles of a substance." },
        { term: "Intermolecular Force", definition: "The attractive cohesive force binding neighboring particles together; strongest in solids, weakest in gases." },
      ],
      formulas: [
        { label: "Rate of Diffusion", latex: "\\text{Rate of Diffusion} \\propto \\sqrt{T}", explanation: "Diffusion rate increases with temperature" },
      ],
      workedExamples: [
        {
          title: "Diffusion of Hot Sizzling Food vs Cold Food",
          problem: "The smell of hot sizzling food reaches you several meters away, but to get the smell from cold food you have to go close. Explain this phenomenon using the kinetic theory of matter.",
          steps: [
            "Step 1: The aroma of food is carried by volatile aromatic organic vapor particles escaping from the food into the air.",
            "Step 2: According to kinetic theory, average kinetic energy of particles is directly proportional to absolute temperature (KE ∝ T).",
            "Step 3: At high temperatures in hot sizzling food, vapor particles possess high kinetic energy, resulting in high root-mean-square velocities.",
            "Step 4: Because rate of diffusion increases with higher particle speed, hot food vapors diffuse rapidly across many meters through air.",
            "Step 5: In cold food, particles have low kinetic energy and crawl sluggishly, so negligible vapors diffuse into ambient air."
          ],
          answer: "Hot food aroma diffuses rapidly across distance due to high thermal kinetic energy of volatile molecules."
        }
      ],
      activities: [
        {
          number: "1.2",
          title: "Dilution of Potassium Permanganate (Particle Count)",
          materials: ["Potassium permanganate (KMnO₄) crystals", "Four 100 mL glass beakers", "Water", "Measuring pipette"],
          steps: [
            "Dissolve 2-3 crystals of KMnO₄ in 100 mL of water in Beaker 1 (deep purple solution).",
            "Take 10 mL of this solution and add it to 90 mL of clear water in Beaker 2.",
            "Take 10 mL from Beaker 2 and add to 90 mL water in Beaker 3.",
            "Repeat once more to prepare Beaker 4."
          ],
          observation: "Even at the 4th dilution (1 part in 10,000), the water remains visibly tinted pink.",
          conclusion: "A minute pinch of matter contains millions of sub-microscopic particles that disperse across vast volumes."
        }
      ],
      didYouKnow: "In 1827, botanist Robert Brown looked through a microscope at pollen grains suspended in water and observed them dancing in a violent, unending zig-zag frenzy. In 1905, Albert Einstein proved mathematically that this 'Brownian motion' was definitive physical proof that atoms and molecules actually exist!",
      examTips: [
        "Four Particle Characteristics: Be prepared to list all four: (1) Extremely small size, (2) Intermolecular spaces, (3) Continuous motion / kinetic energy, (4) Mutual forces of attraction.",
        "Diffusion Rate vs Temperature: Always mention that diffusion rate increases with temperature because kinetic energy of particles increases."
      ],
      questions: [
        { id: "sc1q1", type: "mcq", q: "The continuous random zig-zag motion of microscopic particles suspended in a fluid is called:", options: ["Osmosis", "Brownian motion", "Centrifugation", "Tyndall scattering"], correctOption: 1, hint: "Discovered by Robert Brown." },
        { id: "sc1q2", type: "mcq", q: "Which of the following has the strongest intermolecular forces of attraction?", options: ["Oxygen gas", "Water", "Alcohol", "Iron rod"], correctOption: 3, hint: "A rigid solid metal." },
        { id: "sc1q3", type: "short", q: "What happens to the rate of diffusion when temperature is increased?", answer: "The rate of diffusion increases because particles gain kinetic energy and move faster.", hint: "Think about molecular kinetic energy." }
      ]
    },
    {
      id: "s2",
      title: "The Three States of Matter, Phase Changes & Latent Heat",
      realWorldScenario: {
        title: "Why Steam Burns Hurt More than Boiling Water & The Earthen Matka",
        context: "Accidentally touching boiling water at 100°C gives a painful burn, but touching steam at the exact same 100°C causes excruciating, deep tissue thermal destruction! Meanwhile, on scorching 45°C summer afternoons in rural India, water stored inside an unglazed clay pot (*matka*) stays refreshingly chilled without any electricity.",
        application: "Steam contains hidden energy called the Latent Heat of Vaporization (2,260,000 Joules per kilogram!) absorbed to break intermolecular bonds during boiling without raising temperature. When steam condenses onto skin, it dumps all this latent energy instantly. In an earthen matka, water continuously seeps through microscopic pores and evaporates off the outer surface, extracting heat from the stored water and cooling it naturally!"
      },
      content: `### Comparing the Three States of Matter:
| Characteristic | Solid | Liquid | Gas |
| :--- | :--- | :--- | :--- |
| **Shape & Volume** | Definite shape and definite volume | Indefinite shape (takes container's shape), definite volume | Indefinite shape and indefinite volume |
| **Intermolecular Space** | Closely packed; minimum space | Moderately packed; intermediate | Widely separated; maximum space |
| **Intermolecular Attraction**| Maximum (strongest) | Intermediate | Minimum (negligible) |
| **Compressibility** | Almost incompressible | Negligible compressibility | Highly compressible (e.g. CNG, LPG) |
| **Fluidity / Rigidity** | Rigid (cannot flow) | Fluid (flows from higher to lower level) | Highly fluid (expands to fill entire container) |

### Temperature Scales & Conversions
* **Kelvin (K)** is the SI unit of temperature.
$$0^\\circ\\text{C} = 273.15\\text{ K} \\approx 273\\text{ K}$$
* **To convert Celsius to Kelvin:**
$$T (\\text{K}) = T (^\\circ\\text{C}) + 273$$
* **To convert Kelvin to Celsius:**
$$T (^\\circ\\text{C}) = T (\\text{K}) - 273$$

### Latent Heat: The Hidden Energy of Phase Change
When heat is supplied to a solid at its melting point, the thermometer reading **remains completely constant** until the entire solid has melted into liquid! Where does this heat go?
* It is absorbed by the particles to overcome the strong cohesive forces of attraction without increasing their kinetic energy (so temperature does not rise).
* This hidden thermal energy is termed **Latent Heat** (Latin: *latere*, to lie hidden).
1. **Latent Heat of Fusion:** The amount of heat energy required to change $1\\text{ kg}$ of a solid into liquid at atmospheric pressure at its melting point (for ice: $3.34 \\times 10^5\\text{ J/kg}$).
   * Ice at $0^\\circ\\text{C}$ is much more effective at cooling than water at $0^\\circ\\text{C}$ because ice absorbs additional latent heat of fusion from surroundings!
2. **Latent Heat of Vaporization:** The amount of heat energy required to change $1\\text{ kg}$ of a liquid into gas at atmospheric pressure at its boiling point (for water: $2.26 \\times 10^6\\text{ J/kg}$).
   * Steam at $100^\\circ\\text{C}$ causes far more severe burns than boiling water at $100^\\circ\\text{C}$ because steam particles possess extra latent heat of vaporization!

### Evaporation & Factors Affecting It
Evaporation is the spontaneous change of a liquid into vapor at **any temperature below its boiling point**. It is a **surface phenomenon** where high-energy surface molecules break free into the air.

#### Four Factors Affecting Rate of Evaporation:
1. **Surface Area:** Rate increases with larger surface area (spreading clothes out to dry).
2. **Temperature:** Rate increases with higher temperature (more molecules gain sufficient kinetic energy to escape).
3. **Humidity:** Rate decreases with high humidity (if air is already saturated with water vapor, it cannot hold more moisture).
4. **Wind Speed:** Rate increases with higher wind speed (wind sweeps away water vapor, lowering local humidity).

### Cooling Caused by Evaporation
When liquid evaporates, the evaporating particles absorb the required latent heat of vaporization from their immediate surroundings, leaving the surroundings noticeably cooler!
* **Cotton clothes in summer:** Cotton absorbs sweat and exposes it to air, causing rapid evaporation that cools our body.
* **Acetone/nail polish remover on palm:** Acetone evaporates instantly, absorbing heat from your skin, making your palm feel ice-cold.
* **Desert room coolers:** Fan draws hot dry air through water-soaked aspen pads; water evaporates rapidly, chilling the outgoing breeze.`,
      keyConcepts: [
        { term: "Melting Point", definition: "The temperature at which a solid converts into liquid at 1 atmosphere pressure (for ice: 0°C or 273 K)." },
        { term: "Boiling Point", definition: "The temperature at which a liquid's vapor pressure equals atmospheric pressure (for water: 100°C or 373 K)." },
        { term: "Latent Heat of Fusion", definition: "Heat energy required to change 1 kg of solid into liquid at atmospheric pressure at its melting point without temperature change." },
        { term: "Latent Heat of Vaporization", definition: "Heat energy required to change 1 kg of liquid into vapor at atmospheric pressure at its boiling point without temperature change." },
        { term: "Sublimation", definition: "The direct phase transition of solid into vapor without passing through the intermediate liquid state (e.g. camphor, dry ice)." },
        { term: "Evaporation", definition: "A surface phenomenon where liquid transforms into vapor at temperatures below its boiling point, producing cooling." },
      ],
      formulas: [
        { label: "Celsius to Kelvin", latex: "T(\\text{K}) = T(^\\circ\\text{C}) + 273", unit: "K" },
        { label: "Kelvin to Celsius", latex: "T(^\\circ\\text{C}) = T(\\text{K}) - 273", unit: "°C" },
      ],
      workedExamples: [
        {
          title: "Temperature Scale Conversions",
          problem: "Convert the following temperatures: (a) 25°C to the Kelvin scale. (b) 373 K to the Celsius scale. (c) Boiling point of water (100°C) to Kelvin.",
          formula: "T(\\text{K}) = T(^\\circ\\text{C}) + 273, \\quad T(^\\circ\\text{C}) = T(\\text{K}) - 273",
          steps: [
            "Part (a): T(K) = 25 + 273 = 298 K (standard room temperature).",
            "Part (b): T(°C) = 373 - 273 = 100°C (boiling point of water).",
            "Part (c): T(K) = 100 + 273 = 373 K."
          ],
          answer: "(a) 298 K. (b) 100°C. (c) 373 K."
        },
        {
          title: "Explaining Steam Burns using Latent Heat",
          problem: "Why does steam at 100°C produce more severe burns on human skin than boiling water at 100°C?",
          steps: [
            "Step 1: Both boiling water and steam are at the identical temperature of 100°C (373 K).",
            "Step 2: However, to convert liquid water at 100°C into steam at 100°C, each kilogram of water absorbed 2.26 × 10⁶ Joules of latent heat of vaporization.",
            "Step 3: When steam contacts skin, it condenses back into liquid water at 100°C, releasing this colossal latent heat directly into human tissue.",
            "Step 4: After condensing, the hot liquid water further cools, releasing additional sensible heat.",
            "Conclusion: Steam delivers over 2,260 kJ/kg MORE thermal energy than boiling water at the same temperature."
          ],
          answer: "Steam carries extra latent heat of vaporization (2.26 × 10⁶ J/kg), releasing vastly greater thermal energy upon contact with skin."
        }
      ],
      activities: [
        {
          number: "1.12",
          title: "Observing Temperature Plateau During Ice Melting (Latent Heat)",
          materials: ["150 g crushed ice in beaker", "Laboratory thermometer (-10°C to 110°C)", "Bunsen burner", "Tripod stand and wire gauze", "Glass stirrer"],
          steps: [
            "Suspend the thermometer so its bulb is submerged in crushed ice. Record initial reading (0°C).",
            "Apply a low flame and stir continuously.",
            "Record temperature every 1 minute until all ice has melted into water, and continue heating until water boils."
          ],
          observation: "The thermometer stays pinned at exactly 0°C for several minutes while ice melts, despite continuous flame heat. Once melted, temperature climbs steadily to 100°C, where it stays pinned again during boiling.",
          conclusion: "Heat supplied during a phase transition is absorbed as latent heat to break intermolecular bonds without increasing temperature."
        }
      ],
      didYouKnow: "Solid carbon dioxide is called 'Dry Ice' because under normal 1 atmosphere pressure, it sublimates directly from solid into gas at -78.5°C without ever melting into a wet liquid! It is widely used to transport COVID-19 mRNA vaccines and biological organs across oceans.",
      examTips: [
        "Celsius to Kelvin Conversion: Remember K = °C + 273. Never put a degree sign on Kelvin! Writing 300°K is technically wrong; write 300 K.",
        "Boiling vs Evaporation: Boiling is a BULK phenomenon occurring at a fixed temperature throughout the liquid; Evaporation is a SURFACE phenomenon occurring at ANY temperature below boiling point."
      ],
      questions: [
        { id: "sc1q4", type: "num", q: "Convert 300 K to Celsius scale (°C):", numAnswer: 27, hint: "°C = K - 273 = 300 - 273." },
        { id: "sc1q5", type: "mcq", q: "Why does an earthen pot (matka) keep water cool in summer?", options: ["Pores allow air to blow through", "Continuous evaporation through pores extracts heat", "Clay is an insulator", "Clay chemical reaction cools water"], correctOption: 1, hint: "Evaporation causes cooling." },
        { id: "sc1q6", type: "short", q: "Define Latent Heat of Vaporization.", answer: "The amount of heat energy required to change 1 kg of liquid into gas at atmospheric pressure at its boiling point without any change in temperature.", hint: "Hidden heat of liquid to gas transition." }
      ]
    }
  ],
  keyPoints: [
    "Matter is anything that possesses mass and occupies volume.",
    "Particles of matter are sub-microscopic, have spaces between them, are in continuous motion (kinetic energy), and attract each other.",
    "Diffusion is spontaneous particle mixing, accelerating with higher temperature.",
    "Three states: Solids (definite shape/volume), Liquids (definite volume, indefinite shape), Gases (indefinite shape/volume, highly compressible).",
    "SI unit of temperature is Kelvin (K): K = °C + 273.",
    "Latent heat is absorbed during phase transitions without changing temperature (Latent heat of fusion & vaporization).",
    "Sublimation is the direct transition from solid to vapor (camphor, dry ice).",
    "Evaporation is a surface cooling phenomenon affected by surface area, temperature, humidity, and wind speed."
  ],
  ncertExercises: [
    { id: "sc1e1", type: "num", q: "Convert 573 K to the Celsius scale.", numAnswer: 300, hint: "°C = 573 - 273." },
    { id: "sc1e2", type: "short", q: "Why should we wear cotton clothes in summer?", answer: "Cotton is a good absorber of water/sweat, exposing sweat to the atmosphere for rapid evaporation, which extracts heat from the body and produces cooling." },
    { id: "sc1e3", type: "long", q: "Explain the four factors that affect the rate of evaporation with everyday examples." }
  ]
};

export default ch1;
