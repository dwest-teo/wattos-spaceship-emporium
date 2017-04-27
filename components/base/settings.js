import { config } from './index';

const settings = {
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
};

const customColors = {
  dark: '#0f0f0f',
  overlay: 'rgba(0, 0, 0, 0.25)',
};

const applySettings = () => {
  config.set(settings);
  config.colors.dark = customColors.dark;
  config.colors.overlay = customColors.overlay;
};

export default applySettings;
