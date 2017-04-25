import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import toSlug from '../lib/to-slug';
import App from '../components/app';
import { Container, Text, Flex, Image, Box } from '../components/base';
import fetchProducts from '../lib/fetch-products';
import initStore from '../lib/store';
import { setProductFeed, setActiveProduct } from '../actions/product';
import { openSidebar } from '../actions/sidebar';

const specsArr = specs => Object.entries(specs).map(s => ({ label: s[0], value: s[1] }));

const Product = ({ activeProduct, ...props }) => (
  <App {...props}>
    <Container>
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Text black3 is="h1">{activeProduct.name}</Text>
        <Box right>
          <Text>{activeProduct.manufacturer}</Text>
          <Text>{activeProduct.class}</Text>
          <Text>{activeProduct.price}</Text>
        </Box>
      </Flex>
      <Image width={1} src="https://www.stevensegallery.com/600/400" />
      <Box mt2 pt2 borderTop>
        {specsArr(activeProduct.techspecs).map((spec, i) => (
          <Box key={i}>
            <Text bold gray>{spec.label}</Text>
            <Text css={{ fontFamily: 'Space Mono' }}>{spec.value}</Text>
          </Box>
        ))}
      </Box>
    </Container>
  </App>
);

Product.getInitialProps = async ({ store, isServer, query, res }) => {
  store.dispatch(openSidebar(false));

  const storeProducts = store.getState().Product.feed;
  const products = storeProducts.length > 0 ? storeProducts : await fetchProducts();

  store.dispatch(setProductFeed(products));

  const activeProduct = products.find(p => toSlug(p.name) === query.slug);

  if (!activeProduct && res) {
    res.statusCode = 404;
  }

  store.dispatch(setActiveProduct(activeProduct));

  return { isServer };
};

Product.propTypes = {
  products: PropTypes.array,
  activeProduct: PropTypes.shape({
    name: PropTypes.string,
    manufacturer: PropTypes.string,
    class: PropTypes.string,
    price: PropTypes.string,
    techspecs: PropTypes.object,
  }),
  isLarge: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  openSidebar: PropTypes.func,
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
  activeProduct: state.Product.active,
  isLarge: state.browser.greaterThan.medium,
  isSidebarOpen: state.Sidebar.open,
}), { openSidebar })(Product);
