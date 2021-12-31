import { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { InfoContainer } from "containers/User/Info/InfoContainer";

/**
 * The page with the user's info
 * @returns {ReactElement} The InfoContainer
 */
const Info = (): ReactElement => {
  return <InfoContainer />;
};

Info.Layout = LayoutContainer;

export default Info;
