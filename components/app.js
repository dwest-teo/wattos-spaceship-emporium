import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from './base';
import Header from './header';

const App = ({ children, title = 'Watto\'s Spaceship Emporium' }) => (
  <Container p0>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Container>
      {children}
    </Container>
  </Container>
);

App.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default App;
