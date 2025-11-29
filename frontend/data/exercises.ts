export type ExerciseDetail = {
  id: string;
  name: string;
  description: string;
  muscleGroups: {
    primary: string[];
    secondary: string[];
  };
  difficulty: "Easy" | "Moderate" | "Hard";
  equipment: string;
  exerciseType: string;
  experienceLevel: string;
  duration: string;
  sets: string;
  reps: string;
  demoVideoLength: string;
  quickStats: {
    duration: string;
    sets: string;
    reps: string;
    rest: string;
  };
  instructions: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  commonMistakes: Array<{
    title: string;
    description: string;
  }>;
  breathing: {
    pattern: string[];
    importance: string[];
  };
  variations: string[];
  proTips: string[];
  tags: string[];
};

export const exercisesDatabase: Record<string, ExerciseDetail> = {
  "chest-1": {
    id: "chest-1",
    name: "Barbell Bench Press",
    description: "A classic upper body exercise that builds chest, shoulder, and tricep strength using a barbell.",
    muscleGroups: {
      primary: ["Chest (Pectoralis Major)", "Shoulders (Anterior Deltoids)", "Triceps"],
      secondary: ["Core (Abdominals)", "Lower Back", "Forearms"],
    },
    difficulty: "Hard",
    equipment: "Barbell, Bench",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "15 min",
    sets: "4",
    reps: "8-10",
    demoVideoLength: "3:45",
    quickStats: {
      duration: "30-45 seconds/set",
      sets: "4 recommended",
      reps: "8-10 per set",
      rest: "90-120 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Lie flat on the bench with your feet firmly on the floor. Grip the barbell slightly wider than shoulder-width. Keep your shoulders back and chest up.",
      },
      {
        step: 2,
        title: "Lower the Barbell",
        description: "Lower the barbell in a controlled manner until it touches your chest. Keep your elbows at a 45-degree angle to your body.",
      },
      {
        step: 3,
        title: "Push the Barbell Up",
        description: "Drive the barbell upward by pushing through your chest and shoulders. Exhale as you press up. Do not lock your elbows fully.",
      },
      {
        step: 4,
        title: "Repeat",
        description: "Perform 8-10 repetitions with controlled movement. Rest for 90-120 seconds between sets.",
      },
    ],
    commonMistakes: [
      {
        title: "Elbows Too Wide",
        description: "Flaring elbows excessively can strain shoulders. Keep them at 45 degrees for optimal chest engagement and shoulder safety.",
      },
      {
        title: "Bouncing the Bar",
        description: "Using momentum reduces muscle engagement. Lower and raise the bar with controlled, steady movements.",
      },
      {
        title: "Incomplete Range of Motion",
        description: "Not bringing the bar to chest level reduces effectiveness. Go down until the bar lightly touches your chest.",
      },
      {
        title: "Lifting Feet Off Floor",
        description: "This reduces stability and reduces power transfer. Keep feet firmly planted on the floor.",
      },
      {
        title: "Arching Back Too Much",
        description: "While some back arch is normal, excessive arching reduces chest engagement and strains the lower back.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - Breathe in as you lower the barbell (eccentric phase)",
        "Exhale - Breathe out as you push the barbell up (concentric phase)",
        "Hold - Brief pause at the top for 1 second",
      ],
      importance: [
        "Prevents dizziness and loss of consciousness",
        "Maintains stable oxygen levels in your muscles",
        "Improves core stability during the movement",
        "Enhances overall exercise performance",
      ],
    },
    variations: [
      "Dumbbell Bench Press",
      "Incline Bench Press",
      "Decline Bench Press",
      "Machine Chest Press",
    ],
    proTips: [
      "Warm up with light weights before your working sets",
      "Keep your shoulder blades retracted throughout the movement",
      "Use a spotter for heavy weights",
      "Maintain consistent grip width across all sets",
      "Focus on the mind-muscle connection with your chest",
    ],
    tags: ["chest", "strength", "barbell", "compound"],
  },
  "chest-2": {
    id: "chest-2",
    name: "Incline Dumbbell Press",
    description: "An upper chest focused exercise using dumbbells on an inclined bench to target the upper pectorals and front deltoids.",
    muscleGroups: {
      primary: ["Chest (Upper Pectoralis)", "Shoulders (Anterior Deltoids)", "Triceps"],
      secondary: ["Core", "Forearms"],
    },
    difficulty: "Hard",
    equipment: "Dumbbells, Incline Bench",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "12 min",
    sets: "3",
    reps: "10-12",
    demoVideoLength: "3:15",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "3 recommended",
      reps: "10-12 per set",
      rest: "60-90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Set Up Incline Bench",
        description: "Adjust the bench to a 30-45 degree incline. Sit back firmly with your feet on the floor.",
      },
      {
        step: 2,
        title: "Grip Dumbbells",
        description: "Hold dumbbells at shoulder height with a neutral grip. Palms facing forward.",
      },
      {
        step: 3,
        title: "Press Upward",
        description: "Press the dumbbells upward and slightly inward. Exhale as you press. Stop just before locking elbows.",
      },
      {
        step: 4,
        title: "Lower with Control",
        description: "Lower the dumbbells back to shoulder height with control. Inhale during the descent.",
      },
    ],
    commonMistakes: [
      {
        title: "Too Steep Incline",
        description: "Angles above 45 degrees shift focus to shoulders. Keep between 30-45 degrees for upper chest focus.",
      },
      {
        title: "Rushing the Movement",
        description: "Fast movements reduce muscle engagement. Take 2-3 seconds to lower and 1-2 seconds to press.",
      },
      {
        title: "Dumbbells Too Close",
        description: "Pressing dumbbells too close together reduces chest engagement. Maintain shoulder-width spacing.",
      },
      {
        title: "Elbows Too High",
        description: "Lifting elbows shifts stress to shoulders. Keep them at a 45-degree angle to your body.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - Breathe in as you lower the dumbbells",
        "Exhale - Breathe out as you press upward",
        "Pause - Brief hold at the top",
      ],
      importance: [
        "Maintains core stability",
        "Prevents breath-holding",
        "Improves oxygen delivery",
        "Enhances muscle contraction",
      ],
    },
    variations: [
      "Flat Dumbbell Press",
      "Decline Dumbbell Press",
      "Machine Incline Press",
      "Barbell Incline Press",
    ],
    proTips: [
      "Start with lighter weights than flat bench press",
      "Use a full range of motion",
      "Keep your back against the bench",
      "Engage your core throughout",
    ],
    tags: ["chest", "upper-chest", "dumbbells", "incline"],
  },
  "chest-3": {
    id: "chest-3",
    name: "Cable Flyes",
    description: "An isolation exercise using cable machines to target chest muscles with constant tension throughout the movement.",
    muscleGroups: {
      primary: ["Chest (Pectoralis Major)", "Chest (Pectoralis Minor)"],
      secondary: ["Shoulders (Anterior Deltoids)", "Biceps"],
    },
    difficulty: "Moderate",
    equipment: "Cable Machine",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner+",
    duration: "10 min",
    sets: "3",
    reps: "12-15",
    demoVideoLength: "2:30",
    quickStats: {
      duration: "25-35 seconds/set",
      sets: "3 recommended",
      reps: "12-15 per set",
      rest: "45-60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Set Up Machine",
        description: "Set cables to chest height. Stand in the middle with feet shoulder-width apart.",
      },
      {
        step: 2,
        title: "Grab Handles",
        description: "Grab the cable handles with a neutral grip. Maintain a slight bend in your elbows.",
      },
      {
        step: 3,
        title: "Bring Handles Together",
        description: "Pull the handles toward each other in an arc motion. Exhale as you bring hands together.",
      },
      {
        step: 4,
        title: "Control the Return",
        description: "Slowly return to starting position with control. Feel the stretch in your chest.",
      },
    ],
    commonMistakes: [
      {
        title: "Locking Elbows",
        description: "Straight elbows reduce chest engagement and strain joints. Maintain a slight bend throughout.",
      },
      {
        title: "Using Too Much Weight",
        description: "Heavy weight forces poor form. Use moderate weight to maintain control.",
      },
      {
        title: "Not Going Full Range",
        description: "Partial movements reduce effectiveness. Go fully open and bring hands together.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you bring hands together",
        "Inhale - As you return to starting position",
      ],
      importance: [
        "Maintains core engagement",
        "Improves muscle contraction",
        "Prevents dizziness",
      ],
    },
    variations: [
      "Machine Flyes",
      "Dumbbell Flyes",
      "Resistance Band Flyes",
    ],
    proTips: [
      "This is an isolation exercise - use after compound movements",
      "Maintain constant tension on the cable",
      "Control is more important than weight",
      "Feel the chest muscle working",
    ],
    tags: ["chest", "cable", "isolation", "flyes"],
  },
  "chest-4": {
    id: "chest-4",
    name: "Push-ups (Weighted)",
    description: "An advanced variation of push-ups using added weight to increase resistance and build chest, shoulder, and tricep strength.",
    muscleGroups: {
      primary: ["Chest (Pectoralis Major)", "Shoulders (Anterior Deltoids)", "Triceps"],
      secondary: ["Core (Abdominals)", "Lower Back", "Forearms"],
    },
    difficulty: "Moderate",
    equipment: "Weight Plate or Vest",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "15 min",
    sets: "3",
    reps: "12-15",
    demoVideoLength: "3:00",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "3 recommended",
      reps: "12-15 per set",
      rest: "60-90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Add Weight",
        description: "Place a weight plate on your back or wear a weight vest. Start with light weight.",
      },
      {
        step: 2,
        title: "Starting Position",
        description: "Assume standard push-up position with hands slightly wider than shoulder-width.",
      },
      {
        step: 3,
        title: "Lower Your Body",
        description: "Lower your body until your chest nearly touches the ground. Maintain a straight line.",
      },
      {
        step: 4,
        title: "Push Back Up",
        description: "Push through your hands to return to starting position. Keep core engaged throughout.",
      },
    ],
    commonMistakes: [
      {
        title: "Too Much Weight Too Soon",
        description: "Excessive weight compromises form. Increase gradually and maintain proper technique.",
      },
      {
        title: "Sagging Hips",
        description: "Hips should stay level with shoulders and heels. Engage your core to prevent sagging.",
      },
      {
        title: "Elbows Flaring Out",
        description: "Keep elbows at 45 degrees to your body for optimal chest engagement and shoulder health.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - As you lower your body",
        "Exhale - As you push back up",
      ],
      importance: [
        "Maintains core stability",
        "Prevents breath-holding",
        "Enhances performance",
      ],
    },
    variations: [
      "Standard Push-ups",
      "Diamond Push-ups",
      "Decline Push-ups",
      "One-Arm Push-ups",
    ],
    proTips: [
      "Start with 5-10 pound weight plates",
      "Maintain perfect form throughout",
      "Use a weight vest for even distribution",
      "Never sacrifice form for weight",
    ],
    tags: ["chest", "bodyweight", "compound"],
  },
  "chest-5": {
    id: "chest-5",
    name: "Machine Chest Press",
    description: "A controlled chest exercise using a machine to target the chest muscles with stable, guided movement.",
    muscleGroups: {
      primary: ["Chest (Pectoralis Major)", "Shoulders (Anterior Deltoids)", "Triceps"],
      secondary: ["Core"],
    },
    difficulty: "Easy",
    equipment: "Chest Press Machine",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner",
    duration: "12 min",
    sets: "3",
    reps: "10-12",
    demoVideoLength: "2:45",
    quickStats: {
      duration: "25-35 seconds/set",
      sets: "3 recommended",
      reps: "10-12 per set",
      rest: "60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Adjust Seat",
        description: "Adjust the seat so handles are at mid-chest level.",
      },
      {
        step: 2,
        title: "Grab Handles",
        description: "Grip the handles with hands at shoulder height.",
      },
      {
        step: 3,
        title: "Press Forward",
        description: "Push the handles forward in a controlled motion. Exhale as you press.",
      },
      {
        step: 4,
        title: "Return to Start",
        description: "Slowly bring handles back to starting position. Inhale during the return.",
      },
    ],
    commonMistakes: [
      {
        title: "Improper Seat Height",
        description: "Incorrect seat position changes muscle engagement. Adjust so handles align with mid-chest.",
      },
      {
        title: "Jerky Movements",
        description: "Smooth, controlled movements are better than fast, jerky ones.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you press forward",
        "Inhale - As you return to start",
      ],
      importance: [
        "Maintains steady oxygen flow",
        "Improves control",
      ],
    },
    variations: [
      "Barbell Bench Press",
      "Dumbbell Bench Press",
    ],
    proTips: [
      "Great exercise for beginners",
      "Stable movement path makes it easy to learn",
      "Perfect for warming up",
    ],
    tags: ["chest", "machine", "beginner"],
  },
  "chest-6": {
    id: "chest-6",
    name: "Dips",
    description: "A compound bodyweight exercise using parallel bars or a dip station to build chest, tricep, and shoulder strength.",
    muscleGroups: {
      primary: ["Chest (Pectoralis Major)", "Triceps", "Shoulders (Anterior Deltoids)"],
      secondary: ["Lats", "Core"],
    },
    difficulty: "Hard",
    equipment: "Dip Station or Parallel Bars",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "15 min",
    sets: "4",
    reps: "8-12",
    demoVideoLength: "3:30",
    quickStats: {
      duration: "30-45 seconds/set",
      sets: "4 recommended",
      reps: "8-12 per set",
      rest: "90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Grip the Bars",
        description: "Grip the bars firmly with hands shoulder-width apart.",
      },
      {
        step: 2,
        title: "Jump or Climb Up",
        description: "Use your arms to lift yourself so your elbows are at 90 degrees.",
      },
      {
        step: 3,
        title: "Lower Your Body",
        description: "Slowly lower your body by bending your elbows. Keep your body upright for chest focus.",
      },
      {
        step: 4,
        title: "Push Back Up",
        description: "Push through your hands to return to starting position. Do not lock elbows fully.",
      },
    ],
    commonMistakes: [
      {
        title: "Leaning Too Far Forward",
        description: "Forward lean shifts focus to triceps. Stay relatively upright for chest engagement.",
      },
      {
        title: "Partial Range of Motion",
        description: "Go down until your shoulders are below elbow height for full muscle engagement.",
      },
      {
        title: "Bouncing",
        description: "Avoid bouncing at the bottom. Use controlled, steady movements.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - As you lower your body",
        "Exhale - As you push back up",
      ],
      importance: [
        "Prevents breath-holding",
        "Improves core stability",
        "Enhances power output",
      ],
    },
    variations: [
      "Assisted Dips",
      "Decline Dips",
      "Machine Dips",
    ],
    proTips: [
      "Use an assisted dip machine if needed",
      "Add weight using a dip belt as you progress",
      "Maintain control throughout the movement",
      "Great compound exercise for upper body",
    ],
    tags: ["chest", "triceps", "compound", "dips"],
  },
  "biceps-1": {
    id: "biceps-1",
    name: "Barbell Curls",
    description: "A classic arm exercise using a barbell to isolate and build bicep strength and size.",
    muscleGroups: {
      primary: ["Biceps (Biceps Brachii)"],
      secondary: ["Forearms (Brachialis)", "Back"],
    },
    difficulty: "Hard",
    equipment: "Barbell",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "15 min",
    sets: "4",
    reps: "8-10",
    demoVideoLength: "3:20",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "4 recommended",
      reps: "8-10 per set",
      rest: "60-90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Stand with feet shoulder-width apart. Hold the barbell with an underhand grip (palms facing forward), slightly narrower than shoulder-width.",
      },
      {
        step: 2,
        title: "Curl the Weight",
        description: "Bend your elbows and curl the barbell upward toward your shoulders. Keep your elbows stationary at your sides.",
      },
      {
        step: 3,
        title: "Peak Contraction",
        description: "Squeeze your biceps at the top of the movement. Exhale as you reach the peak.",
      },
      {
        step: 4,
        title: "Lower with Control",
        description: "Slowly lower the barbell back to starting position. Inhale during the descent. Do not let the bar drop.",
      },
    ],
    commonMistakes: [
      {
        title: "Moving Your Elbows",
        description: "Elbows should stay fixed at your sides. Moving them reduces bicep engagement and uses momentum.",
      },
      {
        title: "Using Too Much Weight",
        description: "Heavy weight causes poor form and momentum-based movement. Use moderate weight for controlled reps.",
      },
      {
        title: "Partial Range of Motion",
        description: "Curl all the way up to your shoulders and fully extend at the bottom for maximum effectiveness.",
      },
      {
        title: "Swinging the Weight",
        description: "Avoid using your back or momentum. Let your biceps do the work with controlled movements.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - At the starting position",
        "Exhale - As you curl the weight up",
        "Pause - Brief hold at the top",
        "Inhale - As you lower the weight",
      ],
      importance: [
        "Prevents breath-holding and dizziness",
        "Maintains steady core engagement",
        "Improves muscle contraction quality",
        "Enhances overall performance",
      ],
    },
    variations: [
      "Dumbbell Curls",
      "Cable Curls",
      "Machine Curls",
      "Hammer Curls",
      "Preacher Curls",
    ],
    proTips: [
      "Keep your torso upright and avoid leaning back",
      "Squeeze your biceps at the top of each rep",
      "Use a full range of motion from full extension to full contraction",
      "Slow and controlled movements work better than fast ones",
      "Consider using lifting straps to prevent grip fatigue",
    ],
    tags: ["biceps", "arms", "barbell", "isolation"],
  },
  "biceps-2": {
    id: "biceps-2",
    name: "Dumbbell Curls",
    description: "A versatile arm exercise using dumbbells that allows for greater range of motion and individual arm development.",
    muscleGroups: {
      primary: ["Biceps (Biceps Brachii)"],
      secondary: ["Forearms (Brachialis)", "Shoulders"],
    },
    difficulty: "Moderate",
    equipment: "Dumbbells",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner+",
    duration: "12 min",
    sets: "3",
    reps: "10-12",
    demoVideoLength: "3:00",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "3 recommended",
      reps: "10-12 per set",
      rest: "60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Stand with feet shoulder-width apart, holding dumbbells at your sides with palms facing forward.",
      },
      {
        step: 2,
        title: "Curl the Dumbbells",
        description: "Bend your elbows and curl the dumbbells toward your shoulders. Keep elbows stationary.",
      },
      {
        step: 3,
        title: "Squeeze at Top",
        description: "Squeeze your biceps hard at the top of the movement. Hold for a brief moment.",
      },
      {
        step: 4,
        title: "Lower Controlled",
        description: "Slowly lower the dumbbells back to starting position with full control.",
      },
    ],
    commonMistakes: [
      {
        title: "Uneven Weight Distribution",
        description: "Use equal weight on both sides. Uneven loading can cause muscular imbalances.",
      },
      {
        title: "Partial Reps",
        description: "Go from full extension to full contraction for maximum muscle engagement.",
      },
      {
        title: "Elbow Movement",
        description: "Keep elbows locked in position. Movement reduces bicep isolation.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - At starting position",
        "Exhale - As you curl up",
        "Hold - Brief pause at top",
        "Inhale - As you lower down",
      ],
      importance: [
        "Maintains oxygen supply to muscles",
        "Prevents buildup of pressure",
        "Improves muscle contraction",
      ],
    },
    variations: [
      "Alternating Dumbbell Curls",
      "Hammer Curls",
      "Incline Dumbbell Curls",
      "Decline Dumbbell Curls",
    ],
    proTips: [
      "Maintain a neutral spine throughout",
      "Control the eccentric (lowering) portion for maximum gains",
      "Supinate your wrists slightly for better bicep activation",
      "Keep your shoulders relaxed and down",
    ],
    tags: ["biceps", "arms", "dumbbells", "isolation"],
  },
  "biceps-3": {
    id: "biceps-3",
    name: "Cable Curls",
    description: "An isolation exercise using cable machines that provides constant tension throughout the entire range of motion.",
    muscleGroups: {
      primary: ["Biceps (Biceps Brachii)"],
      secondary: ["Forearms"],
    },
    difficulty: "Moderate",
    equipment: "Cable Machine",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner+",
    duration: "10 min",
    sets: "3",
    reps: "12-15",
    demoVideoLength: "2:45",
    quickStats: {
      duration: "25-35 seconds/set",
      sets: "3 recommended",
      reps: "12-15 per set",
      rest: "45-60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Set Up Cable",
        description: "Set the cable pulley at the lowest position. Attach a straight bar or rope handle.",
      },
      {
        step: 2,
        title: "Grip the Handle",
        description: "Stand facing the machine with feet shoulder-width apart. Grip the handle with underhand grip.",
      },
      {
        step: 3,
        title: "Curl Upward",
        description: "Curl the handle toward your shoulders while keeping elbows stationary.",
      },
      {
        step: 4,
        title: "Lower with Tension",
        description: "Slowly lower back to starting position. Maintain tension throughout.",
      },
    ],
    commonMistakes: [
      {
        title: "Jerky Movements",
        description: "Use smooth, controlled movements. Jerky motions reduce effectiveness and risk injury.",
      },
      {
        title: "Too Much Weight",
        description: "Cable exercises require control. Use moderate weight for proper form.",
      },
      {
        title: "Incomplete Range",
        description: "Go fully extended and contract fully for best results.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you curl up",
        "Inhale - As you lower down",
      ],
      importance: [
        "Constant tension improves muscle engagement",
        "Prevents breath-holding",
        "Enhances muscle pump",
      ],
    },
    variations: [
      "Rope Cable Curls",
      "Single Arm Cable Curls",
      "High Cable Curls",
    ],
    proTips: [
      "Maintain constant tension on the cable",
      "Use a full range of motion",
      "Perfect for higher rep ranges",
      "Great finisher exercise after compound movements",
    ],
    tags: ["biceps", "cable", "isolation", "pump"],
  },
  "biceps-4": {
    id: "biceps-4",
    name: "Hammer Curls",
    description: "A neutral grip curl variation that targets both biceps and brachialis muscles for increased arm size.",
    muscleGroups: {
      primary: ["Biceps (Biceps Brachii)", "Brachialis"],
      secondary: ["Forearms (Brachioradialis)"],
    },
    difficulty: "Moderate",
    equipment: "Dumbbells",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner+",
    duration: "12 min",
    sets: "3",
    reps: "10-12",
    demoVideoLength: "2:50",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "3 recommended",
      reps: "10-12 per set",
      rest: "60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Stand with feet shoulder-width apart holding dumbbells at your sides, palms facing inward (neutral grip).",
      },
      {
        step: 2,
        title: "Curl the Dumbbells",
        description: "Curl dumbbells upward while maintaining the neutral grip. Keep elbows at your sides.",
      },
      {
        step: 3,
        title: "Peak Contraction",
        description: "Squeeze at the top. The motion should be like you're squeezing a hammer.",
      },
      {
        step: 4,
        title: "Lower Controlled",
        description: "Lower dumbbells back to starting position with control.",
      },
    ],
    commonMistakes: [
      {
        title: "Twisting Your Wrists",
        description: "Maintain neutral grip throughout. Wrist rotation reduces brachialis engagement.",
      },
      {
        title: "Moving Your Elbows",
        description: "Keep elbows locked in position at your sides.",
      },
      {
        title: "Using Momentum",
        description: "Slow and controlled reps are more effective than fast, bouncy movements.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you curl up",
        "Inhale - As you lower down",
      ],
      importance: [
        "Improves brachialis activation",
        "Maintains core stability",
        "Prevents dizziness",
      ],
    },
    variations: [
      "Alternating Hammer Curls",
      "Seated Hammer Curls",
      "Incline Hammer Curls",
    ],
    proTips: [
      "This exercise is great for overall arm development",
      "Neutral grip provides a different stimulus than traditional curls",
      "Perfect for preventing repetitive strain injuries",
      "Excellent for functional strength",
    ],
    tags: ["biceps", "forearms", "dumbbells", "neutral-grip"],
  },
  "biceps-5": {
    id: "biceps-5",
    name: "Machine Bicep Curl",
    description: "A beginner-friendly machine exercise that provides stability and consistent resistance throughout the movement.",
    muscleGroups: {
      primary: ["Biceps (Biceps Brachii)"],
      secondary: ["Forearms"],
    },
    difficulty: "Easy",
    equipment: "Bicep Curl Machine",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner",
    duration: "10 min",
    sets: "3",
    reps: "12-15",
    demoVideoLength: "2:30",
    quickStats: {
      duration: "25-35 seconds/set",
      sets: "3 recommended",
      reps: "12-15 per set",
      rest: "45-60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Adjust Machine",
        description: "Adjust the seat so your arms align with the pivot point of the machine.",
      },
      {
        step: 2,
        title: "Grip the Handles",
        description: "Grab the handles with an underhand grip (palms facing up).",
      },
      {
        step: 3,
        title: "Curl Upward",
        description: "Curl the handles toward your shoulders. The machine guides the movement.",
      },
      {
        step: 4,
        title: "Lower Slowly",
        description: "Lower the handles back to starting position with control.",
      },
    ],
    commonMistakes: [
      {
        title: "Incorrect Seat Height",
        description: "Ensure arms align with the machine's pivot point for proper form.",
      },
      {
        title: "Jerky Movements",
        description: "Use smooth, controlled motions throughout.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you curl up",
        "Inhale - As you lower down",
      ],
      importance: [
        "Maintains stability",
        "Improves control",
      ],
    },
    variations: [
      "Single Arm Machine Curls",
    ],
    proTips: [
      "Perfect exercise for beginners to learn proper form",
      "Great for isolation and building a mind-muscle connection",
      "Ideal for warming up before heavier compound movements",
      "Allows consistent resistance throughout the range",
    ],
    tags: ["biceps", "machine", "beginner", "isolation"],
  },
  "biceps-6": {
    id: "biceps-6",
    name: "EZ Bar Curls",
    description: "A curl variation using an EZ curl bar that reduces wrist strain while maintaining excellent bicep engagement.",
    muscleGroups: {
      primary: ["Biceps (Biceps Brachii)"],
      secondary: ["Forearms"],
    },
    difficulty: "Hard",
    equipment: "EZ Curl Bar",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "15 min",
    sets: "4",
    reps: "8-12",
    demoVideoLength: "3:10",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "4 recommended",
      reps: "8-12 per set",
      rest: "90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Stand with feet shoulder-width apart. Hold the EZ bar with hands on the angled grips, slightly narrower than shoulder-width.",
      },
      {
        step: 2,
        title: "Curl the Bar",
        description: "Bend your elbows and curl the bar upward. The angled grip reduces wrist strain.",
      },
      {
        step: 3,
        title: "Squeeze at Top",
        description: "Squeeze your biceps at the peak of the movement.",
      },
      {
        step: 4,
        title: "Lower Controlled",
        description: "Slowly lower the bar back to starting position.",
      },
    ],
    commonMistakes: [
      {
        title: "Wrong Grip Width",
        description: "Use the inner grips of the EZ bar for proper form and reduced wrist strain.",
      },
      {
        title: "Swinging Weight",
        description: "Use controlled movements. Avoid momentum-based reps.",
      },
      {
        title: "Incomplete Reps",
        description: "Full range of motion is important for maximum gains.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - At starting position",
        "Exhale - As you curl up",
        "Inhale - As you lower down",
      ],
      importance: [
        "Reduces wrist strain during the movement",
        "Maintains proper breathing patterns",
        "Improves muscle engagement",
      ],
    },
    variations: [
      "Barbell Curls",
      "EZ Bar Preacher Curls",
      "Decline EZ Bar Curls",
    ],
    proTips: [
      "EZ bar is gentler on the wrists than straight bars",
      "Great for heavier weight training",
      "Focus on controlled movements",
      "Excellent for building mass and strength",
    ],
    tags: ["biceps", "arms", "ez-bar", "strength"],
  },
  "fatburn-1": {
    id: "fatburn-1",
    name: "Jump Rope",
    description: "A high-intensity cardio exercise that burns calories, improves coordination, and builds endurance.",
    muscleGroups: {
      primary: ["Full Body", "Calves", "Shoulders"],
      secondary: ["Forearms", "Core"],
    },
    difficulty: "Hard",
    equipment: "Jump Rope",
    exerciseType: "Cardio",
    experienceLevel: "Beginner+",
    duration: "15 min",
    sets: "3",
    reps: "3 min each",
    demoVideoLength: "2:45",
    quickStats: {
      duration: "3 minutes/set",
      sets: "3 recommended",
      reps: "3 minutes continuous",
      rest: "1-2 minutes",
    },
    instructions: [
      {
        step: 1,
        title: "Choose Proper Length",
        description: "Stand on the rope. The handles should reach approximately to your armpits.",
      },
      {
        step: 2,
        title: "Starting Position",
        description: "Hold handles loosely at waist height, elbows bent at 90 degrees.",
      },
      {
        step: 3,
        title: "Begin Jumping",
        description: "Jump on the balls of your feet. Rotate the rope with your wrists, not your arms.",
      },
      {
        step: 4,
        title: "Maintain Rhythm",
        description: "Keep a steady pace. Jump just high enough for the rope to pass underneath.",
      },
    ],
    commonMistakes: [
      {
        title: "Jumping Too High",
        description: "Jump just high enough for rope clearance. Higher jumps waste energy.",
      },
      {
        title: "Tense Shoulders",
        description: "Keep shoulders relaxed. Tension reduces efficiency.",
      },
      {
        title: "Rotating with Arms",
        description: "Rope rotation should come from wrists, not arms.",
      },
      {
        title: "Inconsistent Rhythm",
        description: "Maintain steady pace throughout for maximum calorie burn.",
      },
    ],
    breathing: {
      pattern: [
        "Breathe rhythmically - Sync breathing with jumping",
        "Maintain steady breathing throughout the duration",
      ],
      importance: [
        "Maintains consistent oxygen supply",
        "Prevents fatigue and cramping",
        "Improves cardiovascular endurance",
      ],
    },
    variations: [
      "Double Unders",
      "High Knees Jump Rope",
      "Backwards Jump Rope",
      "Single Leg Jump Rope",
    ],
    proTips: [
      "Start with 30-60 seconds intervals if new to jump rope",
      "Gradually increase duration as fitness improves",
      "Use proper shoes with good ankle support",
      "Jump on a softer surface to reduce joint impact",
    ],
    tags: ["cardio", "fat-burn", "full-body", "high-intensity"],
  },
  "fatburn-2": {
    id: "fatburn-2",
    name: "Burpees",
    description: "A full-body explosive exercise that combines squats, push-ups, and jumps for maximum calorie burn.",
    muscleGroups: {
      primary: ["Full Body", "Chest", "Legs", "Core"],
      secondary: ["Arms", "Shoulders", "Back"],
    },
    difficulty: "Hard",
    equipment: "None",
    exerciseType: "Cardio",
    experienceLevel: "Intermediate",
    duration: "12 min",
    sets: "3",
    reps: "12-15",
    demoVideoLength: "3:00",
    quickStats: {
      duration: "40-50 seconds/set",
      sets: "3 recommended",
      reps: "12-15 per set",
      rest: "90-120 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Stand with feet shoulder-width apart, arms at your sides.",
      },
      {
        step: 2,
        title: "Squat Down",
        description: "Squat down and place hands on the ground in front of you.",
      },
      {
        step: 3,
        title: "Jump Back",
        description: "Jump your feet back into a plank position. Your body should form a straight line.",
      },
      {
        step: 4,
        title: "Push Up",
        description: "Perform a push-up, lowering your chest toward the ground.",
      },
      {
        step: 5,
        title: "Jump Forward",
        description: "Jump your feet back toward your hands.",
      },
      {
        step: 6,
        title: "Jump Up",
        description: "Explosively jump upward with hands overhead. Land and repeat.",
      },
    ],
    commonMistakes: [
      {
        title: "Poor Plank Position",
        description: "Hips should align with shoulders and heels. Avoid sagging hips.",
      },
      {
        title: "Shallow Push-ups",
        description: "Lower your chest close to the ground for full range of motion.",
      },
      {
        title: "Rushing the Movement",
        description: "Maintain control throughout. Speed doesn't replace proper form.",
      },
      {
        title: "Not Jumping High",
        description: "Explosive jump at the end maximizes calorie burn and intensity.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - As you squat down",
        "Exhale - As you jump back",
        "Inhale - During the push-up",
        "Exhale - As you jump forward and up",
      ],
      importance: [
        "Maintains oxygen supply for high-intensity work",
        "Prevents breath-holding",
        "Improves explosive power",
      ],
    },
    variations: [
      "Modified Burpees (step back instead of jump)",
      "Burpees with Push-up",
      "Burpees with Pull-up",
    ],
    proTips: [
      "One of the most effective full-body exercises",
      "Modify by stepping back instead of jumping if needed",
      "Start with lower repetitions and build up",
      "Excellent for cardiovascular fitness",
    ],
    tags: ["fatburn", "full-body", "cardio", "hiit"],
  },
  "fatburn-3": {
    id: "fatburn-3",
    name: "Mountain Climbers",
    description: "A dynamic cardio exercise that targets the core and improves cardiovascular fitness while burning calories.",
    muscleGroups: {
      primary: ["Core (Abdominals)", "Full Body"],
      secondary: ["Shoulders", "Chest", "Legs"],
    },
    difficulty: "Moderate",
    equipment: "None",
    exerciseType: "Cardio",
    experienceLevel: "Beginner+",
    duration: "10 min",
    sets: "3",
    reps: "45 sec",
    demoVideoLength: "2:30",
    quickStats: {
      duration: "45 seconds/set",
      sets: "3 recommended",
      reps: "45 seconds continuous",
      rest: "45-60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Get into a plank position with hands directly under shoulders.",
      },
      {
        step: 2,
        title: "Bring One Knee Forward",
        description: "Drive your right knee toward your chest as high as possible.",
      },
      {
        step: 3,
        title: "Switch Legs",
        description: "Quickly switch legs, bringing your left knee forward while extending right leg.",
      },
      {
        step: 4,
        title: "Maintain Pace",
        description: "Continue alternating legs at a fast pace for the duration.",
      },
    ],
    commonMistakes: [
      {
        title: "Hips Too High or Low",
        description: "Maintain flat plank position. Hips should align with shoulders.",
      },
      {
        title: "Slow Leg Movement",
        description: "Move legs quickly for maximum cardio and core engagement.",
      },
      {
        title: "Hands Moving",
        description: "Hands should stay in place. Only legs move.",
      },
        {
        title: "Poor Core Engagement",
        description: "Engage your core throughout to prevent hips from sagging.",
      },
    ],
    breathing: {
      pattern: [
        "Maintain steady breathing - Avoid breath-holding",
        "Rhythmic breathing synced with leg movement",
      ],
      importance: [
        "Maintains oxygen delivery to muscles",
        "Improves endurance",
        "Prevents dizziness",
      ],
    },
    variations: [
      "Slow Mountain Climbers",
      "Elevated Mountain Climbers",
      "Decline Mountain Climbers",
    ],
    proTips: [
      "Great exercise for both cardio and core strength",
      "Can be modified by slowing down for beginners",
      "Perfect for warm-ups or finishers",
      "Excellent for improving coordination",
    ],
    tags: ["cardio", "core", "fatburn", "full-body"],
  },
  "fatburn-4": {
    id: "fatburn-4",
    name: "High-Intensity Interval Training",
    description: "An advanced training method combining intense exercise bursts with recovery periods for maximum calorie burn.",
    muscleGroups: {
      primary: ["Full Body", "Cardiovascular System"],
      secondary: ["All Muscle Groups"],
    },
    difficulty: "Hard",
    equipment: "Various",
    exerciseType: "Cardio",
    experienceLevel: "Advanced",
    duration: "20 min",
    sets: "4",
    reps: "30 sec sprint",
    demoVideoLength: "4:00",
    quickStats: {
      duration: "30 seconds work/rest",
      sets: "4+ recommended",
      reps: "30 seconds sprint",
      rest: "30-60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Warm Up",
        description: "Spend 2-3 minutes warming up with light activity.",
      },
      {
        step: 2,
        title: "Sprint Phase",
        description: "Perform 30 seconds of maximum intensity exercise (sprinting, cycling, rowing, etc).",
      },
      {
        step: 3,
        title: "Recovery Phase",
        description: "Perform 30-60 seconds of low-intensity activity or rest.",
      },
      {
        step: 4,
        title: "Repeat",
        description: "Repeat the sprint/recovery cycle 4-8 times depending on fitness level.",
      },
    ],
    commonMistakes: [
      {
        title: "Insufficient Intensity",
        description: "True HIIT requires maximum effort during sprint phases.",
      },
      {
        title: "Too Long Intervals",
        description: "Keep work periods to 20-60 seconds for optimal intensity.",
      },
      {
        title: "Inadequate Recovery",
        description: "Recovery periods are important for safety. Don't skip them.",
      },
      {
        title: "Poor Form from Fatigue",
        description: "Prioritize form even as you fatigue. Stop if form breaks down significantly.",
      },
    ],
    breathing: {
      pattern: [
        "Intense breathing - During sprint phase",
        "Steady recovery breathing - During recovery phase",
      ],
      importance: [
        "Maximizes oxygen delivery during intense work",
        "Improves VO2 max",
        "Enhances cardiovascular fitness",
      ],
    },
    variations: [
      "HIIT Sprinting",
      "HIIT Cycling",
      "HIIT Rowing",
      "HIIT Circuit Training",
    ],
    proTips: [
      "Only 20 minutes of HIIT can burn hundreds of calories",
      "Afterburn effect continues for hours post-workout",
      "Not recommended for beginners - build fitness first",
      "Can be dangerous for those with heart conditions",
    ],
    tags: ["hiit", "cardio", "fatburn", "advanced"],
  },
  "fatburn-5": {
    id: "fatburn-5",
    name: "Battle Ropes",
    description: "An explosive full-body exercise using heavy ropes to build power and burn calories.",
    muscleGroups: {
      primary: ["Shoulders", "Core", "Forearms"],
      secondary: ["Legs", "Back", "Chest"],
    },
    difficulty: "Hard",
    equipment: "Battle Ropes",
    exerciseType: "Cardio",
    experienceLevel: "Intermediate",
    duration: "12 min",
    sets: "3",
    reps: "30 sec",
    demoVideoLength: "2:50",
    quickStats: {
      duration: "30 seconds/set",
      sets: "3 recommended",
      reps: "30 seconds continuous",
      rest: "60-90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Stand with feet shoulder-width apart, knees slightly bent. Hold one rope in each hand.",
      },
      {
        step: 2,
        title: "Grip the Ropes",
        description: "Grip the ropes firmly with arms at your sides, bent slightly.",
      },
      {
        step: 3,
        title: "Alternate Arm Waves",
        description: "Rapidly alternate raising and lowering each arm to create waves in the ropes.",
      },
      {
        step: 4,
        title: "Maintain Intensity",
        description: "Keep arms moving rapidly and powerfully for 30 seconds.",
      },
    ],
    commonMistakes: [
      {
        title: "Slow Movements",
        description: "Speed is key. Move arms rapidly for maximum intensity.",
      },
      {
        title: "Stiff Core",
        description: "Keep core engaged but don't stiffen up. Allow slight movement.",
      },
      {
        title: "Poor Grip",
        description: "Maintain firm grip on ropes to control movement.",
      },
      {
        title: "Only Upper Body",
        description: "Engage legs and core for full-body power.",
      },
    ],
    breathing: {
      pattern: [
        "Heavy breathing - Throughout the exercise",
        "Rhythmic pattern - Maintain steady breathing",
      ],
      importance: [
        "Supports high-intensity effort",
        "Improves conditioning",
        "Prevents fatigue buildup",
      ],
    },
    variations: [
      "Double Wave Battle Ropes",
      "Single Arm Battle Ropes",
      "Alternating Waves",
    ],
    proTips: [
      "Excellent for upper body power and conditioning",
      "Very effective for calorie burning",
      "Great finisher for workouts",
      "Requires significant cardio fitness",
    ],
    tags: ["fatburn", "explosive", "cardio", "power"],
  },
  "fatburn-6": {
    id: "fatburn-6",
    name: "Kettlebell Swings",
    description: "A dynamic full-body exercise combining strength and cardio to build power and endurance.",
    muscleGroups: {
      primary: ["Glutes", "Hamstrings", "Full Body"],
      secondary: ["Core", "Shoulders", "Back"],
    },
    difficulty: "Moderate",
    equipment: "Kettlebell",
    exerciseType: "Cardio",
    experienceLevel: "Intermediate",
    duration: "15 min",
    sets: "4",
    reps: "15-20",
    demoVideoLength: "3:15",
    quickStats: {
      duration: "45-60 seconds/set",
      sets: "4 recommended",
      reps: "15-20 per set",
      rest: "60-90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Stand with feet slightly wider than shoulder-width. Place kettlebell on ground between feet.",
      },
      {
        step: 2,
        title: "Hip Hinge",
        description: "Bend at hips and grab kettlebell with both hands. Keep back straight.",
      },
      {
        step: 3,
        title: "Swing Forward",
        description: "Drive through heels and swing kettlebell forward to chest height. Power comes from hips.",
      },
      {
        step: 4,
        title: "Let It Fall",
        description: "Allow kettlebell to swing back down naturally. Catch it at starting position.",
      },
    ],
    commonMistakes: [
      {
        title: "Arms Drive the Movement",
        description: "Power should come from hips and glutes, not arms. Arms just guide.",
      },
      {
        title: "Rounded Back",
        description: "Keep back straight throughout. Never round your lower back.",
      },
      {
        title: "Incomplete Hip Extension",
        description: "Fully extend hips at the top of the swing.",
      },
      {
        title: "Too Much Weight",
        description: "Start light to master the movement before adding weight.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you swing forward explosively",
        "Inhale - As kettlebell swings back down",
      ],
      importance: [
        "Increases core engagement",
        "Improves power output",
        "Enhances overall performance",
      ],
    },
    variations: [
      "Single Arm Kettlebell Swings",
      "Kettlebell Goblet Swings",
      "Double Kettlebell Swings",
    ],
    proTips: [
      "Focus on hip drive, not arm strength",
      "Great exercise for posterior chain development",
      "Perfect for fat loss and conditioning",
      "Start with lighter weights to learn proper form",
    ],
    tags: ["fatburn", "kettlebell", "full-body", "strength-cardio"],
  },
  "back-1": {
    id: "back-1",
    name: "Deadlifts",
    description: "One of the most fundamental compound exercises that builds overall back strength, posterior chain power, and functional fitness.",
    muscleGroups: {
      primary: ["Back (Lats)", "Glutes", "Hamstrings"],
      secondary: ["Core", "Forearms", "Trapezius"],
    },
    difficulty: "Hard",
    equipment: "Barbell",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "20 min",
    sets: "4",
    reps: "5-8",
    demoVideoLength: "4:00",
    quickStats: {
      duration: "60-90 seconds/set",
      sets: "4 recommended",
      reps: "5-8 per set",
      rest: "2-3 minutes",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Stand with feet hip-width apart. Barbell over mid-foot. Shins should almost touch the bar.",
      },
      {
        step: 2,
        title: "Grip the Bar",
        description: "Grip the bar with hands just outside your legs. Use overhand or mixed grip.",
      },
      {
        step: 3,
        title: "Set Your Back",
        description: "Straighten your back and engage your lats. Keep chest up and eyes forward.",
      },
      {
        step: 4,
        title: "Drive Through Heels",
        description: "Drive through your heels and drive your hips forward to lift the bar.",
      },
      {
        step: 5,
        title: "Stand Tall",
        description: "Stand fully upright at the top. Shoulders back, chest up.",
      },
      {
        step: 6,
        title: "Lower with Control",
        description: "Lower the bar back to ground with control. Keep bar close to your body.",
      },
    ],
    commonMistakes: [
      {
        title: "Starting Position Too High",
        description: "Hips should start slightly higher but not too high. Adjust for your body.",
      },
      {
        title: "Rounding Your Back",
        description: "This is dangerous. Maintain a straight, neutral spine throughout.",
      },
      {
        title: "Bar Away from Body",
        description: "Keep bar close to your body throughout the lift. Far bar increases injury risk.",
      },
      {
        title: "Hitching or Jerking",
        description: "One smooth motion from ground to lockout. No bouncing or hitching.",
      },
      {
        title: "Overarching Lower Back",
        description: "Don't hyperextend at the top. Slight arch is normal, excessive is risky.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - Before lifting",
        "Exhale - After breaking the ground or at lockout",
        "Hold breath briefly during heavy lifts",
      ],
      importance: [
        "Brace core during heavy lifts",
        "Increases stability and safety",
        "Improves max strength",
      ],
    },
    variations: [
      "Sumo Deadlifts",
      "Romanian Deadlifts",
      "Trap Bar Deadlifts",
      "Deficit Deadlifts",
    ],
    proTips: [
      "The king of compound exercises for overall strength",
      "Practice with light weights first to master form",
      "Use a lifting belt for heavy weights",
      "Deadlifts build overall body strength, not just back",
      "Rest 2-3 minutes between heavy sets",
    ],
    tags: ["back", "deadlifts", "compound", "strength"],
  },
  "back-2": {
    id: "back-2",
    name: "Barbell Rows",
    description: "A fundamental back exercise using a barbell to build back width, thickness, and strength.",
    muscleGroups: {
      primary: ["Back (Lats)", "Rhomboids", "Trapezius"],
      secondary: ["Biceps", "Core"],
    },
    difficulty: "Hard",
    equipment: "Barbell, Bench",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "18 min",
    sets: "4",
    reps: "6-8",
    demoVideoLength: "3:45",
    quickStats: {
      duration: "45-60 seconds/set",
      sets: "4 recommended",
      reps: "6-8 per set",
      rest: "90-120 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Bend over with hips back, keeping back straight. Knees slightly bent.",
      },
      {
        step: 2,
        title: "Grip the Bar",
        description: "Grip the bar with overhand grip, slightly wider than shoulder-width.",
      },
      {
        step: 3,
        title: "Retract Shoulders",
        description: "Pull the bar toward your lower chest by retracting your shoulder blades.",
      },
      {
        step: 4,
        title: "Lower with Control",
        description: "Lower the bar back down with control, maintaining the bent-over position.",
      },
    ],
    commonMistakes: [
      {
        title: "Rounding Your Back",
        description: "Keep back straight and neutral. Rounding increases injury risk.",
      },
      {
        title: "Pulling Too High",
        description: "Pull toward your lower chest or upper abdomen, not toward your neck.",
      },
      {
        title: "Jerky Movements",
        description: "Use controlled movements. Avoid bouncing the bar.",
      },
      {
        title: "Not Full Range of Motion",
        description: "Go from full arm extension to chest contact for maximum engagement.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - At starting position",
        "Exhale - As you pull the bar toward chest",
        "Inhale - As you lower the bar",
      ],
      importance: [
        "Maintains back position stability",
        "Improves bar path control",
        "Enhances strength output",
      ],
    },
    variations: [
      "Pendlay Rows",
      "Yates Rows",
      "T-Bar Rows",
      "Smith Machine Rows",
    ],
    proTips: [
      "One of the best exercises for back thickness",
      "Keep elbows close to body for more back engagement",
      "Row to your lower chest or upper abdomen",
      "Feel your back muscles working more than your arms",
    ],
    tags: ["back", "barbell", "compound", "strength"],
  },
  "back-3": {
    id: "back-3",
    name: "Pull-ups",
    description: "A classic bodyweight exercise that builds back width, arm strength, and requires no equipment beyond a pull-up bar.",
    muscleGroups: {
      primary: ["Lats", "Back", "Biceps"],
      secondary: ["Shoulders", "Core"],
    },
    difficulty: "Hard",
    equipment: "Pull-up Bar",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "15 min",
    sets: "3",
    reps: "8-12",
    demoVideoLength: "3:15",
    quickStats: {
      duration: "30-60 seconds/set",
      sets: "3 recommended",
      reps: "8-12 per set",
      rest: "90-120 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Grip the Bar",
        description: "Grip the bar with overhand grip (pull-ups) or underhand grip (chin-ups), slightly wider than shoulder-width.",
      },
      {
        step: 2,
        title: "Dead Hang",
        description: "Let your body hang with arms fully extended. Feet can be crossed or straight.",
      },
      {
        step: 3,
        title: "Pull Yourself Up",
        description: "Pull yourself up by engaging your lats and back muscles. Bring your chest toward the bar.",
      },
      {
        step: 4,
        title: "Lower with Control",
        description: "Lower yourself back down slowly and with control to the starting position.",
      },
    ],
    commonMistakes: [
      {
        title: "Using Only Arms",
        description: "Pull-ups are a back exercise. Engage your lats and back, not just arms.",
      },
      {
        title: "Partial Reps",
        description: "Go from full arm extension to chest contact with bar for full range.",
      },
      {
        title: "Jerky Movements",
        description: "Use controlled, smooth movements. Avoid kipping or bouncing.",
      },
      {
        title: "Elbows Too Flared",
        description: "Keep elbows at appropriate angle for maximum back engagement.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you pull yourself up",
        "Inhale - As you lower yourself down",
      ],
      importance: [
        "Improves core stability",
        "Increases pulling power",
        "Prevents breath-holding",
      ],
    },
    variations: [
      "Chin-ups",
      "Assisted Pull-ups",
      "Wide Grip Pull-ups",
      "Close Grip Pull-ups",
      "Weighted Pull-ups",
    ],
    proTips: [
      "One of the best indicators of overall strength",
      "Use an assisted machine if needed while building strength",
      "Focus on pulling elbows back and down",
      "Great for both strength and size",
    ],
    tags: ["back", "bodyweight", "compound", "pull-ups"],
  },
  "back-4": {
    id: "back-4",
    name: "Lat Pulldowns",
    description: "A controlled machine exercise that targets the lats and provides a great alternative to pull-ups for back development.",
    muscleGroups: {
      primary: ["Lats", "Back"],
      secondary: ["Biceps", "Shoulders"],
    },
    difficulty: "Moderate",
    equipment: "Lat Pulldown Machine",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner+",
    duration: "12 min",
    sets: "3",
    reps: "10-12",
    demoVideoLength: "2:45",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "3 recommended",
      reps: "10-12 per set",
      rest: "60-90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Adjust Machine",
        description: "Sit at the machine with thigh pads snug against your legs.",
      },
      {
        step: 2,
        title: "Grip the Bar",
        description: "Reach up and grab the bar with a wide grip, palms facing down.",
      },
      {
        step: 3,
        title: "Pull Down",
        description: "Pull the bar down to approximately chest level by engaging your lats.",
      },
      {
        step: 4,
        title: "Control the Return",
        description: "Slowly return the bar to starting position with control.",
      },
    ],
    commonMistakes: [
      {
        title: "Pulling Down with Arms",
        description: "Initiate pull with your lats, not your arms. Feel your back muscles working.",
      },
      {
        title: "Leaning Too Far Back",
        description: "Slight lean is okay, but excessive lean reduces lat engagement.",
      },
      {
        title: "Jerky Movements",
        description: "Use smooth, controlled movements throughout the range.",
      },
      {
        title: "Not Full Range",
        description: "Extend arms fully at the top and bring bar to chest at bottom.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you pull down",
        "Inhale - As you return to start",
      ],
      importance: [
        "Improves lat activation",
        "Maintains control",
        "Prevents breath-holding",
      ],
    },
    variations: [
      "Close Grip Lat Pulldown",
      "Single Arm Lat Pulldown",
      "Reverse Grip Lat Pulldown",
    ],
    proTips: [
      "Great exercise for learning lat activation",
      "Perfect for building mind-muscle connection with lats",
      "Ideal for higher rep ranges",
      "Can be used as a warm-up for pull-ups",
    ],
    tags: ["back", "machine", "lats", "isolation"],
  },
  "back-5": {
    id: "back-5",
    name: "Dumbbell Rows",
    description: "A versatile back exercise using dumbbells that allows for greater range of motion and individual arm development.",
    muscleGroups: {
      primary: ["Back (Lats)", "Rhomboids"],
      secondary: ["Biceps", "Core"],
    },
    difficulty: "Moderate",
    equipment: "Dumbbells, Bench",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner+",
    duration: "15 min",
    sets: "3",
    reps: "10-12",
    demoVideoLength: "3:00",
    quickStats: {
      duration: "40-50 seconds/set",
      sets: "3 recommended",
      reps: "10-12 per set",
      rest: "60-90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Starting Position",
        description: "Place one knee on bench, other foot on ground. Hold dumbbell in one hand.",
      },
      {
        step: 2,
        title: "Engage Core",
        description: "Maintain straight back and engage your core.",
      },
      {
        step: 3,
        title: "Row the Dumbbell",
        description: "Pull the dumbbell toward your hip, engaging your lat muscles.",
      },
      {
        step: 4,
        title: "Lower with Control",
        description: "Lower the dumbbell back to starting position with control.",
      },
    ],
    commonMistakes: [
      {
        title: "Rounding Your Back",
        description: "Keep back straight. Rounding reduces effectiveness and increases injury risk.",
      },
      {
        title: "Not Full Range",
        description: "Full extension at bottom, full contraction at top.",
      },
      {
        title: "Twisting Your Torso",
        description: "Keep torso stable. Rotation reduces back engagement.",
      },
        {
        title: "Using Momentum",
        description: "Controlled movements are more effective than bouncy reps.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you row up",
        "Inhale - As you lower down",
      ],
      importance: [
        "Maintains core stability",
        "Improves rowing power",
        "Prevents breath-holding",
      ],
    },
    variations: [
      "Single Arm Rows",
      "Two-Arm Dumbbell Rows",
      "Incline Dumbbell Rows",
    ],
    proTips: [
      "Great for unilateral strength and development",
      "Allows greater range of motion than barbell",
      "Perfect for correcting strength imbalances",
      "Can be performed on a bench or standing",
    ],
    tags: ["back", "dumbbells", "unilateral", "strength"],
  },
  "back-6": {
    id: "back-6",
    name: "Machine Row",
    description: "A stable, controlled machine exercise perfect for back development with consistent resistance throughout the movement.",
    muscleGroups: {
      primary: ["Back (Lats)", "Rhomboids"],
      secondary: ["Biceps"],
    },
    difficulty: "Easy",
    equipment: "Row Machine",
    exerciseType: "Strength Training",
    experienceLevel: "Beginner",
    duration: "12 min",
    sets: "3",
    reps: "12-15",
    demoVideoLength: "2:30",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "3 recommended",
      reps: "12-15 per set",
      rest: "45-60 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Adjust Machine",
        description: "Sit at the machine with chest against the pad. Feet flat on footrest.",
      },
      {
        step: 2,
        title: "Grab the Handles",
        description: "Grab the handles with a neutral grip at shoulder height.",
      },
      {
        step: 3,
        title: "Pull Toward Chest",
        description: "Pull the handles toward your chest. The machine guides the movement.",
      },
      {
        step: 4,
        title: "Return Slowly",
        description: "Slowly return handles to starting position with control.",
      },
    ],
    commonMistakes: [
      {
        title: "Jerky Movements",
        description: "Use smooth, controlled motions throughout.",
      },
      {
        title: "Not Full Range",
        description: "Full extension at start, full contraction at chest.",
      },
      {
        title: "Using Arms Only",
        description: "Engage your back muscles, not just your arms.",
      },
    ],
    breathing: {
      pattern: [
        "Exhale - As you pull toward chest",
        "Inhale - As you return to start",
      ],
      importance: [
        "Maintains proper control",
        "Improves back engagement",
      ],
    },
    variations: [
      "Single Arm Machine Row",
      "Chest Supported Row",
    ],
    proTips: [
      "Perfect exercise for beginners to learn rowing mechanics",
      "Great for isolation and building mind-muscle connection",
      "Ideal for higher rep ranges",
      "Low risk of injury due to machine guidance",
    ],
    tags: ["back", "machine", "beginner", "isolation"],
  },
  "triceps-1": {
    id: "triceps-1",
    name: "Tricep Dips",
    description: "A challenging bodyweight exercise that effectively builds tricep and chest strength using parallel bars or a dip station.",
    muscleGroups: {
      primary: ["Triceps", "Chest"],
      secondary: ["Shoulders", "Core"],
    },
    difficulty: "Hard",
    equipment: "Parallel Bars or Dip Station",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "15 min",
    sets: "4",
    reps: "8-12",
    demoVideoLength: "3:20",
    quickStats: {
      duration: "30-45 seconds/set",
      sets: "4 recommended",
      reps: "8-12 per set",
      rest: "90 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Grip the Bars",
        description: "Grip the parallel bars with hands shoulder-width apart.",
      },
      {
        step: 2,
        title: "Jump or Climb Up",
        description: "Use your arms to lift yourself so your elbows are at 90 degrees.",
      },
      {
        step: 3,
        title: "Lower Your Body",
        description: "Slowly lower your body by bending your elbows until they reach 90 degrees.",
      },
      {
        step: 4,
        title: "Push Back Up",
        description: "Push through your hands to return to starting position. Do not lock elbows fully.",
      },
    ],
    commonMistakes: [
      {
        title: "Leaning Too Far Forward",
        description: "Forward lean shifts focus to chest. Stay relatively upright for tricep focus.",
      },
      {
        title: "Partial Range of Motion",
        description: "Go down until elbows reach 90 degrees for full tricep engagement.",
      },
      {
        title: "Bouncing",
        description: "Avoid bouncing at the bottom. Use controlled, steady movements.",
      },
      {
        title: "Shoulders Down",
        description: "Keep shoulders down and back. Avoid shrugging.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - As you lower your body",
        "Exhale - As you push back up",
      ],
      importance: [
        "Prevents breath-holding",
        "Improves core stability",
        "Enhances power output",
      ],
    },
    variations: [
      "Assisted Dips",
      "Weighted Dips",
      "Machine Dips",
    ],
    proTips: [
      "Use an assisted dip machine if needed",
      "Add weight using a dip belt as you progress",
      "Maintain control throughout the movement",
      "Great compound exercise for upper body",
    ],
    tags: ["triceps", "bodyweight", "compound", "dips"],
  },
  "triceps-2": {
    id: "triceps-2",
    name: "Barbell Bench Dips",
    description: "A tricep-focused variation using a bench that provides a controlled alternative to parallel bar dips.",
    muscleGroups: {
      primary: ["Triceps"],
      secondary: ["Chest", "Shoulders"],
    },
    difficulty: "Hard",
    equipment: "Bench",
    exerciseType: "Strength Training",
    experienceLevel: "Intermediate",
    duration: "12 min",
    sets: "3",
    reps: "10-12",
    demoVideoLength: "2:50",
    quickStats: {
      duration: "30-40 seconds/set",
      sets: "3 recommended",
      reps: "10-12 per set",
      rest: "75 seconds",
    },
    instructions: [
      {
        step: 1,
        title: "Position on Bench",
        description: "Place hands behind you on a bench, fingers pointing forward. Feet flat on ground.",
      },
      {
        step: 2,
        title: "Lower Your Body",
        description: "Lower your body by bending your elbows. Aim for 90-degree angle at bottom.",
      },
      {
        step: 3,
        title: "Push Back Up",
        description: "Push through your triceps to raise your body back to starting position.",
      },
    ],
    commonMistakes: [
      {
        title: "Elbows Flaring Out",
        description: "Keep elbows close to body for maximum tricep engagement.",
      },
      {
        title: "Going Too Deep",
        description: "Excessive depth can strain shoulders. Stop at 90-degree elbow angle.",
      },
      {
        title: "Partial Reps",
        description: "Go through full range of motion from full extension to 90-degree angle.",
      },
      {
        title: "Using Legs Too Much",
        description: "Keep legs straight or minimize leg drive for tricep focus.",
      },
    ],
    breathing: {
      pattern: [
        "Inhale - As you lower down",
        "Exhale - As you push back up",
      ],
      importance: [
        "Prevents breath-holding",
        "Improves tricep contraction",
      ],
    },
    variations: [
      "Decline Bench Dips",
      "Weighted Bench Dips",
      "Single Leg Bench Dips",
    ],
    proTips: [
      "Great tricep isolation exercise",
      "Can add weight on lap for added resistance",
      "Keep body close to bench for maximum tricep work",
      "Perfect for tricep-focused workouts",
    ],
    tags: ["triceps", "bench", "isolation"],
  },
};