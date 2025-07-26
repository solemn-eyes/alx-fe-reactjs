import useRecipeStore from "./recipeStore";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
    const { id } = useParams();
    const recipeId = Number(id);
    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId));
    if (!recipe) {
        return <div>Recipe not found.</div>;
    }
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <button onClick={() => useRecipeStore.getState().deleteRecipe(recipe.id)}>Delete Recipe</button>
            <button onClick={() => useRecipeStore.getState().updateRecipe({ ...recipe, title: "Updated Title", description: "Updated Description" })}>Update Recipe</button>
        </div>
    );
};


export default RecipeDetails;