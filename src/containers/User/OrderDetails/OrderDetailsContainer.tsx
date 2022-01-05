import React, { ReactElement } from "react";

import { OrderTable } from "components/User/OrderTable/OrderTable";
import { ISplitCardProps } from "components/User/SplitCard/ISplitCard";
import { SplitCard } from "components/User/SplitCard/SplitCard";
import IconDetailOrder from "styled/icons/Order/OrderNumber";
import IconDetailTelephone from "styled/icons/Order/Telephone";
import IconDetailUser from "styled/icons/Order/User";

import { Container } from "@chakra-ui/layout";

import { IOrderDetailsContainerProps } from "./IOrderDetailsContainer";

/**
 * The order details container.
 * @param {IOrderDetailsContainerProps} props the component props.
 * @returns { ReactElement } The order details container.
 */
export const OrderDetailsContainer = (props: IOrderDetailsContainerProps): ReactElement => {
  const { orderId } = props;

  const splitCardObject: ISplitCardProps = {
    title1: "Nombre cliente: ",
    subtitle1: "Andrea",
    title2: "Teléfono:  ",
    subtitle2: "53455433",
    title3: "Número de orden: ",
    subtitle3: orderId ? orderId : "",
    icon1: <IconDetailUser boxSize={[8, 12]} />,
    icon2: <IconDetailTelephone boxSize={[8, 12]} />,
    icon3: <IconDetailOrder boxSize={[8, 12]} />,
  };

  return (
    <div>
      <Container
        centerContent={false}
        maxW="container.lg"
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
      >
        <SplitCard {...splitCardObject} />
        <OrderTable />
      </Container>
    </div>
  );
};
