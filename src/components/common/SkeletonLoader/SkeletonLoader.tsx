import React, { ReactElement } from "react";

import { range } from "utils/arrayUtils";

import { Box, Skeleton, Stack } from "@chakra-ui/react";

import { CarouselSlider } from "../CarouselSlider/CarouselSlider";
import { ISkeletonLoaderProps } from "./ISkeletonLoaderProps";
import { SkeletonLoaderType } from "./SkeletonLoaderType";

/**
 * SkeletonLoader component.
 * @param {ISkeletonLoaderProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const SkeletonLoader = (props: ISkeletonLoaderProps): ReactElement => {
  const carouselElementes = range(0, 5).map((item) => {
    return (
      <Box key={item}>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </Box>
    );
  });

  switch (props.skeletonType) {
    case SkeletonLoaderType.Carousel:
      return <CarouselSlider elements={carouselElementes} />;

    case SkeletonLoaderType.List:
      return (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      );

    case SkeletonLoaderType.Single:
      return <Skeleton />; //TODO: implement skeleton single

    default:
      return <Skeleton />; //TODO: implement skeleton single
  }
};
