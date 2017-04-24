import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createResponsiveStoreEnhancer } from 'redux-responsive';
import rootReducer from '../reducers';
import isClient from './is-client';
import isDev from './is-dev';

const enhancers = compose(
  createResponsiveStoreEnhancer({ performanceMode: true }),
  isClient && isDev
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default initialState => createStoreWithMiddleware(rootReducer, initialState, enhancers);
