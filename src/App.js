import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = () => ( <h2>Home</h2> );
const Projects= () => ( <h2>Projects</h2> );
const Project= () => ( <h2>Project X</h2> );
const Curriculums= () => ( <h2>Curriculums</h2> );
const Curriculum= () => ( <h2>Curriculum</h2> );
const Article = () => ( <h2>Article</h2> );
const NotFound = () => ( <h2>Not Found</h2> );

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
