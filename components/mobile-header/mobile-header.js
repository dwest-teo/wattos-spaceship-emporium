import React from 'react';
import PropTypes from 'prop-types';
import { Burger } from 'reline';
import { Link } from '../../routes';
import { Box, Flex, Text, config } from '../base';

const MobileHeader = ({ openSidebar }) => (
  <Flex
    p2
    bgDark
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="center"
  >
    <Burger
      stroke={config.colors.gray}
      strokeWidth={2}
      size={24}
      onClick={() => openSidebar(true)}
    />
    <Box flexAuto center mr={24} css={{ cursor: 'pointer' }}>
      <Link route="index">
        <Text bold white fontSize={4}>
          Watto&apos;s Space Emporium
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
