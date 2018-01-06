import React, { Component } from 'react';
import Cell from './Cell';
import EditableCell from './EditableCell';


class Row extends Component {
  render() {
    return (
      <div>
        <dt>{ this.props.title }</dt>
        { this.props.editMode ? (<EditableCell name={ this.props.name } value={ this.props.data } handleChange={ this.props.handleChange } />) 
          : (<Cell value={ this.props.data } />) }
      </div>
    );
  }
}

export default Row;
