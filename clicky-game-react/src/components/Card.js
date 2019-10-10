import React from 'react'
let imageId = 0

const imgStyling = {
    
    width: "10rem",
    border: "1px solid #021a40"
  
  }

class Card extends React.Component {
    //  imageId++
    // constructor(props) {
        state = {
            count: 0,
            win: 0,
            loss: 0
          };

          handleIncrement = () => {
              
            // We always use the setState method to update a component's state
            this.setState({ count: this.state.count + 1 });

            if (this.state.count === 1 ) {
                alert('you lost!')
                this.setState({ loss: this.state.loss + 1 });
                this.setState({ count: 0 });
            }

            else if (this.state.count === 0) {
                alert('you win')
                this.setState({ win: this.state.win + 1 });
            }
          };
       
    // }
    
    // handleChange() {

    // }
    

    render() {
        return(
            <div>
            {console.log(this.props.link)}
        <div onClick={this.handleIncrement} class="col">
        <img  src={this.props.thisLink} alt="..." style={imgStyling} className={imageId}/>
      </div>
      </div>
        )
    }
  }

//   function Card(link) {
 
//  imageId++

    //   return (
    
//       )
//   }

  

  export default Card