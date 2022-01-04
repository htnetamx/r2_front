import React, { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { OrderContainer } from "containers/User/Orders/OrdersContainer";
import { useRouter } from "next/router";

/**
 * The page with the orders data
 * @returns {ReactElement} The order's data page.
 */
const Orders = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <OrderContainer orderId={slug as string} />;
};

Orders.Layout = LayoutContainer;

export default Orders;
