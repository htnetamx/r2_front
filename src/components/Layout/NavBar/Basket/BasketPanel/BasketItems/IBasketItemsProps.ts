import { IBasketItem } from "dataflows/Basket/IBasketItem";

export interface IBasketItemsProps {
  /**
   * The basket items to display
   * @type {IBasketItem[]}
   */
  basketItems: IBasketItem[];

  /**
   * Action to add an item to the basket
   * @type {(item: IBasketItem) => void}
   **/
  onAddToBasket: (productId: string) => void;

  /**
   * Action to remove an item from the basket
   * @type {(productId: string) => void}
   */
  onRemoveFromBasket: (productId: string) => void;
}
