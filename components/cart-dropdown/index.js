import React from 'react';
import PropTypes from 'prop-types';
import { Text, Box, Image, List, ListItem } from '../base';

const CartDropdown = (props) => {
  const { cartProducts, open, toggleDropdown, removeFromCart } = props;

  return (
    <Box>
      <Text
        yellow
        is="button"
        onClick={() => toggleDropdown()}
      >
        {cartProducts.length > 0 && cartProducts.length}
      </Text>
      {open && (
        <List m0 center>
          {cartProducts.map(product => (
            <ListItem
              p3
              borderTop
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
              <Box pl2 flexAuto>
                <Text fontSize={5}>{product.name}</Text>
                <Text gray fontSize={5}>{product.price}</Text>
              </Box>
              <Text
                blue
                fontSize={6}
                onClick={() => removeFromCart(product.slug)}
              >
                Remove
              </Text>
            </ListItem>
          ))}
          {cartProducts.length === 0 && (
            <ListItem center p3>
              <Text fontSize={5}>Nothing here yet!</Text>
            </ListItem>
          )}
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
  toggleDropdown: PropTypes.func,
  removeFromCart: PropTypes.func,
};

CartDropdown.displayName = 'CartDropdown';

export default CartDropdown;
