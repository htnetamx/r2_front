import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStoreState } from "./IStoreState";
import { getStoreByName } from "./StoreThunks";

const initialState: IStoreState = {
  store: undefined,
  isLoadingStore: false,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
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
 * Reducers
 */
export const storeReducer = storeSlice.reducer;
