import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './CurriculumMap.css';

class CurriculumMap extends Component {

  constructor(props) {
    super(props);
    this.state =
    {
      articles: [
        {
            title: 'Setting Up Your Environment',
            link: 'https://cdn-images-1.medium.com/fit/t/1600/672/0*n-2bW82Z6m6U2bij.jpeg'
        },
        {
            title: 'How to Code',
            link: 'https://cdn-images-1.medium.com/fit/t/1600/672/0*n-2bW82Z6m6U2bij.jpeg'
        }
      ],
      projects: [
        {
            title: 'Hello World',
            link: 'https://cdn-images-1.medium.com/fit/t/1600/672/0*n-2bW82Z6m6U2bij.jpeg'
        },
        {
            title: 'Python Blackjack',
            link: 'https://cdn-images-1.medium.com/fit/t/1600/672/0*n-2bW82Z6m6U2bij.jpeg'
        },
        {
            title: 'Python Calculator',
            link: 'https://cdn-images-1.medium.com/fit/t/1600/672/0*n-2bW82Z6m6U2bij.jpeg'
        }
      ]
    }
  }

  render() {
    const { curriculum } = this.props;
    const info = [];
    this.state.articles.forEach((article) => {
      // console.log(article);
      info.push(
        <li>
          <Link to={{
              pathname: `${ article.link }`,
            }}>
            <span>{ article.title }</span>
          </Link>
        </li>
      );
    });
    this.state.projects.forEach((project) => {
      info.push(
        <li>
          <Link to={{
              pathname: `${ project.link }`,
            }}>
            <span>{ project.title }</span>
          </Link>
        </li>
      );
    });
    return (
      <div>
        <ul className="curriculum-map">
          { info }
        </ul>
      </div>
    );
  }
}

export default CurriculumMap;
