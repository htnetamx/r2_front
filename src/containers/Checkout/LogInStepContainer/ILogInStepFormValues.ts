export interface ILogInStepFormValues {
  /**
   * User name
   * @type {string}
   */
  name: string;

  /**
   * User phone
   * @type {string}
   */
  phone: string;

  /**
   * Indicates if user agreed with terms and conditions
   * @type {boolean}
   **/
  isTermsAccepted: boolean;
}
