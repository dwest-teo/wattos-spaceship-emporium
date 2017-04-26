import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import fetchProducts from '../lib/fetch-products';
import decorateProducts from '../lib/decorate-products';
import initStore from '../lib/store';
import { setProductFeed } from '../actions/product';
import { openSidebar } from '../actions/sidebar';
import App from '../components/app';
import {
  Container,
  Text,
  Flex,
  Image,
  Box,
  DefinitionList,
} from '../components/base';
// import ImgCarousel from '../components/product/carousel';

class Product extends Component {
  static async getInitialProps({ store, isServer, query }) {
    const { s } = query;

    if (isServer) {
      const products = await fetchProducts();
      const decoratedProducts = await decorateProducts(products);
      await store.dispatch(setProductFeed(decoratedProducts));
    }

    const productFeed = await store.getState().Product.feed;
    const product = await productFeed.find(p => p.slug === s);

    return { product };
  }

  render() {
    const { product } = this.props;

    return (
      <App title={product.name} {...this.props}>
        <Container>
          <Text mb2 is="h1">{product.name}</Text>
          <Image
            width={1}
            src={`/static/images/product/${product.images[0]}`}
            alt={product.name}
          />
          {/* <ImgCarousel images={product.images} path="/static/images/product/" /> */}
          <Flex
            my3
            alignItems="center"
          >
            <Box>
              <Text gray6 fontSize={6}>{product.manufacturer}</Text>
              <Text gray6 fontSize={6}>{product.class}</Text>
            </Box>
            <Text flexAuto right fontSize={3}>
              {product.price || 'Call for our sale price!'}
            </Text>
          </Flex>
          <Box my3>
            <Text caps mb1 is="h3" fontSize={4}>
              About this ship:
            </Text>
            <Text is="p">
              {product.description}
            </Text>
          </Box>
          <Box my3>
            <Text caps mb1 is="h3" fontSize={4}>
              Specifications:
            </Text>
            {product.techspecs.map((spec, i) => (
              <DefinitionList key={i} entry={spec} />
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
};

export default withRedux(initStore, state => ({
  products: state.Product.feed,
  isLarge: state.browser.greaterThan.medium,
  isSidebarOpen: state.Sidebar.open,
}), { openSidebar })(Product);
