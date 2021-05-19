import './App.css';
// import './key'
import Axios from "axios"
import headerIcon from './assets/images/headerIcon.png'
import { useState } from 'react';
import RecipeTile from './RecipeTile';

//hi
function App() {

  var [query, setQuery] = useState("");
  var [recipes, setRecipes] = useState([]);
  
  
  const YOUR_APP_ID = "bbd18a7c";
  const YOUR_APP_KEY = "7aeeb949663b0c475df765e6a981bdc2";
  
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&calories=591-722&health=alcohol-free`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);  
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Collection<img className="headerIcon" src={headerIcon} alt="fireSpot"/></h1>
      <form className="appSearchForm" onSubmit={onSubmit}>
        <input 
        type="text" 
        className="appInput"
        placeholder="Enter" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <input 
        type="submit" 
        className="appSubmit"
        value="Search"
        />
      </form>

  

      <div className="recipeTile">
        {recipes.map((recipe) => {
          return <RecipeTile recipe = {recipe}/>
        })}
      </div>
    </div>
    
  );
}

export default App;
