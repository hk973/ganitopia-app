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
        { id: "sc1q1", type: "mcq", q: "The continuous random zig-zag motion of microscopic particles suspended in a fluid is called:", options: ["Osmosis", "Brownian motion", "Centrifugation", "Tyndall scattering"], correctOption: 1, hint: "Discovered by botanist Robert Brown in 1827." },
        { id: "sc1q1_b", type: "mcq", q: "Assertion (A): The aroma of hot sizzling food reaches us several meters away, but to smell cold food we have to go close.\nReason (R): The rate of diffusion increases rapidly with temperature as particles acquire higher thermal kinetic energy.", options: ["Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true"], correctOption: 0, hint: "Higher temperature means faster molecular velocity." },
        { id: "sc1q1_c", type: "mcq", q: "Which of the following is strictly NOT matter according to scientific definition?", options: ["Air", "Almonds", "Cold (feeling of coldness)", "Cold drink"], correctOption: 2, hint: "Matter must have mass and occupy volume. Feelings and thoughts do not." },
        { id: "sc1q1_d", type: "mcq", q: "A swimmer is easily able to cut through water in a swimming pool. Which property of matter does this observation prove?", options: ["Particles of matter are stationary", "Particles of matter have intermolecular spaces and moderate attractive forces", "Matter is continuous like a block of wood", "Particles of matter have infinite mass"], correctOption: 1, hint: "Liquid particles have gaps and can be pushed aside." },
        { id: "sc1q2", type: "mcq", q: "Which of the following has the strongest intermolecular forces of attraction?", options: ["Oxygen gas", "Water", "Alcohol", "Iron rod"], correctOption: 3, hint: "A rigid solid metal has tightly bound particles." },
        { id: "sc1q3", type: "short", q: "What happens to the rate of diffusion when temperature is increased?", answer: "The rate of diffusion increases because particles gain thermal kinetic energy, causing them to move much faster and intermix rapidly.", hint: "Think about molecular kinetic energy." },
        { id: "sc1q1_e", type: "short", q: "When a spoonful of salt is dissolved in 100 mL of water, the water level does not noticeably rise. Explain why.", answer: "Water is composed of microscopic particles with intermolecular spaces (voids) between them. The dissolved salt particles dissociate and slip neatly into these pre-existing empty spaces without increasing the overall liquid volume.", hint: "Think about voids between liquid particles." },
        { id: "sc1q1_f", type: "mcq", q: "If a drop of blue ink and a drop of honey are placed into two separate beakers of water without stirring, what is observed?", options: ["Honey spreads faster than ink", "Blue ink diffuses much faster than dense honey", "Both diffuse at identical rates", "Neither diffuses without stirring"], correctOption: 1, hint: "Lighter particles with lower viscosity diffuse much faster." }
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
        { id: "sc1q4_b", type: "num", q: "Convert 373°C (the boiling point of water) to the Kelvin scale (K):", numAnswer: 646, hint: "K = °C + 273 = 373 + 273." },
        { id: "sc1q4_c", type: "mcq", q: "Assertion (A): Ice at 0°C (273 K) is noticeably more effective in cooling beverages than water at 0°C.\nReason (R): For every kilogram of ice that melts, it absorbs an extra 3.34 × 10⁵ Joules of latent heat of fusion from the beverage.", options: ["Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true"], correctOption: 0, hint: "Latent heat of fusion gives ice greater heat absorption capacity." },
        { id: "sc1q4_d", type: "mcq", q: "Which state of matter has a fixed definite volume but assumes the shape of whichever container it is poured into?", options: ["Solid", "Liquid", "Gas", "Plasma"], correctOption: 1, hint: "Liquids have fixed volume but flow into any container." },
        { id: "sc1q4_e", type: "mcq", q: "The direct transition of solid ammonium chloride or camphor into gas upon heating without melting into liquid is called:", options: ["Evaporation", "Sublimation", "Deposition", "Transpiration"], correctOption: 1, hint: "Solid directly to vapor." },
        { id: "sc1q4_f", type: "mcq", q: "Why is solid carbon dioxide commercially known as 'Dry Ice'?", options: ["It contains no water and sublimates directly into gas at -78.5°C without melting", "It is harvested from dry desert salt flats", "It chemically dehydrates surrounding objects", "It only freezes in complete vacuum"], correctOption: 0, hint: "Sublimates without leaving any wet liquid residue." },
        { id: "sc1q5", type: "mcq", q: "Why does an earthen pot (matka) keep water cool in summer?", options: ["Pores allow air to blow through", "Continuous evaporation through pores extracts heat", "Clay is an insulator", "Clay chemical reaction cools water"], correctOption: 1, hint: "Evaporation causes cooling." },
        { id: "sc1q6", type: "short", q: "Define Latent Heat of Vaporization.", answer: "The amount of heat energy required to change 1 kg of liquid into gas at atmospheric pressure at its boiling point without any change in temperature.", hint: "Hidden heat of liquid to gas transition." },
        { id: "sc1q4_g", type: "short", q: "Why does the temperature of boiling water remain locked at 100°C even while heat energy is continuously supplied by the burner?", answer: "The supplied heat is consumed as the latent heat of vaporization to break the strong intermolecular bonds holding liquid water molecules together, rather than increasing their thermal kinetic energy.", hint: "Latent means hidden heat used for bond breaking." }
      ]
    },
    {
      id: "s3",
      title: "Evaporation, Cooling Factors & The Fourth and Fifth States of Matter",
      realWorldScenario: {
        title: "Sipping Hot Tea from a Saucer & The Acetone Sensation on Your Palm",
        context: "When tea is piping hot, pouring it into a wide saucer allows you to drink it comfortably within seconds without scalding your tongue. And when you pour a drop of nail polish remover (acetone) or sanitizer onto your palm, your skin feels strikingly ice-cold before the liquid vanishes into thin air!",
        application: "A saucer dramatically increases the exposed surface area of the liquid, enabling rapid surface evaporation that quickly extracts heat. Acetone has an ultra-low boiling point; its particles instantly absorb latent heat directly from the living cells of your palm to vaporize, leaving your sensory nerves feeling intensely cooled."
      },
      content: `### What is Evaporation?
Evaporation is the spontaneous change of a liquid into vapor at **any temperature below its boiling point**.

Unlike boiling—which is a bulk phenomenon where bubbles form throughout the liquid—evaporation is strictly a **surface phenomenon**.
* Particles at the exposed surface of a liquid possess higher kinetic energy than particles buried in the bulk.
* A fraction of these energetic surface particles acquire enough energy to overcome the attractive cohesive forces of neighboring particles and escape into the air as vapor.

### The Four Crucial Factors Affecting the Rate of Evaporation:

1. **Surface Area:**
   * Evaporation is a surface process. If the surface area is increased, the rate of evaporation increases proportionately.
   * *Classroom example:* While putting clothes out for drying, we spread them out rather than leaving them folded. We pour hot milk or tea into a wide saucer to cool it down quickly.

2. **Temperature:**
   * With an increase in temperature, a greater number of particles get sufficient kinetic energy to break free into the vapor state.
   * *Classroom example:* Wet clothes dry much faster under the blistering summer sun than on a chilly winter morning.

3. **Humidity (Amount of Water Vapor in Air):**
   * Air around us cannot hold more than a definite amount of water vapor at a given temperature.
   * If the humidity is already high (e.g., during monsoon or rainy season), the rate of evaporation decreases markedly.
   * *Classroom example:* On a humid day, sweat does not evaporate easily from our skin, making us feel sticky and uncomfortable.

4. **Wind Speed:**
   * With the increase in wind speed, water vapor particles are whisked away rapidly by the breeze, reducing the vapor pressure near the liquid surface.
   * *Classroom example:* Clothes dry faster under a whirring ceiling fan or on a windy day.

### How Does Evaporation Cause Cooling?
In an open vessel, the liquid keeps on evaporating. The particles of liquid absorb energy from the surroundings to regain the energy lost during evaporation. This continuous absorption of heat from the surrounding environment leaves the surroundings cool.

* **Desert Air Cooler on a Hot Dry Day:** On a hot and dry day, temperature is high and humidity is very low. Both factors accelerate evaporation. The water circulating over the cooling pads evaporates swiftly, absorbing large amounts of thermal energy from the incoming air and providing icy breezes.
* **Sweating in Summer:** Our body cools itself down through transpiration/perspiration. As sweat evaporates off our skin, it absorbs latent heat from our body, keeping our core temperature steady at 37°C.
* **Why Wear Cotton Clothes in Summer?** Cotton is a supreme absorber of water. It absorbs body perspiration and exposes it to the atmosphere, facilitating rapid evaporation and natural cooling. Synthetic polyester clothes cannot absorb sweat and trap heat.
* **Water Droplets on an Ice-Cold Glass:** When you pour chilled water into a tumbler, the outer surface soon gets covered with water droplets. This is due to **condensation**: water vapor present in ambient air touches the cold glass, loses thermal energy, and converts from gas back to liquid.

### Beyond Solid, Liquid & Gas: The Fourth and Fifth States of Matter

Modern physics recognizes five fundamental states of matter:

1. **Plasma (The 4th State):**
   * Consists of super-energetic and super-excited particles in the form of **ionized gases**.
   * Inside fluorescent light tubes and neon sign bulbs, electricity ionizes the trapped gas, creating glowing plasma.
   * The Sun and distant stars glow brilliantly because extreme gravitational pressure and thermonuclear temperatures create plasma.

2. **Bose-Einstein Condensate - BEC (The 5th State):**
   * In 1920, brilliant Indian physicist **Satyendra Nath Bose** made pathbreaking statistical calculations regarding light quanta.
   * Building on Bose's work, **Albert Einstein** predicted a new state of matter: the *Bose-Einstein Condensate*.
   * In 2001, Eric Cornell, Carl Wieman, and Wolfgang Ketterle won the Nobel Prize in Physics for successfully achieving BEC by cooling a gas of extremely low density (about 1/100,000th the density of normal air) to super-low temperatures just fractions of a billionth of a degree above absolute zero (0 Kelvin).`,
      keyConcepts: [
        { term: "Evaporation", definition: "A surface phenomenon in which liquid molecules convert into vapor at any temperature below the liquid's boiling point." },
        { term: "Humidity", definition: "The measure of moisture or water vapor content present in the surrounding air." },
        { term: "Condensation", definition: "The phase change where vapor particles lose thermal energy upon cooling and transform back into liquid." },
        { term: "Plasma", definition: "The fourth state of matter consisting of highly energized, electrically ionized gas particles, as seen in stars and neon signs." },
        { term: "Bose-Einstein Condensate", definition: "The fifth state of matter formed by cooling an ultra-low-density gas to temperatures within nanokelvins of absolute zero." },
      ],
      formulas: [
        { label: "Rate of Evaporation Relation", latex: "\\text{Rate} \\propto \\frac{\\text{Surface Area} \\times \\text{Temperature} \\times \\text{Wind Speed}}{\\text{Humidity}}", explanation: "Evaporation increases with surface area, temperature, and wind speed, and decreases with humidity." }
      ],
      workedExamples: [
        {
          title: "Why Does a Desert Cooler Work Better on a Hot Dry Day?",
          problem: "Explain why a desert cooler cools more effectively on a hot, dry day than on a humid, rainy day.",
          steps: [
            "Step 1: On a hot dry day, ambient temperature is high and humidity (water vapor content of air) is very low.",
            "Step 2: Low humidity and high temperature both increase the rate of evaporation of water over the cooler pads.",
            "Step 3: Rapid evaporation causes maximum absorption of latent heat from the surrounding air.",
            "Step 4: The incoming air temperature drops significantly as a result.",
            "Conclusion: On a humid rainy day, air is already saturated with moisture, evaporation stalls, and cooling is minimal."
          ],
          answer: "Higher temperature and low humidity accelerate the evaporation rate of water, extracting maximum latent heat from ambient air."
        },
        {
          title: "Sipping Hot Tea from a Saucer",
          problem: "Why are we able to sip hot tea or milk faster from a saucer rather than a cup?",
          steps: [
            "Step 1: A saucer has a significantly larger exposed surface area compared to a cylindrical cup.",
            "Step 2: Evaporation is a surface phenomenon whose rate is directly proportional to exposed surface area.",
            "Step 3: In the saucer, more liquid molecules escape into the vapor phase per second, rapidly carrying away latent heat of vaporization.",
            "Step 4: Consequently, the liquid cools down to a drinkable temperature much faster in a saucer."
          ],
          answer: "The larger surface area of the saucer drastically speeds up surface evaporation and heat dissipation."
        }
      ],
      activities: [
        {
          number: "1.14",
          title: "Investigating the Four Factors Influencing Evaporation",
          materials: ["5 mL water in a test tube", "5 mL water in an open petri dish", "Room table", "Cupboard", "Ceiling fan"],
          steps: [
            "Take 5 mL of water in an open petri dish and place it under an active ceiling fan.",
            "Take 5 mL of water in a narrow test tube and place it near the window.",
            "Take 5 mL of water in a second open petri dish and place it inside a closed, dark cupboard.",
            "Record the time required for water in each vessel to completely evaporate on both a dry day and a rainy day."
          ],
          observation: "The open petri dish under the ceiling fan evaporates fastest (high surface area + high wind speed). The narrow test tube in the dark cupboard takes the longest.",
          conclusion: "Evaporation rate increases with surface area and air movement, and slows drastically in enclosed, humid spaces."
        }
      ],
      didYouKnow: "Lightning bolts are 5 times hotter than the surface of the Sun (nearly 30,000 Kelvin) and transform the ambient air channel into glowing, conductive plasma for a fraction of a millisecond!",
      examTips: [
        "Evaporation vs Boiling Comparison: Always mention: Boiling is a BULK phenomenon at a FIXED boiling point; Evaporation is a SURFACE phenomenon at ANY temperature below boiling point.",
        "Sweat & Cotton: If asked why we wear cotton in summer, explain two steps: (1) Cotton is a good absorber of sweat; (2) It exposes sweat to the atmosphere for rapid cooling via latent heat absorption."
      ],
      questions: [
        { id: "sc1q7", type: "mcq", q: "Which of the following conditions will increase the rate of evaporation of water?", options: ["Increase in temperature of water", "Decrease in surface area", "Increase in humidity", "Decrease in wind speed"], correctOption: 0, hint: "Higher temperature gives particles more kinetic energy." },
        { id: "sc1q7_b", type: "mcq", q: "Assertion (A): Pouring a few drops of nail polish remover (acetone) on our palm produces a soothing sensation of cold.\nReason (R): Acetone molecules absorb latent heat of vaporization directly from our palm cells and evaporate rapidly into vapor.", options: ["Both (A) and (R) are true and (R) is the correct explanation of (A)", "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(A) is true but (R) is false", "(A) is false but (R) is true"], correctOption: 0, hint: "Evaporation extracts latent heat from the immediate contact surface." },
        { id: "sc1q7_c", type: "mcq", q: "Why do clothes spread on a clothesline dry much faster on a windy day?", options: ["Wind creates frictional heating of the cloth", "Moving air whisks away water vapor molecules, reducing ambient vapor concentration near the surface", "Wind increases the chemical reactivity of water", "Air particles pull water molecules by magnetic force"], correctOption: 1, hint: "Wind carries away moisture so more water can evaporate." },
        { id: "sc1q7_d", type: "mcq", q: "The fifth state of matter, Bose-Einstein Condensate (BEC), was predicted based on theoretical calculations by which Indian physicist in 1920?", options: ["C.V. Raman", "Satyendra Nath Bose", "Homi J. Bhabha", "Jagadish Chandra Bose"], correctOption: 1, hint: "Collaborated mathematically with Albert Einstein." },
        { id: "sc1q8", type: "mcq", q: "The fourth state of matter consisting of super-energetic ionized gas particles is called:", options: ["Bose-Einstein Condensate", "Plasma", "Superfluid", "Solid solution"], correctOption: 1, hint: "Found inside stars and fluorescent tubes." },
        { id: "sc1q9", type: "short", q: "Why do we see water droplets on the outer surface of a glass containing ice-cold water?", answer: "Water vapor present in ambient air loses thermal energy upon touching the cold outer glass surface and condenses into liquid droplets.", hint: "Think of phase change from gas to liquid." },
        { id: "sc1q7_e", type: "short", q: "Why does a desert air cooler cool noticeably better on a hot, dry day than on a humid, rainy monsoon day?", answer: "On a hot and dry day, high temperature and low air humidity maximize the rate of water evaporation from the cooling pads, thereby extracting maximum latent heat from incoming air and chilling it effectively.", hint: "Both high temperature and low humidity accelerate evaporation." },
        { id: "sc1q7_f", type: "mcq", q: "The brilliant glow observed inside neon sign bulbs and aurora borealis (Northern Lights) is caused by which state of matter?", options: ["Plasma", "Bose-Einstein Condensate", "Supercooled Liquid", "Sublimated Camphor"], correctOption: 0, hint: "Electrically charged ionized gas particles." }
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
