import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { authenticate } from '../../../auth/actions';
import { fillProfile } from '../../../profile/actions';
import { startFetching, stopFetching, emitError } from '../../../ui/actions';

export function* signin ({ payload: userInfo }) {
    try {
        yield put(startFetching());

        const response = yield apply(api, api.auth.signin, [userInfo]);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(result.message);
        }

        yield put(fillProfile(result.data));
        yield put(authenticate());
    } catch (error) {
        yield put(emitError(error, 'signin worker'));
    } finally {
        yield put(stopFetching());
    }
}
