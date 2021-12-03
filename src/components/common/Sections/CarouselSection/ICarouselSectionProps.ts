import { ReactElement } from "react";

import { ICarouselSliderOptions } from "components/common/CarouselSlider";

export interface ICarouselSectionProps {
  /**
   * Section title
   * @type {string}
   */
  title: string;

  /**
   * Carousel breakpoints
   * @type {{ [key: string]: Record<string, unknown> }}
   */
  breakpoints: { [key: string]: ICarouselSliderOptions };

  /**
   * Carousel items
   * @type {ReactElement[]}
   **/
  elements: ReactElement[];
}
