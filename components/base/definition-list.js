import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'axs';

const DefinitionList = ({ entry, ...props }) => (
  <Box is="dl" {...props}>
    <Box bold is="dt" display="inline-block" fontSize={6}>
      {entry.label}
    </Box>
    <Box ml1 gray7 is="dd" display="inline-block" fontSize={6}>
      {entry.value}
    </Box>
  </Box>
);

DefinitionList.propTypes = {
  entry: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

DefinitionList.displayName = 'DefinitionList';

export default DefinitionList;
