import React from 'react';
import HornedBeast from './HornedBeast';
import './css/Main.css';
import Card from 'react-bootstrap/Card';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Card>

          {this.props.animals.map(animalObj => (
            <HornedBeast 
              key={animalObj.title}
              title={animalObj.title} 
              description={animalObj.description} 
              img_url={animalObj.image_url} 
              handleOpenModal={this.props.handleOpenModal}
            />
          ))}
        </Card>
      </main>
    );
  }
}

export default Main;

