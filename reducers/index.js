import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import Products from './products';
import Menu from './menu';
import Cart from './cart';

export default combineReducers({
  browser: createResponsiveStateReducer({
    small: 640,
    medium: 832,
    large: 1024,
  }),
  Products,
  Menu,
  Cart,
});
