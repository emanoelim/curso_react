import React, { Component } from 'react';
import Filme from './components/Filme';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filme:[
        {id:1, titulo:"A sociedade do anel", ano:2001},
        {id:2, titulo:"As duas torres", ano:2002},
        {id:3, titulo:"O retorno do rei", ano:2003},
      ]
    }
  }

  render() {
    return(
      <div>
        {this.state.filme.map((item) => {
          return(
            <Filme key={item.id} titulo={item.titulo} ano={item.ano}/>
          );
        })}
      </div>
    );
  }
}

export default App;
