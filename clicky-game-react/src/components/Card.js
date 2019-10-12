import React from 'react'
import "../Card.css";

class Card extends React.Component {

  
    render() {
        return(
          <div className="row">
        <div className="column" onClick = {() => { this.props.handleIncrement(this.props.id); 
        // this.props.shuffle(this.props.id)
        ; }} >
        <img  src={this.props.thisLink} alt="image of cartoon"/>
      </div>
      </div>
        )
    }
  }
  
  export default Card