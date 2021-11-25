import React, { ReactElement } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { ICarouselSliderProps } from "./ICarouselSliderProps";

/**
 * This is a wrapper around the swiper library.
 * It is used to display a carousel of items.
 * @param {ICarouselProps} props The properties of the component.
 * @returns {ReactElement} The rendered component.
 */
export const CarouselSlider = (props: ICarouselSliderProps): ReactElement => {
  const { elements, breakpoints, onSlideChange } = props;
  return (
    <>
      <Swiper
        breakpoints={breakpoints}
        onSlideChange={(swiper) => onSlideChange && onSlideChange(swiper.realIndex)}
      >
        {elements.map((element, index) => (
          <SwiperSlide key={index}>{element}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
