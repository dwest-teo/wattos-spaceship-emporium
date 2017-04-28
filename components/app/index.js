import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from '../base';
import Sidebar from '../sidebar';
import Content from './content';

const defaultTitle = 'Watto\'s Spaceship Emporium';
const pageTitle = title => title ? `${title} - ${defaultTitle}` : defaultTitle;

const App = (props) => {
  const { children, products, isSidebarOpen, isLarge, title } = props;

  return (
    <Container p0 css={{ minHeight: '100vh' }}>
      <Head>
        <title>{pageTitle(title)}</title>
      </Head>
      <Sidebar
        open={isLarge || isSidebarOpen}
        products={products}
        onDismiss={() => props.openSidebar(false)}
      />
      <Content openSidebar={props.openSidebar}>
        {children}
      </Content>
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
