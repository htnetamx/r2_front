import { RootState } from "state/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "./ICategory";
import { ICategoryState } from "./ICategoryState";

const initialState: ICategoryState = {
  categoryItems: [],
  isLoading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    removeCategory: (state, action: PayloadAction<ICategory>) => {
      const { id } = action.payload;
      const existingItem = state.categoryItems.find((item) => item.id === id);
      const existingItemIndex = state.categoryItems.findIndex((item) => item.id === id);
      state.categoryItems.splice(existingItemIndex, 1);
    },
    clearCategory: (state) => {
      state.categoryItems = [];
    },
  },
});

/**
 * Actions
 */
export const { removeCategory, clearCategory } = categorySlice.actions;

/**
 * Selector to get the basket items from the state.
 * @param {RootState} state the root state
 * @returns {ICategory[]} the basket items
 */
export const getAllCategory = (state: RootState): ICategory[] => state.category.categoryItems;

/**
 * Reducers
 */
export const categoryReducer = categorySlice.reducer;
