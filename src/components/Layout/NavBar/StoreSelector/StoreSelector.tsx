import { ReactElement, useEffect } from "react";

import { GrLocation } from "react-icons/gr";

import { Select, Stack, Text } from "@chakra-ui/react";

import { IStoreSelectorProps } from "./IStoreSelectorProps";
import { useDispatch, useSelector } from "react-redux";
import { getStoreByName } from "dataflows/Stores/StoreThunks";
import { selectStore } from "dataflows/Stores/StoreSelectors";

/**
 * The store selector component
 * @param {IStoreSelectorProps} props the props for the store selector
 * @returns {ReactElement} the store selector component.
 */
export const StoreSelector = (props: IStoreSelectorProps): ReactElement => {
  const { hasScrolled } = props;
  const selectStores = useSelector(selectStore);
  const [store] = selectStores;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoreByName());
  }, []);

  return (
    <Stack direction="column">
      <Text variant="unstyled" fontWeight="700" fontSize={{ base: "1.2rem", lg: "1.5rem" }}>
        {store?.name}
      </Text>
      <Stack direction="row" hidden={hasScrolled}>
        <GrLocation size="20px" />
        <Text>{store?.companyAddress || ""}</Text>
      </Stack>
    </Stack>
  );
};
