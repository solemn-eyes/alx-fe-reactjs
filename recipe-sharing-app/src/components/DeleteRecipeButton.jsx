import React from 'react';


const DeleteRecipeButton = ({ recipeId, onDelete }) => {
    const handleDelete = () => {
        
    };

    return (
        <button onClick={handleDelete} style={{ color: 'white', background: 'red', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
