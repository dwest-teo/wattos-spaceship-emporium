import applySettings from './settings';

export {
  Box,
  Text,
  config,
  cxs,
} from 'axs';

// apply custom config values
applySettings();

// utility/fns
export { default as attachGlobalStyles } from './global-styles';

// style objects
export { default as resetStyles } from './reset-styles';

// components
export { default as Container } from './container';
export { default as Flex } from './flex';
export { default as Image } from './image';
