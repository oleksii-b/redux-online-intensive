import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './rootReducer';

const logger = createLogger({ collapsed: true });
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
