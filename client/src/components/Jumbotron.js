import React from 'react';
import "./css/Jumbotron.css";

class Jumbotron extends React.Component {


    render() {
       
      return (
          <div>
              <div class="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-right">Clicky Game</h1>
    <p className="lead text-right">Click an image to start!</p>
  </div>
</div>
          </div>
      )
    }
  }

  export default Jumbotron