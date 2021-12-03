import { IProduct } from "./IProduct";

export interface IProductState {
  /**
   * The array of products in the sales section.
   * @type {IProduct[]}
   */
  salesSectionProducts: IProduct[];

  /**
   * The array of products in the low price offers section.
   * @type {IProduct[]}
   **/
  lowPriceOffersProducts: IProduct[];

  /**
   * The array of products per category
   * @type {IProduct[]}
   **/
  categoryProducts: IProduct[];

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

  /**
   * Indicates if the products are loading.
   * @type {boolean}
   **/
  isLoadingLowPriceOffersSection: boolean;

  /**
   * Indicates if the products are loading.
   * @type {boolean}
   */
  isLoadingCategoryProducts: boolean;

  /**
   * Indicates if the product is loading.
   * @type {boolean}
   */
  isLoadingSelectedProduct: boolean;
}
