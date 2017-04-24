import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from './base';
import Sidebar from './sidebar';

const App = ({ children, isLarge, title = 'Watto\'s Spaceship Emporium' }) => (
  <Container p0 css={{ minHeight: '100vh' }}>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Sidebar isLarge={isLarge} />
    <Container p0 width={null} css={{ marginLeft: isLarge ? 320 : 0 }}>
      {children}
    </Container>
  </Container>
);

App.propTypes = {
  children: PropTypes.node,
  isLarge: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default App;
