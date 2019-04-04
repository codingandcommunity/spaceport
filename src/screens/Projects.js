import React, { Component } from 'react';
import {Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectContainer from '../components/ProjectContainer';
import '../components/Projects.css';
import axios from 'axios';
import carousel from '../components/carousel';


import PageFrame from '../components/PageFrame';

class Projects extends Component {

	constructor(props) {
		super(props);
		this.state = {
			projects:[]
		}
	}


	 componentDidMount() {

      axios.get('/_mocks/projects.json')
        .then(res => {
            const projects = res.data;
            this.setState({ projects });
        })
    }


    render() {
        return (
            <PageFrame>
                <h2>Projects</h2>
                <Col>
					<ProjectContainer projects={this.state.projects}></ProjectContainer>
				</Col>
            </PageFrame>
        );    
    }
}

export default Projects;
