// import cxs from 'cxs/monolithic';

// const attachGlobalStyles = () => {
//   cxs('html', {
//     boxSizing: 'border-box',
//     fontFamily: '-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif',
//     lineHeight: 1.5,
//     '-ms-text-size-adjust': '100%',
//     '-webkit-text-size-adjust': '100%',
//   });

//   cxs('*', {
//     boxSizing: 'inherit',
//     ':before': {
//       boxSizing: 'inherit',
//     },
//     ':after': {
//       boxSizing: 'inherit',
//     },
//   });

//   cxs('body', {
//     margin: 0,
//     textRendering: 'optimizeLegibility',
//     '-webkit-font-smoothing': 'antialiased',
//     '-moz-osx-font-smoothing': 'grayscale',
//   });
// };

// export default attachGlobalStyles;

const globalStyles = `
  html {
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
    line-height: 1.5;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default globalStyles;
