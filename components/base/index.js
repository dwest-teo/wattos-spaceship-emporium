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
export { default as injectGlobalStyles } from './global-styles';
export { default as reset } from './reset';

// components
export { default as Container } from './container';
export { default as Flex } from './flex';
export { default as Image } from './image';
export { default as DefinitionList } from './definition-list';
export { default as Button } from './button';
export { List, ListItem } from './list';
