import { IBasketItem } from "dataflows/Basket/IBasketItem";

export interface IBasketItemsProps {
  /**
   * The basket items to display
   * @type {IBasketItem[]}
   */
  basketItems: IBasketItem[];
}
