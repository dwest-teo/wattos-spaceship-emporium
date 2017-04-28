const linkStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
  opacity: 1,
  transition: 'opacity .15s ease-in',
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

export default linkStyle;
