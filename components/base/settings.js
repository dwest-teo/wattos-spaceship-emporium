import { config } from './index';

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
    radius: 3,
    bold: 700,
    colors: {
      white: '#fff',
      red: '#FF5C5C',
      black: '#0F0F0F',
      black1: '#1B1B1B',
      black2: '#282828',
      black3: '#353535',
      gray: '#6F6F6F',
      gray1: '#9F9F9F',
      gray2: '#CFCFCF',
      gray3: '#E7E7E7',
      blue: '#4D7FE2',
      blue1: '#638FE6',
      blue2: '#799FE9',
      blue3: '#8FAEED',
      navy: '#212A49',
      navy1: '#29345B',
      navy2: '#313E6C',
      navy3: '#39487E',
      sky: '#A9C7EC',
      sky1: '#BED5F1',
      sky2: '#D3E2F5',
      sky3: '#E8F0Fa',
    },
  });
};

export default settings;
