import useRecipeStore from "./recipeStore";
import { useState } from 'react';



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
            
        </form>
    );
};

export default EditRecipeForm;