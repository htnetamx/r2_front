import { ICarouselSliderOptions } from "./ICarouselSliderOptions";

export interface ICarouselSliderProps {
  /**
   * The children to be rendered in the carousel.
   * @type {JSX.Element[]}
   */
  elements: JSX.Element[];

  /**
   * The breakpoints to use for the carousel.
   * @type {ICarouselSliderOptions}
   */
  breakpoints?: { [key: number]: ICarouselSliderOptions };

  /**
   * Action to be performed when the user swipes the carousel.
   * @type {(index: number) => void}
   **/
  onSlideChange?: (index: number) => void;
}
