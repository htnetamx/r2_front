import { GET_PRODUCTS_SALES_SECTION_URL } from "constants/productConstants";
import { RootState } from "state/store";
import { get } from "utils/http";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "./IProduct";
import { IProductState } from "./IProductState";

const initialState: IProductState = {
  salesSectionProducts: [],
  isLoadingSalesSection: false,
};

export const getSalesSectionProducts = createAsyncThunk(
  "product/getSalesSectionProducts",
  async () => {
    const response = await get(
      `${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/${GET_PRODUCTS_SALES_SECTION_URL}` //TODO: remove this after the API gateway is implemented.
    );
    return (await response.data) as IProduct[];
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<string>) => {
      const allProducts = [...state.salesSectionProducts];
      state.selectedProduct = allProducts.find((product) => product.id === action.payload);
    },
  },
  extraReducers: {
    [getSalesSectionProducts.pending.type]: (state) => {
      state.isLoadingSalesSection = true;
    },
    [getSalesSectionProducts.fulfilled.type]: (state, action) => {
      state.salesSectionProducts = action.payload;
      state.isLoadingSalesSection = false;
    },
    [getSalesSectionProducts.rejected.type]: (state) => {
      state.isLoadingSalesSection = false;
    },
  },
});

/**
 * Actions
 */
export const { selectProduct } = productSlice.actions;

/**
 * Selectors
 */

/**
 * Selector to get the sales products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the sales products.
 */
export const selectSalesSectionProduct = (state: RootState): IProduct[] =>
  state.product.salesSectionProducts;

/**
 * Selector to get the isLoadingSalesSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingSalesSection state
 */
export const selectIsLoadingSalesSection = (state: RootState): boolean =>
  state.product.isLoadingSalesSection;

/**
 * Reducers
 */
export const productReducer = productSlice.reducer;
