import React from 'react';
import PropTypes from 'prop-types';
import toSlug from '../../lib/to-slug';
import { Link } from '../../routes';
import { Box, Flex, Text, config } from '../base';
import SvgIcon from '../svg-icons';

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
          <Link route="index">
            <Text bold white fontSize={4} css={styles.link}>
              Watto&apos;s Space Emporium
            </Text>
          </Link>
        </Box>
        <Text my2 bold white caps fontSize={4} width={1} is="span">
          Inventory
        </Text>
        <Box pl0 mb3 is="ul" css={{ listStyleType: 'none' }}>
          {products.map((product, i) => (
            <Box pl2 mb1 key={i} is="li" onClick={onDismiss}>
              <Link
                prefetch
                route="product"
                params={{ slug: toSlug(product.name) }}
              >
                <Text gray is="a" css={styles.link}>
                  {product.name}
                </Text>
              </Link>
            </Box>
          ))}
        </Box>
        <Text left mb2 bold white caps fontSize={4} width={1} is="span">
          About Us
        </Text>
        <Text mb2 bold white caps fontSize={4} width={1} is="span">
          Another Link
        </Text>
        <Box center gray width={1} css={{ marginTop: 'auto' }}>
          <Text bold>Watto&apos;s Space Emporium</Text>
          <Text>Mos Eisley, Tattooine</Text>
          <Text>&copy; A Long Time Ago</Text>
          <Flex
            mt3
            flexDirection="row"
            flexWrap="no wrap"
            justifyContent="space-around"
            alignItems="center"
          >
            <SvgIcon name="googleplus" />
            <SvgIcon name="twitter" />
            <SvgIcon name="linkedin" />
            <SvgIcon name="github" />
            <SvgIcon name="stackoverflow" />
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
