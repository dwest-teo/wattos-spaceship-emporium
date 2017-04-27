import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from '../base';
import { Sidebar } from '../sidebar';
import MobileHeader from '../mobile-header';

const defTitle = 'Watto\'s Spaceship Emporium';

const App = (props) => {
  const { children, products, isSidebarOpen, isLarge, title } = props;

  return (
    <Container p0>
      <Head>
        <title>{title ? `${title} - ${defTitle}` : defTitle}</title>
      </Head>
      <Sidebar
        open={isLarge || isSidebarOpen}
        products={products}
        onDismiss={() => props.openSidebar(false)}
      >
        <Container p0>
          {!isLarge && (
            <MobileHeader openSidebar={props.openSidebar} />
          )}
          {children}
        </Container>
      </Sidebar>
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
