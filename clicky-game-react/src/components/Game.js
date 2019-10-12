import React from 'react';
import Card from './Card'

let links = ["https://cdn.pixabay.com/photo/2017/01/24/23/59/simpsons-2006756__480.jpg", "https://cdn.pixabay.com/photo/2017/01/25/00/00/simpsons-2006761__480.jpg", "https://cdn.pixabay.com/photo/2017/01/24/23/59/homer-2006749__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/30/toy-1921523__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/29/simpsons-1921521__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/29/toy-1921522__480.jpg", "https://cdn.pixabay.com/photo/2016/12/20/21/30/toy-1921524__480.jpg"]

let newArray = links
class Game extends React.Component {

  
  //  imageId++
    // constructor(props) {
      state = {
        highScore: 0,
        score: 0,
        loss: 0
      };

      handleIncrement = (id) => {
        console.log(newArray.length)
        if (!newArray.includes(id)) {
          alert('you lose!')
          this.setState({ score: 0});
         
        }

        else if (newArray.includes(id)) {
        // this.setState({ count: this.state.count + 1 });
        newArray = links.filter(link => link !== id)
        console.log(newArray)
        this.setState({ score: this.state.score + 1 });
        }
      };

    render() {

      return (
        <div>
             <h1>Score: {this.state.score} </h1>
        {/* {(this.state.highScore < this.state.score) ? this.setState({highScore: this.state.score}) : this.setState({highScore: this.state.highScore})}  */}
        <h1>Highest Score: {this.state.highScore}</h1>
        {links.map(link => <Card handleIncrement = {this.handleIncrement} thisLink={link} id={link}/>)}
        </div>
        
      )
    }
  }

  export default Game