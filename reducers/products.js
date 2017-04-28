import { handleActions } from 'redux-actions';
import { ProductActions } from '../actions';

const Products = handleActions({
  [ProductActions.setProductFeed]: (state, action) => action.payload,
}, []);

export default Products;
