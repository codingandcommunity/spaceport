import React, { Component } from 'react';
import axios from 'axios';
import PageFrame from '../components/PageFrame';
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
      // TODO: MAKE request for test-articles repo with github api
      // https://api.github.com/repositories/177862169/contents/test.md
      axios.get('https://api.github.com/repositories/177862169/contents/test.md')
        .then(res => {
            var article = res.data;
            var content = atob(article.content)
            this.setState({ article });
            this.setState({ content });
            console.log(content);
        });

      const ignore = ["LICENSE", "README.md"];
      // axios.get('https://api.github.com/repositories/177862169/contents/')
      //   .then(res => {
      //       var articles = res.data;
      //       this.setState({ articles });
      //   });

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
        </PageFrame>
      );
    }
}

export default Articles;
