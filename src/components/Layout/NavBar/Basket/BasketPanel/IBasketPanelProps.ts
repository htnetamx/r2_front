import { IBasketItem } from "dataflows/Basket/IBasketItem";

export interface IBasketPanelProps {
  /**
   * Indicates whether the panel is open
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * Action to close the panel
   * @type {() => void}
   */
  onClose: () => void;

  /**
   * The final focus element
   * @type {React.RefObject}
   */
  finalFocusRef: React.RefObject<HTMLElement>;

  /**
   * The empty basket message
   * @type {string}
   **/
  basketEmptyTitle: string;

  /**
   * The basket title
   * @type {string}
   */
  basketTitle: string;

  /**
   * The basket checkout title
   * @type {string}
   */
  basketCheckoutTitle: string;

  /**
   * The basket items.
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
