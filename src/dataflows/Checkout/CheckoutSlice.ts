import { CheckoutWizardSteps } from "constants/checkoutConstants";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICheckoutState } from "./ICheckoutState";

const initialState: ICheckoutState = {
  isOpen: false,
  currentStep: CheckoutWizardSteps.BASKET,
};

const categorySlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<CheckoutWizardSteps>) => {
      state.currentStep = action.payload;
    },
    moveToNextStep: (state) => {
      const nextStep = state.currentStep + 1;
      state.currentStep = nextStep;
    },
    moveToPreviousStep: (state) => {
      const previousStep = state.currentStep - 1;
      state.currentStep = previousStep;
    },
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
export const { setCurrentStep, moveToNextStep, moveToPreviousStep, onClose, onOpen } =
  categorySlice.actions;

/**
 * Reducers
 */

export const checkoutReducer = categorySlice.reducer;
