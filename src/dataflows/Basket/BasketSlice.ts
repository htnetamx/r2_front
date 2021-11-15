import { RootState } from "state/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBasketItem } from "./IBasketItem";
import { IBasketState } from "./IBasketState";

const initialState: IBasketState = {
  basketItems: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IBasketItem>) => {
      const { id, name, price, pictureUrl, brand, type } = action.payload;
      const existingItem = state.basketItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.basketItems.push({ id, name, price, quantity: 1, pictureUrl, brand, type });
      }
    },
    removeItem: (state, action: PayloadAction<IBasketItem>) => {
      const { id } = action.payload;
      const existingItem = state.basketItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        const existingItemIndex = state.basketItems.findIndex((item) => item.id === id);
        state.basketItems.splice(existingItemIndex, 1);
      }
    },
    clearBasket: (state) => {
      state.basketItems = [];
    },
  },
});

/**
 * Actions
 */
export const { addItem, removeItem, clearBasket } = basketSlice.actions;

/**
 * Selectors
 */

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
 * Reducers
 */
export const basketReducer = basketSlice.reducer;
