import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

import { IAddressFormValues } from "dataflows/InfoForm/Address/IAddressFormValues";

export interface IAddressInputProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<IAddressFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ILogInStepFormValues>}
   */
  register: UseFormRegister<IAddressFormValues>;

  /**
   * The input current value.
   * @type {String}
   */
  // currentValue: string | undefined;
}
