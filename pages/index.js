import React from 'react';
import PropTypes from 'prop-types';

const Home = props => (
  <div>Hello, {props.name}!</div>
);

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: 'beautiful',
};

export default Home;
