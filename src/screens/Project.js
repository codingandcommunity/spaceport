import React, { Component } from 'react';
import {Jumbotron } from 'react-bootstrap';

import BodyContainer from '../components/BodyContainer';

import '../components/Project.css';
import '../components/BodyContainer.js'



import PageFrame from '../components/PageFrame';




class Project extends Component {


	constructor(props) {
		super(props);
		this.state = {
			projects:[
			{
				name: 'project 1',
				description: 'The gradual staggers into the crossroad! How does the phoenix cover a lady? An amber acceptance reclaims its fluid. Over a cinema spits the monthly moron. The risk clogs next to the fuzzy exhaust. The ownership farms underneath the deterrent! An aardvark stimulates the obstructed neighborhood. A blackboard coasts with a lived vat. The effort rules behind the proposed effort. When can the leaflet stir beneath our waved leader? The gradual staggers into the crossroad! How does the phoenix cover a lady? An amber acceptance reclaims its fluid. Over a cinema spits the monthly moron. The risk clogs next to the fuzzy exhaust. The ownership farms underneath the deterrent! An aardvark stimulates the obstructed neighborhood. A blackboard coasts with a lived vat. The effort rules behind the proposed effort. When can the leaflet stir beneath our waved leader?',
				curriculum1: 'curriculum 1',
				curriculum2: 'curriculum 2'
			},

			] 
		}
	}

    render() {
        return (
            <PageFrame>
        
				<BodyContainer projects={this.state.projects}></BodyContainer>

            </PageFrame>
        );    
    }
}

export default Project;
