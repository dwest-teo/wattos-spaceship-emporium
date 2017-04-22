import React from 'react';
import PropTypes from 'prop-types';
import App from '../components/app';
import Header from '../components/header';
import ProductGrid from '../components/product-grid';

const products = [
  {
    name: 'Twin Ion Engine Starfighter',
    price: '149,999 credits',
    imgUrl: 'https://www.stevensegallery.com/150/150',
  },
  {
    name: 'T-65 X-wing Starfighter',
    price: '119,999 credits',
    imgUrl: 'https://www.stevensegallery.com/148/148',
  },
  {
    name: 'Y-wing Starfighter',
    price: '129,999 credits',
    imgUrl: 'https://www.stevensegallery.com/145/145',
  },
  {
    name: 'YT-1300 Light Freighter',
    price: '100,999 credits',
    imgUrl: 'https://www.stevensegallery.com/140/140',
  },
  {
    name: 'Alpha-class Xg-1 Star Wing',
    price: '109,999 credits',
    imgUrl: 'https://www.stevensegallery.com/135/135',
  },
  {
    name: 'Lambda-class T-4a shuttle',
    price: '249,999 credits',
    imgUrl: 'https://www.stevensegallery.com/130/130',
  },
];

const Home = props => (
  <App>
    <Header name={props.name} />
    <ProductGrid products={products} />
  </App>
);

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: 'Watto',
};

export default Home;
