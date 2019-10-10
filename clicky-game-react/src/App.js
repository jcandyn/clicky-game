import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <div class="container">
    <div class="row col-md-12">
   <Game/>
   </div>
   </div>
   </div>
  );
}

export default App;
