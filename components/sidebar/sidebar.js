import React from 'react';
import { Link } from '../../routes';
import { Flex, Text, getBreakpoint } from '../base';

const Sidebar = () => (
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
      maxWidth: 280,
      display: 'none',
      [getBreakpoint(1)]: {
        maxWidth: '320px !important',
        display: 'flex !important',
      },
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

export default Sidebar;
