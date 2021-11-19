import { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { CarouselSlider } from "components/CarouselSlider/CarouselSlider";
import {
  getCategories,
  selectAllCategories,
  selectIsLoading,
} from "dataflows/Category/CategorySlice";

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

  return isLoading ? (
    <>is loading...</>
  ) : (
    <>
      <CarouselSlider />
    </>
  );
};
