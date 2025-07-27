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
            
        </div>
    );
};


export default RecipeDetails;