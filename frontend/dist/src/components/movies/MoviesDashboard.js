import React, { Component } from 'react';
import Banner from 'components/Banner.js';
import MovieLibrary from 'components/movies/MovieLibrary.js';

class MoviesDashboard extends Component {
  render() {
    return (
      <div>
        <Banner />
        <MovieLibrary />
      </div>
    );
  }
}

export default MoviesDashboard;
