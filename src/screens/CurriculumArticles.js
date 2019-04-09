import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PageFrame from '../components/PageFrame';

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
      return (
        <PageFrame>
          <h1> Curriculum Articles </h1>
            <ul>
              {
               this.state.articles.map( (article) => {
                   return (
                     <Link key={article.name} to={{
                         pathname: `${this.state.curriculum}/${article.name}`,
                       }}>
                       <li key={article.name}>
                           {article.name}
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
