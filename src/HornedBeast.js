import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      heart: 0
    }
  }  

  // ** METHOD THAT WILL UPDATE STATE ON CLICK
  handleHeart = () => {
    // react method that will allow me to change state -> takes in the object rebuilds that into state
    this.setState({
      heart: this.state.heart + 1
   })
  }

  render() {
    return(
     <>
      <article>
       <h2>{this.props.title}</h2>
       <p> ❤️ {this.state.heart} Number of Favorite</p>
       <p onClick={this.handleHeart} > Click Here to Favorite</p>
       <img src={this.props.img_url} alt={this.props.alt} title={this.props.title}></img>
       <p> {this.props.description}</p>
       </article>
     </> 
    )
  }
}


export default HornedBeast;