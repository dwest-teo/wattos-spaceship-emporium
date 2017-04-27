import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '../lib/store';
import serverSideInit from '../lib/server-side-init';
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
import Carousel from '../components/product/carousel';

const Product = (props) => {
  const { activeProduct } = props;

  return (
    <App title={activeProduct.name} {...props}>
      <Container>
        <Text mb2 is="h1" fontSize={[ 3, 2, 2, 2 ]}>{activeProduct.name}</Text>
        <Carousel productId={activeProduct.slug} images={activeProduct.images} />
        <Flex
          my3
          alignItems="center"
        >
          <Box>
            <Text gray6 fontSize={6}>{activeProduct.manufacturer}</Text>
            <Text gray6 fontSize={6}>{activeProduct.class}</Text>
          </Box>
          <Text flexAuto right fontSize={3}>
            {activeProduct.price || 'Call for Pricing'}
          </Text>
        </Flex>
        <Box my3>
          <Text caps mb1 is="h3" fontSize={4}>
            About this ship:
          </Text>
          <Text is="p">
            {activeProduct.description}
          </Text>
        </Box>
        <Box my3>
          <Text caps mb1 is="h3" fontSize={4}>
            Specifications:
          </Text>
          {activeProduct.techspecs.map((spec, i) => (
            <DefinitionList key={i} entry={spec} />
          ))}
        </Box>
      </Container>
    </App>
  );
};

Product.getInitialProps = async ({ store, isServer, query }) => {
  const { s } = query;

  const init = await serverSideInit(store, isServer);
  const productFeed = await store.getState().Product.feed;
  const activeProduct = await productFeed.find(p => p.slug === s);

  return { activeProduct, init };
};

Product.propTypes = {
  activeProduct: PropTypes.shape({
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
