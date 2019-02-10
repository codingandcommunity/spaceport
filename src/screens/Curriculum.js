import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Link } from "react-router-dom";

import PageFrame from '../components/PageFrame';

class Curriculum extends Component {
  // TODO: add GET request for single repo
  // TODO: add "html_url" repo link
    // <Link to='${curriculum.html_url}'><FontAwesomeIcon icon={['fab', 'github']} /></Link>
  // TODO: add icon to github repo link

  constructor(props) {
    super(props);
    this.state = {
      curriculum: null
    }
  }

  // TODO: add GET request for single repo
  componentDidMount() {
    axios.get(`https://api.github.com/orgs/spaceport-curriculums/repos`, { headers: { Accept: 'application/vnd.github.mercy-preview+json' } })
    .then(res => {
      const curriculums = res.data;
      this.setState({ curriculums });
    })
  }

  render() {
      const { id } = this.props.match.params;
        return (
            <PageFrame>
                <h2>Curriculum: {id}</h2>
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} size="2x"/>
                <div>
                  <Link to='\'><FontAwesomeIcon icon={['fab', 'github']} size="6x"/></Link>
                </div>
            </PageFrame>
        );
    }
}

export default Curriculum;
