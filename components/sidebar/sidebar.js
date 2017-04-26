import React from 'react';
import PropTypes from 'prop-types';
import toSlug from '../../lib/to-slug';
import { Link } from '../../routes';
import { Box, Flex, Text, config } from '../base';

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
      height: '100vh',
      transform: open ? null : 'translateX(-100%)',
      transition: 'transform .3s cubic-bezier(0.645,  0.045, 0.355, 1.000)',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
    link: {
      cursor: 'pointer',
      textDecoration: 'none',
      opacity: 0.7,
      transition: 'opacity .2s ease-in',
      ':hover': {
        opacity: 1,
      },
      ':focus': {
        opacity: 1,
      },
      ':active': {
        opacity: 1,
      },
    },
  };

  return (
    <Box>
      <Box bgOverlay css={styles.dismiss} onClick={onDismiss} />
      <Flex
        {...props}
        bgDark
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        width={300}
        css={styles.bar}
      >
        <Box p2>
          <Box onClick={onDismiss}>
            <Link route="index">
              <Text bold blue fontSize={3}>
                Wattos Space Emporium
              </Text>
            </Link>
          </Box>
          <Flex
            my2
            flexDirection="column"
            justifyContent="space-around"
          >
            {products.map((product, i) => (
              <Box mb2 key={i} onClick={onDismiss}>
                <Link
                  route="product"
                  params={{ slug: toSlug(product.name) }}
                >
                  <Text
                    white
                    is="a"
                    css={styles.link}
                  >
                    {product.name}
                  </Text>
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
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
