import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Projects from '../Projects/Projects.js';
import ProjectsList from '../ProjectsList/ProjectsList.js';
import ProjectsCard from '../Projectcard/ProjectCard.js';
import ProjectsCard from '../Projectcard/ProjectCard.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <p>Empty Page</p>
        <Route exact path="/projects" component={Projects} />
          <Route exact path="/projectcard" component={ProjectCard} />
      </div>
      </Router>
    );
  }
}

export default App;
