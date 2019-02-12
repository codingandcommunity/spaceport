import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurriculumMap from '../components/CurriculumMap';

class CurriculumInfo extends Component {

  render() {
    const { curriculum } = this.props;
    const tags = ["#test ","#beginner "];

    if (curriculum.language) {
      curriculum.language.forEach(language => {
        tags.push("#"+language+" ");
      });
    }
    return (
      <div>
        <Jumbotron text={ curriculum.name }></Jumbotron>
        <span>
          <div className="hashtags">
            { tags }
          </div>
          <a href={curriculum.html_url}>
            <FontAwesomeIcon className="git-link" icon={['fab', 'github']} size="3x" />
          </a>
        </span>
        <span>
          <p className="description">
            Lorem ipsum dolor sit amet, ad sea eius viris, summo volutpat salutatus sit ut.
            Ei laudem officiis incorrupte ius, ex pro quaeque deserunt vituperatoribus.
            Usu offendit assentior adolescens ex. Ius ea dicunt praesent dissentias.
            Usu et munere virtute corrumpit, ad his oratio qualisque voluptatum. Mel noster lucilius constituto cu.</p>
        </span>
        <CurriculumMap />
      </div>
    );
  }
}

export default CurriculumInfo;
