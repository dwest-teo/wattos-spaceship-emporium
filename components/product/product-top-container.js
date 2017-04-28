import React from 'react';
import PropTypes from 'prop-types';
import { Flex, config } from '../../components/base';

const { breakpoints } = config.get();

const styles = {
  flexDirection: 'column',
  [breakpoints[0]]: {
    flexDirection: 'row !important',
  },
  [breakpoints[1]]: {
    flexDirection: 'column !important',
  },
  [breakpoints[2]]: {
    flexDirection: 'row !important',
  },
};

const ProductTopContainer = ({ children, ...props }) => (
  <Flex width={1} css={styles} {...props}>
    {children}
  </Flex>
);

ProductTopContainer.propTypes = {
  children: PropTypes.node,
};

ProductTopContainer.displayName = 'ProductTopContainer';

export default ProductTopContainer;
