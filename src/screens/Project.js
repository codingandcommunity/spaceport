import React, { Component } from 'react';
import {Jumbotron } from 'react-bootstrap';

import axios from 'axios';

import BodyContainer from '../components/ProjectBody';

import '../components/Project.css';



import PageFrame from '../components/PageFrame';

console.log('load')


class Project extends Component {


	constructor(props) {
		super(props);
        console.log('constructor')
		this.state = {project: []};
	}

 

    componentDidMount() {
    const {id} = this.props.match.params;
    console.log(id);

    axios.get('/_mocks/projects.json')
      .then(res => {
          for (let i of res.data) {
            if(i.id === id){
                console.log(i.id)
                const project = i;
                this.setState({ project });
                console.log(project)
                break;
            }
            
          }
      })

  }


    render() {
        
        console.log(this.state.project.title);
        return (

            <PageFrame>
                <BodyContainer project={this.state.project}></BodyContainer>
            </PageFrame>
        );  
    }
}

export default Project;
