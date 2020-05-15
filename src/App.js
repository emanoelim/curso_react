import React, { Component } from 'react';


// class components
class Equipe extends Component {
  render() {
    return(
      <div>
        <Sobre nome={this.props.nome}
               idade={this.props.idade}
               cargo={this.props.cargo}/>
        <Social facebook={this.props.facebook}
                linkedin={this.props.linkedin}/>
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return(
      <div>
        <h3>Olá! Sou o(a) {this.props.nome}. Tenho {this.props.idade} anos e sou {this.props.cargo}.</h3>
      </div>
    );
  }
}

class Social extends Component {
  render() {
    return(
      <div>
        <a href={this.props.facebook}> Facebook | </a>
        <a href={this.props.linkedin}> LinkedIn</a>
      </div>
    );
  }
}

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }

    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }

  incrementar() {
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  decrementar() {
    let state = this.state;
    state.contador -= 1;
    this.setState(state);
  }

  render() {
    return(
      <div>
        <button onClick={this.decrementar}>Decrementar</button>
        {this.state.contador}
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}


// components
/*
const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social facebook={props.facebook} linkedin={props.linkedin}/>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h3>Olá! Sou o(a) {props.nome}. Tenho {props.idade} anos e trabalho como {props.cargo}.</h3>
    </div>
  );
}

const Social = (props) => {
    return(
      <div>
        <a href={props.facebook}> Facebook | </a>
        <a href={props.linkedin}> LinkedIn</a>
      </div>
    );
}
*/


function App() {
  return(
    <div>
      <Equipe nome="Emanoeli"
              cargo="Desnvolvedora web"
              idade="28"
              facebook="https://www.facebook.com/emanoeli.madalosso"
              linkedin="https://www.linkedin.com/in/emanoeli-madalosso-75610396/"/>
      <Contador/>
    </div>
  )
}

export default App;
