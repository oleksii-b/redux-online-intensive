// Types
import {
    START_FETCHING,
    STOP_FETCHING
} from './types';

export const startFetching = () => {
    return {
        type: START_FETCHING,
    };
};

export const stopFetching = () => {
    return {
        type: STOP_FETCHING,
    };
};
