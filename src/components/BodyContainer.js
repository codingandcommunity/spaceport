import React, {Component} from 'react';
import ProjectBody from '../components/ProjectBody.js';


class BodyContainer extends Component {

	render () {

		const projid = [];
		console.log(this.props.project);



		if (this.props.project) this.props.project.forEach((project) => {
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