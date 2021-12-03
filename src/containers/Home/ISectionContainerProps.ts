import { IProduct } from "dataflows/Product/IProduct";

export interface ISectionContainerProps {
  /**
   * Action for product click.
   * @type {(product: IProduct) => void}
   */
  onProductClick: (product: IProduct) => void;

  /**
   * Action for add to cart.
   * @type {(product: IProduct) => void}
   **/
  addToCart: (product: IProduct) => void;

  /**
   * Action for remove from cart.
   * @type {(product: IProduct) => void}
   **/
  removeFromCart: (product: IProduct) => void;

  /**
   * Get the quantity of a product in the cart.
   * @param {IProduct} product the product clicked.
   * @returns {number} the quantity of the product in the cart.
   **/
  getQtyInCart: (product: IProduct) => number;
}
