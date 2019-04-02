import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurriculumMap from '../CurriculumMap/CurriculumMap';
import './CurriculumInfo.css';

/*
 * Display information associated with a Curriculum
 */
class CurriculumInfo extends Component {

  render() {
    const { curriculum } = this.props;
    const tags = [];

    curriculum.tags.forEach(tag => {
      tags.push("#"+tag+" ");
    });

    return (
      <div>
        <Jumbotron className="curriculum-jumbotron">
          <h1>{ curriculum.name }</h1>
        </Jumbotron>
        <span>
          <div className="hashtags">
            { tags }
          </div>
          <a href={curriculum.repository}>
            <FontAwesomeIcon className="git-link" icon={['fab', 'github']} size="3x" />
          </a>
        </span>
        <span>
          <p className="curriculum-info-description">
            {curriculum.description}</p>
        </span>
        <CurriculumMap articles={curriculum.articles} projects={curriculum.projects}/>
      </div>
    );
  }
}

export default CurriculumInfo;
