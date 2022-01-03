import { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { InvoicesContainer } from "containers/User/Invoices/InvoicesContainer";

/**
 * The page with the user's orders
 * @returns {ReactElement} The OrdersContainer
 */
const Orders = (): ReactElement => {
  return <InvoicesContainer />;
};

Orders.Layout = LayoutContainer;

export default Orders;
