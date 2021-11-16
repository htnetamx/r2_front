export interface IProduct {
  /**
   * The unique identifier for the item.
   * @type {string}
   */
  id: string;

  /**
   * The name identifies the item.
   * @type {string}
   */
  name: string;

  /**
   * Is a number or code assigned to an item to be able to identify the item.
   * @type {string}
   */
  sku: string;

  /**
   * Item creation date in UTC format.
   * @type {Date}
   */
  createdOnUtc: Date;

  /**
   * Item creation date in UTC format.
   * @type {Date}
   */
  updatedOnUtc: Date;

  /**
   * Item image path.
   * @type {string}
   */
  seoFilename: string;

  /**
   * Item price.
   * @type {number}
   */
  price: number;

  /**
   * Item old price.
   * @type {number}
   */
  oldPrice: number;

  /**
   * Item order minimum quantity.
   * @type {number}
   */
  orderMinimumQuantity: number;

  /**
   * Item order maximum quantity.
   * @type {number}
   */
  orderMaximumQuantity: number;
}
