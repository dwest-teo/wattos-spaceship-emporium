import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from '../base';
import Sidebar from '../sidebar';
import CartDropdown from '../cart-dropdown';
import Content from './content';

const defaultTitle = 'Watto\'s Spaceship Emporium';
const pageTitle = title => title ? `${title} - ${defaultTitle}` : defaultTitle;

const App = (props) => {
  const {
    children,
    products,
    cartProducts,
    isSidebarOpen,
    isDropdownOpen,
    isLarge,
    title,
    toggleDropdown,
    removeFromCart,
  } = props;

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
      <Content openSidebar={props.openSidebar} {...props}>
        {children}
      </Content>
      <CartDropdown
        cartProducts={cartProducts}
        open={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        removeFromCart={removeFromCart}
      />
    </Container>
  );
};

App.propTypes = {
  products: PropTypes.array,
  cartProducts: PropTypes.array,
  children: PropTypes.node,
  isLarge: PropTypes.bool,
  isSidebarOpen: PropTypes.bool,
  isDropdownOpen: PropTypes.bool,
  title: PropTypes.string,
  openSidebar: PropTypes.func,
  toggleDropdown: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default App;
