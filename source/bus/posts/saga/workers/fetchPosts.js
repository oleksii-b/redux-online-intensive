import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { fillPosts } from '../../actions';
import { startFetching, stopFetching, emitError } from '../../../ui/actions';

export function* fetchPosts () {
    try {
        yield put(startFetching());

        const response = yield apply(api, api.posts.fetch);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(result.message);
        }

        yield put(fillPosts(result.data));
    } catch (error) {
        yield put(emitError(error, 'createPost worker'));
    } finally {
        yield put(stopFetching());
    }
}
