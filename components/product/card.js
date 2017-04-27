import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Flex, Box, Text, Image } from '../base';

const cardStyles = { flexBasis: 200 };

const Card = ({ name, price, thumbnail, slug }) => (
  <Box
    m1
    rounded
    border
    borderGray2
    flexAuto
    css={cardStyles}
  >
    <Link prefetch href={`/product?s=${slug}`}>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        width={1}
        css={{ height: '100%', cursor: 'pointer' }}
      >
        <Box p1 width={1} css={{ margin: 'auto' }}>
          <Image
            src={thumbnail}
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

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
  slug: PropTypes.string,
};

export default Card;
