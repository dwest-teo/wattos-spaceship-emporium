import React from 'react';
import PropTypes from 'prop-types';
import { Flex, config } from '../base';

const { breakpoints } = config.get();
const styles = {
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
};

const Bar = ({ open, children, ...props }) => (
  <Flex
    p2
    bgDark
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width={300}
    css={{
      ...styles,
      transform: open ? 'translateX(300px)' : null,
    }}
    {...props}
  >
    {children}
  </Flex>
);

Bar.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};

Bar.defaultProps = {
  open: false,
};

Bar.displayName = 'Bar';

export default Bar;
