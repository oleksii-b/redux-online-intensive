import { takeEvery, all, call } from 'redux-saga/effects';

import { TYPE } from '../types';

import { worker } from './workers';

function* watchWorker () {
    yield takeEvery(TYPE, worker);
}

export function* watchPosts () {
    yield all([
        call(watchWorker)
    ]);
}
