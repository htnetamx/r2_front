import { ReactElement } from "react";

import { Select } from "@chakra-ui/react";

import { IStoreSelectorProps } from "./IStoreSelectorProps";

/**
 * The store selector component
 * @param {IStoreSelectorProps} props the props for the store selector
 * @returns {ReactElement} the store selector component.
 */
export const StoreSelector = (props: IStoreSelectorProps): ReactElement => {
  const { storeSelectorOptions } = props;
  return (
    <Select variant="unstyled" size="lg" fontWeight="700" fontSize="1.5rem">
      {storeSelectorOptions.map((option) => (
        <option key={option.key} value={option.value}>
          {option.value}
        </option>
      ))}
    </Select>
  );
};
