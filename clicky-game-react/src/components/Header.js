import React from 'react';
import Jumbotron from './Jumbotron';

class Header extends React.Component {


    render() {
       
      return (
        <div>
      <h1>{this.props.score}</h1>
        <Jumbotron/>
        </div>
 
      )
    }
  }

  export default Header