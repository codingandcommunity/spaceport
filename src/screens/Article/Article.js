// written by Saketh Dargula (@sak6lab)
import React, { Component } from 'react';
import './Article.css'
import PageFrame from '../../components/PageFrame';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleBody from '../../components/ArticleBody';

class Article extends Component {
    constructor() {
      super();
      this.state = { content: {} };
    }

    render() {
        return (
            <PageFrame>
              <ArticleHeader title={this.state.content.title} dateCreated={this.state.content.dateCreated} />
              <ArticleBody content={this.state.content.articleBody} />

              <hr></hr>

            </PageFrame>
        );
    }

    componentDidMount() {
      const content = require("../../article_data.json");
      console.log(content);
      this.setState({ content });
      console.log(this.state);
    }
}

export default Article;
