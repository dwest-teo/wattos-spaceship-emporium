import { handleActions } from 'redux-actions';
import { ProductActions } from '../actions';

const productState = {
  feed: [],
  active: null,
};

const Product = handleActions({
  [ProductActions.setProductFeed]: (state, action) => ({
    ...state,
    feed: action.payload,
  }),
  [ProductActions.setActiveProduct]: (state, action) => ({
    ...state,
    active: {
      ...action.payload,
    },
  }),
}, productState);

export default Product;
