import type { ScienceChapter } from "../types";

const ch4: ScienceChapter = {
  n: 4,
  key: "sc4",
  title: "Describing Motion Around Us",
  short: "Motion",
  blurb:
    "Distance vs displacement, speed vs velocity, uniform and non-uniform acceleration, the three equations of motion, and graphical interpretation.",
  colorScheme: "physics",
  animationType: "motion-graph",
  sections: [
    {
      id: "s1",
      title: "Distance and Displacement: The Path of Motion",
      content:
        "Motion is relative to a chosen reference point or origin. When an object changes its position over time with respect to its surroundings, it is said to be in motion. But how do we measure how much an object has moved? Physics distinguishes between the total ground covered (distance) and the shortest net change in position (displacement).",
      realWorldScenario: {
        emoji: "🏃",
        title: "The 400-Meter Athletic Track Paradox",
        description:
          "An Olympic sprinter bursts out of the blocks, runs flat out around the oval curve of a 400 m stadium track, and crosses the exact finish line where they began in 44 seconds. Their legs ran 400 meters of distance, but in physics, their net displacement was exactly 0 meters!",
        connection:
          "Because the starting position and finishing position are identical, the straight-line vector displacement is zero, even though 400 meters of distance was covered.",
      },
      contentBlocks: [
        "A reference point is indispensable when describing motion. For example, if you are sitting inside a moving train, you are at rest relative to your fellow passenger sitting across from you, but in rapid motion relative to a tree standing on the railway platform outside.",
        "Distance is the actual length of the path traversed by an object irrespective of direction. It is a scalar quantity, has only magnitude, and can never decrease or be negative for a moving body.",
        "Displacement is the shortest straight-line vector drawn from the initial position to the final position of the object. It has both magnitude and direction, and can be positive, zero, or negative. The magnitude of displacement is always less than or equal to the distance covered (|displacement| ≤ distance).",
      ],
      keyConcepts: [
        {
          term: "Reference Point (Origin)",
          definition: "A fixed point relative to which the position or motion of an object is specified.",
          example: "The school is 2 km north of the railway station (station is the reference point).",
        },
        {
          term: "Distance",
          definition: "The total actual path length covered by a moving object. Scalar quantity (magnitude only). SI unit: meter (m).",
          example: "An odometer in a car registers total distance driven.",
        },
        {
          term: "Displacement",
          definition: "The shortest straight-line distance from the initial position to the final position with direction. Vector quantity. SI unit: meter (m).",
          example: "50 meters due East.",
        },
        {
          term: "Scalar vs. Vector",
          definition: "Scalars have only numerical magnitude (e.g. mass, distance, speed). Vectors have both magnitude and spatial direction (e.g. displacement, velocity, force).",
        },
      ],
      formulas: [
        {
          label: "Displacement Relation",
          latex: "\\Delta x = x_f - x_i",
          explanation: "Change in position vector from initial position x_i to final position x_f.",
          unit: "m",
        },
        {
          label: "Magnitude Inequality",
          latex: "|\\text{Displacement}| \\le \\text{Distance}",
          explanation: "Displacement magnitude equals distance ONLY if the object travels in a straight line without reversing direction.",
        },
      ],
      workedExamples: [
        {
          title: "Classic NCERT Question: The Farmer & Square Field",
          problem:
            "A farmer moves along the boundary of a square field of side 10 m in 40 seconds. What will be the magnitude of displacement of the farmer at the end of 2 minutes 20 seconds from his initial position?",
          given: [
            "Side of square field = 10 m",
            "Perimeter of square = 4 × 10 = 40 m",
            "Time taken for 1 complete round = 40 s",
            "Total time = 2 min 20 s = (2 × 60) + 20 = 140 s",
          ],
          formulaUsed: "\\text{Rounds} = \\frac{\\text{Total Time}}{\\text{Time per Round}}; \\quad \\text{Displacement} = \\text{Diagonal} = \\sqrt{s^2 + s^2}",
          solutionSteps: [
            "Calculate total number of rounds completed: 140 / 40 = 3.5 rounds.",
            "After 3 complete rounds, the farmer is back at the initial corner A (displacement = 0).",
            "In the remaining 0.5 round, the farmer travels from corner A to the diagonally opposite corner C.",
            "By Pythagoras theorem across right triangle ABC: AC = √(AB² + BC²) = √(10² + 10²) = √(100 + 100) = √200 = 10√2 m.",
            "10√2 = 10 × 1.414 = 14.14 m.",
          ],
          finalAnswer: "14.14 meters diagonally opposite to the starting point.",
        },
      ],
      activities: [
        {
          number: "8.1",
          title: "Measuring Daily Life Motion & Origin Shift",
          materials: ["Measuring tape", "Chalk", "Stopwatch"],
          steps: [
            "Mark point A on a school courtyard as your reference origin.",
            "Walk 10 meters forward to point B, turn 90° right and walk 10 meters to point C.",
            "Measure total path length walked using tape.",
            "Stretch the measuring tape directly in a straight line from point A to point C.",
          ],
          observation:
            "The path length walked (distance) is 10 m + 10 m = 20 m. The direct straight-line distance from A to C (displacement) is only 14.14 m.",
          conclusion:
            "Distance depends on the actual route taken; displacement depends solely on the initial and final endpoints.",
        },
      ],
      didYouKnow:
        "The odometer in motorcars records the cumulative scalar distance traveled in kilometers. A car driven 50,000 km across winding mountain roads has an odometer reading of 50,000 km, even if it returns to park in the exact same home garage where it was first bought!",
      examTips: [
        "Displacement CAN be zero even if distance is positive (e.g. any circular trip or round trip back to start).",
        "Can magnitude of displacement ever be greater than distance? No! Never. It is either equal to (straight-line motion) or less than distance.",
      ],
      questions: [
        {
          id: "sc4q1",
          type: "mcq",
          q: "Under what condition is the magnitude of displacement strictly equal to the distance covered by an object?",
          options: [
            "When the object moves in a circular path",
            "When the object moves along a straight line in one unchanging direction",
            "When the object oscillates back and forth",
            "They can never be equal",
          ],
          correctOption: 1,
          hint: "Think about any turning or deviation from a straight line.",
        },
        {
          id: "sc4q1_b",
          type: "mcq",
          q: "Assertion (A): The displacement of a moving object can be zero even when the distance travelled by it is not zero.\nReason (R): Displacement depends solely on the initial and final positions of the object, so if a body returns to its starting point, its net displacement is zero.",
          options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true"
          ],
          correctOption: 0,
          hint: "Displacement is a vector change in position."
        },
        {
          id: "sc4q2",
          type: "num",
          q: "An athlete runs around a circular track of diameter 200 m in 40 s. What will be the magnitude of his displacement (in meters) at the end of 2 minutes 20 seconds?",
          numAnswer: 200,
          tolerance: 0.1,
          hint: "Total time = 140 s. 140/40 = 3.5 rounds. At 3.5 rounds, the athlete is at the diametrically opposite point, so displacement = diameter = 200 m!",
        },
        {
          id: "sc4q1_c",
          type: "mcq",
          q: "What physical quantity does the odometer installed in an automobile measure?",
          options: ["Instantaneous speed", "Average velocity", "Total distance travelled", "Total displacement"],
          correctOption: 2,
          hint: "Records total ground traversed by the vehicle wheels."
        },
        {
          id: "sc4q1_d",
          type: "num",
          q: "A student walks 3 meters due East and then 4 meters due North. What is the magnitude of the student's net displacement (in meters)?",
          numAnswer: 5,
          tolerance: 0.1,
          hint: "Use Pythagoras theorem: √(3² + 4²) = √(9 + 16) = √25 = 5 meters."
        },
        {
          id: "sc4q3",
          type: "mcq",
          q: "Which of the following statements is scientifically true regarding displacement?",
          options: [
            "It cannot be zero",
            "Its magnitude is always strictly greater than the distance travelled",
            "It is a scalar quantity",
            "Its magnitude is always less than or equal to the distance travelled (|displacement| ≤ distance)",
          ],
          correctOption: 3,
          hint: "Recall |displacement| ≤ distance."
        },
        {
          id: "sc4q1_e",
          type: "short",
          q: "Can the magnitude of displacement of an object ever be greater than the distance covered by it? Explain why.",
          answer: "No, never. Displacement is the shortest straight-line path between the initial and final positions. Any curve, turn, or deviation from a straight line increases distance, so distance is always greater than or equal to displacement.",
          hint: "Shortest distance between two points is a straight line."
        }
      ],
    },
    {
      id: "s2",
      title: "Speed and Velocity: Rate of Motion",
      content:
        "To describe how fast an object moves, we define the rate of change of position. Just as distance differs from displacement, speed differs fundamentally from velocity. While speed tells us how fast a body is travelling, velocity tells us both how fast and in which exact direction it is moving.",
      realWorldScenario: {
        emoji: "🚗",
        title: "Speedometer vs. GPS Navigation",
        description:
          "Look at your car dashboard on the highway: the speedometer needle reads '60 km/h'. That is instantaneous speed. Meanwhile, your GPS navigation announces: 'Proceed 60 km/h North towards Chandigarh'. That is velocity!",
        connection:
          "A car cruising on a circular roundabout with its speedometer fixed at 40 km/h has constant speed, but continuously changing velocity because its direction of motion changes at every millisecond.",
      },
      contentBlocks: [
        "Speed is defined as the distance covered per unit time. It is a scalar quantity. Its SI unit is meter per second (m/s). In everyday transport, we frequently use kilometers per hour (km/h). To convert km/h to m/s, multiply by 5/18 (since 1000 m / 3600 s = 5/18).",
        "Most objects in real life do not travel at constant speed. A bus crawling through city traffic speeds up, halts at traffic lights, and slows down at bus stops. We therefore describe non-uniform motion using Average Speed: total distance divided by total time taken.",
        "Velocity is the displacement of an object per unit time, or the speed of an object moving in a specified direction. Velocity can change in two ways: by changing speed, or by changing direction of motion, or by changing both.",
      ],
      keyConcepts: [
        {
          term: "Speed",
          definition: "Distance travelled by an object per unit time. Scalar quantity. SI unit: m/s.",
          example: "A cheetah running at 30 m/s.",
        },
        {
          term: "Velocity",
          definition: "Displacement per unit time, or speed in a specified direction. Vector quantity. SI unit: m/s.",
          example: "Wind blowing at 15 m/s North-East.",
        },
        {
          term: "Average Speed",
          definition: "The total distance covered divided by the total time taken: v_avg = total distance / total time.",
        },
        {
          term: "Average Velocity",
          definition: "The arithmetic mean of initial and final velocities for uniformly changing velocity: v_avg = (u + v) / 2.",
        },
      ],
      formulas: [
        {
          label: "Average Speed",
          latex: "\\bar{v} = \\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{s_{\\text{total}}}{t_{\\text{total}}}",
          unit: "m/s",
        },
        {
          label: "Average Velocity (Uniform Acceleration)",
          latex: "\\vec{v}_{\\text{avg}} = \\frac{u + v}{2}",
          explanation: "u = initial velocity, v = final velocity.",
          unit: "m/s",
        },
        {
          label: "Unit Conversion Shortcut",
          latex: "1 \\text{ km/h} = \\frac{1000\\text{ m}}{3600\\text{ s}} = \\frac{5}{18}\\text{ m/s}",
          explanation: "Multiply by 5/18 to convert km/h → m/s; multiply by 18/5 to convert m/s → km/h.",
        },
      ],
      workedExamples: [
        {
          title: "NCERT Classic: Trip with Different Speeds",
          problem:
            "Abdul, while driving to school, computes the average speed for his trip to be 20 km/h. On his return trip along the same route, there is less traffic and the average speed is 30 km/h. What is the average speed for Abdul's entire round trip?",
          given: [
            "Let distance from home to school = d km",
            "Speed on onward trip = 20 km/h → Time t₁ = d / 20 hours",
            "Speed on return trip = 30 km/h → Time t₂ = d / 30 hours",
          ],
          formulaUsed: "\\text{Average Speed} = \\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{d + d}{t_1 + t_2}",
          solutionSteps: [
            "Total distance = d + d = 2d km.",
            "Total time taken = t₁ + t₂ = d/20 + d/30.",
            "Take LCM of 20 and 30 (= 60): Total time = (3d + 2d) / 60 = 5d / 60 = d / 12 hours.",
            "Average Speed = Total Distance / Total Time = 2d / (d / 12) = 2d × (12 / d) = 24 km/h.",
          ],
          finalAnswer: "24 km/h (Notice it is NOT simply the arithmetic mean (20+30)/2 = 25 km/h!)",
        },
      ],
      activities: [
        {
          number: "8.3",
          title: "Determining Average Walking and Running Speeds",
          materials: ["Stopwatch", "50-meter track"],
          steps: [
            "Measure a straight 50 m path.",
            "Time yourself walking the 50 m at normal pace.",
            "Time yourself sprinting the same 50 m distance.",
            "Compute speed = 50 / time in m/s, then convert to km/h by multiplying with 18/5.",
          ],
          observation:
            "Walking took 36 seconds (speed = 1.39 m/s = 5.0 km/h). Running took 8 seconds (speed = 6.25 m/s = 22.5 km/h).",
          conclusion:
            "Human walking speed averages ~5 km/h while sprint velocity reaches 20-30 km/h.",
        },
      ],
      didYouKnow:
        "The fastest land animal, the cheetah, can accelerate from 0 to 96 km/h (27 m/s) in just 3 seconds—faster than most sports cars! However, it can maintain this extreme speed for only about 30 seconds before overheating.",
      examTips: [
        "Common trap: NEVER average speeds by simply adding them and dividing by 2 unless the time spent at each speed is identical! When distances are equal, always compute total distance / total time.",
        "Always convert km/h to m/s before plugging into kinematics formulas containing seconds or m/s².",
      ],
      questions: [
        {
          id: "sc4q4",
          type: "num",
          q: "Convert a car velocity of 72 km/h into SI units (m/s).",
          numAnswer: 20,
          tolerance: 0.1,
          hint: "Multiply 72 by 5/18: 72 × 5 / 18 = 4 × 5 = 20 m/s.",
        },
        {
          id: "sc4q4_b",
          type: "mcq",
          q: "Assertion (A): A car moving around a circular roundabout with a constant speedometer reading of 40 km/h is undergoing accelerated motion.\nReason (R): Velocity is a vector quantity, and moving along a curve continuously changes the direction of the velocity vector even when speed is constant.",
          options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true"
          ],
          correctOption: 0,
          hint: "Change in direction alone constitutes acceleration."
        },
        {
          id: "sc4q4_c",
          type: "num",
          q: "A car travels the first 30 km at a uniform speed of 40 km/h and the next 30 km at a uniform speed of 20 km/h. Calculate its average speed (in km/h).",
          numAnswer: 26.67,
          tolerance: 0.2,
          hint: "Total distance = 60 km. Total time = 30/40 + 30/20 = 0.75 + 1.5 = 2.25 h. Avg speed = 60 / 2.25 = 26.67 km/h."
        },
        {
          id: "sc4q4_d",
          type: "num",
          q: "Convert a high-speed train velocity of 90 km/h into m/s:",
          numAnswer: 25,
          tolerance: 0.1,
          hint: "90 × 5 / 18 = 5 × 5 = 25 m/s."
        },
        {
          id: "sc4q5",
          type: "mcq",
          q: "Can a body have zero average velocity but non-zero average speed?",
          options: [
            "Yes, always if the body returns to its starting point",
            "No, if average speed is non-zero, velocity must be non-zero",
            "Only in space",
            "Only for uniform motion",
          ],
          correctOption: 0,
          hint: "If a body returns to its starting point, displacement = 0, so average velocity = 0, but distance > 0.",
        },
        {
          id: "sc4q4_e",
          type: "mcq",
          q: "Which of the following is strictly true for an object moving with uniform velocity along a straight line?",
          options: ["Its acceleration is strictly zero", "Its speed must increase", "Its displacement is zero", "It moves in a circle"],
          correctOption: 0,
          hint: "Uniform velocity means rate of change of velocity (acceleration) = 0."
        },
        {
          id: "sc4q4_f",
          type: "short",
          q: "Under what physical condition is the magnitude of average velocity equal to the average speed?",
          answer: "The magnitude of average velocity equals average speed when the object travels along a straight line in a single, unchanging direction without turning back.",
          hint: "When total distance = magnitude of displacement."
        }
      ],
    },
    {
      id: "s3",
      title: "Acceleration and the 3 Equations of Motion",
      content:
        "In non-uniform motion, velocity changes with time. A vehicle starting from a red light increases its velocity; when approaching a stop sign, it decreases its velocity. We quantify this change using Acceleration. For uniformly accelerated motion along a straight line, three powerful algebraic equations link initial velocity, final velocity, acceleration, time, and distance.",
      realWorldScenario: {
        emoji: "🚀",
        title: "The Physics of Aircraft Takeoff",
        description:
          "A passenger airliner loaded with 200 passengers sits stationary at the runway threshold (u = 0). The pilot throttles up the jet engines, producing a constant acceleration of 3 m/s² down the 1,500 m runway. In just 31 seconds, the plane hits its liftoff rotation velocity of 280 km/h!",
        connection:
          "The runway distance, takeoff speed, and time are governed exactly by the three kinematic equations of motion: v = u + at and s = ut + ½at².",
      },
      contentBlocks: [
        "Acceleration is defined as the rate of change of velocity with time: a = (v - u) / t, where u is initial velocity at time t=0 and v is final velocity at time t. If velocity increases, acceleration is positive (in direction of velocity). If velocity decreases, acceleration is negative, also termed Retardation or Deceleration.",
        "Uniform acceleration occurs when velocity changes by equal amounts in equal intervals of time, such as a ball in free fall under gravity (g = 9.8 m/s²). Non-uniform acceleration occurs when velocity changes at varying rates.",
        "The Three Equations of Motion for Uniform Acceleration: 1. v = u + at (Velocity-Time relation). 2. s = ut + ½at² (Position-Time relation). 3. v² = u² + 2as (Position-Velocity relation).",
      ],
      keyConcepts: [
        {
          term: "Acceleration (a)",
          definition: "Rate of change of velocity per unit time: a = (v - u) / t. Vector quantity. SI unit: m/s².",
          example: "Gravity accelerates falling objects at 9.8 m/s² downwards.",
        },
        {
          term: "Retardation (Deceleration)",
          definition: "Negative acceleration when velocity decreases over time.",
          example: "Applying brakes to stop a scooter.",
        },
        {
          term: "Uniform Acceleration",
          definition: "Motion in which the velocity of a body increases or decreases by equal increments in equal intervals of time.",
        },
      ],
      formulas: [
        {
          label: "Definition of Acceleration",
          latex: "a = \\frac{v - u}{t}",
          explanation: "u = initial velocity, v = final velocity, t = time interval.",
          unit: "m/s²",
        },
        {
          label: "First Equation of Motion",
          latex: "v = u + at",
          explanation: "Velocity-Time Relation (gives final velocity after time t).",
          unit: "m/s",
        },
        {
          label: "Second Equation of Motion",
          latex: "s = ut + \\frac{1}{2}at^2",
          explanation: "Position-Time Relation (gives distance s covered in time t).",
          unit: "m",
        },
        {
          label: "Third Equation of Motion",
          latex: "v^2 = u^2 + 2as",
          explanation: "Position-Velocity Relation (relates velocities and distance without needing time t).",
          unit: "m²/s²",
        },
      ],
      workedExamples: [
        {
          title: "NCERT Example 8.5: Train Accelerating from Station",
          problem:
            "A train starting from rest attains a velocity of 72 km/h in 5 minutes. Assuming that the acceleration is uniform, find (i) the acceleration and (ii) the distance travelled by the train for attaining this velocity.",
          given: [
            "Initial velocity u = 0 (starts from rest)",
            "Final velocity v = 72 km/h = 72 × (5/18) = 20 m/s",
            "Time t = 5 minutes = 5 × 60 = 300 seconds",
          ],
          formulaUsed: "a = \\frac{v - u}{t}; \\quad s = ut + \\frac{1}{2}at^2",
          solutionSteps: [
            "Step 1: Calculate acceleration: a = (20 - 0) / 300 = 20 / 300 = 1/15 m/s² ≈ 0.067 m/s².",
            "Step 2: Calculate distance travelled: s = ut + ½at² = (0 × 300) + ½ × (1/15) × (300)².",
            "s = ½ × (1/15) × 90,000 = ½ × 6,000 = 3,000 m = 3 km.",
          ],
          finalAnswer: "(i) a = 1/15 m/s²; (ii) Distance s = 3,000 m (3 km).",
        },
        {
          title: "NCERT Example 8.7: Car Braking Deceleration",
          problem:
            "The brakes applied to a car produce an acceleration of 6 m/s² in the opposite direction to the motion. If the car takes 2 s to stop after the application of brakes, calculate the distance it travels during this time.",
          given: [
            "Acceleration a = -6 m/s² (negative because it opposes motion)",
            "Time to stop t = 2 s",
            "Final velocity v = 0 (car stops)",
          ],
          formulaUsed: "v = u + at \\implies u = v - at; \\quad s = ut + \\frac{1}{2}at^2",
          solutionSteps: [
            "Step 1: Find initial velocity u before braking: 0 = u + (-6) × 2 → u = 12 m/s.",
            "Step 2: Calculate braking distance s: s = ut + ½at² = (12 × 2) + ½ × (-6) × (2)².",
            "s = 24 + ½ × (-6) × 4 = 24 - 12 = 12 m.",
          ],
          finalAnswer: "Stopping distance s = 12 meters.",
        },
      ],
      activities: [
        {
          number: "8.9",
          title: "Measuring Acceleration of a Ball Down an Inclined Plane",
          materials: ["1-meter smooth wooden plank", "Steel marble", "Stopwatch", "Books for incline"],
          steps: [
            "Elevate one side of the wooden board on books to form a gentle slope.",
            "Release the marble from rest at the top edge (u = 0).",
            "Measure time t taken to reach marks at 25 cm, 50 cm, 75 cm, and 100 cm.",
            "Notice that distance increases with the square of time (t²).",
          ],
          observation:
            "Doubling the time quadruples the distance rolled (s ∝ t²), proving uniform acceleration.",
          conclusion:
            "Free roll down a uniform incline constitutes uniformly accelerated motion with constant a.",
        },
      ],
      didYouKnow:
        "Fighter jet pilots experience accelerations up to 9g (9 × 9.8 ≈ 88 m/s²) during high-speed combat maneuvers. At 9g, blood is pulled away from the brain into the lower limbs, requiring special pressurized 'G-suits' to prevent pilots from blacking out!",
      examTips: [
        "Words that hint at numbers: 'Starts from rest' means u = 0. 'Comes to rest' / 'stops' means v = 0.",
        "When brakes are applied or motion is opposed, ALWAYS insert a NEGATIVE sign for acceleration (a = -x).",
        "Third equation v² = u² + 2as is the fastest formula when time t is NOT given in the problem!",
      ],
      questions: [
        {
          id: "sc4q6",
          type: "num",
          q: "A bus starting from rest moves with a uniform acceleration of 0.1 m/s² for 2 minutes. Find the speed acquired (in m/s).",
          numAnswer: 12,
          tolerance: 0.1,
          hint: "u = 0, a = 0.1 m/s², t = 2 min = 120 s. v = u + at = 0 + 0.1 × 120 = 12 m/s.",
        },
        {
          id: "sc4q6_b",
          type: "mcq",
          q: "Assertion (A): When an object is thrown vertically upwards, at its highest peak its velocity is zero but its acceleration is 9.8 m/s² downwards.\nReason (R): Acceleration due to gravity acts continuously towards the center of Earth regardless of whether the object is moving up, down, or momentarily at rest.",
          options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true"
          ],
          correctOption: 0,
          hint: "Gravity never shuts off at the top of a trajectory."
        },
        {
          id: "sc4q7",
          type: "num",
          q: "In the above bus problem (u = 0, a = 0.1 m/s², t = 120 s), find the total distance travelled (in meters).",
          numAnswer: 720,
          tolerance: 1,
          hint: "s = ut + ½at² = 0 + ½ × 0.1 × (120)² = 0.05 × 14,400 = 720 m.",
        },
        {
          id: "sc4q6_c",
          type: "num",
          q: "A stone is dropped from the top of a building of height 19.6 m. Calculate its final velocity just before striking the ground (g = 9.8 m/s²):",
          numAnswer: 19.6,
          tolerance: 0.1,
          hint: "v² = u² + 2gh = 0 + 2 × 9.8 × 19.6 = 19.6² ⟹ v = 19.6 m/s."
        },
        {
          id: "sc4q6_d",
          type: "mcq",
          q: "What physical quantity is determined from the slope of a Velocity-Time (v-t) graph?",
          options: ["Speed", "Acceleration", "Distance", "Force"],
          correctOption: 1,
          hint: "Slope = Δv / Δt = Acceleration."
        },
        {
          id: "sc4q6_e",
          type: "mcq",
          q: "What physical quantity is determined from the area enclosed under a Velocity-Time (v-t) graph and the time axis?",
          options: ["Acceleration", "Force", "Magnitude of Displacement", "Momentum"],
          correctOption: 2,
          hint: "Area = velocity × time = displacement."
        },
        {
          id: "sc4q8",
          type: "num",
          q: "A racing car has a uniform acceleration of 4 m/s². What distance will it cover in 10 s after start?",
          numAnswer: 200,
          tolerance: 1,
          hint: "u = 0, a = 4 m/s², t = 10 s. s = ut + ½at² = 0 + ½ × 4 × 100 = 200 m.",
        },
        {
          id: "sc4q6_f",
          type: "num",
          q: "A scooter moving at 54 km/h (15 m/s) is brought to rest in 5 s by applying brakes. Calculate the magnitude of deceleration (in m/s²):",
          numAnswer: 3,
          tolerance: 0.1,
          hint: "a = (v - u) / t = (0 - 15) / 5 = -3 m/s². Magnitude = 3 m/s²."
        }
      ],
    },
    {
      id: "s4",
      title: "Uniform Circular Motion & Graphical Derivations of Equations of Motion",
      content:
        "When an object travels along a circular path with constant speed, its direction of motion changes continuously at every point. Since velocity is a vector, any change in direction means velocity is changing. Hence, uniform circular motion is an accelerated motion. In this section, we derive the three equations of motion graphically and examine the mechanics of circular paths.",
      realWorldScenario: {
        emoji: "🛰️",
        title: "Whirling a Stone on a String & Satellites in Orbit",
        description:
          "Whirl a stone tied to a string in a circle. If the string suddenly snaps, the stone does not fly outward from the center; it shoots straight along a line tangential to the circle at that exact instant!",
        connection:
          "Tangential inertia carries the stone forward. The inward string tension provided the necessary centripetal force to keep curving the velocity vector.",
      },
      contentBlocks: [
        "Graphical Derivation of First Equation (v = u + at): On a velocity-time graph with initial velocity u at t=0 and final velocity v at time t, the slope of the line equals acceleration: a = Change in velocity / Time = (v - u) / t. Rearranging gives: v = u + at.",
        "Graphical Derivation of Second Equation (s = ut + ½at²): The distance s travelled equals the area under the v-t graph, which is the sum of rectangle OACD (area = u × t) and triangle ABC (area = ½ × t × (v - u)). Substituting (v - u) = at gives: s = ut + ½at².",
        "Graphical Derivation of Third Equation (v² - u² = 2as): The area under the v-t curve can also be calculated as the area of a trapezium: s = ½ × (Sum of parallel sides) × (Height) = ½ × (u + v) × t. Substituting t = (v - u) / a gives s = (v² - u²) / (2a) ⟹ v² - u² = 2as.",
        "Uniform Circular Motion: When an object moves in a circle of radius r with constant speed, the distance covered in one revolution is the circumference 2πr. If time taken for one complete revolution is T, the speed is given by: v = 2πr / T.",
        "Examples of Uniform Circular Motion: The revolution of Earth around the Sun, the motion of the Moon and artificial communication satellites around Earth, a cyclist negotiating a circular track at constant speed, and the tip of the seconds hand of a watch.",
      ],
      keyConcepts: [
        {
          term: "Uniform Circular Motion",
          definition: "The motion of an object along a circular trajectory at a constant linear speed.",
        },
        {
          term: "Centripetal Acceleration",
          definition: "The inward acceleration directed towards the center of a circular path that continuously changes the direction of the velocity vector.",
        },
        {
          term: "Tangential Velocity",
          definition: "The instantaneous linear velocity vector directed tangent to the circular path at any given point.",
        },
        {
          term: "Circumference Speed Formula",
          definition: "Linear speed in circular motion: v = 2πr / T, where r is radius and T is time period of one revolution.",
        },
      ],
      formulas: [
        {
          label: "Circular Speed Formula",
          latex: "v = \\frac{2\\pi r}{T}",
          explanation: "r = radius of circular track, T = time taken for one full revolution.",
          unit: "m/s",
        },
        {
          label: "First Equation (Graphical)",
          latex: "v = u + at",
          explanation: "Slope of v-t curve",
        },
        {
          label: "Second Equation (Graphical)",
          latex: "s = ut + \\frac{1}{2}at^2",
          explanation: "Area of rectangle + triangle under v-t graph",
        },
        {
          label: "Third Equation (Graphical)",
          latex: "v^2 - u^2 = 2as",
          explanation: "Area of trapezium under v-t graph",
        },
      ],
      workedExamples: [
        {
          title: "NCERT Example 8.8: Circular Orbit of an Artificial Satellite",
          problem:
            "An artificial satellite is moving in a circular orbit of radius 42,250 km. Calculate its speed (in km/s) if it takes 24 hours to revolve around the Earth.",
          given: [
            "Radius of circular orbit r = 42,250 km",
            "Time period T = 24 hours = 24 × 3600 s = 86,400 seconds",
          ],
          formulaUsed: "v = \\frac{2\\pi r}{T}",
          solutionSteps: [
            "Calculate circumference of orbit: 2 × π × r = 2 × 3.1416 × 42,250 km = 265,464 km.",
            "Calculate speed v = Distance / Time = 265,464 km / 86,400 s = 3.07 km/s.",
          ],
          finalAnswer: "Speed of satellite = 3.07 km/s (or ~11,060 km/h).",
        },
      ],
      activities: [
        {
          number: "8.11",
          title: "Demonstrating Tangential Release in Circular Motion",
          materials: ["Piece of string (1 m)", "Small stone or eraser"],
          steps: [
            "Tie the stone securely to one end of the string.",
            "Hold the other end and whirl the stone in a horizontal circle overhead at steady speed.",
            "Release the string suddenly and observe the path of the stone.",
          ],
          observation: "The stone flies off instantly in a straight line along the tangent to the circular path at the exact point of release.",
          conclusion: "In circular motion, the velocity vector at any point points along the tangent to the circle."
        }
      ],
      didYouKnow: "Geostationary satellites orbit at exactly 35,786 km above Earth's equator with an orbital period of exactly 23 hours 56 minutes 4 seconds (one sidereal day). Because their orbital period matches Earth's rotation, they appear completely frozen in the sky, enabling satellite TV dishes to stay pointed at one fixed spot!",
      examTips: [
        "Why is uniform circular motion considered accelerated even when speed is constant? Because velocity is a vector quantity, and its DIRECTION changes continuously at every point of the circle!",
        "When calculating satellite speed: Make sure to convert hours to seconds if speed is required in km/s (24 h = 86,400 s)."
      ],
      questions: [
        {
          id: "sc4q9_a",
          type: "mcq",
          q: "Assertion (A): Motion of the Moon revolving around the Earth is an accelerated motion.\nReason (R): Even though the speed of the Moon is approximately constant, the direction of its motion changes at every instant along the circular orbit.",
          options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true"
          ],
          correctOption: 0,
          hint: "Continuous change in direction requires centripetal acceleration."
        },
        {
          id: "sc4q9_b",
          type: "num",
          q: "An artificial satellite moves in a circular orbit of radius 42,250 km and takes 24 hours (86,400 s) to complete one orbit. Calculate its speed in km/s (round to 2 decimal places):",
          numAnswer: 3.07,
          tolerance: 0.05,
          hint: "v = 2πr / T = (2 × 3.1416 × 42,250) / 86,400 = 3.07 km/s."
        },
        {
          id: "sc4q9_c",
          type: "mcq",
          q: "When a stone whirled in a horizontal circle on a string is released, it flies off in which direction?",
          options: [
            "Radially inward toward the center",
            "Radially outward away from the center",
            "Tangentially to the circular path at the point of release",
            "Spiraling upward"
          ],
          correctOption: 2,
          hint: "Inertia maintains the instantaneous tangential velocity."
        },
        {
          id: "sc4q9_d",
          type: "num",
          q: "A cyclist goes around a circular track of radius 70 m in 44 seconds. What is his speed in m/s? (Use π = 22/7)",
          numAnswer: 10,
          tolerance: 0.1,
          hint: "v = 2πr / T = 2 × (22/7) × 70 / 44 = 440 / 44 = 10 m/s."
        },
        {
          id: "sc4q9_e",
          type: "short",
          q: "Why is uniform circular motion called accelerated motion even when the speed of the object remains constant?",
          answer: "Velocity is a vector quantity having both magnitude (speed) and direction. In circular motion, although the magnitude remains constant, the direction of motion changes continuously at every point. This continuous rate of change of direction produces centripetal acceleration.",
          hint: "Mention direction change and centripetal acceleration."
        },
        {
          id: "sc4q9_f",
          type: "mcq",
          q: "Which of the following is NOT an example of uniform circular motion?",
          options: [
            "Motion of the tip of the seconds hand of a watch",
            "A satellite orbiting Earth at constant altitude",
            "A car accelerating down a straight highway",
            "A stone whirled on a string at constant rpm"
          ],
          correctOption: 2,
          hint: "A car accelerating down a straight road is linear motion."
        }
      ]
    }
  ],
  keyPoints: [
    "Distance is scalar (total path length); displacement is vector (shortest straight line from initial to final position).",
    "Magnitude of displacement is always less than or equal to distance (|s| ≤ d).",
    "Speed = distance/time (scalar); velocity = displacement/time with direction (vector).",
    "Average speed = Total distance / Total time.",
    "Acceleration a = (v - u) / t. SI unit: m/s².",
    "Three equations of uniform acceleration: (1) v = u + at, (2) s = ut + ½at², (3) v² = u² + 2as.",
  ],
  ncertExercises: [
    {
      id: "sc4e1",
      type: "short",
      q: "Distinguish clearly between speed and velocity with two differences.",
      answer:
        "1. Speed is a scalar quantity (has magnitude only); velocity is a vector quantity (has both magnitude and direction). 2. Speed is always positive or zero; velocity can be positive, zero, or negative.",
    },
    {
      id: "sc4e2",
      type: "num",
      q: "A train starting from rest attains a velocity of 72 km/h in 5 minutes. Assuming uniform acceleration, find its acceleration in m/s² (round to 2 decimal places).",
      numAnswer: 0.07,
      tolerance: 0.02,
      hint: "v = 20 m/s, u = 0, t = 300 s. a = (20 - 0)/300 = 1/15 ≈ 0.067 m/s².",
    },
    {
      id: "sc4e3",
      type: "num",
      q: "A car accelerates uniformly from 18 km/h to 36 km/h in 5 s. Calculate the distance (in meters) covered by the car in that time.",
      numAnswer: 37.5,
      tolerance: 0.5,
      hint: "u = 18 × 5/18 = 5 m/s, v = 36 × 5/18 = 10 m/s, t = 5 s. a = (10-5)/5 = 1 m/s². s = ut + ½at² = 5×5 + ½×1×25 = 25 + 12.5 = 37.5 m.",
    },
  ],
};

export default ch4;
