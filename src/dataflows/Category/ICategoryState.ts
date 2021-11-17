import { ICategory } from "./ICategory";

export interface ICategoryState {
  /**
   * The array categories.
   * @type {ICategory[]}
   */
  categoryItems: ICategory[];
  isLoading: boolean;
}
