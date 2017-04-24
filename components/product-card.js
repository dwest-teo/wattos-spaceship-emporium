import React from 'react';
import PropTypes from 'prop-types';
import toSlug from '../lib/to-slug';
import { Link } from '../routes';
import { Flex, Text, Image } from './base';

const productCardCss = { height: 280, flexBasis: 220 };

const ProductCard = ({ name, price, imgUrl }) => (
  <Flex
    m1
    p1
    rounded
    border
    borderGray2
    flexAuto
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    css={productCardCss}
  >
    <Link route="product" params={{ slug: toSlug(name) }}>
      <Image src={imgUrl} />
    </Link>
    <Text
      bold
      black3
      fontSize={4}
    >
      {name}
    </Text>
    <Text
      gray
      fontSize={5}
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
