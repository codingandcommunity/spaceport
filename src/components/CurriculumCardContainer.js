import React, { Component } from 'react';

import PageFrame from '../components/PageFrame';
import Jumbotron from '../components/Jumbotron';
import CurriculumCard from '../components/CurriculumCard';

class CurriculumCardContainer extends Component {

    render() {
      const cards = [];

      this.props.curriculums.forEach((curriculum) => {
          cards.push(
            <CurriculumCard
              id={curriculum.id}
              key={curriculum.id}
              curriculum={curriculum} />
          );
      });

      return (
        <div>
          {cards}
        </div>
      );
    }
}

export default CurriculumCardContainer;
