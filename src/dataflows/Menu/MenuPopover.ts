import { createSlice } from "@reduxjs/toolkit";

import { IMenuState } from "./IMenuState";

const initialState: IMenuState = {
  isOpen: false,
};

const menuPopover = createSlice({
  name: "menu",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

/**
 * Actions
 */
export const { onClose, onOpen } = menuPopover.actions;

/**
 * Reducers
 */
export const menuReducer = menuPopover.reducer;
