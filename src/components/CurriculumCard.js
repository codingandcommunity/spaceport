import React, { Component } from 'react';

import './CurriculumCard.css';

/*
 * Card to display a single curriculum.
 */
class CurriculumCard extends Component  {

  render() {
    const id = this.props.id;
    const curriculum = this.props.curriculum;
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-header">
          </div>
          <div className="card-body">
            <span> { curriculum.title } </span>
          </div>
          <div className="card-footer">
            <span> Not started </span>
          </div>
          <div className="tags">
            { curriculum.tags }
          </div>
        </div>
      </div>
    );
  }
}

export default CurriculumCard;
