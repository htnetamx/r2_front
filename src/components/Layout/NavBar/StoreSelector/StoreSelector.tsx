import React, { ReactElement } from "react";

import { Stack, Text } from "@chakra-ui/react";
import { IStoreSelectorProps } from "./IStoreSelectorProps";

/**
 * The store selector component
 * @param {IStoreSelectorProps} props the props for the store selector
 * @returns {ReactElement} the store selector component.
 */
export const StoreSelector = (props: IStoreSelectorProps): ReactElement => {
  return (
    <Stack direction="column">
      <Text variant="unstyled" fontWeight="700" fontSize={{ base: "1.2rem", lg: "1.5rem" }}>
        {props?.name}
      </Text>
    </Stack>
  );
};
