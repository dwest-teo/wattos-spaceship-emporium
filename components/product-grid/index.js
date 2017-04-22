import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';
import { Container } from './elems';

const dummyImgs = [
  'https://www.stevensegallery.com/150/150',
  'https://www.stevensegallery.com/148/148',
  'https://www.stevensegallery.com/145/145',
  'https://www.stevensegallery.com/140/140',
  'https://www.stevensegallery.com/135/135',
  'https://www.stevensegallery.com/130/130',
  'https://www.stevensegallery.com/155/155',
  'https://www.stevensegallery.com/160/160',
];

const placeholderImg = idx => dummyImgs[idx];

const ProductGrid = ({ products }) => (
  <Container>
    {products.map((product, i) => (
      <ProductCard
        key={i}
        name={product.name}
        price={product.price || 'Priced too low to show!'}
        imgUrl={placeholderImg(i)}
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
