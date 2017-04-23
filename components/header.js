import React from 'react';
import { Link } from '../routes';
import { Flex, Text } from './base';

const Header = () => (
  <Flex
    p2
    justifyContent="flex-start"
    alignItems="center"
    backgroundColor="gray8"
    color="gray1"
  >
    <Link route="index">
      <Text
        bold
        is="span"
        fontSize={2}
      >
        Wattos Space Emporium
      </Text>
    </Link>
  </Flex>
);

export default Header;
