import React, { useState, ReactElement } from "react";

import { OrderReview } from "components/common/OrderReview/OrderReview";

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
  const [currentStep, setCurrentStep] = useState<number>(1);
  /**
   * gets the total net price of the items in the cart.
   * @returns {number} total net price.
   **/
  const getTotalNetPrice = (): number => {
    let totalAmount = 0;
    basketItems.map((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

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
    <Drawer isOpen={isOpen} placement="top" onClose={onClose} finalFocusRef={finalFocusRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{basketTitle}</DrawerHeader>

        <DrawerBody width="100%">
          {currentStep === 1 && basketItems.length > 0 ? (
            <BasketItems
              basketItems={basketItems}
              onAddToBasket={onAddToBasket}
              onRemoveFromBasket={onRemoveFromBasket}
            />
          ) : (
            basketItems.length === 0 && basketEmptyTitle
          )}
          {currentStep === 2 && basketItems.length > 0 && (
            <OrderReview totalNetPrice={getTotalNetPrice()} />
          )}
        </DrawerBody>

        <DrawerFooter display="flex" justifyContent="center">
          {/* TODO: Service for send the order is needed */}
          <Button
            hidden={basketItems.length > 0 ? false : true}
            colorScheme="blue"
            width="328px"
            size="lg"
            borderRadius="16px"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            {currentStep === 2 ? "Finalizar Pedido" : basketCheckoutTitle}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
