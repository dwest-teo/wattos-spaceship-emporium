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
      The final frontier...of savings!
    </Text>
    <Text
      center
      mb2
      gray
      fontSize={3}
    >
      Shop Watto&apos;s for the best deals on preowned spacecraft
    </Text>
  </Flex>
);

export default HeroContent;
