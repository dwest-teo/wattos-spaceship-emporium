import React from 'react';
import { Link } from '../../routes';
import { Flex, Text } from '../base';

const Sidebar = () => (
  <Flex
    blue
    bgBlack
    p2
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width={0.3}
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
