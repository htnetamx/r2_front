import React, { ReactElement } from "react";

import { CarouselSlider } from "components/common/CarouselSlider";

import { Box, Text } from "@chakra-ui/react";

import { ICarouselSectionProps } from "./ICarouselSectionProps";

/**
 * The carousel section component.
 * @param {ICategorySectionProps} props the component props.
 * @returns {ReactElement} The component.
 */
export const CarouselSection = (props: ICarouselSectionProps): ReactElement => {
  const { title, elements, breakpoints } = props;

  return (
    <Box pt={7}>
      <Box pb={5}>
        <Text fontSize="xl" fontWeight={700}>
          {title}
        </Text>
      </Box>
      <Box>
        <CarouselSlider elements={elements} breakpoints={breakpoints} />
      </Box>
    </Box>
  );
};
