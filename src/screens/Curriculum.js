import React, { Component } from 'react';

import PageFrame from '../components/PageFrame';

class Curriculum extends Component {

    render() {
      const { id } = this.props.match.params;
        return (
            <PageFrame>
                <h2>Curriculum {id}</h2>
            </PageFrame>
        );
    }
}

export default Curriculum;
