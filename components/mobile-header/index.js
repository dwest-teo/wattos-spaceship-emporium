import React from 'react';
import PropTypes from 'prop-types';
import { Burger } from 'reline';
import { Box, Flex, config } from '../base';
import LogoLink from '../sidebar/logo-link';

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
    <Box white flexAuto center mr={24} css={{ cursor: 'pointer' }}>
      <LogoLink css={{ textDecoration: 'none' }} />
    </Box>
  </Flex>
);

MobileHeader.propTypes = {
  openSidebar: PropTypes.func,
};

export default MobileHeader;
