import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import App from '../components/app';
import ProductGrid from '../components/product-grid';
import { Container, Flex, Text } from '../components/base';
import fetchProducts from '../lib/fetch-products';
import initStore from '../lib/store';
import { setProductFeed } from '../actions/product';
import { openSidebar } from '../actions/sidebar';

const Home = ({ products, ...props }) => (
  <App products={products} {...props}>
    <Flex
      justifyContent="center"
      alignItems="center"
      css={{
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: 'url("/static/images/hero.jpg")',
        height: 300,
        minHeight: 0,
      }}
    >
      <Text
        gray2
        mb4
        is="h1"
        fontSize={1}
      >
        Awesome Verbiage
      </Text>
    </Flex>
    <Container bgWhite>
      <Text black3 my2 is="h2">Current Inventory:</Text>
      <ProductGrid products={products} />
    </Container>
  </App>
);

Home.getInitialProps = async ({ store, isServer }) => {
  // if (isServer) {
  //   const products = await fetchProducts();
  //   store.dispatch(setProductFeed(products));
  // } else {
  //   store.dispatch(openSidebar(false));
  // }

  const products = await fetchProducts();
  store.dispatch(setProductFeed(products));
  store.dispatch(openSidebar(false));

  return { isServer };
};

Home.propTypes = {
  products: PropTypes.array,
  isLarge: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  openSidebar: PropTypes.func,
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
  isLarge: state.browser.greaterThan.medium,
  isSidebarOpen: state.Sidebar.open,
}), { openSidebar })(Home);
