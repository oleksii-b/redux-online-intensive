import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { authenticate } from '../../../auth/actions';
import { startFetching, stopFetching, emitError } from '../../../ui/actions';

export function* signup ({ payload: userInfo }) {
    try {
        yield put(startFetching());

        const response = yield apply(api, api.posts.signup, [userInfo]);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(result.message);
        }

        yield put(authenticate());
    } catch (error) {
        yield put(emitError(error, 'signup worker'));
    } finally {
        yield put(stopFetching());
    }
}
