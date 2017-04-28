import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, config } from '../base';
import SvgIcon from '../svg-icons';
import LogoLink from '../sidebar/logo-link';

const { gray } = config.colors;
const { breakpoints } = config.get();
const styles = {
  container: {
    [breakpoints[1]]: {
      display: 'none',
    },
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

const MobileHeader = ({ openSidebar }) => (
  <Flex
    p2
    bgDark
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="center"
    css={styles.container}
  >
    <SvgIcon
      gray
      name="burger"
      stroke={gray}
      strokeWidth={1}
      size={24}
      style={styles.link}
      onClick={() => openSidebar(true)}
    />
    <Box white flexAuto center mr={24} css={styles.link}>
      <LogoLink css={styles.link} />
    </Box>
  </Flex>
);

MobileHeader.propTypes = {
  openSidebar: PropTypes.func,
};

MobileHeader.displayName = 'MobileHeader';

export default MobileHeader;
