import { IProduct } from "dataflows/Product/IProduct";

export interface IProductGridSection {
  /**
   * The title of the section
   * @type {string}
   */
  title: string;

  /**
   * The products to display
   * @type {IProduct[]}
   **/
  products: IProduct[];

  /**
   * Action to be performed when a product is clicked
   * @type {(product: IProduct) => void}
   **/
  onProductClick: (product: IProduct) => void;

  /**
   * Action to be performed when add to cart button is clicked
   * @type {(product: IProduct) => void}
   */
  addToCart: (product: IProduct) => void;
}
