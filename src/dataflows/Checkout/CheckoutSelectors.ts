import { CheckoutWizardSteps } from "constants/checkoutConstants";
import { RootState } from "state/store";

/**
 * Selector to get the checkout panel state
 * @param {RootState} state the root state
 * @returns {boolean} true if it is open, false otherwise
 */
export const selectIsOpen = (state: RootState): boolean => state.checkout.isOpen;

/**
 * Selector to get the current step
 * @param {RootState} state the root state
 * @returns {CheckoutWizardSteps} the current step
 */
export const selectCurrentStep = (state: RootState): CheckoutWizardSteps =>
  state.checkout.currentStep;
