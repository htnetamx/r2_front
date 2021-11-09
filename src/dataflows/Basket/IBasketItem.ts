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
   * The quantity of the item.
   * @type {number}
   */
  quantity: number;

  /**
   * The picture of the item.
   * @type {string}
   */
  pictureUrl: string;

  /**
   * The brand of the item.
   * @type {string}
   */
  brand: string;

  /**
   * The type of the item.
   * @type {string}
   */
  type: string;
}
