const injectGlobalStyles = (engine) => {
  engine('html', {
    boxSizing: 'border-box',
    fontFamily: '-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif',
    lineHeight: 1.5,
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
  });

  engine('*', {
    boxSizing: 'inherit',
    ':before': {
      boxSizing: 'inherit',
    },
    ':after': {
      boxSizing: 'inherit',
    },
  });

  engine('body', {
    margin: 0,
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  });
};

export default injectGlobalStyles;
