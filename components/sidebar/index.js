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
import LogoLink from './logo-link';
import Footer from './footer';

const { breakpoints } = config.get();

const Sidebar = ({ open, onDismiss, products, ...props }) => {
  const styles = {
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
      left: 0,
      zIndex: 30,
      transform: open ? null : 'translateX(-100%)',
      transition: 'transform .3s cubic-bezier(0.645,  0.045, 0.355, 1.000)',
      overflowX: 'hidden',
      overflowY: 'auto',
      [breakpoints[1]]: {
        transform: null,
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
    <Box>
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
        bgDark
        width={300}
        css={styles.bar}
      >
        <Box width={1} onClick={onDismiss}>
          <Link prefetch href="/">
            <LogoLink css={styles.link} />
          </Link>
        </Box>
        <Text mt4 mb2 bold white caps fontSize={4} width={1} is="span">
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
    </Box>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  products: PropTypes.array,
  onDismiss: PropTypes.func,
};

Sidebar.defaultProps = {
  open: false,
};

export default Sidebar;
