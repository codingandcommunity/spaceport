import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageFrame from '../components/PageFrame';

class Curriculum extends Component {

    render() {

      // TODO: add "html_url" repo link
        // <Link to='${curriculum.html_url}'><FontAwesomeIcon icon={['fab', 'github']} /></Link>
      // TODO: add icon to github repo link

      const { id } = this.props.match.params;
        return (
            <PageFrame>
                <h2>Curriculum: {id}</h2>
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} size="2x"/>
                <div>
                  <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                </div>
            </PageFrame>
        );
    }
}

export default Curriculum;
