// REBUILD AS A CLASS COMPONENT

// 1ST IMPORT
import React from 'react';


// 2ND CREATE OUR CLASS COMPONENT
class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}


//3RD EXPORT THE CLASS FOR OTHER FILES TO USE
