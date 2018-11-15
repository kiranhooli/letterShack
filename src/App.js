import React, { Component } from 'react';
import NavBar from './component/NavBar';
import FooterView from './component/FooterView';

class App extends Component {
	
  render() {
    return (
      <div>
        <NavBar />
        <FooterView />
      </div>
    );
  }
}

export default App;