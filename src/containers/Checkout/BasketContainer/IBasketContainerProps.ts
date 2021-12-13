import { IBasketItem } from "dataflows/Basket/IBasketItem";

export interface IBasketContainerProps {
  /**
   * The total number of items in the basket
   * @type {number}
   */
  totalBasketItems: number;

  /**
   * The button reference
   * @type {React.RefObject<HTMLButtonElement>}
   **/
  btnRef: React.RefObject<HTMLButtonElement>;

  /**
   * The basket items
   * @type {IBasketItem[]}
   **/
  basketItems: IBasketItem[];

  /**
   * Indicates whether the panel is open
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * Open the basket action.
   * @type {() => void}
   */
  onOpen: () => void;

  /**
   * Close the basket action.
   * @type {() => void}
   **/
  onClose: () => void;

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
