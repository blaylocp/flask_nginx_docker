import React, { Component } from 'react';
import _ from 'lodash';

import Movie from 'components/movies/Movie.js';
import movieData from 'movies.json';
import poster from 'images/movie-poster.jpg';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
    }
  }


  render() {

    let movies = [];
    let movieChunked = _.chunk(movieData, 4);

    movieChunked.forEach((row, i) => {
      let rowData = [];
      row.forEach((movie, i) => {
        rowData.push(<Movie key={i} movie={movie} />);
      });
      movies.push(
        <div className="rowMovie" key={i}>
          {rowData}
          <div className="movie-info">
            <div className="arrow-container">
              <div className="arrow-1"></div>
              <div className="arrow-2"></div>
              <div className="arrow-3"></div>
              <div className="arrow-4"></div>
            </div>
            <img src={poster} width="300px" />
          </div>
        </div>
      )
    });

    return (
      <div>
        <input />
        <div className="movie-list">
          {movies}
        </div>
      </div>


    );
  }
}

export default MovieLibrary;
