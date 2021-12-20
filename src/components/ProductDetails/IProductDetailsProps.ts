import { IProduct } from "dataflows/Product/IProduct";

export interface IProductDetailsProps {
  /**
   * The product.
   * @type {IProduct}
   */
  product: IProduct;
  /**
   * Action for add to cart.
   * @type {(product: IProduct) => void}
   **/
  addToCart: (product: IProduct) => void;
}
