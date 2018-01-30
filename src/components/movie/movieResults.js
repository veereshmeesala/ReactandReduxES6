import React from 'react';
import Movie from './movie';
function MovieResults({movies}) {
  if(movies.length === 0) {
      return null;
  }
  return(
    <div className="mt-10 mp-3 mb-3 p-3 bg-white rounded box-shadow">
        <h3>Results</h3>
        <div className="row">
        {movies.map( (movie, i) => <Movie key={i} movie={movie} />)}
        </div>
    </div>
  );
}

export default MovieResults;