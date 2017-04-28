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
  Box,
  DefinitionList,
} from '../components/base';
import TopContainer from '../components/product-page/top-container';
import DetailsPane from '../components/product-page/details-pane';
import Carousel from '../components/carousel';

const Product = ({ activeProduct, ...props }) => (
  <App title={activeProduct.name} {...props}>
    <Container>
      <Text mb2 is="h1" fontSize={[ 3, 2, 2, 2 ]}>
        {activeProduct.name}
      </Text>
      <TopContainer>
        <Flex width={[ 1, 0.7, 1, 0.7 ]} pb={[ 2, 0, 2, 0 ]}>
          <Carousel
            key={activeProduct.slug}
            productId={activeProduct.slug}
            images={activeProduct.images}
          />
        </Flex>
        <DetailsPane
          manufacturer={activeProduct.manufacturer}
          type={activeProduct.class}
          price={activeProduct.price}
        />
      </TopContainer>
      <Box my3>
        <Text caps mb1 is="h3" fontSize={4}>About this ship:</Text>
        <Text is="p">
          {activeProduct.description}
        </Text>
      </Box>
      <Box my3>
        <Text caps mb1 is="h3" fontSize={4}>Specifications:</Text>
        {activeProduct.techspecs.map((spec, i) => (
          <DefinitionList key={i} entry={spec} />
        ))}
      </Box>
    </Container>
  </App>
);

Product.getInitialProps = async ({ store, isServer, query }) => {
  const { slug } = await query;

  const init = await serverSideInit(store, isServer);
  const productFeed = await store.getState().Product.feed;
  const activeProduct = await productFeed.find(p => p.slug === slug);

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
