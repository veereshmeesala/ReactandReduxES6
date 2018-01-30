import * as types from '../actions/actionTypes';

export default function counterReducer(state = 0, action) {
    switch(action.type) {
        case types.INCREMENT_COUNTER: 
           // increment code
           debugger;
           return Object.assign({}, state, {counter: action.counter + 1});
        case types.DECREMENT_COUNTER: 
        // increment code
        debugger;
        return Object.assign({}, state, {counter: action.counter - 1});
        default: 
            return state;
    }
}