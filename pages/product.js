import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import toSlug from '../lib/to-slug';
import App from '../components/app';
import { Container, Text, Box } from '../components/base';
import fetchProducts from '../lib/fetch-products';
import initStore from '../lib/store';
import { setProductFeed, setActiveProduct } from '../actions/product';

const specsArr = specs => Object.entries(specs).map(s => ({ label: s[0], value: s[1] }));

const Product = props => (
  <App isLarge={props.isLarge}>
    <Container>
      <Text bold>Name</Text>
      <Text>{props.activeProduct.name}</Text>
      <Text bold>Manufacturer</Text>
      <Text>{props.activeProduct.manufacturer}</Text>
      <Text bold>Class</Text>
      <Text>{props.activeProduct.class}</Text>
      <Text bold>Price</Text>
      <Text>{props.activeProduct.price}</Text>
      <Box mt2 pt2 borderTop>
        {specsArr(props.activeProduct.techspecs).map((spec, i) => (
          <Box key={i}>
            <Text bold gray>{spec.label}</Text>
            <Text>{spec.value}</Text>
          </Box>
        ))}
      </Box>
    </Container>
  </App>
);

Product.getInitialProps = async ({ store, isServer, query, res }) => {
  let products;

  if (isServer) {
    products = await fetchProducts();
    store.dispatch(setProductFeed(products));
  } else {
    products = store.getState().Product.feed;
  }

  const activeProduct = products.find(p => toSlug(p.name) === query.slug);

  if (!activeProduct && res) {
    res.statusCode = 404;
  }

  store.dispatch(setActiveProduct(activeProduct));

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
  isLarge: PropTypes.bool,
};

export default withRedux(initStore, state => ({
  activeProduct: state.Product.active,
  isLarge: state.browser.greaterThan.medium,
}))(Product);
