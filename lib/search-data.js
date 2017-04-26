const fetch = require('isomorphic-fetch');

const baseUrl = 'https://starwars.wikia.com/api/v1';

const searchString = (name) => {
  const params = '&abstract=500&width=200&height=200';
  const str = name.replace('Twin Ion Engine', 'TIE').replace(' ', '+');

  return `${str}${params}`;
};

const searchData = async (name) => {
  const res = await fetch(`${baseUrl}/Search/List?query=${searchString(name)}`);
  const json = await res.json();

  if (!json || !json.items) {
    throw new Error('Failed to fetch supplemental data');
  }

  return { ...json.items };
};

module.exports = searchData;
