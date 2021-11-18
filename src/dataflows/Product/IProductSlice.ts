import { RootState } from "state/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./IProduct";
import { IProductState } from "./IProductState";

const initialState: IProductState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const {
        id,
        name,
        sku,
        seoFilename,
        price,
        oldPrice,
        orderMinimumQuantity,
        orderMaximumQuantity,
      } = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      if (existingItem) {
        existingItem.orderMinimumQuantity++;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      const { id } = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      if (existingItem && existingItem.orderMinimumQuantity > 1) {
        existingItem.orderMinimumQuantity--;
      } else {
        const existingItemIndex = state.products.findIndex((item) => item.id === id);
        state.products.splice(existingItemIndex, 1);
      }
    },
    clearProduct: (state) => {
      state.products = [];
    },
  },
});

/**
 * Actions
 */
export const { addProduct, removeProduct, clearProduct } = productSlice.actions;

/**
 * Selectors
 */

/**
 * Selector to get the basket items from the state.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the basket items
 */
export const selectBasketItems = (state: RootState): IProduct[] => state.product.products;

/**
 * Reducers
 */
export const productReducer = productSlice.reducer;
