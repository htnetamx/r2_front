import { ICategory } from "dataflows/Category/ICategory";

export interface ICategorySectionProps {
  /**
   * The section title to display.
   * @type {string}
   */
  categoryTitle: string;

  /**
   * The categories to display
   * @type {ICategory}
   */
  categories: ICategory[];

  /**
   * Action to be called when a category is clicked
   * @type {(category: ICategory) => void}
   */
  onCategoryClick: (category: ICategory) => void;
}
