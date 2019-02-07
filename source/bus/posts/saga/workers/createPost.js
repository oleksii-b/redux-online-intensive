import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { createPost as createPostAC } from '../../actions';
import { startFetching, stopFetching, emitError } from '../../../ui/actions';

export function* createPost (action) {
    try {
        yield put(startFetching());

        const comment = action.payload;
        const response = yield apply(api, api.posts.create, [comment]);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(result.message);
        }

        yield put(createPostAC(result.data));
    } catch (error) {
        yield put(emitError(error, 'createPost worker'));
    } finally {
        yield put(stopFetching());
    }
}
