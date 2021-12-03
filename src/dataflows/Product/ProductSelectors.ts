import { RootState } from "state/store";

import { IProduct } from "./IProduct";

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
 * Selector to get the low price offers products.
 * @param {RootState} state the root state.
 * @returns {IProduct[]} the low price offers products.
 */
export const selectLowPriceOffersSectionProducts = (state: RootState): IProduct[] =>
  state.product.lowPriceOffersProducts;

/**
 * Selector to get the isLoadingLowPriceOffersSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingLowPriceOffersSection state
 */
export const selectIsLoadingLowPriceOffersSection = (state: RootState): boolean =>
  state.product.isLoadingLowPriceOffersSection;

/**
 * Selector to get the category products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the category products.
 */
export const selectCategoryProducts = (state: RootState): IProduct[] =>
  state.product.categoryProducts;

/**
 * Selector to get the isLoadingLowPriceOffersSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingLowPriceOffersSection state
 */
export const selectIsLoadingCategoryProducts = (state: RootState): boolean =>
  state.product.isLoadingCategoryProducts;
/**
 * Selector to get the selectedProduct state from the state.
 * @param {RootState} state the root state
 * @returns {IProduct} the selectedProduct state
 */
export const selectSelectedProduct = (state: RootState): IProduct | undefined =>
  state.product.selectedProduct;

/**
 * Selector to get the isLoadingSelectedProduct state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingSelectedProduct state
 */
export const selectIsLoadingSelectedProduct = (state: RootState): boolean =>
  state.product.isLoadingSelectedProduct;
