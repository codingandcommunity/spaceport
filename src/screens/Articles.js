import React, { Component } from 'react';
import axios from 'axios';
import PageFrame from '../components/PageFrame';
class Articles extends Component {

    constructor(props) {
      super(props);
      this.state = {
        articles: []
      }
    }

    componentDidMount() {
      // TODO: MAKE request for test-articles repo with github api
      // https://api.github.com/repositories/177862169/contents/test.md
      // TODO: display each article's title
      axios.get('/__mocks/curriculums.json')
        .then(res => {
            const articles = res.data;
            this.setState({ articles });
        });
    }

    render() {
      return (
        <PageFrame>
          <h3>  Articles List </h3>
          <p> Articles Here! </p>
        </PageFrame>
      );
    }
}

export default Articles;
