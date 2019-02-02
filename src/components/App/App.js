import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Projects from '../Projects/Projects.js';
import ProjectsList from '../ProjectsList/ProjectsList.js';
import ProjectsCard from '../ProjectsCard/ProjectsCard.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <p>Empty Page</p>
        <Route exact path="/projects" component={Projects} />
          <Route exact path="/projectsList" component={ProjectsList} />
          <Route exact path="/projectscard" component={ProjectsCard} />
      </div>
      </Router>
    );
  }
}

export default App;
