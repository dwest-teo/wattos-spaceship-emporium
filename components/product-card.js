import React from 'react';
import PropTypes from 'prop-types';
import toSlug from '../lib/to-slug';
import { Link } from '../routes';
import { Flex, Box, Text, Image } from './base';

const ProductCard = ({ name, price, imgUrl }) => (
  <Box
    m1
    rounded
    border
    borderGray2
    flexAuto
    css={{ flexBasis: 200 }}
  >
    <Link prefetch route="product" params={{ slug: toSlug(name) }}>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        width={1}
        css={{ height: '100%', cursor: 'pointer' }}
      >
        <Box p1 width={1} css={{ margin: 'auto' }}>
          <Image
            src={imgUrl}
            alt={name}
            width={1}
            css={{ display: 'block' }}
          />
        </Box>
        <Box p1 width={1}>
          <Text bold fontSize={5}>
            {name}
          </Text>
          <Text gray9 fontSize={6}>
            {price}
          </Text>
        </Box>
      </Flex>
    </Link>
  </Box>
);

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default ProductCard;
