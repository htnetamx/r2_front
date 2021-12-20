import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { CarouselSection } from "components/common/Sections";
import { DISCOUNT_TITLE } from "constants/categoryConstants";
import {
  // selectAllCategories,
  selectIsLoading,
} from "dataflows/Category/CategorySelectors";
// import { selectCategory } from "dataflows/Category/CategorySlice";
import { getCategories } from "dataflows/Category/CategoryThunks";
// import { ICategory } from "dataflows/Category/ICategory";
// import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";

import { Box } from "@chakra-ui/react";
import { CarouselBox } from "../../../components/common/CarouselSlider/CarouselBox/CarouselBox";

/**
 * Category section container component.
 * @returns {ReactElement} React element.
 */
export const DiscountSectionContainer = (): ReactElement => {
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
      slidesPerView: 2,
      spaceBetween: 10,
    },
    [screenSizes.sm]: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    [screenSizes.md]: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    [screenSizes.lg]: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };

  // TODO: Detele this object when we are receiving the real object
  const featuredObject = [
    {
      id: "1",
      content: "Producto por debajo de $10 pesos!",
      color: "#FFA800",
    },
    {
      id: "2",
      content: "Producto por debajo de $20 pesos!",
      color: "#0038FF",
    },
    {
      id: "3",
      content: "Producto por debajo de $40 pesos!",
      color: "#FF002A",
    },
    {
      id: "4",
      content: "Producto por debajo de $50 pesos!",
      color: "#01680B",
    },
  ];

  const featuredElements = Array.isArray(featuredObject)
    ? featuredObject.map((featured) => {
        return <CarouselBox key={featured.id} name={featured.content} color={featured.color} />;
      })
    : [];

  return isLoading ? (
    <Box>Is Loading</Box> //TODO: Add skeleton loader.
  ) : (
    <>
      <CarouselSection
        title={DISCOUNT_TITLE}
        elements={featuredElements}
        breakpoints={breakpoints}
      />
    </>
  );
};
