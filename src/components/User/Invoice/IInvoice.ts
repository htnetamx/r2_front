export interface IInvoiceProps {
  /**
   * The Orders's Id
   * @type {Number}
   *
   * */
  orderId: number;

  /**
   * The Customer's Name
   * @type {String}
   *
   * */
  name: string;

  /**
   * The Order's delivery date
   * @type {Date}
   *
   * */
  deliveryDate: Date;
}
