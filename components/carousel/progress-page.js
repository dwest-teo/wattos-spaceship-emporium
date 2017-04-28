import React from 'react';
import PropTypes from 'prop-types';
import { StyledAnimatedView } from './hocs';

const styles = {
  height: 50,
  cursor: 'pointer',
};

const animations = [
  {
    prop: 'scale',
    stops: [
      [ -300, 0.75 ],
      [ 0, 1 ],
      [ 300, 0.75 ],
    ],
  }, {
    prop: 'opacity',
    stops: [
      [ -300, 0.5 ],
      [ 0, 1 ],
      [ 300, 0.5 ],
    ],
  },
];

const ProgressPage = ({ index, children, onClick }) => (
  <StyledAnimatedView
    mr2
    key={index}
    index={index}
    animations={animations}
    width={70}
    css={styles}
    onClick={(e) => {
      onClick(e);
    }}
  >
    {children}
  </StyledAnimatedView>
);

ProgressPage.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

ProgressPage.displayName = 'ProgressPage';

export default ProgressPage;
