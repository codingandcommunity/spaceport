import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './screens/Home.js';
import Articles from './screens/Articles.js';
import Projects from './screens/Projects.js';
import Project from './screens/Project.js';
import Curriculums from './screens/Curriculums.js';
import Curriculum from './screens/Curriculum.js';
import Article from './screens/Article/Article.js';
import CurriculumArticles from './screens/CurriculumArticles.js';
import Search from './screens/Search/Search.js';
import Downloads from './screens/Downloads.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const NotFound = () => ( <h2>Not Found</h2> );
library.add(faSpinner, faGithub);

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/downloads" exact component={Downloads} />
                <Route path="/articles" exact component={Articles} />
                <Route path="/articles/:curriculum" exact component={CurriculumArticles} />
                <Route path="/articles/:curriculum/:article" exact component={Article} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/projects/:id" exact component={Project} />
                <Route path="/curriculums" exact component={Curriculums} />
                <Route path="/curriculums/:id" exact component={Curriculum} />
                <Route path="/curriculums/:id/:article" component={Article} />
                <Route path="/search" component={Search} />
                <Route component={ NotFound } />
            </Switch>
        </Router>
    );
  }
}

export default App;
