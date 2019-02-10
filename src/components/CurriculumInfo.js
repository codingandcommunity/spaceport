import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';

class CurriculumInfo extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        const { curriculum } = this.props.curriculum;
        return (
          <div>
            <Jumbotron text="Decription"></Jumbotron>
          </div>
        );
    }
}

export default CurriculumInfo;
