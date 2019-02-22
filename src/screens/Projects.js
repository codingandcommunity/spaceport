import React, { Component } from 'react';
import {Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/Projects.css';


import PageFrame from '../components/PageFrame';

class Projects extends Component {

    render() {
        return (
            <PageFrame>
                <h2>Projects</h2>
                <Col>
					<h3> Python </h3>
						<Link to= "/projects/:id">
							<Button bsStyle= "primary">Project Name </Button>
						</Link>
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
