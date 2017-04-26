import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';

const SvgIcon = ({ name, size = 24, fill = 'currentcolor', ...props }) => (
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

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default SvgIcon;
