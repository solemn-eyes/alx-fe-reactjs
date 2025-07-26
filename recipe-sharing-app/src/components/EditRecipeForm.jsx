import useRecipeStore from "./recipeStore";
import { useState } from 'react';

const updateRecipe = (recipe) => {
    useRecipeStore.getState().updateRecipe(recipe);
};

const deleteRecipe = (id) => {
    useRecipeStore.getState().deleteRecipe(id);
}

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ ...recipe, title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type="submit">Update Recipe</button>
            <button type="button" onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
        </form>
    );
};

export default EditRecipeForm;