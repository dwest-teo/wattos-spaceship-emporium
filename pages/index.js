import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '../lib/store';
import serverSideInit from '../lib/server-side-init';
import { openSidebar, toggleDropdown } from '../actions/menu';
import { removeFromCart } from '../actions/cart';

import App from '../components/app';
import Grid from '../components/product-grid';
import Hero from '../components/hero';

const Home = props => (
  <App {...props}>
    <Hero
      heading="Our prices are so low..."
      subheading="You'll think it's a Jedi mind trick!"
    />
    <Grid
      products={props.products}
      heading="Browse Our Current Inventory:"
    />
  </App>
);

Home.getInitialProps = async ({ store, isServer }) => {
  const init = await serverSideInit(store, isServer);
  return { init };
};

Home.propTypes = {
  products: PropTypes.array,
};

export default withRedux(initStore, state => ({
  products: state.Products,
  cartProducts: state.Cart,
  isLarge: state.browser.greaterThan.medium,
  isSidebarOpen: state.Menu.sidebarOpen,
  isDropdownOpen: state.Menu.dropdownOpen,
}), { openSidebar, toggleDropdown, removeFromCart })(Home);
