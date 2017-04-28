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
  topContainer: {
    flexDirection: 'column',
    [breakpoints[0]]: {
      flexDirection: 'row !important',
    },
    [breakpoints[1]]: {
      flexDirection: 'column !important',
    },
    [breakpoints[2]]: {
      flexDirection: 'row !important',
    },
  },
  detailsPaneOuter: {
    width: '100%',
    [breakpoints[0]]: {
      width: '30% !important',
    },
    [breakpoints[1]]: {
      width: '100% !important',
    },
    [breakpoints[2]]: {
      width: '30% !important',
    },
  },
  detailsPaneInner: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [breakpoints[0]]: {
      flexDirection: 'column !important',
      flexWrap: 'nowrap !important',
    },
    [breakpoints[1]]: {
      flexDirection: 'row !important',
      flexWrap: 'wrap !important',
    },
    [breakpoints[2]]: {
      flexDirection: 'column !important',
      flexWrap: 'nowrap !important',
    },
  },
  optLabel: {
    display: 'none',
    [breakpoints[0]]: {
      display: 'block !important',
    },
    [breakpoints[1]]: {
      display: 'none !important',
    },
    [breakpoints[2]]: {
      display: 'block !important',
    },
  },
  price: {
    margin: '0 0 0 auto',
    [breakpoints[0]]: {
      margin: 'auto !important',
    },
    [breakpoints[1]]: {
      margin: '0 0 0 auto !important',
    },
    [breakpoints[2]]: {
      margin: 'auto !important',
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

        <Flex width={1} css={styles.topContainer}>
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
            pl={[ 0, 2, 0, 2 ]}
            alignItems="flex-start"
            css={styles.detailsPaneOuter}
          >
            <Flex
              pb={[ 0, 2, 0, 2 ]}
              width={1}
              css={styles.detailsPaneInner}
            >
              <Box fontSize={[ 6, 5, 6, 5 ]}>
                <Text caps bold mt3 gray9 css={styles.optLabel}>Manufacturer</Text>
                <Text gray6>{activeProduct.manufacturer}</Text>
                <Text caps bold mt3 gray9 css={styles.optLabel}>Class</Text>
                <Text gray6>{activeProduct.class}</Text>
              </Box>
              <Text fontSize={3} css={styles.price}>
                {activeProduct.price || 'Call for Pricing'}
              </Text>
              <Button mt3 width={1}>Add to Cart</Button>
            </Flex>
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
