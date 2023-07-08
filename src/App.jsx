import React from 'react';
import './sass/style.scss';
import Header from './components/Header';
import ListPokemon from "./components/List";


function App() {
  return (
    <>
      <Header />
      <ListPokemon />
    </>
    
  );
}

export default App;
