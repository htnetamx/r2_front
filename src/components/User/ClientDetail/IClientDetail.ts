export interface IClientDetailProps {
  /**
   * The Customer's Name
   * @type {String}
   *
   * */
  name: string;

  /**
   * The Customer's Number of orders
   * @type {Number}
   *
   * */
  orders: number;

  /**
   * The Customer's last order date
   * @type {Date}
   *
   * */
  lastOrderDate: Date;

  /**
   * The Customer's Store URL
   * @type {String}
   *
   * */
  url: string;
}
