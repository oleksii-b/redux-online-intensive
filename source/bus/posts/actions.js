// Types
import {
    FETCH_POST_ASYNC,
    CREATE_POST_ASYNC,
    FILL_POSTS,
    ADD_NEW_POST
} from './types';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const createPost = (post) => {
    return {
        type:    ADD_NEW_POST,
        payload: post,
    };
};

export const fetchPostsAsync = () => {
    return {
        type: FETCH_POST_ASYNC,
    };
};

export const createPostAsync = (comment) => {
    return {
        type:    CREATE_POST_ASYNC,
        payload: comment,
    };
};
