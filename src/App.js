// REBUILD AS A CLASS COMPONENT

// 1ST IMPORT
import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
// import HornedBeast from './HornedBeast';


// 2ND CREATE OUR CLASS COMPONENT
class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
        {/* <HornedBeast /> */}
      </>
    )
  }
}


//3RD EXPORT THE CLASS FOR OTHER FILES TO USE
export default App;