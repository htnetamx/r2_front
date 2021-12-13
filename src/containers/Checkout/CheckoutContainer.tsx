import React, { useRef, ReactElement } from "react";

import { Step, Steps, Wizard } from "react-albus";
import { useDispatch, useSelector } from "react-redux";

import { selectBasketItems, selectTotalBasketItems } from "dataflows/Basket/BasketSelectors";
import { addQuantity, removeQuantity } from "dataflows/Basket/BasketSlice";

import { useDisclosure } from "@chakra-ui/react";

import { BasketContainer } from "./BasketContainer/BasketContainer";
import { IBasketContainerProps } from "./BasketContainer/IBasketContainerProps";

/**
 * Renders the basket container
 * @param {IBasketContainerProps} props The props for the basket container
 * @returns {ReactElement} The basket container
 */
const renderBasketContainer = (props: IBasketContainerProps): ReactElement => {
  return <BasketContainer {...props} />;
};

/**
 * The checkout container.
 * @returns {ReactElement} The component.
 */
export const CheckoutContainer = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const btnRef = useRef<HTMLButtonElement>(null);
  const basketItems = useSelector(selectBasketItems);
  const totalBasketItems = useSelector(selectTotalBasketItems);

  /**
   * Add quantity to the basket
   * @param {string} productId The product id
   * @returns {void}
   **/
  const onAddToBasket = (productId: string) => dispatch(addQuantity(productId));

  /**
   * Remove quantity from the basket
   * @param {string} productId The product id
   * @returns {void}
   **/
  const onRemoveFromBasket = (productId: string) => dispatch(removeQuantity(productId));

  return (
    <Wizard>
      <Steps>
        <Step> </Step>
      </Steps>
    </Wizard>
  );
};
