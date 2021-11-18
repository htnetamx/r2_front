import { ReactElement } from "react";

import { BasketButton } from "./BasketButton/BasketButton";
import { BasketPanel } from "./BasketPanel/BasketPanel";
import { IBasketProps } from "./IBasketProps";

/**
 *  The basket container
 * @param {IBasketProps} props The props for the basket container
 * @returns {ReactElement} The basket container
 */
export const Basket = (props: IBasketProps): ReactElement => {
  const { basketButtonProps, basketPanelProps } = props;
  return (
    <>
      <BasketButton
        totalItems={basketPanelProps.basketItems.length}
        onClick={basketButtonProps.onClick}
        btnRef={basketButtonProps.btnRef}
        ariaLabel={basketButtonProps.ariaLabel}
      />
      <BasketPanel
        isOpen={basketPanelProps.isOpen}
        onClose={basketPanelProps.onClose}
        basketItems={basketPanelProps.basketItems}
        finalFocusRef={basketButtonProps.btnRef}
        basketTitle={basketPanelProps.basketTitle}
        basketCheckoutTitle={basketPanelProps.basketCheckoutTitle}
        basketEmptyTitle={basketPanelProps.basketEmptyTitle}
      />
    </>
  );
};
