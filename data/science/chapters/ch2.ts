import type { ScienceChapter } from "../types";

const ch2: ScienceChapter = {
  n: 2,
  key: "sc2",
  title: "Cell: The Fundamental Unit of Life",
  short: "Cell",
  blurb:
    "The cell as the structural and functional unit of life, cell theory milestones, plasma membrane, osmosis, plant vs animal cells, and organelle anatomy.",
  colorScheme: "biology",
  animationType: "cell-diagram",
  sections: [
    {
      id: "s1",
      title: "Discovery of the Cell & The Cell Theory",
      content:
        "Every living organism on Earth—from microscopic single-celled bacteria to towering redwood trees and blue whales—is composed of microscopic building blocks called cells. The cell is the fundamental structural and functional unit of all living organisms. Life at its most elemental level is cellular.",
      realWorldScenario: {
        emoji: "🔬",
        title: "Hooke's 1665 Honeycomb Under Glass",
        description:
          "In 1665, British natural philosopher Robert Hooke sliced an ultra-thin sliver of bottle cork (dead oak bark) and examined it under his self-crafted primitive microscope. He was stunned to see hundreds of empty, box-like compartments separated by walls, resembling the small rooms or 'cells' of monks in a monastery.",
        connection:
          "Hooke coined the Latin term 'cellula' (little room), giving biology one of its most enduring words.",
      },
      contentBlocks: [
        "Historical Milestones in Cell Biology: 1. Robert Hooke (1665) observed dead cork cells. 2. Anton van Leeuwenhoek (1674) with an improved microscope first discovered free-living cells (bacteria and protozoa) in pond water. 3. Robert Brown (1831) discovered the Nucleus in the cell. 4. J.E. Purkinje (1839) coined the term 'Protoplasm' for the living fluid substance of the cell.",
        "The Cell Theory was formulated by two German biologists: botanist Matthias Schleiden (1838) and zoologist Theodor Schwann (1839), stating that all plants and animals are composed of cells, and the cell is the basic unit of life.",
        "Rudolf Virchow (1855) made a monumental expansion to the cell theory with his famous aphorism 'Omnis cellula-e cellula' — all cells arise from pre-existing cells through cell division.",
        "Unicellular organisms (Amoeba, Chlamydomonas, Paramecium, Bacteria) carry out all vital life processes (nutrition, respiration, excretion, reproduction) within a single solitary cell. Multicellular organisms (fungi, plants, animals) exhibit division of labour, where specialized groups of cells form tissues, organs, and organ systems.",
      ],
      keyConcepts: [
        {
          term: "Cell",
          definition: "The basic structural and functional unit of life, capable of independent existence and performing essential life processes.",
        },
        {
          term: "Cell Theory",
          definition: "1. All living organisms are composed of one or more cells. 2. The cell is the basic unit of life. 3. All cells arise from pre-existing cells (Virchow).",
        },
        {
          term: "Division of Labour",
          definition: "Different parts or organelles of a cell perform different specific functions (e.g. mitochondria generate energy, ribosomes make protein).",
        },
        {
          term: "Protoplasm",
          definition: "The living content of a cell surrounded by the plasma membrane, composed of the cytoplasm and the nucleus.",
        },
      ],
      formulas: [],
      activities: [
        {
          number: "2.1",
          title: "Preparing a Temporary Stained Mount of Onion Peel",
          materials: ["Onion bulb", "Forceps", "Watch glass", "Safranin / Iodine stain", "Glycerine", "Glass slide", "Cover slip", "Compound microscope"],
          steps: [
            "Peel off a thin transparent skin (epidermis) from the concave inner side of an onion leaf scale using forceps.",
            "Transfer immediately to a watch glass containing water to prevent folding or drying.",
            "Add 1-2 drops of dilute safranin or iodine stain solution for 2-3 minutes.",
            "Transfer peel onto a clean glass slide, add a drop of glycerine to prevent drying.",
            "Gently lower a cover slip with a needle to avoid trapping air bubbles.",
            "Observe under low power (10x) and high power (40x) compound microscope.",
          ],
          observation:
            "Neat, rectangular cells arranged brick-like with distinct dark-stained cell walls, translucent cytoplasm, and a prominent dark nucleus located near the periphery.",
          conclusion:
            "All onion cells share a similar basic rectangular architecture regardless of the size of the onion bulb.",
        },
      ],
      didYouKnow:
        "The largest isolated single cell in the world is an unfertilized ostrich egg, measuring up to 15 cm across and weighing around 1.4 kg! In the human body, the longest cell is the motor neuron (nerve cell), which can extend over 1 meter from the base of your spine down to your big toe.",
      examTips: [
        "Be ready for scientist match-the-column questions: Hooke (discovered cells 1665), Leeuwenhoek (free-living cells 1674), Brown (nucleus 1831), Schleiden & Schwann (cell theory 1838-39), Virchow (pre-existing cells 1855).",
        "Why do we use glycerine when preparing microscope slides? To prevent the biological specimen from drying out under the intense light of the microscope!",
      ],
      questions: [
        {
          id: "sc2q1",
          type: "mcq",
          q: "Who expanded the cell theory by suggesting that all cells arise from pre-existing cells ('Omnis cellula-e cellula')?",
          options: ["Robert Hooke", "Rudolf Virchow", "Matthias Schleiden", "Robert Brown"],
          correctOption: 1,
          hint: "Latin phrase 'Omnis cellula-e cellula' in 1855.",
        },
        {
          id: "sc2q1_b",
          type: "mcq",
          q: "Assertion (A): A single cell can live independently as a complete living organism in unicellular organisms like Amoeba, Paramecium, and Chlamydomonas.\nReason (R): In unicellular organisms, all basic life processes (nutrition, respiration, excretion, reproduction) are carried out inside a single solitary cell.",
          options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true"
          ],
          correctOption: 0,
          hint: "A unicellular organism has complete autonomous capability."
        },
        {
          id: "sc2q1_c",
          type: "mcq",
          q: "Which chemical stain is routinely used when mounting temporary slides of plant cells like onion peel to make the cell wall and nucleus distinct?",
          options: ["Safranin or Iodine solution", "Hydrochloric acid", "Concentrated alcohol", "Copper sulphate"],
          correctOption: 0,
          hint: "Stains cell walls pink/red or amber."
        },
        {
          id: "sc2q1_d",
          type: "mcq",
          q: "Who was the first scientist to observe living, free-moving microorganisms in pond water with an improved microscope in 1674?",
          options: ["Robert Hooke", "Anton van Leeuwenhoek", "Theodor Schwann", "Camillo Golgi"],
          correctOption: 1,
          hint: "Dutch microscopist who discovered bacteria and protozoa."
        },
        {
          id: "sc2q2",
          type: "mcq",
          q: "Which of the following organisms is NOT unicellular?",
          options: ["Amoeba", "Chlamydomonas", "Paramecium", "Spirogyra"],
          correctOption: 3,
          hint: "Spirogyra is a multicellular filamentous green algae.",
        },
        {
          id: "sc2q3",
          type: "short",
          q: "Why is a cell called the structural and functional unit of life?",
          answer:
            "It is the structural unit because every living organism is made of cells, and the functional unit because all life functions (respiration, digestion, excretion) occur at the cellular level.",
          hint: "Structural = building block; Functional = carries out life reactions."
        },
        {
          id: "sc2q1_e",
          type: "short",
          q: "Why do we add a drop of glycerine when mounting a biological specimen on a microscope slide?",
          answer: "Glycerine is added to prevent the biological specimen (e.g. onion peel or cheek cells) from drying out under the warm light of the microscope and to maintain clarity of view.",
          hint: "Prevents dehydration and cracking."
        },
        {
          id: "sc2q1_f",
          type: "mcq",
          q: "Which of the following demonstrates division of labour in human body cells?",
          options: [
            "All cells perform the exact same task",
            "Muscle cells contract to cause movement, nerve cells carry impulses, and red blood cells transport oxygen",
            "Bone cells produce digestive enzymes",
            "Skin cells carry out photosynthesis"
          ],
          correctOption: 1,
          hint: "Specialized cells perform specific distinct roles."
        }
      ],
    },
    {
      id: "s2",
      title: "Plasma Membrane, Diffusion & The Osmosis Lab",
      content:
        "The plasma membrane (cell membrane) is the flexible outermost living boundary of the cell. It is selectively permeable, allowing certain vital substances to pass in and out while strictly barring others. Transport across this membrane occurs primarily via diffusion and osmosis.",
      realWorldScenario: {
        emoji: "🍇",
        title: "The Dried Raisin & Salty Pickle Experiment",
        description:
          "Drop shriveled dried raisins into pure water overnight: they swell up plump and full. Now place fresh swollen grapes into concentrated sugar syrup: they shrivel up into wrinkled husks!",
        connection:
          "This dramatic transformation is caused by Osmosis—the spontaneous diffusion of water molecules through a selectively permeable membrane down a water concentration gradient.",
      },
      contentBlocks: [
        "The plasma membrane is composed of lipids (phospholipid bilayer) and embedded proteins. Its flexibility allows single-celled organisms like Amoeba to engulf food particles from external surroundings, a process called Endocytosis.",
        "Diffusion is the spontaneous movement of a substance from a region of high concentration to a region of low concentration. Respiratory gases (O₂ and CO₂) cross the cell membrane entirely by diffusion.",
        "Osmosis is the specialized movement of water molecules across a selectively permeable membrane from a region of higher water concentration (dilute solution) to lower water concentration (concentrated solution).",
        "Three Types of Solutions: 1. Hypotonic Solution (surrounding water concentration higher than inside cell): Cell gains water by endosmosis and swells up (plant cell develops turgor pressure). 2. Isotonic Solution (equal concentration): No net water movement; cell size stays unchanged. 3. Hypertonic Solution (surrounding water concentration lower than inside cell): Cell loses water by exosmosis and shrinks. In plant cells, this causes Plasmolysis (shrinkage of protoplasm away from cell wall).",
      ],
      keyConcepts: [
        {
          term: "Selectively Permeable Membrane",
          definition: "A membrane that permits the entry and exit of only selected substances while preventing the movement of other materials.",
        },
        {
          term: "Diffusion",
          definition: "Spontaneous passive movement of molecules from high concentration to low concentration (e.g. CO₂ exchange in lungs/cells).",
        },
        {
          term: "Osmosis",
          definition: "Diffusion of water (solvent) through a selectively permeable membrane from higher water concentration to lower water concentration.",
        },
        {
          term: "Plasmolysis",
          definition: "Shrinkage or contraction of the protoplasm away from the rigid cell wall of a living plant cell when placed in a hypertonic solution.",
        },
      ],
      formulas: [],
      activities: [
        {
          number: "2.3",
          title: "Demonstrating Osmosis in De-shelled Eggs",
          materials: ["2 Raw eggs", "Dilute Hydrochloric acid (HCl)", "Beakers", "Pure water", "Concentrated salt solution"],
          steps: [
            "Dissolve outer calcium carbonate shells of two eggs by soaking in dilute HCl for a few hours. A thin semi-permeable membrane remains intact.",
            "Place Egg A into a beaker of pure water for 5 minutes.",
            "Place Egg B into a beaker of concentrated salt (NaCl) solution for 5 minutes.",
            "Measure and record changes in egg volume.",
          ],
          observation:
            "Egg A swells up because water enters the egg by endosmosis (hypotonic medium). Egg B shrinks and wrinkles because water exits the egg into the concentrated salt water by exosmosis (hypertonic medium).",
          conclusion:
            "The egg membrane acts as a selectively permeable barrier demonstrating inward and outward osmosis.",
        },
      ],
      didYouKnow:
        "Plant cells do not burst when placed in pure water, whereas human red blood cells burst in minutes! Why? The plant cell possesses a rigid external Cell Wall made of cellulose that withstands immense internal osmotic pressure (turgor pressure), exerting an equal opposite wall pressure.",
      examTips: [
        "Hypotonic = Hypo (low solute, high water) → Cell SWELLS.",
        "Hypertonic = Hyper (high solute, low water) → Cell SHRINKS.",
        "Plasmolysis can ONLY be demonstrated in living cells. Dead cells (e.g. boiled Rheo leaves) lose membrane permeability and cannot undergo plasmolysis!",
      ],
      questions: [
        {
          id: "sc2q4",
          type: "mcq",
          q: "What happens when an animal cell (like a red blood cell) is placed in a hypotonic solution?",
          options: [
            "It shrinks due to exosmosis",
            "It gains water rapidly by endosmosis, swells up and may burst",
            "No change in size",
            "It immediately builds a cellulose wall",
          ],
          correctOption: 1,
          hint: "Animal cells lack a rigid protective cell wall to withstand turgor pressure.",
        },
        {
          id: "sc2q4_b",
          type: "mcq",
          q: "Assertion (A): Plant cells can withstand much greater dilution of surrounding hypotonic medium without bursting compared to animal cells.\nReason (R): The rigid outer cell wall of plants exerts counter wall pressure equal and opposite to internal osmotic turgor pressure.",
          options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true"
          ],
          correctOption: 0,
          hint: "Cellulose wall prevents bursting."
        },
        {
          id: "sc2q4_c",
          type: "mcq",
          q: "When shriveled dried raisins are soaked in plain water overnight, they swell up plump and full because of:",
          options: ["Endosmosis", "Exosmosis", "Active transport", "Plasmolysis"],
          correctOption: 0,
          hint: "Water enters from high water concentration outside into the raisin."
        },
        {
          id: "sc2q4_d",
          type: "mcq",
          q: "What is observed when fresh living grapes are kept submerged in concentrated sugar syrup for several hours?",
          options: [
            "Grapes swell up and burst",
            "Water exits the grape cells by exosmosis, causing them to shrink and wrinkle",
            "Sugar molecules enter and inflate the grapes",
            "No change occurs"
          ],
          correctOption: 1,
          hint: "Hypertonic external medium draws water out."
        },
        {
          id: "sc2q4_e",
          type: "mcq",
          q: "When living Rheo leaf epidermal peel is boiled in water first and then mounted in concentrated salt solution, no plasmolysis is observed. Why?",
          options: [
            "Boiling strengthens the cell wall",
            "Boiling kills the cells, destroying the selectively permeable membrane required for osmosis",
            "Salt cannot dissolve in boiled water",
            "Chloroplasts absorb all the salt"
          ],
          correctOption: 1,
          hint: "Osmosis requires living, intact selectively permeable membranes."
        },
        {
          id: "sc2q5",
          type: "mcq",
          q: "Amoeba acquires its food from external aquatic surroundings through the process called:",
          options: ["Exocytosis", "Plasmolysis", "Endocytosis (Phagocytosis)", "Simple diffusion"],
          correctOption: 2,
          hint: "Flexibility of the lipid-protein plasma membrane engulfs food particles."
        },
        {
          id: "sc2q4_f",
          type: "short",
          q: "State the primary difference between Diffusion and Osmosis.",
          answer: "Diffusion is the passive movement of any substance (gases, liquids, solutes) from high to low concentration. Osmosis is the specialized diffusion of water (solvent) across a selectively permeable membrane down a water concentration gradient.",
          hint: "Osmosis specifically requires water and a semipermeable membrane."
        }
      ],
    },
    {
      id: "s3",
      title: "Cell Organelles: The Microscopic City Inside",
      content:
        "Inside the plasma membrane lies the cytoplasm—a jelly-like fluid containing specialized membrane-bound structures called Organelles. Just like organs in our body, each organelle performs a dedicated metabolic function to keep the cell alive and healthy.",
      realWorldScenario: {
        emoji: "🏭",
        title: "The Cellular Factory Analogy",
        description:
          "Think of a cell as an ultra-modern manufacturing plant: the Nucleus is the executive headquarters holding the blueprints (DNA); Mitochondria are the power generators (producing ATP energy); Ribosomes are assembly line workers (synthesizing proteins); the Golgi Apparatus is the packaging and shipping department; and Lysosomes are the waste incinerators!",
        connection:
          "Every living cell operates as a self-sufficient miniature industrial city through sophisticated division of labour.",
      },
      contentBlocks: [
        "1. Nucleus: The command centre surrounded by a double-layered nuclear membrane with pores. Contains genetic material in chromosomes made of DNA (Deoxyribonucleic Acid) and proteins. Functional segments of DNA are called Genes.",
        "2. Endoplasmic Reticulum (ER): Vast network of membrane-bound tubes. Rough ER (RER) has ribosomes attached to its surface for protein synthesis. Smooth ER (SER) synthesizes lipids and fats, and in vertebrate liver cells, detoxifies drugs and poisons. (Membrane Biogenesis: building cell membrane using ER proteins and lipids).",
        "3. Golgi Apparatus: Discovered by Camillo Golgi. System of membrane-bound parallel flattened cisternae. Modifies, packages, and sorts materials synthesized in the ER, and produces Lysosomes.",
        "4. Lysosomes: 'Suicide Bags' / cellular digestors. Membrane-bound sacs filled with powerful digestive enzymes made by RER. When a cell gets damaged, lysosomes burst and their enzymes digest their own cell.",
        "5. Mitochondria: 'Powerhouse of the Cell'. Double membrane organelle; outer membrane porous, inner membrane deeply folded into cristae to maximize surface area for ATP (Adenosine Triphosphate, energy currency of life) generation. Remarkably, mitochondria have their own circular DNA and 70S ribosomes!",
        "6. Plastids: Present only in plant cells. Chromoplasts (coloured, e.g. Chloroplasts containing chlorophyll for photosynthesis) and Leucoplasts (colourless storage for starch, oils, proteins). Like mitochondria, plastids possess their own DNA and ribosomes.",
        "7. Vacuoles: Storage sacs for solid or liquid contents. Small/temporary in animals; huge central vacuole occupying 50-90% volume in mature plant cells, filled with cell sap imparting turgidity and rigidity.",
      ],
      keyConcepts: [
        {
          term: "Mitochondria (Powerhouse)",
          definition: "Generates cellular energy in the form of ATP molecules via cellular respiration. Contains own DNA and ribosomes.",
        },
        {
          term: "Lysosomes (Suicide Bags)",
          definition: "Enzymatic digestive sacs that break down foreign materials and worn-out cell organelles; bursts to autolyse dying cells.",
        },
        {
          term: "ATP",
          definition: "Adenosine Triphosphate — the universal chemical energy currency used by cells to drive metabolic reactions.",
        },
        {
          term: "Membrane Biogenesis",
          definition: "The process of synthesizing cell membrane lipids and proteins by the Endoplasmic Reticulum.",
        },
        {
          term: "Chloroplast (Kitchen of the Cell)",
          definition: "Green plastid containing chlorophyll and stroma; site of photosynthetic sugar synthesis in plants.",
        },
      ],
      formulas: [],
      activities: [
        {
          number: "2.5",
          title: "Examining Cheek Epithelial Cells",
          materials: ["Toothpick", "Glass slide", "Methylene blue stain", "Cover slip", "Microscope"],
          steps: [
            "Gently scrape the inner surface of your cheek using the blunt end of a clean toothpick.",
            "Smear the scrapings on a water droplet on a slide.",
            "Add a drop of methylene blue stain solution.",
            "Cover with a cover slip and examine under the microscope.",
          ],
          observation:
            "Flat, irregularly polygonal animal cells with a visible thin cell membrane, granular cytoplasm, and a centrally located dark blue circular nucleus. No cell walls or chloroplasts are present.",
          conclusion:
            "Animal cells lack rigid cell walls and large central vacuoles characteristic of plant cells.",
        },
      ],
      didYouKnow:
        "Mitochondria and Chloroplasts are so unique that biologists believe they were originally free-living primitive bacteria that were swallowed by an ancestral host cell over 1.5 billion years ago (Endosymbiotic Theory)! That is why they still carry their own independent DNA and ribosomes and can make some of their own proteins.",
      examTips: [
        "Which two organelles have their own DNA and ribosomes? Always Mitochondria and Plastids (Chloroplasts)!",
        "Why are lysosomes called 'suicide bags'? Because when cellular metabolism is disrupted or the cell is damaged, lysosomes burst and release digestive enzymes that consume the entire cell.",
      ],
      questions: [
        {
          id: "sc2q6",
          type: "mcq",
          q: "Which cell organelle plays a crucial role in detoxifying many poisons and drugs in the liver cells of vertebrates?",
          options: ["Golgi apparatus", "Lysosomes", "Smooth Endoplasmic Reticulum (SER)", "Rough Endoplasmic Reticulum (RER)"],
          correctOption: 2,
          hint: "Think about the lipid-synthesizing organelle in liver tissue.",
        },
        {
          id: "sc2q6_b",
          type: "mcq",
          q: "Assertion (A): Mitochondria and Chloroplasts are regarded as semi-autonomous cell organelles.\nReason (R): Both organelles possess their own circular DNA and 70S ribosomes, enabling them to synthesize some of their own vital proteins independently.",
          options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true"
          ],
          correctOption: 0,
          hint: "Possess independent genetic machinery (DNA + ribosomes)."
        },
        {
          id: "sc2q6_c",
          type: "mcq",
          q: "Which cell organelle is responsible for storing, modifying, and packaging proteins received from the ER into vesicles?",
          options: ["Golgi apparatus", "Vacuole", "Mitochondria", "Lysosome"],
          correctOption: 0,
          hint: "Discovered by Camillo Golgi."
        },
        {
          id: "sc2q6_d",
          type: "mcq",
          q: "What are the functional, hereditary units of DNA present in chromosomes called?",
          options: ["Centrosomes", "Ribosomes", "Genes", "Cristae"],
          correctOption: 2,
          hint: "Unit of genetic inheritance."
        },
        {
          id: "sc2q7",
          type: "mcq",
          q: "ATP (Adenosine Triphosphate), the universal energy currency of life, is synthesized in which organelle?",
          options: ["Mitochondria", "Ribosome", "Nucleolus", "Vacuole"],
          correctOption: 0,
          hint: "The powerhouse of the cell."
        },
        {
          id: "sc2q8",
          type: "mcq",
          q: "Chromosomes inside the nucleus are chemically composed of:",
          options: ["DNA only", "Protein only", "DNA and Histone Proteins", "RNA and Carbohydrate"],
          correctOption: 2,
          hint: "Histone proteins spool the DNA strands into chromatin."
        },
        {
          id: "sc2q6_e",
          type: "short",
          q: "What is membrane biogenesis? Which cell organelle is responsible for it?",
          answer: "Membrane biogenesis is the synthesis of cell membrane components (proteins and lipids). Proteins synthesized by the Rough Endoplasmic Reticulum (RER) and lipids synthesized by the Smooth Endoplasmic Reticulum (SER) are assembled to build the cell membrane.",
          hint: "Endoplasmic Reticulum builds membranes."
        },
        {
          id: "sc2q6_f",
          type: "mcq",
          q: "Which organelle is popularly called the 'Kitchen of the Plant Cell'?",
          options: ["Chloroplast", "Leucoplast", "Chromoplast", "Mitochondria"],
          correctOption: 0,
          hint: "Contains chlorophyll for photosynthesis."
        }
      ],
    },
    {
      id: "s4",
      title: "Cell Division: Mitosis, Meiosis & Plant vs. Animal Cell Architecture",
      content:
        "New cells are continuously formed in organisms in order to grow, to replace old, dead and injured cells, and to form gametes required for sexual reproduction. The process by which new cells are made is called Cell Division. There are two distinct modes of cell division: Mitosis and Meiosis.",
      realWorldScenario: {
        emoji: "🧬",
        title: "Healing a Knee Wound vs. The Origin of Sperm and Eggs",
        description:
          "When you scrape your knee, identical skin cells multiply within days to heal the scrape completely. Yet, when human gametes are formed, chromosome count must be halved from 46 down to 23 so that when sperm fuses with egg, the baby restores the normal 46 count!",
        connection:
          "Growth and healing happen through Mitosis (exact diploid copies), while sexual gamete formation occurs through Meiosis (reduction division halving chromosomes).",
      },
      contentBlocks: [
        "1. Mitosis (Equational Division): The process of cell division by which most cells divide for growth and tissue repair. Each cell (mother cell) divides to form TWO identical daughter cells. The daughter cells have the exact same number of chromosomes as the mother cell (diploid, 2n).",
        "2. Meiosis (Reductional Division): Specific cells of reproductive organs (testes/ovaries in animals, anthers/ovary in plants) divide to produce gametes (sperm, egg, pollen). In meiosis, a cell involves TWO consecutive divisions (Meiosis I and Meiosis II), producing FOUR new daughter cells. Each daughter cell has only HALF the number of chromosomes (haploid, n) of the mother cell.",
        "Significance of Meiosis: During fertilization, a haploid sperm (n = 23) fuses with a haploid ovum (n = 23) to restore the species-specific diploid chromosome number (2n = 46) in the zygote, ensuring genetic constancy across generations.",
        "Comparing Plant and Animal Cells: 1. Plant cells possess a rigid Cellulose Cell Wall; animal cells have only a plasma membrane. 2. Plant cells contain Plastids (Chloroplasts); animal cells lack plastids. 3. Plant cells have a huge central vacuole occupying 50-90% volume; animal cells have tiny, transient vacuoles. 4. Animal cells possess Centrosomes/Centrioles (which organize cell division spindle); higher plant cells lack centrioles.",
      ],
      keyConcepts: [
        {
          term: "Mitosis",
          definition: "Equational cell division producing two genetically identical diploid daughter cells for body growth, development, and tissue repair.",
        },
        {
          term: "Meiosis",
          definition: "Reductional cell division producing four genetically distinct haploid gametes with half the chromosome number for sexual reproduction.",
        },
        {
          term: "Diploid (2n)",
          definition: "A cell possessing two complete homologous sets of chromosomes (e.g. human body cells have 46 chromosomes).",
        },
        {
          term: "Haploid (n)",
          definition: "A cell possessing a single set of unpaired chromosomes (e.g. human gametes have 23 chromosomes).",
        },
        {
          term: "Cell Plate",
          definition: "The structure that forms during cytokinesis in dividing plant cells, developing into the middle lamella and new cell walls.",
        },
      ],
      formulas: [],
      activities: [
        {
          number: "2.6",
          title: "Comparative Microscopic Analysis: Onion Peel (Plant) vs Cheek Cells (Animal)",
          materials: ["Prepared slide of onion peel", "Prepared slide of human cheek cells", "Compound microscope"],
          steps: [
            "Examine the onion peel slide under high power: observe cell shape, boundaries, and vacuole.",
            "Examine the human cheek epithelial slide under high power: observe cell boundary and nucleus.",
            "Tabulate the visible structural differences between both specimens."
          ],
          observation: "Onion cells show distinct rigid cell walls, rectangular outlines, and a large central vacuole pushing the nucleus to the periphery. Cheek cells have delicate irregular boundaries, no cell wall, and a centrally placed nucleus.",
          conclusion: "Plant cells are rigid and compartmentalized by cell walls and large vacuoles, whereas animal cells are flexible without walls."
        }
      ],
      didYouKnow: "In human females, all the egg cells she will ever possess are formed through meiosis before she is even born! In human males, meiosis produces over 1,000 new sperm cells every single second of adult life.",
      examTips: [
        "Difference between Mitosis and Meiosis: Mitosis produces 2 daughter cells with SAME chromosome count (growth); Meiosis produces 4 daughter cells with HALF chromosome count (gametes).",
        "Plant vs Animal Cell: If asked to draw or differentiate, always highlight 3 pillars: (1) Cell wall in plants, (2) Plastids in plants, (3) Large central vacuole in plants."
      ],
      questions: [
        {
          id: "sc2q9_a",
          type: "mcq",
          q: "Assertion (A): Daughter cells produced during mitosis have the exact same number of chromosomes as the parent cell.\nReason (R): Mitosis is an equational division meant for somatic body growth and tissue repair.",
          options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true"
          ],
          correctOption: 0,
          hint: "Mitosis duplicates and distributes identical chromosomes."
        },
        {
          id: "sc2q9_b",
          type: "mcq",
          q: "A normal human somatic body cell contains 46 chromosomes (23 pairs). How many chromosomes will be present in a human sperm or ovum produced by meiosis?",
          options: ["46 chromosomes", "23 chromosomes", "92 chromosomes", "12 chromosomes"],
          correctOption: 1,
          hint: "Meiosis halves the chromosome count: 46 / 2 = 23."
        },
        {
          id: "sc2q9_c",
          type: "mcq",
          q: "Which of the following cellular features is found exclusively in plant cells and absent in animal cells?",
          options: ["Mitochondria", "Cellulose Cell Wall and Chloroplasts", "Plasma membrane", "Ribosomes"],
          correctOption: 1,
          hint: "Provides structural rigidity and photosynthetic capability."
        },
        {
          id: "sc2q9_d",
          type: "mcq",
          q: "How many daughter cells are produced at the completion of a single meiotic division cycle?",
          options: ["2 daughter cells", "4 daughter cells", "8 daughter cells", "1 daughter cell"],
          correctOption: 1,
          hint: "Meiosis involves two consecutive divisions (Meiosis I and II)."
        },
        {
          id: "sc2q9_e",
          type: "short",
          q: "Why is meiosis essential for organisms reproducing sexually?",
          answer: "Meiosis halves the chromosome count (from diploid 2n to haploid n) in gametes. When male and female gametes fuse during fertilization (n + n), the diploid chromosome number (2n) characteristic of the species is restored in the zygote, preventing chromosome doubling.",
          hint: "Maintains chromosome number across generations."
        },
        {
          id: "sc2q9_f",
          type: "short",
          q: "State three prominent differences between plant cells and animal cells.",
          answer: "(1) Plant cells have a rigid cellulose cell wall; animal cells lack cell walls. (2) Plant cells have plastids (chloroplasts); animal cells lack plastids. (3) Plant cells have a large central vacuole (50-90% volume); animal cells have small, transient vacuoles.",
          hint: "Mention cell wall, plastids, and vacuole size."
        }
      ]
    }
  ],
  keyPoints: [
    "Cell is the basic structural and functional unit of life.",
    "Cell theory: All living things are made of cells; cell is basic unit; all cells arise from pre-existing cells (Virchow).",
    "Plasma membrane is selectively permeable made of lipids and proteins; governs diffusion and osmosis.",
    "Plant cells have a cell wall made of cellulose, chloroplasts, and a large central vacuole.",
    "Mitochondria (powerhouse, ATP) and Plastids contain their own DNA and ribosomes.",
    "Lysosomes contain powerful digestive enzymes and are called suicide bags.",
  ],
  ncertExercises: [
    {
      id: "sc2e1",
      type: "short",
      q: "How does an Amoeba obtain its food?",
      answer:
        "Amoeba acquires its food by Endocytosis. The flexible plasma membrane forms pseudopodia (false feet) that engulf the food particle to form a food vacuole inside the cell, where enzymes digest it.",
    },
    {
      id: "sc2e2",
      type: "short",
      q: "Why are lysosomes known as suicide bags?",
      answer:
        "Lysosomes contain powerful hydrolytic digestive enzymes made by RER. When a cell gets damaged or infected, lysosomes may burst, and their enzymes digest the cell's own components, leading to autolysis.",
    },
    {
      id: "sc2e3",
      type: "short",
      q: "Where are proteins synthesized inside the cell?",
      answer:
        "Proteins are synthesized on Ribosomes, which are present free in the cytoplasm and attached to the surface of the Rough Endoplasmic Reticulum (RER).",
    },
  ],
};

export default ch2;
