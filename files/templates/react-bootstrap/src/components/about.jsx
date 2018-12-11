import React, { Component } from 'react'
import {Grid, Col, Image } from 'react-bootstrap';
import './about.css';

export default class about extends Component {
	render() {
		return (
			<div>
				<Image src="assets/background.png" className="header-image" />

				<Grid>
					<Col xs={12} sm={8} smOffset={2}>
						<Image src="assets/team1.png" className="about-profile-pic" rounded />
						<h3> PERSON CODER </h3>
						<p>dvl dfdfn snfnosfn isnosnflsfnksf lnsflnsfs lsfnlsjflsjf lsf sfosjf sifsfj ofsjfsf  sofslf fljfslf lsfls isff sfjjs jdjd isdisnfs slf sfsf lsflsf lsfnls</p>
						<p>jkvbsj sdknd vdjsvns df dfdj kdodsv dndn kdos idnekn kdfndkfn snfnf jsfnjsf jsfnsf jsf fsjf sjfs fsfsjf sjfsf jsfjsf sjsjf sjsjs fjsnv</p>
						<p>dvl dfdfn snfnosfn isnosnflsfnksf lnsflnsfs lsfnlsjflsjf lsf sfosjf sifsfj ofsjfsf  sofslf fljfslf lsfls isff sfjjs jdjd isdisnfs slf sfsf lsflsf lsfnls</p>
						<p>jkvbsjbvdsbvsdjvbsdkvbsldkbvkjsdbvkdsvnklsdvvbsdv</p>
					</Col>
				</Grid>
			</div>
		)
	}
}