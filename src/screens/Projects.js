import React, { Component } from 'react';
import {Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectContainer from '../components/ProjectContainer';
import '../components/Projects.css';
import axios from 'axios';


import PageFrame from '../components/PageFrame';

class Projects extends Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: [	
			{
				name: 'example project',
				level: 'beginner'

			},

			]
		}
	}



    render() {
        return (
            <PageFrame>
                <h2>Projects</h2>
                <Col>
					<h3> Python </h3>
						<ProjectContainer projects={this.state.projects}></ProjectContainer>
					<h3> C++ </h3>
						<Link to= "/projects/:id">
							<Button bsStyle= "primary">Project Name </Button>
						</Link>
					<h3> Java </h3>
						<Link to= "/projects/:id">
							<Button bsStyle= "primary">Project Name </Button>
						</Link>
				</Col>
            </PageFrame>
        );    
    }
}

export default Projects;
