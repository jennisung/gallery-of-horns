// REBUILD AS A CLASS COMPONENT

// 1ST IMPORT
import React from 'react';
import './css/App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast'




// 2ND CREATE OUR CLASS COMPONENT
class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      showModal: false,
      animalData: data, 
      selectedAnimal: {}
    }

  }

  // *** MODAL METHODS ***
  handleOpenModal = (name) => {
    let selectedAnimal = data.find(animal => animal.title === name);

    this.setState ({
      showModal: true,
      selectedAnimal
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>

        <Header/>
        <Main 
        animals ={this.state.animalData}
        handleOpenModal = {this.handleOpenModal}/>
        <SelectedBeast 
          showModal={this.state.showModal}
          handleCloseModal ={this.handleCloseModal}
          selectedAnimal={this.state.selectedAnimal}
        />
        <Footer />
      </>
    )
  }
}


//3RD EXPORT THE CLASS FOR OTHER FILES TO USE
export default App;