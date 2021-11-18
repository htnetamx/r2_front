import { IProduct } from "./IProduct";

export interface IProductState {
  /**
   * The array of products.
   * @type {IProduct[]}
   */
  products: IProduct[];
  isLoading: boolean;
}
