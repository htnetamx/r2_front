import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { CarouselSection } from "components/common/Sections";
import { FEATURED_TITLE } from "constants/categoryConstants";
import { selectAllCategories, selectIsLoading } from "dataflows/Category/CategorySelectors";
// import { selectCategory } from "dataflows/Category/CategorySlice";
import { getCategories } from "dataflows/Category/CategoryThunks";
// import { ICategory } from "dataflows/Category/ICategory";
// import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";

import { Box } from "@chakra-ui/react";
import { BoxItem } from "./Boxes/Box";
import {
  FEATURED_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  MAX_PRODUCTS_PER_SLIDE_DESKTOP,
  MAX_PRODUCTS_PER_SLIDE_MOBILE,
  PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
} from "constants/productConstants";

/**
 * Category section container component.
 * @returns {ReactElement} React element.
 */
export const FeaturedSectionContainer = (): ReactElement => {
  // const categories = useSelector(selectAllCategories);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  // const router = useRouter();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  /**
   * Action on category click.
   * @param {ICategory} category the category clicked.
   * @returns {void}
   */
  // const onCategoryClick = (category: ICategory): void => {
  //   dispatch(selectCategory(category.id));
  //   router.push(`/categories/${category.id}`);
  // };

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
      slidesPerView: FEATURED_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
      spaceBetween: PRODUCT_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  // TODO: Detele this object when we are receiving the real object
  const featuredObject = [
    {
      id: "1",
      name: "Producto por debajo de $10 pesos!",
      color: "#FFA800",
    },
    {
      id: "2",
      name: "Producto por debajo de $20 pesos!",
      color: "#0038FF",
    },
    {
      id: "3",
      name: "Producto por debajo de $40 pesos!",
      color: "#FF002A",
    },
    {
      id: "4",
      name: "Producto por debajo de $50 pesos!",
      color: "#01680B",
    },
  ];

  const featuredElements = Array.isArray(featuredObject)
    ? featuredObject.map((featured) => {
        return <BoxItem key={featured.id} name={featured.name} color={featured.color} />;
      })
    : [];

  return isLoading ? (
    <Box>Is Loading</Box> //TODO: Add skeleton loader.
  ) : (
    <>
      <CarouselSection
        title={FEATURED_TITLE}
        elements={featuredElements}
        breakpoints={breakpoints}
      />
    </>
  );
};
