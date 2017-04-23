const fetch = require('isomorphic-fetch');

const fetchProducts = async () => {
  const res = await fetch('https://demo7475333.mockable.io/spaceships');
  const json = await res.json();

  if (!json || !json.products) {
    throw new Error('Failed to fetch products');
  }

  return json.products;
};

module.exports = fetchProducts;
