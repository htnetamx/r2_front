import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IAddressContainerProps {
  /**
   * The field errors form from react-hook-form
   * @type {FieldErrors}
   **/
  errors?: FieldErrors;

  /**
   * The register address field from react-hook-form
   * @type {UseFormRegister}
   **/
  register: UseFormRegister<{ address: string }>;
}
