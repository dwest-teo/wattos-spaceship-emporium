import toArr from './obj-to-array';
import toSlug from './to-slug';
import titleCase from './title-case';
import truncate from './truncate';
import {
  data,
  labelWhitelist,
  labelReplacements,
} from './product-supplement-data';

const buildSpecs = techspecs => toArr(techspecs).map(spec => ({
  label: titleCase({
    str: labelReplacements.get(spec.label) || spec.label,
    whitelist: labelWhitelist,
  }),
  value: truncate(spec.value, 45),
}));

const decorateProducts = async products => products.map(p => ({
  ...p,
  slug: toSlug(p.name),
  techspecs: buildSpecs(p.techspecs),
  ...data[toSlug(p.name)],
}));

export default decorateProducts;
