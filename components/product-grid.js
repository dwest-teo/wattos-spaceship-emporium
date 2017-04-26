import React from 'react';
import PropTypes from 'prop-types';
import toSlug from '../lib/to-slug';
import ProductCard from './product-card';
import { Flex } from './base';

const ProductGrid = ({ products }) => (
  <Flex flexWrap="wrap" width={1}>
    {products.map((product, i) => (
      <ProductCard
        key={i}
        name={product.name}
        price={product.price || 'Priced too low to show!'}
        imgUrl={`/static/images/${toSlug(product.name)}/thumb.jpg`}
      />
    ))}
  </Flex>
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
