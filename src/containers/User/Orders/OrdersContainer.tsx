import React, { ReactElement } from "react";

import { ReturnToHome } from "components/User/ReturnToHome/ReturnToHome";
import { SplitCard } from "components/User/SplitCard/SplitCard";

import { Container, Text } from "@chakra-ui/layout";

import { IOrderContainerProps } from "./IOrdersContainer";

/**
 * The orders container.
 * @param {IOrderContainerProps} props the component props.
 * @returns { ReactElement } The order details container.
 */
export const OrderContainer = (props: IOrderContainerProps): ReactElement => {
  const {} = props;

  const splitCardObject = {
    title1: "Total vendido: ",
    subtitle1: "$3.420",
    title2: "Total órdenes:  ",
    subtitle2: "6",
    title3: "Total a pagar a Neta: ",
    subtitle3: "$3420",
  };

  return (
    <Container
      centerContent={false}
      maxW="container.lg"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
    >
      <ReturnToHome />
      <Text fontSize={{ base: "15px", md: "16px", lg: "18px" }} fontWeight="700">
        ¡Hola, Abarrotes Macías!
      </Text>
      <Text fontSize={{ base: "15px", md: "16px", lg: "16px" }} fontWeight="400">
        Este es el detalle de tus ordenes del día 16/12/2021.
      </Text>
      <SplitCard {...splitCardObject} />
      <Text fontSize={{ base: "15px", md: "16px", lg: "18px" }} fontWeight="700">
        Estatus del pedido
      </Text>
    </Container>
  );
};
