import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'axs';

const styles = {
  progressContainer: {
    height: 3,
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    transformOrigin: 'left center',
    position: 'absolute',
  },
};

const ProgressBar = ({ progress }) => (
  <Box bgGray3 width={1} css={styles.progressContainer}>
    <Box
      bgGray9
      width={1}
      css={{
        ...styles.progressBar,
        transform: `scaleX(${Math.max(0, Math.min(1, progress))})`,
      }}
    />
  </Box>
);

ProgressBar.propTypes = {
  progress: PropTypes.number,
};

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
