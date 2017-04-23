import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import App from '../components/app';
import ProductGrid from '../components/product-grid';
import initStore from '../lib/store';
import { setProductFeed } from '../actions/product';

const Home = props => (
  <App>
    <ProductGrid products={props.products} />
  </App>
);

Home.getInitialProps = async ({ store, isServer }) => {
  if (isServer) {
    const res = await fetch('http://demo7475333.mockable.io/spaceships');
    const json = await res.json();
    store.dispatch(setProductFeed(json.products));
  }

  return { isServer };
};

Home.propTypes = {
  products: PropTypes.array,
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
}))(Home);
