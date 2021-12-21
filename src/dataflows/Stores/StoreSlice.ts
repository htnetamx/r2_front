import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStore } from "./IStore";
import { IStoreState } from "./IStoreState";
// import {
//   getCategoryProducts,
//   getLowPriceOffersProducts,
//   getProductById,
//   getSalesSectionProducts,
// } from "./ProductThunks";

const initialState: IStoreState = {
  selectedStore: {
    id: "",
    name: "",
    url: "",
    hosts: "",
    companyName: "",
    companyAddress: "",
    companyPhoneNumber: "",
  },
  isLoadingStore: false,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    selectStore: (state, action: PayloadAction<IStore>) => {
      state.selectedStore = action.payload;
    },
  },
  // extraReducers: {
  //   [getSalesSectionProducts.pending.type]: (state) => {
  //     state.isLoadingSalesSection = true;
  //   },
  //   [getSalesSectionProducts.fulfilled.type]: (state, action) => {
  //     state.salesSectionProducts = action.payload;
  //     state.isLoadingSalesSection = false;
  //   },
  //   [getSalesSectionProducts.rejected.type]: (state) => {
  //     state.isLoadingSalesSection = false;
  //   },
  //   [getLowPriceOffersProducts.pending.type]: (state) => {
  //     state.isLoadingLowPriceOffersSection = true;
  //   },
  //   [getLowPriceOffersProducts.fulfilled.type]: (state, action) => {
  //     state.lowPriceOffersProducts = action.payload;
  //     state.isLoadingLowPriceOffersSection = false;
  //   },
  //   [getLowPriceOffersProducts.rejected.type]: (state) => {
  //     state.isLoadingLowPriceOffersSection = false;
  //   },
  //   [getCategoryProducts.pending.type]: (state) => {
  //     state.isLoadingCategoryProducts = true;
  //   },
  //   [getCategoryProducts.fulfilled.type]: (state, action) => {
  //     state.categoryProducts = action.payload;
  //     state.isLoadingCategoryProducts = false;
  //   },
  //   [getCategoryProducts.rejected.type]: (state) => {
  //     state.isLoadingCategoryProducts = false;
  //   },
  //   [getProductById.pending.type]: (state) => {
  //     state.isLoadingSelectedProduct = true;
  //   },
  //   [getProductById.fulfilled.type]: (state, action) => {
  //     state.selectedProduct = action.payload;
  //     state.isLoadingSelectedProduct = false;
  //   },
  //   [getProductById.rejected.type]: (state) => {
  //     state.isLoadingSelectedProduct = false;
  //   },
  // },
});

/**
 * Actions
 */
export const { selectStore } = storeSlice.actions;

/**
 * Reducers
 */
export const storeReducer = storeSlice.reducer;
