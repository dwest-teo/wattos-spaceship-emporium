import React from 'react';
import PropTypes from 'prop-types';
import { Container, config } from '../base';
import MobileHeader from './mobile-header';

const { breakpoints } = config.get();
const styles = {
  marginLeft: 0,
  [breakpoints[1]]: {
    marginLeft: 300,
  },
};

const Content = ({ children, openSidebar }) => (
  <Container p0 width={null} css={styles}>
    <MobileHeader openSidebar={openSidebar} />
    {children}
  </Container>
);

Content.propTypes = {
  children: PropTypes.node,
  openSidebar: PropTypes.func,
};

Content.displayName = 'Content';

export default Content;
