import React from 'react'
import Header from './Header'

let imageId = 0


const divStyling = {
  display: "inline-block",
  width: "10rem",
    border: "1px solid #021a40"
}

class Card extends React.Component {
    

    render() {
        return(
        <div onClick = {() => { this.props.handleIncrement(this.props.id); 
        // this.props.shuffle(this.props.id)
        ; }} >
        <img  src={this.props.thisLink} alt="..." style={divStyling} className={imageId}/>
      </div>
        )
    }
  }
  
  export default Card