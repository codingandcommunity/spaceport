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
    axios.get(`https://api.github.com/repositories/177862169/contents/${ this.state.curriculum }/${ this.state.title }.md`)
      .then(res => {
          var article = res.data;
          var converted = atob(article.content);
          var list = converted.split("***");
          var metadeta = list[0];
          var content = list[1];
          this.setState({ article });
          this.setState({ content });
      });
  }

    render() {

        // Convert article file name to title format
        var parsed = this.state.title.split("-");
        var title = "";
        parsed.forEach(function(word) {
          word = word.substring(0, 0) + word[0].toUpperCase() + word.substring(0 + 1);
          title+=word + " ";
        });
        return (
          <PageFrame>
            <ArticleHeader title={title}/>
            <ReactMarkdown source={this.state.content} />
          </PageFrame>

        );
    }
}

export default Article;
