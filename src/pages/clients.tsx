import { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { ClientsContainer } from "containers/User/Clients/ClientsContainer";

/**
 * The page with the clients of the user.
 * @returns {ReactElement} The clients user page.
 */
const Clients = (): ReactElement => {
  return <ClientsContainer />;
};

Clients.Layout = LayoutContainer;

export default Clients;
