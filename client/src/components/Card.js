import React from 'react'
import "./css/Card.css";

class Card extends React.Component {

  
    render() {
        return(
        
        <div className="col-md-2" onClick = {() => { this.props.handleIncrement(this.props.id); 
        this.props.shuffle(this.props.id)
        ; }} >
        <img  src={this.props.thisLink} alt="image of cartoon"/>
      </div>
        )
    }
  }
  
  export default Card