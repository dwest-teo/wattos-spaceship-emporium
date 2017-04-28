const truncate = (str, max) => str.length > max ? `${str.substr(0, max)}...` : str;

export default truncate;
