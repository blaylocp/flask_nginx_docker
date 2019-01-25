import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import MoviesDashboard from "components/movies/MoviesDashboard.js";

class App extends Component {
  render() {
    return (
      <div className="background">
        <MoviesDashboard/>
      </div>
    );
  }
}

export default App;
