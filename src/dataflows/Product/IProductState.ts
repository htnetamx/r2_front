import { IProduct } from "./IProduct";

export interface IProductState {
  /**
   * The array of products in the sales section.
   * @type {IProduct[]}
   */
  salesSectionProducts: IProduct[];

  /**
   * The selected product.
   * @type {IProduct}
   */
  selectedProduct?: IProduct;

  /**
   * Indicates if the products are loading.
   * @type {boolean}
   */
  isLoadingSalesSection: boolean;
}
