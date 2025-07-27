import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
// Favorites section
  favorites:[],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId]})),
  removeFavorite: (recipeId) => set(state => ({ favorites: state.favorites.filter(id => id !== recipeId)})),
  recommendations:[],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommend = state.recipes.filter(recipe => state.favorites.includes(recipe.id) && Math.random()> 0.5);
    return { recommendations: recommend};
  }),

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
