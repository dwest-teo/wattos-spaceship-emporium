import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import toSlug from '../lib/to-slug';
import App from '../components/app';
import { Container, Text, Flex, Image, Box } from '../components/base';
import fetchProducts from '../lib/fetch-products';
import initStore from '../lib/store';
import { setFeedSavedStatus, setProductFeed, setActiveProduct } from '../actions/product';
import { openSidebar } from '../actions/sidebar';

const specsArr = specs => Object.entries(specs).map(s => ({ label: s[0], value: s[1] }));

class Product extends Component {
  static async getInitialProps({ store, isServer, query }) {
    let products;
    const feedSaved = store.getState().Product.feedSaved;

    if (feedSaved) {
      products = store.getState().Product.feed;
    } else {
      products = await fetchProducts();
      store.dispatch(setProductFeed(products));
      store.dispatch(setFeedSavedStatus(true));
    }

    const activeProd = products.find(p => toSlug(p.name) === query.slug);
    store.dispatch(setActiveProduct(activeProd));
    store.dispatch(openSidebar(false));

    return { isServer };
  }

  componentWillUnmount() {
    this.props.setActiveProduct(null);
  }

  render() {
    const { activeProduct } = this.props;

    return (
      <App title={activeProduct.name} {...this.props}>
        <Container>
          <Flex
            justifyContent="space-between"
            alignItems="center"
          >
            <Text is="h1">{activeProduct.name}</Text>
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
  }
}

Product.propTypes = {
  query: PropTypes.object,
  activeProduct: PropTypes.shape({
    name: PropTypes.string,
    manufacturer: PropTypes.string,
    class: PropTypes.string,
    price: PropTypes.string,
    techspecs: PropTypes.object,
  }),
  setActiveProduct: PropTypes.func,
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
  activeProduct: state.Product.active,
  isLarge: state.browser.greaterThan.medium,
  isSidebarOpen: state.Sidebar.open,
}), { setActiveProduct })(Product);
