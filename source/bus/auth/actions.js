// Types
import {
    AUTHENTICATE,
    SIGNUP_ASYNC
} from './types';

// Sync
export const authenticate = () => {
    return {
        type: AUTHENTICATE
    };
};

// Async
export const signupAsync = (userData) => {
    return {
        type: SIGNUP_ASYNC,
        payload: userData
    };
};
