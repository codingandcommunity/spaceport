import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurriculumCard from '../CurriculumCard/CurriculumCard';

/*
 * Container for curriculum cards.
 */
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

      // TODO: add loading spinner to card container
      // {{cards}.length > 0 ? {cards} : <FontAwesomeIcon icon={['fas','spinner']} spin size="6x" /> }
      return (
        <div>
          {cards}
        </div>
      );
    }
}

export default CurriculumCardContainer;
