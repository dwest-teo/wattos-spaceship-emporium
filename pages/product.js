import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import toSlug from '../lib/to-slug';
import App from '../components/app';
import { Text } from '../components/base';
// import isClient from '../lib/is-client';
import initStore from '../lib/store';
import { setProductFeed, setActiveProduct } from '../actions/product';

const specsArr = specs => Object.entries(specs).map(s => ({ label: s[0], value: s[1] }));

const Product = props => (
  <App>
    <Text>{props.activeProduct.name}</Text>
    <Text>{props.activeProduct.manufacturer}</Text>
    <Text>{props.activeProduct.class}</Text>
    <Text>{props.activeProduct.price}</Text>
    {specsArr(props.activeProduct.techspecs).map((spec, i) => (
      <div key={i}>
        <Text bold>{spec.label}</Text>
        <Text>{spec.value}</Text>
      </div>
    ))}
  </App>
);

Product.getInitialProps = async ({ store, isServer, query }) => {
  const res = await fetch('http://demo7475333.mockable.io/spaceships');
  const json = await res.json();
  store.dispatch(setProductFeed(json.products));
  store.dispatch(setActiveProduct(json.products.find(p => toSlug(p.name) === query.slug)));

  return { isServer };
};

Product.propTypes = {
  activeProduct: PropTypes.shape({
    name: PropTypes.string,
    manufacturer: PropTypes.string,
    class: PropTypes.string,
    price: PropTypes.string,
    techspecs: PropTypes.object,
  }),
};

export default withRedux(initStore, state => ({
  activeProduct: state.Product.active,
}))(Product);
