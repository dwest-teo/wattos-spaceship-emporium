import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../routes';
import { Box, Flex, Text } from '../base';

const Sidebar = ({ docked, open, onDismiss, ...props }) => {
  const styles = {
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 20,
      display: open ? null : 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
    },
    bar: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 30,
      height: '100vh',
      transform: docked || open ? null : 'translateX(-100%)',
      transition: 'transform .3s cubic-bezier(0.645,  0.045, 0.355, 1.000)',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
  };

  return (
    <Box>
      <Box css={styles.dismiss} onClick={onDismiss} />
      <Flex
        {...props}
        bgBlack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        width={300}
        css={styles.bar}
      >
        <Box p2>
          <Link route="index">
            <Text bold blue fontSize={3}>
              Wattos Space Emporium
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

Sidebar.propTypes = {
  docked: PropTypes.bool,
  open: PropTypes.bool,
  onDismiss: PropTypes.func,
};

Sidebar.defaultProps = {
  docked: false,
  open: false,
  onDismiss: () => {},
};

export default Sidebar;
