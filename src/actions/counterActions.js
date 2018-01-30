import * as types from './actionTypes';

export function incrementCounterSuccess(counter) {
    return {type: types.INCREMENT_COUNTER, counter};
}

export function decrementCounterSuccess(counter) {
    return {type: types.DECREMENT_COUNTER, counter};
}

