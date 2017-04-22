import React from 'react';
import { Box } from 'axs';

const RootContainer = (props) => {
  return (
    <Box
      width={1}
      {...props}
    />
  );
};

RootContainer.displayName = 'RootContainer';

export default RootContainer;
