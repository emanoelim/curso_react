import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Erro extends Component {
  render() {
    return(
      <div>
        <h2>Página não encontrada...</h2>
        <h3>Você está procurando por:</h3>
        <Link to="/">Home</Link><br/>
      </div>
    );
  }
}

export default Erro;
