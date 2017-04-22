import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';
import { Container } from './elems';

const ProductGrid = ({ products }) => (
  <Container>
    {products.map((product, i) => (
      <ProductCard
        key={i}
        name={product.name}
        price={product.price}
        imgUrl={product.imgUrl}
      />
    ))}
  </Container>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      imgUrl: PropTypes.string,
    }),
  ),
};

export default ProductGrid;
