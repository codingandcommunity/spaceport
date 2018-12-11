import React, { Component } from 'react'
import { Grid, Row, Col, Image} from 'react-bootstrap';
import './news.css';

export default class news extends Component {
	render() {
		return (
			<div>
				<Image src="assets/snow.png" className="header-image" />
				<Grid>
					<h2>News</h2>
					<Row>
						<Col xs={12} sm={8} className="main-section">
							<p>dvl dfdfn snfnosfn isnosnflsfnksf lnsflnsfs lsfnlsjflsjf lsf sfosjf sifsfj ofsjfsf  sofslf fljfslf lsfls isff sfjjs jdjd isdisnfs slf sfsf lsflsf lsfnls</p>
							<p>jkvbsj sdknd vdjsvns df dfdj kdodsv dndn kdos idnekn kdfndkfn snfnf jsfnjsf jsfnsf jsf fsjf sjfs fsfsjf sjfsf jsfjsf sjsjf sjsjs fjsnv</p>
							<p>dvl dfdfn snfnosfn isnosnflsfnksf lnsflnsfs lsfnlsjflsjf lsf sfosjf sifsfj ofsjfsf  sofslf fljfslf lsfls isff sfjjs jdjd isdisnfs slf sfsf lsflsf lsfnls</p>
							<p>jkvbsjbvdsbvsdjvbsdkvbsldkbvkjsdbvkdsvnklsdvvbsdv</p>
						</Col>
						<Col xs={12} sm={8} className="sidebar-section">
							<Image src="assets/background.png" />
							<p> jzbv vkjvs vdvbkdj vdbvbld vdilvbldv d vdivld dvd djnvv vjdvdj vjdvjd vjdjd vjcj djd djd djd djd djd djd djd</p>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}