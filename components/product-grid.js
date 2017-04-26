import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './product-card';
import { Flex } from './base';

const ProductGrid = ({ products }) => (
  <Flex flexWrap="wrap" width={1}>
    {products.map((product, i) => (
      <ProductCard
        key={i}
        name={product.name}
        price={product.price || 'Priced too low to show!'}
        thumbnail={`/static/images/thumbnails/${product.thumbnail}`}
        slug={product.slug}
      />
    ))}
  </Flex>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      thumbnail: PropTypes.string,
      slug: PropTypes.string,
    }),
  ),
};

export default ProductGrid;
