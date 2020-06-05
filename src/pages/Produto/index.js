import React, { Component } from 'react';


class Produto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({id: id});
    console.log(id);
  }

  render() {
    return(
      <div>
        <h2>Produto</h2>
      </div>
    );
  }
}

export default Produto;
