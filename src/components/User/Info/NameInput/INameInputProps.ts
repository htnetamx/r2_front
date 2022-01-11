import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

import { INameFormValues } from "dataflows/InfoForm/Name/INameFormValues";

export interface INameInputProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<INameFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ILogInStepFormValues>}
   */
  register: UseFormRegister<INameFormValues>;
}
