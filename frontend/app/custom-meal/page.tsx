"use client";

import React, { useState } from "react";
import { Plus, X, ShoppingCart, AlertCircle } from "lucide-react";

type CustomMealSuggestion = {
  id: string;
  name: string;
  description: string;
  matchScore: number;
  matchedIngredients: string[];
  missingIngredients: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Moderate" | "Hard";
  cuisine: string;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  cost: {
    total: number;
    perServing: number;
  };
  instructions: string[];
};

// Meal database
const mealDatabase: CustomMealSuggestion[] = [
  {
    id: "custom-meal-1",
    name: "Butter Chicken with Rice",
    description: "Creamy chicken curry served with basmati rice, perfect for your high-protein needs.",
    matchScore: 0,
    matchedIngredients: [],
    missingIngredients: [],
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 2,
    difficulty: "Moderate",
    cuisine: "Indian",
    nutrition: { calories: 450, protein: 35, carbs: 42, fat: 18 },
    cost: { total: 240, perServing: 120 },
    instructions: [
      "Heat butter in a pan and sauté onions until golden brown.",
      "Add ginger-garlic paste and cook for 2 minutes.",
      "Add marinated chicken and cook until 70% done.",
      "Add tomato sauce and spices, simmer for 10 minutes.",
      "Stir in cream and cook for another 5 minutes.",
      "Serve hot with basmati rice.",
    ],
  },
  {
    id: "custom-meal-2",
    name: "Chicken Fried Rice",
    description: "Quick and easy stir-fried rice with chicken and vegetables.",
    matchScore: 0,
    matchedIngredients: [],
    missingIngredients: [],
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Easy",
    cuisine: "Asian",
    nutrition: { calories: 380, protein: 28, carbs: 48, fat: 12 },
    cost: { total: 180, perServing: 90 },
    instructions: [
      "Heat oil in a wok or large pan.",
      "Add minced garlic and ginger, stir fry for 30 seconds.",
      "Add cooked chicken and vegetables, stir fry for 2 minutes.",
      "Add cooked rice and mix well.",
      "Add soy sauce and sesame oil, toss everything together.",
      "Serve hot with green onions on top.",
    ],
  },
  {
    id: "custom-meal-3",
    name: "Paneer Tikka Masala",
    description: "Soft paneer cubes in a creamy tomato-based gravy.",
    matchScore: 0,
    matchedIngredients: [],
    missingIngredients: [],
    prepTime: "20 mins",
    cookTime: "25 mins",
    servings: 2,
    difficulty: "Moderate",
    cuisine: "Indian",
    nutrition: { calories: 380, protein: 22, carbs: 25, fat: 22 },
    cost: { total: 220, perServing: 110 },
    instructions: [
      "Marinate paneer cubes with yogurt and spices.",
      "Grill or pan-fry the paneer until golden.",
      "In another pan, sauté onions and tomato sauce.",
      "Add the grilled paneer to the gravy.",
      "Simmer with cream and spices for 5 minutes.",
      "Garnish with cilantro and serve with rice or naan.",
    ],
  },
  {
    id: "custom-meal-4",
    name: "Spinach & Paneer Curry",
    description: "Nutritious curry combining spinach with soft paneer cubes.",
    matchScore: 0,
    matchedIngredients: [],
    missingIngredients: [],
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 2,
    difficulty: "Easy",
    cuisine: "Indian",
    nutrition: { calories: 280, protein: 18, carbs: 15, fat: 15 },
    cost: { total: 150, perServing: 75 },
    instructions: [
      "Blanch spinach and blend into a smooth paste.",
      "Sauté onions, ginger, and garlic in a pan.",
      "Add spinach paste and cook for 2 minutes.",
      "Add paneer cubes and mix gently.",
      "Add cream and spices, simmer for 5 minutes.",
      "Serve with roti or rice.",
    ],
  },
  {
    id: "custom-meal-5",
    name: "Mushroom Risotto",
    description: "Creamy rice dish with earthy mushrooms and parmesan.",
    matchScore: 0,
    matchedIngredients: [],
    missingIngredients: [],
    prepTime: "10 mins",
    cookTime: "25 mins",
    servings: 2,
    difficulty: "Moderate",
    cuisine: "Italian",
    nutrition: { calories: 420, protein: 15, carbs: 52, fat: 16 },
    cost: { total: 280, perServing: 140 },
    instructions: [
      "Heat butter and sauté mushrooms until golden.",
      "Add onions and garlic, cook for 1 minute.",
      "Add arborio rice and toast for 2 minutes.",
      "Add warm broth gradually, stirring constantly.",
      "When rice is creamy, add parmesan and cream.",
      "Season to taste and serve immediately.",
    ],
  },
];

// Get meal recommendations based on ingredients
const getMealRecommendations = (ingredients: string[]): CustomMealSuggestion[] => {
  const normalizedIngredients = ingredients
    .map((ing) => ing.toLowerCase().trim())
    .filter((ing) => ing.length > 0);

  if (normalizedIngredients.length === 0) {
    return [];
  }

  const getMealMainIngredients = (mealName: string): string[] => {
    const mealIngredientsMap: Record<string, string[]> = {
      "butter chicken with rice": ["chicken", "butter", "onion", "tomato", "rice"],
      "chicken fried rice": ["chicken", "rice", "onion", "garlic", "ginger"],
      "paneer tikka masala": ["paneer", "tomato", "onion", "cream", "yogurt"],
      "spinach & paneer curry": ["spinach", "paneer", "onion", "garlic", "cream"],
      "mushroom risotto": ["mushroom", "rice", "onion", "butter", "cream"],
    };

    return mealIngredientsMap[mealName.toLowerCase()] || [];
  };

  const scoredMeals = mealDatabase.map((meal) => {
    const mealIngredients = getMealMainIngredients(meal.name);
    let matchedIngredients: string[] = [];
    let missingIngredients: string[] = [];

    // Check matches
    normalizedIngredients.forEach((userIngredient) => {
      const found = mealIngredients.some((mealIng) => {
        if (
          mealIng.includes(userIngredient) ||
          userIngredient.includes(mealIng)
        ) {
          matchedIngredients.push(mealIng);
          return true;
        }
        return false;
      });
    });

    // Check missing
    mealIngredients.forEach((mealIng) => {
      if (!matchedIngredients.includes(mealIng)) {
        missingIngredients.push(mealIng);
      }
    });

    const matchScore = mealIngredients.length > 0
      ? Math.round((matchedIngredients.length / mealIngredients.length) * 100)
      : 0;

    return {
      ...meal,
      matchScore,
      matchedIngredients: [...new Set(matchedIngredients)],
      missingIngredients: [...new Set(missingIngredients)],
    };
  });

  return scoredMeals
    .filter((meal) => meal.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);
};

export default function MealPlannerUI() {
  const [ingredients, setIngredients] = useState([""]); // Start with one empty input
  const [customMessage, setCustomMessage] = useState("");
  const [showMealDetails, setShowMealDetails] = useState(false);
  const [suggestions, setSuggestions] = useState<CustomMealSuggestion[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<CustomMealSuggestion | null>(null);

  // Sample ingredient suggestions
  const ingredientSuggestions = [
    "Chicken",
    "Rice",
    "Tomato",
    "Onion",
    "Garlic",
    "Ginger",
    "Paneer",
    "Spinach",
    "Potato",
    "Carrot",
    "Beans",
    "Mushroom",
  ];

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients.length === 0 ? [""] : newIngredients);
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddSuggestion = (suggestion: string) => {
    const lastIndex = ingredients.length - 1;
    if (ingredients[lastIndex] === "") {
      handleIngredientChange(lastIndex, suggestion);
    } else {
      setIngredients([...ingredients, suggestion]);
    }
  };

  const handleGenerateMeal = () => {
    const hasValidIngredient = ingredients.some(
      (ingredient) => ingredient.trim() !== ""
    );

    if (!hasValidIngredient) {
      alert("Please enter at least one ingredient");
      return;
    }

    const meals = getMealRecommendations(
      ingredients.filter((ing) => ing.trim() !== "")
    );

    setSuggestions(meals);

    if (meals.length > 0) {
      setSelectedMeal(meals[0]);
      setShowMealDetails(true);

      setTimeout(() => {
        const mealSection = document.getElementById("meal-details");
        if (mealSection) {
          mealSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      alert("No meals found with your ingredients. Try adding more ingredients.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Custom Meal Planner</h1>
          <p className="text-gray-600 mt-2">Find delicious meals based on your available ingredients</p>
        </div>
      </header>

      {/* Input Section */}
      <section className="bg-white p-6 rounded-2xl shadow grid grid-cols-1 gap-6">
        {/* Ingredients Input */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Enter Your Ingredients</h2>
          <div className="space-y-3 mb-4">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) =>
                    handleIngredientChange(index, e.target.value)
                  }
                  placeholder={`Ingredient ${index + 1}`}
                  className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {ingredients.length > 1 && (
                  <button
                    onClick={() => handleRemoveIngredient(index)}
                    className="px-3 py-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Ingredient Button */}
          <button
            onClick={handleAddIngredient}
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition font-medium"
          >
            <Plus size={20} /> Add Ingredient
          </button>
        </div>

        {/* Ingredient Suggestions */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Suggested Ingredients
          </h3>
          <div className="flex flex-wrap gap-2">
            {ingredientSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleAddSuggestion(suggestion)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition text-sm"
              >
                + {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Taste</option>
            <option>Spicy</option>
            <option>Sweet</option>
            <option>Savoury</option>
          </select>

          <select className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Nutrition</option>
            <option>High Protein</option>
            <option>Low Carb</option>
            <option>Low Calorie</option>
          </select>

          <select className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filter by Budget</option>
            <option>Under ₹100</option>
            <option>Under ₹200</option>
            <option>Under ₹300</option>
          </select>
        </div>

        {/* Custom Message Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Custom Instructions (Optional)
          </label>
          <textarea
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            placeholder="Add any special instructions or preferences for your meal..."
            className="w-full h-24 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Generate Meal Button */}
        <button
          onClick={handleGenerateMeal}
          className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition font-semibold"
        >
          🔍 Generate Meal Suggestions
        </button>
      </section>

      {/* Suggestions List */}
      {showMealDetails && suggestions.length > 0 && (
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Found {suggestions.length} Meal Suggestion{suggestions.length !== 1 ? "s" : ""}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.map((meal) => (
              <button
                key={meal.id}
                onClick={() => setSelectedMeal(meal)}
                className={`p-4 border-2 rounded-xl text-left transition ${
                  selectedMeal?.id === meal.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-400"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{meal.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                    {meal.matchScore}%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{meal.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    ⏱️ {meal.prepTime}
                  </span>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
                    🔥 {meal.nutrition.calories} cal
                  </span>
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                    💰 ₹{meal.cost.perServing}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Output Section - Selected Meal Details */}
      {showMealDetails && selectedMeal && (
        <section
          id="meal-details"
          className="bg-white p-6 rounded-2xl shadow flex flex-col gap-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">{selectedMeal.name}</h2>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
              ✅ {selectedMeal.matchScore}% Match
            </div>
          </div>

          {/* Matched & Missing Ingredients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-xl bg-green-50 border-green-200">
              <h3 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                ✅ You Have ({selectedMeal.matchedIngredients.length})
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {selectedMeal.matchedIngredients.map((ing, idx) => (
                  <li key={idx}>• {ing}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 border rounded-xl bg-amber-50 border-amber-200">
              <h3 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                ⚠️ You Need ({selectedMeal.missingIngredients.length})
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {selectedMeal.missingIngredients.map((ing, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span>• {ing}</span>
                    <button className="ml-2 px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg transition flex items-center gap-1 text-xs">
                      <ShoppingCart size={14} /> Buy
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Overview Section */}
          <div className="p-4 border rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">Overview</h3>
            <p className="text-gray-700">{selectedMeal.description}</p>
          </div>

          {/* Dish Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-xl bg-gray-50">
              <h3 className="font-semibold mb-3 text-gray-900">
                Cooking Time & Servings
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Prep Time:</span>
                  <span className="font-medium">{selectedMeal.prepTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cook Time:</span>
                  <span className="font-medium">{selectedMeal.cookTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Servings:</span>
                  <span className="font-medium">{selectedMeal.servings}</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficulty:</span>
                  <span className={`font-medium px-2 py-1 rounded ${
                    selectedMeal.difficulty === "Easy"
                      ? "bg-green-100 text-green-700"
                      : selectedMeal.difficulty === "Moderate"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {selectedMeal.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-xl bg-gray-50">
              <h3 className="font-semibold mb-3 text-gray-900">Cuisine</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Cuisine Type:</span>
                  <span className="font-medium">{selectedMeal.cuisine}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Per Serving Nutrition Section */}
          <div className="p-4 border rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Per Serving Nutritional Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-white rounded-lg border border-green-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Calories</p>
                <p className="text-2xl font-bold text-green-600">
                  {selectedMeal.nutrition.calories}
                </p>
                <p className="text-xs text-gray-500">kcal</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Protein</p>
                <p className="text-2xl font-bold text-blue-600">
                  {selectedMeal.nutrition.protein}
                </p>
                <p className="text-xs text-gray-500">g</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-yellow-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Carbs</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {selectedMeal.nutrition.carbs}
                </p>
                <p className="text-xs text-gray-500">g</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-orange-200">
                <p className="text-xs text-gray-600 font-medium mb-1">Fat</p>
                <p className="text-2xl font-bold text-orange-600">
                  {selectedMeal.nutrition.fat}
                </p>
                <p className="text-xs text-gray-500">g</p>
              </div>
            </div>
          </div>

          {/* Cost Section */}
          <div className="p-4 border rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
            <h3 className="font-semibold text-lg mb-4 text-gray-900">
              Estimated Cost
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg border border-purple-200">
                <p className="text-sm text-gray-600 mb-1">Total Cost</p>
                <p className="text-3xl font-bold text-purple-600">₹{selectedMeal.cost.total}</p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-purple-200">
                <p className="text-sm text-gray-600 mb-1">Cost per Serving</p>
                <p className="text-3xl font-bold text-purple-600">₹{selectedMeal.cost.perServing}</p>
              </div>
            </div>
          </div>

          {/* Method / Instructions */}
          <div className="p-4 border rounded-xl bg-gray-50">
            <h3 className="font-semibold mb-3 text-gray-900">
              Method / Instructions
            </h3>
            <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-2">
              {selectedMeal.instructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition flex items-center justify-center gap-2">
              <ShoppingCart size={20} /> Add Missing Items to Cart
            </button>
            <button className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition">
              ⭐ Save Recipe
            </button>
          </div>
        </section>
      )}

      {/* No results message */}
      {showMealDetails && suggestions.length === 0 && (
        <section className="bg-amber-50 border-2 border-amber-200 p-6 rounded-2xl">
          <div className="flex gap-4 items-start">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-amber-900 text-lg">
                No Meals Found
              </h3>
              <p className="text-amber-800 mt-2">
                We couldn't find any meals that match your ingredients. Try adding more ingredients or removing some filters.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}