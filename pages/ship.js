import 'isomorphic-fetch';
import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import App from '../components/app';
import { Text } from '../components/base';
import isClient from '../lib/is-client';
import initStore from '../lib/store';
import { getInventoryFeed, getInventoryItem } from '../actions/inventory';

const Ship = props => (
  <App>
    <Text>{props.product.name}</Text>
  </App>
);

Ship.getInitialProps = async ({ store, isServer }) => {
  // if we're doing this on the server, this will retrieve the initial state and then set an active product.  to make this work on the client, we need to dispatch the getInventoryItem action creator when the user clicks on the link from the product card...payload just needs to be the ship object
  const res = await fetch('http://demo7475333.mockable.io/spaceships');
  const json = await res.json();
  store.dispatch(getInventoryFeed(json.products));
  store.dispatch(getInventoryItem(json.products.find('do something here to find the ship')));
  return { isServer };
};

Ship.propTypes = {
  product: PropTypes.object,
};

export default withRedux(initStore, state => ({
  product: state.Inventory.activeItem,
}))(Ship);
