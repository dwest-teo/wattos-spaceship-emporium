import React from 'react';
import PropTypes from 'prop-types';
import toSlug from '../lib/to-slug';
import { Link } from '../routes';
import { Flex, Text, Image } from './base';

const productCardCss = { height: 250 };

const ProductCard = ({ name, price, imgUrl }) => (
  <Flex
    m1
    p1
    rounded
    border
    borderColor="gray3"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    width={[ 1, 1 / 2, 1 / 3, 1 / 4 ]}
    css={productCardCss}
  >
    <Link route="product" params={{ slug: toSlug(name) }}>
      <Image src={imgUrl} />
    </Link>
    <Text
      bold
      fontSize={4}
    >
      {name}
    </Text>
    <Text
      fontSize={5}
      color="gray6"
    >
      {price}
    </Text>
  </Flex>
);

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default ProductCard;
