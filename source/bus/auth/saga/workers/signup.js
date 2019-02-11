import { put, apply } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { api } from '../../../../REST';
import { authenticate } from '../../../auth/actions';
import { startFetching, stopFetching, emitError } from '../../../ui/actions';

export function* signup ({ payload: userInfo }) {
    try {
        yield put(startFetching());

        yield delay(2000);
        // const response = yield apply(api, api.posts.fetch);
        // const result = yield apply(response, response.json);

        // if (response.status !== 200) {
        //     throw new Error(result.message);
        // }
        console.log('userInfo', userInfo);
        yield put(authenticate());
    } catch (error) {
        yield put(emitError(error, 'signup worker'));
    } finally {
        yield put(stopFetching());
    }
}
