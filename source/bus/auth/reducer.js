// Core
import { Map } from 'immutable';

// Types
import {
    AUTHENTICATE,
} from './types';

const initialState = Map({
    isAuthenticated: false,
});

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return state.set('isAuthenticated', true);
        default:
            return state;
    }
};
