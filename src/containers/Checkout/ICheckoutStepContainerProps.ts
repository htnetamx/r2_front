import { CheckoutWizardSteps } from "constants/checkoutConstants";

export interface ICheckoutStepContainerProps {
  /**
   * Validation list for all steps
   * @type {Map<CheckoutWizardSteps, boolean>}
   */
  validationList?: Map<CheckoutWizardSteps, boolean>;

  /**
   * The callback function to validate the current step
   * @type {(validationList: Map<CheckoutWizardSteps, boolean>) => void}
   **/
  setValidationList?: (validationList: Map<CheckoutWizardSteps, boolean>) => void;

  /**
   * The current step
   * @type {CheckoutWizardSteps}
   **/
  currentStep: CheckoutWizardSteps;

  /**
   * Indicates if the user is clicking on the next button
   * @type {boolean}
   **/
  isClickingNextButton: boolean;

  /**
   * The callback function to set the isClickingNextButton
   * @type {(isClickingNextButton: boolean) => void}
   **/
  setIsClickingNextButton: (isClickingNextButton: boolean) => void;

  /**
   * Load the next step
   * @type {() => void}
   **/
  loadNextStep: () => void;
}
