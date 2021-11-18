import React, { ReactElement } from "react";

import { Container, Flex } from "@chakra-ui/layout";

/**
 * The home container.
 * @returns {ReactElement} The home container.
 */
export const HomeContainer = (): ReactElement => {
  return (
    <Container>
      <Flex pt={10}>Home Container</Flex>
    </Container>
  );
};
