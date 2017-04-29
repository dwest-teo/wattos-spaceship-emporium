import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { cxs } from 'axs';
import { globalStyles } from '../components/base';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = cxs.getCss();
    cxs.reset();

    return { ...page, style };
  }

  render() {
    return (
      <html>
        <Head>
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
