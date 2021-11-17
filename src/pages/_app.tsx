import React, { ReactElement } from "react";

import { Provider } from "react-redux";

import { MainLayout } from "layouts/MainLayout/MainLayout";
import { AppProps } from "next/app";
import { store } from "state/store";

import { ChakraProvider } from "@chakra-ui/react";

/**
 * Next.js App
 * @param {NextComponentType} Component The component to render
 * @param {any} pageProps The props passed to the page
 * @returns {ReactElement} The rendered component
 */
const NetaApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </Provider>
  );
};

export default NetaApp;
