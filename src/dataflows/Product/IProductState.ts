import { IProduct } from "./IProduct";

export interface IProductState {
  /**
   * The array of products.
   * @type {IProduct[]}
   */
  categoryItems: IProduct[];
  isLoading: boolean;
}
