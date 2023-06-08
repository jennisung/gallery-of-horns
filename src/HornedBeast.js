import React from 'react';
import './css/HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heart: 0
    };
  }

  handleHeart = () => {
    this.setState(prevState => ({
      heart: prevState.heart + 1
    }));
    this.props.handleOpenModal(this.props.title);
  }

  render() {
    return (
      <main>
        <div className="card-container">
      <Card onClick={() => this.props.handleOpenModal(this.props.title)}>
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.img_url}
          alt={this.props.title}
          title={this.props.title}
        />
        <Button variant="primary" onClick={this.handleHeart}>Click to Favorite</Button>
        <p> 😈 {this.state.heart} Number of Favorites</p>
        {/* <p>{this.props.description}</p> */}
      </Card>
      </div>
      </main>
    );
  }
}

export default HornedBeast;

