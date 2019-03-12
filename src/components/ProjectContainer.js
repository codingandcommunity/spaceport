import React, {Component} from 'react';
import ProjectCards from '../components/ProjectCards';



class ProjectContainer extends Component {

	render () {

		const cards = [];


		this.props.projects.forEach((project) => {
			cards.push(
				<ProjectCards
				key={project.id}
				project={project} />
				);
		});


		return (
			<div>
				{cards}
			</div>
		);

	}
}


export default ProjectContainer;