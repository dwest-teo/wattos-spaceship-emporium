import { handleActions } from 'redux-actions';
import { CartActions } from '../actions';

const Cart = handleActions({
  [CartActions.addToCart]: (state, action) => {
    if (state.find(p => p.slug === action.payload.slug)) {
      return state;
    }

    return [ ...state, action.payload ];
  },
  [CartActions.removeFromCart]: (state, action) => {
    return state.filter(p => p.slug !== action.payload);
  },
}, []);

export default Cart;
