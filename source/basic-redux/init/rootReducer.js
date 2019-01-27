import { combineReducers } from 'redux';

import { galleryReducer } from '../bus/reducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
