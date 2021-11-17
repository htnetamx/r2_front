import React, { ReactElement } from "react";

import { useSelector } from "react-redux";

import { BASKET_EMPTY_TITLE, BASKET_TITLE, CHECKOUT_TITLE } from "constants/basketConstants";
import { selectBasketItems } from "dataflows/Basket/BasketSlice";

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
import { IBasketContainerProps } from "./IBasketContainerProps";

/**
 *  The basket container
 * @param {IBasketContainerProps} props The props for the basket container
 * @returns {ReactElement} The basket container
 */
export const BasketContainer = (props: IBasketContainerProps): ReactElement => {
  const { isOpen, onClose, btnRef } = props;

  const basketItems = useSelector(selectBasketItems);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{BASKET_TITLE}</DrawerHeader>

        <DrawerBody>
          {basketItems.length > 0 ? <BasketItems basketItems={basketItems} /> : BASKET_EMPTY_TITLE}
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme="blue">{CHECKOUT_TITLE}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
