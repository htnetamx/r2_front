import { IStore } from "./IStore";

export interface IStoreState {
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
}
