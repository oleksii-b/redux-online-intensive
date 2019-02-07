import { takeEvery, all, call } from 'redux-saga/effects';

import { CREATE_POST_ASYNC, FETCH_POST_ASYNC } from '../types';

import { createPost, fetchPosts } from './workers';

function* watchCreatePost () {
    yield takeEvery(CREATE_POST_ASYNC, createPost);
}
function* watchFetchPosts () {
    yield takeEvery(FETCH_POST_ASYNC, fetchPosts);
}

export function* watchPosts () {
    yield all([
        call(watchCreatePost),
        call(watchFetchPosts)
    ]);
}
