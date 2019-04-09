import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PageFrame from '../components/PageFrame';
import ReactMarkdown from 'react-markdown';
import './Articles.css';


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

      // Request for all available curriculums that have articles
      axios.get('https://api.github.com/repositories/177862169/contents/')
        .then(res => {
            var articles = res.data.filter(i => i.type === 'dir');
            this.setState({ articles });
        });
    }

    render() {
      return (
        <PageFrame>
          <h1> Articles List </h1>
            <ul className="articles">
              {
               this.state.articles.map( (article) => {
                   return (
                     <Link key={article.name} to={{
                         pathname: `articles/${article.name}`,
                       }}>
                       <li key={article.name}>
                           {article.name}
                       </li>
                    </Link>
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
