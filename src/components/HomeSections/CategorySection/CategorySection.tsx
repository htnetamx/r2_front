import React, { ReactElement } from "react";

import { CarouselSlider } from "components/common/CarouselSlider/CarouselSlider";
import {
  CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
  MAX_CATEGORIES_PER_SLIDE_DESKTOP,
  MAX_CATEGORIES_PER_SLIDE_MOBILE,
} from "constants/categoryConstants";
import { screenSizes } from "styled/screen";

import { Img } from "@chakra-ui/image";
import { Box, Square } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

import { ICategorySectionProps } from "./ICategorySectionProps";

/**
 * The category section component
 * @param {ICategorySectionProps} props the component props.
 * @returns {ReactElement} The component
 */
export const CategorySection = (props: ICategorySectionProps): ReactElement => {
  const { categoryTitle, categories, onCategoryClick } = props;

  const categoryElements = categories.map((category) => {
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
  });

  const categoryBreakpoints = {
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

  return (
    <Box pt={7}>
      <Box pb={5}>
        <Text fontSize="xl" fontWeight={700}>
          {categoryTitle}
        </Text>
      </Box>
      <Box>
        <CarouselSlider elements={categoryElements} breakpoints={categoryBreakpoints} />
      </Box>
    </Box>
  );
};
