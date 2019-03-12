import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageFrame from '../components/PageFrame';
import CurriculumInfo from '../components/CurriculumInfo';
import '../components/Curriculum.css';

class Curriculum extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curriculum: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    /*
    Unused request for gitHub api option
    axios.get(`https://api.github.com/repositories/${id}`, { headers: { Accept: 'application/vnd.github.mercy-preview+json' } })
    .then(res => {
      const curriculum = res.data;
      this.setState({ curriculum });
    }) */

    axios.get('/__mocks/curriculums.json')
      .then(res => {
          for (let o of res.data) {
            if (o.id === id) {
              const curriculum = o;
              this.setState({ curriculum });
              break;
            }
          }
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
