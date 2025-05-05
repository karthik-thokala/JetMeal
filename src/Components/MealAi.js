

import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
const generateMealSuggestion = async (mealTime, location) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat", 
        messages: [
          {
            role: "user",
            content: `What do you feel like eating for ${mealTime} at ${location}? Please give me a response of 5 to 6 lines with meal suggestions for ${mealTime} at ${location}. Include some of the most famous or popular dishes in ${location} that are typically eaten during ${mealTime}.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:1234", 
          "X-Title": "Meals.ai", 
        },
      }
    );

    const aiMessage = response.data.choices?.[0]?.message?.content || "No suggestions found.";
    return aiMessage;

  } catch (error) {
    console.error("Error fetching suggestion:\n", error);
    return "Sorry, I couldn't fetch meal suggestions. Please try again.";
  }
};

export default generateMealSuggestion;


