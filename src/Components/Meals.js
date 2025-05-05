import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import generateMealSuggestion from "./MealAi"; 

const getMealTime = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "breakfast";
  if (hour >= 11 && hour < 15) return "lunch";
  if (hour >= 15 && hour < 18) return "snacks";
  if (hour >= 18 && hour < 23) return "dinner";
  return "late-night snack";
};

const MealSuggestionUI = () => {
  const navigate = useNavigate();
  const [mealTime, setMealTime] = useState("");
  const [location, setLocation] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMealTime(getMealTime());
  }, []);

  const handleSearch = async () => {
    if (!location) {
      alert("Please enter your location.");
      return;
    }

    setLoading(true);
    
    const response = await generateMealSuggestion(mealTime, location);

   
    setAiResponse(response);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-300 to-red-300 flex flex-col items-center justify-center p-6 font-sans space-y-6">
      <button
        onClick={() => navigate("/")}
        className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition duration-200"
      >
        ⬅️ Back to Home
      </button>

      <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-10 w-full max-w-2xl min-h-[420px]">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
          What do you feel like eating for {mealTime}?
        </h2>

        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 shadow-sm text-lg mb-6 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition duration-200"
        >
          {loading ? "Fetching suggestions..." : "🍽️ Get Restaurant Suggestions"}
        </button>

        {aiResponse && (
          <div className="mt-6 bg-gray-100 rounded-lg p-4 text-gray-800 whitespace-pre-line">
            
            {aiResponse}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealSuggestionUI;

