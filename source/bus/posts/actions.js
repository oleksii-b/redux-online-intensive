// Types
import {
    FETCH_POST_ASYNC,
    CREATE_POST_ASYNC,
    FILL_POSTS,
    ADD_NEW_POST
} from './types';

// Instruments
import { api } from '../../REST';

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

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POST_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const createPostAsync = (comment) => {
    return {
        type: CREATE_POST_ASYNC,
        payload: comment,
    };
};
