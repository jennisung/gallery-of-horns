import React from 'react';


class HornedBeast extends React.Component {
  render() {
    return(
     <>
       <h2>Horned Animals</h2>
       <img src={this.props.img_url} alt={this.props.alt} title={this.props.title}></img>
       <p> {this.props.description}</p>
     </> 
    )
  }
}
export default HornedBeast;