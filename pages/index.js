import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import App from '../components/app';
import Header from '../components/header';
import { OuterContainer } from '../components/base';
import ProductGrid from '../components/product-grid';

const Home = props => (
  <App>
    <Header />
    <OuterContainer>
      <ProductGrid products={props.products} />
    </OuterContainer>
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
