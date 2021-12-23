export interface IStore {
  /**
   * The unique identifier for the item.
   * @type {string}
   */
  id: string;

  /**
   * The name identifies the item.
   * @type {string}
   */
  name: string;

  /**
   * Is a url to the store
   * @type {string}
   */
  url: string;

  /**
   * Is a host to the store
   * @type {string}
   */
  hosts: string;

  /**
   * Company name.
   * @type {string}
   */
  companyName: string;

  /**
   * Company name.
   * @type {string}
   */
  companyAddress: string;

  /**
   * Company phone number.
   * @type {string}
   */
  companyPhoneNumber: string;
}
