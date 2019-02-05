import React, { Component } from 'react';

import './Jumbotron.css';

/*
 * Jumbotron to display a welcome message to the user in the PageFrame.
 */
class Jumbotron extends Component  {

  render() {
    return (
      <div className="jumbotron">
        <h1> Select from one of our many curriculm to get started!  </h1>
      </div>
    );
  }
}

export default Jumbotron;
