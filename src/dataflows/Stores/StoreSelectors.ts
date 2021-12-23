import { RootState } from "state/store";

import { IStore } from "./IStore";

/**
 * Selector to get the sales products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the sales products.
 */
export const selectStore = (state: RootState): IStore | undefined => state?.store?.store;

/**
 * Selector to get the isLoadingSalesSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingSalesSection state
 */
export const selectIsLoadingStore = (state: RootState): boolean => state?.store?.isLoadingStore;
