import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";

import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IVerificationCodeContainerProps extends ICheckoutStepContainerProps {
  /**
   * The verification code form values
   * @type {IVerificationCodeFormValues}
   **/
  verificationCodeFormValues?: IVerificationCodeFormValues;
}
