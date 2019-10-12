import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';


class App extends React.Component {

      render() {
  return (
    <div>
    <Header/>
    <div className="container">
   <Game/>
   </div>
   </div>
  );
}
}

export default App;
