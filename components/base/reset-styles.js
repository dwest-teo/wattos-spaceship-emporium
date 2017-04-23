const formFieldResets = {
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  margin: 0,
  padding: 8,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: '1px solid',
  boxShadow: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
};

const resetStyles = {
  input: {
    ...formFieldResets,
  },
  select: {
    ...formFieldResets,
  },
  textarea: {
    ...formFieldResets,
  },
  button: {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0,
    padding: 8,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    textDecoration: 'none',
  },
};

export default resetStyles;
