import React, { Component } from 'react';
import axios from 'axios';
import PageFrame from '../components/PageFrame';
import { Jumbotron } from 'react-bootstrap';
import CurriculumCardContainer from '../components/CurriculumCardContainer';
class Curriculums extends Component {

    constructor(props) {
      super(props);
      this.state = {
        curriculums: []
      }
    }

    componentDidMount() {
      axios.get('/__mocks/curriculums.json')
        .then(res => {
            const curriculums = res.data;
            this.setState({ curriculums });
        })
    }

    render() {
        return (
            <PageFrame>
                <Jumbotron className="curriculum-jumbotron">
                  <h1>Select from one of our many curriculums to get started!</h1>
                </Jumbotron>
                <CurriculumCardContainer curriculums={this.state.curriculums}></CurriculumCardContainer>
            </PageFrame>
        );
    }
}

export default Curriculums;
