import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sobre extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <h2>Sobre</h2>
        <br/>
        <Link to="/">Ir para home</Link>
      </div>
    );
  }
}

export default Sobre;
