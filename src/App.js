import React, { useState , useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from 'axios';

function App() {
  const [search, setsearch] = useState("Ice");
  const [recipes, setrecipe] = useState([]);

  const APP_ID = "65dc79b6";
  const APP_KEY = "4e544cbd0302e59bc04caefdbc42904b";

  useEffect(() => {
     getRecipe();
  }, []);

  const getRecipe = async () => {
      await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then((response) => {
            console.log("Get Response", response.data.hits);
            setrecipe(response.data.hits);
        }).catch((error) => {
           console.log("Error",error);
        });
  }

  const onInputchange = (e) => {
    setsearch(e.target.value);
    getRecipe();
  }

  const onsearchfield = () => {
     getRecipe();
  }


  return (
    <div className="App">
          <Header search={search} onInputchange={onInputchange}  onsearchfield={onsearchfield}/>
          <div className='container m-50' id={search}>
             <Recipe recipes={recipes}/>
          </div>
    </div>
  );
}

export default App;
