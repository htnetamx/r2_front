import { ReactElement } from "react";

import { Basket, IBasketProps } from "components/Checkout/Basket";
import { BASKET_EMPTY_TITLE, BASKET_TITLE, CHECKOUT_TITLE } from "constants/basketConstants";

import { IBasketContainerProps } from "./IBasketContainerProps";

/**
 * The basket container component.
 * @param {IBasketContainerProps} props The component props.
 * @returns {ReactElement} The react element.
 */
export const BasketContainer = (props: IBasketContainerProps): ReactElement => {
  const {
    onOpen,
    onClose,
    onAddToBasket,
    onRemoveFromBasket,
    btnRef,
    totalBasketItems,
    basketItems,
    isOpen,
  } = props;

  const basketProps: IBasketProps = {
    basketButtonProps: {
      totalItems: totalBasketItems,
      onClick: onOpen,
      btnRef,
      ariaLabel: BASKET_TITLE,
    },
    basketPanelProps: {
      isOpen,
      onClose,
      basketItems,
      basketTitle: BASKET_TITLE,
      basketCheckoutTitle: CHECKOUT_TITLE,
      basketEmptyTitle: BASKET_EMPTY_TITLE,
      finalFocusRef: btnRef,
      onAddToBasket,
      onRemoveFromBasket,
    },
  };
  return <Basket {...basketProps} />;
};
