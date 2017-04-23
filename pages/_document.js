import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { cxs, globalStyles } from '../components/base';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = cxs.getCss();
    return { ...page, style };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Add a Title!!!</title>
          <style>{globalStyles}</style>
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
