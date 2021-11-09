export interface IFieldProps {
  /**
   * The input field's label.
   * @field
   **/
  label: string;

  /**
   * The field error message.
   * @field
   */
  error?: string;

  /**
   * indicates if the field is required.
   * @field
   **/
  isRequired?: boolean;

  /**
   * The field's tooltip.
   * @field
   **/
  tooltip?: string;

  /**
   * Disable chrome auto complete. (workaround for chrome)
   * @field
   */
  disabledAutoComplete?: boolean;
}
