import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Link } from "react-router-dom";

class CurriculumInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { curriculum } = this.props;
    return (
      <div>
        <Jumbotron text={ curriculum.name }></Jumbotron>
        <Link to= {curriculum.html_url}>
          <FontAwesomeIcon icon={['fab', 'github']} size="6x" />
        </Link>
      </div>
    );
  }
}

export default CurriculumInfo;
