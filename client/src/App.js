import React from 'react';
import Jumbotron from './components/Jumbotron'
import Game from './components/Game'
import './components/css/App.css';


class App extends React.Component {

      render() {
  return (
    <div className="container-fluid">
    <Jumbotron/>
   <Game/>
   </div>
  );
}
}

export default App;
