import React, { Component } from 'react';

import './Jumbotron.css';

/*
 * Jumbotron to display a welcome message to the user in the PageFrame.
 */
class Jumbotron extends Component  {

  render() {
    const text = this.props.text;
    return (
      <div className="jumbotron">
        <span> <strong> { text } </strong></span>
      </div>
    );
  }
}

export default Jumbotron;
