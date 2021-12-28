import { DeepMap, FieldError, UseFormRegister, Control } from "react-hook-form";

import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";

export interface IPhoneNumberStepProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<IPhoneNumberFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ILogInStepFormValues>}
   */
  register: UseFormRegister<IPhoneNumberFormValues>;

  /**
   * The form control.
   * @type {Control<IPhoneNumberFormValues}
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  control: Control<IPhoneNumberFormValues, object>;
}
