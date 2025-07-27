import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        useRecipeStore.getState().deleteRecipe(recipeId);
        navigate('/recipes'); // Redirect to the recipe list after deletion
        
    };

    return (
        <button onClick={handleDelete} style={{ color: 'white', background: 'red', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
