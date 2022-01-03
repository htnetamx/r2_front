import React, { ReactElement } from "react";



import { Container } from "@chakra-ui/layout";

import { IOrderDetailsContainerProps } from "./IOrderDetailsContainer";

/**
 * The order details container.
 * @param {IOrderDetailsContainerProps} props the component props.
 * @returns { ReactElement } The order details container.
 */
export const OrderDetailsContainer = (props: IOrderDetailsContainerProps): ReactElement => {
  const { orderId } = props;

  return (
    <div>
      <Container
        centerContent={false}
        maxW="container.lg"
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
      ></Container>
    </div>
  );
};
