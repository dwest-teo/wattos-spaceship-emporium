import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../routes';
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
const styles = {
  dismiss: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 20,
    display: 'none',
    [breakpoints[1]]: {
      display: 'none !important',
      visibility: 'hidden !important',
      pointerEvents: 'none !important',
    },
  },
  bar: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: -300,
    zIndex: 30,
    transform: 'none',
    transition: 'transform .3s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    overflowX: 'hidden',
    overflowY: 'auto',
    [breakpoints[1]]: {
      transform: 'translateX(300px) !important',
      transition: 'none !important',
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

const Sidebar = ({ open, onDismiss, products, ...props }) => (
  <Box>
    <Box
      bgOverlay
      css={{
        ...styles.dismiss,
        display: open ? null : 'none',
      }}
      onClick={onDismiss}
    />
    <Flex
      p2
      bgDark
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width={300}
      css={{
        ...styles.bar,
        transform: open ? 'translateX(300px)' : null,
      }}
      {...props}
    >
      <Box width={1} onClick={onDismiss}>
        <LogoLink css={styles.link} />
      </Box>
      <Text mt4 mb2 bold white caps fontSize={4} width={1} is="span">
        Inventory
      </Text>
      <List>
        {products.map((product, i) => (
          <ListItem key={i} onClick={onDismiss}>
            <Link prefetch route="product" params={{ slug: product.slug }}>
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

Sidebar.propTypes = {
  open: PropTypes.bool,
  products: PropTypes.array,
  onDismiss: PropTypes.func,
};

Sidebar.defaultProps = {
  open: false,
};

export default Sidebar;
