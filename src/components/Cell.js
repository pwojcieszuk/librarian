import React, { Component } from 'react';


class Cell extends Component {
  render() {
    return (
      <dd>{ this.props.value }</dd>
    );
  } 
}

export default Cell;
