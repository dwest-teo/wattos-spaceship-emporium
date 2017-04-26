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
  });

  config.colors.dark = '#0f0f0f';
  config.colors.overlay = 'rgba(0, 0, 0, 0.65)';
};

export default settings;
