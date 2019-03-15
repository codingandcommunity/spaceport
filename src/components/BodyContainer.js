import React, {Component} from 'react';
import ProjectBody from '../components/ProjectBody.js';


class BodyContainer extends Component {

	render () {

		const projid = [];


		this.props.projects.forEach((project) => {
			projid.push(
				<ProjectBody
				key={project.id}
				project={project} />
				);
		});


		return (
			<div>
				{projid}
			</div>
		);

	}
}


export default BodyContainer;