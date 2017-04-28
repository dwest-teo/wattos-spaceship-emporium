import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Box,
  Text,
  Button,
  config,
} from '../../components/base';

const { breakpoints } = config.get();

const styles = {
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

const ProductDetailsPane = (props) => {
  const { manufacturer, type, price, slug, name, thumbnail, addToCart } = props;

  return (
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
          <Text gray6>{manufacturer}</Text>
          <Text caps bold mt3 gray9 css={styles.optLabel}>Class</Text>
          <Text gray6>{type}</Text>
        </Box>
        <Text fontSize={3} css={styles.price}>
          {price || 'Call for Pricing'}
        </Text>
        <Button
          mt3
          width={1}
          onClick={() => addToCart({ slug, name, thumbnail, price })}
        >
          Add to Cart
        </Button>
      </Flex>
    </Flex>
  );
};

ProductDetailsPane.propTypes = {
  manufacturer: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
  slug: PropTypes.string,
  thumbnail: PropTypes.string,
  addToCart: PropTypes.func,
};

ProductDetailsPane.displayName = 'ProductDetailsPane';

export default ProductDetailsPane;
