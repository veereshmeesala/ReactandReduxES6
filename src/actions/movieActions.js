import * as types from './actionTypes';

export function searchMoviesSuccess(movie) {
    return {type: types.SEARCH_MOVIES, movie};
}

export function searchMovie(movie, apikey) {
    return (dispatch) => {
        return  fetch('http://www.omdbapi.com/?apikey=' + apikey + '&s=' + movie.Title)
                .then(response => response.json())
                .then(responseData => {
                    dispatch(searchMoviesSuccess(responseData.Search));
                })
                .catch(error => {
                    throw(error);
                });
    };
}