import React from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>Get Recommendations</button>
      <ul>
        {recommendations.length === 0 ? (
          <li>No recommendations yet.</li>
        ) : (
          recommendations.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RecommendationsList;
