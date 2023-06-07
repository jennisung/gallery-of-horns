import React from 'react';
import './css/HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
    <Card style={{ width: '18rem' }}>
       <h2>{this.props.title}</h2>
       <img src={this.props.img_url} alt={this.props.alt} title={this.props.title}></img>
       <Button variant="dark" onClick={this.handleHeart} > Click to Favorite</Button>
       <p> 😈 {this.state.heart} Number of Favorite</p>
       <p> {this.props.description}</p>
    </Card>
     </> 
    )
  }
}


export default HornedBeast;