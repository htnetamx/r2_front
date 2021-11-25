import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { SalesSection } from "components/HomeSections/SalesSection/SalesSection";
import { SALES_SECTION_TITLE } from "constants/productConstants";
import {
  getSalesSectionProducts,
  selectIsLoadingSalesSection,
  selectSalesSectionProduct,
} from "dataflows/Product/IProductSlice";

import { ISalesSectionContainerProps } from "./ISalesSectionContainerProps";

/**
 * Sales section container component.
 * @param {ISalesSectionContainerProps} props - container props.
 * @returns {ReactElement} React element.
 */
export const SalesSectionContainer = (props: ISalesSectionContainerProps): ReactElement => {
  const { onProductClick, addToCart } = props;
  const salesSectionProducts = useSelector(selectSalesSectionProduct);
  const isLoading = useSelector(selectIsLoadingSalesSection);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalesSectionProducts());
  }, []);

  return isLoading ? (
    <>Is Loading</> //TODO: Add skeleton loader.
  ) : (
    <>
      <SalesSection
        title={SALES_SECTION_TITLE}
        products={salesSectionProducts}
        onProductClick={onProductClick}
        addToCart={addToCart}
      />
    </>
  );
};
