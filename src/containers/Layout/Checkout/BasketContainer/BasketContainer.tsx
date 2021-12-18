import React, { useEffect, ReactElement } from "react";

import { BasketItems } from "components/Layout/Checkout/Basket/BasketItems";
import { IBasketItemsProps } from "components/Layout/Checkout/Basket/IBasketItemsProps";
import { useIsMounted } from "hooks/useIsMounted";

import { IBasketContainerProps } from "./IBasketContainerProps";

/**
 * The basket container component.
 * @param {IBasketContainerProps} props The component props.
 * @returns {ReactElement} The react element.
 */
export const BasketContainer = (props: IBasketContainerProps): ReactElement => {
  const {
    onAddToBasket,
    onRemoveFromBasket,
    basketItems,
    isClickingNextButton,
    setIsClickingNextButton,
    loadNextStep,
  } = props;

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      setIsClickingNextButton && setIsClickingNextButton(false);
      loadNextStep && loadNextStep();
    }
  }, [isClickingNextButton]);

  const basketProps: IBasketItemsProps = {
    onAddToBasket,
    onRemoveFromBasket,
    basketItems,
  };
  return <BasketItems {...basketProps} />;
};
