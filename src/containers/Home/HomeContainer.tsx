import React, { ReactElement } from "react";

import { Flex } from "@chakra-ui/layout";

import { CategorySectionContainer } from "./CategorySectionContainer/CategorySectionContainer";

/**
 * The home container.
 * @returns {ReactElement} The home container.
 */
export const HomeContainer = (): ReactElement => {
  return (
    <Flex pt={10}>
      <CategorySectionContainer />
    </Flex>
  );
};
