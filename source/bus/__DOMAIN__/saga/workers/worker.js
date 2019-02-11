import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { createPost as createPostAC } from '../../actions';
import { startFetching, stopFetching, emitError } from '../../../ui/actions';

export function* worker () {
    try {
        yield put(startFetching());

        const response = yield apply(api, api.posts.fetch);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(result.message);
        }

        yield put(createPostAC(result.data));
    } catch (error) {
        yield put(emitError(error, 'worker'));
    } finally {
        yield put(stopFetching());
    }
}
