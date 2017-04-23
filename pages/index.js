import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import App from '../components/app';
import ProductGrid from '../components/product-grid';

const Home = props => (
  <App>
    <ProductGrid products={props.products} />
  </App>
);

Home.getInitialProps = async () => {
  const res = await fetch('http://demo7475333.mockable.io/spaceships');
  const json = await res.json();
  return { products: json.products };
};

Home.propTypes = {
  products: PropTypes.array,
};

export default Home;
