import React from 'react';
import PropTypes from 'prop-types';
import { Burger } from 'reline';
import { Link } from '../../routes';
import { Box, Flex, Text } from '../base';

const MobileHeader = ({ openSidebar }) => (
  <Flex
    p2
    bgBlack
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="center"
  >
    <Burger
      stroke="#9F9F9F"
      strokeWidth={2}
      size={24}
      onClick={() => openSidebar(true)}
    />
    <Box flexAuto center>
      <Link route="index">
        <Text bold blue fontSize={4}>
          Wattos Space Emporium
        </Text>
      </Link>
    </Box>
  </Flex>
);

MobileHeader.propTypes = {
  docked: PropTypes.bool,
  open: PropTypes.bool,
  openSidebar: PropTypes.func,
};

export default MobileHeader;
