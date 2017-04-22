import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './elems';

const Header = props => (
  <Container>
    {props.name}s Space Emporium
  </Container>
);

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
