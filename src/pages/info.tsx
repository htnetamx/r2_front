import { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { InfoContainer } from "containers/User/Info/InfoContainer";

/**
 * The page with the details of any given product.
 * @returns {ReactElement} The product details page.
 */
const Info = (): ReactElement => {
  return <InfoContainer />;
};

Info.Layout = LayoutContainer;

export default Info;
