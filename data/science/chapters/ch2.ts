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
          q: "Who expanded the cell theory by suggesting that all cells arise from pre-existing cells?",
          options: ["Robert Hooke", "Rudolf Virchow", "Matthias Schleiden", "Robert Brown"],
          correctOption: 1,
          hint: "Latin phrase 'Omnis cellula-e cellula' in 1855.",
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
        },
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
          q: "What happens when an animal cell is placed in a hypotonic solution?",
          options: [
            "It shrinks due to exosmosis",
            "It gains water, swells up and may burst",
            "No change in size",
            "It turns into a plant cell",
          ],
          correctOption: 1,
          hint: "Animal cells lack a rigid protective cell wall.",
        },
        {
          id: "sc2q5",
          type: "mcq",
          q: "Amoeba acquires its food through the process called:",
          options: ["Exocytosis", "Plasmolysis", "Endocytosis", "Diffusion"],
          correctOption: 2,
          hint: "Flexibility of the plasma membrane engulfs food.",
        },
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
          id: "sc2q7",
          type: "mcq",
          q: "ATP is synthesized in which part of the cell?",
          options: ["Mitochondria", "Ribosome", "Nucleolus", "Vacuole"],
          correctOption: 0,
          hint: "The powerhouse of the cell.",
        },
        {
          id: "sc2q8",
          type: "mcq",
          q: "Chromosomes are composed of:",
          options: ["DNA only", "Protein only", "DNA and Protein", "RNA and Carbohydrate"],
          correctOption: 2,
          hint: "Histone proteins spool the DNA strands.",
        },
      ],
    },
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
