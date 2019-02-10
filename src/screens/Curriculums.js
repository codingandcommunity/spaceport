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
                <Jumbotron></Jumbotron>
                <CurriculumCardContainer curriculums={this.state.curriculums}></CurriculumCardContainer>
            </PageFrame>
        );
    }
}

// const CURRICULUMS = [
//   {
//     id: 1, title: "Coding Fundamentals", description: "Lorem Ipsum Dipsum Pipsum Scooby Dooby Doo!",
//     tags: ["python","new","beginner"], projects: [1, 22, 33, 44], articles: [14, 2, 43, 15]
//   },
//   {
//     id: 2, title: "APIs", description: "Lorem Ipsum Dipsum Pipsum Scooby Dooby Doo!",
//     tags: ["flask","python","api"], projects: [1, 22, 33, 44], articles: [14, 2, 43, 15]
//   },
//   {
//     id: 3, title: "Web Development Starter Pack", description: "Lorem Ipsum Dipsum Pipsum Scooby Dooby Doo!",
//     tags: ["CSS", "HTML5", "JavaScript"], projects: [1, 22, 33, 44], articles: [14, 2, 43, 15]
//   }
// ];
export default Curriculums;
