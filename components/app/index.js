import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from '../base';
import Sidebar from '../sidebar';
import CartDropdown from '../cart-dropdown';
import Content from './content';

const defaultTitle = 'Watto\'s Spaceship Emporium';
const pageTitle = title => title ? `${title} - ${defaultTitle}` : defaultTitle;

const makeLinks = products => products.map(p => ({ name: p.name, slug: p.slug }));

const App = (props) => {
  const {
    children,
    products,
    cartProducts,
    activeLink,
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sidebar
        open={isLarge || isSidebarOpen}
        productLinks={makeLinks(products)}
        activeLink={activeLink}
        onDismiss={() => props.openSidebar(false)}
      />
      <Content openSidebar={props.openSidebar} {...props}>
        {children}
      </Content>
      <CartDropdown
        cartProducts={cartProducts}
        open={isDropdownOpen}
        isLarge={isLarge}
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
  activeLink: PropTypes.string,
  isSidebarOpen: PropTypes.bool,
  isDropdownOpen: PropTypes.bool,
  title: PropTypes.string,
  openSidebar: PropTypes.func,
  toggleDropdown: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default App;
