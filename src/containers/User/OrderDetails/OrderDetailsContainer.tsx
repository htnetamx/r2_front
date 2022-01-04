import React, { ReactElement } from "react";

import { ISplitCardProps } from "components/User/SplitCard/ISplitCard";
import { SplitCard } from "components/User/SplitCard/SplitCard";

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
      </Container>
    </div>
  );
};
