import React from 'react';
import PropTypes from 'prop-types';
import StyleProvider from './style-provider';
import PageRoot from './page-root';

const App = ({ children }) => (
  <StyleProvider>
    <PageRoot>
      {children}
    </PageRoot>
  </StyleProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
