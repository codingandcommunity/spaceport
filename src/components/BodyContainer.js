import React, {Component} from 'react';
import ProjectBody from '../components/ProjectBody.js';


class BodyContainer extends Component {

	render () {

		const {project} = this.props;

		const projid = [];
		console.log(this.props.project);




		return (
			<div>
				{projid}
			</div>
		);

	}
}


export default BodyContainer;