import React, { ReactElement } from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

import { BasketItems } from "./BasketItems/BasketItems";
import { IBasketPanelProps } from "./IBasketPanelProps";

/**
 * The basket panel component
 * @param {IBasketPanelProps} props the props for the basket panel
 * @returns {ReactElement} The basket panel component.
 */
export const BasketPanel = (props: IBasketPanelProps): ReactElement => {
  const {
    isOpen,
    onClose,
    basketItems,
    finalFocusRef,
    basketTitle,
    basketEmptyTitle,
    basketCheckoutTitle,
  } = props;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={finalFocusRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{basketTitle}</DrawerHeader>

        <DrawerBody>
          {basketItems.length > 0 ? <BasketItems basketItems={basketItems} /> : basketEmptyTitle}
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme="blue">{basketCheckoutTitle}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
