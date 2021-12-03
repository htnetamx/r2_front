import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { CarouselSection } from "components/common/Sections";
import {
  CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
  CATEGORY_TITLE,
  MAX_CATEGORIES_PER_SLIDE_DESKTOP,
  MAX_CATEGORIES_PER_SLIDE_MOBILE,
} from "constants/categoryConstants";
import { selectAllCategories, selectIsLoading } from "dataflows/Category/CategorySelectors";
import { selectCategory } from "dataflows/Category/CategorySlice";
import { getCategories } from "dataflows/Category/CategoryThunks";
import { ICategory } from "dataflows/Category/ICategory";
import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";

import { Box, Img, Square, Text } from "@chakra-ui/react";

/**
 * Category section container component.
 * @returns {ReactElement} React element.
 */
export const CategorySectionContainer = (): ReactElement => {
  const categories = useSelector(selectAllCategories);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  /**
   * Action on category click.
   * @param {ICategory} category the category clicked.
   * @returns {void}
   */
  const onCategoryClick = (category: ICategory): void => {
    dispatch(selectCategory(category.id));
    router.push(`/categories/${category.id}`);
  };

  const breakpoints = {
    [screenSizes.xs]: {
      slidesPerView: MAX_CATEGORIES_PER_SLIDE_MOBILE,
      spaceBetween: CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.md]: {
      slidesPerView: MAX_CATEGORIES_PER_SLIDE_DESKTOP,
      spaceBetween: CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
    [screenSizes.lg]: {
      slidesPerView: MAX_CATEGORIES_PER_SLIDE_DESKTOP,
      spaceBetween: CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  const categoryElements = Array.isArray(categories)
    ? categories.map((category) => {
        return (
          <Box key={category.id}>
            <Square>
              <Img
                onClick={() => onCategoryClick(category)}
                alignContent="center"
                src={category.seoFilename}
                alt={category.name}
                fit="contain"
                htmlWidth="60px"
              />
            </Square>
            <Text pt={1} align="center" fontSize="xs">
              {category.name}
            </Text>
          </Box>
        );
      })
    : [];

  return isLoading ? (
    <Box>Is Loading</Box> //TODO: Add skeleton loader.
  ) : (
    <>
      <CarouselSection
        title={CATEGORY_TITLE}
        elements={categoryElements}
        breakpoints={breakpoints}
      />
    </>
  );
};
