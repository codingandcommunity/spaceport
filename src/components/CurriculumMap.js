import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CurriculumMap.css';

/*
 * A stylized list of projects and articles associated with a Curriculum
 */
class CurriculumMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles,
      projects: this.props.projects
    }
  }

  render() {
    const info = [];
    this.state.articles.forEach((article) => {
      info.push(
        <li key={article.title}>
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
        <li key={project.title}>
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
