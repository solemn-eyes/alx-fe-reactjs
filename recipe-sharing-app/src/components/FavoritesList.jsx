import useRecipeStore from "./recipeStore";
import { useMemo } from "react";

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);
  const favoriteRecipes = useMemo(
    () => favorites.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean),
    [favorites, recipes]
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;