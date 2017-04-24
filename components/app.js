import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from './base';
import Sidebar from './sidebar';

const App = (props) => {
  const { children, isLarge, isSidebarOpen, openSidebar, title } = props;

  return (
    <Container p0 css={{ minHeight: '100vh' }}>
      <Head>
        <title>{ title || 'Watto\'s Spaceship Emporium' }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!isLarge && (
        <button onClick={() => openSidebar(true)}>Menu</button>
      )}
      <Sidebar
        docked={isLarge}
        open={isSidebarOpen}
        onDismiss={() => openSidebar(false)}
      />
      <Container p0 width={null} css={{ marginLeft: isLarge ? 300 : 0 }}>
        {children}
      </Container>
    </Container>
  );
};

App.propTypes = {
  children: PropTypes.node,
  isLarge: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  title: PropTypes.string,
  openSidebar: PropTypes.func,
};

export default App;
