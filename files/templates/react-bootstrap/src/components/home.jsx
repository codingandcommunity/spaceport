import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './home.css';

export default class home extends Component {
	render() {
		return (
			<Grid>
				<Jumbotron>
					<h2>Welcome to Coding and Community</h2>
					<p>We teach middle and high school students how to code</p>
					<Link to="/about">
						<Button bsStyle="primary">About</Button>
					</Link>
				</Jumbotron>
				<Row className="show-grid text-center">
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/team1.png" circle className="profile-pic" />
						<h3>Person1</h3>
						<p>That's a picture of a coder</p>
					</Col>
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/team2.png" circle className="profile-pic" />
						<h3>Person2</h3>
						<p>That's a picture of a coder</p>
					</Col>
					<Col xs={12} sm={4} className="person-wrapper">
						<Image src="assets/team3.png" circle className="profile-pic" />
						<h3>Person3</h3>
						<p>That's a picture of a coder</p>
					</Col>
				</Row>
			</Grid>
		)
	}
}