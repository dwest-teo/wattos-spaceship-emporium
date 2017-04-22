import React from 'react';
import { Box } from 'axs';

const Flex = (props) => {
  return (
    <Box
      display="flex"
      {...props}
    />
  );
};

Flex.displayName = 'Flex';

export default Flex;
