import React, { Component } from 'react';
import {Jumbotron } from 'react-bootstrap';

import axios from 'axios';

import BodyContainer from '../components/BodyContainer';

import '../components/Project.css';



import PageFrame from '../components/PageFrame';

console.log('load')


class Project extends Component {


	constructor(props) {
		super(props);
        console.log('constructor')
		this.state = {project: null, loading: true};
	}



    componentDidMount() {

        console.log('componentDidMount')

        const{ id } = this.props.match.params;

        axios.get('/_mocks/project.json')
            .then(res => {
                const project = res.data;
                this.setState({ project });
        }, err=> {
            console.error(err)
        })
    }


    render() {

        console.log(this.state);  
        return (
            <PageFrame>
        
                <BodyContainer project={this.state.project}></BodyContainer>

            </PageFrame>
        );  
    }
}

export default Project;
