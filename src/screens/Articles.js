import React, { Component } from 'react';
import axios from 'axios';
import PageFrame from '../components/PageFrame';
import ReactMarkdown from 'react-markdown';

class Articles extends Component {

    constructor(props) {
      super(props);
      this.state = {
        articles: [],
        article: null,
        content: null
      }
    }

    componentDidMount() {

      // Files to ignore when displaying articles
      // const ignore = ["LICENSE", "README.md"];
      // axios.get('https://api.github.com/repositories/177862169/contents/test.md')
      //   .then(res => {
      //       var article = res.data;
      //       var content = atob(article.content);
      //       this.setState({ article });
      //       this.setState({ content });
      //   });

      // Request for all articles in the repository
      axios.get('https://api.github.com/repositories/177862169/contents/')
        .then(res => {
            var articles = res.data.filter(i => i.type === 'dir');
            this.setState({ articles });
        });

      // TODO: display each article's title
      // axios.get('/__mocks/curriculums.json')
      //   .then(res => {
      //       const articles = res.data;
      //       this.setState({ articles });
      //   });
    }

    render() {
      return (
        <PageFrame>
          <h1> Articles List </h1>
            <ul>
              {
               this.state.articles.map( (article) => {
                   return (
                   <li key={article.name}>
                     <a href={article.url}>
                       {article.name}
                     </a>
                   </li>
                 )
               })
              }
            </ul>
            <ReactMarkdown source={this.state.content} />
        </PageFrame>
      );
    }
}

export default Articles;
