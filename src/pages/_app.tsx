import { ReactElement } from "react";

import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

/**
 * Next.js App
 * @param {NextComponentType} Component The component to render
 * @param {any} pageProps The props passed to the page
 * @returns {ReactElement} The rendered component
 */
const NetaApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default NetaApp;
