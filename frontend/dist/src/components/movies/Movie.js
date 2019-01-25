import React, { Component } from 'react';
import 'App.scss';
import poster from 'images/movie-poster.jpg';


class Movie extends Component {
  render() {
    return (
        <div className="movie">
          <img src={poster} alt="Movie" />
        </div>


    );
  }
}

export default Movie;
