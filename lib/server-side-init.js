import { setProductFeed } from '../actions/product';
import fetchProducts from './fetch-products';
import decorateProducts from './decorate-products';

const serverSideInit = async (store, isServer) => {
  if (isServer) {
    const products = await fetchProducts();
    const decoratedProducts = await decorateProducts(products);
    await store.dispatch(setProductFeed(decoratedProducts));
  }

  return { isServer };
};

export default serverSideInit;
