import React, { Component } from 'react';


class EditionButtons extends Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.saveAction } >Zapisz</button>
        <button onClick={ this.props.cancelAction } >Anuluj</button>
      </div>
    )
  }
}

export default EditionButtons;
