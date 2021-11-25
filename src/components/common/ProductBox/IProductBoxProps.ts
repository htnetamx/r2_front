export interface IProductBoxProps {
  /**
   * The product id.
   * @type {string}
   **/
  id: string;

  /**
   * The product name
   * @type {string}
   **/
  productName: string;

  /**
   * The product price
   * @type {string}
   **/
  productPrice: string;

  /**
   * The product old price.
   * @type {string}
   */
  productOldPrice?: string;

  /**
   * The product subtitle.
   * @type {string}
   */
  productSubtitle?: string;

  /**
   * The product image url
   * @type {string}
   **/
  productImageUrl: string;

  /**
   * The product short description
   * @type {string}
   **/
  productShortDescription: string;

  /**
   * On product click action.
   * @type {(id: string) => void}
   */
  onProductClick: (id: string) => void;

  /**
   * Add to cart action
   * @type {(id: string) => void}
   */
  addToCart: (id: string) => void;
}
