import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './CurriculumCard.css';

/*
 * Card to display a single curriculum.
 */
class CurriculumCard extends Component  {

  render() {
    const curriculum = this.props.curriculum;
    const tags = ["#test ","#beginner "];

    if (curriculum.language) {
      curriculum.language.forEach(language => {
        tags.push("#"+language+" ");
      });
    }
    // TODO: add GET request for getting a repo's topics

    return (
      <Link to={{
          pathname: `/curriculums/${curriculum.id}`,
        }}>
        <div className="card-container">
          <div className="card">
            <div className="card-body">
              <span className="curriculum-title"> { curriculum.name } </span>
            </div>
            <div className="card-footer">
            </div>
            <div className="tags">
              { tags }
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default CurriculumCard;
