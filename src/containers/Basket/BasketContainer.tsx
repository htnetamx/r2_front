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
  Input,
} from "@chakra-ui/react";

import { IBasketContainerProps } from "./IBasketContainerProps";

/**
 *  The basket container
 * @param {IBasketContainerProps} props The props for the basket container
 * @returns {ReactElement} The basket container
 */
export const BasketContainer = (props: IBasketContainerProps): ReactElement => {
  const { isOpen, onClose, btnRef } = props;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
