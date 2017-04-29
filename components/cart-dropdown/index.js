import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box, Image, List, ListItem, config } from '../base';
import SvgIcon from '../svg-icons';

const { breakpoints } = config.get();
const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
  },
  bar: {
    cursor: 'pointer',
  },
  textContainer: {
    flexDirection: 'column',
    [breakpoints[0]]: {
      flexDirection: 'row',
    },
  },
  removeLink: {
    cursor: 'pointer',
  },
};

const CartDropdown = (props) => {
  const { cartProducts, open, isLarge, toggleDropdown, removeFromCart } = props;

  return (
    <Box
      css={{
        ...styles.container,
        display: cartProducts.length > 0 ? null : 'none',
      }}
    >
      <Flex
        py2
        px2
        bgDark
        justifyContent="flex-end"
        alignItems="center"
        css={styles.bar}
        onClick={() => toggleDropdown()}
      >
        <SvgIcon yellow name="cart" />
        <Text ml2 white>{cartProducts.length}</Text>
      </Flex>
      {open && (
        <List
          mb0
          center
          bgWhite
          css={{ marginLeft: isLarge ? 300 : 0 }}
        >
          {cartProducts.map(product => (
            <ListItem
              mb0
              py1
              px3
              borderBottom
              borderGray
              display="flex"
              alignItems="center"
              key={product.slug}
            >
              <Image
                width={70}
                height={70}
                borderRadius={100}
                src={`/static/images/thumbnails/${product.img}`}
              />
              <Flex
                px2
                flexAuto
                justifyContent="space-around"
                alignItems="center"
                css={styles.textContainer}
              >
                <Text fontSize={5}>{product.name}</Text>
                <Text gray7 fontSize={5}>{product.price}</Text>
              </Flex>
              <Text
                blue
                fontSize={6}
                css={styles.removeLink}
                onClick={() => removeFromCart(product.slug)}
              >
                Remove
              </Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

CartDropdown.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
  })),
  open: PropTypes.bool,
  isLarge: PropTypes.bool,
  toggleDropdown: PropTypes.func,
  removeFromCart: PropTypes.func,
};

CartDropdown.displayName = 'CartDropdown';

export default CartDropdown;
