import { RootState } from "state/store";

import { IBasketItem } from "./IBasketItem";

/**
 * Selector to get the basket items from the state.
 * @param {RootState} state the root state
 * @returns {IBasketItem[]} the basket items
 */
export const selectBasketItems = (state: RootState): IBasketItem[] => state.basket.basketItems;

/**
 * Selector to get the basket total from the state.
 * @param {RootState} state the root state
 * @returns {number} the basket total
 */
export const selectTotalBasketItems = (state: RootState): number =>
  state.basket.basketItems.reduce((total, item) => total + item.quantity, 0);

/**
 * Selector to get the basket total from the state.
 * @param {RootState} state the root state
 * @returns {number} the basket total
 */
export const selectTotalBasketPrice = (state: RootState): number =>
  state.basket.basketItems.reduce((total, item) => total + item.price * item.quantity, 0);

/**
 * Selector to get the basket total from the state.
 * @param {RootState} state the root state
 * @returns {number} the basket total
 */
export const selectTotalDiscountPrice = (state: RootState): number =>
  state.basket.basketItems.reduce(
    (total, item) => total + (item.oldPrice - item.price) * item.quantity,
    0
  );
