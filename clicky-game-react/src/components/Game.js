import React from 'react';
let imageId = 0


const links = ["https://cdn.pixabay.com/photo/2017/01/24/23/59/simpsons-2006756__480.jpg", "https://cdn.pixabay.com/photo/2017/01/25/00/00/simpsons-2006761__480.jpg", "https://cdn.pixabay.com/photo/2017/01/24/23/59/homer-2006749__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/30/toy-1921523__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/29/simpsons-1921521__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/29/toy-1921522__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/30/toy-1921524__480.jpg"]

const imgStyling = {
    
  width: "10rem",
  border: "1px solid #021a40"

}

class Game extends React.Component {
    
    constructor(props) {

       
    }
    
    handleChange() {

    }
    

    render() {
       
      
      return (
        links.map(link => Card(link))
      )
    }
  }

  function Card(link) {
 
 imageId++

      return (
        <div class="col">
    <img src={link} alt="..."  onClick={this.handleChange} style={imgStyling} className={imageId}/>
  </div>
      )
  }

  

  export default Game