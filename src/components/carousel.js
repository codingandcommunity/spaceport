import React, { Component } from 'react';
import ProjectContainer from '../components/ProjectContainer';



class Carousel extends Component{

	render(){

		const carouselData = [];

		this.props.projects.forEach((cards) => {
			carouselData.push(
				<ProjectContainer/>
				);
		});



		return (
				<div>
					{carouselData}

				</div>

		);
	}



}