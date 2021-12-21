import React, { FC, ReactElement } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Head } from "components/Layout/Head";
import { AppProps } from "next/app";
import { persistor, store } from "state/store";
import theme from "utils/theme";

import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-700.css";

/**
 *  No layout component
 * @param {AppProps} props The props
 * @returns {ReactElement} The no layout component
 */
const Noop: FC = ({ children }) => <>{children}</>;

/**
 * Next.js App
 * @param {NextComponentType} Component The component to render
 * @param {any} pageProps The props passed to the page
 * @returns {ReactElement} The rendered component
 */
const NetaApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const Layout = (Component as any).Layout || Noop;
  return (
    <>
      <Head />
      <Provider store={store}>
        <PersistGate loading={null /*TODO: add loader */} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <Layout pageProps={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default NetaApp;
