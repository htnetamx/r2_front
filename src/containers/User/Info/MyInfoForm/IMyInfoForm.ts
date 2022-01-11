export interface IMyInfoFormProps {
  /**
   * The Customer's Name
   * @type {String}
   *
   * */
  name: string;

  /**
   * The Customer's Address
   * @type {String}
   *
   * */
  address: string;

  /**
   * The Customer's Phone number
   * @type {String}
   *
   * */
  phoneNumber: string;

  /**
   * The Customer's Store Name
   * @type {String}
   *
   * */
  storeName: string;

  /**
   * The Customer's Store URL
   * @type {String}
   *
   * */
  url: string;
}

export interface IPartialMyInfoFormProps {
  /**
   * The Customer's Name
   * @type {String}
   *
   * */
  name?: string;

  /**
   * The Customer's Address
   * @type {String}
   *
   * */
  address?: string;
}
