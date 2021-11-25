import { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { CategorySection } from "components/HomeSections/CategorySection/CategorySection";
import { CATEGORY_TITLE } from "constants/categoryConstants";
import {
  getCategories,
  selectAllCategories,
  selectIsLoading,
} from "dataflows/Category/CategorySlice";
import { ICategory } from "dataflows/Category/ICategory";

/**
 * Category section container component.
 * @returns {ReactElement} React element.
 */
export const CategorySectionContainer = (): ReactElement => {
  const categories = useSelector(selectAllCategories);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  /**
   * Action on category click.
   * @param {ICategory} category the category clicked.
   * @returns {void}
   */
  const onCategoryClick = (category: ICategory): void => {
    //TODO: implement category navigation
    alert(`Category ${category.name} clicked`);
  };

  return isLoading ? (
    <>Is Loading</> //TODO: Add skeleton loader.
  ) : (
    <>
      <CategorySection
        categoryTitle={CATEGORY_TITLE}
        categories={categories}
        onCategoryClick={onCategoryClick}
      />
    </>
  );
};
