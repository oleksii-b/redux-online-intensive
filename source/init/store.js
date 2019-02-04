import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const logger = createLogger({ collapsed: true });
const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;
const middleware = [sagaMiddleware, thunk];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);
