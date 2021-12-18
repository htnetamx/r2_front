export interface IBasketItem {
  /**
   * The unique identifier for the item.
   * @type {string}
   */
  id: string;

  /**
   * The name of the item.
   * @type {string}
   */
  name: string;

  /**
   * The price of the item.
   * @type {number}
   */
  price: number;

  /**
   * Item old price.
   * @type {number}
   */
  oldPrice: number;

  /**
   * The quantity of the item.
   * @type {number}
   */
  quantity: number;

  /**
   * The maximum quantity of the item.
   * @type {number}
   **/
  maxQuantity?: number;

  /**
   * The minimum quantity of the item.
   **/
  minQuantity?: number;

  /**
   * The picture of the item.
   * @type {string}
   */
  pictureUrl: string;
}
