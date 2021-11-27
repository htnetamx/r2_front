import { ReactElement } from "react";

import { GrLocation } from "react-icons/gr";

import { Select, Stack, Text } from "@chakra-ui/react";

import { IStoreSelectorProps } from "./IStoreSelectorProps";

/**
 * The store selector component
 * @param {IStoreSelectorProps} props the props for the store selector
 * @returns {ReactElement} the store selector component.
 */
export const StoreSelector = (props: IStoreSelectorProps): ReactElement => {
  const { storeSelectorOptions, hasScrolled } = props;
  return (
    <Stack direction="column">
      <Select variant="unstyled" fontWeight="700" fontSize={{ base: "1.2rem", lg: "1.5rem" }}>
        {storeSelectorOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </Select>
      <Stack direction="row" hidden={hasScrolled}>
        <GrLocation size="20px" />
        <Text>Condesa</Text>
      </Stack>
    </Stack>
  );
};
