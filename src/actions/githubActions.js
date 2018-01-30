import * as types from './actionTypes';


export function getUserAction(user) {
    return {type: types.GET_USER_GITHUB, user};
}

export function getUserReposAction(repos) {
    return {type: types.GET_USER_REPOS, repos};
}

export function getUser(username) {
    return (dispatch) => {
        return fetch('https://api.github.com/users/' + username)
                .then(response => response.json())
                .then(responseData => {
                    dispatch(getUserAction(responseData));
                })
                .catch(error => {
                    throw(error);
                });
    };
}

export function getRepos(username) {
    return (dispatch) => {
        return fetch('https://api.github.com/users/'+ username + '/repos?sort=created')
                .then(response => response.json())
                .then(results => {
                    dispatch(getUserReposAction(results));
                })
                .catch(error => {
                    throw(error);
                });
    };
}