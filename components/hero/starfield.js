import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import { Box, config } from '../base';
import defParams from './default-params';

const Starfield = ({ children, params = defParams, ...props }) => (
  <Box css={{ position: 'relative' }}>
    <Box>
      {children}
    </Box>
    <Particles
      height="300px"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: config.colors.dark,
      }}
      params={params}
      {...props}
    />
  </Box>
);

Starfield.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
};

export default Starfield;
