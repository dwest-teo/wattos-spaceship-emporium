import React from 'react';
import PropTypes from 'prop-types';
import { RootContainer } from '../base';

const App = ({ children }) => (
  <RootContainer>
    {children}
  </RootContainer>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
