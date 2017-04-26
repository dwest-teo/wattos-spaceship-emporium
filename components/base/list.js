import React from 'react';
import { Box } from 'axs';

export const List = props => (
  <Box pl0 mb3 is="ul" css={{ listStyleType: 'none' }} {...props} />
);

List.displayName = 'List';

export const ListItem = props => (
  <Box pl2 mb1 is="li" {...props} />
);

ListItem.displayName = 'ListItem';
