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
          <h1>Articles</h1>

          <h3>Select a curriculum to view its articles.</h3>
            <ul className="articles">
              {
               this.state.articles.map( (article) => {

                 // Convert article file name to title format
                 var parsed = article.name.split("-");
                 var title = "";
                 parsed.forEach(function(word) {
                   word = word.substring(0, 0) + word[0].toUpperCase() + word.substring(0 + 1);
                   title+=word + " ";
                 });
                   return (
                     <Link key={article.name} to={{
                         pathname: `articles/${article.name}`,
                       }}>
                       <li key={article.name}>
                           {title}
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
