import { createAction } from 'redux-actions';

// boolean to indicate feed has been fetched and saved in Redux store
export const setFeedSavedStatus = createAction('SET_FEED_SAVED_STATUS');

// insert the product feed from the api into the store
export const setProductFeed = createAction('SET_PRODUCT_FEED');

// set a product as active when a detail view is requested
export const setActiveProduct = createAction('SET_ACTIVE_PRODUCT');
