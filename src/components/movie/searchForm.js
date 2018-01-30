import React from 'react';
import * as MovieActions from '../../actions/movieActions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let movie = {
      title: this.refs.title.value.trim()
    };
    MovieActions.searchMovie(movie);
  }

  render() {
    return (
      <div className="search-form">
        <h1 className="text-center">Search For A Movie</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" ref="title" className="form-control" placeholder="Enter a Movie Title..." />
          </div>
          <button className="btn btn-primary btn-block">Search Movies</button>
        </form>
      </div>
    );
  }

}

export default SearchForm;