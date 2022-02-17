import './App.css';
import React from 'react';
import data from './data';
import Pokedex from './Component/Pokedex'

function App() {
  return (
    <div>
      <Pokedex pokemon = { data }/>
    </div>
  );
}

export default App;
