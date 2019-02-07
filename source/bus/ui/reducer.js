import { Map } from 'immutable';

// Types
import {
    START_FETCHING,
    STOP_FETCHING
} from './types';

const initialState = Map({
    isFetching: false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return state.set('isFetching', true);
        case STOP_FETCHING:
            return state.set('isFetching', false);
        default:
            return state;
    } 
};
