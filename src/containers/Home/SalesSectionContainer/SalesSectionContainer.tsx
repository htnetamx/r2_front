import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ProductCard } from "components/common/ProductCard";
import { CarouselSection } from "components/common/Sections";
import {
  MAX_PRODUCTS_PER_SLIDE_DESKTOP,
  MAX_PRODUCTS_PER_SLIDE_MOBILE,
  PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
  SALES_SECTION_TITLE,
} from "constants/productConstants";
import {
  selectIsLoadingSalesSection,
  selectSalesSectionProduct,
} from "dataflows/Product/ProductSelectors";
import { getSalesSectionProducts } from "dataflows/Product/ProductThunks";
import { screenSizes } from "styled/screen";

import { Box } from "@chakra-ui/react";

import { ISalesSectionContainerProps } from "./ISalesSectionContainerProps";

/**
 * Sales section container component.
 * @param {ISalesSectionContainerProps} props - container props.
 * @returns {ReactElement} React element.
 */
export const SalesSectionContainer = (props: ISalesSectionContainerProps): ReactElement => {
  const { onProductClick, addToCart, removeFromCart, getQtyInCart } = props;
  const salesSectionProducts = useSelector(selectSalesSectionProduct);
  const isLoading = useSelector(selectIsLoadingSalesSection);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalesSectionProducts());
  }, []);

  const productElements = Array.isArray(salesSectionProducts)
    ? salesSectionProducts.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            qtyOnBasket={getQtyInCart(product)}
          />
        );
      })
    : [];

  const breakpoints = {
    [screenSizes.xs]: {
      slidesPerView: MAX_PRODUCTS_PER_SLIDE_MOBILE,
      spaceBetween: PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.md]: {
      slidesPerView: MAX_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
    [screenSizes.lg]: {
      slidesPerView: MAX_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  return isLoading ? (
    <Box>Is Loading</Box> //TODO: Add skeleton loader.
  ) : (
    <>
      <CarouselSection
        title={SALES_SECTION_TITLE}
        elements={productElements}
        breakpoints={breakpoints}
      />
    </>
  );
};
