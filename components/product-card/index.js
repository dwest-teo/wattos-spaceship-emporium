import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from '../base';

const ProductCard = ({ name, price, imgUrl }) => (
  <Flex
    rounded
    border
    borderColor="gray3"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    width={[ 1, 1 / 2, 1 / 3, 1 / 4 ]}
    m={1}
    p={1}
    css={{ height: 250 }}
  >
    <img src={imgUrl} />
    <Text bold fontSize={4}>{name}</Text>
    <Text fontSize={5} color="gray6">{price}</Text>
  </Flex>
);

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default ProductCard;
