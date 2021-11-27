import { IDisplayable } from "components/common/IDisplayable";

export interface IStoreSelectorProps {
  /**
   * The store selector.
   * @type {IDisplayable<string>[]}
   */
  storeSelectorOptions: IDisplayable<string>[];

  /**
   * Indicates if the user has scrolled
   * @type {boolean}
   **/
  hasScrolled?: boolean;
}
