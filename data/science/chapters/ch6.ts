import type { ScienceChapter } from "../types";

const ch6: ScienceChapter = {
  n: 6,
  key: "sc6",
  title: "Forces & Laws of Motion",
  short: "Forces & Motion",
  blurb: "Master balanced & unbalanced forces, Galileo's thought experiments, Newton's 3 universal laws, momentum, and conservation of momentum with real-world collision physics.",
  colorScheme: "physics",
  sections: [
    {
      id: "s1",
      title: "Balanced & Unbalanced Forces and the Concept of Inertia",
      realWorldScenario: {
        title: "The Whiplash Effect & The Physics of Seatbelts",
        context: "You are seated quietly inside a stationary bus. Suddenly, the driver hits the accelerator, and your upper body jerks backward! Minutes later, as a stray dog crosses the highway, the driver jams the emergency brakes, and every passenger violently lurches forward.",
        application: "Why does your body move without anyone physically pushing you? When the bus accelerates, your lower body in contact with the seat moves forward with the bus, while your upper body remains at rest due to inertia of rest. When braking, your body continues moving forward at the previous velocity due to inertia of motion. Modern 3-point seatbelts and car headrests are engineered precisely around Newton's First Law to prevent catastrophic whiplash spinal injuries."
      },
      content: `A force is not something an object 'has' — it is an interaction: a push, pull, or hit that can change an object's state of rest, velocity, direction of motion, or shape and size.

### Balanced vs. Unbalanced Forces
* **Balanced Forces:** When two or more forces acting on an object result in a net (resultant) force of zero ($\\Sigma F = 0$). Balanced forces do **not** change an object's state of rest or motion. For example, if two teams pull a rope with identical 500 N force in opposite directions, the rope does not accelerate. However, balanced forces **can** deform an object (e.g., squeezing a rubber ball between both hands).
* **Unbalanced Forces:** When the resultant force acting on a body is non-zero ($\\Sigma F \\neq 0$). An unbalanced force causes an acceleration — altering the body's speed, direction of motion, or both. A heavy wooden box slides across the floor only when our push exceeds the maximum opposing force of static friction.

### Galileo's Inclined Plane & The Discovery of Inertia
Before Galileo Galilei, the ancient Aristotelian view held that a continuous force was required to keep a body in uniform motion. Galileo refuted this with his famous double inclined plane experiment:
1. When a marble rolls down an inclined plane from height $h$, its velocity increases due to gravity.
2. Rolling up an identical opposing slope, it climbs back to almost the same vertical height $h$.
3. If the angle of inclination of the second plane is gradually reduced, the marble travels an increasingly longer distance to attain the same height $h$.
4. **Galileo's conclusion:** If the opposing plane is made completely horizontal ($0^\\circ$ slope) and friction is absent, the marble will roll indefinitely at uniform velocity to reach height $h$. Hence, an object in motion requires **no net force** to maintain its state of uniform motion!

### Inertia and Mass
Inertia is the inherent property of an object to resist any change in its state of rest or uniform motion.
* Inertia is **directly proportional to mass**. A heavier object has greater inertia.
* It is effortless to kick a football, but kicking a stone of identical volume can fracture a foot because the stone has immensely greater mass and thus greater inertia.`,
      keyConcepts: [
        { term: "Force", definition: "An interaction (push or pull) that changes or tends to change the state of rest, uniform motion, direction, or shape of an object. SI unit: Newton (N)." },
        { term: "Balanced Forces", definition: "A system of forces whose resultant vector sum is zero; produces zero acceleration." },
        { term: "Unbalanced Forces", definition: "A system of forces with a non-zero net resultant; causes the object to accelerate." },
        { term: "Inertia", definition: "The natural tendency of an object to resist changes in its state of rest or uniform velocity. Mass is the quantitative measure of inertia." },
        { term: "Inertia of Rest", definition: "The tendency of a stationary body to remain at rest unless acted upon by an external unbalanced force." },
        { term: "Inertia of Motion", definition: "The tendency of a moving body to continue moving in a straight line with constant speed." },
      ],
      formulas: [
        { label: "Net Unbalanced Force", latex: "F_{\\text{net}} = F_1 - F_2", explanation: "For opposing collinear forces" },
        { label: "Equilibrium Condition", latex: "\\Sigma F = 0", explanation: "Object remains at constant velocity or rest" },
      ],
      workedExamples: [
        {
          title: "Balanced vs Unbalanced Friction on a Heavy Box",
          problem: "A wooden crate of mass 40 kg sits on a rough factory floor. The maximum static friction opposing motion is 120 N. Two workers push the crate in the same horizontal direction with forces of 50 N and 60 N respectively. (a) Will the crate move? (b) What additional force is required to produce an acceleration of 1.5 m/s²?",
          formula: "F_{\\text{net}} = F_{\\text{applied}} - f_k, \\quad F_{\\text{net}} = ma",
          steps: [
            "Step 1: Calculate total applied force: F_applied = 50 N + 60 N = 110 N.",
            "Step 2: Compare with static friction: Applied force (110 N) < Opposing friction (120 N).",
            "Result for (a): The forces remain balanced by static friction (f_s = 110 N). The crate does NOT move; acceleration = 0 m/s².",
            "Step 3: To accelerate at 1.5 m/s² when kinetic friction is overcome (assume f_k = 120 N): Required net force F_net = m * a = 40 kg * 1.5 m/s² = 60 N.",
            "Step 4: Total applied force required: F_req = f_k + F_net = 120 N + 60 N = 180 N.",
            "Step 5: Additional force needed = 180 N - 110 N = 70 N."
          ],
          answer: "(a) No, crate does not move. (b) 70 N additional force required."
        }
      ],
      activities: [
        {
          number: "9.1",
          title: "The Coin and Glass Tumbler Trick (Inertia of Rest)",
          materials: ["Glass tumbler", "Stiff rectangular postcard", "Five-rupee coin"],
          steps: [
            "Place the smooth postcard over the open mouth of the glass tumbler.",
            "Carefully position a heavy five-rupee coin over the center of the card.",
            "Give the card a swift, sharp horizontal flick with your index finger."
          ],
          observation: "The postcard snaps away horizontally from beneath the coin, while the coin drops vertically straight into the water inside the glass tumbler.",
          conclusion: "The horizontal flick acts momentarily only on the postcard. Due to inertia of rest, the heavy coin resists horizontal acceleration and falls down into the tumbler under the influence of gravity."
        },
        {
          number: "9.2",
          title: "Carrom Coin Stack Under Striker Impact",
          materials: ["Carrom board", "Stack of 10 carrom coins", "Heavy carrom striker"],
          steps: [
            "Build a tall vertical stack of carrom coins on the board.",
            "Using the striker, hit the bottom-most coin with a swift, powerful stroke."
          ],
          observation: "The bottom coin is shot out clean from under the pile, while the remaining column of 9 coins collapses almost vertically downward intact.",
          conclusion: "The impact force of the striker acts only on the bottom coin for a fraction of a millisecond. The coins above remain at rest due to inertia of rest and simply drop down under gravity."
        }
      ],
      didYouKnow: "In deep outer space, Voyager 1 has been traveling at over 61,000 km/h for more than 47 years without firing its main propulsion engines, because there is no friction or air resistance to oppose its inertia of motion!",
      examTips: [
        "Common Exam Trap: Students often write 'velocity measures inertia'. That is incorrect! Mass is the sole quantitative measure of inertia. A 1000 kg truck at rest has far more inertia than a 0.05 kg bullet flying at 400 m/s.",
        "Always state the direction of force; force is a vector quantity with both magnitude and direction."
      ],
      questions: [
        { id: "sc6q1", type: "short", q: "Why do wet leaves shake off a tree branch when shaken vigorously?", answer: "Due to inertia of rest, the leaves tend to stay in their state of rest while the branch moves rapidly, tearing the stem bond.", hint: "Recall inertia of rest." },
        { id: "sc6q2", type: "mcq", q: "Which of the following objects has the greatest inertia?", options: ["A rubber ball of 200 g", "A 5-rupee coin (9 g)", "A soccer ball of 450 g", "A stone of 5 kg"], correctOption: 3, hint: "Inertia is directly proportional to mass." },
        { id: "sc6q3", type: "mcq", q: "When a carpet is beaten with a stick, dust particles fly out because:", options: ["Dust particles are repelled by stick charge", "Dust particles remain at rest due to inertia while carpet moves", "Air pressure sucks out dust", "Carpet expands"], correctOption: 1, hint: "Think about inertia of rest of dust particles." },
      ]
    },
    {
      id: "s2",
      title: "Newton's Second Law of Motion & Momentum",
      realWorldScenario: {
        title: "Why Cricket Fielders Cushion Fast Catches",
        context: "Watch any international cricket match: when Virat Kohli catches a boundary shot traveling at 130 km/h, his hands never remain stiff. He catches the leather ball and smoothly pulls his hands backward through 20-30 cm.",
        application: "If the fielder stopped the ball abruptly in 0.01 seconds, the enormous rate of change of momentum would exert a bone-breaking force of over 1000 N onto his palms. By pulling his hands back, he increases the collision time from 0.01 s to 0.2 s (20-fold increase!). According to F = Δp/Δt, this slashes the impact force by 95%, safely preventing hand injury."
      },
      content: `While Newton's First Law describes what happens when the net force is zero, Newton's Second Law quantifies what happens when an unbalanced force acts on an object.

### Linear Momentum (p)
The impact produced by a moving object depends on both its **mass ($m$)** and its **velocity ($v$)**.
* A light cricket ball thrown at gentle speed hurts very little, but a tiny 5-gram bullet fired from a gun at 400 m/s easily penetrates steel.
* A stationary truck parked along a road causes no harm, but even at a crawling speed of 5 km/h, its colossal mass can crush objects in its path.
* **Definition:** The momentum ($p$) of an object is defined as the product of its mass and velocity:
$$\\vec{p} = m \\cdot \\vec{v}$$
* **SI Unit:** Kilogram-meter per second ($\\text{kg}\\cdot\\text{m/s}$). Momentum is a vector quantity having the same direction as velocity.

### Newton's Second Law Statement & Mathematical Formulation
> **Statement:** The rate of change of momentum of an object is directly proportional to the applied unbalanced force and takes place in the direction in which the force acts.

Let an object of mass $m$ have initial velocity $u$. An unbalanced force $F$ acts on it for time interval $t$, giving it final velocity $v$.
* Initial momentum: $p_1 = m \\cdot u$
* Final momentum: $p_2 = m \\cdot v$
* Change in momentum: $\\Delta p = p_2 - p_1 = m(v - u)$
* Rate of change of momentum: $\\frac{\\Delta p}{t} = \\frac{m(v - u)}{t}$

According to Newton's Second Law:
$$F \\propto \\frac{m(v - u)}{t}$$
Since acceleration $a = \\frac{v - u}{t}$:
$$F \\propto m \\cdot a \\implies F = k \\cdot m \\cdot a$$
By defining $1\\text{ Newton}$ as the force that produces an acceleration of $1\\text{ m/s}^2$ on a body of mass $1\\text{ kg}$, the constant of proportionality $k = 1$.
$$\\mathbf{F = m \\cdot a}$$

### Definition of 1 Newton
**One Newton (1 N)** is that force which, when acting on a mass of 1 kilogram, produces an acceleration of 1 m/s² in its own direction ($1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$).`,
      keyConcepts: [
        { term: "Linear Momentum (p)", definition: "The product of mass and velocity: p = mv. It measures the quantity of motion contained in a body. Vector quantity." },
        { term: "Newton's Second Law", definition: "The rate of change of momentum is directly proportional to applied unbalanced force: F = dp/dt = ma." },
        { term: "Newton (N)", definition: "SI unit of force. 1 N = 1 kg·m/s². The force that accelerates 1 kg mass by 1 m/s²." },
        { term: "Impulse (J)", definition: "The product of average force and time of impact: J = F · Δt = Δp (change in momentum). Unit: N·s or kg·m/s." },
      ],
      formulas: [
        { label: "Linear Momentum", latex: "p = m \\cdot v", unit: "kg·m/s", explanation: "Vector in the direction of velocity" },
        { label: "Newton's Second Law", latex: "F = m \\cdot a = m\\frac{v - u}{t}", unit: "N (Newton)", explanation: "Force equals mass times acceleration" },
        { label: "Impulse-Momentum Theorem", latex: "F \\cdot \\Delta t = m(v - u) = \\Delta p", unit: "N·s", explanation: "Impact force is inversely proportional to collision duration" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 9.1: Calculating Force for Acceleration",
          problem: "A constant force acts on an object of mass 5 kg for a duration of 2 seconds. It increases the object's velocity from 3 m/s to 7 m/s. (a) Find the magnitude of the applied force. (b) Now, if the force were applied for a duration of 5 s, what would be the final velocity?",
          formula: "a = \\frac{v - u}{t}, \\quad F = ma, \\quad v' = u + at'",
          steps: [
            "Given: mass m = 5 kg, initial velocity u = 3 m/s, final velocity v = 7 m/s, time t = 2 s.",
            "Step 1: Calculate acceleration a = (v - u) / t = (7 - 3) / 2 = 4 / 2 = 2 m/s².",
            "Step 2: Calculate applied force F = m * a = 5 kg * 2 m/s² = 10 N.",
            "Step 3: For part (b), the force F = 10 N is applied for t' = 5 s. The acceleration remains a = 2 m/s².",
            "Step 4: New final velocity v' = u + a * t' = 3 + (2 * 5) = 3 + 10 = 13 m/s."
          ],
          answer: "(a) Force F = 10 N. (b) Final velocity after 5 seconds = 13 m/s."
        },
        {
          title: "NCERT Example 9.2: Comparing Accelerating Forces",
          problem: "Which would require a greater force: accelerating a 2 kg mass at 5 m/s² or a 4 kg mass at 2 m/s²?",
          formula: "F_1 = m_1 a_1, \\quad F_2 = m_2 a_2",
          steps: [
            "Case 1: m₁ = 2 kg, a₁ = 5 m/s² -> F₁ = m₁ * a₁ = 2 kg * 5 m/s² = 10 N.",
            "Case 2: m₂ = 4 kg, a₂ = 2 m/s² -> F₂ = m₂ * a₂ = 4 kg * 2 m/s² = 8 N.",
            "Comparing forces: F₁ (10 N) > F₂ (8 N)."
          ],
          answer: "Accelerating the 2 kg mass at 5 m/s² requires a greater force (10 N vs 8 N)."
        },
        {
          title: "Physics of Cricket Catch: Force vs Impact Time",
          problem: "A cricket ball of mass 150 g (0.15 kg) arrives at a fielder with a velocity of 20 m/s. (a) If stopped abruptly in 0.02 s with stiff hands, what is the force? (b) If the fielder swings hands back to increase stopping time to 0.2 s, what is the new force?",
          formula: "F = \\frac{m(v - u)}{\\Delta t}",
          steps: [
            "Given: m = 0.15 kg, u = 20 m/s, v = 0 m/s.",
            "Change in momentum Δp = m(v - u) = 0.15 * (0 - 20) = -3.0 kg·m/s.",
            "Case (a) Δt = 0.02 s: F₁ = -3.0 / 0.02 = -150 N (magnitude 150 N).",
            "Case (b) Δt = 0.20 s: F₂ = -3.0 / 0.20 = -15 N (magnitude 15 N).",
            "Ratio: Force is reduced by a factor of 10!"
          ],
          answer: "(a) Stiff hands: 150 N. (b) Soft cushioned catch: 15 N (10x reduction in trauma)."
        }
      ],
      activities: [
        {
          number: "9.3",
          title: "Depression in Sand: Demonstrating Momentum",
          materials: ["Tray of fine wet sand", "Table tennis ball", "Cricket ball of equal diameter", "Meter rule"],
          steps: [
            "Level the surface of the damp sand in the tray.",
            "Drop the table tennis ball and the heavy cricket ball from the exact same height of 1.5 meters onto separate spots in the sand.",
            "Measure and record the depth and diameter of depression created by each ball."
          ],
          observation: "Both balls hit the sand with the exact same velocity (v = √(2gh)), but the heavy cricket ball creates a drastically deeper and wider crater.",
          conclusion: "Because the cricket ball possesses immensely larger mass, its momentum is far greater. Imparting this greater change in momentum to the sand requires a much larger impact force, driving deeper depression."
        }
      ],
      didYouKnow: "A karate master can shatter a stack of bricks with a bare fist not because of brute strength, but because of extreme acceleration delivering the strike in less than 0.005 seconds, creating an instantaneous impact force of over 3000 Newtons!",
      examTips: [
        "Units Alert: Mass must always be converted to kg! (e.g. 200 g = 0.2 kg). Substituting 200 will make your answer 1000 times too large.",
        "Newton's First Law can be derived from the Second Law: If F = 0, then a = 0 (since m ≠ 0), which means v = u (object maintains constant velocity)."
      ],
      questions: [
        { id: "sc6q4", type: "num", q: "A 1200 kg car traveling at 15 m/s is brought to rest in 5 seconds. What is the braking force in Newtons? (enter positive magnitude)", numAnswer: 3600, tolerance: 5, hint: "a = (0 - 15)/5 = -3 m/s²; F = m * a." },
        { id: "sc6q5", type: "num", q: "Calculate the momentum (kg·m/s) of a 10 kg bowling ball moving at 4 m/s.", numAnswer: 40, hint: "p = m * v." },
        { id: "sc6q6", type: "mcq", q: "Why are high jumpers made to land on foam cushions or sand pits?", options: ["To increase momentum", "To increase time of stop and thereby reduce impact force", "To decrease time of stop and increase force", "To increase friction"], correctOption: 1, hint: "F = Δp / Δt: increasing Δt decreases F." },
        { id: "sc6q7", type: "short", q: "Write the mathematical expression of Newton's second law.", answer: "F = ma (or F = dp/dt)", hint: "Force equals mass times acceleration." },
      ]
    },
    {
      id: "s3",
      title: "Newton's Third Law & Conservation of Momentum",
      realWorldScenario: {
        title: "Walking on Earth & Rocketry in Deep Vacuum",
        context: "How does a rocket accelerate forward in the pure vacuum of space where there is no air, ground, or ceiling to push against? And why does a swimmer kick water backward to move forward?",
        application: "Newton's Third Law reveals that forces always occur in matched action-reaction pairs acting on two distinct bodies. A rocket burns propellants and forcefully expels blazing exhaust gases backward at high velocity (Action). The escaping gas exerts an equal and opposite forward thrust onto the rocket engine (Reaction). In walking, your shoe pushes the road backward; the road pushes your foot forward!"
      },
      content: `### Newton's Third Law of Motion
> **Statement:** To every action, there is always an equal and opposite reaction.
> Mathematically: If object $A$ exerts a force $\\vec{F}_{AB}$ on object $B$, then object $B$ exerts an equal and oppositely directed force $\\vec{F}_{BA}$ on object $A$:
$$\\vec{F}_{AB} = -\\vec{F}_{BA}$$

#### Crucial Insights on Action-Reaction Pairs:
1. **Two Different Bodies:** Action and reaction **never** act on the same body. Hence, they can **never** cancel each other out to produce equilibrium!
2. **Simultaneous Occurrence:** There is zero time delay between action and reaction; they originate and terminate together.
3. **Different Accelerations:** Although the mutual forces are equal in magnitude, their produced accelerations ($a = F/m$) may differ vastly if the two bodies have different masses. When a rifle fires a bullet, the force on the bullet equals the force on the rifle, but the bullet accelerates thousands of times faster because its mass is a fraction of the rifle's mass.

### Law of Conservation of Momentum
> **Statement:** When two or more bodies interact in an isolated system (where no net external unbalanced force acts), the total linear momentum of the system remains strictly constant.
$$\\text{Total Momentum Before Interaction} = \\text{Total Momentum After Interaction}$$

#### Derivation using Newton's 2nd & 3rd Laws:
Consider two spheres $A$ (mass $m_1$) and $B$ (mass $m_2$) moving in the same straight line with initial velocities $u_1$ and $u_2$ ($u_1 > u_2$).
They collide for time interval $t$, separating with final velocities $v_1$ and $v_2$.
* Force exerted by $A$ on $B$: $F_{AB} = m_2 \\cdot \\frac{v_2 - u_2}{t}$
* Force exerted by $B$ on $A$: $F_{BA} = m_1 \\cdot \\frac{v_1 - u_1}{t}$
According to Newton's Third Law: $F_{AB} = -F_{BA}$
$$m_2 \\frac{v_2 - u_2}{t} = - m_1 \\frac{v_1 - u_1}{t}$$
Cancelling $t$ on both sides:
$$m_2 v_2 - m_2 u_2 = -m_1 v_1 + m_1 u_1$$
Rearranging terms:
$$\\mathbf{m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2}$$`,
      keyConcepts: [
        { term: "Newton's Third Law", definition: "Forces always exist in equal and opposite pairs acting on two different bodies: F_AB = -F_BA." },
        { term: "Law of Conservation of Momentum", definition: "In an isolated system free from external forces, the total vector momentum before a collision equals the total vector momentum after." },
        { term: "Recoil Velocity", definition: "The backward velocity acquired by a gun or launcher when firing a projectile, required to conserve zero initial momentum." },
        { term: "Isolated System", definition: "A physical system completely free from external unbalanced forces (such as friction or air resistance)." },
      ],
      formulas: [
        { label: "Conservation of Momentum", latex: "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2", explanation: "Applies to any two-body collision" },
        { label: "Gun Recoil Velocity", latex: "V = -\\frac{m \\cdot v}{M}", unit: "m/s", explanation: "m=bullet mass, v=bullet velocity, M=gun mass" },
      ],
      workedExamples: [
        {
          title: "NCERT Example 9.4: Recoil Velocity of a Pistol",
          problem: "A bullet of mass 20 g is horizontally fired with a velocity 150 m/s from a pistol of mass 2 kg. What is the recoil velocity of the pistol?",
          formula: "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
          steps: [
            "Given: Bullet mass m₁ = 20 g = 0.02 kg. Pistol mass m₂ = 2 kg.",
            "Initial state: Both are at rest, so u₁ = 0 m/s, u₂ = 0 m/s.",
            "Total momentum before firing = (0.02 * 0) + (2 * 0) = 0 kg·m/s.",
            "Final state: Bullet velocity v₁ = +150 m/s. Pistol recoil velocity = v₂.",
            "Total momentum after firing = (0.02 * 150) + (2 * v₂) = 3 + 2v₂.",
            "By Conservation of Momentum: 0 = 3 + 2v₂ -> 2v₂ = -3 -> v₂ = -1.5 m/s.",
            "The negative sign indicates that the pistol recoils in the direction opposite to the bullet's motion."
          ],
          answer: "Recoil velocity of pistol = -1.5 m/s (1.5 m/s backward)."
        },
        {
          title: "NCERT Example 9.5: Girl Jumping onto a Frictionless Cart",
          problem: "A girl of mass 40 kg jumps with a horizontal velocity of 5 m/s onto a stationary cart with frictionless wheels. The mass of the cart is 3 kg. What is her velocity as the cart starts moving?",
          formula: "m_1 u_1 + m_2 u_2 = (m_1 + m_2) v",
          steps: [
            "Given: Girl mass m₁ = 40 kg, girl initial velocity u₁ = 5 m/s.",
            "Cart mass m₂ = 3 kg, cart initial velocity u₂ = 0 m/s.",
            "Total initial momentum = (40 * 5) + (3 * 0) = 200 + 0 = 200 kg·m/s.",
            "After landing, girl and cart move together as one combined mass M = m₁ + m₂ = 40 + 3 = 43 kg with velocity v.",
            "Total final momentum = (40 + 3) * v = 43v.",
            "Equating: 43v = 200 -> v = 200 / 43 ≈ +4.65 m/s."
          ],
          answer: "Common velocity of girl and cart = +4.65 m/s in the forward direction."
        }
      ],
      activities: [
        {
          number: "9.5",
          title: "Action-Reaction with Coupled Spring Balances",
          materials: ["Two identical spring balances A and B", "Rigid hook on a wall"],
          steps: [
            "Attach balance A to a rigid wall hook.",
            "Hook balance B to the free hook of balance A.",
            "Pull balance B horizontally with a firm steady pull."
          ],
          observation: "Both spring balances show the exact same scale reading (e.g., both read precisely 8 N), despite balance B being pulled by hand and balance A merely resisting.",
          conclusion: "The force exerted by balance B on A (action) is precisely equal in magnitude and opposite in direction to the force exerted by balance A on B (reaction)."
        },
        {
          number: "9.6",
          title: "The Balloon Rocket (Demonstrating Rocket Propulsion)",
          materials: ["Drinking straw", "Long piece of string", "Balloon", "Adhesive tape"],
          steps: [
            "Thread the string through the straw and stretch it tightly between two door handles.",
            "Inflate the balloon, pinch its mouth closed without tying, and tape it securely along the straw.",
            "Release the mouth of the balloon."
          ],
          observation: "Air rushes backward out of the balloon nozzle with high speed, while the balloon-straw assembly shoots rapidly forward along the string.",
          conclusion: "The backward jet of escaping air (action) imparts an equal and opposite forward impulse to the balloon (reaction), demonstrating Newton's Third Law and conservation of momentum."
        }
      ],
      didYouKnow: "When Apollo 11's Saturn V rocket launched toward the Moon, it burned 13 metric tons of fuel per second, ejecting exhaust at 2,500 m/s to generate 34.5 million Newtons of upward thrust!",
      examTips: [
        "Major Board Exam Question: 'Do action and reaction cancel each other?' Answer: No! Action and reaction act on two entirely different objects, so they cannot cancel each other.",
        "Always define sign conventions (+ for forward/right, - for backward/left) before solving conservation of momentum numericals."
      ],
      questions: [
        { id: "sc6q8", type: "mcq", q: "Action and reaction forces:", options: ["Act on the same body in opposite directions", "Act on different bodies in opposite directions", "Act on different bodies in same direction", "Cancel each other out to zero"], correctOption: 1, hint: "Review the key insights of Newton's third law." },
        { id: "sc6q9", type: "num", q: "A 50 kg cannon fires a 1 kg ball at 100 m/s. What is the cannon's recoil velocity in m/s? (Enter magnitude)", numAnswer: 2, hint: "m1*v1 = m2*v2 -> 50 * V = 1 * 100." },
        { id: "sc6q10", type: "short", q: "Why is it difficult for a fireman to hold a hose pipe that ejects large streams of water at high velocity?", answer: "Due to Newton's 3rd law, the large mass of water ejecting forward at high velocity exerts an equal and opposite backward reaction force on the hose pipe.", hint: "Think about action and reaction." }
      ]
    }
  ],
  keyPoints: [
    "Force is an interaction that changes or tends to change the state of motion or shape of a body (SI unit: Newton, N).",
    "Balanced forces result in zero acceleration (ΣF = 0); unbalanced forces cause acceleration.",
    "Inertia is the inherent resistance of matter to change in velocity; mass is the quantitative measure of inertia.",
    "Newton's First Law: Bodies persist in uniform motion or rest unless compelled by an unbalanced force.",
    "Momentum p = m·v is a vector quantity (kg·m/s).",
    "Newton's Second Law: F = dp/dt = m·a (1 N = 1 kg·m/s²).",
    "Newton's Third Law: For every action, there is an equal and opposite reaction acting on different bodies (F_AB = -F_BA).",
    "Conservation of Linear Momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ when no external unbalanced force acts."
  ],
  ncertExercises: [
    { id: "sc6e1", type: "short", q: "An object experiences a net zero external unbalanced force. Is it possible for the object to be traveling with a non-zero velocity?", answer: "Yes. By Newton's First Law, if net external force is zero, the object maintains constant velocity (non-zero speed in a straight line) if it was already in motion." },
    { id: "sc6e2", type: "num", q: "A truck starts from rest and rolls down a hill with constant acceleration. It travels 400 m in 20 s. Find the force acting on it if its mass is 7 metric tonnes (1 tonne = 1000 kg).", numAnswer: 14000, tolerance: 10, hint: "s = ut + 0.5at² -> 400 = 0.5 * a * 400 -> a = 2 m/s². F = ma = 7000 * 2 = 14000 N." },
    { id: "sc6e3", type: "long", q: "Deduce Newton's first law of motion mathematically from the mathematical formulation of Newton's second law of motion." }
  ]
};

export default ch6;
