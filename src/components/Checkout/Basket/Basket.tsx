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
      <BasketButton {...basketButtonProps} />
      <BasketPanel {...basketPanelProps} />
    </>
  );
};
