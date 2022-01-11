import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface INameContainerProps {
  /**
   * The field errors form from react-hook-form
   * @type {FieldErrors}
   **/
  errors?: FieldErrors;

  /**
   * The register name field from react-hook-form
   * @type {UseFormRegister}
   **/
  register: UseFormRegister<{ name: string }>;
}
