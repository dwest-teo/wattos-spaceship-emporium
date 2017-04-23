import React from 'react';
import { Flex, Text } from './base';

const Header = () => (
  <Flex
    p2
    justifyContent="flex-start"
    alignItems="center"
    backgroundColor="gray8"
    color="gray1"
  >
    <Text
      bold
      is="span"
      fontSize={2}
    >
      Wattos Space Emporium
    </Text>
  </Flex>
);

export default Header;
