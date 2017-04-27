import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../base';
import Starfield from '../hero/starfield';

const Wrapper = ({ children, css }) => (
  <Container p0 width={1} css={css}>
    <Starfield>
      {children}
    </Starfield>
  </Container>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  css: PropTypes.object,
};

Wrapper.displayName = 'Wrapper';

export default Wrapper;
