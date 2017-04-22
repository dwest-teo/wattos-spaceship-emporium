import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { flush } from '../lib/styletron';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styletron = flush();
    const stylesheets = styletron ? styletron.getStylesheets() : [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Add a Title!!!</title>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              key={i}
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.media || ''}
            />
          ))}
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
