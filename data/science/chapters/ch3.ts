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
      content: `In single-celled organisms like Amoeba, a single cell executes all vital life processes — digestion, gas exchange, excretion, and reproduction. In multicellular organisms with billions of cells, survival requires a sophisticated division of labour.

### Definition of a Tissue
A tissue is a cluster or group of structurally similar cells having a common origin that work in coordination to perform a specialized biological function.
* Example in animals: Muscle cells contract and relax to execute movement, nerve cells carry electrochemical messages, and blood transports oxygen, hormones, and waste.
* Example in plants: Vascular xylem vessels conduct water from roots to leaves, while phloem distributes photosynthetic food throughout the plant.

### Fundamental Differences Between Plant and Animal Tissues:
1. Mobility vs. Stationary Existence: Plants are stationary and rooted. They need structural strength and mechanical rigidity to withstand strong winds and heavy rainfall. Hence, a vast proportion of mature plant tissue consists of supportive dead cells with thick walls (such as cork and sclerenchyma). Animals move continuously in search of food, shelter, and mates, requiring living tissues that consume high amounts of metabolic energy.
2. Growth Patterns: Plant growth is localized to specific regions called meristems throughout their life cycle. Animal growth, by contrast, is uniform throughout the organism without distinct dividing and non-dividing zones.

### Plant Meristematic Tissues (Active Growth Zones)
Meristematic tissues consist of undifferentiated, continuously dividing cells that generate all new plant organs.

#### Characteristic Features of Meristematic Cells:
* Highly active living cells with thin primary cellulose walls and very dense cytoplasm.
* Large, prominent nuclei to orchestrate rapid cell division (mitosis).
* Almost zero vacuoles: Vacuoles store sap and metabolic products, which dividing cells do not require. Large vacuoles would also physically obstruct rapid chromosome alignment and separation during mitosis.
* Intercellular spaces are absent; cells are packed tightly together.

#### The Three Types of Meristems (Based on Location):
1. Apical Meristem:
   * Location: At the growing tips of roots and stems.
   * Function: Drives primary vertical growth, increasing the height (length) of the shoot and depth of roots.
2. Lateral Meristem (Cambium):
   * Location: Along the lateral sides/circumference of stems and roots.
   * Function: Drives secondary growth, increasing the girth, thickness, and diameter of woody stems and roots.
3. Intercalary Meristem:
   * Location: At the base of leaves or internodes on stems (common in grasses, bamboo, and mint).
   * Function: Causes elongation of internodes. This enables grazed lawn grass to regrow rapidly after herbivores eat the upper blades!`,
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
        {
          id: "sc3q1",
          type: "mcq",
          q: "Girth (diameter) of a plant stem increases primarily due to the activity of:",
          options: ["Apical meristem", "Lateral meristem (cambium)", "Intercalary meristem", "Vertical parenchyma"],
          correctOption: 1,
          hint: "Think about secondary growth that thickens tree trunks.",
          answer: "Lateral meristem (vascular and cork cambium) runs along the perimeter of stems and roots, producing secondary layers that increase the girth (thickness)."
        },
        {
          id: "sc3q2",
          type: "short",
          q: "Which specific meristematic tissue allows grazed lawn grass to rapidly regenerate its elongated leaves?",
          answer: "Intercalary meristem located at the base of internodes and leaf blades.",
          hint: "Found at internode bases in monocots like grasses."
        },
        {
          id: "sc3q3",
          type: "mcq",
          q: "Which of the following cellular features is universally characteristic of plant meristematic cells?",
          options: ["Thick lignified walls and large central vacuoles", "Thin primary cellulose walls, dense cytoplasm, and lack of vacuoles", "Dead protoplasm with empty lumen", "Pectocellulose thickening at cell corners"],
          correctOption: 1,
          hint: "Cells designed exclusively for rapid mitotic division.",
          answer: "Meristematic cells have thin cellulose walls, dense cytoplasm, prominent nuclei, and lack vacuoles because they do not store food and must divide rapidly."
        },
        {
          id: "sc3q4",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Snipping the tip of an onion root stops its growth completely.\nReason (R): Apical meristem responsible for root elongation is located only at the root apex.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "Apical meristem drives primary length elongation.",
          answer: "Both Assertion and Reason are true. The apical meristem is strictly localized at the apex. Cutting the tip removes all dividing cells, freezing root growth permanently."
        },
        {
          id: "sc3q5",
          type: "short",
          q: "State two reasons why plant tissues have a much higher percentage of dead cells compared to animal tissues.",
          answer: "1. Plants are sedentary and need immense mechanical support to stand upright; dead cells provide rigidity with low maintenance. 2. Dead supportive cells (like sclerenchyma and xylem vessels) do not require energy or metabolic nourishment.",
          hint: "Think about stationary lifestyle vs active locomotion."
        },
        {
          id: "sc3q6",
          type: "mcq",
          q: "A nail is hammered into the trunk of a 4-meter tall tree at a height of 1 meter from the ground. After 3 years, the tree has grown to 7 meters. At what height from the ground will the nail be found?",
          options: ["1 meter", "3 meters", "4 meters", "7 meters"],
          correctOption: 0,
          hint: "Apical meristem adds new tissue only at the top of the shoot.",
          answer: "The nail will remain at exactly 1 meter from the ground. Primary vertical elongation occurs exclusively at the apical meristem at the apex; the trunk beneath does not elongate vertically, it only expands in girth."
        },
        {
          id: "sc3q7",
          type: "short",
          q: "Why do meristematic cells lack large vacuoles? Give two scientific reasons.",
          answer: "(1) Meristematic cells divide actively and continuously, hence they do not store food nutrients or waste products. (2) Dense, unvacuolated cytoplasm provides the physical space and mobility needed for mitotic chromosome segregation.",
          hint: "Consider cell function and mitotic machinery."
        }
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
      content: `When meristematic cells take up a permanent shape, size, and function and lose the ability to divide, the process is termed differentiation. This gives rise to permanent tissues.

### I. Simple Permanent Tissues (Composed of One Cell Type)
1. Parenchyma:
   * Living, unspecialized cells with thin primary cellulose walls and prominent intercellular spaces.
   * Function: General packaging tissue; stores food and nutrients in roots, stems, and fruits.
   * Specialized Variations:
     * Chlorenchyma: Parenchyma containing chlorophyll; performs photosynthesis (found in green leaf mesophyll).
     * Aerenchyma: Parenchyma with large internal air cavities, providing buoyancy that allows aquatic plants (hydrilla, lotus, water hyacinth) to float.

2. Collenchyma:
   * Living, elongated cells with irregular cellulose and pectin thickenings at cell corners.
   * Very little or no intercellular spaces.
   * Function: Provides mechanical flexibility and tensile elasticity. It allows tender plant parts (petioles of leaves, tendrils of climbers) to bend vigorously under storm winds without breaking.

3. Sclerenchyma:
   * Dead cells at maturity with narrow lumens and uniformly thickened walls impregnated with Lignin (a hard, waterproof chemical cement).
   * Zero intercellular spaces; cells are tightly cemented together.
   * Function: Supreme hardness, stiffness, and mechanical protection.
   * Locations: Coconut husk (coir), jute and flax fibers, hard nutshells of walnuts and almonds, seed coats, and the gritty stone cells (sclereids) in pear and guava pulp.

4. Protective Tissues:
   * Epidermis: Outermost layer covered by a waxy waterproof layer called Cutin, preventing water loss, pathogen entry, and mechanical damage.
   * Stomata: Tiny kidney-shaped guard-cell regulated pores for gas exchange and transpiration.
   * Cork (Bark): Peripheral dead secondary tissue packed tightly without intercellular spaces and lined with Suberin, making it completely impermeable to water and gases.

---

### II. Complex Permanent Tissues (Vascular / Conducting Tissues)
Complex tissues consist of more than one cell type functioning together in harmony:

#### 1. Xylem (Water-Conducting Vascular Tissue)
Transports water and dissolved minerals unidirectionally from roots upward to stems and leaves:
* Tracheids: Elongated dead tube-like cells with tapering ends and lignified pitted walls.
* Vessels: Long cylindrical continuous tubes formed by end-to-end fusion of dead cells.
* Xylem Parenchyma: The ONLY living component of xylem; stores starch and aids in radial water conduction.
* Xylem Fibres: Dead lignified fibers that provide mechanical support to the plant stem.

#### 2. Phloem (Food-Translocating Vascular Tissue)
Transports soluble organic sugars (sucrose) and amino acids bidirectionally from source (leaves) to sink (roots, fruits, buds):
* Sieve Tubes: Tubular conducting columns with perforated end plates called sieve plates. Living cytoplasm, but mature cells lack a nucleus!
* Companion Cells: Nucleated living cells that control and energize the transport through adjacent sieve tubes.
* Phloem Parenchyma: Living storage cells.
* Phloem Fibres (Bast Fibres): The ONLY dead component of phloem; harvested commercially as jute, hemp, and flax for making ropes.`,
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
        {
          id: "sc3q8",
          type: "mcq",
          q: "Flexibility and bending without breaking in young stems and leaf stalks is provided by:",
          options: ["Collenchyma", "Sclerenchyma", "Parenchyma", "Chlorenchyma"],
          correctOption: 0,
          hint: "Living tissue with cell walls thickened at the corners.",
          answer: "Collenchyma provides mechanical flexibility and tensile elasticity to plant organs, allowing them to bend under wind stress without snapping."
        },
        {
          id: "sc3q9",
          type: "mcq",
          q: "Which of the following is the ONLY dead component in phloem tissue?",
          options: ["Sieve tubes", "Companion cells", "Phloem parenchyma", "Phloem fibres (bast fibres)"],
          correctOption: 3,
          hint: "These fibers are harvested commercially to make jute burlap sacks and ropes.",
          answer: "In phloem, sieve tubes, companion cells, and phloem parenchyma are living. Phloem fibres (sclerenchymatous bast fibres) are the only dead elements."
        },
        {
          id: "sc3q10",
          type: "short",
          q: "What organic chemical is deposited in the walls of cork cells that renders them impervious to gases and water?",
          answer: "Suberin",
          hint: "Chemical found in tree bark protective layers."
        },
        {
          id: "sc3q11",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Sclerenchymatous tissues are dead and provide immense structural support to plants.\nReason (R): Their cell walls are uniformly thickened with lignin cement and lack intercellular spaces.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "Lignin acts as an impermeable structural cement.",
          answer: "Both Assertion and Reason are true. Sclerenchyma cells deposit heavy layers of lignin on their walls, obliterating the lumen and cutting off metabolic exchange, which causes cellular death and gives maximum hardness."
        },
        {
          id: "sc3q12",
          type: "mcq",
          q: "Which plant tissue has large air spaces that allow aquatic plants like water lilies to float on water?",
          options: ["Aerenchyma", "Chlorenchyma", "Collenchyma", "Sclerenchyma"],
          correctOption: 0,
          hint: "A modified form of parenchyma with buoyancy chambers.",
          answer: "Aerenchyma is specialized parenchyma containing spacious air cavities that store gases and provide buoyancy to aquatic plants."
        },
        {
          id: "sc3q13",
          type: "short",
          q: "Name the only living cell component of xylem vascular tissue.",
          answer: "Xylem parenchyma",
          hint: "Responsible for food storage and radial water movement in xylem."
        },
        {
          id: "sc3q14",
          type: "mcq",
          q: "In phloem, mature sieve tube cells lack a nucleus. Which companion structure directs their metabolic activities?",
          options: ["Companion cells via plasmodesmata", "Xylem vessels", "Phloem sclerenchyma fibres", "Stomatal guard cells"],
          correctOption: 0,
          hint: "Specialized sister cells with dense cytoplasm and an active nucleus.",
          answer: "Each sieve tube element is physically and functionally coupled to an adjacent companion cell via plasmodesmata, allowing the companion cell's nucleus to control both cells."
        }
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
Forms the continuous protective barrier covering body surfaces and lining internal organs and cavities. Cells are tightly packed with virtually no intercellular spaces and rest on an extracellular basement membrane:
* Simple Squamous Epithelium: Extremely thin, flat tile-like cells forming a delicate permeable lining. Found in lung alveoli (gas exchange) and blood capillary endothelium.
* Stratified Squamous Epithelium: Arranged in multiple stacked layers to prevent wear and tear. Forms the outer epidermal skin layer.
* Columnar Epithelium: Tall, pillar-like cells facilitating secretion and absorption. Lines the stomach and intestinal mucosa.
* Ciliated Columnar Epithelium: Possesses rhythmic hair-like cilia on outer surfaces to sweep mucus and trapped particles forward. Lines the respiratory tract and oviducts.
* Cuboidal Epithelium: Cube-shaped cells providing mechanical strength. Lines kidney tubules and salivary gland ducts.
* Glandular Epithelium: Epithelial tissue folded inward to form specialized multicellular glands that secrete enzymes, saliva, sweat, or hormones.

### 2. Connective Tissue (Binding, Cushioning & Support)
Cells are loosely arranged and embedded within an extensive extracellular matrix:
* Blood (Fluid Connective Tissue): Fluid plasma carrying Red Blood Cells (RBCs, carry oxygen), White Blood Cells (WBCs, immune defense), and Platelets (blood clotting).
* Bone (Skeletal Tissue): Hard, rigid matrix rich in Calcium and Phosphorus compounds housing living osteocytes. Forms the skeletal framework.
* Cartilage: Elastic connective tissue with cells (chondrocytes) widely spaced in a solid protein-sugar matrix. Smoothens bone joints; found in nose tip, ear pinna, trachea rings, and larynx.
* Ligament vs Tendon:
  * Ligament: Connects Bone to Bone. Highly elastic, strong, with minimal matrix.
  * Tendon: Connects Muscle to Bone. Cord-like, tough fibrous collagen with high tensile strength and limited elasticity.
* Areolar Tissue: Loose packaging tissue between skin and muscles, around blood vessels and nerves; repairs tissue damage.
* Adipose Tissue: Fat-storing tissue under the skin and around internal organs (kidneys, heart); serves as a vital thermal insulator.

### 3. Muscular Tissue (Contractile Movement)
Elongated muscle fibers containing contractile proteins (actin and myosin) that contract and relax to generate movement:
* Striated (Skeletal) Muscle: Attached to skeleton; voluntary control. Long, cylindrical, unbranched, multinucleate with alternating dark and light cross-striations.
* Smooth (Unstriated) Muscle: Found in walls of hollow internal visceral organs (digestive gut, blood vessels, iris, bronchi). Involuntary, spindle-shaped with tapered ends, uninucleate, lacking striations.
* Cardiac Muscle: Exclusively in heart walls. Involuntary, cylindrical, branched, uninucleate with faint striations and intercalated discs. Contracts rhythmically and untiringly throughout life.

### 4. Nervous Tissue (Signal Transmission & Neural Circuits)
Specialized to receive stimuli and conduct electrical impulses across the body.
* Basic Functional Unit: The Neuron (Nerve Cell).
* Structure of a Neuron:
  1. Cell Body (Cyton): Contains the nucleus and neuroplasm.
  2. Dendrites: Branching short projections receiving incoming chemical signals.
  3. Axon: Long single fiber (up to 1 meter long) conducting nerve impulses away from the cell body toward terminal synapses.`,
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
        {
          id: "sc3q15",
          type: "mcq",
          q: "Which specific connective tissue binds two skeletal bones together at a joint?",
          options: ["Tendon", "Ligament", "Areolar tissue", "Adipose tissue"],
          correctOption: 1,
          hint: "Remember the mnemonic BLB (Bone-Ligament-Bone).",
          answer: "Ligaments are elastic connective tissues with high strength that link bones to other bones, stabilizing skeletal joints."
        },
        {
          id: "sc3q16",
          type: "mcq",
          q: "Spindle-shaped cells with pointed ends, a single central nucleus, and involuntary control characterize which tissue?",
          options: ["Skeletal striated muscle", "Smooth unstriated muscle", "Cardiac muscle", "Nervous tissue"],
          correctOption: 1,
          hint: "Found in walls of digestive organs and blood vessels.",
          answer: "Smooth muscle fibers are unstriated, spindle-shaped (fusiform), uninucleate, and contract involuntarily."
        },
        {
          id: "sc3q17",
          type: "short",
          q: "Name the long, single cytoplasmic extension of a neuron that conducts electrical impulses AWAY from the cell body.",
          answer: "Axon",
          hint: "Carries signals to synapses and terminal buttons."
        },
        {
          id: "sc3q18",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Cardiac muscle fibers do not experience fatigue throughout life.\nReason (R): Cardiac muscles are branched, uninucleate, and possess abundant mitochondria with constant rhythmic contraction.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "The heart pumps continuously without lactic acid buildup.",
          answer: "Both Assertion and Reason are true. The branched structure, intercalated electrical discs, and continuous aerobic ATP supply allow cardiac muscles to contract tirelessly without fatigue."
        },
        {
          id: "sc3q19",
          type: "mcq",
          q: "Which epithelial tissue lines the alveoli of human lungs to facilitate rapid diffusion of oxygen and carbon dioxide?",
          options: ["Stratified squamous epithelium", "Simple squamous epithelium", "Ciliated columnar epithelium", "Cuboidal epithelium"],
          correctOption: 1,
          hint: "Extremely thin, single-layered flat cells.",
          answer: "Simple squamous epithelium consists of extremely thin, delicate, flat cells that form a permeable barrier ideal for rapid respiratory gas diffusion."
        },
        {
          id: "sc3q20",
          type: "short",
          q: "Which mineral salts constitute the rigid intercellular matrix of human bone tissue?",
          answer: "Calcium and Phosphorus compounds (primarily calcium phosphate and carbonates).",
          hint: "Provides bone hardness."
        },
        {
          id: "sc3q21",
          type: "mcq",
          q: "Fat-storing cells containing large lipid globules that act as an insulator against heat loss are found in which tissue?",
          options: ["Areolar tissue", "Adipose tissue", "Cartilage", "Tendon"],
          correctOption: 1,
          hint: "Located beneath the skin and around kidneys.",
          answer: "Adipose tissue stores fats inside specialized adipocytes beneath the skin and acts as a thermal insulator preventing heat loss."
        }
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
    {
      id: "sc3e1",
      type: "short",
      q: "Name the tissue responsible for physical movement in the animal body.",
      answer: "Muscular tissue containing contractile proteins (actin and myosin).",
      hint: "Specialized cells that contract and relax."
    },
    {
      id: "sc3e2",
      type: "short",
      q: "Describe the structural features of a neuron (nerve cell) and its role.",
      answer: "A neuron consists of three main parts: (1) Cell body (cyton) containing a nucleus and cytoplasm, (2) Dendrites, which are short branched extensions receiving nerve impulses, and (3) Axon, a long single extension conducting electrical impulses away to synapses.",
      hint: "Think about the specialized cells of the nervous system."
    },
    {
      id: "sc3e3",
      type: "short",
      q: "Differentiate between tendon and ligament on the basis of their elasticity, matrix, and connection.",
      answer: "A tendon connects muscle to bone, is made of tough collagenous fibers with high tensile strength and limited elasticity, and has a moderate matrix. A ligament connects bone to bone, is highly elastic and flexible, and contains very little matrix.",
      hint: "Use the mnemonics MTB (Muscle-Tendon-Bone) and BLB (Bone-Ligament-Bone)."
    },
    {
      id: "sc3e4",
      type: "mcq",
      q: "Which element of xylem tissue is living and stores starch reserves?",
      options: ["Xylem vessels", "Tracheids", "Xylem parenchyma", "Xylem fibres"],
      correctOption: 2,
      hint: "Parenchyma cells in plants are universally living.",
      answer: "Xylem parenchyma is the only living component of xylem tissue; it stores food reserves and assists in the lateral sideways transport of water."
    },
    {
      id: "sc3e5",
      type: "short",
      q: "Why is blood considered a connective tissue despite being a liquid?",
      answer: "Blood connects all body systems by transporting nutrients, respiratory gases, hormones, and waste products. Like all connective tissues, it develops from embryonic mesoderm and consists of living cells (RBCs, WBCs, platelets) suspended within an extracellular matrix (fluid plasma).",
      hint: "Think about structural origin and physiological linkage between organs."
    },
    {
      id: "sc3e6",
      type: "mcq",
      q: "Which of the following tissues forms the inner lining of human cheek cells?",
      options: ["Stratified squamous epithelium", "Simple squamous epithelium", "Ciliated columnar epithelium", "Cuboidal epithelium"],
      correctOption: 1,
      hint: "Delicate flat layer of tile-like cells easily scraped in the NCERT lab activity.",
      answer: "The inner lining of cheek cells is made of simple squamous epithelium, which is a thin, delicate protective layer of flat cells."
    },
    {
      id: "sc3e7",
      type: "short",
      q: "What is the function of ciliated columnar epithelium in the respiratory tract?",
      answer: "The cilia beat rhythmically in coordinated waves to push mucus, trapped dust particles, and microbes upward and outward away from the lungs toward the throat.",
      hint: "Consider mechanical clearance of mucus."
    }
  ]
};

export default ch3;