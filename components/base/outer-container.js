import React from 'react';
import { Box } from 'axs';

const OuterContainer = (props) => {
  return (
    <Box
      p2
      width={1}
      {...props}
    />
  );
};

OuterContainer.displayName = 'OuterContainer';

export default OuterContainer;
