import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  CardInner,
  CardImg,
  CardTitle,
  CardPrice,
} from './elems';

const ProductCard = ({ name, price, imgUrl }) => (
  <CardContainer>
    <CardInner>
      <CardImg src={imgUrl} />
      <CardTitle>{name}</CardTitle>
      <CardPrice>{price}</CardPrice>
    </CardInner>
  </CardContainer>
);

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default ProductCard;
