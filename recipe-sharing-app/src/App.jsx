import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'

function App() {
  const [count, setCount] = useState(0)
  const description = " "
  return (
  
    <>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <h2>Recipe Form</h2>
      <AddRecipeForm />
      <h2>Recipe List</h2>
      <RecipeList />
      <h2>Recipe Details</h2>
      <RecipeDetails recipeId={1} />
      <h2>Edit Recipe Form</h2>
      <EditRecipeForm recipe={{ id: 1, title: 'Sample Recipe', description }} />
      <h2>Delete Recipe Button</h2>
      <DeleteRecipeButton recipeId={1} onDelete={(id) => console.log(`Recipe with ID ${id} deleted`)} />
      

    </>
  )
}

export default App
