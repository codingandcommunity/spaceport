import React, { Component } from 'react';
import {Jumbotron } from 'react-bootstrap';

import axios from 'axios';

import BodyContainer from '../components/BodyContainer';

import '../components/Project.css';
import '../components/BodyContainer.js'



import PageFrame from '../components/PageFrame';




class Project extends Component {


	constructor(props) {
		super(props);
		this.state = {projects: {}};
	}


    render() {
        return (
            <PageFrame>
        
				<BodyContainer projects={this.state.projects}></BodyContainer>

            </PageFrame>
        );    
    }



    componentDidMount(){

    	const{ id } = this.props.match.params;

    	axios.get('/_mocks/project.json')
    		.then(res => {
    			for (let i of res.data) {
    				if (i.id == id){
    					const projects = i;
    					this.setState({ projects });
    					break;
    				}
    			}
    	})
    }
}

export default Project;
