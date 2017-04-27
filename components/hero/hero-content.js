import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from '../base';

const HeroContent = ({ heading, subheading }) => (
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
      {heading}
    </Text>
    <Text
      center
      mb3
      gray
      fontSize={[ 4, 4, 3, 3 ]}
    >
      {subheading}
    </Text>
  </Flex>
);

HeroContent.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

HeroContent.displayName = 'HeroContent';

export default HeroContent;
