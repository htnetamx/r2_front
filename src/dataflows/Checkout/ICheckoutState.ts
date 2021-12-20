import { CheckoutWizardSteps } from "constants/checkoutConstants";

export interface ICheckoutState {
  /**
   * The current step in the checkout process.
   * @type {CheckoutWizardSteps}
   */
  currentStep: CheckoutWizardSteps;

  /**
   * Indicates whether the checkout panel is open.
   * @type {boolean}
   **/
  isOpen: boolean;
}
