import * as types from '../actions/actionTypes';

export default function movieReducer(state = [], action) {
    switch(action.type) {
        case types.SEARCH_MOVIES:
            return Object.assign({}, state, action.movie);
        default: 
            return state;
    }
}