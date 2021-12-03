import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "./IProduct";
import { IProductState } from "./IProductState";
import {
  getCategoryProducts,
  getLowPriceOffersProducts,
  getProductById,
  getSalesSectionProducts,
} from "./ProductThunks";

const initialState: IProductState = {
  salesSectionProducts: [],
  lowPriceOffersProducts: [],
  categoryProducts: [],
  isLoadingCategoryProducts: false,
  isLoadingSalesSection: false,
  isLoadingLowPriceOffersSection: false,
  isLoadingSelectedProduct: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload;
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
    [getLowPriceOffersProducts.pending.type]: (state) => {
      state.isLoadingLowPriceOffersSection = true;
    },
    [getLowPriceOffersProducts.fulfilled.type]: (state, action) => {
      state.lowPriceOffersProducts = action.payload;
      state.isLoadingLowPriceOffersSection = false;
    },
    [getLowPriceOffersProducts.rejected.type]: (state) => {
      state.isLoadingLowPriceOffersSection = false;
    },
    [getCategoryProducts.pending.type]: (state) => {
      state.isLoadingCategoryProducts = true;
    },
    [getCategoryProducts.fulfilled.type]: (state, action) => {
      state.categoryProducts = action.payload;
      state.isLoadingCategoryProducts = false;
    },
    [getCategoryProducts.rejected.type]: (state) => {
      state.isLoadingCategoryProducts = false;
    },
    [getProductById.pending.type]: (state) => {
      state.isLoadingSelectedProduct = true;
    },
    [getProductById.fulfilled.type]: (state, action) => {
      state.selectedProduct = action.payload;
      state.isLoadingSelectedProduct = false;
    },
    [getProductById.rejected.type]: (state) => {
      state.isLoadingSelectedProduct = false;
    },
  },
});

/**
 * Actions
 */
export const { selectProduct } = productSlice.actions;

/**
 * Reducers
 */
export const productReducer = productSlice.reducer;
