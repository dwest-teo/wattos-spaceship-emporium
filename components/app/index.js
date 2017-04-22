import React from 'react';
import PropTypes from 'prop-types';
import StyleProvider from './style-provider';
import PageRoot from './page-root';

const App = ({ children }) => (
  <StyleProvider>
    <PageRoot>
      {children}
      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
          line-height: 1.15;
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

        img {
          max-width: 100%;
          border-style: none;
        }
      `}</style>
    </PageRoot>
  </StyleProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
