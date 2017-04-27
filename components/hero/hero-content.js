import React from 'react';
import { Flex, Text } from '../base';

const HeroContent = () => (
  <Flex
    p={[ 2, 3, 4, 4 ]}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    css={{ height: '100%' }}
  >
    <Text
      center
      gray2
      mt2
      mb4
      is="h1"
      fontSize={1}
    >
      Watto&apos;s Space Emporium
    </Text>
    <Text
      center
      mb2
      gray
      fontSize={3}
    >
      The final frontier...of savings!
    </Text>
  </Flex>
);

export default HeroContent;
