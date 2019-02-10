import React, { Component } from 'react';
import axios from 'axios';
import PageFrame from '../components/PageFrame';
import Jumbotron from '../components/Jumbotron';
import CurriculumCardContainer from '../components/CurriculumCardContainer';
class Curriculums extends Component {

    constructor(props) {
      super(props);
      this.state = {
        curriculums: []
      }
    }

    componentDidMount() {
      axios.get(`https://api.github.com/orgs/spaceport-curriculums/repos`, { headers: { Accept: 'application/vnd.github.mercy-preview+json' } })
      .then(res => {
        const curriculums = res.data;
        this.setState({ curriculums });
      })
    }

    render() {
        return (
            <PageFrame>
                <Jumbotron text="Select from one of our many curriculm to get started!"></Jumbotron>
                <CurriculumCardContainer curriculums={this.state.curriculums}></CurriculumCardContainer>
            </PageFrame>
        );
    }
}

export default Curriculums;
