import { handleActions } from 'redux-actions';
import { ProductActions } from '../actions';

const Products = handleActions({
  [ProductActions.setProductFeed]: (state, action) => ([ ...state, ...action.payload ]),
}, []);

export default Products;
