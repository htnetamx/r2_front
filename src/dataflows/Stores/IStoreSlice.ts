import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStore } from "./IStore";
import { IStoreState } from "./IStoreState";
import { getStoreByName } from "./StoreThunks";

const initialState: IStoreState = {
  store: [],
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
  extraReducers: {
    [getStoreByName.pending.type]: (state) => {
      state.isLoadingStore = true;
    },
    [getStoreByName.fulfilled.type]: (state, action) => {
      state.store = action.payload;
      state.isLoadingStore = false;
    },
  },
});

/**
 * Actions
 */
export const { selectStore } = storeSlice.actions;

/**
 * Reducers
 */
export const storeReducer = storeSlice.reducer;
