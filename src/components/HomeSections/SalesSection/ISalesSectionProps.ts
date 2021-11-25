import { IProduct } from "dataflows/Product/IProduct";

export interface ISalesSectionProps {
  /**
   * The Low Prices section title
   * @type {string}
   */
  title: string;

  /**
   * The products to display in the Low Prices section
   * @type {IProduct[]}
   */
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
