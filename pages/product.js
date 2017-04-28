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
  Button,
  config,
} from '../components/base';
import Carousel from '../components/product/carousel';

const { breakpoints } = config.get();

const styles = {
  gallery: {
    flexDirection: 'column',
    [breakpoints[0]]: {
      flexDirection: 'row',
    },
    [breakpoints[1]]: {
      flexDirection: 'column',
    },
    [breakpoints[2]]: {
      flexDirection: 'row',
    },
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    [breakpoints[0]]: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
    [breakpoints[1]]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    [breakpoints[2]]: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
  },
};

const Product = (props) => {
  const { activeProduct } = props;

  return (
    <App title={activeProduct.name} {...props}>
      <Container>
        <Text mb2 is="h1" fontSize={[ 3, 2, 2, 2 ]}>
          {activeProduct.name}
        </Text>
        <Flex width={1} css={styles.gallery}>
          <Flex
            width={[ 1, 0.7, 1, 0.7 ]}
            pb={[ 2, 0, 2, 0 ]}
          >
            <Carousel
              key={activeProduct.slug}
              productId={activeProduct.slug}
              images={activeProduct.images}
            />
          </Flex>
          <Flex
            width={[ 1, 0.3, 1, 0.3 ]}
            pl={[ 0, 2, 0, 2 ]}
            alignItems="center"
            css={styles.details}
          >
            <Flex width={1}>
              <Box>
                <Text gray6 fontSize={6}>{activeProduct.manufacturer}</Text>
                <Text gray6 fontSize={6}>{activeProduct.class}</Text>
              </Box>
              <Text flexAuto right fontSize={3}>
                {activeProduct.price || 'Call for Pricing'}
              </Text>
            </Flex>
            <Button mt2 width={1}>Add to Cart</Button>
          </Flex>
        </Flex>
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
};

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
