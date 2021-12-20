import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";

import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IPostalCodeContainerProps extends ICheckoutStepContainerProps {
  /**
   *  The postal code form values
   * @type {IPostalCodeFormValues}
   * */
  postalCodeFormValues?: IPostalCodeFormValues;
}
