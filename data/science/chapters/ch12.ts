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
      content: `Classification is the scientific arrangement of organisms into hierarchical groups based on their structural similarities, differences, and evolutionary ancestry.
* In 1859, **Charles Darwin** established in *The Origin of Species* that all life evolved from ancient, simpler life forms through natural selection. Hence, classification directly mirrors evolutionary history (**Phylogeny**).

### The Linnaean Taxonomic Hierarchy (Broadest to Most Specific):
$$\\text{Kingdom} \\to \\text{Phylum (Animals) / Division (Plants)} \\to \\text{Class} \\to \\text{Order} \\to \\text{Family} \\to \\text{Genus} \\to \\text{Species}$$
* **Species:** The fundamental basic unit of classification. A group of organisms capable of interbreeding in nature to produce fertile, viable offspring.
* **Mnemonic:** **K**ing **P**hilip **C**ame **O**ver **F**or **G**ood **S**oup!

---

### Robert Whittaker's Five-Kingdom System (1969):

#### 1. Kingdom Monera (Prokaryotic Microorganisms)
* **Cell Type:** Unicellular **prokaryotes** (lack a defined membrane-bound nucleus and membrane-bound organelles).
* **Cell Wall:** Present in most (made of peptidoglycan), absent in *Mycoplasma*.
* **Nutrition:** Autotrophic (photosynthetic cyanobacteria) or heterotrophic (parasitic/saprophytic bacteria).
* **Examples:** *Escherichia coli*, *Streptococcus*, Blue-green algae (Cyanobacteria like *Anabaena*, *Nostoc*), *Mycoplasma*.

#### 2. Kingdom Protista (Unicellular Eukaryotes)
* **Cell Type:** Unicellular **eukaryotes** (possess a true membrane-bound nucleus and organelles).
* **Locomotion:** Many use hair-like **cilia** (*Paramecium*), whip-like **flagella** (*Euglena*), or false feet / **pseudopodia** (*Amoeba*).
* **Nutrition:** Autotrophic (photosynthetic diatoms, *Euglena*) or heterotrophic (*Amoeba*, *Paramecium*).
* **Examples:** *Amoeba*, *Paramecium*, *Euglena*, Diatoms, malarial parasite *Plasmodium*.

#### 3. Kingdom Fungi (Achlorophyllous Heterotrophs)
* **Cell Type:** Multicellular eukaryotes (except unicellular *Yeast*).
* **Cell Wall:** Composed of a tough, complex structural polysaccharide called **Chitin**.
* **Nutrition:** **Saprophytic** — secrete digestive enzymes onto decaying organic matter and absorb dissolved nutrients. Some are parasitic (causing crop rusts and skin ringworm).
* **Symbiosis (Lichens):** A mutually beneficial permanent association between fungi and photosynthetic green algae / cyanobacteria. The fungus provides moisture and shelter, while the alga synthesizes food.
* **Examples:** *Yeast* (baking/brewing), *Rhizopus* (bread mould), *Penicillium* (antibiotic producer), *Agaricus* (edible mushroom).`,
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
          observation: "Slipper-shaped *Paramecium* darting rapidly using beating cilia; green spindle-shaped *Euglena* undulating with anterior flagella; irregular *Amoeba* extending creeping pseudopodia.",
          conclusion: "Pond water teems with diverse unicellular eukaryotic microorganisms belonging to Kingdom Protista."
        }
      ],
      didYouKnow: "Lichens are exceptionally sensitive bio-indicators of atmospheric pollution! They cannot tolerate sulfur dioxide gas (SO₂); if air is polluted by coal burning or vehicle smog, lichens wither and die. If you see abundant crusty lichens growing on tree trunks, the local air is exceptionally pristine!",
      examTips: [
        "Cell Wall Compositions (CBSE High-Yield): Fungi = CHITIN; Plants = CELLULOSE; Bacteria (Monera) = PEPTIDOGLYCAN.",
        "Remember: Prokaryotic = Monera ONLY. All other four kingdoms (Protista, Fungi, Plantae, Animalia) are EUKARYOTIC."
      ],
      questions: [
        { id: "sc12q1", type: "mcq", q: "The cell wall of fungi is composed of a tough complex sugar called:", options: ["Cellulose", "Chitin", "Pectin", "Suberin"], correctOption: 1, hint: "Also found in insect exoskeletons." },
        { id: "sc12q2", type: "mcq", q: "Organisms that are unicellular and prokaryotic belong to Kingdom:", options: ["Protista", "Fungi", "Monera", "Plantae"], correctOption: 2, hint: "Bacteria and cyanobacteria." },
        { id: "sc12q3", type: "short", q: "What is a Lichen?", answer: "A symbiotic mutualistic partnership between a fungus and a photosynthetic green alga or cyanobacterium.", hint: "Bio-indicator of clean air." }
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

---

### The 5 Divisions of Kingdom Plantae:

#### 1. Division Thallophyta (Algae)
* **Body Design:** Simple, undifferentiated body termed a **thallus** (no true roots, stems, or leaves).
* **Habitat:** Predominantly aquatic (freshwater and marine).
* **Vascular Tissue:** Completely absent.
* **Examples:** *Spirogyra* (ribbon-shaped spiral chloroplasts), *Ulothrix*, *Cladophora*, *Chara*, *Ulva* (sea lettuce).

#### 2. Division Bryophyta (Amphibians of the Plant Kingdom)
* **Body Design:** Body is differentiated into stem-like and leaf-like structures, anchored by hair-like root structures called **rhizoids**.
* **Amphibious Nature:** Grow on damp soil/rocks, but **liquid water is mandatory** for swimming flagellated male gametes to swim and fertilize female archegonia.
* **Vascular Tissue:** Absent.
* **Examples:** *Funaria* (common moss), *Marchantia* (liverwort), *Riccia*.

#### 3. Division Pteridophyta (First Vascular Land Plants)
* **Body Design:** Differentiated into true roots, stems, and leaves.
* **Vascular Tissue:** **Present** (possess xylem and phloem pipelines).
* **Reproduction:** Lack flowers and seeds; reproduce via naked microscopic **spores** produced in clusters called *sori* on the underside of fronds.
* *Note: Thallophytes, Bryophytes, and Pteridophytes have hidden, inconspicuous reproductive organs and are collectively called **Cryptogams** (Greek: hidden marriage).*
* **Examples:** Ferns (*Marsilea*, *Pteris*, *Dryopteris*), Horsetails (*Equisetum*).

#### 4. Division Gymnosperms (Naked Seed Bearers)
* **Key Characteristic:** Bear **naked seeds** that are exposed on the surface of cone scales, NOT enclosed inside an ovary or fruit (Greek: *gymnos* = naked, *sperma* = seed).
* **Habit:** Perennial, evergreen, tall woody trees with xerophytic needle-like leaves to reduce transpiration.
* **Examples:** *Pinus* (pine trees yielding edible chilgoza nuts), *Cycas*, *Cedrus* (Deodar).

#### 5. Division Angiosperms (Flowering Plants)
* **Key Characteristic:** Seeds develop **inside an ovary**, which ripens into a protective **Fruit** (Greek: *angeion* = covered/vessel, *sperma* = seed). Highly evolved; dominate modern terrestrial vegetation.
* **Subdivision Based on Cotyledons (Seed Leaves):**
  * **Monocotyledonous Plants (Monocots):**
    * Seeds possess **single cotyledon**.
    * Leaves show **parallel venation** (veins run parallel, e.g. grass).
    * Root system is **fibrous roots** (no primary taproot).
    * Examples: Wheat, Rice, Maize, Grass, Bamboo, Banana, Palm.
  * **Dicotyledonous Plants (Dicots):**
    * Seeds possess **two cotyledons** (can be split into two halves).
    * Leaves show **reticulate venation** (net-like branching veins).
    * Root system is a **tap root system** (deep central taproot with lateral branch roots).
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
        { id: "sc12q4", type: "mcq", q: "Which division of plants is known as the 'amphibians of the plant kingdom'?", options: ["Thallophyta", "Bryophyta", "Pteridophyta", "Gymnosperms"], correctOption: 1, hint: "Requires water for gamete motility." },
        { id: "sc12q5", type: "mcq", q: "A plant with reticulate leaf venation and a tap root system is a:", options: ["Monocot", "Dicot", "Gymnosperm", "Bryophyte"], correctOption: 1, hint: "Two cotyledons (e.g. pea, mustard)." },
        { id: "sc12q6", type: "short", q: "Name one gymnosperm and state whether its seeds are naked or covered.", answer: "Pinus (or Cycas). Its seeds are naked (not enclosed in fruit).", hint: "Conifer." }
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
1. **Level of Organization:** Cellular level (Porifera) $\\to$ Tissue level (Cnidaria) $\\to$ Organ/Organ system level (Platyhelminthes to Chordata).
2. **Body Symmetry:** Asymmetrical (sponges) $\\to$ Radial symmetry (starfish, hydra) $\\to$ Bilateral symmetry (left and right halves are mirror images).
3. **Embryonic Germ Layers:** Diploblastic (ectoderm + endoderm) vs. Triploblastic (ectoderm + mesoderm + endoderm).
4. **Coelom (True Body Cavity):**
   * **Acoelomate:** No body cavity between gut and body wall (Platyhelminthes).
   * **Pseudocoelomate:** False body cavity; mesoderm scattered in pouches (Nematoda).
   * **Coelomate:** True body cavity completely lined by mesoderm (Annelida to Chordata).
5. **Notochord:** A flexible rod-like support structure running along the dorsal back (present only in Phylum Chordata).

---

### The 10 Major Animal Phyla (NCERT Roadmap):
1. **Porifera (Porous Sponges):** Non-motile attached animals; cellular level; perforated with microscopic pores (**ostia**) leading to a central water canal system (**spongocoel**); hard skeleton of spicules. E.g., *Sycon*, *Spongilla*, *Euplectella*.
2. **Coelenterata / Cnidaria:** Aquatic, tissue level, radial symmetry, hollow gut (coelenteron); tentacles bear specialized stinging cells called **cnidocytes** for defense and prey capture. E.g., *Hydra*, *Aurelia* (jellyfish), Sea Anemone, Corals.
3. **Platyhelminthes (Flatworms):** Bilaterally symmetrical, triploblastic, **acoelomate**; dorso-ventrally flattened bodies; many are human intestinal parasites with hooks and suckers. E.g., *Planaria* (free-living), *Taenia* (tapeworm), *Fasciola* (liver fluke).
4. **Nematoda (Roundworms):** Bilateral, triploblastic, cylindrical bodies with **pseudocoelom**; notorious parasites. E.g., *Ascaris* (intestinal roundworm), *Wuchereria bancrofti* (filarial worm causing Elephantiasis - swollen leg elephantoid pathology).
5. **Annelida (Segmented Worms):** Bilateral, triploblastic, **true coelom**; conspicuous ring-like **metameric body segmentation**; closed circulatory system. E.g., Earthworm (*Pheretima*), Leech (*Hirudinaria*).
6. **Arthropoda (Jointed Appendages - Largest Phylum!):** Comprises $> 80\\%$ of all animal species; bilateral, segmented; possess **jointed legs**, open circulatory system with hemolymph, and tough chitinous exoskeleton. E.g., Butterfly, Housefly, Mosquito, Prawn, Crab, Scorpion, Spider, Centipede.
7. **Mollusca (Soft-Bodied):** Soft unsegmented body covered by a calcareous shell; muscular foot for locomotion; mantle cavity with gills. E.g., *Pila* (apple snail), *Unio* (freshwater mussel), *Octopus* (devilfish).
8. **Echinodermata (Spiny-Skinned Marine Animals):** Exclusively marine; radial symmetry in adults; hard calcareous spine skeleton; unique **water vascular system** used for locomotion and food capture. E.g., *Asterias* (starfish), Sea Urchin, Sea Cucumber.
9. **Protochordata:** Marine animals possessing a primitive notochord during larval stages. E.g., *Balanoglossus*, *Herdmania*, *Amphioxus*.
10. **Vertebrata (True Chordates):** Notochord replaced by a cartilaginous or bony **vertebral column (backbone)** in adults.

---

### The 5 Classes of Vertebrata:
* **Pisces (Fish):** Aquatic; cold-blooded; streamlined body covered in scales; breathe via gills; **2-chambered heart** (1 auricle, 1 ventricle). E.g., Shark (*Scoliodon*), Rohu, Seahorse.
* **Amphibia:** Dual life in water and land; cold-blooded; moist mucus gland skin; breathe via gills, lungs, or skin; **3-chambered heart** (2 auricles, 1 ventricle); lay unshelled eggs in water. E.g., Frog, Toad, Salamander.
* **Reptilia:** Terrestrial; cold-blooded; dry skin with epidermal scales; **3-chambered heart (exception: Crocodiles possess a 4-chambered heart!)**; lay waterproof leathery shelled eggs on land. E.g., Lizard, Snake, Turtle, Crocodile.
* **Aves (Birds):** Warm-blooded; forelimbs modified into **wings**; body covered in feathers; pneumatic hollow bones filled with air sacs; **4-chambered heart**; breathe via lungs. E.g., Crow, Pigeon, Ostrich, Peacock.
* **Mammalia:** Warm-blooded; possess **mammary glands** to nourish young with milk; skin bears **hair/fur**, sweat glands, and oil glands; **4-chambered heart**; give birth to live young (viviparous) — **exceptions: Platypus and Echidna lay eggs!** E.g., Human, Blue Whale, Bat, Kangaroo, Lion.

---

### Binomial Nomenclature (Carolus Linnaeus)
To ensure scientific consistency worldwide, Swedish botanist Carolus Linnaeus introduced **Binomial Nomenclature**:
1. Every organism has a two-part scientific name:
   * First word: **Genus** (always capitalized).
   * Second word: **Species** (always lowercase).
2. Names are derived from Latin.
3. When printed, names are in *Italics*; when handwritten, Genus and species must be **underlined separately**!
* Examples: Human $\\to$ *Homo sapiens*; Tiger $\\to$ *Panthera tigris*; Mango $\\to$ *Mangifera indica*.`,
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
        { id: "sc12q7", type: "mcq", q: "The largest phylum in the animal kingdom with jointed appendages is:", options: ["Mollusca", "Arthropoda", "Annelida", "Chordata"], correctOption: 1, hint: "Includes insects, crabs, and spiders." },
        { id: "sc12q8", type: "mcq", q: "Which reptile possesses a 4-chambered heart instead of the typical 3-chambered heart?", options: ["Lizard", "Snake", "Crocodile", "Tortoise"], correctOption: 2, hint: "Apex river predator." },
        { id: "sc12q9", type: "short", q: "State the two egg-laying mammals.", answer: "Duck-billed Platypus and Echidna (spiny anteater).", hint: "Mammals that lay eggs." }
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
    { id: "sc12e1", type: "short", q: "Why are plants and animals put into different categories?", answer: "Plants are autotrophic, non-motile, and have rigid cellulose cell walls; animals are heterotrophic, motile, and lack cell walls." },
    { id: "sc12e2", type: "short", q: "What is the difference between gymnosperms and angiosperms?", answer: "Gymnosperms bear naked seeds on cones without fruits; angiosperms produce flowers and bear seeds enclosed inside fruits." },
    { id: "sc12e3", type: "long", q: "Explain the basis for grouping organisms into the five kingdoms proposed by Robert Whittaker." }
  ]
};

export default ch12;
