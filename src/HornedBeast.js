import React from 'react';


class HornedBeast extends React.Component {
  render() {
    return(
     <>
       <h2>Moose: Horned Animal</h2>
       <img src={this.props.img_url} alt={this.props.alt} title={this.props.title}></img>
       <p> This is a horned animal. A Moose</p>
     </> 
    )
  }
}
export default HornedBeast;