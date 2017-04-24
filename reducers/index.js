import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import Product from './product';
import Sidebar from './sidebar';

export default combineReducers({
  browser: createResponsiveStateReducer({
    small: 640,
    medium: 832,
    large: 1024,
  }),
  Product,
  Sidebar,
});
