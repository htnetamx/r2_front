import { IBasketButtonProps } from "./BasketButton/IBasketButtonProps";
import { ISearchBarProps } from "./SearchBar";
import { IStoreSelectorProps } from "./StoreSelector";
import { IUserButtonProps } from "./UserButton/IUserButtonProps";

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
   * @type {IBasketButtonProps}
   */
  basketProps: IBasketButtonProps;

  /**
   * The user menu props.
   * @type {IUserButtonProps}
   */
  userButtonProps: IUserButtonProps;

  /**
   * Indicates if is home
   * @type {boolean}
   **/
  isHome: boolean;
}
