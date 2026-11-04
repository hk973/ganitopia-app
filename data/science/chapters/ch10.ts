import type { ScienceChapter } from "../types";

const ch10: ScienceChapter = {
  n: 10,
  key: "sc10",
  title: "Sound: Propagation, Characteristics & Ultrasound Tech",
  short: "Sound Waves",
  blurb: "Understand sound as mechanical longitudinal waves of compressions and rarefactions, the Bell Jar vacuum proof, wave velocity equations, echo mechanics, human ear physiology, and SONAR.",
  colorScheme: "physics",
  animationType: "sound-wave",
  sections: [
    {
      id: "s1",
      title: "Production & Propagation of Sound: The Mechanical Wave",
      realWorldScenario: {
        title: "The Silent Cosmos: Why No One Can Hear You Scream in Space",
        context: "In sci-fi movies, colossal exploding spaceships rumble with thunderous acoustic explosions across the galaxy. But in reality, an astronaut standing 10 meters away from an exploding rocket would witness complete, eerie, absolute silence.",
        application: "Sound is a mechanical wave that requires a material medium (solid, liquid, or gas) consisting of vibrating particles to transmit energy. Outer space is a nearly perfect vacuum with zero matter to undergo compressions and rarefactions. Astronauts must communicate via radio waves (electromagnetic radiation), which can travel through the void of space."
      },
      content: `### How is Sound Produced?
Sound is produced when an object vibrates — executing rapid back-and-forth periodic motion.
* A vibrating tuning fork strikes adjacent air particles.
* In human speech, air exhaled from the lungs sets the **vocal cords** into vibration.
* In a guitar or sitar, plucked stretched strings vibrate.
* In a tabla or drum, a struck stretched membrane oscillates.

### Sound Propagation as Longitudinal Waves
When a vibrating tuning fork prong moves forward, it pushes and compresses the air immediately in front of it, creating a high-pressure, high-density zone termed a **Compression ($C$)**.
When the prong swings backward, it creates a region of low pressure and low density termed a **Rarefaction ($R$)**.
* As the prong continues oscillating back and forth, a continuous series of alternating compressions and rarefactions moves through the air.
* **Longitudinal Wave:** A wave in which individual particles of the medium oscillate back and forth parallel to the direction of wave propagation. Individual particles do **not** travel from source to listener; they merely transfer kinetic energy and momentum to neighboring particles!

### Sound Requires a Material Medium (The Bell Jar Experiment)
Sound cannot propagate through vacuum.
* When an electric bell is suspended inside a sealed glass bell jar connected to a vacuum pump, the ringing bell is clearly audible.
* As the vacuum pump gradually extracts the air, the sound grows progressively fainter, even though the hammer continues striking the gong.
* When the jar is completely evacuated of air, the ringing becomes totally inaudible, proving conclusively that sound needs a material medium.

### Speed of Sound Across Different Media
Sound travels fastest through solids, moderately through liquids, and slowest through gases:
$$v_{\\text{solid}} > v_{\\text{liquid}} > v_{\\text{gas}}$$
* In air at $0^\\circ\\text{C}$: $331\\text{ m/s}$; at $22^\\circ\\text{C}$: $344\\text{ m/s}$.
* In water: $\\approx 1498\\text{ m/s}$.
* In solid steel/iron: $\\approx 5960\\text{ m/s}$ (almost 18 times faster than in air!).
* Speed of sound increases with increasing temperature and higher humidity.`,
      keyConcepts: [
        { term: "Sound", definition: "A form of energy that produces the sensation of hearing in our ears, produced by vibrating bodies and propagated as mechanical waves." },
        { term: "Compression (C)", definition: "A region in a longitudinal wave where medium particles are crowded together, resulting in high density and high pressure." },
        { term: "Rarefaction (R)", definition: "A region in a longitudinal wave where medium particles are spread apart, resulting in low density and low pressure." },
        { term: "Longitudinal Wave", definition: "A wave in which the particles of the medium vibrate parallel to the direction of propagation of the wave." },
        { term: "Bell Jar Experiment", definition: "A classic laboratory demonstration proving sound requires a physical material medium and cannot travel in a vacuum." },
      ],
      formulas: [
        { label: "Speed in Air (approx)", latex: "v \\approx 344\\,\\text{m/s at } 22^\\circ\\text{C}", unit: "m/s" },
      ],
      workedExamples: [
        {
          title: "Speed of Sound in Solids vs Air",
          problem: "A boy strikes a steel rail track with a hammer. Another boy standing 1.5 km (1500 m) away along the track places his ear against the rail. (a) How long does the sound take to reach him through the steel rail (v_steel = 5000 m/s)? (b) How long through air (v_air = 340 m/s)?",
          formula: "t = \\frac{d}{v}",
          steps: [
            "Given distance d = 1500 m.",
            "Case (a) Through steel: t_steel = 1500 m / 5000 m/s = 0.30 seconds.",
            "Case (b) Through air: t_air = 1500 m / 340 m/s ≈ 4.41 seconds.",
            "Difference in arrival times = 4.41 - 0.30 = 4.11 seconds."
          ],
          answer: "(a) 0.30 s through steel track. (b) 4.41 s through air. The sound through the metal arrives over 4 seconds earlier!"
        }
      ],
      activities: [
        {
          number: "12.1",
          title: "Vibrations of a Tuning Fork in Water",
          materials: ["Tuning fork", "Rubber strike pad", "Glass beaker filled with water"],
          steps: [
            "Strike a prong of the tuning fork firmly against the rubber pad.",
            "Touch the vibrating tip gently to the surface of water in the beaker.",
            "Now dip both vibrating prongs slightly below the surface."
          ],
          observation: "Water splashes violently in fine droplets, and concentric surface ripples radiate outward.",
          conclusion: "Sound production is inherently coupled with mechanical oscillatory vibrations of the source."
        }
      ],
      didYouKnow: "Whales in the deep ocean communicate across thousands of kilometers using low-frequency sound channels in seawater, because water transmits sound over 4 times faster than air and absorbs very little low-frequency energy!",
      examTips: [
        "Frequently asked distinction: Light is a transverse electromagnetic wave (can travel through vacuum, speed 3 × 10⁸ m/s); Sound is a longitudinal mechanical wave (cannot travel through vacuum, speed ~340 m/s in air).",
        "Medium particles do NOT move from one place to another; only the disturbance (wave energy) propagates."
      ],
      questions: [
        { id: "sc10q1", type: "mcq", q: "Sound waves in air are:", options: ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Stationary light waves"], correctOption: 1, hint: "Air particles vibrate parallel to wave travel." },
        { id: "sc10q2", type: "mcq", q: "In which medium does sound travel the fastest?", options: ["Air", "Water", "Steel", "Vacuum"], correctOption: 2, hint: "Solids have the highest particle density and elasticity." },
        { id: "sc10q3", type: "short", q: "Why can't two astronauts on the Moon hear each other directly without radios?", answer: "The Moon has no atmosphere (vacuum), and sound requires a material medium to propagate.", hint: "Recall what is absent on the lunar surface." }
      ]
    },
    {
      id: "s2",
      title: "Wave Characteristics: Frequency, Wavelength, Pitch & Loudness",
      realWorldScenario: {
        title: "The Shrill Whistle vs. The Roaring Lion",
        context: "A tiny referee whistle emits an ear-piercing shrill screech that cuts through a stadium of 80,000 cheering fans, while an African lion emits a deep, guttural roar that shakes the ground.",
        application: "The whistle produces tens of thousands of sound waves every second (high frequency), giving it high pitch and high penetration. The lion's roar has a low frequency (deep bass pitch) but immense vibration amplitude, carrying immense energy and colossal loudness. Understanding wave frequency and amplitude is fundamental to acoustics, music production, and audiometry."
      },
      content: `A sound wave can be graphically represented as a pressure or density vs. distance curve:

### Key Wave Parameters:
1. **Wavelength ($\\lambda$, Lambda):**
   * The distance between two consecutive compressions ($C$) or two consecutive rarefactions ($R$).
   * SI Unit: meter ($\\text{m}$).
2. **Frequency ($\\nu$, Nu or $f$):**
   * The number of complete wave cycles (or complete oscillations) produced per unit time.
   * SI Unit: **Hertz (Hz)** ($1\\text{ Hz} = 1\\text{ oscillation per second}$).
3. **Time Period ($T$):**
   * The time taken by two consecutive compressions or rarefactions to cross a fixed point.
   $$T = \\frac{1}{\\nu} \\implies \\nu = \\frac{1}{T}$$
   * SI Unit: second ($\\text{s}$).
4. **Amplitude ($A$):**
   * The magnitude of maximum disturbance (displacement or pressure variation) from the mean equilibrium position.
   * Determines the **energy and loudness** of the sound.
5. **Wave Speed ($v$):**
   * The distance traveled by a wave per unit time:
   $$v = \\frac{\\text{Distance}}{\\text{Time}} = \\frac{\\lambda}{T} = \\nu \\cdot \\lambda$$
   $$\\mathbf{v = \\nu \\cdot \\lambda}$$

### Pitch, Loudness & Timbre (Quality)
* **Pitch (Shrillness):** Determined purely by **frequency**. A faster vibration rate produces a higher pitch. A woman's voice or violin has higher pitch than a man's voice or bass drum.
* **Loudness:** Determined by **amplitude**. Loudness is proportional to the square of amplitude ($\\text{Loudness} \\propto A^2$). If amplitude is doubled, loudness becomes 4 times greater! Measured in decibels (dB).
* **Timbre or Quality:** The characteristic that allows our ear to distinguish between two sounds having the exact same pitch and loudness (e.g., differentiating a flute note from a piano note). Determined by the shape of the wave and harmonic overtones.
* **Tone vs. Note:** A sound of single frequency is called a **tone**; a mixture of several frequencies producing a pleasant sensation is called a **note**.`,
      keyConcepts: [
        { term: "Wavelength (λ)", definition: "The linear distance between two consecutive compressions or rarefactions. SI unit: meter (m)." },
        { term: "Frequency (ν)", definition: "Number of full sound wave cycles passing a point per second. SI unit: Hertz (Hz)." },
        { term: "Amplitude (A)", definition: "The maximum displacement of medium particles from their rest position. Governs loudness." },
        { term: "Pitch", definition: "The brain's subjective perception of frequency: higher frequency corresponds to sharper, shriller pitch." },
        { term: "Loudness", definition: "A subjective sensation proportional to the square of amplitude (A²), measuring sound energy intensity." },
        { term: "Timbre (Quality)", definition: "The acoustic property that distinguishes different instruments or voices playing the same note and loudness." },
      ],
      formulas: [
        { label: "Wave Velocity Equation", latex: "v = \\nu \\cdot \\lambda", unit: "m/s", explanation: "v = speed, ν = frequency, λ = wavelength" },
        { label: "Time Period & Frequency", latex: "T = \\frac{1}{\\nu}", unit: "s", explanation: "Inverse relationship" },
        { label: "Loudness Proportionality", latex: "\\text{Loudness} \\propto A^2", explanation: "Doubling amplitude quadruples loudness" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 12.1: Calculating Wave Speed",
          problem: "A sound wave has a frequency of 2 kHz and wavelength 35 cm. How long will it take to travel 1.5 km?",
          formula: "v = \\nu \\cdot \\lambda, \\quad t = \\frac{d}{v}",
          steps: [
            "Given: Frequency ν = 2 kHz = 2000 Hz.",
            "Wavelength λ = 35 cm = 0.35 m.",
            "Step 1: Calculate wave speed v = ν * λ = 2000 * 0.35 = 700 m/s.",
            "Step 2: Distance d = 1.5 km = 1500 m.",
            "Step 3: Time taken t = d / v = 1500 / 700 ≈ 2.14 seconds."
          ],
          answer: "Time taken to travel 1.5 km = 2.14 seconds."
        },
        {
          title: "Frequency and Time Period Calculation",
          problem: "A source of sound produces 1500 compressions and rarefactions (750 full wave cycles) in 3 seconds. Find its frequency and time period.",
          formula: "\\nu = \\frac{\\text{cycles}}{t}, \\quad T = \\frac{1}{\\nu}",
          steps: [
            "Number of complete cycles = 750.",
            "Time t = 3 seconds.",
            "Frequency ν = 750 / 3 = 250 Hz.",
            "Time period T = 1 / ν = 1 / 250 = 0.004 seconds (4 ms)."
          ],
          answer: "Frequency = 250 Hz; Time Period = 0.004 s."
        }
      ],
      activities: [
        {
          number: "12.4",
          title: "Demonstrating Amplitude vs Loudness",
          materials: ["Table tennis ball", "Light thread", "Tuning fork", "Rubber mallet"],
          steps: [
            "Suspend the light table tennis ball from a stand using thread.",
            "Strike the tuning fork gently and touch it to the ball. Observe the ball's displacement and sound volume.",
            "Now strike the tuning fork with maximum force and touch it to the ball."
          ],
          observation: "Gentle strike yields a quiet sound and tiny ball deflection. Hard strike yields a loud sound and throws the ball several centimeters away.",
          conclusion: "Loudness is directly determined by the amplitude of vibration."
        }
      ],
      didYouKnow: "Opera singers can shatter fragile crystal wine glasses by singing a sustained note at the glass's exact resonant frequency, pumping mechanical energy into the glass until its vibration amplitude exceeds structural limits!",
      examTips: [
        "Formula trap: Remember to convert frequency from kHz to Hz (multiply by 1000) and wavelength from cm to m (divide by 100) before calculating v = νλ.",
        "Remember the difference: Pitch depends on FREQUENCY. Loudness depends on AMPLITUDE. Quality depends on WAVEFORM."
      ],
      questions: [
        { id: "sc10q4", type: "num", q: "A sound wave has frequency 500 Hz and speed 350 m/s. What is its wavelength in meters?", numAnswer: 0.7, tolerance: 0.02, hint: "λ = v / ν = 350 / 500." },
        { id: "sc10q5", type: "mcq", q: "If the amplitude of a sound wave is tripled, its loudness increases by a factor of:", options: ["3", "6", "9", "27"], correctOption: 2, hint: "Loudness is proportional to amplitude squared: (3)² = 9." },
        { id: "sc10q6", type: "short", q: "Which wave characteristic determines the shrillness of a sound?", answer: "Frequency (or pitch).", hint: "Vibrations per second." }
      ]
    },
    {
      id: "s3",
      title: "Reflection of Sound, Echoes, SONAR & Human Ear",
      realWorldScenario: {
        title: "Submarine Warfare & The Echolocation of Bats",
        context: "In the pitch-black ocean depths where radar and sunlight cannot penetrate, naval submarines navigate mountain trenches and track enemy vessels thousands of yards away. Similarly, tiny bats navigate dense forests in midnight darkness without crashing into branches.",
        application: "Both rely on the reflection of high-frequency ultrasound pulses! Bats emit ultrasonic squeaks (>40 kHz) and listen to reflected echoes to construct an exact 3D acoustic map of flying moths. Submarines use SONAR (Sound Navigation and Ranging) transmitters and hydrophones to calculate seabed topography and target locations using the echo formula 2d = v·t."
      },
      content: `### Laws of Reflection of Sound
Like light, sound reflects off hard solid and liquid surfaces:
1. The incident sound wave, the reflected sound wave, and the normal to the reflecting surface at the point of incidence all lie in the **same plane**.
2. The angle of incidence equals the angle of reflection ($\\angle i = \\angle r$).

### Echo Mechanics & Minimum Distance
An **echo** is the distinct repetition of sound caused by reflection from a distant obstacle.
* **Persistence of Hearing:** An auditory sensation persists in the human brain for approximately $0.1\\text{ s}$ ($1/10^\\text{th}$ of a second). To hear a distinct, separate echo, the reflected sound must reach the ear at least $0.1\\text{ s}$ after the original sound.
* **Derivation of Minimum Distance to Obstacle ($d$):**
  Let speed of sound in air at $22^\\circ\\text{C}$ be $v = 344\\text{ m/s}$.
  Total path traveled by sound (to obstacle and back): $2d = v \\cdot t$
  For minimum echo delay $t = 0.1\\text{ s}$:
  $$2d = 344 \\times 0.1 = 34.4\\text{ m} \\implies \\mathbf{d = 17.2\\text{ meters}}$$
  Therefore, to hear a distinct echo at $22^\circ\text{C}$, the reflecting surface must be at least **17.2 meters** away from the source!

### Reverberation & Architectural Acoustics
In a large empty hall, auditorium, or cinema, sound reflects repeatedly off walls, ceiling, and floor, causing sound to persist even after the source has stopped.
* **Reverberation:** The excessive persistence of sound due to multiple repeated reflections.
* Excessive reverberation makes speech muddy and unintelligible.
* **Methods to control reverberation:**
  1. Covering walls and ceilings with sound-absorbent materials (compressed acoustic fiberboard, rough plaster, perforated wood).
  2. Hanging heavy fabric draperies and curtains over doorways and walls.
  3. Installing upholstered seats with sound-absorbing cushion fabric.
  4. Constructing curved ceilings so that reflected sound is evenly distributed to all corners of the auditorium.

### Audible Range & Ultrasound Applications
* **Infrasonic Sound:** Frequencies below $20\\text{ Hz}$ (emitted by rhinoceroses, elephants, whales, and earthquake seismic waves).
* **Audible Range:** Frequencies between $20\\text{ Hz}$ and $20,000\\text{ Hz}$ ($20\\text{ kHz}$) for average humans.
* **Ultrasonic Sound (Ultrasound):** Frequencies above $20,000\\text{ Hz}$ ($20\\text{ kHz}$).
* **Key Practical Applications of Ultrasound:**
  1. **Industrial Flaw Detection:** Transmitting ultrasound through heavy metal blocks. If a hidden internal crack or void exists, ultrasound reflects back early, alerting engineers to defective steel bridge beams.
  2. **Medical Ultrasonography:** Non-invasive imaging of internal organs (liver, gallbladder, kidneys) and fetal monitoring during pregnancy.
  3. **Echocardiography (ECG):** Ultrasonic reflection mapping heart chamber motion.
  4. **SONAR (Sound Navigation and Ranging):** Measuring sea depth ($2d = v \\cdot t$) and tracking underwater icebergs or shipwrecks.

### Human Ear Anatomy
The human ear converts pressure vibrations in air into electrical nerve impulses sent to the brain:
1. **Outer Ear:** Pinna collects sound waves $\\to$ Auditory canal $\\to$ reaches the delicate **Tympanic Membrane (Eardrum)**.
2. **Middle Ear:** Three tiny bones (ossicles) named **Hammer (Malleus)**, **Anvil (Incus)**, and **Stirrup (Stapes)** amplify pressure variations by approximately 20 times.
3. **Inner Ear:** The Stirrup transmits amplified vibrations to the oval window of the fluid-filled **Cochlea**. Hair cells inside the cochlea convert fluid pressure waves into electrical signals, which travel via the **auditory nerve** to the brain's auditory cortex.`,
      keyConcepts: [
        { term: "Echo", definition: "A distinct repetition of original sound heard after reflection from an obstacle at least 17.2 m away (delay ≥ 0.1 s)." },
        { term: "Reverberation", definition: "Persistence of sound in an enclosed space caused by multiple continuous reflections." },
        { term: "Audible Range", definition: "Frequencies audible to human ears: 20 Hz to 20,000 Hz (20 kHz)." },
        { term: "Ultrasound", definition: "High-frequency sound waves above 20 kHz used in medicine, defect testing, and SONAR." },
        { term: "SONAR", definition: "Sound Navigation and Ranging. An acoustic technique using ultrasonic pulses to measure ocean depth and track submerged objects." },
        { term: "Cochlea", definition: "Spiral, snail-shaped fluid cavity in the inner ear that transduces mechanical vibrations into neural electrical impulses." },
      ],
      formulas: [
        { label: "Echo / SONAR Distance", latex: "2d = v \\cdot t \\implies d = \\frac{v \\cdot t}{2}", unit: "m", explanation: "d = one-way distance to reflector" },
        { label: "Minimum Echo Distance", latex: "d_{\\text{min}} = \\frac{v \\times 0.1}{2} = 17.2\\,\\text{m}", unit: "m at 22°C", explanation: "Persistence of hearing is 0.1 s" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 12.3: SONAR Depth Measurement",
          problem: "A submarine emits a sonar pulse, which returns from an underwater cliff in 1.02 s. If the speed of sound in salt water is 1531 m/s, how far away is the cliff?",
          formula: "2d = v \\cdot t \\implies d = \\frac{v \\cdot t}{2}",
          steps: [
            "Given: Time taken for pulse round-trip t = 1.02 s.",
            "Speed of sound in saltwater v = 1531 m/s.",
            "Total distance traveled by pulse = v * t = 1531 * 1.02 = 1561.62 m.",
            "One-way distance to cliff d = 1561.62 / 2 = 780.81 m."
          ],
          answer: "The underwater cliff is 780.81 meters away."
        },
        {
          title: "Echo from a Distant Hill",
          problem: "A hiker claps his hands near a cliff and hears an echo after 4 seconds. If the ambient temperature is such that the speed of sound is 346 m/s, calculate the distance between the hiker and the cliff.",
          formula: "d = \\frac{v \\cdot t}{2}",
          steps: [
            "Given: Round-trip echo time t = 4 s.",
            "Speed of sound v = 346 m/s.",
            "Distance d = (346 * 4) / 2 = 346 * 2 = 692 m."
          ],
          answer: "Distance to cliff = 692 meters."
        }
      ],
      activities: [
        {
          number: "12.5",
          title: "Laws of Sound Reflection with Two Cardboard Tubes",
          materials: ["Two long cardboard tubes", "Smooth clock with ticking second hand", "Smooth flat wooden board", "Cardboard partition screen"],
          steps: [
            "Position the board vertically. Place a screen perpendicular to it.",
            "Aim tube A at the board at angle i with the ticking clock at its open outer mouth.",
            "Listen through tube B on the other side of the partition, adjusting its angle until the ticking is loudest."
          ],
          observation: "The ticking sound is heard with maximum clarity and volume only when angle of reflection r equals angle of incidence i.",
          conclusion: "Sound obeys the identical laws of reflection as light rays."
        }
      ],
      didYouKnow: "Elephants can hear infrasound frequencies down to 14 Hz and feel ground vibrations through special pressure receptors in their foot pads, allowing herds to detect storm thunder and elephant calls over 10 kilometers away!",
      examTips: [
        "Don't forget to DIVIDE BY 2 in Echo/SONAR questions! The measured time t is the ROUND-TRIP time (source to target and back). Omitting the / 2 factor will double your distance and cost full marks.",
        "Remember the sequence of the 3 auditory ossicles: Hammer (Malleus) -> Anvil (Incus) -> Stirrup (Stapes)."
      ],
      questions: [
        { id: "sc10q7", type: "num", q: "A ship sends out an ultrasound that returns from the seabed and is detected after 3.42 s. If the speed of ultrasound through sea water is 1531 m/s, what is the distance of the seabed from the ship in meters?", numAnswer: 2618, tolerance: 2, hint: "d = (v * t) / 2 = (1531 * 3.42) / 2." },
        { id: "sc10q8", type: "num", q: "What is the minimum distance (in meters) of an obstacle from source to hear a clear echo in air at 22°C (speed 344 m/s)?", numAnswer: 17.2, tolerance: 0.1, hint: "d = 344 * 0.1 / 2." },
        { id: "sc10q9", type: "mcq", q: "Which part of the human ear converts pressure vibrations into electrical signals?", options: ["Pinna", "Ear drum", "Cochlea", "Auditory canal"], correctOption: 2, hint: "The fluid-filled inner ear organ." }
      ]
    }
  ],
  keyPoints: [
    "Sound is a mechanical longitudinal wave produced by vibrating bodies and requires a material medium to propagate.",
    "Composed of compressions (high density/pressure) and rarefactions (low density/pressure).",
    "Sound cannot propagate through a vacuum (proven by Bell Jar experiment).",
    "Wave velocity equation: v = ν · λ.",
    "Pitch depends on frequency; Loudness is proportional to amplitude squared; Quality/Timbre differentiates sources.",
    "Sound reflects like light (∠i = ∠r). Distinct echo requires delay ≥ 0.1 s and obstacle distance ≥ 17.2 m at 22°C.",
    "SONAR measures distance using ultrasound reflection: 2d = v · t.",
    "Audible human hearing range: 20 Hz to 20,000 Hz. Infrasound < 20 Hz; Ultrasound > 20 kHz.",
    "Middle ear bones (hammer, anvil, stirrup) amplify vibrations; inner ear cochlea converts them to electrical nerve signals."
  ],
  ncertExercises: [
    { id: "sc10e1", type: "short", q: "Explain why ceilings of concert halls are curved.", answer: "Ceilings are curved so that sound after reflection reaches all corners and seats of the concert hall evenly." },
    { id: "sc10e2", type: "num", q: "A sonar device on a submarine sends out a signal and receives an echo 5 s later. Calculate the speed of sound in water if the distance of the object from the submarine is 3625 m.", numAnswer: 1450, tolerance: 5, hint: "v = 2d / t = (2 * 3625) / 5." },
    { id: "sc10e3", type: "long", q: "Describe the structure and working of the human ear with the help of a labeled diagram." }
  ]
};

export default ch10;
