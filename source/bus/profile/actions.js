// Types
import {
    FILL_PROFILE
} from './types';

export const fillProfile = (profile) => {
    return {
        type: FILL_PROFILE,
        payload: profile,
    };
};
