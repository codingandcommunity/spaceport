import React, { Component } from 'react';

import './CurriculumCard.css';

/*
 * Card to display a single curriculum.
 */
class CurriculumCard extends Component  {

  render() {
    return (
      <div className="card-container">

        <div className="card">
          <div className="card-header">
          </div>
          <div className="card-body">
            <span> Curriculum Title </span>
          </div>
          <div className="card-footer">
            <span> Not started </span>
          </div>
          <div className="tags">
            #python #new
          </div>
        </div>
      </div>
    );
  }
}

export default CurriculumCard;
