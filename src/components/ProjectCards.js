import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ProjectCard.css";


class ProjectCard extends Component{

	render(){

		const project = this.props.project;

		return (

			<Link to={{
	          pathname: `/projects/${project.id}`,
	        }}>

	        <div className="card-container">
	          <div className="card">
	           <div className="card-language">
	            	<span className="project-lang"> { project.type } </span>
	            </div>
	            <div className="card-header">
	            	<span className="project-title"> { project.name } </span>
	            </div>
	            <div className="card-body">
	              <span className="project-description"> { project.description} </span>
	            </div>

	            <div className="card-footer">
	            	<span className="project-level"> { project.level} </span>
	            </div>
	          </div>
	        </div>
	      </Link>

		);

	}


}

export default ProjectCard;