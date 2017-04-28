const titleCase = ({ str, whitelist = [] }) => {
  if (whitelist.indexOf(str) !== -1) {
    return str;
  }

  return str.toLowerCase().split(' ').map(part => (
    `${part.charAt(0).toUpperCase()}${part.substring(1)}`
  )).join(' ');
};

export default titleCase;
