import { ReactElement } from "react";

import { ICarouselViewConf } from "./ICarouselViewConf";

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
  breakpoints: { [key: string]: ICarouselViewConf };

  /**
   * Carousel items
   * @type {ReactElement[]}
   **/
  elements: ReactElement[];
}
