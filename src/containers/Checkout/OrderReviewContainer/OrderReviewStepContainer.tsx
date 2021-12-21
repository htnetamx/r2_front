import { useEffect, ReactElement } from "react";

import { IOrderReviewProps } from "components/Checkout/OrderReview/IOrderReviewProps";
import { OrderReview } from "components/Checkout/OrderReview/OrderReview";
import { useIsMounted } from "hooks/useIsMounted";

import { IOrderReviewContainerProps } from "./IOrderReviewContainerProps";

/**
 * The OrderReviewStepContainer component.
 * @param {IOrderReviewContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const OrderReviewStepContainer = (props: IOrderReviewContainerProps): ReactElement => {
  const {
    totalNetPrice,
    discountCoupon,
    isClickingNextButton,
    setIsClickingNextButton,
    loadNextStep,
  } = props;

  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isMounted) {
      setIsClickingNextButton && setIsClickingNextButton(false);
      loadNextStep && loadNextStep();
    }
  }, [isClickingNextButton]);

  const orderReviewProps: IOrderReviewProps = {
    totalNetPrice,
    discountCoupon,
  };

  return <OrderReview {...orderReviewProps} />;
};
