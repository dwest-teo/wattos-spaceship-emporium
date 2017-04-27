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
      yellow
      mt2
      mb4
      is="h1"
      fontSize={[ 2, 2, 1, 1 ]}
      css={{ fontWeight: 300 }}
    >
      No Jedi mind tricks...
    </Text>
    <Text
      center
      mb3
      gray
      fontSize={[ 4, 4, 3, 3 ]}
    >
      Just great deals on preowned spacecraft!
    </Text>
  </Flex>
);

export default HeroContent;
