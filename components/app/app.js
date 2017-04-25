import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from '../base';
import Sidebar from '../sidebar';
import MobileHeader from '../mobile-header';

const App = (props) => {
  const { children, products, isLarge, isSidebarOpen, openSidebar, title } = props;

  return (
    <Container p0 css={{ minHeight: '100vh' }}>
      <Head>
        <title>{ title || 'Watto\'s Spaceship Emporium' }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sidebar
        open={isSidebarOpen || isLarge}
        products={products}
        onDismiss={() => openSidebar(false)}
      />
      <Container
        p0
        width={null}
        css={{
          marginLeft: isLarge ? 300 : 0,
        }}
      >
        {!isLarge && (
          <MobileHeader openSidebar={openSidebar} />
        )}
        {children}
      </Container>
    </Container>
  );
};

App.propTypes = {
  products: PropTypes.array,
  children: PropTypes.node,
  products: PropTypes.array,
  isLarge: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  title: PropTypes.string,
  openSidebar: PropTypes.func,
};

export default App;
