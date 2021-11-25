import { FC, ReactElement } from "react";

import config from "config/seo.json";
import { DefaultSeo } from "next-seo";
import NextHead from "next/head";

/**
 * The head metadata component
 * @returns {ReactElement} the metadata component.
 */
export const Head: FC = (): ReactElement => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </NextHead>
    </>
  );
};
