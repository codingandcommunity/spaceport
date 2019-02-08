import React, { Component } from 'react';

import PageFrame from '../components/PageFrame';
import Jumbotron from '../components/Jumbotron';
import CurriculumCard from '../components/CurriculumCard';
class Curriculums extends Component {

    render() {
        return (
            <PageFrame>
                <Jumbotron></Jumbotron>
                <CurriculumCard></CurriculumCard>
            </PageFrame>
        );
    }
}

export default Curriculums;
