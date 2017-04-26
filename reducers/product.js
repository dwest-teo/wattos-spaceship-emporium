import { handleActions } from 'redux-actions';
import { ProductActions } from '../actions';

const productState = {
  feedSaved: false,
  feed: [],
  active: null,
};

const Product = handleActions({
  [ProductActions.setFeedSavedStatus]: (state, action) => ({
    ...state,
    feedSaved: action.payload,
  }),
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
