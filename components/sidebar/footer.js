import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../svg-icons';
import { Box, Text, Flex } from '../base';

const Footer = ({ iconNames }) => (
  <Box center gray width={1} css={{ marginTop: 'auto' }}>
    <Text bold>Watto&apos;s Space Emporium</Text>
    <Text>Mos Espa, Tatooine</Text>
    <Text>&copy; A Long Time Ago</Text>
    <Flex
      mt3
      flexDirection="row"
      flexWrap="no wrap"
      justifyContent="space-around"
      alignItems="center"
    >
      {iconNames.map((name, i) => (
        <SvgIcon key={i} name={name} />
      ))}
    </Flex>
  </Box>
);

Footer.propTypes = {
  iconNames: PropTypes.arrayOf(PropTypes.string),
};

Footer.displayName = 'Footer';

export default Footer;
