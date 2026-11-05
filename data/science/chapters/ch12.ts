import type { ScienceChapter } from "../types";

const ch12: ScienceChapter = {
  n: 12,
  key: "sc12",
  title: "Diversity in Living Organisms & Five-Kingdom Taxonomy",
  short: "Biodiversity & Taxonomy",
  blurb: "Master Whittaker's five kingdoms (Monera, Protista, Fungi, Plantae, Animalia), plant divisions from Thallophyta to Angiosperms, the 10 animal phyla, and Linnaean binomial nomenclature.",
  colorScheme: "biology",
  sections: [
    {
      id: "s1",
      title: "Taxonomic Hierarchy & Whittaker's Five Kingdoms",
      realWorldScenario: {
        title: "The Supermarket Warehouse Analogy & 8.7 Million Species",
        context: "Walk into an Amazon fulfillment center containing 50 million distinct products. If books, electronics, medicines, and groceries were dumped in one gigantic heap on the floor, finding a specific tube of toothpaste would take weeks.",
        application: "Biologists face an even vaster warehouse: over 8.7 million living species on Earth! Without systematic classification, studying biology would be impossible. In 1969, Robert Whittaker designed the Five-Kingdom classification based on cellular complexity (prokaryotic vs eukaryotic), body organization (unicellular vs multicellular), mode of nutrition (autotrophic vs heterotrophic), and phylogenetic evolutionary relationships."
      },
      content: `Classification is the scientific arrangement of organisms into hierarchical groups based on their structural similarities, differences, and evolutionary ancestry:
* In 1859, Charles Darwin established in The Origin of Species that all life evolved from ancient, simpler life forms through natural selection. Hence, classification directly mirrors evolutionary history (Phylogeny).

### The Linnaean Taxonomic Hierarchy (Broadest to Most Specific):
Kingdom -> Phylum (Animals) / Division (Plants) -> Class -> Order -> Family -> Genus -> Species
* Species: The fundamental basic unit of classification. A group of organisms capable of interbreeding in nature to produce fertile, viable offspring.
* Mnemonic: King Philip Came Over For Good Soup!

### Robert Whittaker's Five-Kingdom System (1969):

#### 1. Kingdom Monera (Prokaryotic Microorganisms)
* Cell Type: Unicellular prokaryotes (lack a defined membrane-bound nucleus and membrane-bound organelles).
* Cell Wall: Present in most (made of peptidoglycan), absent in Mycoplasma.
* Nutrition: Autotrophic (photosynthetic cyanobacteria) or heterotrophic (parasitic/saprophytic bacteria).
* Examples: Escherichia coli, Streptococcus, Blue-green algae (Cyanobacteria like Anabaena, Nostoc), Mycoplasma.

#### 2. Kingdom Protista (Unicellular Eukaryotes)
* Cell Type: Unicellular eukaryotes (possess a true membrane-bound nucleus and organelles).
* Locomotion: Many use hair-like cilia (Paramecium), whip-like flagella (Euglena), or false feet / pseudopodia (Amoeba).
* Nutrition: Autotrophic (photosynthetic diatoms, Euglena) or heterotrophic (Amoeba, Paramecium).
* Examples: Amoeba, Paramecium, Euglena, Diatoms, malarial parasite Plasmodium.

#### 3. Kingdom Fungi (Achlorophyllous Heterotrophs)
* Cell Type: Multicellular eukaryotes (except unicellular Yeast).
* Cell Wall: Composed of a tough, complex structural polysaccharide called Chitin.
* Nutrition: Saprophytic — secrete digestive enzymes onto decaying organic matter and absorb dissolved nutrients. Some are parasitic (causing crop rusts and skin ringworm).
* Symbiosis (Lichens): A mutually beneficial permanent association between fungi and photosynthetic green algae / cyanobacteria. The fungus provides moisture and shelter, while the alga synthesizes food.
* Examples: Yeast (baking/brewing), Rhizopus (bread mould), Penicillium (antibiotic producer), Agaricus (edible mushroom).`,
      keyConcepts: [
        { term: "Classification", definition: "Arranging organisms into categorized groups based on shared characteristics and evolutionary relationships." },
        { term: "Taxonomic Hierarchy", definition: "The sequential ranking of taxa: Kingdom, Phylum/Division, Class, Order, Family, Genus, Species." },
        { term: "Monera", definition: "Kingdom of unicellular prokaryotes lacking membrane-bound organelles (e.g. Bacteria, Cyanobacteria)." },
        { term: "Protista", definition: "Kingdom of unicellular eukaryotes exhibiting locomotion via cilia, flagella, or pseudopodia (e.g. Amoeba, Euglena)." },
        { term: "Fungi", definition: "Kingdom of eukaryotic saprophytic organisms with chitin cell walls (e.g. Mushrooms, Moulds, Yeast)." },
        { term: "Lichen", definition: "A symbiotic mutualistic organism formed by the association of a fungus and a photosynthetic alga." },
      ],
      formulas: [],
      workedExamples: [
        {
          title: "Identifying Unknown Organism into Whittaker's Kingdoms",
          problem: "A newly discovered aquatic microscopic organism is unicellular, possesses a clear distinct nucleus under an electron microscope, contains green chloroplasts, and swims using a long whip-like flagellum. Into which Whittaker kingdom does it belong? Justify your choice.",
          steps: [
            "Step 1: Cell structure: Unicellular + possesses distinct membrane-bound nucleus -> Organism is a Unicellular Eukaryote.",
            "Step 2: Check Monera: Monera consists strictly of Prokaryotes. Because this cell has a true nucleus, it cannot be Monera.",
            "Step 3: Check Plantae: Plantae consists exclusively of Multicellular autotrophs. This organism is unicellular.",
            "Step 4: Check Protista: Protista is defined specifically as the kingdom of Unicellular Eukaryotes, many of which bear flagella and chloroplasts (like Euglena).",
            "Conclusion: The organism belongs definitively to Kingdom Protista."
          ],
          answer: "Kingdom Protista. Unicellular eukaryotes with organelles and locomotory structures belong to Protista."
        }
      ],
      activities: [
        {
          number: "7.1",
          title: "Microscopic Observation of Pond Water Protists",
          materials: ["Drop of stagnant green pond water", "Glass slide", "Coverslip", "Compound light microscope"],
          steps: [
            "Collect a water sample from the edge of a still pond or aquarium containing green scum.",
            "Place a single drop in the center of a clean glass slide and gently lower a coverslip.",
            "Scan under 10x, then switch to 40x."
          ],
          observation: "Slipper-shaped Paramecium darting rapidly using beating cilia; green spindle-shaped Euglena undulating with anterior flagella; irregular Amoeba extending creeping pseudopodia.",
          conclusion: "Pond water teems with diverse unicellular eukaryotic microorganisms belonging to Kingdom Protista."
        }
      ],
      didYouKnow: "Lichens are exceptionally sensitive bio-indicators of atmospheric pollution! They cannot tolerate sulfur dioxide gas (SO₂); if air is polluted by coal burning or vehicle smog, lichens wither and die. If you see abundant crusty lichens growing on tree trunks, the local air is exceptionally pristine!",
      examTips: [
        "Cell Wall Compositions (CBSE High-Yield): Fungi = CHITIN; Plants = CELLULOSE; Bacteria (Monera) = PEPTIDOGLYCAN.",
        "Remember: Prokaryotic = Monera ONLY. All other four kingdoms (Protista, Fungi, Plantae, Animalia) are EUKARYOTIC."
      ],
      questions: [
        {
          id: "sc12q1",
          type: "mcq",
          q: "The cell wall of fungi is composed of a tough, complex structural polysaccharide called:",
          options: ["Cellulose", "Chitin", "Pectin", "Suberin"],
          correctOption: 1,
          hint: "Also forms the hard exoskeletons of insects and crabs.",
          answer: "Fungal cell walls are made of Chitin, a tough nitrogen-containing polysaccharide, unlike plant cell walls made of cellulose."
        },
        {
          id: "sc12q2",
          type: "mcq",
          q: "Unicellular organisms that lack a membrane-bound nucleus and organelles belong to Kingdom:",
          options: ["Protista", "Fungi", "Monera", "Plantae"],
          correctOption: 2,
          hint: "Includes bacteria and cyanobacteria.",
          answer: "Kingdom Monera consists exclusively of unicellular prokaryotic organisms that lack nuclear membranes and cell organelles."
        },
        {
          id: "sc12q3",
          type: "short",
          q: "What is a Lichen, and why is it considered a sensitive bio-indicator of industrial air pollution?",
          answer: "A lichen is a symbiotic mutualistic association between a fungus and a photosynthetic green alga or cyanobacterium. Lichens are extremely sensitive to toxic sulfur dioxide (SO₂) gas and wither in polluted air, making them natural bio-indicators of pristine atmospheric quality.",
          hint: "Fungus-alga symbiosis sensitive to SO₂."
        },
        {
          id: "sc12q4",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Cyanobacteria (blue-green algae) are classified in Kingdom Monera rather than Kingdom Plantae.\nReason (R): Cyanobacteria are unicellular prokaryotes that lack membrane-bound nuclei and chloroplast organelles.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "Prokaryotic cell structure is the diagnostic criterion for Monera.",
          answer: "Both Assertion and Reason are true. Despite being photosynthetic autotrophs, their prokaryotic cellular organization places blue-green algae in Kingdom Monera."
        },
        {
          id: "sc12q5",
          type: "short",
          q: "State the four primary criteria used by Robert Whittaker in proposing the Five-Kingdom classification system.",
          answer: "1. Cellular complexity (Prokaryotic vs Eukaryotic). 2. Body organization (Unicellular vs Multicellular). 3. Mode of nutrition (Autotrophic vs Heterotrophic/Saprophytic). 4. Phylogenetic evolutionary relationships.",
          hint: "Cell type, body organization, nutrition, and phylogeny."
        },
        {
          id: "sc12q6",
          type: "mcq",
          q: "Which of the following organisms belongs to Kingdom Protista and uses hair-like cilia for locomotion?",
          options: ["Amoeba", "Euglena", "Paramecium", "Rhizopus"],
          correctOption: 2,
          hint: "Slipper-shaped animalcule with thousands of rhythmic cilia.",
          answer: "Paramecium is a unicellular ciliated eukaryote belonging to Kingdom Protista."
        },
        {
          id: "sc12q7",
          type: "short",
          q: "Arrange the taxonomic hierarchy in descending order from the broadest to the most specific unit: Family, Kingdom, Species, Class, Phylum, Order, Genus.",
          answer: "Kingdom -> Phylum (or Division) -> Class -> Order -> Family -> Genus -> Species.",
          hint: "Remember: King Philip Came Over For Good Soup."
        }
      ]
    },
    {
      id: "s2",
      title: "Kingdom Plantae: From Algae to Monocots & Dicots",
      realWorldScenario: {
        title: "The Land Conquest: Why Ferns Need Rain & Pines Conquered Snow",
        context: "In lush wet mountain ravines, delicate green mosses and ferns blanket damp rocks like green velvet. Yet hike up to sub-zero Himalayan altitudes, and you find towering Pinus and Deodar trees with thick bark and needle-like leaves flourishing amidst heavy snow.",
        application: "This mirrors 500 million years of plant evolution! Primitive Bryophytes (mosses) are the 'amphibians of the plant kingdom' — they lack vascular pipes and require liquid water for swimming sperm to fertilize eggs. Gymnosperms (pines) and Angiosperms evolved vascular xylem pipelines, enclosed seeds, and airborne pollen, allowing them to conquer dry land and freezing mountain peaks!"
      },
      content: `Kingdom Plantae consists of multicellular, eukaryotic autotrophs with cellulose cell walls. Classification is based on three hierarchical criteria:
1. Is the plant body differentiated into distinct root, stem, and leaves?
2. Does it possess specialized vascular tissue (xylem and phloem) for conducting water and nutrients?
3. Does it produce seeds, and are the seeds naked or enclosed inside fruits?

### The 5 Divisions of Kingdom Plantae:

#### 1. Division Thallophyta (Algae)
* Body Design: Simple, undifferentiated body termed a thallus (no true roots, stems, or leaves).
* Habitat: Predominantly aquatic (freshwater and marine).
* Vascular Tissue: Completely absent.
* Examples: Spirogyra (ribbon-shaped spiral chloroplasts), Ulothrix, Cladophora, Chara, Ulva.

#### 2. Division Bryophyta (Amphibians of the Plant Kingdom)
* Body Design: Body is differentiated into stem-like and leaf-like structures, anchored by hair-like root structures called rhizoids.
* Amphibious Nature: Grow on damp soil/rocks, but liquid water is mandatory for swimming flagellated male gametes to fertilize female archegonia.
* Vascular Tissue: Absent.
* Examples: Funaria (common moss), Marchantia (liverwort), Riccia.

#### 3. Division Pteridophyta (First Vascular Land Plants)
* Body Design: Differentiated into true roots, stems, and leaves.
* Vascular Tissue: Present (possess xylem and phloem pipelines).
* Reproduction: Lack flowers and seeds; reproduce via naked microscopic spores produced in clusters called sori on the underside of fronds.
* Note: Thallophytes, Bryophytes, and Pteridophytes have hidden reproductive organs and are collectively called Cryptogams (meaning hidden marriage).
* Examples: Ferns (Marsilea, Pteris, Dryopteris), Horsetails (Equisetum).

#### 4. Division Gymnosperms (Naked Seed Bearers)
* Key Characteristic: Bear naked seeds exposed on the surface of woody cone scales, NOT enclosed inside an ovary or fruit (gymnos = naked, sperma = seed).
* Habit: Perennial, evergreen, tall woody trees with xerophytic needle-like leaves to reduce transpiration.
* Examples: Pinus (pine trees yielding edible chilgoza nuts), Cycas, Cedrus (Deodar).

#### 5. Division Angiosperms (Flowering Plants)
* Key Characteristic: Seeds develop inside an ovary, which ripens into a protective Fruit (angeion = vessel/covered, sperma = seed). Highly evolved; dominate modern terrestrial vegetation.
* Subdivision Based on Cotyledons (Seed Leaves):
  * Monocotyledonous Plants (Monocots):
    * Seeds possess 1 single cotyledon.
    * Leaves show parallel venation.
    * Root system consists of fibrous roots.
    * Examples: Wheat, Rice, Maize, Grass, Bamboo, Banana, Onion.
  * Dicotyledonous Plants (Dicots):
    * Seeds possess 2 cotyledons (splits into two halves).
    * Leaves show reticulate (net-like) venation.
    * Root system consists of a deep tap root system.
    * Examples: Gram (chana), Pea, Mustard, Sunflower, Mango, Neem.`,
      keyConcepts: [
        { term: "Thallophyta", definition: "Primitive aquatic algae with an undifferentiated thallus body lacking vascular plumbing." },
        { term: "Bryophyta", definition: "Non-vascular land plants called 'amphibians of the plant kingdom' requiring water for sexual fertilization (e.g. Mosses)." },
        { term: "Pteridophyta", definition: "Seedless vascular plants with true roots, stems, and leaves that reproduce via spores (e.g. Ferns)." },
        { term: "Gymnosperms", definition: "Vascular woody plants bearing naked seeds exposed on cones without flowers or fruits (e.g. Pinus, Cycas)." },
        { term: "Angiosperms", definition: "Flowering plants whose seeds develop enclosed within a protective fruit (divided into Monocots and Dicots)." },
        { term: "Monocot vs Dicot", definition: "Monocots: 1 cotyledon, parallel venation, fibrous roots. Dicots: 2 cotyledons, reticulate venation, taproots." },
      ],
      formulas: [],
      workedExamples: [
        {
          title: "Differentiating Monocots from Dicots in the Field",
          problem: "Without uprooting a plant or damaging its flowers, how can a botanist decisively determine whether a flowering garden plant is a Monocot or a Dicot?",
          steps: [
            "Step 1: Inspect leaf venation (the arrangement of veins on the leaf blade).",
            "Observation A: If veins run strictly parallel to each other from base to tip (parallel venation), the plant is a MONOCOT (e.g., grass, maize, lily).",
            "Observation B: If veins form a webbed, branching net-like pattern (reticulate venation), the plant is a DICOT (e.g., rose, sunflower, mango).",
            "Step 2 (Corroborating feature): Floral parts in monocots typically occur in multiples of 3 (trimerous); in dicots, they occur in multiples of 4 or 5 (tetramerous/pentamerous)."
          ],
          answer: "By observing leaf venation: Parallel venation indicates a Monocot; Reticulate (net) venation indicates a Dicot."
        }
      ],
      activities: [
        {
          number: "7.2",
          title: "Comparing Soaked Gram (Dicot) and Maize (Monocot) Seeds",
          materials: ["Soaked Bengal gram (chana) seeds", "Soaked maize (corn) kernels", "Scalpel", "Hand lens"],
          steps: [
            "Peel the softened seed coat from the soaked gram seed.",
            "Gently press along the seam with fingers — observe how it cleanly splits into two fleshy halves (cotyledons) revealing the tiny embryo.",
            "Now try to split the maize seed along a seam."
          ],
          observation: "Gram seed splits cleanly into two distinct cotyledons (Dicot). Maize cannot be split into two halves because it possesses a single fused cotyledon called the scutellum (Monocot).",
          conclusion: "Seeds are fundamentally classified into Dicots and Monocots based on cotyledon count."
        }
      ],
      didYouKnow: "The world's tallest living organism is a Gymnosperm named Hyperion, a Coastal Redwood (*Sequoia sempervirens*) in California standing an astonishing 115.92 meters (380 feet) tall — taller than the Statue of Liberty!",
      examTips: [
        "Why are Bryophytes called amphibians of the plant kingdom? (High-probability 2-mark question): Because although they live on land/soil, they depend on liquid water for sexual reproduction (sperms must swim to reach egg cells).",
        "Gymnosperms vs Angiosperms: Gymnosperms have NAKED seeds without fruits; Angiosperms have COVERED seeds inside fruits."
      ],
      questions: [
        {
          id: "sc12q8",
          type: "mcq",
          q: "Which plant division is famously termed the 'amphibians of the plant kingdom'?",
          options: ["Thallophyta", "Bryophyta", "Pteridophyta", "Gymnosperms"],
          correctOption: 1,
          hint: "Requires liquid water for sperm swimming and fertilization.",
          answer: "Bryophytes (mosses and liverworts) live on land but depend strictly on an external film of water for flagellated male gametes to swim to female archegonia."
        },
        {
          id: "sc12q9",
          type: "mcq",
          q: "A plant whose leaves exhibit reticulate venation and whose root system has a prominent central taproot is classified as a:",
          options: ["Monocotyledon (Monocot)", "Dicotyledon (Dicot)", "Gymnosperm", "Bryophyte"],
          correctOption: 1,
          hint: "Seeds possess two cotyledons (e.g. pea, mustard, gram).",
          answer: "Dicots possess two cotyledons, reticulate (webbed) leaf venation, and a tap root system."
        },
        {
          id: "sc12q10",
          type: "short",
          q: "Why are gymnosperms described as having 'naked seeds'?",
          answer: "Because gymnosperm ovules and seeds develop exposed on the surfaces of cone scales without being enclosed inside an ovary wall, and they do not form fruits.",
          hint: "Seeds lack an outer fruit ovary casing."
        },
        {
          id: "sc12q11",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Pteridophytes are considered more evolutionary advanced than Bryophytes.\nReason (R): Pteridophytes possess specialized vascular tissues (xylem and phloem) for water and food conduction.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "Evolution of conducting vascular pipelines.",
          answer: "Both Assertion and Reason are true. The presence of true conducting vascular tissues (xylem and phloem) allowed pteridophytes (ferns) to conquer terrestrial habitats far more successfully than non-vascular bryophytes."
        },
        {
          id: "sc12q12",
          type: "short",
          q: "What are 'Cryptogams'? Name the three plant divisions included within this group.",
          answer: "Cryptogams are non-seed-bearing plants with hidden, inconspicuous reproductive organs that reproduce via microscopic spores. The three divisions are: (1) Thallophyta (Algae), (2) Bryophyta, and (3) Pteridophyta.",
          hint: "Plants with hidden reproductive organs."
        },
        {
          id: "sc12q13",
          type: "mcq",
          q: "Which of the following is a characteristic feature of monocotyledonous plants?",
          options: [
            "Reticulate leaf venation",
            "Single cotyledon and fibrous root system",
            "Deep central taproot",
            "Naked exposed seeds"
          ],
          correctOption: 1,
          hint: "Grains like wheat, rice, and maize.",
          answer: "Monocots have seeds with a single cotyledon, parallel leaf venation, and a fibrous root system."
        },
        {
          id: "sc12q14",
          type: "short",
          q: "Name the plant division characterized by an undifferentiated plant body called a thallus.",
          answer: "Division Thallophyta (Algae, e.g., Spirogyra, Ulothrix).",
          hint: "Aquatic algae without root/stem differentiation."
        }
      ]
    },
    {
      id: "s3",
      title: "Kingdom Animalia: From Sponges to Mammals & Binomial System",
      realWorldScenario: {
        title: "The Blue Blood of Horseshoe Crabs & The Linnaean Passport",
        context: "If you call an animal 'Dog' in English, 'Kutta' in Hindi, 'Chien' in French, and 'Hund' in German, international vaccine researchers would face utter chaos. Furthermore, did you know that the blue blood of the marine horseshoe crab contains amoebocytes so sensitive to bacterial endotoxins that every FDA-approved injectable drug and vaccine on Earth is tested with it?",
        application: "Carl Linnaeus solved global language chaos by inventing Binomial Nomenclature — giving every organism a universal two-part Latin name like Canis lupus familiaris. Classifying animals by symmetry, germ layers, coelom (body cavity), and notochords allows scientists to discover life-saving biochemicals across diverse phyla."
      },
      content: `Kingdom Animalia comprises multicellular, eukaryotic heterotrophs without cell walls.

### Major Criteria for Animal Classification:
1. Level of Organization: Cellular level (Porifera) -> Tissue level (Cnidaria) -> Organ/Organ system level (Platyhelminthes to Chordata).
2. Body Symmetry: Asymmetrical (sponges) -> Radial symmetry (starfish, hydra) -> Bilateral symmetry (left and right halves are mirror images).
3. Embryonic Germ Layers: Diploblastic (ectoderm + endoderm) vs. Triploblastic (ectoderm + mesoderm + endoderm).
4. Coelom (True Body Cavity):
   * Acoelomate: No body cavity between gut and body wall (Platyhelminthes).
   * Pseudocoelomate: False body cavity; mesoderm scattered in pouches (Nematoda).
   * Coelomate: True body cavity completely lined by mesoderm (Annelida to Chordata).
5. Notochord: A flexible rod-like support structure running along the dorsal back (present only in Phylum Chordata).

### The 10 Major Animal Phyla (NCERT Roadmap):
1. Porifera (Porous Sponges): Non-motile attached animals; cellular level; perforated with microscopic pores (ostia) leading to a central water canal system (spongocoel); hard skeleton of spicules. E.g., Sycon, Spongilla, Euplectella.
2. Coelenterata / Cnidaria: Aquatic, tissue level, radial symmetry, hollow gut; tentacles bear specialized stinging cells called cnidocytes for defense and prey capture. E.g., Hydra, Aurelia (jellyfish), Sea Anemone, Corals.
3. Platyhelminthes (Flatworms): Bilaterally symmetrical, triploblastic, acoelomate; dorso-ventrally flattened bodies; many are human intestinal parasites with hooks and suckers. E.g., Planaria (free-living), Taenia (tapeworm), Fasciola (liver fluke).
4. Nematoda (Roundworms): Bilateral, triploblastic, cylindrical bodies with pseudocoelom; notorious parasites. E.g., Ascaris (intestinal roundworm), Wuchereria bancrofti (filarial worm causing Elephantiasis - swollen leg elephantoid pathology).
5. Annelida (Segmented Worms): Bilateral, triploblastic, true coelom; conspicuous ring-like metameric body segmentation; closed circulatory system. E.g., Earthworm (Pheretima), Leech (Hirudinaria).
6. Arthropoda (Jointed Appendages - Largest Phylum!): Comprises > 80% of all animal species; bilateral, segmented; possess jointed legs, open circulatory system with hemolymph, and tough chitinous exoskeleton. E.g., Butterfly, Housefly, Mosquito, Prawn, Crab, Scorpion, Spider, Centipede.
7. Mollusca (Soft-Bodied): Soft unsegmented body covered by a calcareous shell; muscular foot for locomotion; mantle cavity with gills. E.g., Pila (apple snail), Unio (freshwater mussel), Octopus (devilfish).
8. Echinodermata (Spiny-Skinned Marine Animals): Exclusively marine; radial symmetry in adults; hard calcareous spine skeleton; unique water vascular system used for locomotion and food capture. E.g., Asterias (starfish), Sea Urchin, Sea Cucumber.
9. Protochordata: Marine animals possessing a primitive notochord during larval stages. E.g., Balanoglossus, Herdmania, Amphioxus.
10. Vertebrata (True Chordates): Notochord replaced by a cartilaginous or bony vertebral column (backbone) in adults.

### The 5 Classes of Vertebrata:
* Pisces (Fish): Aquatic; cold-blooded; streamlined body covered in scales; breathe via gills; 2-chambered heart (1 auricle, 1 ventricle). E.g., Shark (Scoliodon), Rohu, Seahorse.
* Amphibia: Dual life in water and land; cold-blooded; moist mucus gland skin; breathe via gills, lungs, or skin; 3-chambered heart (2 auricles, 1 ventricle); lay unshelled eggs in water. E.g., Frog, Toad, Salamander.
* Reptilia: Terrestrial; cold-blooded; dry skin with epidermal scales; 3-chambered heart (exception: Crocodiles possess a 4-chambered heart!); lay waterproof leathery shelled eggs on land. E.g., Lizard, Snake, Turtle, Crocodile.
* Aves (Birds): Warm-blooded; forelimbs modified into wings; body covered in feathers; pneumatic hollow bones filled with air sacs; 4-chambered heart; breathe via lungs. E.g., Crow, Pigeon, Ostrich, Peacock.
* Mammalia: Warm-blooded; possess mammary glands to nourish young with milk; skin bears hair/fur, sweat glands, and oil glands; 4-chambered heart; give birth to live young (viviparous) — exceptions: Platypus and Echidna lay eggs! E.g., Human, Blue Whale, Bat, Kangaroo, Lion.

### Binomial Nomenclature (Carolus Linnaeus)
To ensure scientific consistency worldwide, Swedish botanist Carolus Linnaeus introduced Binomial Nomenclature:
1. Every organism has a two-part scientific name:
   * First word: Genus (always capitalized).
   * Second word: Species (always lowercase).
2. Names are derived from Latin.
3. When printed, names are in Italics; when handwritten, Genus and species must be underlined separately!
* Examples: Human -> Homo sapiens; Tiger -> Panthera tigris; Mango -> Mangifera indica.`,
      keyConcepts: [
        { term: "Coelom", definition: "The true mesoderm-lined internal body cavity situated between the gut wall and body wall." },
        { term: "Arthropoda", definition: "The largest phylum of animals, characterized by jointed appendages, chitinous exoskeleton, and open circulation." },
        { term: "Notochord", definition: "A flexible, dorsal cartilaginous rod supporting the body along the nerve cord in chordate embryos." },
        { term: "Pneumatic Bones", definition: "Hollow, air-filled bones found in birds (Aves) that drastically reduce body weight for flight." },
        { term: "Binomial Nomenclature", definition: "The international Linnaean system of naming species with two Latin terms: Genus and species." },
      ],
      formulas: [],
      workedExamples: [
        {
          title: "Writing Scientific Names According to Linnaean Rules",
          problem: "A student writes the scientific name of the lion as 'panthera Leo'. Correct the errors and explain the international rules of binomial nomenclature.",
          steps: [
            "Error 1: The generic name (genus) 'panthera' starts with a lowercase letter. Rule: The genus must always begin with an UPPERCASE capital letter ('Panthera').",
            "Error 2: The specific epithet (species) 'Leo' begins with a capital letter. Rule: The species name must always begin with a LOWERCASE letter ('leo').",
            "Error 3: The name is in plain upright text without formatting. Rule: Scientific names must be italicized in print (*Panthera leo*) or underlined separately if handwritten (Panthera leo)."
          ],
          answer: "Corrected Name: *Panthera leo* (or Panthera leo underlined separately)."
        }
      ],
      activities: [
        {
          number: "7.4",
          title: "Identifying Phyla from Museum Specimen Jars",
          materials: ["Museum specimen jars: Earthworm, Starfish, Prawn, Tapeworm"],
          steps: [
            "Observe Earthworm: notice clear metameric ring-like body segments and absence of jointed legs -> Phylum Annelida.",
            "Observe Prawn: notice hard chitinous armor and jointed swimming/walking appendages -> Phylum Arthropoda.",
            "Observe Starfish: notice spiny pentaradial arms and tube feet -> Phylum Echinodermata.",
            "Observe Tapeworm: notice ribbon-like dorsoventrally flattened body with anterior scolex suckers -> Phylum Platyhelminthes."
          ],
          observation: "External anatomical features directly map organisms to their diagnostic phylum categories.",
          conclusion: "Body segmentation, appendages, and symmetry are diagnostic keys for animal classification."
        }
      ],
      didYouKnow: "Whales, dolphins, and bats are true mammals! Even though whales swim in water and bats fly in air like birds, both possess mammary glands, are warm-blooded, have 4-chambered hearts, and give birth to live calves and pups whom they nurse with milk!",
      examTips: [
        "Heart Chamber Count in Vertebrates (Guaranteed Objective Question): Fish = 2 chambers; Amphibians & Reptiles = 3 chambers (EXCEPTION: Crocodile has 4!); Birds & Mammals = 4 chambers.",
        "Egg-Laying Mammals Exception: Echidna (spiny anteater) and Duck-billed Platypus are the ONLY oviparous (egg-laying) mammals."
      ],
      questions: [
        {
          id: "sc12q15",
          type: "mcq",
          q: "Which phylum is the largest in the animal kingdom, characterized by jointed legs, an open circulatory system, and a chitinous exoskeleton?",
          options: ["Mollusca", "Arthropoda", "Annelida", "Chordata"],
          correctOption: 1,
          hint: "Includes insects, crabs, spiders, and prawns.",
          answer: "Phylum Arthropoda constitutes more than 80% of all animal species and is distinguished by jointed appendages, metameric segmentation, and a chitinous exoskeleton."
        },
        {
          id: "sc12q16",
          type: "mcq",
          q: "Which reptile possesses an exceptional 4-chambered heart unlike all other reptiles that have 3 chambers?",
          options: ["Garden lizard", "Cobra snake", "Crocodile", "Green sea turtle"],
          correctOption: 2,
          hint: "Apex amphibious predatory reptile.",
          answer: "While typical reptiles possess a 3-chambered heart with an incomplete ventricular septum, crocodiles uniquely possess a completely partitioned 4-chambered heart."
        },
        {
          id: "sc12q17",
          type: "short",
          q: "Name the two exceptional egg-laying (oviparous) mammals.",
          answer: "Duck-billed Platypus and Echidna (spiny anteater).",
          hint: "Monotremes native to Australia and New Guinea."
        },
        {
          id: "sc12q18",
          type: "mcq",
          q: "CBSE Assertion & Reason:\nAssertion (A): Bats and whales are classified as true mammals despite their flying and swimming habits.\nReason (R): Both bats and whales possess mammary glands, have hair, are warm-blooded, and have 4-chambered hearts.",
          options: [
            "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true."
          ],
          correctOption: 0,
          hint: "Diagnostic mammalian anatomical traits supersede locomotory adaptations.",
          answer: "Both Assertion and Reason are true. The fundamental criteria for class Mammalia are the presence of mammary glands, hair/fur, endothermy (warm-bloodedness), and a 4-chambered heart."
        },
        {
          id: "sc12q19",
          type: "short",
          q: "What is a 'pseudocoelom', and which animal phylum is characterized by it?",
          answer: "A pseudocoelom is a 'false' body cavity where the blastocoel is not completely lined by mesoderm; instead, the mesoderm appears as scattered pouches between the ectoderm and endoderm. It is characteristic of Phylum Nematoda (roundworms like Ascaris and Wuchereria).",
          hint: "False body cavity in roundworms."
        },
        {
          id: "sc12q20",
          type: "mcq",
          q: "The unique water vascular system used for locomotion and food capture is the diagnostic hallmark of which phylum?",
          options: ["Porifera", "Cnidaria", "Echinodermata", "Mollusca"],
          correctOption: 2,
          hint: "Spiny-skinned marine animals like starfish and sea urchins.",
          answer: "Echinoderms possess a specialized hydraulic water vascular system ending in tube feet used for locomotion, respiration, and prey capture."
        },
        {
          id: "sc12q21",
          type: "short",
          q: "State the two essential rules for writing the scientific name of an organism in binomial nomenclature.",
          answer: "(1) The first word is the Genus name (starts with a capital letter); the second word is the species name (starts with a lowercase letter). (2) When printed, the name must be italicized; when handwritten, the genus and species names must be underlined separately.",
          hint: "Genus capital, species lowercase, italicized or underlined separately."
        }
      ]
    }
  ],
  keyPoints: [
    "Classification arranges 8.7 million species into hierarchical taxa reflecting evolutionary ancestry (phylogeny).",
    "Hierarchy: Kingdom -> Phylum/Division -> Class -> Order -> Family -> Genus -> Species.",
    "Whittaker's 5 Kingdoms: Monera (prokaryotic), Protista (unicellular eukaryotic), Fungi (chitin walls, saprophytic), Plantae, Animalia.",
    "Plant Divisions: Thallophyta (algae, thallus), Bryophyta (amphibians of plants, moss), Pteridophyta (ferns, seedless vascular), Gymnosperms (naked seeds, pines), Angiosperms (flowering, fruits).",
    "Angiosperms split into Monocots (1 cotyledon, parallel veins, fibrous roots) and Dicots (2 cotyledons, reticulate veins, taproots).",
    "Animal phyla: Porifera (pores), Cnidaria (stinging cells), Platyhelminthes (flatworms, acoelomate), Nematoda (pseudocoelomate), Annelida (segmented), Arthropoda (jointed legs, largest), Mollusca (soft, shells), Echinodermata (spiny, marine).",
    "Vertebrate heart chambers: Fish (2), Amphibia/Reptiles (3; Crocodile has 4!), Aves/Mammalia (4).",
    "Binomial nomenclature (Linnaeus): Genus (capitalized) + species (lowercase), Latin, italicized."
  ],
  ncertExercises: [
    {
      id: "sc12e1",
      type: "short",
      q: "Why are plants and animals classified into two separate overarching kingdoms?",
      answer: "Plants are autotrophic (synthesize food via photosynthesis), sedentary, and possess rigid cellulose cell walls. Animals are heterotrophic (ingest organic food), actively motile, and lack cell walls.",
      hint: "Nutrition, locomotion, and cell wall differences."
    },
    {
      id: "sc12e2",
      type: "short",
      q: "Differentiate between Gymnosperms and Angiosperms based on seeds and flowers.",
      answer: "Gymnosperms bear naked seeds exposed on woody cone scales without flowers or fruits (e.g., Pinus). Angiosperms produce specialized flowers and bear seeds enclosed securely within ripened fruits (e.g., Mango, Pea).",
      hint: "Naked seeds on cones vs enclosed seeds inside fruit ovaries."
    },
    {
      id: "sc12e3",
      type: "short",
      q: "How are heart chambers distributed across the five vertebrate classes: Pisces, Amphibia, Reptilia, Aves, and Mammalia?",
      answer: "Pisces: 2 chambers (1 auricle, 1 ventricle). Amphibia: 3 chambers (2 auricles, 1 ventricle). Reptilia: 3 chambers (exception: Crocodiles have 4 chambers). Aves: 4 chambers (2 auricles, 2 ventricles). Mammalia: 4 chambers (2 auricles, 2 ventricles).",
      hint: "2, 3, 3 (croc 4), 4, 4."
    },
    {
      id: "sc12e4",
      type: "mcq",
      q: "Which organism is an example of an acoelomate, triploblastic, bilaterally symmetrical flatworm?",
      options: ["Ascaris", "Planaria", "Earthworm", "Starfish"],
      correctOption: 1,
      hint: "Free-living flatworm with high regenerative ability.",
      answer: "Planaria is a flatworm belonging to Phylum Platyhelminthes, characterized by bilateral symmetry, triploblastic tissue layers, and the complete absence of a coelom (acoelomate)."
    },
    {
      id: "sc12e5",
      type: "short",
      q: "What are pneumatic bones, and how do they benefit birds (Aves)?",
      answer: "Pneumatic bones are hollow bones containing internal air cavities and air sacs connected to the respiratory system. They drastically reduce body weight while preserving structural rigidity, providing the light skeletal framework essential for flight.",
      hint: "Hollow, air-filled bones reducing flight weight."
    },
    {
      id: "sc12e6",
      type: "mcq",
      q: "Which of the following scientific names is written completely correctly according to binomial nomenclature?",
      options: ["Mangifera Indica", "mangifera indica", "Mangifera indica", "Mangifera, indica"],
      correctOption: 2,
      hint: "Genus capitalized, species lowercase, italicized.",
      answer: "Mangifera indica is written correctly: the genus name begins with an uppercase 'M', the species with a lowercase 'i', and both are italicized without punctuation."
    },
    {
      id: "sc12e7",
      type: "short",
      q: "What is metameric segmentation, and in which phylum of worms is it prominently visible?",
      answer: "Metameric segmentation is the serial repetition of homologous body segments (metameres) both externally and internally along the longitudinal axis of an animal. It is prominently displayed in Phylum Annelida (e.g., Earthworm and Leech).",
      hint: "Ring-like repeating segments in earthworms."
    }
  ]
};

export default ch12;