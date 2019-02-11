// Types
import {
    AUTHENTICATE,
    SIGNUP_ASYNC,
    SIGNIN_ASYNC,
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

export const signinAsync = (userData) => {
    return {
        type: SIGNIN_ASYNC,
        payload: userData
    };
};
