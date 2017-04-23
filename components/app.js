import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Flex } from './base';
import Sidebar from './sidebar';

const App = ({ children, title = 'Watto\'s Spaceship Emporium' }) => (
  <Flex
    flexWrap="nowrap"
    css={{ minHeight: '100vh' }}
  >
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Sidebar />
    {children}
  </Flex>
);

App.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default App;
