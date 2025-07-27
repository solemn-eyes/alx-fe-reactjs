
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  // Use filteredRecipes from the store instead of recipes
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes || state.recipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleUpdate = (recipe) => {
    const updatedRecipe = {
      ...recipe,
      title: recipe.title + ' (Updated)',
      description: recipe.description + ' (Updated)'
    };
    updateRecipe(updatedRecipe);
  };

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => handleUpdate(recipe)} style={{ marginRight: '8px' }}>Update</button>
          <button onClick={() => deleteRecipe(recipe.id)} style={{ color: 'white', background: 'red', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

    export default RecipeList;
