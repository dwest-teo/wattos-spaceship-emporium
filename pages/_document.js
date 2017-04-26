import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import cxs from 'cxs/monolithic';
import { attachGlobalStyles } from '../components/base';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();

    attachGlobalStyles();
    const style = cxs.getCss();
    cxs.reset();

    return { ...page, style };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
