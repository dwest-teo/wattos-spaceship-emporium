import { createAction } from 'redux-actions';

// insert the product feed from the api into the store
export const setProductFeed = createAction('SET_PRODUCT_FEED');

// set a product as active when a detail view is requested
export const setActiveProduct = createAction('SET_ACTIVE_PRODUCT');
