import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IOrderReviewContainerProps extends ICheckoutStepContainerProps {
  /**
   * The total net price of the items in the cart without discount.
   * @type {number}
   */
  totalNetPrice: number;
  /**
   * code from a coupon to get a discount
   * @type {string}
   */
  discountCoupon?: string;
}
