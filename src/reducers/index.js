import {combineReducers} from 'redux';
import courses from './courseReducer';
import counter from './counterReducer';
import movies from './movieReducer';
import github from './githubReducer';

const rootReducer = combineReducers({
    courses,
    counter,
    movies,
    github
});

export default rootReducer;