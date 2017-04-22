import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';
import Page from './page';

const Root = styled('div', {
  width: '100%',
});

const App = ({ children }) => (
  <Page>
    <Root>
      {children}
    </Root>
  </Page>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
