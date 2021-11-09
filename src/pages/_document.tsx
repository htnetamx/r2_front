import Document, { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "../utils/AppConfig";

/**
 * Document class
 * @class
 */
class MyDocument extends Document {
  /**
   * Render method
   * @method
   * @returns {JSX.Element}
   **/
  render(): JSX.Element {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
