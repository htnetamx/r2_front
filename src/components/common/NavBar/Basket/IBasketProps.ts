import { IBasketButtonProps } from "./BasketButton/IBasketButtonProps";
import { IBasketPanelProps } from "./BasketPanel/IBasketPanelProps";

export interface IBasketProps {
  /**
   * Props for the basket button.
   * @type {IBasketButtonProps}
   */
  basketButtonProps: IBasketButtonProps;

  /**
   * Props for the basket panel.
   * @type {IBasketPanelProps}
   */
  basketPanelProps: IBasketPanelProps;
}
