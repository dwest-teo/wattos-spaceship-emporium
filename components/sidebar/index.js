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

const isActive = (activeLink, slug) => activeLink === slug;

const Sidebar = ({ open, onDismiss, productLinks, activeLink, ...props }) => (
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
        {productLinks.map((product, i) => (
          <ListItem key={i} onClick={onDismiss}>
            <Link prefetch route="product" params={{ slug: product.slug }}>
              <Text
                color={isActive(activeLink, product.slug) ? 'white' : 'gray'}
                is="a"
                css={linkStyle}
              >
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
  productLinks: PropTypes.array,
  activeLink: PropTypes.string,
  onDismiss: PropTypes.func,
};

Sidebar.defaultProps = {
  open: false,
};

export default Sidebar;
