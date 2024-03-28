"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  console.log(data);
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const loadMealsIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas || []);
  };

  useEffect(() => {
    loadMealsIdeas();
  }, [ingredient]);

  return (
    <div>
      <h1 className="font-semibold text-white p-3 mt-9">
        Meal Ideas for {ingredient}
      </h1>
      <section className="border-slate-400 bg-slate-900 border-2 p-2 w-[40%]">
        {meals.length === 0 ? (
          <p className="text-white">No meal ideas found for {ingredient}.</p>
        ) : (
          meals.map((meal) => (
            <div className="grid grid-cols-3 gap-4">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                class="w-full h-32 object-cover mb-2 rounded-lg"
              />
              <ul className="text-white" key={meal.idMeal}>
                {meal.strMeal}
              </ul>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
