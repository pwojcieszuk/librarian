import React, { Component } from 'react';


class EditableCell extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value || ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });

    this.props.handleChange(e);
  }

  render() {
    return (
      <dd>
        <input type="text" name={ this.props.name } value={ this.state.value } onChange={ this.handleChange } />
      </dd>
    );
  }
}

export default EditableCell;
