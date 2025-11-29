"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Play, AlertCircle, Lightbulb, UtensilsCrossed, Clock, Flame, ArrowLeft } from "lucide-react";
//import { mealsDatabase, type MealItem } from "@/data/meals";

type MealItem = {
  id: string;
  name: string;
  type: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  calories: string;
  prepTime?: string;
  servings?: string;
  note?: string;
  difficulty?: "Easy" | "Moderate" | "Hard";
  cuisine?: string;
};

const mealsDatabase: MealItem[] = [
  {
    id: "meal-1",
    name: "Oatmeal with Berries",
    type: "Breakfast",
    calories: "350",
    prepTime: "10 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "Continental",
  },
  {
    id: "meal-2",
    name: "Scrambled Eggs & Toast",
    type: "Breakfast",
    calories: "340",
    prepTime: "10 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "Continental",
  },
  {
    id: "meal-3",
    name: "Greek Yogurt & Granola",
    type: "Breakfast",
    calories: "300",
    prepTime: "5 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "Continental",
  },
  {
    id: "meal-4",
    name: "Protein Smoothie Bowl",
    type: "Breakfast",
    calories: "380",
    prepTime: "8 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "meal-5",
    name: "Whole Wheat Pancakes",
    type: "Breakfast",
    calories: "420",
    prepTime: "15 min",
    servings: "2",
    difficulty: "Moderate",
    cuisine: "American",
  },
  {
    id: "meal-6",
    name: "Avocado Toast",
    type: "Breakfast",
    calories: "360",
    prepTime: "10 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "meal-7",
    name: "French Toast",
    type: "Breakfast",
    calories: "400",
    prepTime: "15 min",
    servings: "2",
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "meal-8",
    name: "Grilled Chicken Salad",
    type: "Lunch",
    calories: "450",
    prepTime: "20 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "Mediterranean",
  },
  {
    id: "meal-9",
    name: "Tandoori Chicken Rice",
    type: "Lunch",
    calories: "520",
    prepTime: "30 min",
    servings: "1",
    difficulty: "Moderate",
    cuisine: "Indian",
  },
  {
    id: "meal-10",
    name: "Buddha Bowl",
    type: "Lunch",
    calories: "480",
    prepTime: "20 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "Fusion",
  },
  {
    id: "meal-11",
    name: "Taco Bowl",
    type: "Lunch",
    calories: "510",
    prepTime: "25 min",
    servings: "1",
    difficulty: "Moderate",
    cuisine: "Mexican",
  },
  {
    id: "meal-12",
    name: "Sushi Rolls",
    type: "Lunch",
    calories: "480",
    prepTime: "30 min",
    servings: "1",
    difficulty: "Hard",
    cuisine: "Japanese",
  },
  {
    id: "meal-13",
    name: "Caesar Wrap",
    type: "Lunch",
    calories: "420",
    prepTime: "12 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "meal-14",
    name: "Pasta Marinara",
    type: "Dinner",
    calories: "550",
    prepTime: "25 min",
    servings: "2",
    difficulty: "Moderate",
    cuisine: "Italian",
  },
  {
    id: "meal-15",
    name: "Grilled Salmon with Veggies",
    type: "Dinner",
    calories: "580",
    prepTime: "35 min",
    servings: "1",
    difficulty: "Moderate",
    cuisine: "Nordic",
  },
  {
    id: "meal-16",
    name: "Vegetable Stir Fry",
    type: "Dinner",
    calories: "420",
    prepTime: "25 min",
    servings: "2",
    difficulty: "Easy",
    cuisine: "Asian",
  },
  {
    id: "meal-17",
    name: "Butter Chicken",
    type: "Dinner",
    calories: "620",
    prepTime: "40 min",
    servings: "2",
    difficulty: "Hard",
    cuisine: "Indian",
  },
  {
    id: "meal-18",
    name: "Grilled Steak & Sweet Potato Fries",
    type: "Dinner",
    calories: "650",
    prepTime: "35 min",
    servings: "1",
    difficulty: "Moderate",
    cuisine: "American",
  },
  {
    id: "meal-19",
    name: "Pasta Carbonara",
    type: "Dinner",
    calories: "610",
    prepTime: "20 min",
    servings: "2",
    difficulty: "Moderate",
    cuisine: "Italian",
  },
  {
    id: "meal-20",
    name: "Biryani",
    type: "Dinner",
    calories: "580",
    prepTime: "45 min",
    servings: "2",
    difficulty: "Hard",
    cuisine: "Indian",
  },
  {
    id: "meal-21",
    name: "Homemade Pizza",
    type: "Lunch",
    calories: "520",
    prepTime: "40 min",
    servings: "2",
    difficulty: "Moderate",
    cuisine: "Italian",
  },
  {
    id: "meal-22",
    name: "Roasted Vegetables & Tofu",
    type: "Dinner",
    calories: "420",
    prepTime: "30 min",
    servings: "2",
    difficulty: "Easy",
    cuisine: "Vegan",
  },
  {
    id: "meal-23",
    name: "Protein Bars",
    type: "Snack",
    calories: "200",
    prepTime: "0 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "meal-24",
    name: "Mixed Nuts & Fruits",
    type: "Snack",
    calories: "250",
    prepTime: "5 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "Continental",
  },
  {
    id: "meal-25",
    name: "Hummus & Veggies",
    type: "Snack",
    calories: "180",
    prepTime: "5 min",
    servings: "1",
    difficulty: "Easy",
    cuisine: "Mediterranean",
  },
];

// Meal details mapping - detailed information for each meal
const mealDetailsMap: Record<string, {
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  videoLength: string;
  ingredients: { category: string; items: { name: string; amount: string }[] }[];
  instructions: { step: number; title: string; description: string }[];
  nutrition: { calories: number; protein: number; carbs: number; fat: number };
  cost: { total: number; perServing: number };
  tips: string[];
  variations: string[];
  pairings: { sides: string[]; accompaniments: string[] };
  storage: { refrigeration: string; freezing: string; reheating: string };
}> = {
  "meal-9": {
    description: "Creamy and aromatic butter chicken served with fluffy basmati rice. A classic Indian dish that's perfect for lunch or dinner with a rich tomato-based gravy.",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 2,
    videoLength: "8:30",
    ingredients: [
      {
        category: "For Chicken",
        items: [
          { name: "Chicken breast (cubed)", amount: "500g" },
          { name: "Yogurt", amount: "1/2 cup" },
          { name: "Ginger-garlic paste", amount: "2 tbsp" },
          { name: "Red chili powder", amount: "1 tsp" },
          { name: "Salt & pepper", amount: "To taste" },
        ],
      },
      {
        category: "For Gravy",
        items: [
          { name: "Butter", amount: "3 tbsp" },
          { name: "Onions (chopped)", amount: "2 medium" },
          { name: "Tomato sauce", amount: "1 cup" },
          { name: "Heavy cream", amount: "1/2 cup" },
          { name: "Kasuri methi", amount: "1 tsp" },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate the Chicken",
        description: "Mix chicken with yogurt, ginger-garlic paste, chili powder, and salt. Let it marinate for at least 30 minutes in the refrigerator.",
      },
      {
        step: 2,
        title: "Cook the Chicken",
        description: "Heat butter in a pan and cook the marinated chicken on high heat until it's lightly charred on the outside and cooked 70% through.",
      },
      {
        step: 3,
        title: "Prepare the Gravy Base",
        description: "In the same pan, add butter and sauté chopped onions until golden brown. Add ginger-garlic paste and cook for 1 minute.",
      },
      {
        step: 4,
        title: "Add Tomato Sauce",
        description: "Pour in tomato sauce and simmer for 5-7 minutes, stirring occasionally. The oil should start separating from the tomato mixture.",
      },
      {
        step: 5,
        title: "Combine & Finish",
        description: "Add the cooked chicken back to the pan, stir in heavy cream, and sprinkle kasuri methi. Simmer for 3-5 minutes until well combined.",
      },
    ],
    nutrition: { calories: 520, protein: 45, carbs: 12, fat: 32 },
    cost: { total: 240, perServing: 120 },
    tips: [
      "Don't skip the marination step for tender chicken",
      "Use fresh cream for best taste",
      "Add cream at the end to avoid curdling",
      "Kasuri methi adds authentic flavor",
    ],
    variations: [
      "Use paneer for vegetarian version",
      "Add mushrooms for extra texture",
      "Try with cashew cream for richness",
      "Reduce cream for lighter version",
    ],
    pairings: {
      sides: ["Basmati rice or jeera rice", "Naan or roti", "Saffron rice", "Garlic bread"],
      accompaniments: ["Fresh green salad", "Cucumber raita", "Pickle or chutney", "Lemon wedges"],
    },
    storage: {
      refrigeration: "Store in an airtight container for up to 3 days. Let it cool to room temperature before refrigerating.",
      freezing: "Can be frozen for up to 1 month. Thaw overnight in the refrigerator before reheating.",
      reheating: "Reheat gently on low to medium heat, stirring occasionally. Add a splash of water if it's too thick.",
    },
  },
  "meal-1": {
    description: "A wholesome breakfast bowl loaded with oats, fresh berries, and topped with granola for a crunchy texture. Perfect for a nutritious morning start.",
    prepTime: "5 min",
    cookTime: "5 min",
    servings: 1,
    videoLength: "4:15",
    ingredients: [
      {
        category: "Main Ingredients",
        items: [
          { name: "Rolled oats", amount: "1/2 cup" },
          { name: "Milk or almond milk", amount: "1 cup" },
          { name: "Mixed berries (fresh)", amount: "1 cup" },
          { name: "Honey", amount: "1 tbsp" },
          { name: "Granola", amount: "1/4 cup" },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: "Cook the Oats",
        description: "In a pot, bring milk to a boil. Add rolled oats and reduce heat to medium-low.",
      },
      {
        step: 2,
        title: "Simmer",
        description: "Stir occasionally and simmer for 3-5 minutes until oats are creamy and cooked through.",
      },
      {
        step: 3,
        title: "Add Berries",
        description: "Pour the cooked oatmeal into a bowl and top with fresh mixed berries.",
      },
      {
        step: 4,
        title: "Finish",
        description: "Drizzle with honey and sprinkle granola on top. Serve immediately.",
      },
    ],
    nutrition: { calories: 350, protein: 12, carbs: 58, fat: 6 },
    cost: { total: 80, perServing: 80 },
    tips: [
      "Use rolled oats for better texture",
      "Add berries just before serving to keep them fresh",
      "Adjust milk quantity for desired consistency",
      "Use organic berries for better taste",
    ],
    variations: [
      "Add nuts like almonds or walnuts",
      "Use different fruits like bananas or apples",
      "Add chia seeds for extra nutrition",
      "Mix in yogurt for creaminess",
    ],
    pairings: {
      sides: ["Greek yogurt", "Toast with butter", "Fruit smoothie", "Green tea"],
      accompaniments: ["Cinnamon", "Cocoa powder", "Maple syrup", "Coconut flakes"],
    },
    storage: {
      refrigeration: "Store dry oats in airtight container for up to 2 weeks. Cooked oatmeal keeps for 3 days.",
      freezing: "Can freeze cooked oatmeal for up to 1 month.",
      reheating: "Reheat with a splash of milk to restore creaminess.",
    },
  },
};

export default function MealDetailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mealId = searchParams.get("id");
  const mealName = searchParams.get("name");
  const [meal, setMeal] = useState<MealItem | null>(null);
  const [mealDetails, setMealDetails] = useState<typeof mealDetailsMap[string] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (mealId) {
      const foundMeal = mealsDatabase.find((m) => m.id === mealId);
      if (foundMeal) {
        setMeal(foundMeal);
        const details = mealDetailsMap[mealId] || getDefaultMealDetails(foundMeal);
        setMealDetails(details);
      }
    }
    setIsLoading(false);
  }, [mealId]);

  const getDefaultMealDetails = (meal: MealItem) => ({
    description: `A delicious ${meal.cuisine} ${meal.type.toLowerCase()} option.`,
    prepTime: meal.prepTime || "10 min",
    cookTime: "20 min",
    servings: parseInt(meal.servings || "1"),
    videoLength: "5:00",
    ingredients: [
      {
        category: "Main Ingredients",
        items: [
          { name: "Primary ingredient", amount: "500g" },
          { name: "Secondary ingredient", amount: "2 cups" },
        ],
      },
    ],
    instructions: [
      {
        step: 1,
        title: "Preparation",
        description: "Prepare all ingredients.",
      },
      {
        step: 2,
        title: "Cooking",
        description: "Cook according to recipe.",
      },
    ],
    nutrition: { calories: parseInt(meal.calories), protein: 25, carbs: 30, fat: 10 },
    cost: { total: 200, perServing: 100 },
    tips: ["Use fresh ingredients", "Follow instructions carefully"],
    variations: ["Vegetarian version", "Spicy version"],
    pairings: {
      sides: ["Rice", "Bread", "Salad"],
      accompaniments: ["Sauce", "Chutney"],
    },
    storage: {
      refrigeration: "Store in airtight container for up to 3 days.",
      freezing: "Can be frozen for up to 1 month.",
      reheating: "Reheat gently on stove or microwave.",
    },
  });

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!meal || !mealDetails) {
    return (
      <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meal Not Found</h1>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-100 text-emerald-700";
      case "Moderate":
        return "bg-amber-100 text-amber-700";
      case "Hard":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getMealTypeColor = (type: string) => {
    switch (type) {
      case "Breakfast":
        return "bg-yellow-100 text-yellow-700";
      case "Lunch":
        return "bg-blue-100 text-blue-700";
      case "Dinner":
        return "bg-purple-100 text-purple-700";
      case "Snack":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-200 rounded-lg transition"
          >
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Meal Details</h1>
            <p className="text-gray-600 mt-1">Complete guide to prepare this delicious meal</p>
          </div>
        </div>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition"
        >
          Back to Planner
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Video & Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Meal Name & Description */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{meal.name}</h2>
            <p className="text-gray-600 text-lg mb-4">{mealDetails.description}</p>
            <div className="flex flex-wrap gap-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMealTypeColor(meal.type)}`}>
                {meal.type}
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                {meal.cuisine}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(meal.difficulty)}`}>
                {meal.difficulty}
              </span>
            </div>
          </div>

          {/* Demo Video Section */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cooking Video</h3>
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 w-20 h-20 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center transition"
              >
                <Play size={32} fill="white" />
              </button>
              <p className="absolute bottom-4 left-4 text-white text-sm">Duration: {mealDetails.videoLength}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Prep Time</p>
                <p className="text-2xl font-bold text-blue-600">{mealDetails.prepTime.split(" ")[0]}</p>
                <p className="text-xs text-gray-500">minutes</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Cook Time</p>
                <p className="text-2xl font-bold text-green-600">{mealDetails.cookTime.split(" ")[0]}</p>
                <p className="text-xs text-gray-500">minutes</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Servings</p>
                <p className="text-2xl font-bold text-purple-600">{mealDetails.servings}</p>
                <p className="text-xs text-gray-500">servings</p>
              </div>

              <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Calories</p>
                <p className="text-2xl font-bold text-orange-600">{mealDetails.nutrition.calories}</p>
                <p className="text-xs text-gray-500">per serving</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="text-green-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">Ingredients</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mealDetails.ingredients.map((ingredientGroup, idx) => (
                <div key={idx} className={`p-4 border rounded-lg ${idx === 0 ? "bg-blue-50 border-blue-200" : "bg-orange-50 border-orange-200"}`}>
                  <h4 className="font-semibold text-gray-900 mb-3">{ingredientGroup.category}</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {ingredientGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex justify-between">
                        <span>• {item.name}</span>
                        <span className="text-gray-500">{item.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Instructions</h3>
            <div className="space-y-4">
              {mealDetails.instructions.map((instruction) => (
                <div key={instruction.step} className="p-4 border-l-4 border-orange-600 bg-orange-50 rounded">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {instruction.step}. {instruction.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{instruction.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nutritional Information */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="text-red-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">Nutritional Information (Per Serving)</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Calories</p>
                <p className="text-2xl font-bold text-red-600">{mealDetails.nutrition.calories}</p>
                <p className="text-xs text-gray-500">kcal</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Protein</p>
                <p className="text-2xl font-bold text-blue-600">{mealDetails.nutrition.protein}</p>
                <p className="text-xs text-gray-500">g</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Carbs</p>
                <p className="text-2xl font-bold text-yellow-600">{mealDetails.nutrition.carbs}</p>
                <p className="text-xs text-gray-500">g</p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Fat</p>
                <p className="text-2xl font-bold text-orange-600">{mealDetails.nutrition.fat}</p>
                <p className="text-xs text-gray-500">g</p>
              </div>
            </div>
          </div>

          {/* Tips & Variations */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-yellow-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">Chef Tips & Variations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">👨‍🍳 Pro Tips</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  {mealDetails.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">🔄 Variations</h4>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  {mealDetails.variations.map((variation, idx) => (
                    <li key={idx}>{variation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pairing Suggestions */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perfect Pairings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">🍚 Side Dishes</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {mealDetails.pairings.sides.map((side, idx) => (
                    <li key={idx}>• {side}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-gray-900 mb-2">🥗 Accompaniments</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {mealDetails.pairings.accompaniments.map((acc, idx) => (
                    <li key={idx}>• {acc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Storage Tips */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-blue-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">Storage & Reheating Tips</h3>
            </div>
            <div className="space-y-3">
              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">❄️ Refrigeration</h4>
                <p className="text-gray-700 text-sm">{mealDetails.storage.refrigeration}</p>
              </div>

              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">🧊 Freezing</h4>
                <p className="text-gray-700 text-sm">{mealDetails.storage.freezing}</p>
              </div>

              <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-1">🔥 Reheating</h4>
                <p className="text-gray-700 text-sm">{mealDetails.storage.reheating}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Meal Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow sticky top-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Meal Info</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">Difficulty</label>
                <div className="w-full p-2 border rounded-lg text-gray-900 font-semibold bg-gray-50">
                  {meal.difficulty || "Moderate"}
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">Cuisine</label>
                <div className="w-full p-2 border rounded-lg text-gray-900 font-semibold bg-gray-50">
                  {meal.cuisine}
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">Meal Type</label>
                <div className="w-full p-2 border rounded-lg text-gray-900 font-semibold bg-gray-50">
                  {meal.type}
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 font-medium uppercase block mb-2">Calories</label>
                <div className="w-full p-2 border rounded-lg text-orange-600 font-bold bg-orange-50">
                  {meal.calories} kcal
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition">
              Cook This Meal
            </button>
          </div>

          {/* Cost Summary Card */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Total Cost</span>
                <span className="font-semibold text-gray-900">₹{mealDetails.cost.total}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Per Serving</span>
                <span className="font-semibold text-gray-900">₹{mealDetails.cost.perServing}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-semibold text-gray-900">Servings</span>
                <span className="text-2xl font-bold text-orange-600">{mealDetails.servings}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium text-sm">
                🛒 Add to Shopping List
              </button>
              <button className="w-full py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition font-medium text-sm">
                ⭐ Save Recipe
              </button>
              <button className="w-full py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition font-medium text-sm">
                👥 Share Meal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}