import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from '../base';
import Sidebar from '../sidebar';
import MobileHeader from '../mobile-header';

const defTitle = 'Watto\'s Spaceship Emporium';

const App = (props) => {
  const { children, products, isLarge, isSidebarOpen, openSidebar, title } = props;

  return (
    <Container p0 css={{ minHeight: '100vh' }}>
      <Head>
        <title>{title ? `${title} - ${defTitle}` : defTitle}</title>
      </Head>
      <Sidebar
        open={isSidebarOpen || isLarge}
        products={products}
        onDismiss={() => openSidebar(false)}
      />
      <Container
        p0
        width={null}
        css={{ marginLeft: isLarge ? 300 : 0 }}
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
  isLarge: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  title: PropTypes.string,
  openSidebar: PropTypes.func,
};

export default App;
