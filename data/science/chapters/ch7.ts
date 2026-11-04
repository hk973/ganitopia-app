import type { ScienceChapter } from "../types";

const ch7: ScienceChapter = {
  n: 7,
  key: "sc7",
  title: "Work, Energy, and Power",
  short: "Work and Energy",
  blurb: "Master the scientific definition of work, kinetic and potential energy conversions, conservation of mechanical energy in free fall, electrical power, and commercial energy billing.",
  colorScheme: "physics",
  sections: [
    {
      id: "s1",
      title: "Scientific Concept of Work: Positive, Negative & Zero Work",
      realWorldScenario: {
        title: "The Exhausted Student vs. The Railway Coolie Paradox",
        context: "A student spends 6 hours studying vigorously for exams, pushing against a brick wall until drenched in sweat. Meanwhile, a railway coolie (porter) carries a heavy 40 kg trunk on his head while walking horizontally 100 meters along a railway platform. In daily language, both worked hard.",
        application: "In physics, neither did any work! The student exerted force against the wall, but displacement was zero (W = F · 0 = 0). The coolie exerted an upward supporting force against gravity, but his displacement was horizontal (angle θ = 90°), making W = F · s · cos 90° = 0! Scientific work requires an actual displacement with a component along the line of action of the force."
      },
      content: `In everyday parlance, 'work' refers to any physical or mental exertion. In scientific physics, however, work has an exact, quantitative mathematical definition.

### The Two Mandatory Conditions for Work to be Done:
1. A force must act on the object ($F \\neq 0$).
2. The object must be displaced from its position ($s \\neq 0$).
3. The displacement must **not** be perpendicular to the direction of the force ($\\theta \\neq 90^\\circ$).

### Mathematical Formulation
When a constant force $F$ acts on an object causing displacement $s$ in the direction of the force:
$$W = F \\cdot s$$
If the force acts at an angle $\\theta$ to the direction of displacement:
$$W = F \\cdot s \\cdot \\cos\\theta$$

### SI Unit of Work: The Joule (J)
* Work is a scalar quantity (it has magnitude but no direction).
* $1\\text{ Joule} = 1\\text{ Newton} \\times 1\\text{ meter} = 1\\text{ N}\\cdot\\text{m}$.
* **Definition of 1 Joule:** One Joule is the amount of work done when a force of 1 Newton displaces an object by 1 meter in the direction of the force.

### The Three Types of Work:
* **Positive Work ($0^\\circ \\le \\theta < 90^\\circ$):** When force and displacement are in the same direction ($\theta = 0^\circ \implies W = +F \\cdot s$). Example: A horse pulling a cart forward; gravity acting on a freely falling stone.
* **Negative Work ($90^\\circ < \\theta \\le 180^\\circ$):** When the force opposes the direction of displacement ($\theta = 180^\circ \implies W = -F \\cdot s$). Example: The work done by friction when a sliding box slows down; the work done by gravity when an object is thrown vertically upward.
* **Zero Work ($\theta = 90^\\circ$ or $s = 0$):**
  1. When displacement is zero ($s = 0$): Pushing against a stationary wall.
  2. When force is perpendicular to displacement ($\theta = 90^\circ$): The gravitational force on the Earth by the Sun in an almost circular orbit does zero work! A satellite in circular orbit around Earth does zero orbital work.`,
      keyConcepts: [
        { term: "Work (W)", definition: "The product of the magnitude of force and the displacement in the direction of force: W = F · s. SI unit: Joule (J)." },
        { term: "1 Joule (J)", definition: "The work done on an object when a force of 1 N displaces it by 1 m in the direction of the force." },
        { term: "Positive Work", definition: "Work done when force and displacement are in the same direction (θ = 0°)." },
        { term: "Negative Work", definition: "Work done when force and displacement are in opposite directions (θ = 180°), such as work done by friction." },
        { term: "Zero Work", definition: "Work done when displacement is zero or force is perpendicular to displacement (θ = 90°)." },
      ],
      formulas: [
        { label: "Work Done", latex: "W = F \\cdot s \\cdot \\cos\\theta", unit: "J (Joule)", explanation: "Scalar product of force and displacement" },
        { label: "Work against Gravity", latex: "W = m \\cdot g \\cdot h", unit: "J (Joule)", explanation: "Work required to lift mass m to height h" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 11.1: Work Done by a Force",
          problem: "A force of 7 N acts on an object. The displacement is, say, 8 m, in the direction of the force. Let us take it that the force acts on the object through the displacement. What is the work done in this case?",
          formula: "W = F \\cdot s",
          steps: [
            "Given: Applied force F = 7 N.",
            "Displacement s = 8 m (in the direction of force, θ = 0°).",
            "W = F * s = 7 N * 8 m = 56 N·m = 56 J."
          ],
          answer: "Work done = 56 J."
        },
        {
          title: "NCERT Example 11.2: Porter Lifting Luggage",
          problem: "A porter lifts a luggage of 15 kg from the ground and puts it on his head 1.5 m above the ground. Calculate the work done by him on the luggage. (Take g = 10 m/s²)",
          formula: "W = F \\cdot s = m \\cdot g \\cdot h",
          steps: [
            "Given: Mass of luggage m = 15 kg.",
            "Displacement h = 1.5 m.",
            "Acceleration due to gravity g = 10 m/s².",
            "Force required to lift luggage F = mg = 15 kg * 10 m/s² = 150 N.",
            "Work done W = F * h = 150 N * 1.5 m = 225 J."
          ],
          answer: "Work done on luggage = 225 J."
        },
        {
          title: "Work Done by Retarding Frictional Force",
          problem: "A car of mass 1000 kg skids to a halt over a distance of 20 m on a rough road. The friction force acting on the car is 4000 N. Calculate the work done by friction on the car.",
          formula: "W = F \\cdot s \\cdot \\cos(180^\\circ) = -F \\cdot s",
          steps: [
            "Given: Friction force F = 4000 N.",
            "Displacement s = 20 m forward.",
            "Direction of friction is exactly opposite to displacement (θ = 180°).",
            "W = 4000 N * 20 m * cos(180°) = 4000 * 20 * (-1) = -80,000 J = -80 kJ."
          ],
          answer: "Work done by friction = -80,000 J (-80 kJ). The negative sign indicates kinetic energy is being dissipated as heat."
        }
      ],
      activities: [
        {
          number: "11.1",
          title: "Identifying Scientific Work in Everyday Life",
          materials: ["Notebook", "Pen"],
          steps: [
            "Observe 5 daily situations: (1) pulling a wheeled cart, (2) holding a heavy suitcase stationary at a bus stop, (3) climbing stairs, (4) pushing against a concrete pillar, (5) a leaf falling from a tree.",
            "For each situation, identify whether (a) a force acts, (b) displacement occurs, and (c) work is positive, negative, or zero."
          ],
          observation: "Holding a suitcase stationary involves force but zero displacement (W = 0). Climbing stairs has upward force and upward displacement (W > 0).",
          conclusion: "Physical tiredness does not equal scientific work done. Displacement along the direction of force is essential for scientific work."
        }
      ],
      didYouKnow: "When the International Space Station orbits Earth at 27,600 km/h, Earth's gravity acts as a centripetal force pulling it inward. Because gravity is always strictly perpendicular to the station's instantaneous orbital velocity (θ = 90°), Earth's gravity does exactly 0 Joules of work on the ISS!",
      examTips: [
        "Board Exam Trap: If a problem says 'a man carries 20 kg on his head and walks horizontally 50 m', the work done by gravity or by his lifting force is ZERO! (Displacement is perpendicular to the vertical force). However, if he walks UP stairs, work done is positive (mgh).",
        "Always write the unit 'J' or 'Joule'. Missing units costs easy marks."
      ],
      questions: [
        { id: "sc7q1", type: "num", q: "A pair of bullocks exerts a force of 140 N on a plough. The field being ploughed is 15 m long. How much work is done in ploughing the length of the field (in Joules)?", numAnswer: 2100, hint: "W = F * s = 140 * 15." },
        { id: "sc7q2", type: "mcq", q: "Work done by a centripetal force on an object moving in a circle is always:", options: ["Positive", "Negative", "Zero", "Infinite"], correctOption: 2, hint: "Centripetal force is perpendicular to velocity at every point (cos 90° = 0)." },
        { id: "sc7q3", type: "short", q: "When is the work done by a force said to be negative?", answer: "When the force acts in the direction opposite to the direction of displacement (angle θ = 180°), such as friction.", hint: "Recall the angle between force and displacement vectors." }
      ]
    },
    {
      id: "s2",
      title: "Energy Forms: Kinetic, Potential & Conservation Laws",
      realWorldScenario: {
        title: "The Physics of Rollercoasters & Hydroelectric Dams",
        context: "At the peak of a 60-meter rollercoaster climb, the train momentarily crawls to a standstill before plunging at breakneck speed. Similarly, behind the massive concrete wall of the Bhakra Nangal Dam, millions of liters of reservoir water sit motionless.",
        application: "At the top of the coaster, hundreds of kilojoules of work done against gravity are stored as Gravitational Potential Energy (mgh). As the train plunges, PE converts seamlessly into Kinetic Energy (½mv²), unleashing thrilling velocities of over 120 km/h. At the bottom, PE is minimal, and KE is maximal. In dams, falling water converts potential energy into kinetic energy to spin giant electricity-generating turbine coils."
      },
      content: `Energy is the quantitative property of a system that can do work. A body having capacity to do work possesses energy. Energy is a scalar quantity, and its SI unit is the **Joule (J)**, identical to work.

### Kinetic Energy ($E_k$ or $KE$)
The kinetic energy of an object is the energy possessed by virtue of its motion. Any moving object (a speeding bullet, flowing wind, orbiting planet) possesses kinetic energy.

#### Derivation of the Kinetic Energy Formula:
Consider an object of mass $m$ initially moving with velocity $u$. A constant retarding/accelerating force $F$ acts on it, displacing it through distance $s$, changing its velocity to $v$.
The work done by the force is:
$$W = F \\cdot s$$
By Newton's Second Law: $F = m \\cdot a$.
From the third equation of motion: $v^2 - u^2 = 2as \\implies s = \\frac{v^2 - u^2}{2a}$.
Substituting $F$ and $s$ into the work formula:
$$W = (m \\cdot a) \\cdot \\left(\\frac{v^2 - u^2}{2a}\\right) = \\frac{1}{2} m (v^2 - u^2)$$
If the object starts from rest ($u = 0$):
$$\\mathbf{E_k = \\frac{1}{2} m v^2}$$
**Work-Energy Theorem:** The net work done on an object equals the change in its kinetic energy:
$$W_{\\text{net}} = \\Delta E_k = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2$$

### Gravitational Potential Energy ($E_p$ or $PE$)
Potential energy is the energy possessed by an object by virtue of its position, height, or configuration (strain).
* **Gravitational Potential Energy:** When an object of mass $m$ is raised vertically through height $h$, work must be done against gravity.
$$\\text{Force needed to lift} = mg$$
$$W = \\text{Force} \\times \\text{Displacement} = mg \\times h$$
$$\\mathbf{E_p = m \\cdot g \\cdot h}$$
* Note: Gravitational PE depends only on the vertical height difference between initial and final levels, **not** on the path taken!

### Law of Conservation of Energy
> **Statement:** Energy can neither be created nor destroyed; it can only be transformed from one form into another. The total energy of an isolated system remains constant.

#### Proof of Mechanical Energy Conservation for a Freely Falling Body:
Let a body of mass $m$ be dropped from height $H$ above the ground ($u = 0$).
* **At point A (Top, height $H$):**
  $$E_k = 0, \\quad E_p = mgH \\implies E_{\\text{total}} = mgH$$
* **At point B (Fallen distance $x$, height $H - x$):**
  Velocity squared: $v^2 = u^2 + 2gx = 2gx$.
  $$E_k = \\frac{1}{2} m (2gx) = mgx$$
  $$E_p = mg(H - x) = mgH - mgx$$
  $$E_{\\text{total}} = E_k + E_p = mgx + mgH - mgx = mgH$$
* **At point C (Just hitting ground, height $0$):**
  Velocity squared: $v^2 = 2gH$.
  $$E_k = \\frac{1}{2} m (2gH) = mgH, \\quad E_p = 0 \\implies E_{\\text{total}} = mgH$$
Hence, at every single point along the fall, $E_k + E_p = mgH = \\text{Constant}$!`,
      keyConcepts: [
        { term: "Kinetic Energy (KE)", definition: "Energy possessed by a body due to its motion: KE = ½mv². Proportional to mass and velocity squared." },
        { term: "Gravitational Potential Energy (PE)", definition: "Energy stored in an object due to its vertical position above a reference level: PE = mgh." },
        { term: "Work-Energy Theorem", definition: "The work done by the net force acting on an object equals the change in its kinetic energy: W = ΔKE." },
        { term: "Law of Conservation of Energy", definition: "Total energy remains constant; mechanical energy (KE + PE) is conserved in the absence of non-conservative forces." },
      ],
      formulas: [
        { label: "Kinetic Energy", latex: "E_k = \\frac{1}{2} m v^2", unit: "J (Joule)", explanation: "m in kg, v in m/s" },
        { label: "Potential Energy", latex: "E_p = m \\cdot g \\cdot h", unit: "J (Joule)", explanation: "h is vertical elevation" },
        { label: "Conservation of Mechanical Energy", latex: "E_k + E_p = \\text{constant}", unit: "J (Joule)", explanation: "For conservative gravitational systems" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 11.3: Calculating Kinetic Energy",
          problem: "An object of mass 15 kg is moving with a uniform velocity of 4 m/s. What is the kinetic energy possessed by the object?",
          formula: "E_k = \\frac{1}{2} m v^2",
          steps: [
            "Given: Mass m = 15 kg, velocity v = 4 m/s.",
            "E_k = 0.5 * 15 kg * (4 m/s)²",
            "E_k = 0.5 * 15 * 16 = 15 * 8 = 120 J."
          ],
          answer: "Kinetic energy = 120 J."
        },
        {
          title: "NCERT Example 11.4: Work Done to Accelerate a Car",
          problem: "What is the work to be done to increase the velocity of a car from 30 km/h to 60 km/h if the mass of the car is 1500 kg?",
          formula: "W = \\Delta E_k = \\frac{1}{2} m (v^2 - u^2)",
          steps: [
            "Step 1: Convert velocities to m/s: u = 30 * (5/18) = 25/3 m/s ≈ 8.33 m/s.",
            "Final velocity v = 60 * (5/18) = 50/3 m/s ≈ 16.67 m/s.",
            "Step 2: Calculate initial kinetic energy: KE_initial = 0.5 * 1500 * (25/3)² = 750 * (625 / 9) = 52,083.33 J.",
            "Step 3: Calculate final kinetic energy: KE_final = 0.5 * 1500 * (50/3)² = 750 * (2500 / 9) = 208,333.33 J.",
            "Step 4: Work done = KE_final - KE_initial = 208,333.33 - 52,083.33 = 156,250 J (156.25 kJ)."
          ],
          answer: "Work done = 156,250 J (156.25 kJ)."
        },
        {
          title: "NCERT Example 11.5: Potential Energy Calculation",
          problem: "Find the energy possessed by an object of mass 10 kg when it is at a height of 6 m above the ground. Given g = 9.8 m/s².",
          formula: "E_p = m \\cdot g \\cdot h",
          steps: [
            "Given: mass m = 10 kg, height h = 6 m, g = 9.8 m/s².",
            "E_p = 10 * 9.8 * 6 = 588 J."
          ],
          answer: "Potential energy = 588 J."
        }
      ],
      activities: [
        {
          number: "11.5",
          title: "Energy Conservation in an Oscillating Pendulum",
          materials: ["Heavy bob/metal sphere", "1.5 m light cotton string", "Rigid clamp stand"],
          steps: [
            "Suspend the bob to create a simple pendulum.",
            "Pull the bob to one side to point A (elevating it by height h) and release it gently from rest.",
            "Observe the bob passing through the lowest equilibrium point B and swinging up to point C on the opposite side."
          ],
          observation: "At extreme points A and C, velocity is zero, and energy is purely potential (mgh). At lowest point B, height is zero, and potential energy has fully converted into maximum kinetic energy (½mv²). The bob rises to almost the exact same height on both sides.",
          conclusion: "Mechanical energy continuously oscillates between potential and kinetic forms, conserving total mechanical energy (E = KE + PE = constant)."
        }
      ],
      didYouKnow: "When a meteor strikes Earth at 40 km/s, its kinetic energy is so colossal that ½mv² exceeds the explosive energy of an equivalent mass of TNT by over 200 times! The kinetic energy flash instantly vaporizes rock on impact.",
      examTips: [
        "Velocity is SQUARED in Kinetic Energy! If a car's speed doubles (2x), its kinetic energy increases FOURFOLD (4x). If speed triples (3x), kinetic energy increases NINEFOLD (9x)!",
        "Path Independence: Gravitational potential energy depends solely on vertical elevation difference h, regardless of whether you took a ladder, ramp, or winding mountain road."
      ],
      questions: [
        { id: "sc7q4", type: "num", q: "If the velocity of an object is doubled, by what factor does its kinetic energy increase?", numAnswer: 4, hint: "KE is proportional to v²." },
        { id: "sc7q5", type: "num", q: "A 40 kg girl climbs up a flight of stairs of height 5 m. What is the increase in her gravitational potential energy in Joules? (g = 9.8 m/s²)", numAnswer: 1960, hint: "PE = m * g * h = 40 * 9.8 * 5." },
        { id: "sc7q6", type: "mcq", q: "A freely falling body has maximum kinetic energy at:", options: ["The starting highest point", "Midway through the fall", "Just before striking the ground", "It remains constant"], correctOption: 2, hint: "At the bottom, potential energy has completely converted into kinetic energy." }
      ]
    },
    {
      id: "s3",
      title: "Rate of Doing Work (Power) & Commercial Energy Billing",
      realWorldScenario: {
        title: "Deciphering Your Monthly Home Electricity Bill",
        context: "Every month, your family receives an electricity bill charging for, say, '250 Units'. Many believe a 'unit' measures electrical force or voltage.",
        application: "A commercial 'unit' is actually 1 Kilowatt-hour (1 kWh) — a unit of total electrical ENERGY, not power! If a 1000 W geyser runs for 1 hour, it consumes exactly 1 unit (1 kWh = 3,600,000 Joules). Understanding commercial energy empowers you to calculate and slash household power costs."
      },
      content: `### Concept of Power
Power measures how rapidly work is accomplished or energy is transferred.
Two people may do the same total work (e.g., carrying 20 bricks to the roof), but the one who finishes in 2 minutes has far higher power than the one taking 20 minutes.

### Mathematical Formulation
$$\\text{Power} = \\frac{\\text{Work Done}}{\\text{Time Taken}} = \\frac{W}{t} = \\frac{E}{t}$$
* **SI Unit:** The SI unit of power is the **Watt (W)**, named after James Watt.
$$1\\text{ Watt} = 1\\text{ Joule per second} = 1\\text{ J/s}$$
* **Definition of 1 Watt:** 1 Watt is the power of an appliance that does work (or consumes energy) at the rate of 1 Joule per second.
* **Larger Units:**
  * $1\\text{ Kilowatt (kW)} = 1000\\text{ W} = 10^3\\text{ W}$
  * $1\\text{ Megawatt (MW)} = 10^6\\text{ W}$
  * $1\\text{ Horsepower (hp)} = 746\\text{ W}$

### Commercial Unit of Electrical Energy (kWh)
The Joule is too tiny a unit for industrial and domestic energy measurements. For example, a single 100 W bulb running for 10 hours consumes:
$$E = 100\\text{ W} \\times 36,000\\text{ s} = 3,600,000\\text{ Joules}$$
Writing millions of Joules on household bills is inconvenient. Therefore, the **Kilowatt-hour (kWh)**, commonly called a **'Unit'**, is used.

#### Conversion of 1 kWh into Joules:
$$1\\text{ kWh} = 1\\text{ Kilowatt} \\times 1\\text{ Hour}$$
$$1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ seconds}$$
$$1\\text{ kWh} = 1000\\text{ J/s} \\times 3600\\text{ s} = 3,600,000\\text{ J}$$
$$\\mathbf{1\\text{ kWh} = 3.6 \\times 10^6\\text{ Joules}}$$`,
      keyConcepts: [
        { term: "Power (P)", definition: "The rate of doing work or rate of energy consumption: P = W/t. SI unit: Watt (W = J/s)." },
        { term: "1 Watt (W)", definition: "Rate of energy consumption of 1 Joule per second." },
        { term: "Kilowatt-hour (kWh)", definition: "Commercial unit of electrical energy. 1 kWh is the energy consumed by an appliance of 1 kW power in 1 hour." },
        { term: "1 Unit of Electricity", definition: "Colloquial term for 1 kWh of electrical energy (equal to 3.6 × 10⁶ Joules)." },
      ],
      formulas: [
        { label: "Power", latex: "P = \\frac{W}{t} = \\frac{E}{t}", unit: "W (Watt = J/s)", explanation: "Rate of energy conversion" },
        { label: "Electrical Energy Consumed", latex: "E = P (\\text{in kW}) \\times t (\\text{in hours})", unit: "kWh (Units)", explanation: "Standard commercial formula" },
        { label: "Commercial Unit Equivalence", latex: "1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}", unit: "Joules", explanation: "Conversion factor" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 11.7: Power of Two Girls Climbing",
          problem: "Two girls, each of weight 400 N, climb up a rope through a height of 8 m. Girl A takes 20 s while Girl B takes 50 s. What is the power expended by each girl?",
          formula: "P = \\frac{W}{t} = \\frac{mgh}{t}",
          steps: [
            "Total work done by each girl W = Force * height = 400 N * 8 m = 3200 J.",
            "Power of Girl A: P_A = W / t_A = 3200 J / 20 s = 160 W.",
            "Power of Girl B: P_B = W / t_B = 3200 J / 50 s = 64 W."
          ],
          answer: "Girl A has higher power (160 W) than Girl B (64 W) because she performs the same work in less time."
        },
        {
          title: "NCERT Example 11.9: Domestic Energy Consumption",
          problem: "An electric bulb of 60 W is used for 6 hours per day. Calculate the 'units' of energy consumed in one day by the bulb.",
          formula: "E = P (\\text{kW}) \\times t (\\text{h})",
          steps: [
            "Power of bulb P = 60 W = 60 / 1000 kW = 0.06 kW.",
            "Time t = 6 hours.",
            "Energy consumed E = 0.06 kW * 6 h = 0.36 kWh = 0.36 units."
          ],
          answer: "Energy consumed in one day = 0.36 units (0.36 kWh)."
        },
        {
          title: "Monthly Household Electricity Bill Problem",
          problem: "In a house, four 100 W tube lights are operated for 8 hours daily and an 800 W refrigerator operates for 10 hours daily. If 1 unit costs ₹6.00, calculate the total electricity bill for a month of 30 days.",
          formula: "E_{\\text{total}} = \\sum (P \\times t) \\times 30, \\quad \\text{Cost} = E \\times \\text{Rate}",
          steps: [
            "Step 1: Daily energy of 4 tube lights = 4 * 100 W * 8 h = 3200 Wh = 3.2 kWh.",
            "Step 2: Daily energy of refrigerator = 1 * 800 W * 10 h = 8000 Wh = 8.0 kWh.",
            "Step 3: Total daily energy = 3.2 + 8.0 = 11.2 kWh (units).",
            "Step 4: Total energy for 30 days = 11.2 * 30 = 336 kWh (units).",
            "Step 5: Total monthly bill = 336 units * ₹6.00 = ₹2,016."
          ],
          answer: "Total monthly bill = ₹2,016 for 336 units."
        }
      ],
      activities: [
        {
          number: "11.7",
          title: "Reading an Electricity Meter & Calculating Power",
          materials: ["Household electricity meter", "Notepad", "Timer"],
          steps: [
            "Switch on an electric kettle or immersion rod of known rated wattage (e.g., 1500 W).",
            "Observe the digital LED pulse blink rate or rotating dial on your meter for exactly 5 minutes.",
            "Calculate energy consumed using E = P × t and compare with the meter reading difference."
          ],
          observation: "The meter reading advances by exactly (1.5 kW × 5/60 h) = 0.125 kWh.",
          conclusion: "Commercial energy meters measure kilowatt-hours directly in real time."
        }
      ],
      didYouKnow: "A human heart consumes approximately 1.3 Watts of power at rest, which totals roughly 112,000 Joules of work every single day — enough energy to lift a car 8 meters into the air over the course of a lifetime!",
      examTips: [
        "Pay extreme attention to time units in Power calculations! If time is given in minutes or hours and you need power in Watts, convert time to SECONDS. If calculating commercial units (kWh), power must be in KILOWATTS and time in HOURS.",
        "Remember: 1 Horsepower (hp) = 746 Watts. This is a favorite 1-mark objective question in CBSE boards."
      ],
      questions: [
        { id: "sc7q7", type: "num", q: "How many Joules are there in 1 kilowatt-hour (kWh)? Enter the power of 10 in 3.6 × 10^X.", numAnswer: 6, hint: "1 kWh = 1000 W * 3600 s = 3.6 * 10⁶ J." },
        { id: "sc7q8", type: "num", q: "A machine does 1800 Joules of work in 30 seconds. What is its power in Watts?", numAnswer: 60, hint: "P = W / t = 1800 / 30." },
        { id: "sc7q9", type: "mcq", q: "Commercial unit of electrical energy is:", options: ["Watt", "Joule/second", "Kilowatt-hour", "Kilowatt"], correctOption: 2, hint: "What does your home meter measure?" }
      ]
    }
  ],
  keyPoints: [
    "Work is done only when force causes displacement not perpendicular to itself: W = F · s · cos θ.",
    "Positive work when θ = 0°; Negative work when θ = 180°; Zero work when s = 0 or θ = 90°.",
    "SI unit of Work and Energy is Joule (J). 1 J = 1 N · m.",
    "Kinetic Energy KE = ½mv²; directly proportional to mass and square of velocity.",
    "Gravitational Potential Energy PE = mgh; path independent.",
    "Law of Conservation of Energy: Total mechanical energy (KE + PE) is strictly conserved in an isolated conservative system.",
    "Power is the rate of doing work: P = W/t (Unit: Watt, 1 W = 1 J/s).",
    "Commercial unit of energy is Kilowatt-hour (kWh): 1 kWh = 3.6 × 10⁶ Joules = 1 Unit."
  ],
  ncertExercises: [
    { id: "sc7e1", type: "num", q: "An electric heater is rated 1500 W. How much energy does it use in 10 hours in commercial units (kWh)?", numAnswer: 15, tolerance: 0.1, hint: "E = 1.5 kW * 10 h = 15 kWh." },
    { id: "sc7e2", type: "short", q: "Does the transfer of energy take place when you push a huge rock with all your might and fail to move it?", answer: "No mechanical work is done on the rock because displacement is zero (s = 0). Energy is dissipated within your muscles as heat." },
    { id: "sc7e3", type: "long", q: "Prove that the total mechanical energy of a freely falling body remains conserved at all points of its path." }
  ]
};

export default ch7;
