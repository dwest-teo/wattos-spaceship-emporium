import { handleActions } from 'redux-actions';
import { CartActions } from '../actions';

const Cart = handleActions({
  [CartActions.addToCart]: (state, action) => state.find(p => p.slug === action.payload.slug)
    ? state
    : [ ...state, action.payload ],
  [CartActions.removeFromCart]: (state, action) => state.filter(p => p.slug !== action.payload),
}, []);

export default Cart;
