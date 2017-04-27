import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import fetchProducts from '../lib/fetch-products';
import decorateProducts from '../lib/decorate-products';
import initStore from '../lib/store';
import { setProductFeed } from '../actions/product';
import { openSidebar } from '../actions/sidebar';
import App from '../components/app';
import ProductGrid from '../components/product-grid';
import { Container, Box, Flex, Text } from '../components/base';
import Starfield from '../components/starfield';

class Home extends Component {
  static async getInitialProps({ store, isServer }) {
    if (isServer) {
      const products = await fetchProducts();
      const decoratedProducts = await decorateProducts(products);
      await store.dispatch(setProductFeed(decoratedProducts));
    }

    return { isServer };
  }

  render() {
    return (
      <App {...this.props}>
        <Starfield>
          <Flex
            pb4
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              center
              gray2
              mt4
              is="h1"
              fontSize={1}
            >
              Watto&apos;s Space Emporium
            </Text>
            <Text
              center
              mt2
              gray
              fontSize={3}
            >
              The final frontier...of savings!
            </Text>
          </Flex>
        </Starfield>
        <Container bgWhite>
          <Text my2 is="h2">Browse Our Current Inventory:</Text>
          <ProductGrid products={this.props.products} />
        </Container>
      </App>
    );
  }
}

Home.propTypes = {
  products: PropTypes.array,
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
  isLarge: state.browser.greaterThan.medium,
  isSidebarOpen: state.Sidebar.open,
}), { openSidebar })(Home);
