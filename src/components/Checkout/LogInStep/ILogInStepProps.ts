import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

import { ILogInStepFormValues } from "dataflows/Checkout/LogInStep/ILogInStepFormValues";

export interface ILogInStepProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<ILogInStepFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ILogInStepFormValues>}
   */
  register: UseFormRegister<ILogInStepFormValues>;
}
