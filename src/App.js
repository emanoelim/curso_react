import React, { Component } from 'react';
import { MainApp } from './styles.js'
import Routes from './routes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <MainApp>
        <Routes/>
      </MainApp>
    );
  }
}

export default App;
