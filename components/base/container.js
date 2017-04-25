import React from 'react';
import { Box } from 'axs';

const Container = props => (
  <Box
    p2
    width={1}
    {...props}
  />
);

Container.displayName = 'Container';

export default Container;
