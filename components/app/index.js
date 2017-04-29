import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { initAnalytics, trackPageView } from '../../lib/analytics';
import { Container } from '../base';
import Sidebar from '../sidebar';
import CartDropdown from '../cart-dropdown';
import Content from './content';

initAnalytics();
const pageTitle = title => title ? `Watto's | ${title}` : `Watto's Spaceship Emporium`;
const makeLinks = products => products.map(p => ({ name: p.name, slug: p.slug }));

class App extends Component {
  componentWillMount() {
    trackPageView();
  }

  render() {
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
    } = this.props;

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
          onDismiss={() => this.props.openSidebar(false)}
        />
        <Content openSidebar={this.props.openSidebar} {...this.props}>
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
  }
}

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
