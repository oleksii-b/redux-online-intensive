// Types
import { FETCH_POST_ASYNC, FILL_POSTS } from './types';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => {
    return {
        type: FETCH_POST_ASYNC,
    };
};
