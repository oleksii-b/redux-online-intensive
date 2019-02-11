// Core
import { Map } from 'immutable';

// Types
import {
    FILL_PROFILE
} from './types';

const initialState = Map({
    id:        '',
    firstName: '',
    lastName:  '',
    avatar:    '',
    token:     '',
});

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_PROFILE:
            return state.merge(action.payload);
        default:
            return state;
    }
};
