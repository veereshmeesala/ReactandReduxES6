import * as types from '../actions/actionTypes';

export default function githubReducer(state = [], action) {
    switch(action.type) {
        case types.GET_USER_GITHUB:
            // return Object.assign({}, state, {user: action.user});
            return [...state, Object.assign({}, {repos: action.user})];
        case types.GET_USER_REPOS:
            // return Object.assign({}, state, {repos: action.repos});
            return [...state, Object.assign({}, {repos: action.repos})];
        default: 
            return state;
    }
}