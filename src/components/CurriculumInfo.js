import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurriculumMap from '../components/CurriculumMap';


/*
 * Display information associated with a Curriculum
 */
class CurriculumInfo extends Component {

  render() {
    const { curriculum } = this.props;
    const tags = [];

    // console.log(this.props.curriculm);
    // if (curriculum.language) {
    //   curriculum.language.forEach(language => {
    //     tags.push("#"+language+" ");
    //   });
    // }
    curriculum.tags.forEach(tag => {
      tags.push("#"+tag+" ");
    });
    return (
      <div>
        <Jumbotron>
          { curriculum.name }
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
          <p className="description">
            {curriculum.description}</p>
        </span>
        <CurriculumMap articles={curriculum.articles} projects={curriculum.projects}/>
      </div>
    );
  }
}

export default CurriculumInfo;
