import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './screens/Home.js';
import Projects from './screens/Projects.js';
import Project from './screens/Project.js';
import Curriculums from './screens/Curriculums.js';
import Curriculum from './screens/Curriculum.js';
import Article from './screens/Article.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const NotFound = () => ( <h2>Not Found</h2> );
library.add(faArrowRight, faGithub);

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/projects/:id" component={Project} />
                <Route path="/curriculums" exact component={Curriculums} />
                <Route path="/curriculums/:id" exact component={Curriculum} />
                <Route path="/curriculums/:id/:article" component={Article} />
                <Route component={ NotFound } />
            </Switch>
        </Router>
    );
  }
}

export default App;
