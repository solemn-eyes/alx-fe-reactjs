
import { useState, useEffect } from "react";

function Recipe(){
    const[recipe, setRecipe]= useState([]);

    useEffect(()=>{
        fetch("src/data.json")
            .then(response => response.json())
            .then(data => setRecipe(data))
    }, []);

    return (
        <div className="content-center justify-items-center p-4">
            <h1 className="text-3xl font-bold mb-6">Recipe</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipe.map((recipe, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-black text-xl font-semibold mb-2">{recipe.title}</h2>
                        <p className="text-black mb-2">{recipe.summary}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recipe;