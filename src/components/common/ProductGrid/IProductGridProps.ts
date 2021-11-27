import { IProduct } from "dataflows/Product/IProduct";

export interface IProductGridProps {
  /**
   * The products to display in the grid.
   * @type {IProduct[]}
   */
  products: IProduct[];

  /**
   * Action to be called when a product is clicked.
   * @type {(product: IProduct) => void}
   **/
  onProductClick: (product: IProduct) => void;

  /**
   * Action to be called when a product is added to the cart.
   * @type {(product: IProduct) => void}
   **/
  addToCart: (product: IProduct) => void;
}
