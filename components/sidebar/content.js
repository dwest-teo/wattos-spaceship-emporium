import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../base';

const Content = ({ children, css }) => (
  <Container p0 width={1} css={css}>
    {children}
  </Container>
);

Content.propTypes = {
  children: PropTypes.node,
  css: PropTypes.object,
};

Content.displayName = 'Content';

export default Content;
