import React, { Component } from 'react';


class EditionButtons extends Component {
  render() {
    return (
      <div className="editionButtons" >
        <button onClick={ this.props.saveAction } >Zapisz</button>
        <button className="cancel" onClick={ this.props.cancelAction } >Anuluj</button>
      </div>
    )
  }
}

export default EditionButtons;
