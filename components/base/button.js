import React from 'react';
import { Box, config } from 'axs';
import reset from './reset';

const style = {
  ...reset,
  color: config.colors.white,
  cursor: 'pointer',
  ':hover': {
    opacity: 0.5,
    transition: 'opacity .15s ease-in',
  },
  ':focus': {
    opacity: 0.5,
    transition: 'opacity .15s ease-in',
  },
  ':active': {
    opacity: 0.5,
    transition: 'opacity .15s ease-out',
  },
};

const Button = props => (
  <Box
    py2
    px3
    bold
    bgBlue
    is="button"
    css={style}
    display="block"
    {...props}
  />
);

Button.displayName = 'Button';

export default Button;
