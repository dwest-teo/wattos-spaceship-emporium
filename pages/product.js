import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import fetchProducts from '../lib/fetch-products';
import decorateProducts from '../lib/decorate-products';
import initStore from '../lib/store';
import { setProductFeed } from '../actions/product';
import { openSidebar } from '../actions/sidebar';
import App from '../components/app';
import { Container, Text, Flex, Image, Box } from '../components/base';

class Product extends Component {
  static async getInitialProps({ store, isServer, query }) {
    if (isServer) {
      const products = await fetchProducts();
      const decoratedProducts = await decorateProducts(products);
      await store.dispatch(setProductFeed(decoratedProducts));
    }

    const productFeed = await store.getState().Product.feed;
    const product = await productFeed.find(p => p.slug === query.slug);

    return { product };
  }

  componentWillUnmount() {
    this.props.setActiveProduct(null);
  }

  render() {
    const { product } = this.props;

    return (
      <App title={product.name} {...this.props}>
        <Container>
          <Text is="h1">{product.name}</Text>
          <Image
            width={1}
            src={`/static/images/product/${product.images[0]}`}
            alt={product.name}
          />
          <Flex
            alignItems="center"
          >
            <Box>
              <Text>{product.manufacturer}</Text>
              <Text>{product.class}</Text>
            </Box>
            <Text flexAuto right fontSize={3}>
              {product.price || 'Call for our sale price!'}
            </Text>
          </Flex>
          <Box my3>
            <Text is="p">
              {product.description}
            </Text>
          </Box>
          <Box my3>
            <Text mb2 is="h3">
              Specifications:
            </Text>
            {product.techspecs.map((spec, i) => (
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
  product: PropTypes.shape({
    name: PropTypes.string,
    manufacturer: PropTypes.string,
    class: PropTypes.string,
    price: PropTypes.string,
    techspecs: PropTypes.array,
    slug: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
  setActiveProduct: PropTypes.func,
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
  activeProduct: state.Product.active,
  isLarge: state.browser.greaterThan.medium,
  isSidebarOpen: state.Sidebar.open,
}), { openSidebar })(Product);
