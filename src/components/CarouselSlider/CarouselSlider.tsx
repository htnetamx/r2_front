import { ReactElement } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { ICarouselProps } from "./ICarouselProps";

/**
 * This is a wrapper around the react carousel responsive library.
 * It is used to display a carousel of items.
 * @param {ICarouselProps} props The properties of the component.
 * @returns {ReactElement} The rendered component.
 */
export const CarouselSlider = (props: ICarouselProps): ReactElement => {
  const { items } = props;
  return (
    <Carousel
      swipeable={true}
      showStatus={false}
      showIndicators={false}
      emulateTouch={true}
      centerMode={true}
      centerSlidePercentage={40}
      preventMovementUntilSwipeScrollTolerance
      swipeScrollTolerance={7}
    >
      {items.map((item, index) => (
        <div style={{ padding: 8 }} key={index}>
          {item}
        </div>
      ))}
    </Carousel>
  );
};
