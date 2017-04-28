import React from 'react';
import PropTypes from 'prop-types';
import { Box, config } from '../base';

const { breakpoints } = config.get();
const styles = {
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
};

const Overlay = ({ open, onDismiss }) => (
  <Box
    bgOverlay
    css={{
      ...styles,
      display: open ? null : 'none',
    }}
    onClick={onDismiss}
  />
);

Overlay.propTypes = {
  open: PropTypes.bool,
  onDismiss: PropTypes.func,
};

Overlay.defaultProps = {
  open: false,
};

Overlay.displayName = 'Overlay';

export default Overlay;
