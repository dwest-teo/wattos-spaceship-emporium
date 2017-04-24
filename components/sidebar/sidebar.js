import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../routes';
import { Flex, Text } from '../base';
// import { Flex, Text, getBreakpoint } from '../base';

const Sidebar = ({ isLarge }) => (
  <Flex
    blue
    bgBlack
    p2
    flexAuto
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width={[ 280, 320, 320, 320 ]}
    css={{
      maxWidth: isLarge ? 320 : 280,
      position: 'fixed',
      height: '100vh',
      top: 0,
      left: isLarge ? 0 : -280,
      // [getBreakpoint(2)]: {
      //   maxWidth: 320,
      //   left: 0,
      // },
    }}
  >
    <Link route="index">
      <Text
        bold
        is="span"
        fontSize={3}
      >
        Wattos Space Emporium
      </Text>
    </Link>
  </Flex>
);

Sidebar.propTypes = {
  isLarge: PropTypes.bool,
};

export default Sidebar;
