import React from 'react';
import PropTypes from 'prop-types';
import { StyletronProvider } from 'styletron-react';
import getStyletron from '../../lib/styletron';

const StyleProvider = ({ children }) => (
  <StyletronProvider styletron={getStyletron()}>
    {children}
  </StyletronProvider>
);

StyleProvider.propTypes = {
  children: PropTypes.node,
};

export default StyleProvider;
