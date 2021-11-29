import { IProduct } from "dataflows/Product/IProduct";

export interface IProductCardProps {
  /**
   * The product to display
   * @type {IProduct}
   */
  product: IProduct;

  /**
   * On product click action.
   * @type {(product: IProduct) => void}
   */
  onProductClick: (product: IProduct) => void;

  /**
   * Add to cart action
   * @type {(product: IProduct) => void}
   */
  addToCart: (product: IProduct) => void;
}
