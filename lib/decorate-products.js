import toArr from './obj-to-array';
import toSlug from './to-slug';
import {
  data,
  labelWhitelist,
  labelReplacements,
} from './product-supplement-data';

const titleCase = (str) => {
  if (labelWhitelist.indexOf(str) !== -1) {
    return str;
  }

  const split = str.toLowerCase().split(' ');
  for (let i = 0; i < split.length; i += 1) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
  }

  return split.join(' ');
};

const buildSpecs = (techspecs) => {
  const specsArr = toArr(techspecs);

  return specsArr.map(entry => ({
    ...entry,
    label: titleCase(labelReplacements.get(entry.label) || entry.label),
  }));
};

const decorateProducts = async products => products.map(p => ({
  ...p,
  slug: toSlug(p.name),
  techspecs: buildSpecs(p.techspecs),
  ...data[toSlug(p.name)],
}));

export default decorateProducts;
