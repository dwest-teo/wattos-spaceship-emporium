import palx from 'palx';
import { config } from './index';

const toArr = obj => Object.keys(obj).map(key => ({ key, value: obj[key] }));

const flatten = (a = [], b) => {
  if (Array.isArray(b)) {
    return [ ...a, ...b ].reduce(flatten, []);
  }

  return [ ...a, b ];
};

const toObj = (a = {}, b) => {
  a[b.key] = b.value;

  return a;
};

const mapColors = ({ key, value }) => {
  if (Array.isArray(value)) {
    const scale = value.map((val, i) => ({
      key: String(key) + i,
      value: val,
    }));

    return [
      { key, value: scale[5].value },
      ...scale,
    ];
  }

  return { key, value };
};

const colorObj = colors => toArr(colors).map(mapColors).reduce(flatten, []).reduce(toObj, {});

const blue = '#4D7FE2';
const palette = colorObj(palx(blue));

const settings = () => {
  config.set({
    breakpoints: [
      '(min-width:40em)',
      '(min-width:52em)',
      '(min-width:64em)',
    ].map(w => `@media screen and ${w}`),
    scale: [
      0, 6, 12, 24, 48,
    ],
    typeScale: [
      72, 48, 36, 24, 18, 16, 12,
    ],
    colors: palette,
    radius: 3,
    bold: 700,
  });
};

export default settings;
