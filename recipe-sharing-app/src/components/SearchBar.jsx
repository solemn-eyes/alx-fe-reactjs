import React from 'react';
import useRecipeStore from './recipeStore';
import { useState } from 'react';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const [input, setInput] = useState('');
  const handleSearch = () => {
    setSearchTerm(input);
  };

  return (
    <div>
      <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    
    </div>
  
  );
};

export default SearchBar;