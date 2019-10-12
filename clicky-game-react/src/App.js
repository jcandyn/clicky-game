import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';


const links = ["https://cdn.pixabay.com/photo/2017/01/24/23/59/simpsons-2006756__480.jpg", "https://cdn.pixabay.com/photo/2017/01/25/00/00/simpsons-2006761__480.jpg", "https://cdn.pixabay.com/photo/2017/01/24/23/59/homer-2006749__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/30/toy-1921523__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/29/simpsons-1921521__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/29/toy-1921522__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/30/toy-1921524__480.jpg"]

class App extends React.Component {

      render() {
  return (
    <div>
    <Header/>
    <div class="container">
   <Game/>
   </div>
   </div>
  );
}
}

export default App;
