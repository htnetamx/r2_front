import { INameAndTermConditionsFormValues } from "dataflows/Checkout/NameAndTermConditions/INameAndTermConditionsFormValues";

import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface INameAndTermsConditionsContainerProps extends ICheckoutStepContainerProps {
  /**
   * The name and terms conditions form values
   * @type {INameAndTermsConditionsFormValues}
   **/
  nameAndTermConditionsFormValues?: INameAndTermConditionsFormValues;

  /**
   * The callback function to set the name and terms conditions form values
   * @type {(nameAndTermConditionsFormValues: INameAndTermsConditionsFormValues) => void}
   **/
  saveNameAndTermConditionsFormValues?: (
    nameAndTermConditionsFormValues: INameAndTermConditionsFormValues
  ) => void;
}
