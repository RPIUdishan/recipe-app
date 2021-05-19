import './App.css';
// import './key'
import Axios from "axios"
import headerIcon from './assets/images/headerIcon.png'
import { useState } from 'react';

//hi
function App() {

  var [query, setQuery] = useState("")
  
  const YOUR_APP_ID = "bbd18a7c";
  const YOUR_APP_KEY = "7aeeb949663b0c475df765e6a981bdc2";
  
  var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  async function getRecipes(){
    var result = await Axios.get(url);
    console.log(result)
  }

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Collection<img className="headerIcon" src={headerIcon} alt="fireSpot"/></h1>
      <form className="appSearchForm">
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
    </div>
  );
}

export default App;
