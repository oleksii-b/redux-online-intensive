import { takeEvery, all, call } from 'redux-saga/effects';

import { SIGNUP_ASYNC } from '../types';

import { signup } from './workers';

function* watchSignup () {
    yield takeEvery(SIGNUP_ASYNC, signup);
}

export function* watchAuth () {
    yield all([
        call(watchSignup)
    ]);
}
