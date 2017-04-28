import React from 'react';
import PropTypes from 'prop-types';
import { withAxs } from 'axs';
import paths from './paths';

const RawSvg = ({ name, size = 24, fill = 'currentcolor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill={fill}
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    {...props}
  >
    <path fillRule="nonzero" d={paths[name]} />
  </svg>
);

RawSvg.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
};

const SvgIcon = withAxs(RawSvg);

SvgIcon.displayName = 'SvgIcon';

export default SvgIcon;
