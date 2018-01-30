import React from 'react';

function Movie({movie}) {
  return (
      <div className="col-md-4 col-lg-3 mb-2">
            <div className="card">
                <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Type: {movie.Type} Year: {movie.Year}</p>
                </div>
            </div>
      </div>
  );
}

export default Movie;