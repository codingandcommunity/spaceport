import React, { Component } from 'react';

import PageFrame from '../components/PageFrame';
import Jumbotron from '../components/Jumbotron';
import CurriculumCardContainer from '../components/CurriculumCardContainer';
class Curriculums extends Component {

    render() {
        return (
            <PageFrame>
                <Jumbotron></Jumbotron>
                <CurriculumCardContainer curriculums={CURRICULUMS}></CurriculumCardContainer>
            </PageFrame>
        );
    }
}

const CURRICULUMS = [
  {
    id: 1, title: "Coding Fundamentals", description: "Lorem Ipsum Dipsum Pipsum Scooby Dooby Doo!",
    tags: ["python","new","beginner"], projects: [1, 22, 33, 44], articles: [14, 2, 43, 15]
  }
];
export default Curriculums;
