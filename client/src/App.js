import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'; 
import {Landing} from './Components/Landing/Landing'
import {Home} from './Components/Home/Home'
import {Types} from './Components/Types/Types'
import {Form} from './Components/Form/Form'
import {Details} from './Components/Details/Details'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/"><Landing/></Route>
        <Route exact path = "/pokemons" ><Home/></Route>
        <Route exact path = "/types" ><Types/></Route>
        <Route exact path = "/pokemon" ><Form/></Route>
        <Route exact path = "/pokemons/:id" ><Details/></Route>
      </Switch>
    </div>
  );
}

export default App;
