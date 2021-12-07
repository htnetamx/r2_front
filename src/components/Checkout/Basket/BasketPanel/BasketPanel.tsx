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
    onAddToBasket,
    onRemoveFromBasket,
  } = props;

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{basketTitle}</DrawerHeader>

        <DrawerBody>
          {basketItems.length > 0 ? (
            <BasketItems
              basketItems={basketItems}
              onAddToBasket={onAddToBasket}
              onRemoveFromBasket={onRemoveFromBasket}
            />
          ) : (
            basketEmptyTitle
          )}
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme="blue" width="100%" borderRadius="xl">
            {basketCheckoutTitle}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
