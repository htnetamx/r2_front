import { IProduct } from "dataflows/Product/IProduct";

export interface ISalesSectionContainerProps {
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
}
