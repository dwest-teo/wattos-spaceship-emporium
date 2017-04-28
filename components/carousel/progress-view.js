import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledView, StyledAnimatedView } from './hocs';

const styles = {
  userSelect: 'none',
};

const animations = [
  {
    prop: 'opacity',
    stops: [
      [ -200, 0 ],
      [ 0, 1 ],
      [ 200, 0 ],
    ],
  }, {
    prop: 'translateY',
    stops: [
      [ -200, 50 ],
      [ 0, 0 ],
      [ 200, 50 ],
    ],
  },
];

class ProgressView extends Component {
  render() {
    return (
      <StyledView flexAuto css={styles} {...this.props}>
        <StyledAnimatedView animations={animations}>
          {this.props.children}
        </StyledAnimatedView>
      </StyledView>
    );
  }
}

ProgressView.propTypes = {
  children: PropTypes.node,
};

ProgressView.displayName = 'ProgressView';

export default ProgressView;
