import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';
import { Flex } from '../base';

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
  <Flex
    flexWrap="wrap"
    width={1}
    mt={2}
  >
    {products.map((product, i) => (
      <ProductCard
        key={i}
        name={product.name}
        price={product.price || 'Priced too low to show!'}
        imgUrl={placeholderImg(i)}
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
