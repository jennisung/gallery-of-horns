import React from 'react';
import HornedBeast from './HornedBeast'
import data from './data/data.json';
import './Main.css'


class Main extends React.Component {
  render() {
    return  (
      <main>
      {/* JSON PICTURES */}
        {data.map(animalObj => {
          return <HornedBeast title={animalObj.title} description={animalObj.description} img_url={animalObj.image_url} />
        })}


     {/* MY CHOSEN PICTURES */}
        <HornedBeast title="Deer" description="A White deer eating grass in the field" img_url="https://images.unsplash.com/photo-1600382803118-e42a0cec247a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" />
        <HornedBeast title="Rhino" description="Closeup picture of a Rhino eating" img_url="https://plus.unsplash.com/premium_photo-1661929919403-30f9f8e7dac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" />
     </main>
    )
  }
}

export default Main;