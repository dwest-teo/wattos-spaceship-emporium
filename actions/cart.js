import { createAction } from 'redux-actions';

export const addToCart = createAction('ADD_TO_CART', prod => ({
  slug: prod.slug,
  name: prod.name,
  img: prod.thumbnail,
  price: prod.price || 'Call for Pricing',
}));

export const removeFromCart = createAction('REMOVE_FROM_CART');
