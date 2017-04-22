import React from 'react';
import PropTypes from 'prop-types';
import { StyletronProvider } from 'styletron-react';
import getStyletron from '../../lib/styletron';

const Page = ({ children }) => (
  <StyletronProvider styletron={getStyletron()}>
    {children}
  </StyletronProvider>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
