import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { createPost as createPostAC } from '../../actions';

export function* createPost (action) {
    const comment = action.payload;

    const response = yield apply(api, api.posts.create, [comment]);
    const result = yield apply(response, response.json);

    yield put(createPostAC(result.data));
}
