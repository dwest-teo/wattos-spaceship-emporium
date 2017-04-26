import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import fetchProducts from '../lib/fetch-products';
import decorateProducts from '../lib/decorate-products';
import initStore from '../lib/store';
import {
  setFeedSavedStatus,
  setProductFeed,
  setActiveProduct,
} from '../actions/product';
import { openSidebar } from '../actions/sidebar';
import App from '../components/app';
import { Container, Text, Flex, Image, Box } from '../components/base';

class Product extends Component {
  static async getInitialProps({ store, isServer, query }) {
    let products;
    const feedSaved = store.getState().Product.feedSaved;

    if (feedSaved) {
      products = store.getState().Product.feed;
    } else {
      const productFeed = await fetchProducts();
      products = await decorateProducts(productFeed);
      store.dispatch(setProductFeed(products));
      store.dispatch(setFeedSavedStatus(true));
    }

    const activeProd = products.find(p => p.slug === query.slug);
    store.dispatch(setActiveProduct(activeProd));

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
          <Text is="h1">{activeProduct.name}</Text>
          <Image
            width={1}
            src={`/static/images/${activeProduct.slug}/0.jpg`}
            alt={activeProduct.name}
          />
          <Flex
            alignItems="center"
          >
            <Box>
              <Text>{activeProduct.manufacturer}</Text>
              <Text>{activeProduct.class}</Text>
            </Box>
            <Text flexAuto right fontSize={3}>
              {activeProduct.price || 'Call for our sale price!'}
            </Text>
          </Flex>
          <Box my3>
            <Text mb2 is="h3">
              Specifications:
            </Text>
            {activeProduct.techspecs.map((spec, i) => (
              <Box mb1 key={i} is="dl">
                <Box bold is="dt" display="inline-block" fontSize={6}>
                  {`${spec.label}: `}
                </Box>
                <Box ml1 gray is="dd" display="inline-block" fontSize={6}>
                  {spec.value}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </App>
    );
  }
}

Product.propTypes = {
  activeProduct: PropTypes.shape({
    name: PropTypes.string,
    manufacturer: PropTypes.string,
    class: PropTypes.string,
    price: PropTypes.string,
    techspecs: PropTypes.array,
    slug: PropTypes.string,
  }),
  setActiveProduct: PropTypes.func,
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
  activeProduct: state.Product.active,
  isLarge: state.browser.greaterThan.medium,
  isSidebarOpen: state.Sidebar.open,
}), { setActiveProduct, openSidebar })(Product);
