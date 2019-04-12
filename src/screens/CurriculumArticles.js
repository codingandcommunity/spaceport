import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PageFrame from '../components/PageFrame';
import './CurriculumArticles.css';


class CurriculumArticles extends Component {

    constructor(props) {
      super(props);
      const { curriculum }  =  this.props.match.params;
      this.state = {
        curriculum: curriculum,
        articles: [],
        article: null
      }
    }

    componentDidMount() {

      // Request for all articles in the repository
      axios.get(`https://api.github.com/repositories/177862169/contents/${this.state.curriculum}`)
        .then(res => {
            var articles = res.data.filter(i => i.type === 'file');
            this.setState({ articles });
        });
    }

    render() {
      var parsed = this.state.curriculum.split("-");
      var title = "";
      parsed.forEach(function(word) {
        word = word.substring(0, 0) + word[0].toUpperCase() + word.substring(0 + 1);
        title+=word + " ";
      });
      return (
        <PageFrame>
          <h1> Articles for {title} </h1>
            <ul className="curriculum-articles">
              {
               this.state.articles.map( (article) => {

                 // Convert directory name to title format
                 article.name = article.name.substring(0, article.name.length - 3);
                 var parsed = article.name.split("-");
                 var title = "";
                 parsed.forEach(function(word) {
                   word = word.substring(0, 0) + word[0].toUpperCase() + word.substring(0 + 1);
                   title+=word + " ";
                 });
                   return (
                     <Link key={article.name} to={{
                         pathname: `${this.state.curriculum}/${article.name}`,
                       }}>
                       <li key={article.name}>
                           {title}
                       </li>
                    </Link>
                 )
               })
              }
            </ul>
        </PageFrame>
      );
    }
}

export default CurriculumArticles;
