import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Jumbotron } from 'react-bootstrap';


class ProjectBody extends Component{

	render(){

		const {project} = this.props;
		console.log(this.props);


		return(



			<div className= "body">
				<div className = "heading">

					<Jumbotron>
						<span div className= "project-title"> 
							<h2> {project.title}  </h2>
						</span>
					</Jumbotron>

				</div>
				<div className = "des">
					<h3> What you will do </h3>
					<span div className="description"> {project.description} </span>
				</div>

				<div className = "curriculums">
					<h3> Curriculums </h3>
					<span div className= "curric"> 
						<h4> {project.curriculum1}  </h4> 
					</span>
				</div>
			</div>



			);
	}

}

export default ProjectBody;