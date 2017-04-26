import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import App from '../components/app';
import ProductGrid from '../components/product-grid';
import { Container, Flex, Text } from '../components/base';
import fetchProducts from '../lib/fetch-products';
import initStore from '../lib/store';
import { setFeedSavedStatus, setProductFeed } from '../actions/product';
import { openSidebar } from '../actions/sidebar';

class Home extends Component {
  static async getInitialProps({ store, isServer }) {
    const feedSaved = store.getState().Product.feedSaved;

    if (!feedSaved) {
      const products = await fetchProducts();
      store.dispatch(setProductFeed(products));
      store.dispatch(setFeedSavedStatus(true));
    }

    return { isServer };
  }

  render() {
    return (
      <App {...this.props}>
        <Flex
          bgDark
          justifyContent="center"
          alignItems="center"
          css={{ height: 300 }}
        >
          <Text
            center
            gray2
            mb4
            is="h1"
            fontSize={1}
            css={{ fontFamily: 'Concert One' }}
          >
            Awesome Verbiage
          </Text>
        </Flex>
        <Container bgWhite>
          <Text my2 is="h2">Current Inventory:</Text>
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
