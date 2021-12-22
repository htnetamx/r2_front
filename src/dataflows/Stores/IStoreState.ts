import { IStore } from "./IStore";

export interface IStoreState {
  // /**
  //  * The array of products in the sales section.
  //  * @type {IStore[]}
  //  */
  // salesSectionProducts: IStore[];

  // /**
  //  * The array of products in the low price offers section.
  //  * @type {IStore[]}
  //  **/
  // lowPriceOffersProducts: IStore[];

  /**
   * The array of stores
   * @type {IStore[]}
   **/
  store: IStore[];

  /**
   * The selected store.
   * @type {IStore}
   */
  selectedStore?: IStore;

  /**
   * Indicates if the products are loading.
   * @type {boolean}
   */
  isLoadingStore: boolean;

  // /**
  //  * Indicates if the products are loading.
  //  * @type {boolean}
  //  **/
  // isLoadingLowPriceOffersSection: boolean;

  // /**
  //  * Indicates if the products are loading.
  //  * @type {boolean}
  //  */
  // isLoadingCategoryProducts: boolean;

  // /**
  //  * Indicates if the product is loading.
  //  * @type {boolean}
  //  */
  // isLoadingSelectedProduct: boolean;
}
