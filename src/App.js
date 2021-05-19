import './App.css';
// import './key'
import Axios from "axios"

//hi
function App() {
  const YOUR_APP_ID = "bbd18a7c";

  const YOUR_APP_KEY = "7aeeb949663b0c475df765e6a981bdc2";
  var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  async function getRecipes(){
    var result = await Axios.get(url);
    console.log(result)
  }

  return (
    <div className="App">
      <h1 onClick={getRecipes}>Hello Ishanka</h1>
    </div>
  );
}

export default App;
