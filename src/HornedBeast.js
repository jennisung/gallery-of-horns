import React from 'react';


class HornedBeast extends React.Component {
  render() {
    return(
     <>
      <article>
       <h2>Horned Animals</h2>
       <h3>{this.props.title}</h3>
       <img src={this.props.img_url} alt={this.props.alt} title={this.props.title}></img>
       <p> {this.props.description}</p>
       </article>
     </> 
    )
  }
}
export default HornedBeast;