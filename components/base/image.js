import React from 'react';
import { Box } from 'axs';

const imageCss = { maxWidth: '100%', borderStyle: 'none' };

const Image = props => (
  <Box
    is="img"
    {...props}
    css={imageCss}
  />
);

Image.displayName = 'Image';

export default Image;
