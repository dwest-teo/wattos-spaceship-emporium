import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createResponsiveStoreEnhancer } from 'redux-responsive';
import rootReducer from '../reducers';

const enhancers = compose(
  createResponsiveStoreEnhancer({ performanceMode: true }),
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default initialState => createStoreWithMiddleware(rootReducer, initialState, enhancers);
