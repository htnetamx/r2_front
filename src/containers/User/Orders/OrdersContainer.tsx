import React, { ReactElement } from "react";

import { ReturnToHome } from "components/User/ReturnToHome/ReturnToHome";

import { Container, Text } from "@chakra-ui/layout";

/**
 * The User's Orders Container
 * @returns {ReactElement} The User's Orders Container
 */
export const OrdersContainer = (): ReactElement => {
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
    </Container>
  );
};
