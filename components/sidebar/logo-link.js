import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Flex, Text } from '../base';
import SvgIcon from '../svg-icons';

const LogoLink = ({ css }) => (
  <Link prefetch href="/">
    <Flex
      white
      justifyContent="center"
      alignItems="center"
    >
      <SvgIcon name="watto" />
      <Text ml1 fontSize={4} css={{ fontWeight: 300, ...css }}>
        Watto&apos;s Space Emporium
      </Text>
    </Flex>
  </Link>
);

LogoLink.propTypes = {
  css: PropTypes.object,
};

LogoLink.displayName = 'LogoLink';

export default LogoLink;
