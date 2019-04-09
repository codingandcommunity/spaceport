// written by Saketh Dargula (@sak6lab)
import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './Article.css'
import PageFrame from '../../components/PageFrame';
import ArticleHeader from '../../components/ArticleHeader';
// import ArticleBody from '../../components/ArticleBody';

class Article extends Component {

  constructor(props) {
    super(props);
    const { curriculum }  =  this.props.match.params;
    const { article }  =  this.props.match.params;
    this.state = {
      curriculum: curriculum,
      title: article,
      content: null
    }
  }

  componentDidMount() {

    // Get the content for a file
    axios.get(`https://api.github.com/repositories/177862169/contents/${ this.state.curriculum }/${ this.state.title }`)
      .then(res => {
          var article = res.data;
          var content = atob(article.content);
          this.setState({ article });
          this.setState({ content });
      });
  }

    render() {
        return (
          <PageFrame>
            <ArticleHeader title={this.state.title}/>
            <ReactMarkdown source={this.state.content} />
          </PageFrame>

        );
    }
}

export default Article;
