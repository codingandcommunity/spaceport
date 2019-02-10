import React, { Component } from 'react';
import CurriculumCard from '../components/CurriculumCard';

class CurriculumCardContainer extends Component {

    render() {
      const cards = [];

      this.props.curriculums.forEach((curriculum) => {
          cards.push(
            <CurriculumCard
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
