import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import SearchForm from './searchForm';
import MovieResults from './movieResults';
import * as MovieActions from '../../actions/movieActions';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: this.props.movies,
        apikey: 'xyz', // please use your api key
        errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
          movies: nextProps.movies
      });
  }



  onSubmit(e) {
    e.preventDefault();
    let movie = {
      Title: this.refs.title.value.trim()
    };
    this.props.dispatch(MovieActions.searchMovie(movie, this.state.apikey));
    //this.props.actions.searchMovie(movie);
  }

  render() {
    const {movies} = this.state;
    return (
      <div className="container">
      <div className="mt-10 mp-3 mb-3 p-3 bg-white rounded box-shadow">
      <h3 className="mt-2">Search For A Movie</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" ref="title" className="form-control" placeholder="Enter a Movie Title..." />
            <button className="btn btn-primary col-sm-12 col-md-3 col-lg-2 mt-1">Search Movies</button>
          </div>
        </form>
      </div>
        <MovieResults movies={movies} />
      </div>
    );
  }

}


MoviePage.propTypes = { 
    movies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    let movies = Object.keys(state.movies).map(key => state.movies[key]);
    return {
        movies: movies
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(MovieActions, dispatch)
//     };
// }

export default connect(mapStateToProps)(MoviePage);