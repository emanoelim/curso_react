import React, { Component } from 'react';


class Filme extends Component {
    render() {
        return(
            <div key={this.props.id}>
                <h3>{this.props.titulo}</h3>
                <a>{this.props.ano}</a>
                <hr/>
            </div>
        );
    }
}

export default Filme;
