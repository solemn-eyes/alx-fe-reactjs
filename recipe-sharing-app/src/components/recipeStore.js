import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.description.toLowerCase().includes(term.toLowerCase())
      )
    }));
  },
  addRecipe: (newRecipe) => {
    set(state => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const term = state.searchTerm;
      return {
        recipes: updatedRecipes,
        filteredRecipes: term
          ? updatedRecipes.filter(recipe =>
              recipe.title.toLowerCase().includes(term.toLowerCase()) ||
              recipe.description.toLowerCase().includes(term.toLowerCase())
            )
          : updatedRecipes
      };
    });
  },
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => {
    set(state => {
      const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
      const term = state.searchTerm;
      return {
        recipes: updatedRecipes,
        filteredRecipes: term
          ? updatedRecipes.filter(recipe =>
              recipe.title.toLowerCase().includes(term.toLowerCase()) ||
              recipe.description.toLowerCase().includes(term.toLowerCase())
            )
          : updatedRecipes
      };
    });
  },
  updateRecipe: (updatedRecipe) => {
    set(state => {
      const updatedRecipes = state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      const term = state.searchTerm;
      return {
        recipes: updatedRecipes,
        filteredRecipes: term
          ? updatedRecipes.filter(recipe =>
              recipe.title.toLowerCase().includes(term.toLowerCase()) ||
              recipe.description.toLowerCase().includes(term.toLowerCase())
            )
          : updatedRecipes
      };
    });
  }
}));
    

export default useRecipeStore;
