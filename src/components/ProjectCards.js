import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './ProjectCard.css';


class ProjectCard extends Component{

	render(){

		const project = this.props.project;
    	const tags = ["#plswork ","#thisisatest"];

		return (

			<Link to={{
	          pathname: `/projects/${project.id}`,
	        }}>

	        <div className="card-container">
	          <div className="card">
	            <div className="card-header">
	            </div>
	            <div className="card-body">
	              <span className="project-title"> { project.name } </span>
	            </div>
	            <div className="card-footer">
	            </div>
	            <div className="tags">
	              { tags }
	            </div>
	          </div>
	        </div>
	      </Link>

		);

	}


}

export default ProjectCard;