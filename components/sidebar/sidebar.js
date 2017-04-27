import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  config,
} from '../base';
import Footer from './footer';
import Wrapper from './wrapper';
import Content from './content';

const { breakpoints } = config.get();

const Sidebar = ({ children, open, onDismiss, products, ...props }) => {
  const styles = {
    wrapper: {
      position: 'relative',
      overflowX: 'hidden',
      minHeight: '100vh',
    },
    content: {
      position: 'relative',
      height: '100%',
      transition: 'transform .3s cubic-bezier(0.645,  0.045, 0.355, 1.000)',
      transform: open ? 'translateX(300px)' : 'translateX(0)',
      [breakpoints[1]]: {
        transform: 'translateX(300px)',
      },
    },
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 20,
      display: open ? null : 'none',
      [breakpoints[1]]: {
        display: 'none',
      },
    },
    bar: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: -300,
      zIndex: 30,
      transition: 'transform .3s cubic-bezier(0.645,  0.045, 0.355, 1.000)',
      transform: open ? 'translateX(300px)' : 'translateX(0)',
      overflowX: 'hidden',
      overflowY: 'auto',
      [breakpoints[1]]: {
        transform: 'translateX(0)',
      },
    },
    link: {
      cursor: 'pointer',
      textDecoration: 'none',
      opacity: 1,
      transition: 'opacity .15s ease-in',
      ':hover': {
        opacity: 0.5,
        transition: 'opacity .15s ease-in',
      },
      ':focus': {
        opacity: 0.5,
        transition: 'opacity .15s ease-in',
      },
      ':active': {
        opacity: 0.5,
        transition: 'opacity .15s ease-out',
      },
    },
  };

  return (
    <Wrapper css={styles.wrapper}>
      <Box
        bgOverlay
        css={styles.dismiss}
        onClick={onDismiss}
      />
      <Flex
        p2
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        {...props}
        bgBar
        width={300}
        css={styles.bar}
      >
        <Box width={1} onClick={onDismiss}>
          <Link prefetch href="/">
            <Text bold white fontSize={4} css={styles.link}>
              Watto&apos;s Space Emporium
            </Text>
          </Link>
        </Box>
        <Text my2 bold white caps fontSize={4} width={1} is="span">
          Inventory
        </Text>
        <List>
          {products.map((product, i) => (
            <ListItem key={i} onClick={onDismiss}>
              <Link prefetch href={`/product?s=${product.slug}`}>
                <Text gray is="a" css={styles.link}>
                  {product.name}
                </Text>
              </Link>
            </ListItem>
          ))}
        </List>
        <Text left mb2 bold white caps fontSize={4} width={1} is="span">
          About Us
        </Text>
        <Text mb2 bold white caps fontSize={4} width={1} is="span">
          Another Link
        </Text>
        <Footer
          iconNames={[
            'googleplus',
            'twitter',
            'linkedin',
            'github',
            'stackoverflow',
          ]}
        />
      </Flex>
      <Content css={styles.content}>
        {children}
      </Content>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  products: PropTypes.array,
  onDismiss: PropTypes.func,
};

Sidebar.defaultProps = {
  open: false,
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
