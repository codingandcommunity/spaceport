import React, { Component } from 'react';

import './Jumbotron.css';

/*
 * Jumbotron to display a welcome message to the user in the PageFrame.
 */
class Jumbotron extends Component  {

  render() {
    return (
      <div className="jumbotron">
        <span> <strong>Select from one of our many curriculm to get started!</strong></span>
      </div>
    );
  }
}

export default Jumbotron;
