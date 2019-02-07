// Types
import {
    START_FETCHING,
    STOP_FETCHING,
    EMIT_ERROR
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

export const emitError = (error, meta = null) => {
    return {
        type: EMIT_ERROR,
        payload: error,
        error: true,
        meta,
    };
};
