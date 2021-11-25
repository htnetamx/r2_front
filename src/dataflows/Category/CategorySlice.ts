import { GET_ALL_CATEGORIES_API_URL } from "constants/categoryConstants";
import { RootState } from "state/store";
import { get } from "utils/http";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategory } from "./ICategory";
import { ICategoryState } from "./ICategoryState";

const initialState: ICategoryState = {
  categoryItems: [],
  isLoading: false,
};

export const getCategories = createAsyncThunk("category/getCategories", async () => {
  const response = await get(
    `${process.env.NEXT_PUBLIC_CATEGORY_API_URL}/${GET_ALL_CATEGORIES_API_URL}` //TODO: remove this after the API gateway is implemented.
  );
  return (await response.data) as ICategory[];
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = state.categoryItems.find(
        (category) => category.id === action.payload
      );
    },
  },
  extraReducers: {
    [getCategories.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled.type]: (state, action) => {
      state.categoryItems = action.payload;
      state.isLoading = false;
    },
    [getCategories.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

/**
 * Actions
 */
export const { selectCategory } = categorySlice.actions;

/**
 * Selectors
 */

/**
 * Selector to get the basket items from the state.
 * @param {RootState} state the root state
 * @returns {ICategory[]} the basket items
 */
export const selectAllCategories = (state: RootState): ICategory[] => state.category.categoryItems;

/**
 * Selector to get the isLoading state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoading state
 */
export const selectIsLoading = (state: RootState): boolean => state.category.isLoading;

/**
 * Reducers
 */
export const categoryReducer = categorySlice.reducer;
