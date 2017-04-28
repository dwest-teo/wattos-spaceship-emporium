import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../routes';
import {
  Box,
  Text,
  List,
  ListItem,
} from '../base';
import Overlay from './overlay';
import Bar from './bar';
import LogoLink from './logo-link';
import Footer from './footer';
import linkStyle from './link-style';

const Sidebar = ({ open, onDismiss, products, ...props }) => (
  <Box>
    <Overlay open={open} onDismiss={onDismiss} />
    <Bar open={open} {...props}>
      <Box width={1} onClick={onDismiss}>
        <LogoLink css={linkStyle} />
      </Box>
      <Text mt4 mb2 bold white caps fontSize={4} width={1} is="span">
        Inventory
      </Text>
      <List>
        {products.map((product, i) => (
          <ListItem key={i} onClick={onDismiss}>
            <Link prefetch route="product" params={{ slug: product.slug }}>
              <Text gray is="a" css={linkStyle}>
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
    </Bar>
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
