const toSlug = str => str.toLowerCase().replace(/\s+/g, '-').replace(/--+/g, '-');

export default toSlug;
