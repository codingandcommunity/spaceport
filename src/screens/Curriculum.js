import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Link } from "react-router-dom";

import PageFrame from '../components/PageFrame';
import CurriculumInfo from '../components/CurriculumInfo';

class Curriculum extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curriculum: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://api.github.com/repositories/${id}`, { headers: { Accept: 'application/vnd.github.mercy-preview+json' } })
    .then(res => {
      const curriculum = res.data;
      this.setState({ curriculum });
    })
  }

  render() {
    return (
        <PageFrame>
            {this.state.curriculum ? <CurriculumInfo curriculum={ this.state.curriculum } /> : <FontAwesomeIcon icon={['fas','spinner']} spin size="6x" /> }
        </PageFrame>
    );
  }
}

export default Curriculum;
