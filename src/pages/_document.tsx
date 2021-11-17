import Document, { Head, Html, Main, NextScript } from "next/document";
import theme from "utils/theme";

import { ColorModeScript } from "@chakra-ui/react";

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
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
