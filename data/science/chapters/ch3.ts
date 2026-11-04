import type { ScienceChapter } from "../types";

const ch3: ScienceChapter = {
  n: 3,
  key: "sc3",
  title: "Tissues: Architecture of Living Organisms",
  short: "Tissues in Action",
  blurb: "Explore the cellular division of labour: meristematic vs. permanent plant tissues, xylem & phloem vascular plumbing, epithelial barriers, connective matrices, muscular fibers, and neural circuitry.",
  colorScheme: "biology",
  sections: [
    {
      id: "s1",
      title: "Division of Labour: What are Tissues & Plant Growth Meristems",
      realWorldScenario: {
        title: "Why Onion Roots Grow in Water & Why Humans Can't Regrow Limbs",
        context: "Place an onion bulb over a glass jar filled with water so its base touches the surface. Within 3 days, white roots sprout several centimeters. If you snip off the top 2-3 mm of the root tips with scissors, root growth halts permanently!",
        application: "Why does snipping the tip freeze root growth? Unlike animals where growth occurs uniformly across the entire body, plant growth is restricted to localized growth zones containing Meristematic Tissues. Once the apical meristem at the tip is severed, the active dividing cells are lost forever. Understanding meristems is central to agricultural plant tissue culture and bonsai cultivation."
      },
      content: `In single-celled organisms like *Amoeba*, a single cell executes all vital life processes — digestion, gas exchange, excretion, and reproduction. In multicellular organisms with billions of cells, survival requires a sophisticated **division of labour**.

### Definition of a Tissue
> **Tissue:** A group of cells that are similar in structure, origin, and/or work together to perform a specific biological function.
* Example: Muscle cells contract to cause movement, nerve cells transmit electrical impulses, and vascular blood cells transport oxygen, hormones, and nutrients.

### Fundamental Differences Between Plant and Animal Tissues:
1. **Mobility vs. Stationary Lifestyle:** Plants are rooted and stationary; they require immense mechanical and structural support. Consequently, a vast majority of plant tissues consist of **dead, supportive cells with thick walls** (like cork and sclerenchyma). Animals move actively in search of food and mates; their tissues are predominantly **living cells** requiring continuous oxygen and energy.
2. **Growth Patterns:** Plant growth is **localized to specific growth zones (meristems)** throughout their life, whereas animal cell growth is **uniform and distributed**, lacking distinct dividing vs. non-dividing regions.

### Plant Meristematic Tissues (Active Growth Zones)
Meristematic tissues consist of continuously dividing, immature, undifferentiated cells.
* **Cytological Characteristics:**
  * Very active living cells with **dense cytoplasm** and thin cellulose cell walls.
  * Prominent, large nuclei to direct rapid mitotic divisions.
  * **Lack vacuoles:** Vacuoles store nutrient reserves and cell sap, which are unnecessary for cells whose sole purpose is rapid division. Large vacuoles would also physically obstruct rapid chromosome segregation!

#### The Three Types of Meristems (Based on Location):
1. **Apical Meristem:**
   * Located at the growing tips of stems and roots.
   * **Function:** Responsible for primary vertical growth; increases the length (height) of root and shoot systems.
2. **Lateral Meristem (Cambium):**
   * Located along the lateral margins/circumference of stems and roots.
   * **Function:** Responsible for secondary growth; increases the **girth (thickness/diameter)** of woody trunks and roots.
3. **Intercalary Meristem:**
   * Located at the base of leaves or internodes on twigs (e.g., in grasses and bamboo).
   * **Function:** Promotes rapid elongation of internodes, enabling grass to regrow rapidly after being grazed by herbivores!`,
      keyConcepts: [
        { term: "Tissue", definition: "A group of structurally similar cells organized to perform a specialized physiological function." },
        { term: "Division of Labour", definition: "Specialization of different cell groups/tissues to execute specific biological tasks efficiently." },
        { term: "Meristematic Tissue", definition: "Undifferentiated plant tissue consisting of actively dividing cells responsible for growth." },
        { term: "Apical Meristem", definition: "Meristem located at the apex of shoots and roots that drives primary elongation growth." },
        { term: "Lateral Meristem (Cambium)", definition: "Meristem located along the perimeter that drives secondary thickening (girth) of stems and roots." },
        { term: "Intercalary Meristem", definition: "Meristem located at internodes/leaf bases that drives internodal elongation." },
      ],
      formulas: [],
      workedExamples: [
        {
          title: "Distinguishing Meristematic from Permanent Cells",
          problem: "Under a high-power microscope, you observe two plant cell samples: Sample A has dense cytoplasm, thin walls, large nuclei, and zero vacuoles. Sample B has thick lignified walls, empty lumen, and no nucleus. Identify each and explain their biological roles.",
          steps: [
            "Step 1: Analyze Sample A characteristics: Dense cytoplasm, thin walls, prominent nucleus, no vacuoles.",
            "Inference for A: These are classical hallmarks of Meristematic Tissue actively engaged in mitosis (growth).",
            "Step 2: Analyze Sample B characteristics: Thick lignified walls, empty lumen, absence of living protoplasm/nucleus.",
            "Inference for B: These are dead permanent cells (Sclerenchyma or Xylem vessels/tracheids) specialized for mechanical rigidity and water conduction.",
            "Conclusion: Sample A drives active organ growth; Sample B provides physical support and fluid transport."
          ],
          answer: "Sample A = Meristematic tissue (growth); Sample B = Sclerenchyma / dead vascular permanent tissue (structural support)."
        }
      ],
      activities: [
        {
          number: "6.1",
          title: "Observing Root Growth in Onion Bulbs (NCERT Lab)",
          materials: ["Two glass jars (Jar A and Jar B)", "Water", "Two fresh onion bulbs", "Pair of scissors", "Ruler"],
          steps: [
            "Fill both jars with clean tap water.",
            "Place an onion bulb on the mouth of each jar so root base rests in water.",
            "Measure root length daily for 3 days.",
            "On Day 4, cut off 1 cm from the root tips of the onion in Jar B with scissors. Leave Jar A uncut.",
            "Observe and record root lengths for another 5 days."
          ],
          observation: "In Jar A, root tips continue growing longer each day. In Jar B, roots stop growing completely from the moment the tips were snipped off.",
          conclusion: "Growth in roots occurs exclusively at the root apex due to the presence of the apical meristem. Removing the apical meristem halts root elongation permanently."
        }
      ],
      didYouKnow: "Bamboo is the fastest-growing woody plant on Earth, capable of surging up to 91 centimeters (35 inches) in a single 24-hour period! This staggering growth speed is powered by ultra-active intercalary meristems located at every single internode along its culm.",
      examTips: [
        "Why do meristematic cells lack vacuoles? (Classic 2-mark board question): (1) Their primary role is rapid cell division, so they do not store food or metabolic waste; (2) Dense cytoplasm without fluid-filled vacuoles ensures unhindered mitotic spindle formation.",
        "Remember: Apical = Length; Lateral = Girth (thickness); Intercalary = Internodal length."
      ],
      questions: [
        { id: "sc3q1", type: "mcq", q: "Girth of stem increases due to the activity of:", options: ["Apical meristem", "Lateral meristem (cambium)", "Intercalary meristem", "Vertical parenchyma"], correctOption: 1, hint: "Responsible for secondary thickness." },
        { id: "sc3q2", type: "short", q: "Which meristem allows grazed lawn grasses to rapidly regenerate their leaves?", answer: "Intercalary meristem", hint: "Found at internode bases." },
        { id: "sc3q3", type: "mcq", q: "Meristematic cells possess:", options: ["Thick walls and large vacuoles", "Thin cellulose walls and no vacuoles", "Dead protoplasm", "Lignified cell corners"], correctOption: 1, hint: "Think about cells optimized for division." }
      ]
    },
    {
      id: "s2",
      title: "Permanent Plant Tissues: Simple (Parenchyma, Collenchyma, Sclerenchyma) & Complex (Xylem & Phloem)",
      realWorldScenario: {
        title: "The Hard Husk of Coconut & The Redwood's 100-Meter Water Pipeline",
        context: "Try tearing open the outer husk of a brown coconut with bare hands — it feels like pulling steel cables! Meanwhile, inside a giant 115-meter California Redwood tree, hundreds of gallons of water climb straight up against gravity daily without any mechanical electrical pumps.",
        application: "The tough coconut husk is made of Sclerenchyma fibers cemented with lignin, one of the hardest natural polymers known to science. The tree's silent 100-meter water pipeline is the Xylem, composed of dead, hollow, interconnected tracheids and vessels operating via transpiration pull. Plant permanent tissues engineer miracles of strength and fluid dynamics."
      },
      content: `When meristematic cells take up a permanent shape, size, and function and lose the ability to divide, the process is termed **differentiation**. This produces **Permanent Tissues**.

### I. Simple Permanent Tissues (Single Cell Type)
Composed of structurally identical cells performing a uniform function:

1. **Parenchyma:**
   * Living, unspecialized cells with thin primary cellulose walls and **prominent intercellular spaces**.
   * **Function:** General packaging tissue; stores food and nutrients.
   * **Specialized Variants:**
     * **Chlorenchyma:** Parenchyma cells containing chlorophyll that execute **photosynthesis** (found in leaf mesophyll).
     * **Aerenchyma:** Parenchyma containing large air cavities, found in aquatic plants (e.g., water hyacinth, lotus) that provide **buoyancy** to float.

2. **Collenchyma:**
   * Living, elongated cells with **irregular wall thickenings at corners** made of cellulose, hemicellulose, and pectin.
   * Intercellular spaces are very small or absent.
   * **Function:** Provides **tensile flexibility and mechanical elasticity**. Allows delicate plant parts (leaf stalks/petioles, tendrils, young stems) to bend in gale winds without snapping!

3. **Sclerenchyma:**
   * **Dead cells** at maturity with long, narrow, tapered shapes.
   * Cell walls are heavily and uniformly thickened with **Lignin** (a rigid chemical cement that acts as waterproof mortar).
   * There are **zero intercellular spaces**, and the internal cell cavity (lumen) is extremely narrow.
   * **Function:** Provides supreme mechanical hardness, rigidity, and protection.
   * **Occurrences:** Husk of coconut (coir), jute fibers, hard shells of walnuts and almonds, seed coat of legumes, and the gritty stone cells in pear and guava pulp.

4. **Epidermis & Protective Cork:**
   * **Epidermis:** Single outermost protective cell layer covered with a waxy, water-resistant layer called **Cutin**, preventing moisture loss, fungal attack, and mechanical injury.
   * **Stomata:** Microscopic pores in the leaf epidermis flanked by two kidney-shaped **guard cells**. Guard cells regulate **transpiration** (water vapor loss) and atmospheric gas exchange ($\\text{CO}_2$ in, $\\text{O}_2$ out).
   * **Cork (Bark):** As woody stems age, outer secondary meristems produce thick bark. Cork cells are dead, compactly arranged without intercellular spaces, and impregnated with **Suberin** — a chemical that makes bark impervious to gases and water!

---

### II. Complex Permanent Tissues (Vascular / Conducting Tissues)
Composed of more than one type of cell working in coordination:

#### 1. Xylem (Water-Conducting Pipeline)
Transports water and dissolved minerals **unidirectionally upward** from roots to leaves:
* **Tracheids:** Elongated dead tubular cells with tapering ends and lignified pitted walls.
* **Vessels:** Long continuous cylindrical tubes formed by vertical columns of dead cells with dissolved end walls.
* **Xylem Parenchyma:** The **only living component** of xylem! Stores food and assists in sideways radial conduction of water.
* **Xylem Sclerenchyma (Fibres):** Dead, supportive fibers providing mechanical strength.

#### 2. Phloem (Food-Translocating Plumbing)
Transports organic food (sucrose and amino acids) **bidirectionally** from photosynthetic leaves to storage organs and growing tips (**Translocation**):
* **Sieve Tubes:** Tubular cells with perforated end walls called **sieve plates**. Remarkably, mature sieve tube elements have living cytoplasm and cell membrane, but **lack a nucleus and central vacuole**!
* **Companion Cells:** Specialized living parenchymatous cells intimately connected to sieve tubes via plasmodesmata. The companion cell's active nucleus directs the metabolic activities of the enucleate sieve tube!
* **Phloem Parenchyma:** Living cells that store food resins and latex.
* **Phloem Fibres (Bast Fibres):** The **only dead component** of phloem! Possess immense tensile strength (e.g., commercial jute, hemp, and flax fibers used to weave ropes and burlap sacks).`,
      keyConcepts: [
        { term: "Differentiation", definition: "The developmental process by which meristematic cells take up a permanent shape, size, and specialized function." },
        { term: "Parenchyma", definition: "Living, thin-walled plant packaging tissue with large intercellular spaces; includes chlorenchyma and aerenchyma." },
        { term: "Collenchyma", definition: "Living plant tissue with pectin-thickened corners providing flexible mechanical support without snapping." },
        { term: "Sclerenchyma", definition: "Dead, heavily lignified plant tissue with narrow lumen providing hardness and rigid strength (e.g. coconut husk)." },
        { term: "Xylem", definition: "Complex vascular tissue conducting water and minerals upward; consists of tracheids, vessels, xylem parenchyma, and fibres." },
        { term: "Phloem", definition: "Complex vascular tissue translocating food bidirectionally; consists of sieve tubes, companion cells, phloem parenchyma, and phloem fibres." },
      ],
      formulas: [],
      workedExamples: [
        {
          title: "Xylem vs Phloem: Structural & Functional Comparison",
          problem: "Tabulate four definitive differences between Xylem and Phloem tissues in flowering plants.",
          steps: [
            "Difference 1 (Function): Xylem conducts water and dissolved mineral salts; Phloem conducts soluble organic food (sucrose, amino acids).",
            "Difference 2 (Direction of Flow): Xylem transport is strictly unidirectional (upward from roots to foliage); Phloem transport is bidirectional (source to sink, both upward to growing buds and downward to storage roots).",
            "Difference 3 (Living vs Dead Elements): In Xylem, 3 out of 4 elements (tracheids, vessels, fibres) are dead; only xylem parenchyma is living. In Phloem, 3 out of 4 elements (sieve tubes, companion cells, phloem parenchyma) are living; only phloem fibres are dead.",
            "Difference 4 (Wall Chemistry): Xylem conducting tubes have thick walls heavily lignified with pits; Phloem sieve tubes have cellulose walls with perforated sieve plates."
          ],
          answer: "Xylem conducts water unidirectionally via mostly dead lignified cells; Phloem translocates food bidirectionally via mostly living elements."
        }
      ],
      activities: [
        {
          number: "6.2",
          title: "Microscopic Examination of Coconut Husk Sclerenchyma",
          materials: ["Dry coconut husk", "Razor blade", "Safranin dye stain", "Glycerine", "Glass slide & cover slip", "Compound microscope"],
          steps: [
            "Peel a thin brown fiber from the coconut husk and tease it apart with dissecting needles.",
            "Place the fibers on a slide, add 2 drops of red Safranin dye, and let it stain for 2 minutes.",
            "Wash excess stain with water, mount in a drop of glycerine, and cover with a coverslip without air bubbles.",
            "Observe under low and high power magnification."
          ],
          observation: "Long, tightly packed, polygonally shaped spindle cells stained deep red by Safranin. Walls are exceptionally thick with zero intercellular spaces, and central lumen is microscopic or obliterated.",
          conclusion: "Coconut husk consists entirely of dead, lignified sclerenchyma fibers engineered for supreme mechanical protection."
        }
      ],
      didYouKnow: "Transpiration through leaf stomata creates an immense negative tension (transpiration pull) inside xylem vessels reaching up to -30 atmospheres of pressure — powerful enough to lift a column of continuous water to the canopy of a 30-story tree without breaking the water column!",
      examTips: [
        "High-Frequency Trap: Name the only LIVING element of Xylem -> Xylem Parenchyma. Name the only DEAD element of Phloem -> Phloem Fibres (Bast fibres).",
        "Suberin vs Cutin: Cutin is the waxy waterproof coating on leaf epidermis; Suberin is the impervious chemical found in the walls of cork/bark."
      ],
      questions: [
        { id: "sc3q4", type: "mcq", q: "The flexibility in plants is due to which tissue?", options: ["Collenchyma", "Sclerenchyma", "Parenchyma", "Chlorenchyma"], correctOption: 0, hint: "Living cells with thickened corners." },
        { id: "sc3q5", type: "mcq", q: "Which of the following is the only dead component in phloem tissue?", options: ["Sieve tubes", "Companion cells", "Phloem parenchyma", "Phloem fibres"], correctOption: 3, hint: "Used commercially as jute and flax." },
        { id: "sc3q6", type: "short", q: "What chemical substance is deposited in the walls of cork cells that makes them impervious to gases and water?", answer: "Suberin", hint: "Found in tree bark." }
      ]
    },
    {
      id: "s3",
      title: "Animal Tissues: Epithelial Barriers, Connective Matrices, Muscles & Neurons",
      realWorldScenario: {
        title: "The Marathon Runner's Ruptured Achilles Tendon & Heart Cells",
        context: "During a championship marathon sprint, an athlete suddenly hears a sickening 'pop' above his heel and collapses in agony — his Achilles tendon has ruptured! Meanwhile, his cardiac heart muscle cells have been contracting 160 times every minute without stopping for a single second of rest since before he was born.",
        application: "Tendons are dense fibrous connective tissues with exceptional tensile strength designed to transmit colossal pulling forces from calf muscles to heel bones. Cardiac muscle cells feature branched, interconnected networks linked by intercalated discs with abundant mitochondria, enabling non-stop rhythmic pumping without lactic acid fatigue throughout life. Animal tissues are marvels of mechanical and metabolic specialization."
      },
      content: `Animal bodies are organized into four primary tissue classes:

### 1. Epithelial Tissue (Covering & Protective Sheets)
Forms the continuous protective barrier covering body surfaces and lining internal organs and cavities. Cells are tightly packed with virtually **no intercellular spaces** and rest on a non-cellular **extracellular basement membrane**.
* **Simple Squamous Epithelium:** Single layer of ultra-thin, flat, tile-like cells. Found where transport of substances occurs across a permeable barrier: lining of blood vessels (endothelium) and lung alveoli.
* **Stratified Squamous Epithelium:** Arranged in multiple stacked layers to prevent wear and tear. Found in the outer epidermis of human skin.
* **Columnar Epithelium:** Tall, pillar-like cells facilitating secretion and absorption. Found in the inner mucosal lining of stomach and intestine.
  * **Ciliated Columnar Epithelium:** Cells bear hair-like **cilia** on their outer surfaces that beat rhythmically to move mucus forward (lining the respiratory tract and fallopian tubes).
* **Cuboidal Epithelium:** Cube-shaped cells providing mechanical support. Forms the lining of kidney tubules and ducts of salivary glands.
* **Glandular Epithelium:** Epithelial tissue folded inward to form multicellular glands that secrete enzymes, saliva, or hormones.

### 2. Connective Tissue (Binding, Cushioning & Support)
Cells are loosely arranged and suspended within an extensive **intercellular matrix** (fluid, gelatinous, or solid rigid).
* **Blood (Vascular Tissue):** Fluid connective tissue consisting of liquid **plasma** (containing proteins, salts, glucose, and hormones) in which Red Blood Cells (RBCs/erythrocytes, transport $\\text{O}_2$), White Blood Cells (WBCs/leukocytes, immune defense), and Platelets (blood clotting) are suspended.
* **Bone:** Rigid, hard skeletal tissue embedded in a matrix rich in **Calcium and Phosphorus compounds**. Houses osteocyte cells; provides the structural framework supporting soft organs.
* **Cartilage:** Flexible connective tissue with widely spaced cells (chondrocytes) embedded in a matrix of proteins and sugars. Smoothens bone surfaces at joints; present in nose tip, ear pinna, trachea rings, and larynx.
* **Ligament vs. Tendon:**
  * **Ligament:** Connects **Bone to Bone**. Highly elastic, considerable strength, very little matrix.
  * **Tendon:** Connects **Muscle to Bone**. Cord-like, tough fibrous tissue with great tensile strength but limited flexibility.
* **Areolar Tissue:** Packaging tissue found between skin and underlying muscles, surrounding blood vessels and nerves. Fills internal spaces and assists in tissue repair.
* **Adipose Tissue:** Specialized fat-storage tissue located beneath the skin and around vital organs (kidneys, heart). Cells are engorged with fat droplets; functions as an effective **thermal insulator**.

### 3. Muscular Tissue (Contractile Movement)
Composed of elongated muscle fibers containing specialized **contractile proteins (actin and myosin)** that contract and relax to generate physical motion.
* **Skeletal / Striated Muscle:** Attached to bones; under conscious voluntary control. Long, cylindrical, **unbranched, multinucleate** fibers with conspicuous alternate light and dark cross-striations.
* **Smooth / Unstriated Muscle:** Found in involuntary internal organs (alimentary canal, blood vessel walls, iris of eye, bronchi). Long, **spindle-shaped (pointed tapered ends), uninucleate**, lacking cross-striations.
* **Cardiac Muscle:** Exclusively found in the walls of the heart. Involuntary, **cylindrical, branched, uninucleate** fibers with faint striations. Contracts rhythmically and untiringly throughout life!

### 4. Nervous Tissue (Signal Transmission & Neural Circuits)
Specialized to perceive environmental stimuli and transmit rapid electrical nerve impulses across the body.
* Composed of individual functional units termed **Neurons (Nerve Cells)**.
* **Anatomy of a Neuron:**
  1. **Cell Body (Cyton):** Contains the central nucleus and neuroplasm.
  2. **Dendrites:** Short, highly branched fiber projections that receive incoming chemical signals from neighboring neurons.
  3. **Axon:** A single, elongated fiber (can extend over 1 meter long!) that conducts electrical impulses away from the cell body toward terminal nerve endings.
* A collection of nerve fibers bundled together by connective tissue forms a **Nerve**.`,
      keyConcepts: [
        { term: "Epithelial Tissue", definition: "Tightly packed cellular sheets forming protective barriers and internal linings resting on a basement membrane." },
        { term: "Connective Tissue", definition: "Loosely spaced cells embedded within an extracellular matrix (fluid, gelatinous, or rigid)." },
        { term: "Ligament", definition: "Elastic fibrous connective tissue connecting Bone to Bone." },
        { term: "Tendon", definition: "Inelastic, tough fibrous connective tissue connecting Muscle to Bone with immense tensile strength." },
        { term: "Striated Muscle", definition: "Voluntary, cylindrical, unbranched, multinucleated muscle fibers attached to skeleton." },
        { term: "Cardiac Muscle", definition: "Involuntary, cylindrical, branched, uninucleated heart muscle fibers contracting rhythmically without fatigue." },
        { term: "Neuron", definition: "The structural and functional unit of the nervous system, consisting of cyton, dendrites, and an elongated axon." },
      ],
      formulas: [],
      workedExamples: [
        {
          title: "Comparing the Three Types of Muscle Fibres",
          problem: "Draw up a comparative chart of Striated, Smooth, and Cardiac muscles based on their structure, location, and control.",
          steps: [
            "Feature 1 (Shape & Branching): Striated are cylindrical and unbranched; Smooth are spindle-shaped with tapered ends; Cardiac are cylindrical and branched.",
            "Feature 2 (Number of Nuclei): Striated are multinucleate; Smooth are uninucleate; Cardiac are uninucleate.",
            "Feature 3 (Striations): Striated have prominent dark/light bands; Smooth have zero striations; Cardiac have faint striations and intercalated discs.",
            "Feature 4 (Control): Striated are voluntary; Smooth are involuntary; Cardiac are involuntary.",
            "Feature 5 (Location): Striated attach to bones (limbs); Smooth are in digestive gut/blood vessels; Cardiac are strictly in the heart wall."
          ],
          answer: "Striated (voluntary, multinucleate, unbranched); Smooth (involuntary, spindle, uninucleate); Cardiac (involuntary, branched, heart only)."
        }
      ],
      activities: [
        {
          number: "6.4",
          title: "Microscopic Observation of Human Blood Smear",
          materials: ["Prepared permanent stained slide of human blood", "Compound light microscope"],
          steps: [
            "Place the stained blood smear on the stage under low power (10x), then switch to oil immersion (100x).",
            "Identify the pale yellow fluid background (plasma).",
            "Count and observe the biconcave, non-nucleated reddish discs (RBCs) and the larger, nucleated cells with lobed nuclei (WBCs/neutrophils/lymphocytes)."
          ],
          observation: "RBCs vastly outnumber WBCs by roughly 600 to 1. Platelets appear as tiny purple cellular specks.",
          conclusion: "Blood is a liquid connective tissue specialized for transport and cellular immunity."
        }
      ],
      didYouKnow: "A single motor neuron in the human spinal cord that controls the muscles in your big toe possesses an axon that stretches over 1 meter long, transmitting electrical impulses at speeds exceeding 400 kilometers per hour (120 m/s)!",
      examTips: [
        "Ligament vs Tendon Mnemonic: Ligament connects Bone to Bone ('BLB' - Bone Ligament Bone). Tendon connects Muscle to Bone ('MTB' - Muscle Tendon Bone). This distinction is tested in almost every single Class 9 annual exam!",
        "Remember that human Red Blood Cells (RBCs) lack a nucleus at maturity to maximize hemoglobin storage capacity for oxygen transport."
      ],
      questions: [
        { id: "sc3q7", type: "mcq", q: "Which connective tissue connects two bones together?", options: ["Tendon", "Ligament", "Cartilage", "Areolar tissue"], correctOption: 1, hint: "Remember BLB (Bone-Ligament-Bone)." },
        { id: "sc3q8", type: "mcq", q: "Spindle-shaped, uninucleate, involuntary muscle cells are found in:", options: ["Limbs", "Wall of the stomach", "Heart wall", "Tongue"], correctOption: 1, hint: "Smooth muscle in visceral digestive organs." },
        { id: "sc3q9", type: "short", q: "Name the part of the neuron that carries electrical impulses AWAY from the cell body.", answer: "Axon", hint: "Single long fiber." }
      ]
    }
  ],
  keyPoints: [
    "Tissue: A group of structurally similar cells working together to perform a specialized function.",
    "Meristematic tissue: Actively dividing cells; thin walls, dense cytoplasm, large nuclei, lack vacuoles. Types: Apical (length), Lateral (girth), Intercalary (internodes).",
    "Simple permanent plant tissues: Parenchyma (thin walls, storage; chlorenchyma, aerenchyma), Collenchyma (pectin corners, flexibility), Sclerenchyma (dead, lignified, rigid strength).",
    "Complex plant vascular tissues: Xylem conducts water upward (tracheids, vessels, parenchyma, fibres); Phloem translocates food bidirectionally (sieve tubes, companion cells, parenchyma, fibres).",
    "Epidermis covered with cutin; stomata with guard cells regulate gas exchange and transpiration; cork contains suberin.",
    "Animal epithelial tissues: Simple squamous, stratified squamous, columnar, ciliated columnar, cuboidal, glandular.",
    "Animal connective tissues: Blood (fluid plasma), Bone (calcium matrix), Cartilage (chondrocytes), Ligaments (bone to bone), Tendons (muscle to bone), Areolar, Adipose (insulating fat).",
    "Muscular tissues: Striated (voluntary, multinucleate), Smooth (involuntary, spindle), Cardiac (involuntary, branched, rhythmic non-fatiguing).",
    "Nervous tissue: Neurons with cyton, dendrites, and an elongated axon transmitting nerve impulses."
  ],
  ncertExercises: [
    { id: "sc3e1", type: "short", q: "Name the tissue responsible for movement in our body.", answer: "Muscular tissue" },
    { id: "sc3e2", type: "short", q: "What does a neuron look like?", answer: "A neuron resembles a miniature tree with a central cell body (cyton) containing a nucleus, branching dendrites receiving signals, and a single long axon carrying impulses away." },
    { id: "sc3e3", type: "long", q: "Differentiate between striated, unstriated, and cardiac muscles on the basis of their structure and site/location in the body." }
  ]
};

export default ch3;
