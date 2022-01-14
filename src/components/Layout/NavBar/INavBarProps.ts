import { IStore } from "dataflows/Stores/IStore";
import { IBasketButtonProps } from "./BasketButton/IBasketButtonProps";
import { ISearchBarProps } from "./SearchBar";
import { IStoreSelectorProps } from "./StoreSelector";
import { IUserButtonProps } from "./UserButton/IUserButtonProps";

export interface INavBarProps {
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

  /**
   * The store props
   * @type {IStore}
   **/
  store?: IStore;
}
