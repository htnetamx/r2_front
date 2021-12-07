import { IBasketProps } from "../../Checkout/Basket/IBasketProps";
import { ISearchBarProps } from "./SearchBar";
import { IStoreSelectorProps } from "./StoreSelector";

export interface INavBarProps {
  /**
   * The store selector props.
   * @type {IStoreSelectorProps}
   */
  storeSelectorProps: IStoreSelectorProps;

  /**
   * The search bar props
   * @type {ISearchBarProps}
   **/
  searchBarProps: ISearchBarProps;

  /**
   * The basket props.
   * @type {IBasketProps}
   */
  basketProps: IBasketProps;

  /**
   * Indicates if is home
   * @type {boolean}
   **/
  isHome: boolean;
}
