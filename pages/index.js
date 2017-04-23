import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import App from '../components/app';
import ProductGrid from '../components/product-grid';
import fetchProducts from '../lib/fetch-products';
import initStore from '../lib/store';
import { setProductFeed } from '../actions/product';

const Home = props => (
  <App>
    <ProductGrid products={props.products} />
  </App>
);

Home.getInitialProps = async ({ store, isServer }) => {
  if (isServer) {
    const products = await fetchProducts();
    store.dispatch(setProductFeed(products));
  }

  return { isServer };
};

Home.propTypes = {
  products: PropTypes.array,
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
}))(Home);
