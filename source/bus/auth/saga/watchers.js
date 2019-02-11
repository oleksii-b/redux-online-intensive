import { takeEvery, all, call } from 'redux-saga/effects';

import { SIGNUP_ASYNC, SIGNIN_ASYNC } from '../types';

import { signup, signin } from './workers';

function* watchSignup () {
    yield takeEvery(SIGNUP_ASYNC, signup);
}

function* watchSignin () {
    yield takeEvery(SIGNIN_ASYNC, signin);
}

export function* watchAuth () {
    yield all([
        call(watchSignup),
        call(watchSignin)
    ]);
}
